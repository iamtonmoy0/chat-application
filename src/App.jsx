import { Outlet } from "react-router-dom";
import useAuthCheck from "./hooks/useAuthCheck";

function App() {
  useAuthCheck();
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
