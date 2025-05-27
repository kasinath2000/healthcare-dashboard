



// import React from 'react';
// import { activityData } from '../../data/activityData';

// const ActivityFeed = () => {
//   const maxCount = Math.max(...activityData.map(d => d.count));

//   return (
//     <div className="bg-white p-3 rounded-2xl shadow-sm">
//       <h3 className="font-semibold text-base mb-1">Activity</h3>
//       <p className="text-xs text-gray-500 mb-2">3 appointments on this week</p>

//       {/* Reduced height */}
//       <div className="flex items-end justify-between h-28 gap-x-3">
//         {activityData.map((data, i) => (
//           <div key={i} className="flex flex-col items-center space-y-0.5">
//             {/* Smaller bar container */}
//             <div className="h-20 w-2.5 bg-gray-200 rounded-full overflow-hidden flex items-end">
//               <div
//                 className="w-full bg-indigo-500 rounded-full transition-all"
//                 style={{ height: `${(data.count / maxCount) * 100}%` }}
//               />
//             </div>
//             <span className="text-[10px] text-gray-500">{data.day}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ActivityFeed;


/****************************************responsive********** */


import React from 'react';
import { activityData } from '../../data/activityData';

const ActivityFeed = () => {
  const maxCount = Math.max(...activityData.map(d => d.count));

  return (
    <div className="bg-white p-3 rounded-2xl shadow-sm max-w-full">
      <h3 className="font-semibold text-base mb-1">Activity</h3>
      <p className="text-xs text-gray-500 mb-2">3 appointments on this week</p>

      {/* Responsive height and gap */}
      <div className="flex items-end justify-between h-24 sm:h-28 gap-x-2 sm:gap-x-3">
        {activityData.map((data, i) => (
          <div key={i} className="flex flex-col items-center space-y-0.5 min-w-[18px] sm:min-w-[26px]">
            {/* Bar container with responsive width and height */}
            <div className="h-16 sm:h-20 w-2.5 sm:w-2.5 bg-gray-200 rounded-full overflow-hidden flex items-end">
              <div
                className="w-full bg-indigo-500 rounded-full transition-all"
                style={{ height: `${(data.count / maxCount) * 100}%` }}
              />
            </div>
            <span className="text-[8px] sm:text-[10px] text-gray-500">{data.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
