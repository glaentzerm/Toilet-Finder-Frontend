import React from "react";

const Menu = ({ isOpen, onClose }) => {
  return (
    <div
      id="menu-overlay"
      className={`fixed inset-0 flex justify-center bg-black bg-opacity-30 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-sm h-full shadow-lg p-5 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title + Close Button */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button 
          onClick={onClose} 
          className="text-xl cursor-pointer hover:text-red-500 transition">
            ✖
          </button>

        </div>

        {/* Menu Items */}
        <ul className="mt-6 space-y-4 text-lg">
          <li className="hover:text-blue-500 cursor-pointer transition-transform transform hover:scale-105">
            About Us
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition-transform transform hover:scale-105">
            Find Toilets
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition-transform transform hover:scale-105">
            Settings
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition-transform transform hover:scale-105">
            Help
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
