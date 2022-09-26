import "./BrowseRecipe.scss";
import { useState, useEffect } from "react";
import RecipeCards from "../../components/RecipeCards/RecipeCards";
  // const API_KEY = process.env.REACT_APP_API_KEY;
  const API_KEY = "d2a4954eafec41c7ad5d79cb64631897";

export default function BrowseRecipe() {
  const [recipeValue, setRecipeValue] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecipeValue(e.target.value);
  }

  function getSearchData() {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${recipeValue}&apiKey=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      setRecipeValue(data)
      console.log(recipeValue)
    })
    .catch(() => {
      console.log("error")
    })
  }
  useEffect(() => {
    getSearchData();
    
  },[])

  return (
    <section className="recipe">
      <h2 className="recipe__heading">Browse Recipes</h2>
      <div className="recipe__container">
      <form onSubmit={handleSubmit} className="recipe__search-form">
        <div className="recipe__input-wrapper">
          <input
            className="recipe__input"
            name="search"
            onChange={handleSubmit}
            placeholder="Type to search..."/>
        </div>
        <div className="recipe__cta-wrapper">
          <button onClick={getSearchData}className="recipe__cta" type="submit">
            Search
          </button>
        </div>
      </form>
      </div>
      {recipeValue &&
      recipeValue.map &&
      recipeValue.map((recipe) => {
        <RecipeCards recipe={recipe} key={recipe.id} />
        console.log(recipe)
      }) }
    </section>
  );
}
