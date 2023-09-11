import React from 'react';

function TourTag({ text }: { text: string }) {
   return (
      <span className="bg-why-green-600 inline-block rounded-md py-0.5 px-4 shadow-sm shadow-why-green-600/40 font-medium text-why-gray-100">
         {text}
      </span>
   );
}

export default TourTag;
