import Image from 'next/image';

function Footer() {
   return (
      <footer className="bg-why-green-600  ">
         <div className="container px-4 mx-auto">
            <div className="grid grid-cols-4 w-full">
               <div className=" ">
                  <Image
                     src={'/img/logo-simbol.png'}
                     width={380}
                     height={287}
                     alt="Logo do travel club na vertical"
                  />
               </div>
               <div className="flex flex-col justify-start py-12  items-center">
                  <div>
                     <h3 className="uppercase font-medium text-why-gray-50 text-xl text-left ">
                        Destinos
                     </h3>
                     <p className=" text-why-gray-200 mt-3 text-lg">
                        Rio de Janeiro
                     </p>
                     <p className=" text-why-gray-200 mt-1 text-lg">
                        Rio de Janeiro
                     </p>
                     <p className=" text-why-gray-200 mt-1 text-lg">
                        Rio de Janeiro
                     </p>
                     <p className=" text-why-gray-200 mt-1 text-lg">
                        Rio de Janeiro
                     </p>
                     <p className=" text-why-gray-200 mt-1 text-lg">
                        Rio de Janeiro
                     </p>
                     <p className=" text-why-gray-200 mt-1 text-lg">
                        Rio de Janeiro
                     </p>
                  </div>
               </div>
               <div className="flex flex-col justify-start py-12  items-center">
                  <div>
                     <h3 className="uppercase font-medium text-why-gray-50 text-xl  ">
                        Links Úteis
                     </h3>
                     <p className=" text-why-gray-200 mt-3 text-lg">
                        Como Funciona
                     </p>
                     <p className=" text-why-gray-200 mt-1 text-lg">Atrações</p>
                     <p className=" text-why-gray-200 mt-1 text-lg">
                        Como reservar
                     </p>
                     <p className=" text-why-gray-200 mt-1 text-lg">Preços</p>
                     <p className=" text-why-gray-200 mt-1 text-lg">FAQ</p>
                     <p className=" text-why-gray-200 mt-1 text-lg">Contato</p>
                  </div>
               </div>
               <div className="flex flex-col justify-start py-12  items-center">
                  <div>
                     <h3 className="uppercase font-medium text-why-gray-50 text-xl  ">
                        Contato
                     </h3>
                     <p className=" text-why-gray-200 mt-3 text-lg">
                        Rua Télcio Ventura da Silva, 141 <br /> Belvedere -
                        Barra do Piraí - RJ <br />
                        CEP 27113-265
                     </p>
                     <h3 className="uppercase font-medium text-why-gray-50 text-xl mt-6  ">
                        Social Media
                     </h3>
                     <div className="flex items-center w-full mt-3 space-x-2">
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
