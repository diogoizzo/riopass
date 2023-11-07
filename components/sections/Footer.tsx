import Image from 'next/image';
import Link from 'next/link';

function Footer() {
   return (
      <footer className="bg-why-green-600  ">
         <div className="container px-4 mx-auto">
            <div className="grid gird-cols-1  lg:grid-cols-4 w-full">
               <div className=" mx-auto pb-10 pt-12  md:py-12 ">
                  <Image
                     src={'/img/logo-simbol.png'}
                     width={480}
                     height={411}
                     className="w-32 mx-auto"
                     alt="Logo do travel club na vertical"
                  />
               </div>
               <div className="flex flex-col justify-start pb-10  md:py-12  items-center">
                  <div className="text-center lg:text-left">
                     <h3 className="uppercase font-medium text-why-gray-50 text-xl text-center lg:text-left ">
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
                     <Link
                        href={{
                           pathname: '/atracoes',
                           query: {
                              categoria: 'Passeio de Barco'
                           }
                        }}
                     >
                        <p className=" text-why-gray-200 mt-1 text-lg">
                           Passeios de Barco
                        </p>
                     </Link>
                     <Link
                        href={{
                           pathname: '/atracoes',
                           query: {
                              categoria: 'Praias'
                           }
                        }}
                     >
                        <p className=" text-why-gray-200 mt-1 text-lg">
                           Praias
                        </p>
                     </Link>
                     <Link
                        href={{
                           pathname: '/atracoes',
                           query: {
                              categoria: 'Jeep Tour'
                           }
                        }}
                     >
                        <p className=" text-why-gray-200 mt-1 text-lg">
                           Jeep Tour
                        </p>
                     </Link>
                     <Link
                        href={{
                           pathname: '/atracoes',
                           query: {
                              categoria: 'Vôo Livre'
                           }
                        }}
                     >
                        <p className=" text-why-gray-200 mt-1 text-lg">
                           Vôo Livre
                        </p>
                     </Link>
                  </div>
               </div>
               <div className="flex flex-col justify-start pb-10 md:py-12  items-center">
                  <div className="text-center lg:text-left">
                     {/* //todo tornar todos links para as respectivas páginas */}
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
                     <p className=" text-why-gray-200 mt-1 text-lg">Garantia</p>
                  </div>
               </div>
               <div className="flex flex-col justify-start md:py-12  items-center">
                  <div className="text-center lg:text-left">
                     <h3 className="uppercase font-medium text-why-gray-50 text-xl  ">
                        Contato
                     </h3>
                     <p className=" text-why-gray-200 mt-3 text-lg">
                        <a href="mailto:info@brasiltravelclub.com">
                           info@brasiltravelclub.com
                        </a>
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
         <div className="bg-why-green-500 py-5 lg:py-3 text-why-gray-200">
            <div className="container px-4 mx-auto">
               <div className="flex justify-between flex-col lg:flex-row text-center">
                  <p>
                     Brasil Travel Club, um produto oferecido por Why Not
                     Creative Tours. CNPJ 24.538.473/0001-05
                  </p>
                  <div className="space-y-1 lg:space-y-0 lg:space-x-4 flex flex-col lg:flex-row items-center mt-3 lg:mt-0">
                     <Link href={'termos'}>Termos de uso</Link>
                     <div className="w-[1px] bg-why-green-400 inline-block h-[70%]"></div>
                     <Link href={'privacidade'}>Política de Privacidade</Link>
                     <div className="w-[1px] bg-why-green-400 inline-block h-[70%]"></div>
                     <Link href={'garantia'}>Política de Garantia</Link>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}
export default Footer;
