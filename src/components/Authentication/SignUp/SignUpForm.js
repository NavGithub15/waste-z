import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Contexts/AuthContexts";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { signUp } = useAuth();
  
  const handleSubmit = async (e) => {
    
    e.preventDefault();

        if (password !== confirmPassword) {
      return setErrorMessage("Password does not match");
    }
    try {
      await signUp(email, password, confirmPassword);
      navigate("/signIn");
    } catch {
      setError(true);
      setErrorMessage("Please fill out the fields!")
    }
  };

  return (
    <div className="auth">
      <div className="auth__container">
        <h2 className="auth__title">Sign up</h2>
  
      {errorMessage && <label className="error">{errorMessage}</label>}

    <form onSubmit={handleSubmit}>
        <div className="auth__input-wrapper">
          <input 
            onChange={(e) => setEmail(e.target.value)}
            className="auth__input"
            type="email"
            placeholder="Email Address"/>
        </div>
        <div className="auth__input-wrapper">
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="auth__input"
            type="password"
            placeholder="Password"/>
        </div>
        <div className="auth__input-wrapper">
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="auth__input"
            type="password"
            placeholder="Confirm Password"/> 
        </div>
        <p className="auth__link-text">
          Already have an account yet ?{" "}
          <Link to="/signIn" className="auth__text-link">
            Sign in.
          </Link>
        </p>
        <div className="auth__cta-wrapper">
          <Link className="auth__cta">
          Cancel
          </Link>
          <button className="auth__cta">
            Sign Up
          </button>
        </div>
    </form>
      </div>
  </div>
  );
};

export default SignUpForm;
