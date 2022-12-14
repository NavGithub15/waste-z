import "./HamburgerMenu.scss";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth"
import { slide as Menu } from 'react-burger-menu';

export default function HamburgerMenu({ styles }) {

  const [currentUser] = useAuthState(auth)

  return (
    <Menu right>
      <NavLink to="/" className="menu__link" end>Home</NavLink>
      {!currentUser ? (<NavLink to="/signIn" className="menu__link">My Storage</NavLink>) :
        (<NavLink to="/myStorage" className="menu__link">My Storage</NavLink>
        )}
      {!currentUser ? (<NavLink className="menu__link" to="/signUp">Get Started</NavLink>) :
        (<NavLink to="/browseRecipe" className="menu__link">Recipes</NavLink>
        )}
      {/* <NavLink className="menu__link" to="/storage">Storage</NavLink> */}
      <NavLink className="menu__link" to="/donate">Donate</NavLink>
    </Menu>
  );
}
