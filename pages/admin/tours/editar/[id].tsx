import { useRouter } from 'next/router';
import FormPageHeader from '../../../../components/parts/FromPageHeader';
import Menu from '../../../../components/parts/Menu';
import { useQuery } from 'react-query';
import TourServices from '../../../../services/TourServices';
import Tour from '../../../../entities/Tour';
import TourForm from '../../../../components/sections/TourForm';
import Loading from '../../../../components/sections/loading';

export default function EditTour() {
   const router = useRouter();

   const tourId = String(router.query.id);

   const query = useQuery(['tour', tourId], () => TourServices.getById(tourId));

   const tour = query.data && Tour.createFromObject(query.data);

   return (
      <Menu>
         {query.isLoading ? (
            <Loading />
         ) : (
            <>
               <FormPageHeader
                  title={tour?.name}
                  subtitle="Edite as informações do tour acima."
               />
               {tour ? <TourForm tour={tour} /> : null}
            </>
         )}
      </Menu>
   );
}

EditTour.auth = true;
