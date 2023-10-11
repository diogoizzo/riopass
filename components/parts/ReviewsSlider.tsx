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
         slidesPerView={3}
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque, illum? Porro provident fugiat laudantium iste, iure
                  alias molestias cupiditate optio. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Officia, labore!
               </p>
               <p className="text-why-gray-200 mt-8">Carlos Augusto</p>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque, illum? Porro provident fugiat laudantium iste, iure
                  alias molestias cupiditate optio. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Officia, labore!
               </p>
               <p className="text-why-gray-200 mt-8">Carlos Augusto</p>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque, illum? Porro provident fugiat laudantium iste, iure
                  alias molestias cupiditate optio. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Officia, labore!
               </p>
               <p className="text-why-gray-200 mt-8">Carlos Augusto</p>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque, illum? Porro provident fugiat laudantium iste, iure
                  alias molestias cupiditate optio. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Officia, labore!
               </p>
               <p className="text-why-gray-200 mt-8">Carlos Augusto</p>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque, illum? Porro provident fugiat laudantium iste, iure
                  alias molestias cupiditate optio. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Officia, labore!
               </p>
               <p className="text-why-gray-200 mt-8">Carlos Augusto</p>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque, illum? Porro provident fugiat laudantium iste, iure
                  alias molestias cupiditate optio. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Officia, labore!
               </p>
               <p className="text-why-gray-200 mt-8">Carlos Augusto</p>
            </div>
         </SwiperSlide>
      </Swiper>
   );
}
