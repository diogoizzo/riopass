import { useState } from 'react';
import SectionTitle from '../../components/atoms/SectionTitle';
import MenuFront from '../../components/parts/MenuFront';
import PageHero from '../../components/parts/PageHero';
import TourFilter from '../../components/parts/TourFilter';
import ITour from '../../interfaces/ITour';
import { useQuery } from 'react-query';
import axios from 'axios';
import LoadingFront from '../../components/sections/LoadingFront';
import TourGrid from '../../components/sections/TourGrid';
import Footer from '../../components/sections/Footer';

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
   const uniqueToursCategories = [...new Set<string>(toursCategories)];
   const [filteredTours, setFilteredTours] = useState<ITour[] | null>(null);
   const [searchTours, setSearchTours] = useState<ITour[] | null>(null);
   return (
      <>
         <MenuFront />
         <main className="pb-20">
            <PageHero
               title="Atrações"
               subtitle="The best places for you"
               img="/img/water.jpg"
            />
            <div className="container mx-auto px-4">
               <SectionTitle
                  title="Atrações e Passeios pelo Rio de Janeiro"
                  subtitle="The Best Places to Stay in Rio"
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
               ) : searchTours ? (
                  <TourGrid tours={searchTours} />
               ) : (
                  <TourGrid tours={filteredTours || tours} />
               )}
            </div>
         </main>
         <Footer />
      </>
   );
}
