import Head from 'next/head';
import MenuFront from '../../components/parts/MenuFront';
import Footer from '../../components/sections/Footer';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useQuery } from 'react-query';
import UserServices from '../../services/UserServices';
import Image from 'next/image';

function Profile() {
   const { data } = useSession();
   //@ts-ignore
   const userId = data?.id;
   const query = useQuery(['user', userId], () => UserServices.getById(userId));
   const user = query?.data;
   return (
      <>
         <Head>
            <title>Perfil</title>
         </Head>
         <MenuFront />
         <main className="bg-why-gray-100 pb-28">
            <div className="h-[550px] bg-why-green-700 relative">
               <Image
                  className="object-cover opacity-40"
                  src={'/img/back.svg'}
                  alt="backgrund pattern"
                  fill={true}
               />
            </div>
            <div className="container px-4 mx-auto relative -mt-72">
               <h1 className="text-5xl font-semibold mb-3 text-why-gray-100 capitalize">
                  <span className="text-why-green-100/80">Olá </span>
                  {user?.name?.trim()},
               </h1>
               <p className="text-xl text-why-gray-200">
                  Seja bem vindo ao Rio Travel Club.
               </p>
               <div className="flex mt-8 ">
                  <div className="w-3/4 mr-6">
                     <div className=" bg-why-green-500 rounded-md shadow-md p-8 ">
                        <h2 className="text-3xl font-medium text-why-gray-200">
                           Para fazer a sua reserva
                        </h2>
                        <p className="text-lg mt-2 text-why-green-100">
                           Acesse a página de atrações ou clique no botão
                           abaixo, escolha sua atração e clique em reservar.
                           Depois, basta preencher o formulário e aguardar o
                           nosso contato, com a confirmação de sua reserva.
                        </p>
                        <Link
                           href={'/atracoes'}
                           className="inline-flex mt-6 items-center hover:bg-why-green-200/50 transition-all ease-in-out duration-200 justify-center px-6 py-2 rounded-md shadow-sm text-white bg-why-green-400"
                        >
                           Ver Atrações
                        </Link>
                     </div>
                     <h2 className="text-3xl py-8 font-medium text-why-green-700">
                        Links Úteis
                     </h2>
                     <div className=" bg-why-gray-50 rounded-md shadow-md p-8 flex">
                        <div className="w-3/4">
                           <h3 className="text-2xl font-medium text-why-green-700">
                              Perguntas Frequentes
                           </h3>
                           <p className="mt-3 text-gray-500">
                              Sua dúvida pode ser a mesma que a de muitos, por
                              isso preparamos uma seção para responder as
                              dúvidas mais comuns. Caso tenha alguma dúvida,
                              antes de entrar em contato com o nosso suporte
                              dedicado, confira nossa seção de perguntas
                              frequentes.
                           </p>
                        </div>
                        <div className="w-1/4 flex justify-center items-center">
                           <Link
                              href={'/atracoes'}
                              className="inline-flex  items-center hover:bg-why-green-400/20 transition-all font-semibold ease-in-out duration-200 border-2 border-why-green-700 justify-center px-6 py-2 rounded-md shadow-sm text-why-green-700 bg-why-gray-50"
                           >
                              Saber Mais
                           </Link>
                        </div>
                     </div>
                     <div className=" bg-why-gray-50 rounded-md shadow-md p-8 flex mt-5">
                        <div className="w-3/4">
                           <h3 className="text-2xl font-medium text-why-green-700">
                              Suporte Dedicado
                           </h3>
                           <p className="mt-3 text-gray-500">
                              Contamos com um suporte dedicado e exclusivo para
                              membros do club. Se você não encontrar a resposta
                              para sua dúvida na seção de perguntas frequentes,
                              estamos à disposição para atendê-lo, clique no
                              botão ao lado para iniciar uma conversa pelo
                              whatsapp com o nosso suporte.
                           </p>
                        </div>
                        <div className="w-1/4 flex justify-center items-center">
                           <Link
                              href={'/atracoes'}
                              className="inline-flex  items-center hover:bg-why-green-400/20 transition-all font-semibold ease-in-out duration-200 border-2 border-why-green-700 justify-center px-6 py-2 rounded-md shadow-sm text-why-green-700 bg-why-gray-50"
                           >
                              Whatsapp
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className="w-1/4">
                     <div className="bg-why-gray-50 rounded-md shadow-md p-6 flex flex-col ">
                        <h2 className="text-why-green-700 font-medium text-lg">
                           Informações Pessoais
                        </h2>
                        <div className="w-full h-[1px] bg-why-green-700/10 mt-2 "></div>
                        <div className="mt-4 text-gray-500 space-y-2">
                           <label className="text-xs block text-gray-400">
                              Nome
                              <p className="capitalize text-base text-gray-500">
                                 {user?.name}
                              </p>
                           </label>
                           <label className="text-xs block text-gray-400">
                              CPF
                              <p className=" text-base text-gray-500">
                                 {user?.cpf}
                              </p>
                           </label>
                           <label className="text-xs block text-gray-400">
                              E-mail
                              <p className=" text-base text-gray-500">
                                 {user?.email}
                              </p>
                           </label>
                           <label className="text-xs block text-gray-400">
                              Telefone
                              <p className=" text-base text-gray-500">
                                 {user?.phone}
                              </p>
                           </label>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </main>
         <Footer />
      </>
   );
}
export default Profile;
