import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Contexts/AuthContexts';
import "./SignIn.scss";

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { logIn }  = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await logIn(email, password)
      navigate('/myStorage')
    } catch (e) {
      setError("Failed to login! Please try again")
      console.log(e.message)
    }
  };

  return (
    <div className="auth">
      <div className="auth__container">
        <h2 className="auth__title">Sign in</h2>
      <form onSubmit={handleSubmit}>
        <div className="auth__input-wrapper">
          <input className="auth__input" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} type='email'/>
        </div>
        <div className="auth__input-wrapper">
          <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="auth__input" type='password'/>
        </div>
        <p className="auth__link-text">
          Don't have an account yet?{' '}
          <Link to='/signUp' className="auth__link">
            Sign up.
          </Link>
        </p>
        <button className="auth__cta">
          Sign In
        </button>
      </form>
      </div>
    </div>
  );
};

export default SignInForm;