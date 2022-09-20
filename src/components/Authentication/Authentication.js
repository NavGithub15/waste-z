import Inventory from "../../Pages/Inventory/Inventory";
import "./Authentication.scss";
import { useState } from "react";

export default function Authentication() {

    const [registerUsername, setRegisterUsername] = useState("");
    const [registerName, setRegisterName] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();

    }

    const handleLogin = (e) => {
        e.preventDefault();
        
    }

    //   Sign up render
    const renderSignUp = () => (
        <div>
          <h1>Sign Up</h1>
          <form onSubmit={handleSignup}>
            <div className="form-group">
              Username: <input type="text" name="username" />
            </div>
            <div className="form-group">
              Name: <input type="text" name="name" />
            </div>
            <div className="form-group">
              Password: <input type="password" name="password" />
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
              Username: <input type="text" name="username" />
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

      const logout = () => {

      }


  return (
    <>
    <Inventory />
    </>
  )
}
