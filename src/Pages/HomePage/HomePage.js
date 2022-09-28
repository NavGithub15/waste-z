
import Cards from "../../components/Cards/Cards";
import Hero from "../../components/Hero/Hero";
import Statistics from "../../components/Statistics/Statistics";
import Footer from '../../components/Footer/Footer';
import "./HomePage.scss";

export default function HomePage() {
  return (
    <>
    <Hero />
    <Statistics />
    <Cards />
    <Footer />
    </>
  )
}