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
            {/* <div className="h-[100vh] w-[100%] bg-black bg-opacity-80 inline-flex items-center justify-center fixed z-40 overflow-y-scroll overscroll-y-none ">
               <div className="absolute top-4 right-4 text-white font-bold text-2xl">
                  X
               </div>
               <div className="w-[90%] h-[90%] relative">
                  <Image
                     className="rounded-sm"
                     src={
                        'https://riopass-bucket.s3.sa-east-1.amazonaws.com/00511406-8bb4-4311-b053-3b79dd940c0e'
                     }
                     fill={true}
                     alt={'nenhuma descrição fornecida'}
                     style={{ objectFit: 'contain' }}
                  />
               </div>
            </div> */}
            <div className="sticky top-0 bg-why-gray-100 shadow-md z-50">
               <header className="container mx-auto flex justify-between items-center py-6 font-medium">
                  <div className="">
                     <Image
                        src={'/img/travelclub.svg'}
                        quality={100}
                        height={990}
                        width={220}
                        alt="Logo em svg do brasil travel club"
                     />
                  </div>
                  <nav>
                     <ul className="flex space-x-10 uppercase items-center text-why-gray-900">
                        <li>como funciona</li>
                        <li>atrações</li>
                        <li>como reservar</li>
                        <li>preços</li>
                        <li>FAQ</li>
                        <li>Contato</li>

                        <li className="relative">
                           <BrazilFlag className="w-8 h-8" />
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

               <div className=" container relative w-full flex flex-wrap -mt-40  ">
                  <div className="w-3/4">
                     <Tabs defaultValue="detalhes" className="w-full">
                        <TabsList className=" space-x-6">
                           <TabsTrigger
                              value="detalhes"
                              className="data-[state=active]:bg-why-blue-600 data-[state=active]:text-why-gray-100 text-why-blue-600 bg-white text-xl uppercase rounded-b-none  py-3  px-7 inline-flex font-semibold"
                           >
                              Detalhes
                           </TabsTrigger>
                           <TabsTrigger
                              value="fotos"
                              className="bg-white text-xl uppercase rounded-b-none data-[state=active]:bg-why-blue-600 data-[state=active]:text-why-gray-100  py-3 text-why-blue-600 px-7 inline-flex font-semibold"
                           >
                              Fotos
                           </TabsTrigger>
                           <TabsTrigger
                              value="itinerario"
                              className="bg-white data-[state=active]:bg-why-blue-600 data-[state=active]:text-why-gray-100 text-xl uppercase rounded-b-none  py-3 text-why-blue-600 px-7 inline-flex font-semibold"
                           >
                              Itinerário
                           </TabsTrigger>
                           <TabsTrigger
                              value="reserva"
                              className="bg-white data-[state=active]:bg-why-blue-600 data-[state=active]:text-why-gray-100 text-xl uppercase rounded-b-none  py-3 text-why-blue-600 px-7 inline-flex font-semibold"
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
                           <div className="w-full h-full px-8 py-6 rounded-b-md">
                              <div className="py-4 flex space-x-3">
                                 {tour?.categories?.map((cat) => (
                                    <TourTag key={cat.name} text={cat.name} />
                                 ))}
                              </div>
                              <div className="space-y-2 mb-10 text-lg text-why-gray-900">
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
                  <div className=" w-1/4  mt-14 pl-2">
                     <PriceCard
                        price={tour?.price}
                        finalPrice={tour?.finalPrice}
                     />
                     <CallToAction />
                  </div>
                  <div className=" w-full mt-3  py-10">
                     <h2 className=" text-4xl text-why-gray-900 mb-6 font-medium">
                        Você Também deve Gostar
                     </h2>
                     <div className="flex space-x-3">
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
