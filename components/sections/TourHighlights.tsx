import Image from 'next/image';
import Link from 'next/link';

function TourHighlights() {
   return (
      <section className="bg-why-gray-50 pb-2 pt-20">
         <div className="container mx-auto px-4 ">
            <h2 className="max-w-4xl text-why-blue-900 text-3xl md:text-5xl leading-tight font-medium text-center mx-auto mb-14">
               <span className="block py-3 px-7 mb-3 md:mb-10 font-semibold text-2xl md:leading-5 text-why-blue-900/80 underline underline-offset-4  md:underline-offset-[1rem] decoration-2">
                  Passeios em Destaque
               </span>
               Explore os Principais Passeios e Pontos Turísticos com o Rio
               Travel Club.
            </h2>
            <div className="flex w-full flex-wrap relative ">
               <div className="flex flex-col group w-1/2 pb-[1px] pr-[1px] md:pb-3 md:pr-3">
                  <h3 className="text-xl text-why-blue-900 leading-5 font-medium">
                     Giro Carioca - Um dia no Rio
                  </h3>
                  <p className="mt-0 text-gray-500 mb-3">
                     City Tour, Tour em grupo
                  </p>
                  <div className="h-64 md:h-96 w-full relative rounded-br-[70px] md:rounded-br-[250px] rounded-tl-lg border-t-[6px] border-why-blue-600 overflow-hidden">
                     <div className="absolute left-0 w-full md:w-fit md:px-6  top-0 py-2 md:py-3 rounded-br-md text-why-gray-50 bg-why-blue-600 z-30 ">
                        <div className="flex justify-center items-start font-medium space-x-2">
                           <p className="text-base line-through">R$390</p>
                           <p className="text-2xl leading-7">R$295</p>
                        </div>
                     </div>
                     <Image
                        src={'/img/giro-carioca.webp'}
                        fill={true}
                        className="object-cover group-hover:scale-110 transition-all ease-in-out duration-500 "
                        alt=""
                     />
                  </div>
               </div>
               <div className="flex group flex-col text-right w-1/2 pb-[1px] pl-[1px] md:pb-3  md:pl-3">
                  <h3 className="text-xl text-why-blue-900 leading-5 font-medium">
                     Vôo de Asa Delta
                  </h3>
                  <p className="mt-0 text-gray-500 mb-3">Vôo Livre</p>
                  <div className="h-64 md:h-96 w-full relative rounded-bl-[70px] md:rounded-bl-[250px] rounded-tr-lg overflow-hidden border-t-[6px] border-why-blue-600">
                     <div className="absolute right-0 px-6 w-full md:w-fit md:px-6  top-0 py-2 md:py-3 rounded-bl-md text-why-gray-50 bg-why-blue-600 z-30 ">
                        <div className="flex items-start justify-center font-medium space-x-2">
                           <p className="text-base line-through">R$799</p>
                           <p className="text-2xl leading-7">R$590</p>
                        </div>
                     </div>
                     <Image
                        src={'/img/asa-delta.webp'}
                        fill={true}
                        alt=""
                        className="object-cover group-hover:scale-110 transition-all ease-in-out duration-500 "
                     />
                  </div>
               </div>
               <div className="flex group flex-col w-1/2 pt-[1px] pr-[1px]  md:pt-3 md:pr-3 ">
                  <div className="h-64 md:h-96 w-full relative rounded-tr-[70px]  md:rounded-tr-[250px] rounded-bl-lg overflow-hidden border-b-[6px] border-why-blue-600 ">
                     <Image
                        src={'/img/angra.webp'}
                        fill={true}
                        alt=""
                        className="object-cover group-hover:scale-110 transition-all ease-in-out duration-500 "
                     />
                     <div className="absolute left-0 px-6 bottom-0 w-full md:w-fit py-2 md:py-3 rounded-tr-md text-why-gray-50 bg-why-blue-600 z-30 ">
                        <div className="flex items-start justify-center font-medium space-x-2">
                           <p className="text-base line-through">R$265</p>
                           <p className="text-2xl leading-7">R$140</p>
                        </div>
                     </div>
                  </div>
                  <h3 className="text-xl text-why-blue-900 leading-5 font-medium mt-3">
                     Passeio para Angra dos Reis e Ilha Grande
                  </h3>
                  <p className="mt-0 text-gray-500">
                     Tour em grupo, Praias, Passeio de Barco
                  </p>
               </div>
               <div className="flex group flex-col w-1/2 pt-[1px] pl-[1px]  md:pt-3  md:pl-3 text-right">
                  <div className="h-64 md:h-96 w-full relative md:rounded-tl-[250px] rounded-tl-[70px] rounded-br-lg  overflow-hidden border-b-[6px] border-why-blue-600">
                     <div className="absolute right-0 px-6 bottom-0 w-full md:w-fit py-2 md:py-3 rounded-tl-md text-why-gray-50 bg-why-blue-600 z-30 ">
                        <div className="flex items-start justify-center font-medium space-x-2">
                           <p className="text-base line-through">R$211</p>
                           <p className="text-2xl leading-7">R$120</p>
                        </div>
                     </div>
                     <Image
                        src={'/img/telegrafo.webp'}
                        fill={true}
                        alt=""
                        className="object-cover group-hover:scale-110 transition-all ease-in-out duration-500 "
                     />
                  </div>
                  <h3 className="text-xl text-why-blue-900 leading-5 font-medium mt-3">
                     Pedra do Telégrafo
                  </h3>
                  <p className="mt-0 text-gray-500">
                     Tour em grupo, Trilha, Jeep Tour
                  </p>
               </div>
               <div className="absolute w-16 md:h-fit md:w-fit  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Image
                     src={'/img/logo-simbol.svg'}
                     width={216}
                     height={275}
                     alt=""
                  />
               </div>
            </div>
            <div className="text-center mt-10 md:mt-6 mb-6">
               <Link
                  href={'/atracoes'}
                  className=" inline-flex items-center justify-center px-12 font-semibold  rounded-md  shadow-md shadow-why-yellow-600/40 hover:scale-105 hover:shadow-lg transition-all ease-in-out hover:shadow-why-yellow-600/30 text-why-gray-50 py-3 bg-why-yellow-500 s"
               >
                  Veja Todas as Atrações
               </Link>
            </div>
         </div>
      </section>
   );
}
export default TourHighlights;
