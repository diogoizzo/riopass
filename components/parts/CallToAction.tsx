import Image from 'next/image';
import React from 'react';

function CallToAction() {
   return (
      <div className="mt-3 sticky top-24 bg-why-blue-600 rounded-md shadow-md  p-4 text-center text-why-gray-100">
         <h2 className="text-3xl mt-4 font-semibold text-why-yellow-400">
            <span className="block text-3xl md:text-4xl font-bold mb-1 uppercase text-shadow-light text-why-yellow-600">
               ENTRE PARA O CLUBE
            </span>
         </h2>

         <h2 className="text-xl md:text-2xl  font-semibold text-why-yellow-400">
            e economize em sua viagem no Rio de Janeiro!
         </h2>
         <p className="text-lg md:text-xl mt-4 mb-3 text-why-gray-200">
            Compre, escolha, reserve e viva momentos mágicos com descontos
            exclusivos!
         </p>
         <p className="mb-12 text-base md:text-lg text-gray-300">
            <span className="block text-2xl md:text-3xl font-medium">
               De R$199,00
            </span>{' '}
            por apenas
            <span className="block text-5xl md:text-6xl font-bold text-why-yellow-600 text-shadow-light">
               R$99,00
            </span>
         </p>
         <button className="absolute px-8 uppercase border-4  border-why-gray-50 -bottom-8 right-1/2 translate-x-1/2 py-4 bg-why-yellow-600 hover:bg-why-yellow-500 transition-all text-2xl font-semibold text-why-blue-600 rounded-md ">
            Comprar
         </button>
      </div>
   );
}

export default CallToAction;
