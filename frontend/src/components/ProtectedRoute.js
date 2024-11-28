import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// ProtectedRoute Component
const ProtectedRoute = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));

  console.log(user);
  // If user is not logged in, redirect to login page
  if (!user || !user.id) {
    return <Navigate to="/login" />;
  }

  // If user is logged in, render the requested page
  return <Outlet />;
};

export default ProtectedRoute;
