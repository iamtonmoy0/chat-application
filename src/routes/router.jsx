import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../components/register/register";
import Login from "../components/login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";

import MessagePage from "../components/pages/Inbox";
import Conversations from "../components/pages/Conversations";
import ChatBody from "../components/chat/body/ChatBody";

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
      // { path: "message", element: <MessagePage /> },
    ],
  },
  {
    path: "/inbox",
    element: (
      <PrivateRoute>
        <Conversations />
      </PrivateRoute>
    ),
    children: [{ path: "/inbox", element: <MessagePage /> },{ path: "/inbox/:id", element: <ChatBody /> }],
  },
]);

export default router;
