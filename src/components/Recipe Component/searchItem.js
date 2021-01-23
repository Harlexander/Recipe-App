import react, {Component} from "react"
import { Link, useRouteMatch, useParams, Route } from "react-router-dom";
import Button from "./../button.js"

const SearchItem = ({array}) => {
    const {url} = useRouteMatch()
    const newLabel = array.label.replace(/ /g,"-")
    return (
        <div className="row mt-4 border-bottom pb-3">
        <div className="col-md-5">
            <img src={array.image} className="img-thumbnail"/>
        </div>
            <div className="col-md-7">
            <p style={headText}><Link to={`${url}/${newLabel}`}>{array.label}</Link></p>
        <div style={desc}>
            <p className="d-inline mr-1 font-weight-light"><span className="text-success">Recipe Type :  </span> Chicken</p> 
            <p className="d-inline mr-1  font-weight-light"><span className="text-success"> Calories : </span> {array.calories} </p> 
        </div>
        <br />
        <p style={desc}>{array.label} is a {array.cuisineType} Meal, which is served mostly at {array.mealType} also {array.healthLabels[0]} , {array.healthLabels[1]} and {array.healthLabels[2]}...</p>
        <Link to={`${url}/${newLabel}`}><Button content={"view recipe"} classes={"btn-outline-primary btn"}/></Link>
        </div>
        </div>
    )
}



const desc ={
    fontSize : "15px"
}
const headText = {
        fontSize : "20px"
    }

export default SearchItem