import Image from 'next/image';
import Link from 'next/link';

function Footer() {
   return (
      <footer className="bg-why-green-600  ">
         <div className="container px-4 mx-auto">
            <div className="grid gird-cols-1  lg:grid-cols-4 w-full">
               <div className=" mx-auto">
                  <Image
                     src={'/img/logo-simbol.png'}
                     width={380}
                     height={287}
                     className="w-64 md:w-auto"
                     alt="Logo do travel club na vertical"
                  />
               </div>
               <div className="flex flex-col justify-start pb-10  md:py-12  items-center">
                  <div className="text-center lg:text-left">
                     <h3 className="uppercase font-medium text-why-gray-50 text-xl text-left ">
                        Categorias
                     </h3>
                     <Link
                        href={{
                           pathname: '/atracoes',
                           query: {
                              categoria: 'City Tour'
                           }
                        }}
                     >
                        <p className=" text-why-gray-200 mt-3 text-lg">
                           City Tour
                        </p>
                     </Link>
                     <Link
                        href={{
                           pathname: '/atracoes',
                           query: {
                              categoria: 'Trilha'
                           }
                        }}
                     >
                        <p className=" text-why-gray-200 mt-1 text-lg">
                           Trilha
                        </p>
                     </Link>

                     <p className=" text-why-gray-200 mt-1 text-lg">
                        Tour em Grupo
                     </p>
                  </div>
               </div>
               <div className="flex flex-col justify-start pb-10 md:py-12  items-center">
                  <div className="text-center lg:text-left">
                     <h3 className="uppercase font-medium text-why-gray-50 text-xl mb-3  ">
                        Links Úteis
                     </h3>
                     <p className=" text-why-gray-200 mt-1 text-lg">Home</p>
                     <p className=" text-why-gray-200 mt-1 text-lg">
                        Como Funciona
                     </p>

                     <p className=" text-why-gray-200 mt-1 text-lg">Atrações</p>
                     <p className=" text-why-gray-200 mt-1 text-lg">FAQ</p>
                     <p className=" text-why-gray-200 mt-1 text-lg">Contato</p>
                  </div>
               </div>
               <div className="flex flex-col justify-start md:py-12  items-center">
                  <div className="text-center lg:text-left">
                     <h3 className="uppercase font-medium text-why-gray-50 text-xl  ">
                        Contato
                     </h3>
                     <p className=" text-why-gray-200 mt-3 text-lg">
                        Rua Télcio Ventura da Silva, 141 <br /> Belvedere -
                        Barra do Piraí - RJ <br />
                        CEP 27113-265
                     </p>
                     <h3 className="uppercase font-medium text-why-gray-50 text-xl mt-10 md:mt-6  ">
                        Social Media
                     </h3>
                     <div className="flex items-center md:justify-start justify-center w-full pb-10 md:pb-0 mt-3 space-x-2">
                        <Image
                           src={'/img/Instagram.svg'}
                           width={40}
                           height={41}
                           alt="Ícone do instagram"
                        />
                        <Image
                           src={'/img/Facebook.svg'}
                           width={40}
                           height={41}
                           alt="Ícone do facebook"
                        />
                        <Image
                           src={'/img/twitter.svg'}
                           width={40}
                           height={41}
                           alt="Ícone do twitter"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}
export default Footer;
