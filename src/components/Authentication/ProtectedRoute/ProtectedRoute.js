import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../Contexts/AuthContexts';

const ProtectedRoute = ({ children }) => {

  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to='/inventory' />;
  }
  return children;
};

export default ProtectedRoute;