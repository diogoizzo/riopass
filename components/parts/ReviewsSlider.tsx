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
            delay: 2500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false
         }}
      >
         <SwiperSlide className="bg-[#03877a] p-7 shadow-md rounded-md relative">
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
                  O Rio Travel Club foi um achado incrível para as minhas
                  viagens! A facilidade de reservar experiências e a economia
                  real que tive foram surpreendentes. A equipe sempre esteve
                  pronta para me ajudar a planejar cada detalhe. Uma jornada
                  verdadeiramente inesquecível!
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
                  Viajar com o Rio Travel Club foi uma das melhores decisões que
                  tomei! A economia é real e as experiências são incríveis. A
                  equipe de suporte para reservas é super atenciosa e fez toda a
                  diferença na minha viagem ao Rio. Recomendo muito!
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
                  Para nós, o Rio Travel Club foi uma verdadeira revolução em
                  nossas aventuras de viagem. A facilidade de uso e os descontos
                  significativos tornaram nossa viagem ao Rio não apenas
                  acessível, mas também mais emocionante e luxuosa do que
                  poderíamos imaginar!
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
                  Viajar com o Rio Travel Club foi uma experiência sem
                  complicações e repleta de momentos memoráveis. A facilidade de
                  reservar experiências e a real economia que fiz foram
                  simplesmente fenomenais. Mal posso esperar para explorar mais
                  destinos com eles!
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
                  O Rio Travel Club transformou minha viagem ao Rio em uma
                  experiência mágica e acessível. A equipe de suporte foi além
                  para garantir que cada reserva fosse perfeita e os descontos
                  oferecidos são genuínos e significativos. Uma verdadeira joia
                  para os amantes de viagens!
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
                  Como uma família de viajantes, o Rio Travel Club nos ofereceu
                  uma maneira incrivelmente econômica e fácil de explorar o Rio.
                  Cada experiência foi única e a equipe nos ajudou a navegar por
                  cada reserva com facilidade e confiança!
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
                  O Rio Travel Club é meu novo parceiro de viagem favorito! A
                  economia genuína, a facilidade de reservar experiências e o
                  suporte amigável da equipe tornaram minha viagem ao Rio uma
                  aventura verdadeiramente inesquecível e despreocupada!
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
                  Explorar o Rio com o Rio Travel Club foi uma experiência sem
                  igual. A facilidade de uso, os descontos e a equipe de suporte
                  dedicada tornaram cada momento da viagem suave e emocionante.
                  Uma maneira revolucionária de viajar pelo Brasil!"
               </p>
               <p className="text-why-gray-200 mt-8">André L.</p>
            </div>
         </SwiperSlide>
      </Swiper>
   );
}
