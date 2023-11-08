import { useEffect, useState } from 'react';
import SectionTitle from '../../../../components/atoms/SectionTitle';
import MenuFront from '../../../../components/parts/MenuFront';
import PageHero from '../../../../components/parts/PageHero';
import TourFilter from '../../../../components/parts/TourFilter';
import ITour from '../../../../interfaces/ITour';
import { useQuery } from 'react-query';
import axios from 'axios';
import LoadingFront from '../../../../components/sections/LoadingFront';
import TourGrid from '../../../../components/sections/TourGrid';
import Footer from '../../../../components/sections/Footer';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Tours() {
   const toursQuery = useQuery(['tours'], async () => {
      const res = await axios.get('/api/front/tours');
      return res.data;
   });
   const tours: ITour[] = toursQuery.data;
   const toursCategories = tours
      ?.map((tour) => tour.categories?.map((category) => category.name))
      .reduce((acc: any, item: any) => {
         return acc?.concat(item);
      }, []);

   const router = useRouter();
   const urlQuery = router.query.categoria;
   const uniqueToursCategories = [...new Set<string>(toursCategories)];
   const [filteredTours, setFilteredTours] = useState<ITour[] | null>(null);
   const [searchTours, setSearchTours] = useState<ITour[] | null>(null);

   useEffect(() => {
      if (urlQuery) {
         setFilteredTours(
            tours?.filter((tour) =>
               tour.categories?.some((cat) => cat.name === urlQuery)
            )
         );
      }
   }, [urlQuery, toursQuery.data]);
   return (
      <>
         <Head>
            <title>Atrações</title>
         </Head>
         <MenuFront />
         <main className="pb-20">
            <PageHero
               title="Atrações"
               subtitle="As melhores atrações, com preços imperdíveis."
               img="/img/water.jpg"
            />
            <div className="container mx-auto px-4">
               <SectionTitle
                  title="Atrações e Passeios pelo Rio de Janeiro"
                  subtitle="As melhores atrações com os menores preços."
               />
               <TourFilter
                  categories={uniqueToursCategories}
                  setFilteredTours={setFilteredTours}
                  filteredTours={filteredTours}
                  tours={tours}
                  setSearchTours={setSearchTours}
               />

               {toursQuery.isLoading ? (
                  <LoadingFront />
               ) : searchTours && searchTours.length > 0 ? (
                  <TourGrid tours={searchTours} />
               ) : filteredTours && filteredTours.length > 0 ? (
                  <TourGrid tours={filteredTours} />
               ) : filteredTours || searchTours ? (
                  <p className="text-center mt-10 text-why-gray-800">
                     Não foi encontrada nenhuma atração para essa pesquisa
                  </p>
               ) : (
                  <TourGrid tours={tours} />
               )}
            </div>
         </main>
         <Footer />
      </>
   );
}
