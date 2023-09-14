import React from 'react';

interface ItineraryStepProps {
   order: number;
   name: string;
}

function FinalItineraryStep({ order, name }: ItineraryStepProps) {
   return (
      <div>
         <div className=" relative flex items-center z-40 pl-[18px] w-full h-10">
            <div className=" text-3xl h-12 w-12 border-4 border-why-green-600 bg-why-green-400 flex items-center justify-center rounded-full">
               <div className=" font-semibold text-xl text-why-gray-200 h-8 w-8  bg-why-green-600 flex items-center justify-center rounded-full">
                  {order}
               </div>
            </div>
            <h2 className="relative pl-2  text-2xl font-medium text-why-gray-900">
               {name}
            </h2>
         </div>
      </div>
   );
}

export default FinalItineraryStep;
