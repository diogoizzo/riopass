import Image from 'next/image';
import React from 'react';

interface infoProps {
   durationHours?: string;
   destination?: string;
   partner?: string;
}

function Info({ durationHours, destination, partner }: infoProps) {
   return (
      <div className="w-full flex flex-col md:flex-row ">
         <div className="w-full md:w-1/3 border-b border-why-black border-r flex justify-center items-center">
            <div className="flex space-x-3 py-12 items-center">
               <div>
                  <svg
                     className="w-14 h-14 text-why-green-600"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24"
                     id="stopwatch"
                  >
                     <path
                        fill="currentcolor"
                        d="M18.3,8.59l.91-.9a1,1,0,0,0-1.42-1.42l-.9.91a8,8,0,0,0-9.79,0l-.91-.92A1,1,0,0,0,4.77,7.69l.92.91A7.92,7.92,0,0,0,4,13.5,8,8,0,1,0,18.3,8.59ZM12,19.5a6,6,0,1,1,6-6A6,6,0,0,1,12,19.5Zm-2-15h4a1,1,0,0,0,0-2H10a1,1,0,0,0,0,2Zm3,6a1,1,0,0,0-2,0v1.89a1.5,1.5,0,1,0,2,0Z"
                     ></path>
                  </svg>
               </div>
               <div>
                  <p className="text-lg text-why-gray-900 ">
                     {durationHours} horas
                  </p>
                  <h3 className="text-gray-400">Duração</h3>
               </div>
            </div>
         </div>
         <div className="w-full md:w-1/3 border-b border-why-black border-r flex justify-center items-center">
            <div className="flex space-x-3 py-12 items-center">
               <div>
                  <svg
                     className="w-14 h-14 text-why-green-600"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24"
                     id="location-point"
                  >
                     <path
                        fill="currentcolor"
                        d="M18,4.48a8.45,8.45,0,0,0-12,12l5.27,5.28a1,1,0,0,0,1.42,0L18,16.43A8.45,8.45,0,0,0,18,4.48ZM16.57,15,12,19.59,7.43,15a6.46,6.46,0,1,1,9.14,0ZM9,7.41a4.32,4.32,0,0,0,0,6.1,4.31,4.31,0,0,0,7.36-3,4.24,4.24,0,0,0-1.26-3.05A4.3,4.3,0,0,0,9,7.41Zm4.69,4.68a2.33,2.33,0,1,1,.67-1.63A2.33,2.33,0,0,1,13.64,12.09Z"
                     ></path>
                  </svg>
               </div>
               <div>
                  <p className="text-lg text-why-gray-900 ">{destination}</p>
                  <h3 className="text-gray-400">Destino</h3>
               </div>
            </div>
         </div>
         <div className="w-full md:w-1/3 border-b border-why-black flex justify-center items-center">
            <div className="flex space-x-4 py-12 items-center">
               <div>
                  <svg
                     className="w-10 h-10 text-why-green-600"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 448 512"
                  >
                     <path
                        fill="currentcolor"
                        d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
                     />
                  </svg>
               </div>
               <div>
                  <p className="text-lg text-why-gray-900 ">{partner} </p>
                  <h3 className="text-gray-400">Parceiro</h3>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Info;
