import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../Contexts/AuthContexts';

const ProtectedRoute = ({ children }) => {

  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to='/signIn' />;
  }
  return children;
};

export default ProtectedRoute;