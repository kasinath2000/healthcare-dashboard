// import React from 'react';

// const AnatomySection = () => {
//   return (
//     <div className="bg-white p-4 rounded-2xl shadow-sm text-center relative">
//       <img
//         src="/anatomy-placeholder.png" 
//         alt="Anatomical Illustration"
//         className="mx-auto max-w-[160px]"
//       />
//       <div className="absolute left-[45%] top-[20%] bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
//         Healthy Heart
//       </div>
//       <div className="absolute left-[15%] top-[65%] bg-cyan-500 text-white text-xs px-2 py-1 rounded-full">
//         Healthy Leg
//       </div>
//     </div>
//   );
// };

// export default AnatomySection;



/**-------------------responsive-------------------- */

import React from 'react';

const AnatomySection = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm text-center relative min-h-[240px]">
      <img
        src="/anatomy-placeholder.png"
        alt="Anatomical Illustration"
        className="mx-auto w-32 md:w-40 lg:w-48"
      />

      {/* Labels positioned relative to image container size */}
      <div className="absolute left-[42%] top-[20%] bg-blue-500 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">
        Healthy Heart
      </div>
      <div className="absolute left-[12%] top-[65%] bg-cyan-500 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">
        Healthy Leg
      </div>
    </div>
  );
};

export default AnatomySection;
