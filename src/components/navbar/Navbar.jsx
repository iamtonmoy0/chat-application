import { useDispatch } from "react-redux";
import { userLoggedOut } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("auth");
    dispatch(userLoggedOut());
    navigate("/");
  };
  return (
    <nav className="border-general sticky top-0 z-40 border-b bg-[#008cff] transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between h-16 items-center">
          <img className="h-10" src="./assets/lws-logo-dark.svg" />
          <ul>
            <li className="text-white">
              <button type="btn" className="bg-[tomato] rounded text-md py-2 px-4" onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
