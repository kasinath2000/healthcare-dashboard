// import React from 'react';
// import { healthCards } from '../../data/healthData';

// const statusColorMap = {
//   red: 'bg-red-500',
//   green: 'bg-green-500',
//   orange: 'bg-orange-400',
// };

// const HealthStatusCards = () => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
//       {healthCards.map((card, index) => (
//         <div
//           key={index}
//           className="bg-white p-4 rounded-xl shadow-sm space-y-2"
//         >
//           <div className="flex justify-between items-center">
//             <h4 className="font-semibold text-sm">{card.title}</h4>
//             <span
//               className={`w-3 h-3 rounded-full ${statusColorMap[card.color]}`}
//             ></span>
//           </div>
//           <p className="text-xs text-gray-500">Date: {card.date}</p>
//           <div className="h-2 rounded bg-gray-200 overflow-hidden">
//             <div
//               className={`h-full ${statusColorMap[card.color]}`}
//               style={{ width: '70%' }}
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HealthStatusCards;




// import React from 'react';
// import healthCardsData from '../../data/healthData';

// const getColorClass = (color) => {
//   switch (color) {
//     case 'green':
//       return 'bg-green-500';
//     case 'orange':
//       return 'bg-yellow-500';
//     case 'red':
//       return 'bg-red-500';
//     default:
//       return 'bg-gray-300';
//   }
// };

// const HealthStatusCards = () => {
//   return (
//     <div className="flex flex-col gap-4">
//       {healthCardsData.map((item, index) => (
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
//           <div className="w-full h-2 bg-gray-200 rounded-full">
//             <div
//               className={`h-2 rounded-full ${getColorClass(item.color)}`}
//               style={{ width: `${item.progress}%` }}
//             ></div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HealthStatusCards;


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
          <div className="flex items-center gap-3">
            <img src={item.img} alt={item.title} className="w-8 h-8 object-contain" />
            <div>
              <h4 className="text-sm font-semibold text-gray-700">{item.title}</h4>
              <p className="text-xs text-gray-500">{item.date}</p>
            </div>
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
