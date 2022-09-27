// import "./RecipeCards.scss";
// import { useState, useEffect } from "react";
//  // const API_KEY = process.env.REACT_APP_API_KEY;
//  const API_KEY = "d2a4954eafec41c7ad5d79cb64631897";

// export default function RecipeCards({ recipe }) {
//     console.log(recipe)
//     const [imageUrl, setImageUrl] = useState("")

//     useEffect(() => {
//         fetch(`https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${API_KEY}&includeNutrition=false`)
//             .then((response) => response.json())
//             .then((data) => {
//                 setImageUrl(data.image);
//             })
//             .catch(() => {
//                 console.log('error');
//             });
//     }, [recipe.id]);

//     if (recipe.length === 0) {
//         return <h2>Loading...........</h2>;
//       }

//     return (
//         <>
//             <div className="recipe__card card">
//                 <h3>{recipe.title}</h3>
//                 <img src={recipe.image} alt="food" />
//                 <a href={recipe.sourceUrl}>Go to Recipe</a>
//             </div>
//         </>
//     )
// }