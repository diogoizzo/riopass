import {
   Tabs,
   TabsContent,
   TabsList,
   TabsTrigger
} from '../../../components/ui/FrontTab';
import DetailDisplayLine from '../../../components/atoms/DetailDisplayLine';
import TourTag from '../../../components/atoms/TourTag';
import PriceCard from '../../../components/parts/PriceCard';
import CallToAction from '../../../components/parts/CallToAction';
import Info from '../../../components/parts/Info';
import DetailCheckLine from '../../../components/atoms/DetailChecklLine';
import DetailMarkLine from '../../../components/atoms/DetailMarkLine';
import TourCard from '../../../components/atoms/TourCard';
import PhotoGrid from '../../../components/parts/PhotoGrid';
import ITour from '../../../interfaces/ITour';
import TourTitle from '../../../components/atoms/TourTitle';
import DetailLinkLine from '../../../components/atoms/DetailLinkLine';
import prisma from '../../../lib/prisma';
import Itinerary from '../../../components/parts/Intinerary';
import { useState } from 'react';
import PhotoModal from '../../../components/modals/PhotoModal';
import IImage from '../../../interfaces/IImage';
import Head from 'next/head';
import MenuFront from '../../../components/parts/MenuFront';
import Footer from '../../../components/sections/Footer';
import { useSession } from 'next-auth/react';
import ReservationCTA from '../../../components/parts/ReservationCTA';

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
   authenticated?: boolean;
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
                  },
                  take: 5
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
   const relatedTours: Related[] =
      tour?.categories?.reduce(
         (acc: any, current) => acc.concat(current?.tours),
         []
      ) || [];
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

   const { status } = useSession();
   const authenticated = status === 'authenticated' ? true : false;

   const finalRelatedTours = relatedUniqueTours
      .filter((item) => item.id !== tour.id)
      .slice(0, 4);

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
         <Head>
            <title>{tour?.name}</title>
            <meta name="description" content={tour?.description} />
            <meta
               name="keywords"
               content="tour, turismo, guia, trilhas, praias, aventuras, club de desconto, descontos, passeios, viagem, férias, agência de turismo, passeios de barco, experiências"
            ></meta>
            <meta name="author" content="Diogo Izzo"></meta>
         </Head>
         <PhotoModal isOpen={isOpen} closeModal={closeModal} img={img} />
         <div className="bg-why-gray-50 relative">
            <MenuFront />
            <main className="bg-why-gray-50 ">
               <TourTitle title={tour?.name} img={tour?.featuredPhoto.src} />

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
                              Informações Importantes
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
                                 content={
                                    'Os valores anunciados são para pagamento a vista, em dinheiro ou pix. A disponibilidade e a taxa para pagamento com cartão de crédito, dependem do procedimento do parceiro responsável pela atração.'
                                 }
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
                                 link={tour?.moreInfo}
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
                           className="bg-white px-8 py-10 border-l border-r border-l-why-gray-100 border-r-why-gray-100  border-t-4 border-t-why-blue-600  z-30 relative"
                           value="reserva"
                        >
                           <h3 className="text-why-gray-900 mb-3 text-xl font-semibold">
                              COMO RESERVAR?
                           </h3>
                           <p className="text-why-gray-800 mb-2">
                              Ao entrar para o Rio Travel Club você será
                              redirecionado para nossa área de membros onde você
                              poderá realizar a reserva do seu passeio escolhido
                              diretamente com o nosso suporte dedicado. Todos os
                              pedidos de reserva passam pela nossa equipe, como
                              forma de garantir o seu desconto final junto ao
                              nosso parceiro.
                           </p>
                           <p className="text-why-gray-800 mb-6">
                              As reservas para os passeios dependem de
                              disponibilidade dos nossos parceiros para os dias
                              escolhidos.
                           </p>
                           <h3 className="text-why-gray-900 mb-3 text-xl font-semibold">
                              COMO REALIZAR O PAGAMENTO DO PASSEIO?
                           </h3>
                           <p className="text-why-gray-800 mb-2">
                              Todos os pagamentos dos passeios são realizados
                              diretamente para nosso parceiro. Por isso os
                              valores dos passeios com descontos anunciados em
                              nosso site, são para pagamentos à vista, no
                              dinheiro ou no PIX. Para pagamentos no cartão
                              nossos parceiros poderão cobrar uma taxa de 5% a
                              10% do valor com desconto.
                           </p>
                           <p className="text-why-gray-800 mb-6">
                              <strong>
                                 Alguns parceiro e passeios podem exigir o
                                 pagamento de um sinal para realizar a reserva.
                              </strong>
                           </p>

                           <h3 className="text-why-gray-900 mb-3 text-xl font-semibold">
                              PREÇOS PARA CRIANÇAS
                           </h3>
                           <p className="text-why-gray-800 mb-6">
                              Muitos passeios possuem desconto para crianças de
                              3 a 11 anos e gratuidade para crianças de colo até
                              2 anos. Entre em contato com nosso suporte para
                              mais informações.
                           </p>
                           <h3 className="text-why-gray-900 mb-3 text-xl font-semibold">
                              POLÍTICAS DE CANCELAMENTO
                           </h3>
                           <p className="text-why-gray-800 mb-6">
                              Todos os passeios são oferecidos por parceiros
                              credenciados, sendo que cada um tem suas próprias
                              políticas de reserva, operação, pagamento e
                              cancelamento. Para saber mais informações sobre
                              algum passeio ou parceiro, entre em contato com
                              nosso suporte ou diretamente com o parceiro.
                           </p>
                        </TabsContent>
                     </Tabs>
                  </div>
                  <div className=" w-full md:w-1/4  mt-10 md:mt-14 md:pl-2">
                     <PriceCard
                        price={tour?.price}
                        finalPrice={tour?.finalPrice}
                     />
                     {authenticated ? <ReservationCTA /> : <CallToAction />}
                  </div>
                  <div className=" w-full mt-6  pt-10 pb-24">
                     <h2 className=" text-4xl text-why-gray-900 mb-10 font-medium">
                        Você Também deve Gostar
                     </h2>
                     <div className="flex flex-col md:flex-row md:space-x-3 md:space-y-0 space-y-3">
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
            <Footer />
         </div>
      </>
   );
}

Homepage.auth = false;
