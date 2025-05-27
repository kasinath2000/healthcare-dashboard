
// import React from 'react';
// import AnatomySection from './AnatomySection';
// import HealthStatusCards from './HealthStatusCards';
// import CalendarView from './CalendarView';
// import UpcomingSchedule from './UpcomingSchedule';
// import ActivityFeed from './ActivityFeed';

// const DashboardMainContent = () => {
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//       {/* Column 1: Anatomy + Status Cards */}
//       <div className="space-y-6 lg:col-span-1">
//         <AnatomySection />
//         <HealthStatusCards />
//       </div>

//       {/* Column 2: Calendar */}
//       <div className="lg:col-span-1">
//         <CalendarView />
//       </div>

//       {/* Column 3: Upcoming & Activity */}
//       <div className="space-y-6 lg:col-span-1">
//         <UpcomingSchedule />
//         <ActivityFeed />
//       </div>
//     </div>
//   );
// };

// export default DashboardMainContent;



import React from 'react';
import AnatomySectionWithCards from './AnatomySectionWithCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* LEFT COLUMN: Anatomy + Health Cards + Activity */}
      <div className="flex flex-col gap-6">
      <h1>Dashboard</h1>

        <AnatomySectionWithCards />
        <ActivityFeed />
      </div>

      {/* RIGHT COLUMN: Calendar + Upcoming */}
      <div className="flex flex-col gap-6">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default DashboardMainContent;
