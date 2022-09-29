import "./BrowseRecipe.scss";
import { useState } from "react";
import RecipeCards from "../../components/RecipeCards/RecipeCards";
import axios from "axios";

// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = "5841b4a82bda4f1d8ca6fa5b23d38462";

export default function BrowseRecipe() {
  const [recipeValue, setRecipeValue] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${e.target.search.value}`)

      .then((response) => {
        setRecipeValue(response.data.results)
      })
      .catch(() => {
        console.log("error")
      })
  }

  if (!recipeValue) {
    return <h2>loading.....</h2>
  }
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
      <div className="recipe__results">
      <h2 className="recipe__results-heading">Results</h2>
        <div className="recipe__results-container">
        {recipeValue && recipeValue.map((recipe) => {
          return <RecipeCards recipe={recipe} key={recipe.id} />
        })}
      </div>
      </div>
    </section>
  );
}
