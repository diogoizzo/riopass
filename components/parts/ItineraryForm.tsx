import { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';
import FormInputLine from '../atoms/FormInputLine';
import FormTextareaLine from '../atoms/FormTextareaLine';
import PrimaryBtn from '../atoms/PrimaryBtn';
import SecundaryBtn from '../atoms/SecundaryBtn';
import DangerBtn from '../atoms/DangerBtn';

export interface IItineraryForm {
   name: string;
   description: string;
   time: string;
}

function ItineraryForm() {
   const [isOpen, setIsOpen] = useState(false);

   const [selectedStep, setSelectedStep] = useState(null);

   const [form, setForm] = useState<IItineraryForm>({
      name: '',
      description: '',
      time: ''
   });

   async function deleteAction() {
      closeModal();
   }
   function closeModal() {
      setIsOpen(false);
   }

   function openConfirmationModal(e: Event) {
      e.preventDefault();
      setIsOpen(true);
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
                        Informações da Etapa do Itinerário
                     </h4>
                     {selectedStep ? (
                        <p className="text-sm text-cool-gray-500">
                           Edite as informações da etapa selecionada do
                           itinerário.
                        </p>
                     ) : (
                        <p className="text-sm text-cool-gray-500">
                           Preencha as informações da nova etapa do itinerário
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
                     placeHolder="Digite o nome da nova etapa do itinerário..."
                  />
                  <FormInputLine
                     state={form.time}
                     setState={setForm}
                     name="time"
                     label="Horário"
                     type="time"
                     placeHolder="Digite o horário da nova etapa do itinerário."
                  />

                  <FormTextareaLine
                     state={form.description}
                     setState={setForm}
                     name="description"
                     label="Descrição da Etapa"
                     placeHolder="Digite a descrição da nova etapa do itinerário..."
                  />

                  <div className="text-right space-x-6">
                     <PrimaryBtn text={'Salvar Etapa'} clickHandle={() => {}} />

                     {selectedStep ? (
                        <>
                           <SecundaryBtn
                              text="Cancelar"
                              clickHandle={() => {}}
                           />
                           <DangerBtn
                              text={'Apagar'}
                              openConfirmation={() => {}}
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
                        Itinerário
                     </h4>
                     <p className="text-sm text-cool-gray-500">
                        Veja todos as etapas cadastradas para esse itinerário e
                        clique em uma para editar
                     </p>
                  </div>
                  <div className="pr-4">
                     <PrimaryBtn text="Salvar Alterações" />
                  </div>
               </div>
               <div className="flex flex-col space-y-3 ">
                  <div className="bg-raisin-black-light flex rounded-md shadow-md shadow-black/20 border border-raisin-black-lighter">
                     <div className="flex items-center justify-center text-5xl text-raisin-black font-extrabold w-1/6 rounded-tl-md rounded-bl-md bg-raisin-black-lighter">
                        1
                     </div>
                     <div className="flex flex-col p-5">
                        <h3 className="text-cool-gray-500 font-medium text-xl">
                           Teste de Título da etapa do itinerário
                        </h3>
                        <p className="text-carolina-blue">14:30</p>
                        <p className="mt-2 text-cool-gray-900">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Sunt saepe explicabo totam exercitationem,
                           adipisci dolorem doloremque, libero quos sint itaque
                           voluptates. Inventore eveniet beatae mollitia alias
                           placeat, adipisci vero illum at repudiandae. Eum
                           alias dolorem odio ex iusto eaque aperiam
                        </p>
                     </div>
                  </div>
                  <div className="bg-raisin-black-light flex rounded-md shadow-md shadow-black/20 border border-raisin-black-lighter">
                     <div className="flex items-center justify-center text-5xl text-raisin-black font-extrabold w-1/6 rounded-tl-md rounded-bl-md bg-raisin-black-lighter">
                        2
                     </div>
                     <div className="flex flex-col p-5">
                        <h3 className="text-cool-gray-500 font-medium text-xl">
                           Teste de Título da etapa do itinerário
                        </h3>
                        <p className="text-carolina-blue">14:30</p>
                        <p className="mt-2 text-cool-gray-900">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Sunt saepe explicabo totam exercitationem,
                           adipisci dolorem doloremque, libero quos sint itaque
                           voluptates. Inventore eveniet beatae mollitia alias
                           placeat, adipisci vero illum at repudiandae. Eum
                           alias dolorem odio ex iusto eaque aperiam
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}

export default ItineraryForm;
