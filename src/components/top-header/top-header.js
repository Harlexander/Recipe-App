import SearchBar from "./searchbar"
import { Link } from "react-router-dom";

const TopHeader = ({onClick, text}) => {
    return(
        <>
        <div className="jumbotron pt-4 px-2 mb-0 top-menu">
                <div className="row px-5 mb-5 mb-md-2">
                <h4  className=" d-md-inline d-none font-weight-light">Recipe Search</h4>
            <SearchBar onClick={(event, history) => onClick(event, history)} classes={"col-md-3"}/>
                <span style={slash} className="mx-4 d-md-inline d-none"></span>
            <div className="col-md-5 p-2">
                <span>Recipe Types : </span>
                <Link to="/search" onClick={() => text("Chicken")}> Chicken, </Link>
                <Link to="/search" onClick={() => text("Rice")}> Rice, </Link>
                <Link to="/search" onClick={() => text("Vegetables")}> Vegetables, </Link>
                <Link to="/search" onClick={() => text("Sushi")}> Sushi, </Link>
                <Link to="/search" onClick={() => text("okro")}> Okro, </Link>
                <Link to="/search" onClick={() => text("beans")}> Beans, </Link>
            </div>
               </div>
           </div>
        </>
    )
} 

const slash = {
    width: "1px",
    height: "40px",
    background: "grey",
    position: "relative",
}

export default TopHeader