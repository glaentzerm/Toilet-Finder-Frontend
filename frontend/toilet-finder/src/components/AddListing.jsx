import React from "react";

const AddListing = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-end transition-transform duration-300 ${
        isOpen ? "translate-y-0" : "translate-y-full"
      } bg-black bg-opacity-30 backdrop-blur-sm`}
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-sm p-6 rounded-t-2xl shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <button onClick={onClose} className="text-xl">✖</button>
          <h2 className="text-lg font-semibold">Add Listing</h2>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Rate this toilet</label>
          <div className="flex space-x-2 mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-2xl">💩</span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Location</label>
          <input
            type="text"
            placeholder="Enter the address"
            className="w-full p-2 mt-2 border rounded-lg bg-[#f4e2b3] focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Details</label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <button className="p-3 rounded-lg bg-[#f4e2b3]">Free Access</button>
            <button className="p-3 rounded-lg bg-[#f4e2b3]">Accessibility</button>
          </div>
        </div>

        <button className="w-full py-2 bg-blue-500 text-white rounded-lg">Confirm</button>
      </div>
    </div>
  );
};

export default AddListing;
