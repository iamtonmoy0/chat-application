import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Sidebar from "./Sidebar";
import Blank from "./Blank";

export default function Chat() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto -mt-1">
        <div className="min-w-full border rounded flex lg:grid lg:grid-cols-3">
          <Sidebar />
          <div className="w-full lg:col-span-2 lg:block">
            <div className="w-full grid conversation-row-grid">
              <Outlet />
              {/* <Blank /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
