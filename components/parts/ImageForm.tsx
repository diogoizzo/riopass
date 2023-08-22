import React, { useState } from 'react';
import FormInputLine from '../atoms/FormInputLine';
import FormTextareaLine from '../atoms/FormTextareaLine';
import IImage from '../../interfaces/IImage';
import ConfirmationModal from './ConfirmationModal';
import PrimaryBtn from '../atoms/PrimaryBtn';
import DangerBtn from '../atoms/DangerBtn';
import ImageInputLine from '../atoms/ImageInputLine';
import axios from 'axios';

interface ImageFormProps {
   images: IImage[] | [];
   tourId: string;
}

function ImageForm({ images, tourId }: ImageFormProps) {
   const [form, setForm] = useState({
      id: '',
      name: '',
      description: ''
   });
   const [files, setFiles] = useState(null);
   const [selectedImageToEdit, setselectedImageToEdit] =
      useState<IImage | null>(null);
   const [isOpen, setIsOpen] = useState<boolean>(false);

   function deleteAction() {
      closeModal();
      // tourDeleteMutation.mutate(tour?.id);
   }

   function closeModal() {
      setIsOpen(false);
   }

   function openConfirmationModal(e: Event) {
      e.preventDefault();
      setIsOpen(true);
   }

   async function uploadToS3() {
      //@ts-ignore
      const file = files[0];
      console.log(file);
      if (!file) return;
      const { data } = await axios.get('/api/documentos/upload/');
      const { uploadUrl, key } = data;
      console.log(uploadUrl);
      try {
         await axios.put(uploadUrl, file);
      } catch (error) {
         console.log(error);
      }
      const openUrl = String(uploadUrl).split('?')[0];
      return openUrl;
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
            <div className="p-10 bg-raisin-black rounded-lg">
               <div className="flex flex-wrap items-center justify-between -mx-4  mb-8 pb-6 border-b border-gray-400 border-opacity-20">
                  <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                     <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                        Informações Básicas
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
                  <ImageInputLine
                     label="Arquivo da Imagem"
                     setState={setFiles}
                  />
                  <FormTextareaLine
                     state={form.description}
                     setState={setForm}
                     name="description"
                     label="Descrição da imagem"
                     placeHolder="Digite a descrição da nova imagem..."
                  />

                  <div className="text-right space-x-6">
                     <PrimaryBtn text={'Salvar'} clickHandle={uploadToS3} />
                     {selectedImageToEdit ? (
                        <DangerBtn
                           text={'Apagar Tour'}
                           openConfirmation={openConfirmationModal}
                        />
                     ) : null}
                  </div>
               </form>
            </div>
            <div className="p-10 bg-raisin-black rounded-lg mt-3">
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
               <div className="mt-3"></div>
            </div>
         </section>
      </>
   );
}

export default ImageForm;
