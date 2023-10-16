import HowItWorkStep from '../atoms/HowItWorkStep';

function HowItWork({ children }: { children: any }) {
   return (
      <section className="bg-why-gray-50 pt-6 md:py-24">
         <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center">
               <div className="w-full lg:w-1/2">{children}</div>
               <div className="w-full lg:w-1/2 flex flex-col mt-10 md:mt-0 space-y-5 md:space-y-10 mb-16 md:mb-0">
                  <div className="flex items-center space-x-4">
                     <HowItWorkStep num={1} />

                     <p className="text-xl md:text-3xl text-why-card-blue-300 font-medium">
                        Compre o Rio Travel Club
                     </p>
                  </div>
                  <div className="flex items-center space-x-4">
                     <HowItWorkStep num={2} />

                     <p className="text-xl md:text-3xl text-why-card-blue-300 font-medium">
                        Escolha seu passeio ou atração turística
                     </p>
                  </div>
                  <div className="flex items-center space-x-4">
                     <HowItWorkStep num={3} />

                     <p className="text-xl md:text-3xl text-why-card-blue-300 font-medium">
                        Reserve seu passeio e/ou atração com nosso suporte
                        dedicado
                     </p>
                  </div>
                  <div className="flex items-center space-x-4">
                     <HowItWorkStep num={4} />

                     <p className="text-xl md:text-3xl text-why-card-blue-300 font-medium">
                        Pague com desconto diretamente ao nosso parceiro
                     </p>
                  </div>
                  <div className="flex items-center space-x-4">
                     <HowItWorkStep num={5} />

                     <p className="text-xl md:text-3xl text-why-card-blue-300 font-medium">
                        Viva uma experiência única no Rio
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
export default HowItWork;
