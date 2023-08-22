import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import ConfirmationModal from '../parts/ConfirmationModal';
import useErrorToast from '../../hooks/useErrorToast';
import ITour from '../../interfaces/ITour';
import ITourCategory from '../../interfaces/ITourCategory';
import TourServices from '../../services/TourServices';
import InfoForm from '../parts/InfoForm';
import ITourForm, { Categories } from '../../interfaces/ITourForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import ImageForm from '../parts/ImageForm';

interface TourFormProps {
   tour?: ITour;
}

function TourForm({ tour }: TourFormProps) {
   const router = useRouter();

   const errorToast = useErrorToast();

   const [isOpen, setIsOpen] = useState(false);

   const [form, setForm] = useState<ITourForm>({
      id: tour?.id || '',
      name: tour?.name || '',
      description: tour?.description || '',
      longDescription: tour?.longDescription || '',
      categories: (tour?.categories &&
         tour?.categories?.map((category) => {
            return { id: category.id };
         })) ?? [{ id: '' }],
      price: tour?.price || 0,
      finalPrice: tour?.finalPrice || 0,
      include: tour?.include || '',
      itinerary: tour?.itinerary || '',
      featuredPhoto: tour?.featuredPhoto || '',
      featuredPhotoId: tour?.featuredPhotoId || '',
      destination: tour?.destination || '',
      durationHours: tour?.durationHours || 0,
      obs: tour?.obs || '',
      restrictions: tour?.restrictions || '',
      languages: tour?.languages || '',
      placeOfDeparture: tour?.placeOfDeparture || '',
      placeOfReturn: tour?.placeOfReturn || '',
      timeOfDeparture: tour?.timeOfDeparture || '',
      timeOfReturn: tour?.timeOfReturn || '',
      belongsTobring: tour?.belongsTobring || '',
      availability: tour?.availability || '',
      notInclude: tour?.notInclude || '',
      textLanguage: tour?.textLanguage || '',
      partner: tour?.partner || '',
      photoGallery: tour?.photoGallery || ''
   });

   const [selectedCategories, setSelectedCategories] = useState<
      ITourCategory[] | []
   >(tour?.categories || []);

   const tourUpdateMutation = useMutation({
      mutationFn: TourServices.updateById,
      onSuccess: () => {
         router.push(`/admin/tours?updated=true`);
      },
      onError: () => {
         errorToast('Não foi possível atualizar o tour');
      }
   });

   const tourDeleteMutation = useMutation({
      mutationFn: TourServices.delete,
      onSuccess: () => {
         router.push('/admin/tours?deleted=true');
      },
      onError: () => {
         errorToast('Não foi possível apagar o tour.');
      }
   });
   const tourCreateMutation = useMutation({
      mutationFn: TourServices.create,
      onSuccess: () => {
         router.push('/admin/tours?saved=true');
      },
      onError: () => {
         errorToast('Não foi possível criar o novo tour.');
      }
   });

   async function salvar(e: Event) {
      e.preventDefault();
      if (!tour) {
         tourCreateMutation.mutate(form);
      } else {
         tourUpdateMutation.mutate(form);
      }
   }

   useEffect(() => {
      const mapedCategories = selectedCategories?.map((category) => ({
         id: category.id
      }));
      setForm((prev) => ({
         ...prev,
         categories: mapedCategories
      }));
   }, [selectedCategories]);

   function deleteAction() {
      closeModal();
      tourDeleteMutation.mutate(tour?.id);
   }

   function closeModal() {
      setIsOpen(false);
   }

   function openConfirmationModal(e: Event) {
      e.preventDefault();
      setIsOpen(true);
   }
   console.log(typeof tour?.photoGallery);
   return (
      <div className="w-full pb-6">
         <ConfirmationModal
            text={'Tem certeza que deseja apagar o tour?'}
            isOpen={isOpen}
            closeModal={closeModal}
            deleteAction={deleteAction}
         />
         <Tabs
            defaultValue="info"
            className="text-center mt-4 "
            orientation="vertical"
         >
            <TabsList className="bg-raisin-black-lighter space-x-3">
               <TabsTrigger value="info" className="text-lg">
                  Informações
               </TabsTrigger>
               <TabsTrigger value="images" className="text-lg">
                  Imagens
               </TabsTrigger>
               <TabsTrigger value="itinerary" className="text-lg">
                  Itinerário
               </TabsTrigger>
            </TabsList>
            <TabsContent value="info">
               <InfoForm
                  tour={tour}
                  form={form}
                  setForm={setForm}
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                  salvar={salvar}
                  openConfirmationModal={openConfirmationModal}
               />
            </TabsContent>
            <TabsContent value="images" className="">
               <ImageForm
                  images={tour?.photoGallery || []}
                  tourId={tour?.id || ''}
               />
            </TabsContent>
            <TabsContent value="itinerary">
               <InfoForm
                  tour={tour}
                  form={form}
                  setForm={setForm}
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                  salvar={salvar}
                  openConfirmationModal={openConfirmationModal}
               />
            </TabsContent>
         </Tabs>
      </div>
   );
}
export default TourForm;
