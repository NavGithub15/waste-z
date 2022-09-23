import "./HamburgerMenu.scss";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth"

export default function HamburgerMenu() {

  const [currentUser] = useAuthState (auth)

  return (
    <div className="menu">
      <div className="menu__toggle">
        <input className="menu__input" type="checkbox" />
        <span className="menu__burger"></span>
        <span className="menu__burger"></span>
        <span className="menu__burger"></span>
        <ul className="menu__lists">
          <div className="menu__links-container">
          <NavLink to="/" className="menu__link">Home</NavLink>
          {!currentUser ? (<NavLink to="/signIn" className="menu__link">My Storage</NavLink>) : 
                  (<NavLink to="/myStorage" className="menu__link">My Storage</NavLink>
                  )}
            <NavLink className="menu__link" to="/signUp">Get Started</NavLink>
            <NavLink className="menu__link" to="/donate">Donate</NavLink>
          </div>
        </ul>
      </div>
    </div>
  );
}
