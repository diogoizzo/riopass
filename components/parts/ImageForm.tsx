import React, { useRef, useState } from 'react';
import FormInputLine from '../atoms/FormInputLine';
import FormTextareaLine from '../atoms/FormTextareaLine';
import IImage from '../../interfaces/IImage';
import ConfirmationModal from './ConfirmationModal';
import PrimaryBtn from '../atoms/PrimaryBtn';
import DangerBtn from '../atoms/DangerBtn';
import ImageInputLine from '../atoms/ImageInputLine';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import ImageServices from '../../services/ImageServices';
import { useToast } from '../ui/use-toast';
import useErrorToast from '../../hooks/useErrorToast';
import SuccessMsg from './SuccessMsg';
import FormSwitchLine from '../atoms/FormSwitchLine';
import Image from 'next/image';
import SecundaryBtn from '../atoms/SecundaryBtn';

interface ImageFormProps {
   images: IImage[] | [];
   tourId?: string;
   featuredPhoto: IImage;
}

export interface IImageForm {
   name: string;
   description: string;
   isFeatured: boolean;
}

function ImageForm({ images, tourId, featuredPhoto }: ImageFormProps) {
   const [form, setForm] = useState<IImageForm>({
      name: '',
      description: '',
      isFeatured: false
   });
   const [files, setFiles] = useState(null);
   const [selectedImageToEdit, setSelectedImageToEdit] =
      useState<IImage | null>(null);
   const [isOpen, setIsOpen] = useState<boolean>(false);

   const { toast } = useToast();

   const errorToast = useErrorToast();

   const queryClient = useQueryClient();

   const photoGalery = useRef(null);

   const imageCreateMutation = useMutation({
      mutationFn: ImageServices.create,
      onSuccess: () => {
         toast({
            // @ts-expect-error
            title: <SuccessMsg msg="Nova Imagem Salva" />,
            description: (
               <p className="text-cool-gray-500">
                  A nova imagem foi salva com sucesso
               </p>
            )
         });
         queryClient.invalidateQueries(['tour', tourId]);
         cancelHandler();
      },
      onError: (error: AxiosError) => {
         errorToast(String(error.response?.data));
      }
   });

   const imageDeleteMutation = useMutation({
      mutationFn: ImageServices.delete,
      onSuccess: () => {
         toast({
            // @ts-expect-error
            title: <SuccessMsg msg="Imagem Apagada" />,
            description: (
               <p className="text-cool-gray-500">
                  A imagem foi apagada com sucesso
               </p>
            )
         });
         queryClient.invalidateQueries(['tour', tourId]);
         clearForm();
         setSelectedImageToEdit(null);
      },
      onError: (error: AxiosError) => {
         errorToast(String(error.response?.data));
      }
   });

   const imageUpdateMutation = useMutation({
      mutationFn: ImageServices.update,
      onSuccess: () => {
         toast({
            // @ts-expect-error
            title: <SuccessMsg msg="Imagem Atualizada" />,
            description: (
               <p className="text-cool-gray-500">
                  A imagem foi atualizada com sucesso
               </p>
            )
         });
         queryClient.invalidateQueries(['tour', tourId]);
         cancelHandler();
      },
      onError: (error: AxiosError) => {
         errorToast(String(error.response?.data));
      }
   });

   function clearForm() {
      setForm({
         name: '',
         description: '',
         isFeatured: false
      });
   }

   async function deleteAction() {
      closeModal();
      if (selectedImageToEdit?.id) {
         imageDeleteMutation.mutate(selectedImageToEdit);
      }
   }
   function closeModal() {
      setIsOpen(false);
   }

   function openConfirmationModal(e: Event) {
      e.preventDefault();
      setIsOpen(true);
   }

   function clearSelect() {
      const remove = (div: any) => {
         div.classList.remove('border');
         div.classList.remove('border-bluer-300');
      };
      //@ts-ignore
      for (let div of photoGalery.current.children) {
         if (div.children.length > 1) {
            remove(div.children[1]);
         } else {
            remove(div.children[0]);
         }
      }
   }

   function handleSelect(e: any, img: IImage) {
      clearSelect();
      e.target.classList.add('border');
      e.target.classList.add('border-blue-300');
      setSelectedImageToEdit(img);
      setForm({
         name: img.name || '',
         description: img.description || '',
         isFeatured: Boolean(img.featuredOfTourId)
      });
   }
   function cancelHandler() {
      clearSelect();
      setSelectedImageToEdit(null);
      clearForm();
   }

   async function save() {
      if (selectedImageToEdit) {
         imageUpdateMutation.mutate({ img: selectedImageToEdit, data: form });
      } else {
         if (tourId) {
            const file = files && files[0];
            if (!file) {
               errorToast('Nenhum arquivo selecionado');
               return;
            }
            const { data } = await axios.get('/api/imagem/upload/');
            const { url, awsFileName } = data;
            try {
               await axios.put(url, file);
            } catch (error) {
               console.log(error);
            }
            const src = String(url).split('?')[0];
            imageCreateMutation.mutate({
               form,
               src,
               awsFileName,
               tourId
            });
            return src;
         } else {
            errorToast(
               'É necessário salvar as informações do novo tour primeiro'
            );
         }
      }
   }

   return (
      <>
         <ConfirmationModal
            text={'Tem certeza que deseja apagar a imagem'}
            isOpen={isOpen}
            closeModal={closeModal}
            deleteAction={deleteAction}
         />
         <section className=" text-left">
            <div className="p-10 bg-raisin-black rounded-b-lg border-l border-r border-b border-raisin-black-lighter">
               <div className="flex flex-wrap items-center justify-between -mx-4  mb-8 pb-6 border-b border-gray-400 border-opacity-20">
                  <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                     <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                        Informações da Imagem
                     </h4>
                     {selectedImageToEdit ? (
                        <p className="text-sm text-cool-gray-500">
                           Edite as informações da imagem selecionada.
                        </p>
                     ) : (
                        <p className="text-sm text-cool-gray-500">
                           Preencha as informações da nova imagem.
                        </p>
                     )}
                  </div>
               </div>
               <form>
                  <FormInputLine
                     state={form.name}
                     setState={setForm}
                     name="name"
                     label="Nome"
                     type="text"
                     placeHolder="Digite o nome da nova image..."
                  />
                  {!selectedImageToEdit ? (
                     <ImageInputLine
                        label="Arquivo da Imagem"
                        setState={setFiles}
                     />
                  ) : null}
                  {!selectedImageToEdit ? (
                     <FormSwitchLine
                        name="isFeatured"
                        state={Boolean(form.isFeatured)}
                        setState={setForm}
                        label="É a foto principal?"
                     />
                  ) : null}

                  <FormTextareaLine
                     state={form.description}
                     setState={setForm}
                     name="description"
                     label="Descrição da imagem"
                     placeHolder="Digite a descrição da nova imagem..."
                  />

                  <div className="text-right space-x-6">
                     <PrimaryBtn text={'Salvar'} clickHandle={save} />

                     {selectedImageToEdit ? (
                        <>
                           <SecundaryBtn
                              text="Cancelar"
                              clickHandle={cancelHandler}
                           />
                           <DangerBtn
                              text={'Apagar'}
                              openConfirmation={openConfirmationModal}
                           />
                        </>
                     ) : null}
                  </div>
               </form>
            </div>
            <div className="p-10 bg-raisin-black rounded-lg mt-3 border border-raisin-black-lighter">
               <div className="flex flex-wrap items-center justify-between -mx-4  mb-8 pb-6 border-b border-gray-400 border-opacity-20">
                  <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                     <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                        Galeria de Imagens Salvas
                     </h4>
                     <p className="text-sm text-cool-gray-500">
                        Veja todos as imagens salvas para esse tour e clique em
                        uma para editar
                     </p>
                  </div>
               </div>
               <div ref={photoGalery} className="mt-3 grid grid-cols-6 gap-2">
                  {featuredPhoto ? (
                     <div
                        onClick={(e) => handleSelect(e, featuredPhoto)}
                        className="w-full h-36 border border-raisin-black-lighter rounded-md relative"
                     >
                        <span className="absolute z-40 top-1 left-1">
                           <svg
                              className="w-5 h-5 text-yellow-300"
                              xmlns="http://www.w3.org/2000/svg"
                              enableBackground="new 0 0 24 24"
                              viewBox="0 0 24 24"
                              id="star"
                           >
                              <path
                                 fill="currentcolor"
                                 d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"
                              ></path>
                           </svg>
                        </span>
                        <Image
                           className="object-contain"
                           src={featuredPhoto.src}
                           fill={true}
                           alt={featuredPhoto.description || ''}
                        />
                     </div>
                  ) : null}
                  {images?.map((img) => (
                     <div
                        onClick={(e) => handleSelect(e, img)}
                        key={img.id}
                        className="w-full h-36 border border-raisin-black-lighter rounded-md relative"
                     >
                        <Image
                           className="object-contain"
                           src={img.src}
                           fill={true}
                           alt={img.description || ''}
                        />
                     </div>
                  ))}
               </div>
            </div>
         </section>
      </>
   );
}

export default ImageForm;
