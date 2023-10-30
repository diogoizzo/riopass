import axios from 'axios';
import React, { useRef, useState } from 'react';
import MercadoPagoServices from '../../services/MercadoPagoServices';
import Image from 'next/image';
import Menu from '../../components/parts/Menu';
import MenuFront from '../../components/parts/MenuFront';
import PageHero from '../../components/parts/PageHero';
import Footer from '../../components/sections/Footer';
import { signIn } from 'next-auth/react';
import ReactLoading from 'react-loading';
import {
   AlertDialog,
   AlertDialogAction,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle
} from '../../components/ui/alert-dialog';

function index() {
   const formRef = useRef<HTMLFormElement>(null);
   const [price, setPrice] = useState(99.0);
   const [loading, setLoading] = useState(false);
   const [alertOpen, setAlertOpen] = useState(false);
   const passError = useRef<HTMLParagraphElement>(null);

   async function handleSubmit(e: any) {
      e.preventDefault();
      setLoading(true);
      passError.current?.classList.add('hidden');
      passError.current?.classList.remove('flex');
      if (!formRef.current) return;
      const formData = new FormData(formRef.current);
      if (formData.get('password') !== formData.get('passwordRetry')) {
         passError.current?.classList.add('flex');
         passError.current?.classList.remove('hidden');
         setLoading(false);
         return;
      }
      const form = {
         name: formData.get('name'),
         email: formData.get('email'),
         phone: formData.get('phone'),
         cpf: formData.get('cpf'),
         amount: formData.get('amount'),
         price: Number(formData.get('amount')) * 99.0,
         password: formData.get('password'),
         passwordRetry: formData.get('passwordRetry'),
         terms: formData.get('terms')
      };

      let res;
      try {
         res = await MercadoPagoServices.getInitPoint(form);
      } catch (error: any) {
         console.log(error);
         if (error.response.data.message === 'P2002') {
            setLoading(false);
            setAlertOpen(true);
         }
      }

      const email = form.email;
      const password = form.password;
      await signIn('credentials', {
         email,
         password,
         redirect: false
      });

      res?.initPoint && location.assign(res.initPoint);
   }

   return (
      <>
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
                     <p className="mt-2">Esse usuário já existe.</p>
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-center">
                     O e-mail cadastrado já existe no sistema e está vinculado a
                     outro usuário.
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
         <PageHero
            title="Checkout"
            subtitle="A economia que você merece está a alguns cliques"
            img={'/img/rio.webp'}
         />
         <main className="bg-why-gray-50 min-h-[100vh] text-why-gray-800 py-24">
            <div className="container px-4 mx-auto">
               <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="flex flex-wrap -m-3 mb-3">
                     <div className="w-full md:w-1/4 p-3">
                        <h2 className="text-coolGray-900 text-xl font-semibold">
                           Informações Pessoais
                        </h2>
                        <p className="text-sm text-coolGray-500 font-medium">
                           Preencha o formulário ao lado para criar seu usuário.
                        </p>
                     </div>
                     <div className="w-full md:w-3/4 p-3">
                        <div className="p-8 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">
                           <div className="flex flex-wrap pb-3 -m-3">
                              <div className="w-full md:w-1/2 p-3">
                                 <p className="mb-1.5 font-medium text-base text-coolGray-800">
                                    Nome
                                 </p>
                                 <input
                                    required
                                    name="name"
                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-why-yellow-400 border border-coolGray-200 rounded-lg shadow-input"
                                    type="text"
                                    placeholder="Seu nome"
                                 />
                              </div>
                              <div className="w-full md:w-1/2 p-3">
                                 <p className="mb-1.5 font-medium text-base text-coolGray-800">
                                    E-mail
                                 </p>
                                 <input
                                    required
                                    name="email"
                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-why-yellow-400 border border-coolGray-200 rounded-lg shadow-input"
                                    type="email"
                                    placeholder="Seu e-mail"
                                 />
                              </div>
                              <div className="w-full md:w-1/2 p-3">
                                 <p className="mb-1.5 font-medium text-base text-coolGray-800">
                                    Telefone
                                 </p>
                                 <input
                                    required
                                    name="phone"
                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-why-yellow-400 border border-coolGray-200 rounded-lg shadow-input"
                                    type="tel"
                                    placeholder="Seu telefone"
                                 />
                              </div>
                              <div className="w-full md:w-1/2 p-3">
                                 <p className="mb-1.5 font-medium text-base text-coolGray-800">
                                    CPF
                                 </p>
                                 <input
                                    required
                                    name="cpf"
                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-why-yellow-400 border border-coolGray-200 rounded-lg shadow-input"
                                    type="text"
                                    placeholder="Seu CPF"
                                 />
                              </div>
                              <div className="w-full md:w-1/2 p-3">
                                 <p className="mb-1.5 font-medium text-base text-coolGray-800">
                                    Senha
                                 </p>
                                 <input
                                    required
                                    name="password"
                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-why-yellow-400 border border-coolGray-200 rounded-lg shadow-input"
                                    type="password"
                                    placeholder="Sua nova senha"
                                 />
                              </div>
                              <div className="w-full md:w-1/2 p-3">
                                 <p className="mb-1.5 font-medium text-base text-coolGray-800">
                                    Repetir Senha
                                 </p>
                                 <input
                                    required
                                    name="passwordRetry"
                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-why-yellow-400 border border-coolGray-200 rounded-lg shadow-input"
                                    type="password"
                                    placeholder="Repita sua senha"
                                 />
                              </div>
                           </div>
                           <p
                              ref={passError}
                              className="items-center space-x-3 mt-2 hidden"
                           >
                              <span>
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="#ef4444"
                                    className=" h-6"
                                 >
                                    <path
                                       fillRule="evenodd"
                                       d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                       clipRule="evenodd"
                                    />
                                 </svg>
                              </span>
                              <span className="text-red-500">
                                 As senhas precisam ser iguais.
                              </span>
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-wrap -m-3">
                     <div className="w-full md:w-1/4 p-3">
                        <h2 className="text-coolGray-900 text-xl font-semibold">
                           Informações da Compra
                        </h2>
                        <p className="text-sm text-coolGray-500 font-medium">
                           Preencha ao lado as informações da compra
                        </p>
                     </div>
                     <div className="w-full md:w-3/4 p-3">
                        <div className="p-8 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">
                           <div className="flex flex-wrap -m-3 mb-3">
                              <div className="w-full md:w-1/2 p-3">
                                 <p className="mb-1.5 font-medium text-base text-coolGray-800">
                                    Quantidade
                                 </p>
                                 <input
                                    name="amount"
                                    defaultValue={1}
                                    onChange={(e: any) =>
                                       setPrice(e.target.value * 99.0)
                                    }
                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-why-yellow-400 border border-coolGray-200 rounded-lg shadow-input"
                                    type="number"
                                    min={1}
                                    max={200}
                                    placeholder="Informe a quantidade desejada"
                                 />
                                 <div className="w-full flex justify-start mt-6 items-center space-x-3">
                                    <input
                                       id="terms"
                                       name="terms"
                                       className="h-5 w-5"
                                       type="checkbox"
                                       placeholder="Street address"
                                    />
                                    <label htmlFor="terms">
                                       Eu concordo com os termos de uso.
                                    </label>
                                 </div>
                              </div>
                              <div className="w-full md:w-1/2 p-3">
                                 <p className="mb-1.5 text-right font-bold drop-shadow-sm text-5xl tracking-wide underline underline-offset-8 text-coolGray-800">
                                    Valor Total
                                 </p>
                                 <div className="w-full text-right text-4xl font-semibold text-why-gray-800 mt-6">{`R$ ${price},00`}</div>
                                 <div className="relative h-[104px] mt-6">
                                    <Image
                                       className="drop-shadow-sm"
                                       src={'/img/compra-segura.png'}
                                       fill={true}
                                       alt="Selo de garantia do mercado pago"
                                    />
                                 </div>
                              </div>
                           </div>
                           <button
                              type="submit"
                              className="block ml-auto min-w-[160px] px-14 font-semibold  rounded-md  shadow-md shadow-why-yellow-600/40 hover:scale-105 hover:shadow-lg text-xl transition-all ease-in-out hover:shadow-why-yellow-600/30 text-why-gray-50 py-3 bg-why-yellow-500 "
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
                                 'Pagar'
                              )}
                           </button>
                        </div>
                     </div>
                  </div>
               </form>
            </div>
         </main>
         <Footer />
      </>
   );
}

export default index;
