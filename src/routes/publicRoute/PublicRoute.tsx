import { Navigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";

export default function PublicRoute({ children }) {
  const isLoggedIn = useAuth();
  return !isLoggedIn ? children : <Navigate to="/" />;
}
