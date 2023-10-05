import { useState } from 'react';
import SectionTitle from '../../components/atoms/SectionTitle';
import MenuFront from '../../components/parts/MenuFront';
import PageHero from '../../components/parts/PageHero';
import TourFilter from '../../components/parts/TourFilter';
import TourGrid from '../../components/sections/TourGrid';
import ITour from '../../interfaces/ITour';
import prisma from '../../lib/prisma';

export async function getServerSideProps() {
   try {
      const tours = await prisma.tour.findMany({
         select: {
            id: true,
            name: true,
            description: true,
            price: true,
            finalPrice: true,
            destination: true,
            durationHours: true,
            featuredPhoto: {
               select: {
                  name: true,
                  description: true,
                  awsFileName: true,
                  src: true
               }
            },
            categories: {
               select: {
                  name: true
               }
            },
            url: true
         }
      });
      return {
         props: {
            tours
         }
      };
   } catch (error) {
      console.log(error);
   }
}

interface ToursProps {
   tours: ITour[];
}

export default function Tours({ tours }: ToursProps) {
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
         <main>
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
               {searchTours ? (
                  <TourGrid tours={searchTours} />
               ) : (
                  <TourGrid tours={filteredTours || tours} />
               )}
            </div>
         </main>
      </>
   );
}
