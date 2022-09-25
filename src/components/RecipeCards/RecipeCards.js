import "./RecipeCards.scss";

export default function RecipeCards({ recipe }) {
    console.log(recipe)
    // console.log(searchValue.id)

    // useEffect(() => {
    //     fetch(`https://api.spoonacular.com/recipes/${searchValue.id}/information?apiKey=${API_KEY}&includeNutrition=false`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setImageUrl(data.image);
    //             console.log(`https://api.spoonacular.com/recipes/${searchValue.id}/information?apiKey=${API_KEY}&includeNutrition=false`)
    //         })
    //         .catch(() => {
    //             console.log('error');
    //         });
    // }, [searchValue.id]);

    if (recipe.length === 0) {
        return <h2>Loading...........</h2>;
      }

    return (
        <>
            <div className="recipe__card card">
                <h3>{recipe.title}</h3>
                <img src={recipe.image} alt="" />
            </div>
        </>
    )
}