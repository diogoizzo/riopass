import ITour from '../../interfaces/ITour';
import TourCardGrid from '../atoms/TourCardGrid';

interface ToursProps {
   tours: ITour[];
}

function TourGrid({ tours }: ToursProps) {
   return (
      <div className="w-full grid gap-8 grid-cols-2 py-6">
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
            />
         ))}
      </div>
   );
}
export default TourGrid;
