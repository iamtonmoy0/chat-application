import Navbar from "../navbar/Navbar";
import Sidebar from "../chat/Sidebar";
import { Outlet } from "react-router-dom";
import useAuthCheck from "../../hooks/useAuthCheck";

export default function Conversations() {
  useAuthCheck();

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto -mt-1">
        <div className="min-w-full border rounded flex lg:grid lg:grid-cols-3">
          <Sidebar />
          <div className="w-full lg:col-span-2 lg:block">
            <div className="w-full grid conversation-row-grid">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
