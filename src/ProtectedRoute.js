import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../src/context/AuthContext";

const ProtectedRoute = ({ element, ...props }) => {
  const { currentUser, isAuthenticated } = useAuth();
  const location = useLocation(); 

  
  const startsWith = (path, start) => {
    return path.slice(0, start.length) === start;
  };

  
  if (currentUser && isAuthenticated()) {
    
    if (startsWith(location.pathname, "/auth")) {
      return <Navigate to="/main" replace />;
    }
    
    return <Outlet />;
  } else {
    
    if (startsWith(location.pathname, "/main")) {
      return <Navigate to="/auth" replace />;
    }
    
    return <Outlet />;
  }
};

export default ProtectedRoute;
