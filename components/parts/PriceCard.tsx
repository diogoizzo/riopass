import React from 'react';

interface PriceCardProps {
   price: number;
   finalPrice: number;
}

function PriceCard({ price, finalPrice }: PriceCardProps) {
   return (
      <div className="w-full bg-white rounded-md shadow-sm overflow-hidden">
         <h2 className="w-full text-center text-3xl py-3 shadow-md  bg-why-blue-600 border-why-blue-600 text-why-gray-100 font-medium">
            Preço Normal
         </h2>
         <div className="w-full bg-why-yellow-400 text-center text-why-blue-600 text-4xl font-semibold py-5">
            R${price.toFixed(2).toString().replace('.', ',')}
            <span className="block text-base font-medium">por pessoa</span>
         </div>
         <h2 className="w-full text-center text-3xl py-3 shadow-md  bg-why-blue-600 border-why-blue-600 text-why-gray-100 font-medium">
            Com Travel Club
         </h2>
         <div className="w-full bg-why-yellow-400  text-center text-why-blue-600 text-4xl font-semibold py-5">
            R${finalPrice.toFixed(2).toString().replace('.', ',')}
            <span className="block text-base font-medium">por pessoa</span>
         </div>
         <h2 className="w-full text-center text-4xl py-5 shadow-md  bg-why-blue-600 border-why-blue-600 text-why-gray-100 font-medium">
            Economize
            <span className="font-black text-6xl block text-why-yellow-600 text-shadow-light">
               R${(price - finalPrice).toFixed(2).toString().replace('.', ',')}
            </span>
         </h2>
      </div>
   );
}

export default PriceCard;
