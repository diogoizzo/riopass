// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';

export default function ReviewsSlider() {
   return (
      <Swiper
         className="overflow-visible"
         spaceBetween={50}
         loop={true}
         modules={[Autoplay, Pagination]}
         slidesPerView={1}
         breakpoints={{
            768: {
               slidesPerView: 2
            },
            1024: {
               slidesPerView: 3
            }
         }}
         pagination={{ clickable: true }}
         autoplay={{
            delay: 3500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false
         }}
      >
         <div className="relative h-full">
            <SwiperSlide className="bg-[#03877a] p-7 shadow-md rounded-md h-full ">
               <div className="flex flex-col justify-stretch h-full">
                  <div className="flex">
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                  </div>
                  <p className="text-why-gray-50 mt-8 flex-1">
                     O Rio Travel Club foi um achado incrível para a minha
                     viagem ao Rio de Janeiro! A facilidade de reservar
                     experiências e a economia que tive foram surpreendentes. A
                     equipe sempre esteve pronta para me ajudar a planejar cada
                     detalhe!
                  </p>
                  <p className="text-why-gray-200 mt-8">Ana Carolina</p>
               </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[#008a9f] p-7 shadow-md rounded-md">
               <div className="flex flex-col justify-stretch h-full">
                  <div className="flex">
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                  </div>
                  <p className="text-why-gray-50 mt-8 flex-1">
                     Comprar o Rio Travel Club foi uma das melhores decisões que
                     tomei! A economia me surpreendeu e as experiências foram
                     incríveis. A equipe de suporte para reservas é super
                     atenciosa e fez toda a diferença na minha viagem ao Rio.
                     Recomendo muito!
                  </p>
                  <p className="text-why-gray-200 mt-8">Roberto Silva</p>
               </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[#03877a] p-7 shadow-md rounded-md">
               <div className="flex flex-col justify-stretch h-full">
                  <div className="flex">
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                  </div>
                  <p className="text-why-gray-50 mt-8 flex-1">
                     Para nós, o Rio Travel Club foi uma verdadeira ajuda em
                     nossa viagem ao Rio de Janeiro. A facilidade de uso e os
                     descontos tornaram a nossa viagem ao Rio muito melhor do
                     que poderíamos imaginar!
                  </p>
                  <p className="text-why-gray-200 mt-8">Mariana e João</p>
               </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[#008a9f] p-7 shadow-md rounded-md">
               <div className="flex flex-col justify-stretch h-full">
                  <div className="flex">
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                  </div>
                  <p className="text-why-gray-50 mt-8 flex-1">
                     Estou absolutamente encantado com as experiências que o Rio
                     Travel Club me proporcionou. A equipe me ajudou a reservar
                     passeios incríveis com facilidade e os descontos foram
                     realmente impressionantes!
                  </p>
                  <p className="text-why-gray-200 mt-8">Lucas Pereira</p>
               </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[#03877a]  p-7 shadow-md rounded-md">
               <div className="flex flex-col justify-stretch h-full">
                  <div className="flex">
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                  </div>
                  <p className="text-why-gray-50 mt-8 flex-1">
                     O Rio Travel Club foi simplesmente incrível! A economia que
                     tive em minha viagem ao Rio foi maior do que imaginei e os
                     passeios foram de tirar o fôlego. A equipe é super
                     prestativa e fez todo o processo de reserva ser uma brisa!
                  </p>
                  <p className="text-why-gray-200 mt-8">Gabriela M.</p>
               </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[#008a9f] p-7 shadow-md rounded-md">
               <div className="flex flex-col justify-stretch h-full">
                  <div className="flex">
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                  </div>
                  <p className="text-why-gray-50 mt-8 flex-1">
                     Simplesmente fantástico! Economizei mais de R$ 500 reais e
                     fiz vários passeios incríveis pelo Rio. Super recomendo"
                  </p>
                  <p className="text-why-gray-200 mt-8">Felipe Costa</p>
               </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[#03877a] p-7 shadow-md rounded-md">
               <div className="flex flex-col justify-stretch h-full">
                  <div className="flex">
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                  </div>
                  <p className="text-why-gray-50 mt-8 flex-1">
                     O Rio Travel Club deixou minha viagem ao Rio muito mais
                     emocionante e acessível. Sem os descontos não conseguiria
                     fazer um terço dos passeios que fiz. Valeu muito a pena!
                  </p>
                  <p className="text-why-gray-200 mt-8">Fernanda Oliveira</p>
               </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[#008a9f] p-7 shadow-md rounded-md">
               <div className="flex flex-col justify-stretch h-full">
                  <div className="flex">
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                  </div>
                  <p className="text-why-gray-50 mt-8 flex-1">
                     Como uma família de viajantes, o Rio Travel Club nos
                     ofereceu uma maneira incrivelmente econômica e fácil de
                     explorar o Rio. Cada experiência foi única e a equipe nos
                     ajudou a navegar por cada reserva com facilidade e
                     confiança!
                  </p>
                  <p className="text-why-gray-200 mt-8">Carlos e Família</p>
               </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[#03877a] p-7 shadow-md rounded-md">
               <div className="flex flex-col justify-stretch h-full">
                  <div className="flex">
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                  </div>
                  <p className="text-why-gray-50 mt-8 flex-1">
                     A facilidade de reservar os passeios e o suporte amigável
                     da equipe tornaram minha viagem ao Rio uma aventura
                     inesquecível!
                  </p>
                  <p className="text-why-gray-200 mt-8">Patricia S.</p>
               </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[#008a9f] p-7 shadow-md rounded-md">
               <div className="flex flex-col justify-stretch h-full">
                  <div className="flex">
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                     <Image
                        src={'/img/Star.svg'}
                        width={25}
                        height={35}
                        alt="Estrela de avaliação dos usuários"
                     />
                  </div>
                  <p className="text-why-gray-50 mt-8 flex-1">
                     Explorar o Rio com o Rio Travel Club foi uma experiência
                     sem igual. A facilidade de uso, os descontos e a equipe de
                     suporte dedicada tornaram cada momento da viagem suave e
                     emocionante!
                  </p>
                  <p className="text-why-gray-200 mt-8">André L.</p>
               </div>
            </SwiperSlide>
         </div>
      </Swiper>
   );
}
