// import React from 'react';
// import { activityData } from '../../data/activityData';

// const ActivityFeed = () => {
//   const maxCount = Math.max(...activityData.map(d => d.count));

//   return (
//     <div className="bg-white p-4 rounded-2xl shadow-sm">
//       <h3 className="font-semibold text-lg mb-2">Activity</h3>
//       <p className="text-sm text-gray-500 mb-4">3 appointments on this week</p>

//       <div className="flex items-end justify-between h-32">
//         {activityData.map((data, i) => (
//           <div key={i} className="flex flex-col items-center space-y-1">
//             <div
//               className="w-3 rounded-full bg-indigo-500 transition-all"
//               style={{ height: `${(data.count / maxCount) * 100}%` }}
//             ></div>
//             <span className="text-xs text-gray-500">{data.day}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ActivityFeed;





import React from 'react';
import { activityData } from '../../data/activityData';

const ActivityFeed = () => {
  const maxCount = Math.max(...activityData.map(d => d.count));

  return (
    <div className="bg-white p-3 rounded-2xl shadow-sm">
      <h3 className="font-semibold text-base mb-1">Activity</h3>
      <p className="text-xs text-gray-500 mb-2">3 appointments on this week</p>

      {/* Reduced height */}
      <div className="flex items-end justify-between h-28 gap-x-3">
        {activityData.map((data, i) => (
          <div key={i} className="flex flex-col items-center space-y-0.5">
            {/* Smaller bar container */}
            <div className="h-20 w-2.5 bg-gray-200 rounded-full overflow-hidden flex items-end">
              <div
                className="w-full bg-indigo-500 rounded-full transition-all"
                style={{ height: `${(data.count / maxCount) * 100}%` }}
              />
            </div>
            <span className="text-[10px] text-gray-500">{data.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
