import React, { useState } from "react";
import Menu from "./components/Menu.jsx";
import AddListing from "./components/AddListing.jsx";
import MapComponent from "./components/Map.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import FilterButton from "./components/FilterButton.jsx";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedToilet, setSelectedToilet] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const filters = [
    { icon: "♿", name: "Accessible" },
    { icon: "💰", name: "Paid" },
    { icon: "🆓", name: "Free" },
    { icon: "🟢", name: "Open Now" },
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      {/* Phone Frame */}
      <div className="relative w-[375px] h-[812px] bg-white rounded-[40px] shadow-2xl border border-gray-300 overflow-hidden">
        
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black rounded-b-lg"></div>

        {/* App Content */}
        <div className="flex flex-col h-full relative">
          
          {/* Search & Icons */}
          <div className="pb-4 z-10">
            {/* Search Bar */}
            <div className="p-8 flex justify-center">
              <div className="relative w-full max-w-xs">
                <input
                  type="text"
                  placeholder="Find a toilet"
                  className="px-4 py-3 pl-10 rounded-full w-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1572a1] text-lg bg-[#9ad0ec]"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">🔍</span>
              </div>
            </div>

            {/* Clickable Filter Icons */}
            <div className="flex justify-center px-4 space-x-4 py-2">
              {filters.map((filter, index) => (
                <FilterButton
                  key={index}
                  filter={filter}
                  isActive={activeFilter === filter.name}
                  onClick={() => setActiveFilter(activeFilter === filter.name ? null : filter.name)}
                />
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="flex-grow mt-6 relative z-0">
            <MapComponent onToiletSelect={setSelectedToilet} activeFilter={activeFilter} />
          </div>

          {/* Sliding Up Card with Smooth Transition */}
          <div 
            className={`absolute bottom-0 left-0 w-full bg-white p-4 border-t border-gray-300 shadow-lg rounded-t-3xl transition-transform transform ${selectedToilet ? "translate-y-0" : "translate-y-full"} duration-300 ease-in-out`}
          >
            {selectedToilet && (
              <>
                <h2 className="text-lg font-semibold">{selectedToilet.address}</h2>
                <p className="text-gray-700">Walking Time: {selectedToilet.walkTime} min</p>
                <p className="text-gray-700">Paid: {selectedToilet.isPaid ? "💰 Yes" : "🆓 No"}</p>
                <p className="text-gray-700">Reduced Mobility Access: {selectedToilet.isAccessible ? "♿ Yes" : "🚫 No"}</p>
                <p className="text-gray-700">Open Now: {selectedToilet.isOpen ? "🟢 Yes" : "🔴 No"}</p>
                <div className="flex space-x-2 mt-2">
                  {selectedToilet.filters.map((filter, index) => (
                    <span key={index} className="bg-gray-200 px-2 py-1 rounded-md">{filter}</span>
                  ))}
                </div>
                <button 
                  className="mt-4 w-full bg-red-500 text-white p-2 rounded-md"
                  onClick={() => setSelectedToilet(null)}
                >
                  Close
                </button>
              </>
            )}
          </div>

          {/* Menu Component */}
          {isMenuOpen && (
            <div className="absolute inset-0 z-20">
              <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
            </div>
          )}

          {/* Bottom Navigation */}
          <div className="bg-[#9ad0ec] p-4 flex justify-around items-center shadow-md border-t border-gray-300 rounded-t-3xl z-10">
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
            <button className="flex flex-col cursor-pointer items-center text-gray-700 hover:text-black" onClick={() => setIsModalOpen(true)}>
              <span className="text-3xl">💩</span>
              <span className="text-base">Account</span>
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white w-[90%] max-w-[375px] p-6 rounded-2xl shadow-lg relative">
      <button className="text-gray-700 text-xl absolute top-4 right-6 cursor-pointer" onClick={() => setIsModalOpen(false)}>✖</button>
      {isRegistering ? (
        <Register onClose={() => setIsModalOpen(false)} onLogin={() => setIsRegistering(false)} />
      ) : (
        <Login onClose={() => setIsModalOpen(false)} onRegister={() => setIsRegistering(true)} />
      )}
    </div>
  </div>
)}

    </div>
  );
};

export default App;
