import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAuthCheck from "../../hooks/useAuthCheck";

const PrivateRoute = ({ children }) => {
  useAuthCheck();
  const isLoggedIn = useAuth();
  // console.log("i am private route");
  return isLoggedIn ? children : <Navigate to={"/inbox"} />;
};

export default PrivateRoute;
