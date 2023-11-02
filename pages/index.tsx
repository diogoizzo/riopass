import Head from 'next/head';
import Image from 'next/image';

export default function Homepage<NextPage>() {
   return (
      <>
         <Head>
            <title>Home</title>
         </Head>
         <div className="bg-gray-200 font-sans leading-normal tracking-normal">
            <section className="bg-white py-20">
               <div className="container mx-auto px-4">
                  <div className="max-w-2xl mx-auto text-center">
                     <Image
                        src={'/img/travelclub.svg'}
                        width={1083}
                        height={240}
                        alt="Logo do travel club"
                     />

                     <h1 className="text-4xl mt-10 font-bold mb-6 text-why-gray-900">
                        Uma nova forma de economizar em suas viagens no Rio de
                        Janeiro.
                     </h1>
                     <p className="text-gray-600 mb-12">
                        Cadastre seu email abaixo para ser o primeiro a saber
                        quando lançarmos, para que você comece a economizar
                        imediatamente.
                     </p>
                     <form id="newsletter" className="max-w-md mx-auto">
                        <div className="flex items-center">
                           <input
                              type="email"
                              className="bg-gray-100 mr-3 py-2 px-4 w-full rounded-md focus:outline-none focus:bg-white"
                              placeholder="Insira seu email"
                           />
                           <button
                              type="submit"
                              className="bg-why-blue-600 text-why-gray-100 py-2 px-4 rounded-md hover:bg-why-blue-400 focus:outline-none focus:ring-2 focus:ring-why-blue-500 focus:ring-opacity-50"
                           >
                              Cadastrar
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </section>

            <section className="bg-gray-200 py-20">
               <div className="container mx-auto px-4">
                  <div className="max-w-2xl mx-auto text-center">
                     <h2 className="text-3xl font-bold text-why-gray-900 text-wh mb-6">
                        O que você pode esperar
                     </h2>
                     <p className="text-why-gray-800 mb-12">
                        Um club de descontos exclusivo, onde você irá pagar um
                        valor fixo para obter um cupom de desconto para todas as
                        atrações dos nossos parceiros. Compra uma vez e utilize
                        em quantas atrações quiser.
                     </p>
                  </div>
                  <div className="flex flex-wrap -mx-4 mt-12">
                     <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="rounded-md bg-why-blue-600 shadow-md p-8">
                           <div className="text-4xl font-bold text-why-yellow-600 mb-4">
                              01
                           </div>
                           <h3 className="text-2xl font-bold text-why-gray-100 mb-4">
                              Compre uma vez
                           </h3>
                           <p className=" mb-4 text-why-gray-200">
                              O travel club terá um preço único, que você vai
                              pagar um única vez e vai receber um cupom que te
                              dará desconto em dezenas de atrações, sem limite
                              de utilização.
                           </p>
                        </div>
                     </div>
                     <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="rounded-md bg-why-blue-600 shadow-md p-8">
                           <div className="text-4xl font-bold text-why-yellow-600 mb-4">
                              02
                           </div>
                           <h3 className="text-2xl font-bold text-why-gray-100 mb-4">
                              Use várias vezes
                           </h3>
                           <p className=" text-why-gray-200 mb-4">
                              Ao comprar o travel club você terá acesso aos
                              descontos em todas as atrações dos nossos
                              parceiros, e, a partir da primeira utilização,
                              você poderá utilizar o benefício por um mês,
                              quantas vezes quiser.
                           </p>
                        </div>
                     </div>

                     <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="rounded-md bg-why-blue-600  shadow-md p-8">
                           <div className="text-4xl font-bold text-why-yellow-600  mb-4">
                              03
                           </div>
                           <h3 className="text-2xl font-bold mb-4 text-why-gray-100">
                              Reserve com facilidade
                           </h3>
                           <p className="text-why-gray-200 mb-4">
                              Ao utilizar o travel club nos faremos a sua
                              reserva na atração desejada, basta solicitar pelo
                              site ou whatsapp e aguardar a confirmação da sua
                              reserva.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </>
   );
}

Homepage.auth = false;
