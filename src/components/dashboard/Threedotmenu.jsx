import React, { useState, useEffect, useRef } from "react";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";

 function Threedotmenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    console.log("Selected:", option);
    setIsOpen(false);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Three-dot icon */}
      <button
        onClick={toggleDropdown}
        className="p-2 rounded hover:bg-gray-100 transition"
      >
        <BsThreeDots className="text-gray-600 cursor-pointer" size={20} />
        
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-0 w-40 bg-white  rounded-lg shadow-lg z-50">
          {/* Triangle pointer */}
          <div className="absolute -top-2 right-3 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white drop-shadow-sm"></div>

          {/* Menu options */}

          <button
            onClick={() => handleOptionClick("This Year")}
            className="block w-full text-left px-4 py-2 pt-3 font-medium hover:bg-gray-100 text-gray-400"
          >
            FILTER
          </button>
          <button
            onClick={() => handleOptionClick("This Year")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Today
          </button>
          <button
            onClick={() => handleOptionClick("This Month")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            This Month
          </button>
          <button
            onClick={() => handleOptionClick("Today")}
            className="block w-full text-left px-4 py-2 pb-3 hover:bg-gray-100"
          >
            This Year
          </button>
        </div>
      )}
    </div>
  );
}
export default Threedotmenu