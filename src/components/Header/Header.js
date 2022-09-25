import "./Header.scss";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth"

export default function Header() {

  const [currentUser] = useAuthState(auth)

  return (

    <header className="header">
      <HamburgerMenu />
      <div className="header__container">
        <Link to="/" className="header__logo-link">Waste <strong>Z</strong></Link>
        <nav className="header__links-container">
          <NavLink to="/" end className="header__link">Home</NavLink>
          {!currentUser ? (<NavLink to="/signIn" className="header__link">My Storage</NavLink>) :
            (<NavLink to="/myStorage" className="header__link">My Storage</NavLink>
            )}
          {!currentUser ? (<NavLink className="header__link" to="/signUp">Get Started</NavLink>) :
            (<NavLink to="/recipe" className="header__link">Recipes</NavLink>
            )}
          <NavLink to="/donate" className="header__link">Donate</NavLink>
        </nav>
      </div>
    </header>
  )
};