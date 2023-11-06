import React from 'react';

interface PriceCardProps {
   price: number;
   finalPrice: number;
}

function PriceCard({ price, finalPrice }: PriceCardProps) {
   return (
      <div className="w-full  rounded-md shadow-sm overflow-hidden py-5 bg-why-blue-600 border-why-blue-600">
         <h2 className="w-full text-center text-2xl   text-why-gray-100   font-medium">
            Preço Normal
         </h2>
         <div className="w-full text-center text-why-gray-100 mt-1  text-4xl font-semibold pb-4 ">
            R${price?.toFixed(2).toString().replace('.', ',')}
            <span className="block text-base font-medium">por pessoa</span>
         </div>
         <h2 className="w-full text-center text-2xl pt-4   bg-why-yellow-400 text-why-blue-600 font-semibold">
            Preço Com Travel Club
         </h2>
         <div className="w-full bg-why-yellow-400 pb-4 pt-1   text-center text-why-blue-600 text-4xl font-bold ">
            R${finalPrice?.toFixed(2).toString().replace('.', ',')}
            <span className="block text-base font-medium">por pessoa</span>
         </div>
         <h2 className="w-full text-center text-3xl pt-4  bg-why-blue-600 border-why-blue-600 text-why-gray-100 font-medium">
            Economize
            <span className="font-bold text-5xl md:text-6xl mt-1  block text-why-yellow-600 text-shadow-light">
               R$
               {(price - finalPrice)?.toFixed(2).toString().replace('.', ',')}
            </span>
         </h2>
      </div>
   );
}

export default PriceCard;
