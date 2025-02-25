import React, { useState } from "react";
import Menu from "./components/Menu.jsx";
import AddListing from "./components/AddListing.jsx";
import Map from "./components/Map.jsx"
import MapComponent from "./components/Map.jsx";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen justify-between max-w-sm mx-auto relative">
      {/* Search Bar */}
      <div className="p-4 bg-[#f4e2b3] flex justify-center">
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            placeholder="Find a toilet"
            className="px-4 py-3 pl-10 rounded-full w-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">🔍</span>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="flex-grow flex items-center justify-center bg-blue-500 text-white text-xl">
        <MapComponent />
      </div>

      {/* Menu Component */}
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Bottom Navigation Bar */}
      <div className="bg-[#f4e2b3] p-4 flex justify-around items-center shadow-md border-t border-gray-300">
        <button
          className="flex flex-col items-center text-gray-700 hover:text-black"
          onClick={() => setIsMenuOpen(true)}
        >
          <span className="text-3xl cursor-pointer">☰</span>
          <span className="text-base">Menu</span>
        </button>
        <button className="flex flex-col cursor-pointer items-center bg-white p-4 rounded-full shadow-md border border-gray-300 hover:bg-gray-100">
          <span className="text-3xl">＋</span>
        </button>
        <button className="flex flex-col cursor-pointer items-center text-gray-700 hover:text-black">
          <span className="text-3xl">👤</span>
          <span className="text-base">Account</span>
        </button>
      </div>
    </div>
  );
};

export default App;
