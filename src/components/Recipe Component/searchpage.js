import {useRouteMatch, Route } from "react-router-dom";
import Footer from './../home component/footer/footer'
import Spinner from './../spinner/spinner'
import SearchItem from "./searchItem.js"
import SearchBar from "./../top-header/searchbar.js"
import Customresult from './customfiles/customresult'
import Aside from './aside.js'
import NestedRoute from "./nestedRoute";
const Searchpage = ({search, recipes, spinner})=> {

    const store = (JSON.parse(localStorage.getItem("recipe")))
    const recipe = !recipes ? store : recipes

        return(
            <>
            <SearchRes recipes={recipe} search = {search} spinner={spinner}/>
            <Footer />
            </>
        )
}
const SearchRes= ({recipes, search, spinner}) => {
    let {path} = useRouteMatch()
    const local = JSON.parse(localStorage.getItem('recipe'))
    const mapped = recipes === undefined ? local : recipes
    return(
        <>
            <div className="container bg-light py-4 shadow mx-auto route">
                <div className="col-md-8 mb-5">
                <Route exact path='/search'>
                    <Customresult value={search}/>
                    <h3 className="p-3 border-bottom">Search Results For <span className="text-primary">{search}</span> </h3>
                    {spinner ? (<Spinner />) : (mapped.map(({recipe}, index) => (
                    <SearchItem array = {recipe} key={index}/> 
                    )))}
                    
                </Route>
                <Route path={`${path}/:labelid`}>
                         <NestedRoute  recipes = {mapped}/>
                </Route>
                </div>
                
                <div  className="col-md-4 p-0">
                    <SearchBar />
                    <Aside />
                </div>
            </div>
        </>
    )
}

export default Searchpage