// import React from 'react';

// // const SimpleAppointmentCard = ({ title, time, icon }) => (
// //   <div className="bg-indigo-50 rounded-xl p-3 flex justify-between items-center text-sm">
// //     <div>
// //       <p className="font-medium text-gray-800">{title}</p>
// //       <p className="text-xs text-gray-500">{time}</p>
// //     </div>
// //     <span className="text-xl">{icon}</span>
// //   </div>
// // );
// const SimpleAppointmentCard = ({ title, time, icon }) => (
//   <div className="bg-indigo-50 rounded-xl p-3 flex justify-between items-center text-sm">
//     <div>
//       <p className="font-medium text-gray-800">{title}</p>
//       <p className="text-xs text-gray-500">{time}</p>
//     </div>
//     <span className="text-xl">{icon}</span>
//   </div>
// );

// export default SimpleAppointmentCard;



/***--------------------------responsive--------------------- */

import React from 'react';

const SimpleAppointmentCard = ({ title, time, icon }) => (
  <div className="bg-indigo-50 hover:bg-indigo-100 transition rounded-xl p-3 flex justify-between items-center text-sm cursor-pointer">
    <div>
      <p className="font-medium text-gray-800">{title}</p>
      <p className="text-xs text-gray-500">{time}</p>
    </div>
    <span className="text-xl text-indigo-600">{icon}</span>
  </div>
);

export default SimpleAppointmentCard;
