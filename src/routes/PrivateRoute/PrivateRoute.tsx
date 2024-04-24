import { Navigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import React, { FC } from "react";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const isLoggedIn = useAuth();

  return isLoggedIn ? children : <Navigate to={"/"} />;
}

export default PrivateRoute;
