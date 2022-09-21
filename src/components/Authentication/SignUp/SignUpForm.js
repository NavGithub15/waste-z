import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Contexts/AuthContexts";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
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
    }
  };

  return (
    <div className="">
      <div>
        <h2 className="">Sign up for a free account</h2>
        <span className="">
          Already have an account yet ?{" "}
          <Link to="/signIn" className="">
            Sign in.
          </Link>
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="">
          <label className="">Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className=""
            type="email"
          />
        </div>
        <div className="">
          <label className="">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className=""
            type="password"
          />
        </div>
        {error && <label className="error">{errorMessage}</label>}
        <div className="">
          <label className="">Confirm Password</label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            className=""
            type="password"
          />
        </div>
        <button className="">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
