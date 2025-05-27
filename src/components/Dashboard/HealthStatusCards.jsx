

// import React from 'react';
// import healthData from '../../data/healthData';

// const getColorClass = (color) => {
//   switch (color) {
//     case 'green':
//       return 'bg-green-500';
//     case 'red':
//       return 'bg-red-500';
//     case 'orange':
//       return 'bg-orange-400';
//     default:
//       return 'bg-gray-300';
//   }
// };

// const HealthStatusCards = () => {
//   return (
//     <div className="flex flex-col gap-4">
//       {healthData.map((item, index) => (
//         <div
//           key={index}
//           className="bg-white p-4 rounded-xl shadow-md flex flex-col gap-2"
//         >
//           <div className="flex items-center gap-3">
//             <img src={item.img} alt={item.title} className="w-8 h-8 object-contain" />
//             <div>
//               <h4 className="text-sm font-semibold text-gray-700">{item.title}</h4>
//               <p className="text-xs text-gray-500">{item.date}</p>
//             </div>
//           </div>
//           {/* Progress Bar */}
//           <div className="h-2 rounded bg-gray-200 overflow-hidden">
//             <div
//               className={`h-full ${getColorClass(item.color)}`}
//               style={{ width: `${item.progress}%` }}
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HealthStatusCards;



/**-------------------------responsive------------------------------ */
import React from 'react';
import healthData from '../../data/healthData';

const getColorClass = (color) => {
  switch (color) {
    case 'green':
      return 'bg-green-500';
    case 'red':
      return 'bg-red-500';
    case 'orange':
      return 'bg-orange-400';
    default:
      return 'bg-gray-300';
  }
};

const HealthStatusCards = () => {
  return (
    <div className="flex flex-col gap-4">
      {healthData.map((item, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-xl shadow-md flex flex-col gap-2"
        >
          {/* Top Row: Image + Title */}
          <div className="flex items-center gap-3">
            <img src={item.img} alt={item.title} className="w-8 h-8 object-contain" />
            <div>
              <h4 className="text-sm font-semibold text-gray-700">{item.title}</h4>
              <p className="text-xs text-gray-500">{item.date}</p>
            </div>
          </div>

          {/* Status and Percentage */}
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">{item.status}</span>
            <span className="text-xs font-medium text-gray-700">{item.progress}%</span>
          </div>

          {/* Progress Bar */}
          <div className="h-2 rounded bg-gray-200 overflow-hidden">
            <div
              className={`h-full ${getColorClass(item.color)}`}
              style={{ width: `${item.progress}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
