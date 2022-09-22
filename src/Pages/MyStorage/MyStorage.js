import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContexts';

export default function MyStorage() {
  const { currentUser, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="">
      <h2 className="">Account</h2>
      <p>User Email: {currentUser && currentUser.email}</p>

      <button onClick={handleLogout} className="">
        Logout
      </button>
    </div>
  );
};