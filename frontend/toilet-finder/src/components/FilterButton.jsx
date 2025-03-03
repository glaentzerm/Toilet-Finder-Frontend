import React from "react";

const FilterButton = ({ filter, isActive, onClick }) => {
  return (
    <button
      className={`flex-shrink-0 p-4 rounded-full shadow-md border border-gray-300 text-3xl transition-colors cursor-pointer ${
        isActive ? "bg-[#1572a1] text-white" : "bg-[#9ad0ec]"
      } hover:bg-[#1572a1] hover:text-white`}
      onClick={onClick}
    >
      {filter.icon}
    </button>
  );
};

export default FilterButton;
