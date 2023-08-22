import { useEffect, useState } from 'react';
import Menu from '../../../components/parts/Menu';
import PageHeader from '../../../components/parts/PageHeader';
import UserTable from '../../../components/sections/UserTable';
import { useToast } from '../../../components/ui/use-toast';
import { useRouter } from 'next/router';
import SuccessMsg from '../../../components/parts/SuccessMsg';
import { useQuery } from 'react-query';
import Loading from '../../../components/sections/loading';
import TourServices from '../../../services/TourServices';
import Tour from '../../../entities/Tour';
import TourTable from '../../../components/sections/TourTable';

export default function Tours<NextPage>() {
   const router = useRouter();

   const [search, setSearch] = useState(null);

   const urlQuery = router.query;

   const toursQuery = useQuery(['tours'], () => TourServices.getAll());

   const tours = toursQuery.data && Tour.createMany(toursQuery.data);
   const { toast } = useToast();

   useEffect(() => {
      if (urlQuery.saved) {
         toast({
            // @ts-expect-error
            title: <SuccessMsg msg="Novo Tour Criado" />,
            description: (
               <p className="text-cool-gray-500">
                  O novo tour foi salvo no banco de dados com sucesso.
               </p>
            )
         });
      } else if (urlQuery.deleted) {
         toast({
            // @ts-expect-error
            title: <SuccessMsg msg="Tour Apagado" />,
            description: (
               <p className="text-cool-gray-500">
                  O tour foi deletado com sucesso.
               </p>
            )
         });
      } else if (urlQuery.updated) {
         toast({
            // @ts-expect-error
            title: <SuccessMsg msg="Tour Atualizado" />,
            description: (
               <p className="text-cool-gray-500">
                  O tour foi atualizado com sucesso.
               </p>
            )
         });
      }
   }, [toast, urlQuery]);
   return (
      <Menu>
         <PageHeader
            title="Tours"
            subtitle="Veja todos os tours cadastrados no sistema."
            btnHref="/admin/tours/novo"
            data={tours}
            setData={setSearch}
         />
         {toursQuery.isLoading ? (
            <Loading />
         ) : (
            <TourTable data={search ?? tours} />
         )}
      </Menu>
   );
}

Tours.auth = true;
