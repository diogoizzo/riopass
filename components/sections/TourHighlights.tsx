import Image from 'next/image';

function TourHighlights() {
   return (
      <section className="bg-why-gray-50">
         <div className="container mx-auto px-4 ">
            <div className="flex w-full flex-wrap relative">
               <div className="flex w-1/2 pb-3 pr-3">
                  <div className="h-96 w-full relative rounded-br-[250px] rounded-tl-lg overflow-hidden">
                     <Image src={'/img/teste1.jpg'} fill={true} alt="" />
                  </div>
               </div>
               <div className="flex w-1/2 pb-3 pl-3">
                  <div className="h-96 w-full relative rounded-bl-[250px] rounded-tr-lg overflow-hidden">
                     <Image src={'/img/teste2.jpg'} fill={true} alt="" />
                  </div>
               </div>
               <div className="flex w-1/2 pt-3 pr-3 ">
                  <div className="h-96 w-full relative rounded-tr-[250px] rounded-bl-lg overflow-hidden ">
                     <Image src={'/img/teste3.jpg'} fill={true} alt="" />
                  </div>
               </div>
               <div className="flex w-1/2 pt-3 pl-3">
                  <div className="h-96 w-full relative rounded-tl-[250px] rounded-br-lg  overflow-hidden">
                     <Image src={'/img/teste4.jpg'} fill={true} alt="" />
                  </div>
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
