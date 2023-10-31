import Head from 'next/head';
import MenuFront from '../../components/parts/MenuFront';

import Footer from '../../components/sections/Footer';

function Contact() {
   return (
      <>
         <Head>
            <title>Login</title>
         </Head>
         <MenuFront />
         <main>
            <section className="relative bg-[url('/img/rio.webp')] bg-cover pt-12  pb-20 md:pb-32 overflow-hidden">
               <div className="relative  pt-12 sm:pt-28 mx-auto">
                  <div className="relative container px-4 mx-auto">
                     <div className="max-w-lg md:max-w-xl py-14 px-6 xs:px-12 lg:px-16 mx-auto bg-why-gray-50 rounded-xl shadow-lg shadow-black/60">
                        <h3 className="font-heading text-4xl text-why-gray-900 font-semibold mb-4">
                           Faça login em sua conta
                        </h3>
                        <p className="text-lg text-why-gray-800 mb-10">
                           Entre com as suas informações pessoais para acessar a
                           área de membros.
                        </p>
                        <form action="">
                           <div className="mb-6">
                              <label
                                 className="block mb-1.5 text-sm text-gray-900 font-semibold"
                                 htmlFor=""
                              >
                                 Email
                              </label>
                              <input
                                 className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-why-yellow-400 focus:outline-why-yellow-400 rounded-lg"
                                 type="email"
                                 placeholder="Entre com o seu email"
                              />
                           </div>
                           <div className="mb-7">
                              <div className="flex mb-1.5 items-center justify-between">
                                 <label
                                    className="block text-sm text-gray-900 font-semibold"
                                    htmlFor=""
                                 >
                                    Senha
                                 </label>
                                 <a
                                    className="inline-block text-xs font-semibold text-why-yellow-600 hover:text-why-yellow-500"
                                    href="#"
                                 >
                                    Esqueceu sua senha?
                                 </a>
                              </div>
                              <div className="relative">
                                 <input
                                    className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-why-yellow-400 focus:outline-why-yellow-400 rounded-lg"
                                    type="password"
                                    placeholder="Entre com a sua senha"
                                 />
                                 <button className="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2 inline-block hover:scale-110 transition duration-100">
                                    <img
                                       src="saturn-assets/images/sign-up/icon-eye.svg"
                                       alt=""
                                    />
                                 </button>
                              </div>
                           </div>

                           <button
                              className="inline-flex items-center justify-center w-full mb-3 font-semibold  rounded-md  shadow-md  hover:scale-105 hover:shadow-lg transition-all ease-in-out   text-why-gray-50 py-3 bg-why-yellow-500"
                              type="submit"
                           >
                              Login
                           </button>

                           <div className="text-center">
                              <span className="text-xs font-semibold text-gray-900">
                                 <span>Ainda não possui o Travel Club?</span>
                                 <a
                                    className="inline-block ml-1 text-why-yellow-600 hover:text-why-yellow-500"
                                    href="#"
                                 >
                                    Comprar agora
                                 </a>
                              </span>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </section>
         </main>
         <Footer />
      </>
   );
}
export default Contact;
