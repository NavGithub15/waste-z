import "./Statistics.scss"
import statsImage from "../../styles/assets/images/chart.png"


export default function Statistics() {
  return (
    <section className="statistics">
        <h2 className="statistics__heading">Did you know ?</h2>
        <div className="statistics__container">
            <div className="statistics__context-wrapper">
                <h3 className="statistics__sub-heading">In 2022 the National Zero Waste Council conducted research on household food waste in Canada, and the results were astonishing.</h3>
                <p className="statistics__text">63% of the food Canadians throw away could have been eaten.</p>
                <a className="statistics__link"
                href="https://lovefoodhatewaste.ca/about/food-waste/#:~:text=In%202022%20the%20National%20Zero,more%20than%20%241%2C300%20per%20year!"
                target="_blank" rel="noreferrer noopener">Read More</a>
            </div>
            <div className="statistics__image-wrapper">
                <img className="statistics__image" src={statsImage} alt="stats chart" />
            </div>
        </div>
    </section>
  )
}