// import React from 'react';
// import { FaBell, FaPlus } from 'react-icons/fa';

// const Header = () => {
//   return (
//     <header className="flex items-center justify-between bg-white p-4 shadow-sm">
//       <div className="flex items-center gap-2 w-full max-w-md">
//         <input
//           type="text"
//           placeholder="Search"
//           className="w-full p-2 border border-gray-200 rounded-xl focus:outline-none text-sm"
//         />
//       </div>
//       <div className="flex items-center gap-4">
//         <FaBell className="text-gray-600" />
//         <div className="flex items-center gap-2">
//           <img
//             src="https://i.pravatar.cc/32"
//             alt="avatar"
//             className="w-8 h-8 rounded-full"
//           />
//           <span className="text-sm font-medium">John Doe</span>
//         </div>
//         <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full">
//           <FaPlus />
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;



/*************--------------------------responsive---------------- */

// import React from 'react';
// import { FaBell, FaPlus } from 'react-icons/fa';

// const Header = () => {
//   return (
//     <header className="flex items-center justify-between bg-white p-3 sm:p-4 shadow-sm">
//       <div className="flex items-center gap-2 flex-1 max-w-md min-w-0">
//         <input
//           type="text"
//           placeholder="Search"
//           className="w-full p-2 border border-gray-200 rounded-xl focus:outline-none text-sm truncate"
//         />
//       </div>
//       <div className="flex items-center gap-3 sm:gap-4 ml-4 flex-shrink-0">
//         <FaBell className="text-gray-600 w-5 h-5 sm:w-6 sm:h-6" />
//         <div className="flex items-center gap-2 min-w-[100px] sm:min-w-[150px]">
//           <img
//             src="https://i.pravatar.cc/32"
//             alt="avatar"
//             className="w-8 h-8 rounded-full"
//           />
//           {/* Hide name on very small screens */}
//           <span className="text-sm font-medium truncate hidden xs:block sm:block">
//             John Doe
//           </span>
//         </div>
//         <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full">
//           <FaPlus className="w-4 h-4 sm:w-5 sm:h-5" />
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;


/**------------------------------responsive with toogle------------------------------ */

import React from 'react';
import { FaBell, FaPlus, FaBars } from 'react-icons/fa';

const Header = ({ onMenuClick }) => {
  return (
    <header className="flex items-center justify-between bg-white p-3 sm:p-4 shadow-sm">
      {/* Hamburger menu button: visible only on mobile */}
      <button
        className="md:hidden p-2 mr-4 text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        onClick={onMenuClick}
        aria-label="Toggle sidebar menu"
      >
        <FaBars className="w-5 h-5" />
      </button>

      {/* Search input */}
      <div className="flex items-center gap-2 flex-1 max-w-md min-w-0">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border border-gray-200 rounded-xl focus:outline-none text-sm truncate"
        />
      </div>

      {/* Right side icons and profile */}
      <div className="flex items-center gap-3 sm:gap-4 ml-4 flex-shrink-0">
        <FaBell className="text-gray-600 w-5 h-5 sm:w-6 sm:h-6" />
        <div className="flex items-center gap-2 min-w-[100px] sm:min-w-[150px]">
          <img
            src="https://i.pravatar.cc/32"
            alt="avatar"
            className="w-8 h-8 rounded-full"
          />
          {/* Hide name on very small screens */}
          <span className="text-sm font-medium truncate hidden xs:block sm:block">
            John Doe
          </span>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full">
          <FaPlus className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
