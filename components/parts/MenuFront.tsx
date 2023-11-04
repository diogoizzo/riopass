import { useState } from 'react';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { Toaster } from '../ui/toaster';
import { useSession } from 'next-auth/react';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger
} from '../ui/dropdown-menu';

function MenuFront() {
   const [menuOpen, setMenuOpen] = useState<boolean>(false);
   const { status, data: session } = useSession();
   const [dropOpen, setDropOpen] = useState<boolean>(false);
   const authenticated = status === 'authenticated' ? true : false;
   const userName = session?.user?.name?.split(' ')[0].trim();
   return (
      <>
         <Toaster />
         <div
            className={`fixed w-full top-0 bg-why-gray-100
               shadow-md z-50 overflow-visible`}
         >
            <header className="container  overflow-visible mx-auto flex flex-col lg:flex-row justify-between items-center py-4  font-medium">
               <div className=" flex justify-between items-center w-full lg:w-auto ">
                  <Link href={'/home'}>
                     <Image
                        src={'/img/travelclub.svg'}
                        quality={100}
                        height={990}
                        width={220}
                        alt="Logo em svg do brasil travel club"
                     />
                  </Link>
                  <button onClick={() => setMenuOpen((prev) => !prev)}>
                     {menuOpen ? (
                        <svg
                           className="w-7 h-7 text-why-gray-900 cursor-pointer lg:hidden"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24"
                           id="times"
                        >
                           <path
                              fill="currentcolor"
                              d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
                           ></path>
                        </svg>
                     ) : (
                        <svg
                           className="w-6 h-6 text-why-gray-900 cursor-pointer lg:hidden"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24"
                           id="bars"
                        >
                           <path
                              fill="currentcolor"
                              d="M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"
                           ></path>
                        </svg>
                     )}
                  </button>
               </div>

               <nav
                  className={`mt-5 md:mt-0  text-center w-full lg:w-auto relative ${
                     menuOpen ? null : 'hidden lg:flex'
                  } `}
               >
                  <ul className="flex lg:w-auto w-full flex-col  lg:flex-row lg:space-x-10 uppercase lg:items-center lg:justify-center  text-why-gray-900">
                     <Link href={'/'}>
                        <li className="border-b border-why-gray-200 lg:border-none   py-3 lg:py-0">
                           Home
                        </li>
                     </Link>
                     <Link href={'/atracoes'}>
                        <li className="border-b border-why-gray-200 lg:border-none   py-3 lg:py-0">
                           atrações
                        </li>
                     </Link>
                     <Link href={'/comofunciona'}>
                        <li className="border-b border-why-gray-200 lg:border-none  py-3 lg:py-0 ">
                           como funciona
                        </li>
                     </Link>
                     <Link href={'perguntas'}>
                        <li className="border-b border-why-gray-200 lg:border-none  py-3 lg:py-0">
                           FAQ
                        </li>
                     </Link>
                     <Link href={'/sobre'}>
                        <li className="border-b border-why-gray-200 lg:border-none  py-3 lg:py-0">
                           Sobre
                        </li>
                     </Link>

                     <Link href={'/contato'}>
                        <li className="border-b border-why-gray-200 lg:border-none  py-3 lg:py-0">
                           Contato
                        </li>
                     </Link>
                     {!authenticated ? (
                        <>
                           <Link href={'/login'}>
                              <li className="border-b border-why-gray-200 lg:border-none  py-3 lg:py-0">
                                 Login
                              </li>
                           </Link>
                           <Link href={'/checkout'}>
                              <li className=" inline-flex lg:hidden mt-5 justify-center px-8 font-semibold  rounded-md  shadow-md shadow-why-yellow-600/40 hover:scale-105 hover:shadow-lg transition-all ease-in-out hover:shadow-why-yellow-600/30 text-why-gray-50 py-3 bg-why-yellow-500 ">
                                 Comprar Agora
                              </li>
                           </Link>
                        </>
                     ) : (
                        <Link href={'/perfil'}>
                           <div className="bg-gradient-to-r lg:hidden w-fit mt-5 mx-auto  from-why-yellow-400 via-why-green-500 p-[2px] rounded-full  to-why-blue-400 shadow-sm">
                              <div className="rounded-full px-6 text-lg py-1 bg-why-gray-100  hover:bg-white cursor-pointer transition-all ease-in-out duration-200 ">
                                 <div className="flex space-x-3 items-center bg-gradient-to-r  from-why-yellow-400 via-why-green-500 to-why-blue-400 bg-clip-text">
                                    <Image
                                       src={'/img/profile.svg'}
                                       width={24}
                                       height={24}
                                       alt="ícone de perfil"
                                    />

                                    <p className=" text-transparent">
                                       {userName}
                                    </p>
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       fill="none"
                                       viewBox="0 0 24 24"
                                       strokeWidth={1.5}
                                       stroke="currentColor"
                                       className="w-6 h-6 text-why-blue-400"
                                    >
                                       <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                       />
                                    </svg>
                                 </div>
                              </div>
                           </div>
                        </Link>
                     )}
                  </ul>
               </nav>
               {!authenticated ? (
                  <Link
                     href={'/checkout'}
                     className=" hidden lg:inline-flex items-center justify-center px-8 font-semibold  rounded-md  shadow-md shadow-why-yellow-600/40 hover:scale-105 hover:shadow-lg transition-all ease-in-out hover:shadow-why-yellow-600/30 text-why-gray-50 py-3 bg-why-yellow-500 "
                  >
                     Comprar Agora
                  </Link>
               ) : (
                  <DropdownMenu open={dropOpen} onOpenChange={setDropOpen}>
                     <DropdownMenuTrigger asChild className="hidden lg:block">
                        <div className="bg-gradient-to-r  from-why-yellow-400 via-why-green-500 p-[2px] rounded-full  to-why-blue-400 shadow-sm">
                           <div
                              className={`rounded-full px-5 w-fit text-lg py-1 ${
                                 dropOpen
                                    ? 'bg-white'
                                    : 'bg-why-gray-100 hover:bg-white'
                              }    cursor-pointer transition-all ease-in-out duration-200`}
                           >
                              <div className="flex space-x-3 items-center bg-gradient-to-r  from-why-yellow-400 via-why-green-500 to-why-blue-400 bg-clip-text">
                                 <Image
                                    src={'/img/profile.svg'}
                                    width={24}
                                    height={24}
                                    alt="ícone de perfil"
                                 />

                                 <p className=" text-transparent">{userName}</p>
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-why-blue-400"
                                 >
                                    <path
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                 </svg>
                              </div>
                           </div>
                        </div>
                     </DropdownMenuTrigger>
                     <DropdownMenuContent className="w-44 py-2 relative bg-why-gray-50 ">
                        <DropdownMenuLabel className="text-why-gray-900">
                           Área de Membros
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-why-gray-200" />
                        <DropdownMenuItem>
                           <Link
                              className="block w-full text-why-gray-900"
                              href={'/atracoes'}
                           >
                              Reservar
                           </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                           <Link
                              className="block w-full text-why-gray-900"
                              href={'/perfil'}
                           >
                              Perfil
                           </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-why-gray-200" />
                        <DropdownMenuItem>
                           <button
                              //todo alterar para / depois
                              onClick={() =>
                                 signOut({
                                    callbackUrl: '/home'
                                 })
                              }
                              className="block w-full text-left text-why-gray-900"
                           >
                              Sair
                           </button>
                        </DropdownMenuItem>
                     </DropdownMenuContent>
                  </DropdownMenu>
               )}
            </header>
         </div>
      </>
   );
}
export default MenuFront;
