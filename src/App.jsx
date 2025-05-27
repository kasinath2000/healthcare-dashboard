import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardMainContent from './components/Dashboard/DashboardMainContent';

const App = () => {
  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex flex-col flex-1">
        <Header />

        <main className="p-6 space-y-6 overflow-auto">
          <DashboardMainContent />
        </main>
      </div>
    </div>
  );
};

export default App;



/**---------------------------------responsive------------- */
// import React, { useState } from 'react';
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';
// import DashboardMainContent from './components/Dashboard/DashboardMainContent';

// const App = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="min-h-screen flex bg-gray-100 text-gray-900">
//       {/* Sidebar: hidden on mobile by default */}
//       <aside
//         className={`
//           fixed inset-y-0 left-0 bg-white shadow-md p-4
//           w-[220px] transform transition-transform duration-300 ease-in-out
//           ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
//           md:static md:translate-x-0 md:flex-shrink-0
//           z-30
//         `}
//         aria-label="Sidebar Navigation"
//       >
//         <Sidebar />
//       </aside>

//       {/* Overlay for mobile when sidebar is open */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-30 z-20 md:hidden"
//           onClick={() => setSidebarOpen(false)}
//           aria-hidden="true"
//         />
//       )}

//       {/* Main content area */}
//       <div className="flex flex-col flex-1 min-w-0">
//         <Header
//           onMenuClick={() => setSidebarOpen(!sidebarOpen)} // pass a prop for menu toggle
//         />

//         {/* Scrollable main content */}
//         <main className="p-6 space-y-6 overflow-auto max-h-screen">
//           <DashboardMainContent />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default App;
