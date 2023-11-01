import { useSession } from 'next-auth/react';
import ITour from '../../interfaces/ITour';
import TourCardGrid from '../atoms/TourCardGrid';

interface ToursProps {
   tours: ITour[];
}

function TourGrid({ tours }: ToursProps) {
   const { status } = useSession();
   const authenticated = status === 'authenticated' ? true : false;
   return (
      <div className="w-full grid gap-8 gird-cols-1 md:grid-cols-2 py-6">
         {tours?.map((tour) => (
            <TourCardGrid
               key={tour.id}
               id={tour.id || ''}
               name={tour.name}
               description={tour.description}
               price={tour.price}
               finalPrice={tour.finalPrice}
               destination={tour.destination || null}
               durationHours={tour.durationHours || null}
               featuredPhoto={tour.featuredPhoto}
               url={tour.url}
               authenticated={authenticated}
            />
         ))}
      </div>
   );
}
export default TourGrid;
