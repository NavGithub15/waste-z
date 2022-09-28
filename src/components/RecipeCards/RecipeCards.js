import "./RecipeCards.scss";
import { useState, useEffect } from "react";
import axios from "axios";

 const API_KEY = process.env.REACT_APP_API_KEY;

export default function RecipeCards({ recipe }) {
    const [details, setDetails] = useState({})


    useEffect(() => {
        console.log("triggered")
        axios.get(`https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${API_KEY}&includeNutrition=false`)

            .then((response) => {
                setDetails(response.data);
            })
            .catch(() => {
                console.log('error');
            });
    }, [details.id]);

    const handleClick = () => {
        window.location.assign(details.sourceUrl)
    }
    console.log(handleClick())

    if (recipe.length === 0) {
        return <h2>loading.....</h2>;
      }
    

    return (
        <>
            <div className="results" onClick={handleClick}>
                <div className="results__container">
                    <h3 className="results__title">{details.title}</h3>
                </div>
                <div className="results__image-wrapper">
                    <img className="results__image" src={details.image} alt="food" />
                </div>
                <div className="results__info-wrapper">
                    <p className="results__info" dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
                </div>
                <div className="results__link-wrapper">
                    <a className="results__link" href={details.sourceUrl} target="_blank" rel="noreferrer noopener">Learn More</a>
                </div>
            </div>
        </>
    )
}