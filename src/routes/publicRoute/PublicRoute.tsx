import { Navigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import React from "react";

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const isLoggedIn = useAuth();
  return !isLoggedIn ? children : <Navigate to="/" />;
};

export default PublicRoute;
