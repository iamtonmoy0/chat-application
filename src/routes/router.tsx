import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../components/register/Register";
import Login from "../components/login/Login";
import Chat from "../components/chat/Chat";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./publicRoute/PublicRoute";
import Blank from "../components/chat/Blank";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <PublicRoute>
            <Register />
          </PublicRoute>
        ),
      },
      {
        path: "/chat",
        element: (
          <PrivateRoute>
            <Chat />
          </PrivateRoute>
        ),
        children: [{ path: "/chat/:id", element: <Blank /> }],
      },
    ],
  },
]);

export default router;
