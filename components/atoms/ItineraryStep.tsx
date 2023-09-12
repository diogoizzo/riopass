import React from 'react';

function ItineraryStep() {
   return (
      <div>
         <div className="border-l-4 border-dotted border-why-green-600 relative z-40 pl-12 ml-10 mt-14 w-full h-16">
            <div className="absolute  -top-14 -left-8 text-3xl h-16 w-16 border-4 border-why-green-600 bg-why-green-400 flex items-center justify-center rounded-full">
               <div className=" font-semibold text-3xl text-why-gray-200 h-12 w-12  bg-why-green-600 flex items-center justify-center rounded-full">
                  15
               </div>
            </div>
            <h2 className="relative -top-12 text-4xl font-medium text-why-gray-900">
               Esta é a etapa do tour
            </h2>
         </div>
      </div>
   );
}

export default ItineraryStep;
