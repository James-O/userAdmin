import React, { useState } from "react";
import { Menu, Bell, MessageSquareText, Search } from "lucide-react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { BsBoxArrowRight } from "react-icons/bs";

const NAVBAR_HEIGHT = 64;

function Navbar({ toggleSidebar }) {
  const [usernameOpen, setUsernameOpen] = useState(false);
  const location = useLocation();

  

  return (
    <div 
      className="flex items-center justify-between bg-[#f8f9fa]  shadow-md px-6 fixed top-0 left-0 right-4 z-50"
      style={{ height: NAVBAR_HEIGHT }}
    >
      {/* Left side: Logo + Menu */}
      <div className="flex items-center lg:gap-28">
        <div className="flex items-center gap-1">
          <img src="/images/logo.png" className="w-8 h-8" alt="logo" />
          <span className="text-blue-900 font-bold text-2xl lg:block hidden">NexaAdmin</span>
        </div>
        
        <div className='flex flex-row items-center gap-4'>
           <div>
        <button
          onClick={toggleSidebar}
          className="p-2 rounded hover:bg-gray-200"
        >
          <Menu size={28} />
        </button>
       </div>

       

       {/* Search box */}
      <div className="w-96 relative hidden lg:block">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 pl-3 py-2 pr-10 rounded w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
          <Search />
        </span>
      </div>
        </div>
              
      </div>

      

      {/* Right side: Icons + Dropdown */}
      <div className="flex items-center space-x-6">
        <span className="block lg:hidden text-gray-400">
          <Search />
        </span>
        <div className="relative">
          <Bell size={24} />
          <span className="absolute bg-blue-700 text-white flex text-center rounded-md text-sm -top-2 -right-1  px-1.5">
            4
          </span>
        </div>

        <div className="relative">
          <MessageSquareText size={24} />
          
          <span className='absolute bg-green-700 text-white flex text-center rounded-md text-sm -top-1 -right-2  px-1.5'>
            3
          </span>
        </div>

        <div className="relative">
          <button
            onClick={() => setUsernameOpen(!usernameOpen)}
            className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded"
          >
            <img
              src="/images/profile-img.jpg"
              alt="User Profile"
              className="rounded-full w-10 h-10"
            />
            <span className="font-bold text-blue-900">K.Anthony</span>
            <IoMdArrowDropdown />
          </button>

          {usernameOpen && (
            <div className="absolute right-0 mt-2 w-70 bg-[#f8f9fa]  rounded-md shadow-lg py-2 px-2 divide-gray-300 divide-y">
             <div className="absolute -top-4 right-4 w-3 h-3 bg-white rotate-45 border-l border-l-[#fff]  border-t border-t-[#fff]  shadow-4xl"></div>
                <button onClick={() =>setUsernameOpen(!usernameOpen)}  className='flex flex-col items-center text-center mt-2 mb-2 w-full'>
                     <span className='font-bold text-blue-900 text-lg'>Kevin Anthony</span><span className='text-gray-500'>Web Developer</span>

                  </button>
              <Link
                to="/myprofile"
                onClick={() => setUsernameOpen(false)}
                className={`px-4 py-2 flex items-center gap-3 hover:bg-gray-100 ${
                  location.pathname === "/myprofile"
                    ? "font-semibold text-gray-800"
                    : "text-gray-600"
                }`}
              >
                <FaRegUser size={18} /> My Profile
              </Link>

              <Link
                to="/myprofile"
                onClick={() => setUsernameOpen(false)}
                className={`px-4 py-2 flex items-center gap-3 hover:bg-gray-100 ${
                  location.pathname === "/settings"
                    ? "font-semibold text-gray-800"
                    : "text-gray-600"
                }`}
              >
                <AiOutlineSetting size={18} /> Account Settings
              </Link>

              <Link
                to="/frequentquestn"
                onClick={() => setUsernameOpen(false)}
                className={`px-4 py-2 flex items-center gap-3 hover:bg-gray-100 ${
                  location.pathname === "/frequentquestn"
                    ? "font-semibold text-gray-800"
                    : "text-gray-600"
                }`}
              >
                <FaRegQuestionCircle size={18} /> Need Help
              </Link>

              <Link
                to="/error"
                onClick={() => setUsernameOpen(false)}
                className="px-4 py-2 flex items-center gap-3 text-gray-600 hover:bg-gray-100"
              >
                <BsBoxArrowRight size={18} /> Sign Out
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;