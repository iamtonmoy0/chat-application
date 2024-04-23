import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../features/auth/authSlice";

export default function useAuthCheck(): boolean {
  const dispatch = useDispatch();
  const [authCheck, setAuthCheck] = useState(false);
  useEffect(() => {
    const localAuth = localStorage.getItem("auth");
    if (localAuth) {
      const auth = JSON.parse(localAuth);
      console.log(auth.token);
      if (auth?.token && auth?.user) {
        dispatch(userLoggedIn({ token: auth.token, user: auth.user }));
      }
      setAuthCheck(true);
    }
  }, [dispatch, setAuthCheck]);
  return authCheck;
}
