import Image from 'next/image';
import React from 'react';
import { Related } from '../../pages/[lang]/[url]';
import Link from 'next/link';

function TourCard({
   name,
   description,
   price,
   finalPrice,
   destination,
   durationHours,
   featuredPhoto,
   url
}: Related) {
   return (
      <div className="w-1/4 border border-why-gray-100 shadow-sm h-fit rounded-md bg-white">
         <Link href={`/pt/${url}`}>
            <div className="w-full relative h-56 border-b-4 border-why-blue-600 overflow-hidden  ">
               <Image
                  className="rounded-t-sm"
                  src={featuredPhoto?.src}
                  fill={true}
                  alt={
                     featuredPhoto?.description ||
                     featuredPhoto?.name ||
                     'Não foi fornecida nenhuma descrição para a imagem'
                  }
                  style={{ objectFit: 'cover' }}
               />
               <div className="absolute bottom-0 right-0 px-6 rounded-tl-sm py-2 bg-why-blue-600 text-why-gray-100 font-semibold text-2xl">
                  <div className="flex items-baseline space-x-1">
                     <p className="line-through text-base">R${String(price)}</p>
                     <p>R${String(finalPrice)}</p>
                  </div>
               </div>
            </div>
            <div className="p-5 flex flex-col">
               <h4 className="text-xl mt-2 mb-2 text-why-gray-900 font-medium">
                  {name}
               </h4>
               <p className="text-why-gray-800 ">{description}</p>
            </div>
            <div className="flex w-full justify-center items-center text-center border-t border-why-gray-200">
               <div className="w-1/2 py-3 border-r border-why-gray-200 flex justify-center items-center text-why-gray-800">
                  <svg
                     className="w-5 h-5 mr-2 text-why-green-600"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24"
                     id="stopwatch"
                  >
                     <path
                        fill="currentcolor"
                        d="M18.3,8.59l.91-.9a1,1,0,0,0-1.42-1.42l-.9.91a8,8,0,0,0-9.79,0l-.91-.92A1,1,0,0,0,4.77,7.69l.92.91A7.92,7.92,0,0,0,4,13.5,8,8,0,1,0,18.3,8.59ZM12,19.5a6,6,0,1,1,6-6A6,6,0,0,1,12,19.5Zm-2-15h4a1,1,0,0,0,0-2H10a1,1,0,0,0,0,2Zm3,6a1,1,0,0,0-2,0v1.89a1.5,1.5,0,1,0,2,0Z"
                     ></path>
                  </svg>
                  {durationHours} horas
               </div>
               <div className="w-1/2 flex justify-center items-center py-3 text-why-gray-800">
                  <svg
                     className="w-5 h-5 mr-2 text-why-green-600"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24"
                     id="location-point"
                  >
                     <path
                        fill="currentcolor"
                        d="M18,4.48a8.45,8.45,0,0,0-12,12l5.27,5.28a1,1,0,0,0,1.42,0L18,16.43A8.45,8.45,0,0,0,18,4.48ZM16.57,15,12,19.59,7.43,15a6.46,6.46,0,1,1,9.14,0ZM9,7.41a4.32,4.32,0,0,0,0,6.1,4.31,4.31,0,0,0,7.36-3,4.24,4.24,0,0,0-1.26-3.05A4.3,4.3,0,0,0,9,7.41Zm4.69,4.68a2.33,2.33,0,1,1,.67-1.63A2.33,2.33,0,0,1,13.64,12.09Z"
                     ></path>
                  </svg>
                  {destination}
               </div>
            </div>
         </Link>
      </div>
   );
}

export default TourCard;
