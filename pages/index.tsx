import Image from 'next/image';
import Menu from '../components/parts/Menu';
import PageHeader from '../components/parts/PageHeader';
import BrazilFlag from '../components/atoms/BrazilFlag';
import {
   Tabs,
   TabsContent,
   TabsList,
   TabsTrigger
} from '../components/ui/FrontTab';
import DetailDisplayLine from '../components/atoms/DetailDisplayLine';
import TourTag from '../components/atoms/TourTag';
import PriceCard from '../components/parts/PriceCard';
import CallToAction from '../components/parts/CallToAction';
import Info from '../components/parts/Info';
import DetailCheckLine from '../components/atoms/DetailChecklLine';
import DetailMarkLine from '../components/atoms/DetailMarkLine';
import TourCard from '../components/atoms/TourCard';
import PhotoGrid from '../components/parts/PhotoGrid';
import Intinerary from '../components/parts/Intinerary';
import { NextPageContext } from 'next';

export default function Homepage<NextPage>() {
   return (
      <div className="bg-why-gray-50 relative">
         <div className="sticky top-0 bg-why-gray-100 shadow-md z-50">
            <header className="container mx-auto flex justify-between items-center py-6 font-medium">
               <div className="">
                  <Image
                     src={'/img/travelclub.svg'}
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
            <div className="w-full py-72 text-center bg-[url('/img/cristo.jpg')]  bg-cover bg-center">
               <h1 className="text-7xl text-shadow text-white font-bold relative -top-16">
                  City Tour Experiência ErreJota Premium
               </h1>
            </div>

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
                     </TabsList>
                     <TabsContent
                        value="detalhes"
                        className="bg-white  border-t-4 border-t-why-blue-600 shadow-sm rounded-b-md  z-30 relative "
                     >
                        <Info />
                        <div className="w-full h-full px-8 py-6 rounded-b-md">
                           <div className="py-4">
                              <TourTag text="City Tour" />
                           </div>
                           <div className="space-y-2 mb-10 text-lg text-why-gray-900">
                              <p>
                                 Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit. Fuga est nesciunt soluta nam!
                                 Ipsum velit placeat, repellat nulla culpa harum
                                 ipsam consectetur beatae non iure dolorem odio
                                 optio sunt? Esse enim at ratione similique
                                 culpa animi eveniet tenetur ipsum quis! Eaque
                                 odio tempora natus rem, inventore possimus
                                 temporibus deleniti tenetur.
                              </p>
                              <p>
                                 Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit. Fuga est nesciunt soluta nam!
                                 Ipsum velit placeat, repellat nulla culpa harum
                                 ipsam consectetur beatae non iure dolorem odio
                                 optio sunt? Esse enim at ratione similique
                                 culpa animi eveniet tenetur ipsum quis! Eaque
                                 odio tempora natus rem, inventore possimus
                                 temporibus deleniti tenetur. Lorem ipsum dolor
                                 sit amet consectetur adipisicing elit. Totam
                                 dolore quo odio suscipit eveniet neque
                                 voluptatem corporis accusantium unde est?
                              </p>
                           </div>

                           <DetailDisplayLine
                              label="Observações"
                              content="detalhe Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Aspernatur, itaque. Aspernatur,
                              iure eius facilis soluta, voluptatum incidunt
                              obcaecati ex corrupti optio voluptate ut officiis
                              modi neque suscipit expedita odio repellat
                              distinctio natus dicta perferendis! Sequi
                              voluptatum cupiditate, unde repellat porro nulla
                              natus neque ipsum in eos pariatur esse corrupti
                              itaque recusandae fuga! Molestias tempora omnis
                              culpa quia cupiditate aperiam id nobis totam
                              quaerat tenetur officia repellat iure voluptate
                              quas amet, beatae maiores. Excepturi, fugit! Eum
                              tenetur, quibusdam, voluptatibus dicta quaerat
                              debitis blanditiis dolores sapiente distinctio
                              accusantium rerum ipsa consequatur, assumenda"
                           />
                           <DetailDisplayLine
                              label="Observações"
                              content="detalhe Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Aspernatur, itaque. Aspernatur,
                              iure eius facilis soluta, voluptatum incidunt
                              obcaecati ex corrupti optio voluptate ut officiis
                              modi neque suscipit expedita odio repellat
                              distinctio natus dicta perferendis! Sequi
                              voluptatum cupiditate, unde repellat porro nulla
                              natus neque ipsum in eos pariatur esse corrupti
                              itaque recusandae fuga! Molestias tempora omnis
                              culpa quia cupiditate aperiam id nobis totam
                              quaerat tenetur officia repellat iure voluptate
                              quas amet, beatae maiores. Excepturi, fugit! Eum
                              tenetur, quibusdam, voluptatibus dicta quaerat
                              debitis blanditiis dolores sapiente distinctio
                              accusantium rerum ipsa consequatur, assumenda"
                           />
                           <DetailDisplayLine
                              label="Observações"
                              content="detalhe Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Aspernatur, itaque. Aspernatur,
                              iure eius facilis soluta, voluptatum incidunt
                              obcaecati ex corrupti optio voluptate ut officiis
                              modi neque suscipit expedita odio repellat
                              distinctio natus dicta perferendis! Sequi
                              voluptatum cupiditate, unde repellat porro nulla
                              natus neque ipsum in eos pariatur esse corrupti
                              itaque recusandae fuga! Molestias tempora omnis
                              culpa quia cupiditate aperiam id nobis totam
                              quaerat tenetur officia repellat iure voluptate
                              quas amet, beatae maiores. Excepturi, fugit! Eum
                              tenetur, quibusdam, voluptatibus dicta quaerat
                              debitis blanditiis dolores sapiente distinctio
                              accusantium rerum ipsa consequatur, assumenda"
                           />
                           <DetailDisplayLine
                              label="Observações"
                              content="detalhe Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Aspernatur, itaque. Aspernatur,
                              iure eius facilis soluta, voluptatum incidunt
                              obcaecati ex corrupti optio voluptate ut officiis
                              modi neque suscipit expedita odio repellat
                              distinctio natus dicta perferendis! Sequi
                              voluptatum cupiditate, unde repellat porro nulla
                              natus neque ipsum in eos pariatur esse corrupti
                              itaque recusandae fuga! Molestias tempora omnis
                              culpa quia cupiditate aperiam id nobis totam
                              quaerat tenetur officia repellat iure voluptate
                              quas amet, beatae maiores. Excepturi, fugit! Eum
                              tenetur, quibusdam, voluptatibus dicta quaerat
                              debitis blanditiis dolores sapiente distinctio
                              accusantium rerum ipsa consequatur, assumenda"
                           />
                           <DetailDisplayLine
                              label="Observações"
                              content="detalhe Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Aspernatur, itaque. Aspernatur,
                              iure eius facilis soluta, voluptatum incidunt
                              obcaecati ex corrupti optio voluptate ut officiis
                              modi neque suscipit expedita odio repellat
                              distinctio natus dicta perferendis! Sequi
                              voluptatum cupiditate, unde repellat porro nulla
                              natus neque ipsum in eos pariatur esse corrupti
                              itaque recusandae fuga! Molestias tempora omnis
                              culpa quia cupiditate aperiam id nobis totam
                              quaerat tenetur officia repellat iure voluptate
                              quas amet, beatae maiores. Excepturi, fugit! Eum
                              tenetur, quibusdam, voluptatibus dicta quaerat
                              debitis blanditiis dolores sapiente distinctio
                              accusantium rerum ipsa consequatur, assumenda"
                           />
                           <DetailCheckLine
                              label="O que inlcui"
                              content={[
                                 'Almoço',
                                 'Ingressos',
                                 'Bebidas',
                                 'Guia',
                                 'Transporte'
                              ]}
                           />
                           <DetailMarkLine
                              label="O que não inclui"
                              content={[
                                 'Almoço',
                                 'Ingressos',
                                 'Bebidas',
                                 'Guia',
                                 'Transporte'
                              ]}
                           />
                        </div>
                     </TabsContent>
                     <TabsContent
                        className="bg-white px-8 py-6 border-l border-r border-l-why-gray-100 border-r-why-gray-100  border-t-4 border-t-why-blue-600  z-30 relative"
                        value="fotos"
                     >
                        <PhotoGrid />
                     </TabsContent>
                     <TabsContent
                        className="bg-white px-8 py-6 border-l border-r border-l-why-gray-100 border-r-why-gray-100 h-[600px] border-t-4 border-t-why-blue-600  z-30 relative"
                        value="itinerario"
                     >
                        <Intinerary />
                     </TabsContent>
                  </Tabs>
               </div>
               <div className=" w-1/4  mt-14 pl-2">
                  <PriceCard />
                  <CallToAction />
               </div>
               <div className=" w-full mt-3  py-10">
                  <h2 className=" text-4xl text-why-gray-900 mb-6 font-medium">
                     Você Também deve Gostar
                  </h2>
                  <div className="flex space-x-3">
                     <TourCard />
                     <TourCard />
                     <TourCard />
                     <TourCard />
                  </div>
               </div>
            </div>
         </main>
         <footer className=" w-full  bg-why-blue  bg-why-blue-600 "></footer>
      </div>
   );
}

Homepage.auth = false;
