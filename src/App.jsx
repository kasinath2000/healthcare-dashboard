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
