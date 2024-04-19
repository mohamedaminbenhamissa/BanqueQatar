import React, { createContext, useState, useContext } from "react";
import userData from "../utilisateurs.json";

const AuthContext = createContext();

export const useAuth = () => {
  return  useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );

  const login = (email, password) => {
    const user = userData.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setCurrentUser(user);
      localStorage.setItem("currentUser", JSON.stringify(user)); 
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser"); 
  };

  const isAuthenticated = () => {
    return currentUser !== null;
  };

  const value = {
    currentUser,
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
