import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <HamburgerMenu />
        <div className="header__container">
            <img className="header__logo-link" src="" alt="" />
            <div className="header__links">
                <span></span>
                <span></span>
                <span></span>

            </div>

        </div>
    </header>
  )
}