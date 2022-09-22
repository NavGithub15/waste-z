import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Contexts/AuthContexts";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { signUp } = useAuth();
  
  const handleSubmit = async (e) => {
    
    e.preventDefault();

        if (password !== confirmPassword) {
      return setErrorMessage("Passwords do not match");
    }
    try {
      await signUp(email, password, confirmPassword);
      navigate("/signIn");
    } catch {
      setError("Failed to create an account! Please try again");
      setErrorMessage("Failed to sign up! Please try again")
    }
  };

  return (
    <div className="auth">
      <div className="auth-container">
        <h2 className="auth__title">Sign up</h2>
      </div>

      {error && <label className="error">{errorMessage}</label>}

    <form onSubmit={handleSubmit}>
      <div className="form__container">
        <div className="form__input-wrapper">
          <label className="form__input-label">Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className=""
            type="email"/>
        </div>

        {error && <label className="error">{errorMessage}</label>}

        <div className="form__input-wrapper">
          <label className="form__input-label">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className=""
            type="password"/>
        </div>
        <div className="">
          <label className="form__input-label">Confirm Password</label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            className=""
            type="password"/>
        </div>
        <div className="form__cta-wrapper">
          <button className="form__cta">
            Sign Up
          </button>
          <Link className="form__cta-cancel">
          Cancel
          </Link>
        </div>
      </div>
    </form>
    <p className="__text">
          Already have an account yet ?{" "}
          <Link to="/signIn" className="auth__text-link">
            Sign in.
          </Link>
        </p>
  </div>
  );
};

export default SignUpForm;
