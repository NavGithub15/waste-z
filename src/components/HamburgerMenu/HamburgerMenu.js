import "./HamburgerMenu.scss";
import { NavLink } from "react-router-dom";

export default function HamburgerMenu() {
  return (
    <div className="menu">
      <div className="menu__toggle">
        <input className="menu__input" type="checkbox" />
        <span className="menu__burger"></span>
        <span className="menu__burger"></span>
        <span className="menu__burger"></span>
        <ul className="menu__lists">
          <div className="menu__links-container">
            <NavLink className="menu__link" to="/signIn">Inventory</NavLink>
            <NavLink className="menu__link" to="/signUp">Get Started</NavLink>
            <NavLink className="menu__link" to="/donate">Donate</NavLink>
          </div>
        </ul>
      </div>
    </div>
  );
}
