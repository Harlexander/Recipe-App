import react, { useEffect, useState } from 'react'
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
            <li style={css.inline}>Calories : <span>{recipeItem.calories} </span></li>
            <li style={css.inline}>Cautions : <span>{recipeItem.cautions[0]}</span></li>
            <li style={css.inline}>Total weight : <span>{recipeItem.totalWeight}</span></li>
            <li style={css.inline}>Source : <span>{recipeItem.source}</span></li>
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