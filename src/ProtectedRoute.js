import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../src/context/AuthContext";

const ProtectedRoute = ({ element, ...props }) => {
  const { currentUser } = useAuth();

  return currentUser ? (
    
      <Outlet />
  
  ) : (
    <Navigate to="/auth" replace />
  );
};

export default ProtectedRoute;