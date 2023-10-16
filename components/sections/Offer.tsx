import Image from 'next/image';
function Offer() {
   return (
      <section className="pt-16 font-medium bg-why-gray-50">
         <div className="max-w-6xl mx-auto text-center">
            <span className="inline-block py-3 px-7 mb-10 font-semibold text-3xl leading-5 text-why-blue-900/80 underline underline-offset-[1rem] decoration-2">
               Promoção de Baixa Temporada
            </span>
            <h2 className="mb-14 xl:mb-16 text-why-blue-900 text-5xl leading-tight ">
               Não perca nossa promoção de baixa temporada, <br />
               Você compra agora e usa quando quiser!
            </h2>
         </div>
         <div className="bg-gradient-to-r from-why-yellow-400 via-why-green-500 to-why-blue-400 flex items-center justify-center py-16 rounded-t-[300px]">
            <div className="text-center">
               <p className="mb-8 font-semibold text-lg text-why-gray-200">
                  <span className="block text-4xl mb-1">De R$150,00</span> por
                  apenas
                  <span className="block text-7xl font-bold mt-1 text-shadow-lighter text-why-gray-50">
                     R$99,00
                  </span>
               </p>
               <p className="text-lg text-why-gray-200">
                  <span className="block text-3xl mb-1">
                     Promoção por tempo limitado!
                  </span>
                  Corra e garanta descontos incríveis em passeios no Rio de
                  Janeiro.
               </p>
               <button className="mt-12 inline-flex items-center justify-center px-12 font-semibold  rounded-md  shadow-md  hover:scale-105 hover:shadow-lg transition-all ease-in-out   text-why-gray-50 py-3 bg-why-yellow-500 ">
                  COMPRAR AGORA
               </button>
               <div className="max-w-[450px] mt-5 drop-shadow mx-auto">
                  <Image
                     src={'/img/selo-mercadopago.png'}
                     width={1722}
                     height={560}
                     alt="Selo de compra garantida do mercado pago"
                  />
               </div>
            </div>
         </div>
      </section>
   );
}
export default Offer;
