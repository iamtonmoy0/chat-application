import { Outlet } from "react-router-dom";
import useAuthCheck from "./hook/useAuthCheck";

function App() {
  // const [loading, setLoading] = useState(false);
  useAuthCheck();

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
