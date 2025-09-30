import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layoutpage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
       
      <div
        className={`transition-all duration-300 bg-white shadow-2xl h-[calc(100vh-64px)] mt-16 overflow-y-auto ${
          sidebarOpen ? "w-[320px] " : "w-0"
        }`}
      >
        <Sidebar isOpen={sidebarOpen} />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* Page content */}
        <div
          className={`flex-1 overflow-y-auto p-6 transition-all pt-[84px] duration-300 ${
            sidebarOpen ? "ml-0" : "ml-0"
          }`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layoutpage;

