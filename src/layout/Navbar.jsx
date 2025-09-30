import React, {useState} from 'react'
import { Menu, Bell, MessageSquareText, Search } from "lucide-react";
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { BsBoxArrowRight } from "react-icons/bs";
const NAVBAR_HEIGHT = 64;

 function Navbar() {
  const [usernameOpen, setUsernameOpen] = useState(false);
  const location = useLocation();


  const [sidebarOpen, setSidebarOpen] =
  useState(true);

  return (
   <div className='h-screen bg-gray-100 z-120'>
    <div className='fixed top-0 left-0 right-0 flex items-center gap-28 bg-white shadow px-6 z-50'
    style={{height: NAVBAR_HEIGHT}}>

        <div className='flex items-center gap-1'><img src='/images/logo.png' className='w-8 h-8'/>
        <span className='text-blue-900 font-bold text-3xl'>NexaAdmin</span></div>
        
        <div className='flex flex-row justify-between items-center w-full'>
          <div className='flex flex-row items-center gap-4'>
            <div><button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className='p-2 rounded hover:bg-gray-200'><Menu size={30}/></button></div>

        <div className='w-94 relative'>
          <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 pl-3 py-2 pr-10 rounded w-full focus:ring-2 focus:ring-blue-400  focus:outline-none"/>
        <span className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5'><Search/></span>
        </div></div>

        <div className='flex items-center space-x-8 pt-2'>
          <div className='relative'><Bell size={28}/>
          <span className='absolute bg-blue-600 text-white flex text-center rounded-lg -top-2.5 -right-2  px-2 font-bold'>4</span>
          </div>
          <div className='relative'>
            <MessageSquareText size={28}/>
            <span className='absolute bg-green-600 text-white flex text-center rounded-lg -top-2 -right-2  px-2 font-bold'>3</span>
            </div>


          <div className='flex flex-row items-center gap-2'>
            <div><img src='/images/profile-img.jpg' alt='User Profile' className='rounded-full w-11 h-11'/></div>
            <div className='relative inline-block text-left'>
              <button
              onClick={() =>setUsernameOpen(!usernameOpen)}
              className='flex flex-row gap-2 items-center px-4 py-2 bg-white rounded-md hover:bg-gray-200'>
                <span className='font-bold text-blue-900 text-lg'>K.Anthony</span><IoMdArrowDropdown />
              </button>
              {usernameOpen && (
                <div className='absolute right-0 mt-2 w-80 py-2 px-2 bg-white rounded-md shadow-lg divide-gray-300 divide-y'>
                  <button onClick={() =>setUsernameOpen(!usernameOpen)}  className='flex flex-col items-center text-center mt-2 mb-2 w-full'>
                    <span className='font-bold text-blue-900 text-lg'>Kevin Anthony</span><span className='text-gray-500'>Web Developer</span>

                  </button>
                  
                  <Link
                  to="/myprofile"
                  onClick={() => setUsernameOpen(false)}
                  className={`px-4 py-2 hover:bg-gray-100 flex flex-row items-center gap-3 ${
                    location.pathname === "/myprofile"
                    ? "text-gray-700 font-semibold" : "text-gray-700"
                  }`}>
                 <FaRegUser size={20} /> My Profile</Link>

                 <Link
                  to="/myprofile"
                  onClick={() => setUsernameOpen(false)}
                  className={`px-4 py-2 hover:bg-gray-100 flex flex-row items-center gap-3 ${
                    location.pathname === "/myprofile"
                    ? "text-grap-700 font-semibold" : "text-gray-700"
                  }`}>
                 <AiOutlineSetting size={20} /> Account Setting</Link>

                 <Link
                  to="/frequentquestn"
                  onClick={() => setUsernameOpen(false)}
                  className={`px-4 py-2 hover:bg-gray-100 flex flex-row items-center gap-3 ${
                    location.pathname === "/frequentquestn"
                    ? "text-gray-700 font-semibold" : "text-gray-700"
                  }`}>
                 <FaRegQuestionCircle size={20}/> Need Help</Link>

                 <Link
                  to="/frequentquestn"
                  onClick={() => setUsernameOpen(false)}
                  className={`px-4 py-2 hover:bg-gray-100 flex flex-row items-center gap-3 ${
                    location.pathname === "/frequentquestn"
                    ? "text-gray-700 font-semibold" : "text-gray-700"
                  }`}>
                 <BsBoxArrowRight size={20} /> Sign Out</Link>
                </div>
              )}
              </div>
            </div>
        </div>
        </div>
    </div>

    {/* {sidebarOpen && (
      <div className='fixed left-0 w-full   text-white  overflow-y-auto '
      style={{
        top: NAVBAR_HEIGHT,
        height: `calc(100% - $ {NAVBAR_HEIGHT}px)`,
      }}><Sidebar/></div>
    )}
    <div className={`pt-[${NAVBAR_HEIGHT}px] transition-all`}
    style={{
      marginLeft: sidebarOpen ? "16rem" : "0"
    }}>
      <div className='p-6'>
        <Outlet/>
      </div>
    </div> */}

    <div className='flex pt-[64px]'
    style={{ height: `calc(100% - $ {NAVBAR_HEIGHT}px)`}}>
     {sidebarOpen && (
      <div className='bg-white py-4 overflow-y-auto top-10 bottom-0 fixed left-0 w-75'><Sidebar/></div>
     )}
     <div className='flex-1 overflow-y-auto p-6 ml-70 bg-white'>
      <Outlet/>
     </div>
    </div>
   </div>
  )
}
export default Navbar