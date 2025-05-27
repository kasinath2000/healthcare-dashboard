// import React from 'react';
// import { upcomingAppointments } from '../../data/upcomingAppointments';
// import SimpleAppointmentCard from './SimpleAppointmentCard';

// const UpcomingSchedule = () => {
//   return (
//     <div className="bg-white p-4 rounded-2xl shadow-sm space-y-4">
//       <h3 className="font-semibold text-lg">The Upcoming Schedule</h3>
//       {Object.entries(upcomingAppointments).map(([day, appointments], i) => (
//         <div key={i}>
//           <h4 className="text-sm font-medium text-gray-600 mb-2">On {day}</h4>
//           <div className="space-y-2">
//             {appointments.map((appt, index) => (
//               <SimpleAppointmentCard key={index} {...appt} />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default UpcomingSchedule;


import React from 'react';
import { upcomingAppointments } from '../../data/upcomingAppointments';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const UpcomingSchedule = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm space-y-4">
      <h3 className="font-semibold text-lg">The Upcoming Schedule</h3>
      {Object.entries(upcomingAppointments).map(([day, appointments], i) => (
        <div key={i}>
          <h4 className="text-sm font-medium text-gray-600 mb-2">On {day}</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {appointments.map((appt, index) => (
              <SimpleAppointmentCard key={index} {...appt} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
