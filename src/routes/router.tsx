import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../components/register/Register";
import Login from "../components/login/Login";
import Chat from "../components/chat/Chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { path: "/", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/chat", element: <Chat /> },
    ],
  },
]);

export default router;
