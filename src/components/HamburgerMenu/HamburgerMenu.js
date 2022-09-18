import "./HamburgerMenu.scss"
import { NavLink } from "react-router-dom";

export default function HamburgerMenu() {
  return (
    <div>
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul className="menu" id="menu">
          <div className="icon-container">
            <div className="icon"></div>
          </div>
        </ul>
      </div>
    </div>
  );
}
