import React from 'react';

function PageHeroCheckout({
   title,
   subtitle,
   img
}: {
   title: string;
   subtitle: string;
   img: string;
}) {
   return (
      <div
         className={`w-full pt-36 pb-24 md:py-40 text-center  bg-cover bg-center`}
         style={{ backgroundImage: `url("${img}")` }}
      >
         <div className="relative">
            <h1 className="text-5xl md:text-8xl tracking-wider text-shadow-light text-white font-bold ">
               {title}
            </h1>
            <p className="text-white/90 text-xl mt-4 px-4 ">{subtitle}</p>
         </div>
      </div>
   );
}

export default PageHeroCheckout;
