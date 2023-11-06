import HowItWorkStep from '../atoms/HowItWorkStep';

function HowItWork({ children }: { children: any }) {
   return (
      <section className="bg-why-gray-50 pt-6 md:py-24">
         <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center ">
               <div className="w-full lg:w-1/2">{children}</div>
               <div className="w-full lg:w-1/2 flex flex-col mt-10 md:mt-0 space-y-5 md:space-y-7 justify-center mb-16 md:mb-0">
                  <div className="flex items-start space-x-4">
                     <HowItWorkStep num={1} />

                     <div>
                        <p className="text-xl md:text-2xl text-why-card-blue-300 font-medium">
                           Entre para o Rio Travel Club.
                        </p>
                        <p className="text-lg  text-why-card-blue-300/90 mt-1 font-medium">
                           Compre o RTC pelo site com toda a segurança do
                           Mercado Pago.
                        </p>
                     </div>
                  </div>
                  <div className="flex items-start space-x-4">
                     <HowItWorkStep num={2} />

                     <div>
                        <p className="text-xl md:text-2xl text-why-card-blue-300 font-medium">
                           Acesse a área de membros e escolha seu passeio.
                        </p>
                        <p className="text-lg  text-why-card-blue-300/90 mt-1 font-medium">
                           Ao entrar para o RTC você terá acesso a uma área de
                           membros exclusiva.
                        </p>
                     </div>
                  </div>
                  <div className="flex items-start space-x-4">
                     <HowItWorkStep num={3} />

                     <div>
                        <p className="text-xl md:text-2xl text-why-card-blue-300 font-medium">
                           Clique no botão de reserva e preencha o formulário.
                        </p>
                        <p className="text-lg  text-why-card-blue-300/90 mt-1 font-medium">
                           Dentro da área de membro você poderá reservar seu
                           passeio com nosso suporte.
                        </p>
                     </div>
                  </div>
                  <div className="flex items-start space-x-4">
                     <HowItWorkStep num={4} />

                     <div>
                        <p className="text-xl md:text-2xl text-why-card-blue-300 font-medium">
                           Pague com desconto diretamente ao nosso parceiro.
                        </p>
                        <p className="text-lg  text-why-card-blue-300/90 mt-1 font-medium">
                           Com a reserva confirmada é só aguardar o dia do
                           passeio e realizar o pagamento com desconto
                           diretamente com nosso parceiro.
                        </p>
                     </div>
                  </div>
                  <div className="flex items-start space-x-4">
                     <HowItWorkStep num={5} />

                     <div>
                        <p className="text-xl md:text-2xl text-why-card-blue-300 font-medium">
                           Viva uma experiência única no Rio.
                        </p>
                        <p className="text-lg  text-why-card-blue-300/90 mt-1 font-medium">
                           Agora é só relaxar e curtir a Cidade Maravilhosa com
                           toda segurança e conforto.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
export default HowItWork;
