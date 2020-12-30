import react, {createContext, useState, useEffect} from 'react';


export const RecipeContext = createContext();

export const RecipeContainer = props => {
    // const api_id = "3e41f9cb";
    // const api_keys = "86b717fffa047f1e686269092a39f6db";

    // const [recipes, setRecipes ] = useState([])
    // const [search, setSearch ] = useState("burger")
  

    //   const getRecipe = async () => {
    //   const request = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${api_id}&app_key=${api_keys}`)
    //   const response = await request.json()
    //   const data = response.hits
    //   setRecipes(data);
    //   console.log(data)
    // }
    // useEffect(() => {getRecipe()}, [search]);
    // console.log(search)

    const array = [
        {recipe: {
            calories : 232,
            image : "https://www.edamam.com/web-img/05f/05f6b1fbd22e92e2f7ba32026abe1714.jpg",
            label : "peachy specals"
        }},
        {recipe: {
            calories : 232,
            image : "https://www.edamam.com/web-img/05f/05f6b1fbd22e92e2f7ba32026abe1714.jpg",
            label : "funmi specals"
        }},
        {recipe: {
            calories : 232,
            image : "https://www.edamam.com/web-img/05f/05f6b1fbd22e92e2f7ba32026abe1714.jpg",
            label : "femi specals"
        }},
        {recipe: {
            calories : 232,
            image : "https://www.edamam.com/web-img/05f/05f6b1fbd22e92e2f7ba32026abe1714.jpg",
            label : "favitop specals"
        }},
    ]
  

    return(
        <RecipeContext.Provider value={array}>
            {props.children}
        </RecipeContext.Provider>
    )
}