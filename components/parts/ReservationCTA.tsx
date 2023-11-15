import Link from 'next/link';
import React from 'react';

type tourInfo = {
   id?: string;
   name?: string;
};

function ReservationCTA({ id, name }: tourInfo) {
   return (
      <div className="mt-3 sticky top-24 bg-why-blue-600 rounded-md shadow-md  p-4 text-center text-why-gray-100">
         <h2 className="text-3xl mt-4 font-semibold text-why-yellow-400">
            <span className="block text-3xl md:text-4xl font-bold mb-1 uppercase text-shadow-light text-why-yellow-600">
               Reserve esse Tour
            </span>
         </h2>

         <h2 className="text-xl md:text-2xl  font-semibold text-why-yellow-400">
            e viva um experiência incrível.
         </h2>
         <p className="text-lg md:text-xl mt-4 mb-3 text-why-gray-200">
            Clique no botão abaixo e preencha o formulário, para fazer sua
            reserva.
         </p>
         <p className="mb-12 text-base md:text-lg text-gray-300">
            Depois, basta aguardar a nossa confirmação da sua reserva.
         </p>
         <Link
            href={{
               pathname: '/rio/pt/reservar',
               query: {
                  id,
                  name
               }
            }}
            className="absolute px-8 uppercase border-4  border-why-gray-50 -bottom-8 right-1/2 translate-x-1/2 py-4 bg-why-yellow-600 hover:bg-why-yellow-500 transition-all text-2xl font-semibold text-why-blue-600 rounded-md "
         >
            Reservar
         </Link>
      </div>
   );
}

export default ReservationCTA;
