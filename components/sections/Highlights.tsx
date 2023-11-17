import Image from 'next/image';

function Highlights() {
   return (
      <section className="bg-why-gray-50 pb-14 pt-36 md:pt-28">
         <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -m-3">
               <div className="w-full md:w-1/2 xl:w-1/4 p-3">
                  <div className="bg-[#00877a] rounded-md shadow-md">
                     <div className="flex flex-col justify-center items-center px-4 pt-8 pb-6">
                        <Image
                           className="mb-4 h-52"
                           src="/img/price.svg"
                           width={216}
                           height={218}
                           alt=""
                        />
                        <p className=" text-3xl text-center text-why-gray-50">
                           Descontos de até 50%
                        </p>
                     </div>
                  </div>
               </div>
               <div className="w-full md:w-1/2 xl:w-1/4 p-3">
                  <div className="bg-[#008a9f]  rounded-md shadow-md">
                     <div className="flex flex-col justify-center items-center px-4 pt-8 pb-6 ">
                        <Image
                           className="mb-4 h-52"
                           src="/img/pin.svg"
                           width={216}
                           height={216}
                           alt=""
                        />
                        <p className="text-3xl text-center text-why-gray-50">
                           +30 Passeios e <br /> Atrações
                        </p>
                     </div>
                  </div>
               </div>
               <div className="w-full md:w-1/2 xl:w-1/4 p-3">
                  <div className="bg-[#00877a]  rounded-md shadow-md">
                     <div className="flex flex-col justify-center items-center px-4 pt-8 pb-6">
                        <Image
                           className="mb-4 h-52"
                           src="/img/save.svg"
                           width={241}
                           height={241}
                           alt=""
                        />
                        <p className="text-3xl text-center text-why-gray-50">
                           Garantia de <br /> 90 dias
                        </p>
                     </div>
                  </div>
               </div>
               <div className="w-full md:w-1/2 xl:w-1/4 p-3">
                  <div className="bg-[#008a9f]  rounded-md shadow-md">
                     <div className="flex flex-col justify-center items-center px-4 pt-8 pb-6">
                        <Image
                           className="mb-4 h-52"
                           width={266}
                           height={266}
                           src="/img/partners.svg"
                           alt=""
                        />
                        <p className="text-3xl text-center text-why-gray-50 ">
                           Parceiros Bem Avaliados
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
export default Highlights;
