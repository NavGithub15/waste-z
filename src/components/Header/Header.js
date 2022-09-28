import "./Header.scss";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth"
import { useAuth } from '../../Contexts/AuthContexts';

export default function Header() {

  const [currentUser] = useAuthState(auth)

  const { logOut } = useAuth();

  const navigate = useNavigate();

  // Handle logout 
  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.error);
    }
  };

  return (

    <header className="header">
      {currentUser ? <div className="header__user-wrapper">
        <h4 className="header__user">
          <span className="header__user-uppercase">Welcome! </span>
          {currentUser && currentUser.email}</h4>
        <button onClick={handleLogout} className="header__user-cta">
          Log Out
        </button>
      </div> : null}
      <HamburgerMenu />
      <div className="header__container">
        <Link to="/" className="header__logo-link">Waste <strong>Z</strong></Link>
        <nav className="header__links-container">
          <NavLink to="/" end className="header__link">Home</NavLink>
          {!currentUser ? (<NavLink to="/signIn" className="header__link">My Storage</NavLink>) :
            (<NavLink to="/myStorage" className="header__link">My Storage</NavLink>
            )}
          {!currentUser ? (<NavLink className="header__link" to="/signUp">Get Started</NavLink>) :
            (<NavLink to="/browseRecipe" className="header__link">Recipes</NavLink>
            )}
          <NavLink to="/donate" className="header__link">Donate</NavLink>
        </nav>
      </div>
    </header>
  )
};