import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Contexts/AuthContexts';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
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
    <div className="">
      <div>
        <h2 className="">Sign in to your account</h2>
        <p className="">
          Don't have an account yet?{' '}
          <Link to='/signUp' className='underline'>
            Sign up.
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="">
          <label className="">Email Address</label>
          <input onChange={(e) => setEmail(e.target.value)} className="" type='email' />
        </div>
        <div className="">
          <label className="">Password</label>
          <input onChange={(e) => setPassword(e.target.value)} className="" type='password' />
        </div>
        <button className="">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;