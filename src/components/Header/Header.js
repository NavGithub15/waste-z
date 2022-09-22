import "./Header.scss";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { Link, NavLink} from "react-router-dom";
import { useState } from "react";

export default function Header() {

  const [active, setActive] = useState(false)

  function handleActive() {
    setActive(!active);
  }


  return(

    <header className="header">
      <HamburgerMenu />
        <div className="header__container">
            <Link to="/" className="header__logo-link">Waste <strong>Z</strong></Link>
              <nav className="header__links-container">
                  <NavLink to="/" onClick={handleActive} className={active ? "header__link--active" : "header__link"}>Home</NavLink>
                  <NavLink to="/signIn" className={active ? "header__link--active" : "header__link"}>My Storage</NavLink>
                  <NavLink to="/signUp" className={active ? "header__link--active" : "header__link"}>Get Started</NavLink>
              </nav>
        </div>
    </header>
  )
};