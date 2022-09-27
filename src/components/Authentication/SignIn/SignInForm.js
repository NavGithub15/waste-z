import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Contexts/AuthContexts';
import "./SignInForm.scss";

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();
  const { logIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError(true);
      return setErrorMessage("Please fill out the empty fields!!!");
    };
    try {
      await logIn(email, password)
      setErrorMessage("Successfully Logged in! ")
      setTimeout(() => {
        navigate('/myStorage')
      }, 1000)
    } catch (e) {
      setError(true)
    }
  };


  return (

    <div className="auth">
      <div className="auth__container">
        <h2 className="auth__title">Sign in</h2>
        {errorMessage && <span>{errorMessage}</span>}
        <form onSubmit={handleSubmit}>
          <div className="auth__input-wrapper">
            <input className="auth__input" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} type='email' />
          </div>
          <div className="auth__input-wrapper">
            <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="auth__input" type='password' />
          </div>
          <p className="auth__link-text">
            Don't have an account yet?{' '}
            <Link to='/signUp' className="auth__link">
              Sign up.
            </Link>
          </p>
          <div className='auth__cta-wrapper'>
            <Link to="/" className="auth__cta">
              Cancel
            </Link>
            <button className="auth__cta">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
