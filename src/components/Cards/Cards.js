import "./Cards.scss";
import blueberry from "../../styles/assets/images/Blueberry.jpeg";
import broccoli from "../../styles/assets/images/broccoli.jpeg";
import dishImage from "../../styles/assets/images/dish.jpeg";
import strawberry from "../../styles/assets/images/strawberry.jpeg";
import { Link } from "react-router-dom";

export default function Cards() {
    return (

        <article className="article">
            <h2 className="article__heading">Explore</h2>
            <div className="article__container">
                <div className="article__card">
                    <div className="article__overlay"></div>
                    <img className="article__card-image" src={strawberry} alt="strawberry" loading="lazy" />
                    <div className="article__text-wrapper">
                        <Link to="/myStorage" className="article__text">Track</Link>
                    </div>
                </div>
                <div className="article__card">
                <div className="article__overlay"></div>
                    <img className="article__card-image" src={dishImage} alt="dish prep" loading="lazy" />
                    <div className="article__text-wrapper">
                        <Link to="/browseRecipe" className="article__text">Browse Recipes</Link>
                    </div>
                </div>
                <div className="article__card">
                <div className="article__overlay"></div>
                    <img className="article__card-image" src={blueberry} alt="spoiled apple" loading="lazy" />
                    <div className="article__text-wrapper">
                        <Link to="/myStorage" className="article__text">Storage</Link>
                    </div>
                </div>
                <div className="article__card">
                <div className="article__overlay"></div>
                    <img className="article__card-image" src={broccoli} alt="broccoli" loading="lazy" />
                    <div className="article__text-wrapper">
                        <Link to="/donate" className="article__text">Donate</Link>
                    </div>
                </div>
            </div>
        </article>
    );
}
