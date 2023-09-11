import React from 'react';

function CallToAction() {
   return (
      <div className="mt-3 relative bg-why-blue-600 rounded-md shadow-md  p-4 text-center text-why-gray-100">
         <h2 className="text-4xl mt-2 font-semibold text-why-yellow-400">
            Compre agora e economize em suas experiências
         </h2>
         <p className="text-xl mt-4 mb-10 text-why-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            quia qui commodi odit porro, error nisi cupiditate optio voluptas
            provident ducimus
         </p>
         <button className="absolute px-8 uppercase border-4  border-why-gray-50 -bottom-8 right-1/2 translate-x-1/2 py-4 bg-why-yellow-600 text-2xl font-semibold text-why-blue-600 rounded-md ">
            Comprar
         </button>
      </div>
   );
}

export default CallToAction;
