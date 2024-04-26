import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../components/register/Register";
import Login from "../components/login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./publicRoute/PublicRoute";
// import Blank from "../components/chat/Blank";
import MessagePage from "../components/pages/Inbox";
import Conversations from "../components/pages/Conversations";

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
        path: "register",
        element: (
          <PublicRoute>
            <Register />
          </PublicRoute>
        ),
      },
      { path: "message", element: <MessagePage /> },
    ],
  },
  {
    path: "chat",
    element: (
      <PrivateRoute>
        <Conversations />
      </PrivateRoute>
    ),
    children: [{ path: "chat/:id", element: <MessagePage /> }],
  },
]);

export default router;
