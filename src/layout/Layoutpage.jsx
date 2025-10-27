import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layoutpage() {
  

  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1024);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // Detect screen size and handle sidebar visibility
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsMobile(true);
        setSidebarOpen(false);
      } else {
        setIsMobile(false);
        setSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className="flex h-screen bg-[#e9f0f7] overflow-hidden">
      {/* Sidebar */}
      {/* <div
        className={`fixed top-0 left-0 z-40 bg-white shadow-2xl transition-all duration-300 mt-16
          ${sidebarOpen ? "w-[300px]" : "w-0"} 
          lg:static  lg:w-[300px]  h-[calc(100vh-64px)] overflow-y-auto overflow-x-hidden`}
      >
        <Sidebar isOpen={sidebarOpen} />
      </div>
     */}

     {/* <div
        className={`transition-all top-0 left-0 z-40 duration-300 bg-white shadow-2xl overflow-y-auto overflow-x-hidden mt-16
          ${isMobile
            ? `fixed top-0 left-0 z-50 h-full transform ${
                sidebarOpen ? "translate-x-0 w-[300px]" : "-translate-x-full w-0"
              }`
            : `${sidebarOpen ? "w-[300px]" : "w-0"} h-screen`
          }`}
      >
        <Sidebar isOpen={sidebarOpen} />
      </div> */}

      <div
  className={`transition-all duration-300 bg-white shadow-2xl overflow-y-auto mt-16
    ${isMobile
      ? `fixed top-0 left-0 z-50 h-full ${
          sidebarOpen ? "translate-x-0 w-[300px]" : "-translate-x-full"
        }`
      : `${sidebarOpen ? "w-[300px]" : "w-0"} h-screen`
    }`}
>
  <Sidebar isOpen={sidebarOpen} />
</div>
      
      {/* <div
        className={`transition-all duration-300 bg-white shadow-2xl h-[calc(100vh-64px)] mt-16 overflow-y-auto ${
          sidebarOpen ? "w-[300px] " : "w-0"
        }`}
      >
        <Sidebar isOpen={sidebarOpen} />
      </div> */}

      
        {/* <div
        className={`fixed top-0 left-0 z-40 bg-white shadow-2xl transition-all duration-300 transform
        ${sidebarOpen ? "translate-x-0 w-[300px]" : "-translate-x-full w-0"}
        h-screen overflow-y-auto overflow-x-hidden`}
      >
        <Sidebar isOpen={sidebarOpen} />
      </div> */}

      

      {/* Main Content */}
       <div className="flex-1 flex flex-col overflow-hidden">
        
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        
        <div className="flex-1 overflow-y-auto p-6 pt-[84px] transition-all duration-300">
          <Outlet />
          <Footer />
        </div>
      </div>  
       {/* Main Content */}
      {/* <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          !isMobile && sidebarOpen ? "ml-[260px]" : "ml-0"
        }`}
      >
        
        <Navbar toggleSidebar={toggleSidebar} />

        
        <div className="flex-1 overflow-y-auto p-6 pt-[84px]">
          <Outlet />
          <Footer />
        </div>
      </div>  */}
    </div>
  );
}

export default Layoutpage;
