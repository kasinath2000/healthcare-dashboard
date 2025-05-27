
// import React from 'react';
// import AnatomySectionWithCards from './AnatomySectionWithCards';
// import CalendarView from './CalendarView';
// import UpcomingSchedule from './UpcomingSchedule';
// import ActivityFeed from './ActivityFeed';

// const DashboardMainContent = () => {
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//       {/* LEFT COLUMN: Anatomy + Health Cards + Activity */}
//       <div className="flex flex-col gap-6">
//       <h1>Dashboard</h1>

//         <AnatomySectionWithCards />
//         <ActivityFeed />
//       </div>

//       {/* RIGHT COLUMN: Calendar + Upcoming */}
//       <div className="flex flex-col gap-6">
//         <CalendarView />
//         <UpcomingSchedule />
//       </div>
//     </div>
//   );
// };

// export default DashboardMainContent;



/**------------------------responsive --------------------- */
import React from 'react';
import AnatomySectionWithCards from './AnatomySectionWithCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12 py-6 max-w-7xl mx-auto">
      <h1 className="text-xl md:text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">
          <AnatomySectionWithCards />
          <ActivityFeed />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </section>
  );
};

export default DashboardMainContent;
