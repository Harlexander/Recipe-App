import { useEffect, useState } from 'react'
import quote from './../../images/men-cooking-real-men-wear-aprons..jpg'
import Ingredients from './ingredients'
import Nutrient from './nutrient'
import Button from '../button'
import { useParams } from 'react-router-dom'

const Content = ({recipes}) => {
    let {labelid} = useParams()
    let id = labelid.replace(/-/g," ")
    const [recipeItem, setRecipeItem] = useState(null)

    const getItem = () => {
        if(recipes.length > 1){
        const value = recipes.find(({recipe}) => recipe.label == id)
        const {recipe} = value || []
        setRecipeItem(recipe)
        }  
    }
    
    useEffect(() => {getItem()}, [recipes])
    return(
        <>
        {recipeItem &&  
        <div>
             <h3>{recipeItem.label}</h3>
        <img src={recipeItem.image} width="100%" className="img-thumbnail mb-3"/>
        <ul className="list-inline list-unstyled text-primary bit-info">
            <li style={css.inline}>Calories : <span>{Math.floor(recipeItem.calories)} </span></li>
            <li class="text-capitalize" style={css.inline}>Cuisine : <span>{recipeItem.cuisineType[0]}</span></li>
            <li style={css.inline}>Total weight : <span>{Math.floor(recipeItem.totalWeight)}</span></li>
            <li class="text-capitalize" style={css.inline}>Dish Type : <span>{recipeItem.dishType[0]}</span></li>
        </ul>
        <div className="jumbotron bg-success py-2 text-white">
            <h3>Nutritional Value</h3>
            <p>This information is per Total Nutrient</p>
            <Nutrient nutrient={recipeItem.totalNutrients}/>
        </div>

        <div className="border-top font-weight-light">
            <p style={css.ingre} >Ingredients</p>
            <Ingredients recipe={recipeItem.ingredients}/>
        </div>
        <section className="container font-weight-bold">
            <aside className="row">
            <span className=" col-5 jumbotron bordered m-1 p-auto">
                Yields : {recipeItem.yield}
            </span>
            <span className=" col-5 jumbotron m-1 p-auto">
                Total Time : {recipeItem.totalTime}m
            </span>
         </aside>
         <aside className="row">
             <span className=" col-5 jumbotron m-1 p-auto">
               Weight : {Math.floor(recipeItem.totalWeight)}g
            </span>
            <span className=" col-5 jumbotron text-capitalized m-1 p-auto">
                Cuisine : {recipeItem.cuisineType}
            </span> 
         </aside>
        </section>
        <div className="py-3">
            <p>The recipes might not be enough to make a meal so Click here to view full Process in preparing "<b>{recipeItem.label}</b>"</p>
        <a href={recipeItem.url}><Button content={"View Process"} classes={"btn-outline-success btn w-100 btn-lg"}/></a>
        
        </div>

        <img src={quote}  width="100%" height="400px"/>
        </div>}
       
    </>
    )
}

const css = {
    inline : {
        display : "inline"
    },
    ingre : {
        fontSize : "30px",
        color : "blue"
    }
}
export default Content