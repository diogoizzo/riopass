import HowItWorkStep from '../atoms/HowItWorkStep';

function HowItWork({ children }: { children: any }) {
   return (
      <section className="bg-why-gray-50 py-24">
         <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center">
               <div className="w-1/2">{children}</div>
               <div className="w-1/2 flex flex-col space-y-10">
                  <div className="flex items-center space-x-4">
                     <HowItWorkStep num={1} />

                     <p className="text-3xl text-why-card-blue-300 font-medium">
                        Compre o Rio Travel Club
                     </p>
                  </div>
                  <div className="flex items-center space-x-4">
                     <HowItWorkStep num={2} />

                     <p className="text-3xl text-why-card-blue-300 font-medium">
                        Escolha seu passeio ou atração turística
                     </p>
                  </div>
                  <div className="flex items-center space-x-4">
                     <HowItWorkStep num={3} />

                     <p className="text-3xl text-why-card-blue-300 font-medium">
                        Reserve seu passeio e/ou atração com nosso suporte
                        dedicado
                     </p>
                  </div>
                  <div className="flex items-center space-x-4">
                     <HowItWorkStep num={4} />

                     <p className="text-3xl text-why-card-blue-300 font-medium">
                        Pague com desconto diretamente ao nosso parceiro
                     </p>
                  </div>
                  <div className="flex items-center space-x-4">
                     <HowItWorkStep num={5} />

                     <p className="text-3xl text-why-card-blue-300 font-medium">
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
