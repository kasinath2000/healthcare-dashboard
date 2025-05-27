// import React from 'react';
// import { calendarData } from '../../data/calendarData';

// const CalendarView = () => {
//   return (
//     <div className="bg-white p-4 rounded-2xl shadow-sm">
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="font-semibold text-lg">{calendarData.month}</h3>
//         <div className="flex space-x-2 text-gray-400 text-sm">
//           <span>&lt;</span>
//           <span>&gt;</span>
//         </div>
//       </div>

//       <div className="grid grid-cols-7 text-xs text-center mb-2 font-medium text-gray-600">
//         {calendarData.weekdays.map((day, i) => (
//           <div key={i}>{day}</div>
//         ))}
//       </div>

//       <div className="grid grid-cols-7 text-center text-sm gap-y-2 ">
//         {calendarData.days.map((day, i) => (
//           <div key={i}>
//             <div className="font-medium">{day}</div>
//             {(calendarData.appointments[day] || []).map((time, idx) => (
//               <div
//                 key={idx}
//                 className="mt-1 text-white text-xs bg-indigo-500 rounded-md py-0.5"
//               >
//                 {time}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
// {/**this card are two two pair render  */}
//       <div className="mt-4 space-y-2">
//         {calendarData.highlights.map((item, i) => (
//           <div
//             key={i}
//             className="bg-indigo-100 p-3 rounded-xl flex items-center justify-between"
//           >
//             <div>
//               <p className="font-medium text-sm text-indigo-800">
//                 {item.title}
//               </p>
//               <p className="text-xs text-gray-600">{item.time}</p>
//               <p className="text-xs text-gray-500">{item.doctor}</p>
//             </div>
//             <div className="text-xl">{item.icon}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CalendarView;



import React from 'react';
import { calendarData } from '../../data/calendarData';

const CalendarView = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm">
      {/* Header with Month and Arrows */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">{calendarData.month}</h3>
        <div className="flex space-x-2 text-gray-400 text-sm cursor-pointer">
          <span>&lt;</span>
          <span>&gt;</span>
        </div>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-xs text-center mb-2 font-medium text-gray-600">
        {calendarData.weekdays.map((day, i) => (
          <div key={i}>{day}</div>
        ))}
      </div>

      {/* Day Grid */}
      <div className="grid grid-cols-7 text-center text-sm gap-y-2">
        {calendarData.days.map((day, i) => (
          <div key={i}>
            <div className="font-medium text-gray-700">{day}</div>
            {(calendarData.appointments[day] || []).map((time, idx) => (
              <div
                key={idx}
                className="mt-1 text-white text-xs bg-indigo-500 rounded-md py-0.5"
              >
                {time}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* this card are two two pair render */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {calendarData.highlights.map((item, i) => (
          <div
            key={i}
            className="bg-indigo-100 p-3 rounded-xl flex items-center justify-between"
          >
            <div>
              <p className="font-medium text-sm text-indigo-800">{item.title}</p>
              <p className="text-xs text-gray-600">{item.time}</p>
              <p className="text-xs text-gray-500">{item.doctor}</p>
            </div>
            <div className="text-xl">{item.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
