import Image from 'next/image';
import Link from 'next/link';

function Doubts() {
   return (
      <section className="bg-why-gray-50">
         <div className="container mx-auto px-4 py-24 text-center  ">
            <h2 className="text-why-blue-900 text-3xl md:text-5xl leading-tight font-medium  ">
               Ainda tem Dúvida?
            </h2>
            <div className="h-[1px] bg-why-yellow-600 w-[90%] mx-auto mt-3 mb-6 "></div>
            <p className="text-lg md:text-2xl max-w-3xl text-why-gray-800 mx-auto">
               Entre em contato com a nossa equipe e tire todas as suas dúvidas.
               <br />
               Estaremos aguardando o seu contato.
            </p>
            <button className=" mt-12 mx-auto flex space-x-3 items-center justify-center px-12 font-semibold  rounded-md  shadow-md shadow-why-yellow-600/40 hover:scale-105 hover:shadow-lg transition-all ease-in-out hover:shadow-why-yellow-600/30 text-why-gray-50 py-3 bg-why-yellow-500 s">
               <Image
                  className="w-10"
                  src={'/img/ballon.svg'}
                  width={86}
                  height={56}
                  alt="ilustração de balões de fala"
               />
               <Link href={'/contato'}>Entrar em Contato</Link>
            </button>
         </div>
      </section>
   );
}
export default Doubts;
