import React, { useState } from "react";
import Menu from "./components/Menu.jsx";
import AddListing from "./components/AddListing.jsx";
import MapComponent from "./components/Map.jsx";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      {/* Phone Frame */}
      <div className="relative w-[375px] h-[812px] bg-white rounded-[40px] shadow-2xl border border-gray-300 overflow-hidden">
        
        {/*Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-b-lg"></div>

        {/* App Content */}
        <div className="flex flex-col h-full">
          
          {/* Search & Icons */}
          <div className="pb-4">
            {/* Search Bar */}
            <div className="p-8 flex justify-center">
              <div className="relative w-full max-w-xs">
                <input
                  type="text"
                  placeholder="Find a toilet"
                  className="px-4 py-3 pl-10 rounded-full w-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg bg-[#fff5cc]"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">🔍</span>
              </div>
            </div>

            {/*Scrollable Filter Icons */}
            <div className="flex overflow-x-auto px-4 space-x-4 py-2">
              {[
                "🧍‍♂️", "🧍‍♀️", "🚻", "♿", "🚼", "🧑‍🧑‍🧒‍🧒", "💰", "🆓"
              ].map((icon, index) => (
                <div key={index} className="flex-shrink-0 bg-[#f4e2b3] p-4 rounded-full shadow-md border border-gray-300 text-3xl">
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Map Section with Extra Padding */}
          <div className="flex-grow mt-6">
            <MapComponent />
          </div>

          {/* Menu Component */}
          <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

          {/* Bottom Navigation */}
          <div className="bg-[#f4e2b3] p-4 flex justify-around items-center shadow-md border-t border-gray-300 rounded-t-3xl">
          <button
              className="flex flex-col items-center text-gray-700 hover:text-black"
              onClick={() => setIsMenuOpen(true)}
            >
              <span className="text-3xl cursor-pointer">☰</span>
              <span className="text-base">Menu</span>
            </button>
            <button className="flex flex-col cursor-pointer items-center bg-white p-5 rounded-full shadow-md border border-gray-300 hover:bg-gray-100">
              <span className="text-3xl">＋</span>
            </button>
            <button className="flex flex-col cursor-pointer items-center text-gray-700 hover:text-black">
              <span className="text-3xl">💩</span>
              <span className="text-base">Account</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;
