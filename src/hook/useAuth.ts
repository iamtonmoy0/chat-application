import RootState from "../types/types";
import { useSelector } from "react-redux";

export default function useAuth(): boolean {
  const auth = useSelector((state: RootState) => state.auth);
  if (auth?.token && auth?.user) {
    if (localStorage.getItem("auth")) {
      return true;
    } else {
      localStorage.setItem("auth", JSON.stringify(auth));
      return true;
    }
  } else {
    return false;
  }
}
