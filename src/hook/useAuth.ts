import { useSelector } from "react-redux";

interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
}

interface AuthState {
  token: string | null;
  user: User | null;
}

interface RootState {
  auth: AuthState;
  // Add other slices of state here if needed
}
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
