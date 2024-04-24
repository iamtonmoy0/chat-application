import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
// import Blank from "./Blank";
import Sidebar from "./Sidebar";

export default function Chat() {
  return (
    <>
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto -mt-1">
          <div className="min-w-full border rounded flex lg:grid lg:grid-cols-3">
            <Sidebar />
            <div className="w-full lg:col-span-2 lg:block">
              <div className="w-full grid conversation-row-grid">
                {/* <Blank /> */}
                {/* <Outlet /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
