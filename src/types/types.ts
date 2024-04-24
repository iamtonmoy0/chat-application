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
}

export default RootState;
