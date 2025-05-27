import React from 'react';
import { FaBell, FaPlus } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2 w-full max-w-md">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border border-gray-200 rounded-xl focus:outline-none text-sm"
        />
      </div>
      <div className="flex items-center gap-4">
        <FaBell className="text-gray-600" />
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/32"
            alt="avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium">John Doe</span>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full">
          <FaPlus />
        </button>
      </div>
    </header>
  );
};

export default Header;
