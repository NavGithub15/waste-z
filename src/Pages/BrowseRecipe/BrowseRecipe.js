import "./BrowseRecipe.scss";
import { useState, useEffect } from "react";
import RecipeCards from "../../components/RecipeCards/RecipeCards";
import axios from "axios";
// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = "d78c1f52952942dbb33dc88259181dad";

export default function BrowseRecipe() {
  const [recipeValue, setRecipeValue] = useState([]);
  // const [recipeArrays,setRecipeArrays]=useState([])
  // const [searchText,setSearchText]=useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // getSearchData();
    axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${e.target.search.value}&number=10&apiKey=${API_KEY}`)
    
    .then((response) => {
      setRecipeValue(response.data.results)
      console.log(response.data.results)
 
    })
    .catch(() => {
      console.log("error")
    })
  }

// const handleChange = (event) =>{
// setSearchText(event.target.value)
// }

 

// if(!recipeValue){
//   return <h2>loading.....</h2>
// } 

  return (
    <section className="recipe">
      <div className="recipe__container">
        <div className="recipe__overlay"></div>
        <div className="recipe__search-wrapper">
          <h2 className="recipe__heading">Browse Recipes</h2>
          <form onSubmit={handleSubmit} className="recipe__search-form">
            <div className="recipe__input-wrapper">
              <input
                className="recipe__input"
                name="search"
                // onChange={(event)=>handleChange(event)}}
                placeholder="Type to search..." 
                />
            </div>
            <div className="recipe__cta-wrapper">
              <button className="recipe__cta" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>

      </div>
      {recipeValue && recipeValue.map((recipe) => {
       return <RecipeCards recipe={recipe} key={recipe.id} />
      }) }
    </section>
  );
}
