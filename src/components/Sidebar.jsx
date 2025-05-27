import React from 'react';
import { FaTachometerAlt, FaHistory, FaCalendarAlt, FaStethoscope, FaChartBar, FaFlask, FaComments, FaLifeRing, FaCog } from 'react-icons/fa';

const navItems = [
  { icon: <FaTachometerAlt />, label: "Dashboard" },
  { icon: <FaHistory />, label: "History" },
  { icon: <FaCalendarAlt />, label: "Calendar" },
  { icon: <FaStethoscope />, label: "Appointments" },
  { icon: <FaChartBar />, label: "Statistics" },
  { icon: <FaFlask />, label: "Tests" },
  { icon: <FaComments />, label: "Chat" },
  { icon: <FaLifeRing />, label: "Support" },
  { icon: <FaCog />, label: "Setting" },
];

const Sidebar = () => {
  return (
    <aside className="w-[220px] min-h-screen bg-white shadow-md p-4">
      <h1 className="text-xl font-bold mb-8 text-[#30C4C7]">Health<span className="text-black">care.</span></h1>
      <nav className="space-y-4">
        {navItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer">
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
