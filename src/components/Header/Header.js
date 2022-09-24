import "./Header.scss";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { Link, NavLink} from "react-router-dom";
import { auth } from "../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth"

export default function Header() {

  const [currentUser] = useAuthState (auth)

  return(

    <header className="header">
      <HamburgerMenu />
        <div className="header__container">
            <Link to="/" className="header__logo-link">Waste <strong>Z</strong></Link>
              <nav className="header__links-container">
                  <NavLink to="/" end className="header__link">Home</NavLink>
                  {!currentUser ? (<NavLink to="/signIn" className="header__link">My Storage</NavLink>) : 
                  (<NavLink to="/myStorage" className="header__link">My Storage</NavLink>
                  )}
                  <NavLink to="/signUp" className="header__link">Get Started</NavLink>
              </nav>
        </div>
    </header>
  )
};