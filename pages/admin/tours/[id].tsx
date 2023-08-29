import { useRouter } from 'next/router';
import Menu from '../../../components/parts/Menu';
import PageHeader from '../../../components/parts/PageHeader';
import { useQuery } from 'react-query';
import TourServices from '../../../services/TourServices';
import Tour from '../../../entities/Tour';
import TourDisplay from '../../../components/sections/TourDisplay';
import Loading from '../../../components/sections/loading';

export default function TourView<NextPage>() {
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
               <PageHeader
                  title={tour?.name}
                  subtitle="Veja as informações do usuário acima."
                  btnText="Editar"
                  search={false}
                  btnHref={tour?.tourEditLink || ''}
               />
               <TourDisplay tour={tour} />
            </>
         )}
      </Menu>
   );
}

TourView.auth = true;
