// import React from 'react';
// import { FaTachometerAlt, FaHistory, FaCalendarAlt, FaStethoscope, FaChartBar, FaFlask, FaComments, FaLifeRing, FaCog } from 'react-icons/fa';

// const navItems = [
//   { icon: <FaTachometerAlt />, label: "Dashboard" },
//   { icon: <FaHistory />, label: "History" },
//   { icon: <FaCalendarAlt />, label: "Calendar" },
//   { icon: <FaStethoscope />, label: "Appointments" },
//   { icon: <FaChartBar />, label: "Statistics" },
//   { icon: <FaFlask />, label: "Tests" },
//   { icon: <FaComments />, label: "Chat" },
//   { icon: <FaLifeRing />, label: "Support" },
//   { icon: <FaCog />, label: "Setting" },
// ];

// const Sidebar = () => {
//   return (
//     <aside className="w-[220px] min-h-screen bg-white shadow-md p-4">
//       <h1 className="text-xl font-bold mb-8 text-[#30C4C7]">Health<span className="text-black">care.</span></h1>
//       <nav className="space-y-4">
//         {navItems.map((item, idx) => (
//           <div key={idx} className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer">
//             <span className="text-lg">{item.icon}</span>
//             <span className="text-sm">{item.label}</span>
//           </div>
//         ))}
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;



/*******---------------------------responsive----------------------- */

import React, { useState } from 'react';
import {
  FaTachometerAlt,
  FaHistory,
  FaCalendarAlt,
  FaStethoscope,
  FaChartBar,
  FaFlask,
  FaComments,
  FaLifeRing,
  FaCog,
} from 'react-icons/fa';

const navItems = [
  { icon: <FaTachometerAlt />, label: 'Dashboard' },
  { icon: <FaHistory />, label: 'History' },
  { icon: <FaCalendarAlt />, label: 'Calendar' },
  { icon: <FaStethoscope />, label: 'Appointments' },
  { icon: <FaChartBar />, label: 'Statistics' },
  { icon: <FaFlask />, label: 'Tests' },
  { icon: <FaComments />, label: 'Chat' },
  { icon: <FaLifeRing />, label: 'Support' },
  { icon: <FaCog />, label: 'Setting' },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`bg-white shadow-md min-h-screen p-4 transition-all duration-300
        ${collapsed ? 'w-16' : 'w-[220px]'}
      `}
      aria-label="Sidebar Navigation"
    >
      <button
        onClick={() => setCollapsed(!collapsed)}
        aria-expanded={!collapsed}
        className="mb-8 w-full text-left font-bold text-[#30C4C7] focus:outline-none"
      >
        {!collapsed ? (
          <>
            Health<span className="text-black">care.</span>
          </>
        ) : (
          'HC'
        )}
      </button>

      <nav>
        <ul className="space-y-4">
          {navItems.map(({ icon, label }) => (
            <li key={label}>
              <a
                href="#!"
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer rounded-md p-2
                focus:outline-none focus:ring-2 focus:ring-blue-400"
                tabIndex={0}
                aria-label={label}
                title={collapsed ? label : undefined}
              >
                <span className="text-lg">{icon}</span>
                {!collapsed && <span className="text-sm">{label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
