import { useState } from 'react';
import Image from 'next/image';
import BrazilFlag from '../atoms/BrazilFlag';
import Link from 'next/link';

function MenuFront({ shadow }: { shadow?: boolean }) {
   const [menuOpen, setMenuOpen] = useState<boolean>(false);
   return (
      <div
         className={`fixed w-full top-0 bg-why-gray-100 ${
            shadow !== false ? 'shadow-md' : null
         } z-50 overflow-visible`}
      >
         <header className="container  overflow-visible mx-auto flex flex-col md:flex-row justify-between items-center py-4  font-medium">
            <div className=" flex justify-between items-center w-full md:w-auto">
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
                        className="w-7 h-7 text-why-gray-900 cursor-pointer md:hidden"
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
                        className="w-6 h-6 text-why-gray-900 cursor-pointer md:hidden"
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
               className={`mt-5 md:mt-0  text-center w-full md:w-auto relative ${
                  menuOpen ? null : 'hidden md:flex'
               } `}
            >
               <ul className="flex md:w-auto w-full flex-col  md:flex-row md:space-x-10 uppercase md:items-center md:justify-center  text-why-gray-900">
                  <Link href={'/comofunciona'}>
                     <li className="border-b border-why-gray-200 md:border-none  py-3 md:py-0 ">
                        como funciona
                     </li>
                  </Link>

                  <Link href={'/atracoes'}>
                     <li className="border-b border-why-gray-200 md:border-none   py-3 md:py-0">
                        atrações
                     </li>
                  </Link>
                  <li className="border-b border-why-gray-200 md:border-none  py-3 md:py-0">
                     como reservar
                  </li>
                  <li className="border-b border-why-gray-200 md:border-none  py-3 md:py-0">
                     preços
                  </li>
                  <li className="border-b border-why-gray-200 md:border-none  py-3 md:py-0">
                     FAQ
                  </li>
                  <li className="border-b border-why-gray-200 md:border-none  py-3 md:py-0">
                     Contato
                  </li>

                  <li className="border-b border-why-gray-200 md:border-none   py-3 md:py-0 relative">
                     <BrazilFlag className="w-12 h-12 md:h-10 md:w-10 inline-flex items-center justify-center " />
                  </li>
                  <li className="inline-flex items-center justify-center px-5 font-semibold  rounded-md  shadow-md shadow-why-yellow-600/40 hover:scale-105 hover:shadow-lg transition-all ease-in-out hover:shadow-why-yellow-600/30 text-why-gray-50 py-3 bg-why-yellow-500 ">
                     Comprar Agora
                  </li>
               </ul>
            </nav>
         </header>
      </div>
   );
}
export default MenuFront;
