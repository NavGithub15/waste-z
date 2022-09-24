import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero-wrapper">
        <div className="hero__layer"></div>
        <div className="hero">
            <h1 className="hero__title">Waste <strong>Z</strong></h1>
            <h3 className="hero__subtitle">Smarter way to track your food in the kitchen</h3>
            <p className="hero__text">Prevent food waste before it happens</p>
        </div>

    </section>
  )
}