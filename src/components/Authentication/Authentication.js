import Inventory from "../../Pages/Inventory/Inventory";
import "./Authentication.scss";
import { auth } from "../../firebase.config";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Authentication() {

  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState("");

  const navigate = useNavigate();


    const handleSignup = (e) => {
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (password !== confirmPassword) {
          return setError("Passwords do not match");
        }

           createUserWithEmailAndPassword(auth, email, password, confirmPassword)
           .then((cred) => {
            setIsSignedUp(true);
            navigate("/inventory");
           })
           .catch ((err) => {
          setError("Failed to sign up! Please try again");
        })

    }

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
        .then((cred) => {
          setIsLoggedIn(true);
        })
        .catch((err) => {
          setErrorLogin("Failed to login! Please try again")
        });
    }

    const logout = () => {
      return auth.signOut();

    }

    //   Sign up render
    const renderSignUp = () => (
        <div>
          <h1>Sign Up</h1>
          <form onSubmit={handleSignup}>
            <div className="form-group">
              Email: <input type="text" name="email" />
            </div>
            <div className="form-group">
              Password: <input type="password" name="password" />
            </div>
            <div className="form-group">
              Confirm Password: <input type="password" name="confirmPassword" />
            </div>
            <button type="submit" className="btn btn-primary">
              Signup
            </button>
          </form>
        </div>
      );

    //   Sign in render
      const renderLogin = () => (
        <div>
          <h1>Login</h1>
          {/* {isLoginError && <label className="error">{errorMessage}</label>} */}
          <form onSubmit={handleLogin}>
            <div className="form-group">
            {errorLogin && <label className="error">{loginErrorMessage}</label>}
              Email: <input type="text" name="email" />
            </div>
            <div className="form-group">
              Password: <input type="password" name="password" />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      );

        // Handle the Signup/Login
  if (!isSignedUp) return renderSignUp();
  if (!isLoggedIn) return renderLogin();


  return (
    <>
    <Inventory />
    </>
  )
}
