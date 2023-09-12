import React from 'react';

function TourTitle({ title, img }: { title: string; img: string }) {
   return (
      <div
         className={`w-full py-72 text-center   bg-cover bg-center`}
         style={{ backgroundImage: `url("${img}")` }}
      >
         <h1 className="text-7xl text-shadow text-white font-bold relative -top-16">
            {title}
         </h1>
      </div>
   );
}

export default TourTitle;
