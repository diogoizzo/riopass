import Head from 'next/head';
import MenuFront from '../../../../components/parts/MenuFront';

import Footer from '../../../../components/sections/Footer';
import { signIn } from 'next-auth/react';
import { useEffect, useRef, useState } from 'react';
import togglePassword from '../../../../lib/togglePassword';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
   AlertDialog,
   AlertDialogAction,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle
} from '../../../../components/ui/alert-dialog';
import ReactLoading from 'react-loading';

function Login() {
   const formRef = useRef<HTMLFormElement>(null);
   const passwordRef = useRef<HTMLInputElement>(null);
   const router = useRouter();
   const urlQuery = router.query.error;
   const [alertOpen, setAlertOpen] = useState(false);
   const [loading, setLoading] = useState(false);

   async function handleSubmit(e: any) {
      e.preventDefault();
      e.stopPropagation();
      setLoading(true);
      if (!formRef.current) return;
      const formData = new FormData(formRef.current);

      const email = formData.get('email');
      const password = formData.get('password');
      const res = await signIn('credentials', {
         email,
         password,
         redirect: false
      });
      if (res?.ok === true) {
         router.push('/rio/pt//perfil');
      } else {
         setLoading(false);
         router.push(
            {
               pathname: '/rio/pt/login',
               query: {
                  error: 'invalidCredentials'
               }
            },
            '/rio/pt/login'
         );
      }
   }
   useEffect(() => {
      if (urlQuery === 'invalidCredentials') setAlertOpen(true);
      router.replace('/rio/pt/login');
   }, [urlQuery]);
   return (
      <>
         <Head>
            <title>Login</title>
         </Head>
         <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
            <AlertDialogContent className="bg-why-gray-50 border border-why-gray-200">
               <AlertDialogHeader>
                  <AlertDialogTitle className="text-red-600 text-center flex flex-col">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#ef4444"
                        className=" h-10"
                     >
                        <path
                           fillRule="evenodd"
                           d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                           clipRule="evenodd"
                        />
                     </svg>
                     <p className="mt-2">Credenciais Inválidas.</p>
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-center">
                     O email e a senha informados estão incorretos. Por favor,
                     verifique as informações e tente novamente.
                  </AlertDialogDescription>
               </AlertDialogHeader>
               <AlertDialogFooter className="text-center mx-auto">
                  <AlertDialogAction className="bg-why-yellow-500 text-center  hover:bg-why-yellow-400 px-10">
                     OK
                  </AlertDialogAction>
               </AlertDialogFooter>
            </AlertDialogContent>
         </AlertDialog>
         <MenuFront />
         <main>
            <section className="relative bg-[url('/img/rio2.webp')] min-h-[100vh] bg-cover pt-20 md:pt-12  pb-20 md:pb-32 overflow-hidden">
               <div className="relative  pt-12 sm:pt-28 mx-auto">
                  <div className="relative container px-4 mx-auto">
                     <div className="max-w-lg md:max-w-xl py-10 md:py-14 px-6 xs:px-12 lg:px-16 mx-auto bg-why-gray-50 rounded-xl shadow-lg shadow-black/60">
                        <h3 className="font-heading text-3xl text-center md:text-left md:text-4xl text-why-gray-900 font-semibold mb-4">
                           Faça login em sua conta
                        </h3>
                        <p className=" text-base text-center md:text-left md:text-lg text-why-gray-800 mb-10">
                           Entre com as suas informações pessoais para acessar a
                           área de membros.
                        </p>
                        <form
                           id="login"
                           ref={formRef}
                           onSubmit={handleSubmit}
                           action=""
                        >
                           <div className="mb-6">
                              <label
                                 className="block mb-1.5 text-sm text-gray-900 font-semibold"
                                 htmlFor=""
                              >
                                 Email
                              </label>
                              <input
                                 required
                                 name="email"
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
                                    ref={passwordRef}
                                    required
                                    name="password"
                                    className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-why-yellow-400 focus:outline-why-yellow-400 rounded-lg"
                                    type="password"
                                    placeholder="Entre com a sua senha"
                                 />
                                 <button
                                    type="button"
                                    onClick={() => {
                                       togglePassword(passwordRef.current);
                                    }}
                                    className="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2 inline-block hover:scale-110 transition duration-100"
                                 >
                                    <img src="/img/icon-eye.svg" alt="" />
                                 </button>
                              </div>
                           </div>

                           <button
                              className="inline-flex items-center justify-center w-full mb-3 font-semibold  rounded-md  shadow-md  hover:scale-105 hover:shadow-lg transition-all ease-in-out   text-why-gray-50 py-3 bg-why-yellow-500"
                              type="submit"
                           >
                              {loading ? (
                                 <ReactLoading
                                    className="mx-auto"
                                    type={'spin'}
                                    color={'#f2f2f2'}
                                    height={25}
                                    width={25}
                                 />
                              ) : (
                                 'Login'
                              )}
                           </button>

                           <div className="text-center">
                              <span className="text-xs font-semibold text-gray-900">
                                 <span>Ainda não possui o Travel Club?</span>
                                 <Link
                                    className="inline-block ml-1 text-why-yellow-600 hover:text-why-yellow-500"
                                    href={'/checkout'}
                                 >
                                    Comprar agora
                                 </Link>
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
export default Login;
