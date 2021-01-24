import React  from  'react';
import Logo  from  '../images/LogoMakr-4NpRxA.png';
import TopHeader from './top-header/top-header'
import {  BrowserRouter as Router, Link} from "react-router-dom";
import { auth } from './create-recipe component/firebase/firebase';

const Header = ({onClick, text, user}) => {
  return(
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={img}>
      <img src={Logo} style={logo} className="m-auto navbar-brand"/>
      <button className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse w-50" id="navbarText">
        <ul className="navbar-nav mr-auto ml-5">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
          <Link to="/search" className="nav-link">Search Recipes</Link>
          </li>
          <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact-us</Link>
          </li>
          <li className="nav-item">
          <Link to="/create-recipe" className="nav-link">Create Recipes</Link>
          </li>
          <li className="nav-item">
          <Link to="/profile" className="nav-link">Profile</Link>
          </li>
          <li className="nav-item">
          <button onClick={() => {auth.signOut()}}  className="nav-link border-0 bg-light">{user && "Sign Out"}</button>
          </li>
        </ul>
      </div>
    </nav>
    <TopHeader onClick={onClick} text={text}/>
    </>
  )
}

const logo = {
  height : "80px",
}

const img ={
  background : "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZSGmOlFpCA9hMl5tPugf8eVzQnwH5KcE58Q&usqp=CAU) no-repeat right"
}
export default Header