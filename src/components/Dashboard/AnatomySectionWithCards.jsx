// import React from 'react';
// import AnatomySection from './AnatomySection';
// import HealthStatusCards from './HealthStatusCards';

// const AnatomySectionWithCards = () => {
//   return (
//     <div className="flex flex-col md:flex-row gap-6 w-full">
//       {/* Left: Anatomy illustration */}
//       <div className="w-full md:w-2/3">
//         <AnatomySection />
//       </div>

//       {/* Right: Vertical health status cards */}
//       <div className="w-full md:w-1/3 flex flex-col gap-4">
//         <HealthStatusCards />
//       </div>
//     </div>
//   );
// };

// export default AnatomySectionWithCards;


/**----------------------------------responsive---------------- */

import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';

const AnatomySectionWithCards = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full">
      {/* Left: Anatomy illustration */}
      <div className="w-full lg:w-2/3">
        <AnatomySection />
      </div>

      {/* Right: Health status cards */}
      <div className="w-full lg:w-1/3">
        <HealthStatusCards />
      </div>
    </div>
  );
};

export default AnatomySectionWithCards;
