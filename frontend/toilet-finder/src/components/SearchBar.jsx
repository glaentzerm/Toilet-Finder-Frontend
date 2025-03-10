import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="p-4 flex justify-center">
            <div className="relative w-full max-w-xs">
                <input
                    type="text"
                    placeholder="Find a toilet..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-4 py-3 pl-10 pr-10 rounded-full w-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1572a1] text-lg bg-transparent"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">🔍</span>

                {/* ✅ X Button to Clear Search */}
                {searchQuery && (
                    <button
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
                        onClick={() => {
                            setSearchQuery("");
                            document.querySelector("input").focus();
                        }}                    >
                        ✖
                    </button>
                )}
            </div>
        </div>
    );
};

export default SearchBar;

