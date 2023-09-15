import Image from 'next/image';
import Menu from '../../components/parts/Menu';
import PageHeader from '../../components/parts/PageHeader';
import BrazilFlag from '../../components/atoms/BrazilFlag';
import {
   Tabs,
   TabsContent,
   TabsList,
   TabsTrigger
} from '../../components/ui/FrontTab';
import DetailDisplayLine from '../../components/atoms/DetailDisplayLine';
import TourTag from '../../components/atoms/TourTag';
import PriceCard from '../../components/parts/PriceCard';
import CallToAction from '../../components/parts/CallToAction';
import Info from '../../components/parts/Info';
import DetailCheckLine from '../../components/atoms/DetailChecklLine';
import DetailMarkLine from '../../components/atoms/DetailMarkLine';
import TourCard from '../../components/atoms/TourCard';
import PhotoGrid from '../../components/parts/PhotoGrid';
import Intinerary from '../../components/parts/Intinerary';
import ITour from '../../interfaces/ITour';
import TourTitle from '../../components/atoms/TourTitle';
import DetailLinkLine from '../../components/atoms/DetailLinkLine';
import prisma from '../../lib/prisma';
import Itinerary from '../../components/parts/Intinerary';
import { useState } from 'react';
import PhotoModal from '../../components/modals/PhotoModal';
import IImage from '../../interfaces/IImage';
import { BoolEnum } from 'sharp';

export interface Related {
   id: string;
   name: string;
   description: string;
   price: number;
   finalPrice: number;
   destination: string | null;
   durationHours: number | null;
   featuredPhoto: IImage;
   url: string;
}

export async function getServerSideProps(context: any) {
   const { url } = context.params;
   const tour = await prisma.tour.findFirst({
      where: {
         url
      },
      select: {
         id: true,
         name: true,
         destination: true,
         description: true,
         longDescription: true,
         durationHours: true,
         price: true,
         finalPrice: true,
         moreInfo: true,
         obs: true,
         languages: true,
         restrictions: true,
         placeOfDeparture: true,
         belongsTobring: true,
         availability: true,
         include: true,
         notInclude: true,
         textLanguage: true,
         partner: true,
         categories: {
            select: {
               name: true,
               tours: {
                  select: {
                     id: true,
                     name: true,
                     url: true,
                     destination: true,
                     description: true,
                     price: true,
                     finalPrice: true,
                     durationHours: true,
                     featuredPhoto: {
                        select: {
                           name: true,
                           description: true,
                           src: true
                        }
                     }
                  }
               }
            }
         },
         itinerary: {
            select: {
               name: true,
               order: true
            }
         },
         photoGallery: {
            select: {
               name: true,
               description: true,
               awsFileName: true,
               src: true
            }
         },
         featuredPhoto: {
            select: {
               name: true,
               description: true,
               awsFileName: true,
               src: true
            }
         },
         createdAt: false,
         updatedAt: false
      }
   });

   return { props: { tour } };
}

export default function Homepage<NextPage>({ tour }: { tour: ITour }) {
   const relatedTours: Related[] = tour?.categories?.reduce(
      (acc: any, current) => acc.concat(current?.tours),
      []
   );
   const [menuOpen, setMenuOpen] = useState<boolean>(false);
   let relatedUniqueTours: Related[] = [];

   for (let tour of relatedTours) {
      if (relatedUniqueTours.length === 0) {
         let filteredArray = relatedTours.filter((item) => item.id !== tour.id);
         relatedUniqueTours = filteredArray;
         relatedUniqueTours.push(tour);
      } else {
         let filteredArray = relatedUniqueTours.filter(
            (item) => item.id !== tour.id
         );
         relatedUniqueTours = filteredArray;
         relatedUniqueTours.push(tour);
      }
   }

   const finalRelatedTours = relatedUniqueTours.filter(
      (item) => item.id !== tour.id
   );

   let [isOpen, setIsOpen] = useState(false);
   let [img, setImg] = useState('');

   function closeModal() {
      setIsOpen(false);
   }

   function openModal() {
      setIsOpen(true);
   }

   return (
      <>
         <PhotoModal isOpen={isOpen} closeModal={closeModal} img={img} />
         <div className="bg-why-gray-50 relative">
            <div className="sticky top-0 bg-why-gray-100 shadow-md z-50">
               <header className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 md:py-6 font-medium">
                  <div className=" flex justify-between items-center w-full md:w-auto">
                     <Image
                        src={'/img/travelclub.svg'}
                        quality={100}
                        height={990}
                        width={220}
                        alt="Logo em svg do brasil travel club"
                     />
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
                     className={`mt-5 md:mt-0  text-center w-full md:w-auto  ${
                        menuOpen ? null : 'hidden md:flex'
                     } `}
                  >
                     <ul className="flex md:w-auto w-full flex-col  md:flex-row md:space-x-10 uppercase md:items-center md:justify-center  text-why-gray-900">
                        <li className="border-b border-why-gray-200 md:border-none  py-3 md:py-0 ">
                           como funciona
                        </li>
                        <li className="border-b border-why-gray-200 md:border-none   py-3 md:py-0">
                           atrações
                        </li>
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
                        <li className="inline-flex items-center justify-center px-5 font-semibold  rounded-md  shadow-md shadow-why-blue-600/20 hover:scale-105 hover:shadow-lg transition-all ease-in-out hover:shadow-why-blue-600/30 text-why-gray-50 py-3 bg-why-blue-500 ">
                           Comprar Agora
                        </li>
                     </ul>
                  </nav>
               </header>
            </div>

            <main className="bg-why-gray-50 ">
               <TourTitle title={tour.name} img={tour.featuredPhoto.src} />

               <div className=" container relative w-full flex flex-wrap -mt-32 md:-mt-40  ">
                  <div className="w-full md:w-3/4">
                     <Tabs defaultValue="detalhes" className="w-full">
                        <TabsList className=" flex w-full md:w-auto flex-col md:flex-row justify-start md:space-x-6">
                           <TabsTrigger
                              value="detalhes"
                              className="data-[state=active]:bg-why-blue-600 w-full border-b border-why-gray-200 md:border-none md:w-auto data-[state=active]:text-why-gray-100 text-why-blue-600 bg-white text-xl uppercase rounded-b-none  py-3  px-7 inline-flex font-semibold"
                           >
                              Detalhes
                           </TabsTrigger>
                           <TabsTrigger
                              value="fotos"
                              className="bg-white text-xl uppercase rounded-b-none border-b border-why-gray-200 md:border-none  w-full md:w-auto data-[state=active]:bg-why-blue-600 data-[state=active]:text-why-gray-100  py-3 text-why-blue-600 px-7 inline-flex font-semibold"
                           >
                              Fotos
                           </TabsTrigger>
                           <TabsTrigger
                              value="itinerario"
                              className="bg-white data-[state=active]:bg-why-blue-600 border-b border-why-gray-200 md:border-none  w-full md:w-auto data-[state=active]:text-why-gray-100 text-xl uppercase rounded-b-none  py-3 text-why-blue-600 px-7 inline-flex font-semibold"
                           >
                              Itinerário
                           </TabsTrigger>
                           <TabsTrigger
                              value="reserva"
                              className="bg-white data-[state=active]:bg-why-blue-600   w-full md:w-auto data-[state=active]:text-why-gray-100 text-xl uppercase rounded-b-none  py-3 text-why-blue-600 px-7 inline-flex font-semibold"
                           >
                              Como reservar
                           </TabsTrigger>
                        </TabsList>
                        <TabsContent
                           value="detalhes"
                           className="bg-white  border-t-4 border-t-why-blue-600 shadow-sm rounded-b-md  z-30 relative "
                        >
                           <Info
                              destination={tour?.destination}
                              durationHours={String(tour?.durationHours)}
                              partner={tour?.partner}
                           />
                           <div className="w-full h-full px-5 md:px-8 py-6 rounded-b-md">
                              <div className="py-4 flex space-x-3">
                                 {tour?.categories?.map((cat) => (
                                    <TourTag key={cat.name} text={cat.name} />
                                 ))}
                              </div>
                              <div className="space-y-2 mb-10 text-base md:text-lg text-why-gray-900">
                                 {tour?.longDescription}
                              </div>

                              <DetailDisplayLine
                                 label="Observações"
                                 content={tour?.obs}
                              />
                              <DetailDisplayLine
                                 label="Línguas"
                                 content={tour?.languages}
                              />
                              <DetailDisplayLine
                                 label="Restrições"
                                 content={tour?.restrictions}
                              />
                              <DetailDisplayLine
                                 label="Local de partida/retorno"
                                 content={tour?.placeOfDeparture}
                              />
                              <DetailDisplayLine
                                 label="O que levar"
                                 content={tour?.belongsTobring}
                              />
                              <DetailDisplayLine
                                 label="Disponibilidade"
                                 content={tour?.availability}
                              />
                              <DetailCheckLine
                                 label="O que inclui"
                                 content={tour?.include
                                    ?.split(',')
                                    .map((item) => item.trim())}
                              />
                              <DetailMarkLine
                                 label="O que não inclui"
                                 content={tour?.notInclude
                                    ?.split(',')
                                    .map((item) => item.trim())}
                              />
                              <DetailLinkLine
                                 label="Mais informações"
                                 link={tour.moreInfo}
                              />
                           </div>
                        </TabsContent>
                        <TabsContent
                           className="bg-white px-8 py-6 border-l border-r border-l-why-gray-100 border-r-why-gray-100  border-t-4 border-t-why-blue-600  z-30 relative"
                           value="fotos"
                        >
                           <PhotoGrid
                              featuredPhoto={tour?.featuredPhoto}
                              photoGallery={tour?.photoGallery}
                              openModal={openModal}
                              setImg={setImg}
                           />
                        </TabsContent>
                        <TabsContent
                           className="bg-white px-8 py-6 border-l border-r border-l-why-gray-100 border-r-why-gray-100  border-t-4 border-t-why-blue-600  z-30 relative"
                           value="itinerario"
                        >
                           <Itinerary itinerary={tour?.itinerary} />
                        </TabsContent>
                        <TabsContent
                           className="bg-white px-8 py-6 border-l border-r border-l-why-gray-100 border-r-why-gray-100  border-t-4 border-t-why-blue-600  z-30 relative"
                           value="reserva"
                        >
                           Informações sobre como reservar
                        </TabsContent>
                     </Tabs>
                  </div>
                  <div className=" w-full md:w-1/4  mt-10 md:mt-14 md:pl-2">
                     <PriceCard
                        price={tour?.price}
                        finalPrice={tour?.finalPrice}
                     />
                     <CallToAction />
                  </div>
                  <div className=" w-full mt-6  py-10">
                     <h2 className=" text-4xl text-why-gray-900 mb-6 font-medium">
                        Você Também deve Gostar
                     </h2>
                     <div className="flex flex-col md:flex-row md:space-x-3 space-y-3">
                        {finalRelatedTours?.map((tour) => (
                           <TourCard
                              key={tour.id}
                              url={tour.url}
                              id={tour.id}
                              name={tour.name}
                              description={tour.description}
                              price={tour.price}
                              finalPrice={tour.finalPrice}
                              destination={tour.destination}
                              durationHours={tour.durationHours}
                              featuredPhoto={tour.featuredPhoto}
                           />
                        ))}
                     </div>
                  </div>
               </div>
            </main>
            <footer className=" w-full  bg-why-blue  bg-why-blue-600 "></footer>
         </div>
      </>
   );
}

Homepage.auth = false;
