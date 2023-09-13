import React from 'react';

interface ItineraryStepProps {
   order: number;
   name: string;
}

function ItineraryStep({ order, name }: ItineraryStepProps) {
   return (
      <div>
         <div className="border-l-4  border-dotted border-why-green-600 relative z-40 pl-8 ml-10 mt-12 w-full h-10">
            <div className="absolute  -top-12 -left-[26px] text-3xl h-12 w-12 border-4 border-why-green-600 bg-why-green-400 flex items-center justify-center rounded-full">
               <div className=" font-semibold text-xl text-why-gray-200 h-8 w-8  bg-why-green-600 flex items-center justify-center rounded-full">
                  {order}
               </div>
            </div>
            <h2 className="relative -top-10 text-2xl font-medium text-why-gray-900">
               {name}
            </h2>
         </div>
      </div>
   );
}

export default ItineraryStep;
