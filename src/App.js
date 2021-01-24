import React, {useEffect, useState} from  'react';
import Header from './components/header.js'
import Home from './components/home component/home.js'
import Contact from './components/contact component/contact.js'
import SearchPage from './components/Recipe Component/searchpage.js'
import CreateRecipe from './components/create-recipe component/create-recipe-page.js'
import Registerform from './components/create-recipe component/forms/registerform'
import Loginform from './components/create-recipe component/forms/loginform'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ErrorPage from './components/error 404/errorpage'
import './animation.css';
import { RedirectContext, Usercontext } from './context/context';
import {auth, firestore} from './components/create-recipe component/firebase/firebase'
import Profile from './components/Profile/profile.js';
import Scrolltotop from './scrolltotop.js';

const App = () => {
  const api_id = "3e41f9cb";
  const api_keys = "86b717fffa047f1e686269092a39f6db";
  const recentSearch = localStorage.getItem("search") || "apples"

  const [recipes, setRecipes ] = useState([])
  const [customRecipe, setCustomRecipe ] = useState("")
  const [search, setSearch ] = useState(recentSearch)
  const [spinner, setSpinner ] = useState(false);
  const [user, setUser ] = useState({
    user : null,
    loading : true
  });

    const getRecipe = async () => {
      try {
            const request = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${api_id}&app_key=${api_keys}`)
            const response = await request.json()
            const data = response.hits
            setRecipes(data);
            setSpinner(false);
            localStorage.setItem("recipe", JSON.stringify(data));
            firestoreResult()
      } catch (error) {
            console.log(`error presnt : ${error}`);
            // alert("Server failure, Try Again After Some Minutes")
      }
  } 
  
  const firestoreResult = () => {
    firestore.collection('recipes').where('state.title', '>=', search)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
         const data = Object.keys(doc.data()).map((key) => (doc.data()[key]))
          const list = [].push(data)
            setCustomRecipe(list);
            console.log(doc.data())
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  }
  const handlesearch = (event, history) => {
      event.preventDefault()
      const value = event.target.parentElement.parentElement.parentElement.search.value
      setSearch(value);
      setSpinner(true)
      localStorage.setItem("search", value)
      history.push("/search")
  }

  const updateSearch = (value) => {
      setSearch(value.toLowerCase());
      localStorage.setItem("search", value)
      setSpinner(true)
  }
  const checkStatus = () => {
    auth.onAuthStateChanged((user) => {
        if(user){
            setUser({
              user : user,
              loading : false
            })
        }else{
          setUser({
            user : null,
            loading : false
          })
        }
    })
}
  useEffect(() => {getRecipe()}, [search]);
  useEffect(()=> checkStatus(), [user.user])
  return(
    <Usercontext.Provider value={user}>
      <RedirectContext.Provider value={updateSearch}>
      <Router>
        <Scrolltotop>
        <Header onClick={handlesearch} text={updateSearch} user={user.user} />
      <Switch>
        <Route exact path="/" >
          <Home text={updateSearch}/>
        </Route>
        <Route  path="/search">
          <SearchPage search={search} recipes={recipes} spinner={spinner} customRecipe={customRecipe}/>
        </Route>
        <Route  path="/contact" >
          <Contact />
        </Route>
        <Route  path="/create-recipe" >
          <CreateRecipe />
        </Route>
        <Route  path="/profile" >
          <Profile />
        </Route>
        <Route  path={`/register`}>
               <Registerform/>  
        </Route>
        <Route  path={`/login`}>
               <Loginform/>  
        </Route>
        
        <Route render={({history}) => <ErrorPage history={history}/>} />
      </Switch>
        </Scrolltotop>
    </Router>
      </RedirectContext.Provider>
      
    </Usercontext.Provider>
  
    
  )
}


export default App;
