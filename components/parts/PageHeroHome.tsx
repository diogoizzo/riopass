import React from 'react';

function PageHero({
   title,
   subtitle,
   img
}: {
   title: string;
   subtitle: string;
   img: string;
}) {
   return (
      <section
         className={`w-full  lg:h-[100vh] h-fit py-60 md:py-64 text-center relative    bg-cover bg-center`}
         style={{ backgroundImage: `url("${img}")` }}
      >
         <div className="w-full bg-white absolute tracking-wider font-medium bg-gradient-to-r from-why-yellow-400 via-why-green-500 to-why-blue-400 shadow-md shadow-black/30 text-why-gray-50 text-lg md:text-xl py-4 md:py-6 top-[5rem]">
            <p>
               <span className="block md:inline">PROMOÇÃO DE LANÇAMENTO</span>{' '}
               DE R$199,00 POR R$99,00
            </p>
         </div>
         <div className="relative">
            <h1 className="text-5xl md:text-8xl px-3 md:px-0 tracking-wider text-white font-bold text-shadow-blue ">
               {title}
            </h1>
            <p className="text-white/90 text-xl mt-4 ">{subtitle}</p>
            <a
               href="#details"
               className="mt-12 inline-flex items-center justify-center px-12 font-semibold  rounded-md  shadow-sm shadow-why-yellow-600/30 hover:scale-105 hover:shadow-lg transition-all ease-in-out hover:shadow-why-yellow-600/30 text-why-gray-50 py-3 bg-why-yellow-500 "
            >
               Saiba Mais
            </a>
         </div>
         <div
            id="details"
            className="absolute -bottom-20 md:-bottom-2 left-1/2 transform -translate-x-1/2 bg-why-gray-50 rounded-xl py-7 text-why-blue-900 underline underline-offset-4 md:underline-offset-[0.5rem]  decoration-2 px-6 font-semibold text-3xl md:text-3xl w-[80%]"
         >
            <p className="w-full leading-[2.6rem]">
               Economize até 50% em passeios e atrativos turísticos no Rio de
               Janeiro!
            </p>
         </div>
      </section>
   );
}

export default PageHero;
