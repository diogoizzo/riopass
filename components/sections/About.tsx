import Image from 'next/image';
import Link from 'next/link';

function About() {
   return (
      <section className="bg-why-gray-50">
         <div className="bg-why-card-blue-300 rounded-tr-[150px] pt-8 md:py-20">
            <div className="container mx-auto px-4 flex space-x-12 flex-wrap md:flex-nowrap ">
               <div className="w-full md:w-1/2 flex flex-col pb-12">
                  <Image
                     className=" lg:hidden rounded-tr-[150px] rounded-bl-md pr-3 mb-10 "
                     src={'/img/about.jpg'}
                     width={693}
                     height={500}
                     alt={'Imagem do rio de janeiro'}
                  />
                  <h2 className="text-3xl md:text-5xl leading-tight max-w-4xl font-medium text-why-gray-100 mb-7">
                     Quem Somos
                  </h2>

                  <p className="text-why-gray-200 leading-7">
                     Bem-vindo ao Rio Travel Club, a sua chave para desbloquear
                     uma viagem inesquecível pela deslumbrante cidade do Rio de
                     Janeiro. Nossa jornada nasce do espírito da agência{' '}
                     <Link
                        href={'https://whynotbrasil.com/'}
                        className=" underline underline-offset-4"
                     >
                        Why Not Brasil
                     </Link>{' '}
                     de explorar e celebrar a beleza e a cultura do Rio de uma
                     maneira acessível e empolgante. Juntamos nossa expertise,
                     altamente avaliada e reconhecida com uma pontuação
                     impecável e avaliações{' '}
                     <Link
                        href={
                           'https://www.tripadvisor.com.br/Attraction_Review-g303506-d10795877-Reviews-Why_Not_Brasil-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html'
                        }
                        className="underline underline-offset-4"
                     >
                        5 estrelas no TripAdvisor
                     </Link>
                     , e nossa rede de networking, para te oferecer passeios e
                     atrativos turísticos no Rio de Janeiro de qualidade, com
                     preços acessíveis.
                  </p>
               </div>
               <div className="w-full md:w-1/2">
                  <Image
                     className="hidden lg:inline rounded-tr-[150px] rounded-bl-[250px]"
                     src={'/img/about.jpg'}
                     width={693}
                     height={500}
                     alt={'Imagem do rio de janeiro'}
                  />
               </div>
            </div>
         </div>
      </section>
   );
}
export default About;
