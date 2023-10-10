import Image from 'next/image';

function TourHighlights() {
   return (
      <section className="bg-why-gray-50 py-16">
         <div className="container mx-auto px-4 ">
            <div className="flex w-full flex-wrap relative">
               <div className="flex flex-col w-1/2 pb-3 pr-3">
                  <h3 className="text-xl text-why-blue-900 leading-5 font-medium">
                     City Tour Experiência
                  </h3>
                  <p className="mt-0 text-gray-500 mb-3">Guia, Transporte</p>
                  <div className="h-96 w-full relative rounded-br-[250px] rounded-tl-lg border-t-[6px] border-why-blue-600 overflow-hidden">
                     <div className="absolute left-0 px-6  top-0 py-3 rounded-br-md text-why-gray-50 bg-why-blue-600 z-30 ">
                        <div className="flex items-start font-medium space-x-2">
                           <p className="text-base line-through">R$350</p>
                           <p className="text-2xl leading-7">R$250</p>
                        </div>
                     </div>
                     <Image src={'/img/teste1.jpg'} fill={true} alt="" />
                  </div>
               </div>
               <div className="flex flex-col text-right w-1/2 pb-3 pl-3">
                  <h3 className="text-xl text-why-blue-900 leading-5 font-medium">
                     City Tour Experiência
                  </h3>
                  <p className="mt-0 text-gray-500 mb-3">Guia, Transporte</p>
                  <div className="h-96 w-full relative rounded-bl-[250px] rounded-tr-lg overflow-hidden border-t-[6px] border-why-blue-600">
                     <div className="absolute right-0 px-6  top-0 py-3 rounded-bl-md text-why-gray-50 bg-why-blue-600 z-30 ">
                        <div className="flex items-start font-medium space-x-2">
                           <p className="text-base line-through">R$350</p>
                           <p className="text-2xl leading-7">R$250</p>
                        </div>
                     </div>
                     <Image src={'/img/teste2.jpg'} fill={true} alt="" />
                  </div>
               </div>
               <div className="flex flex-col w-1/2 pt-3 pr-3 ">
                  <div className="h-96 w-full relative rounded-tr-[250px] rounded-bl-lg overflow-hidden border-b-[6px] border-why-blue-600 ">
                     <Image src={'/img/teste3.jpg'} fill={true} alt="" />
                     <div className="absolute left-0 px-6 bottom-0 py-3 rounded-tr-md text-why-gray-50 bg-why-blue-600 z-30 ">
                        <div className="flex items-start font-medium space-x-2">
                           <p className="text-base line-through">R$350</p>
                           <p className="text-2xl leading-7">R$250</p>
                        </div>
                     </div>
                  </div>
                  <h3 className="text-xl text-why-blue-900 leading-5 font-medium mt-3">
                     City Tour Experiência
                  </h3>
                  <p className="mt-0 text-gray-500">Guia, Transporte</p>
               </div>
               <div className="flex flex-col w-1/2 pt-3 pl-3 text-right">
                  <div className="h-96 w-full relative rounded-tl-[250px] rounded-br-lg  overflow-hidden border-b-[6px] border-why-blue-600">
                     <div className="absolute right-0 px-6 bottom-0 py-3 rounded-tl-md text-why-gray-50 bg-why-blue-600 z-30 ">
                        <div className="flex items-start font-medium space-x-2">
                           <p className="text-base line-through">R$350</p>
                           <p className="text-2xl leading-7">R$250</p>
                        </div>
                     </div>
                     <Image src={'/img/teste4.jpg'} fill={true} alt="" />
                  </div>
                  <h3 className="text-xl text-why-blue-900 leading-5 font-medium mt-3">
                     City Tour Experiência
                  </h3>
                  <p className="mt-0 text-gray-500">Guia, Transporte</p>
               </div>
               <div className="absolute h-fit w-fit  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Image
                     src={'/img/logo-simbol.svg'}
                     width={216}
                     height={275}
                     alt=""
                  />
               </div>
            </div>
         </div>
      </section>
   );
}
export default TourHighlights;
