import React from "react";
import { useAuth } from "../context/auth.context";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  console.log(location.pathname);

  if (!user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
};

export default PrivateRoute;
