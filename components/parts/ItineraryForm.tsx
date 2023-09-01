import { useRef, useState } from 'react';
import ConfirmationModal from './ConfirmationModal';
import FormInputLine from '../atoms/FormInputLine';
import FormTextareaLine from '../atoms/FormTextareaLine';
import PrimaryBtn from '../atoms/PrimaryBtn';
import SecundaryBtn from '../atoms/SecundaryBtn';
import DangerBtn from '../atoms/DangerBtn';
import StringSelectInput from '../atoms/StringSelectInput';
import { useToast } from '../ui/use-toast';
import useErrorToast from '../../hooks/useErrorToast';
import { useMutation, useQueryClient } from 'react-query';
import ItineraryServices from '../../services/ItineraryServices';
import IItineraryStep from '../../interfaces/IItineraryStep';
import { AxiosError } from 'axios';
import SuccessMsg from './SuccessMsg';

export interface IItineraryForm {
   name: string;
   order?: string;
}

interface ItineraryFormProps {
   steps: IItineraryStep[];
   tourId?: string;
}

function ItineraryForm({ steps, tourId }: ItineraryFormProps) {
   const [isOpen, setIsOpen] = useState(false);

   const [selectedStep, setSelectedStep] = useState<IItineraryStep | null>(
      null
   );

   const [form, setForm] = useState<IItineraryForm>({
      name: '',
      order: undefined
   });

   const orderedSteps = steps?.sort((a, b) => a.order - b.order);

   const { toast } = useToast();

   const errorToast = useErrorToast();

   const queryClient = useQueryClient();

   const stepsRef = useRef(null);

   const stepCreateMutation = useMutation({
      mutationFn: ItineraryServices.create,
      onSuccess: () => {
         toast({
            // @ts-expect-error
            title: <SuccessMsg msg="Nova Etapa Salva" />,
            description: (
               <p className="text-cool-gray-500">
                  A nova etapa foi salva com sucesso
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

   const stepDeleteMutation = useMutation({
      mutationFn: ItineraryServices.delete,
      onSuccess: () => {
         toast({
            // @ts-expect-error
            title: <SuccessMsg msg="Etapa Apagada" />,
            description: (
               <p className="text-cool-gray-500">
                  A etapa foi apagada com sucesso
               </p>
            )
         });
         queryClient.invalidateQueries(['tour', tourId]);
         clearForm();
         setSelectedStep(null);
      },
      onError: (error: AxiosError) => {
         errorToast(String(error.response?.data));
      }
   });

   const stepUpdateMutation = useMutation({
      mutationFn: ItineraryServices.update,
      onSuccess: () => {
         toast({
            // @ts-expect-error
            title: <SuccessMsg msg="Etapa Atualizada" />,
            description: (
               <p className="text-cool-gray-500">
                  A etapa foi atualizada com sucesso
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
         order: undefined
      });
   }

   function clearSelect() {
      const remove = (div: any) => {
         div.classList.remove('border-blue-300');
         div.classList.add('border-raisin-black-lighter');
      };
      //@ts-ignore
      for (let div of stepsRef.current.children) remove(div);
   }

   function handleSelect(e: any, step: IItineraryStep) {
      clearSelect();
      e.target.classList.remove('border-raisin-black-lighter');
      e.target.classList.add('border-blue-300');
      setSelectedStep(step);
      setForm({
         name: step.name || '',
         order: String(step.order) || ''
      });
   }

   function cancelHandler() {
      clearSelect();
      setSelectedStep(null);
      clearForm();
   }

   async function deleteAction() {
      stepDeleteMutation.mutate({
         stepId: selectedStep?.id,
         tourId
      });
      closeModal();
   }
   function closeModal() {
      setIsOpen(false);
   }

   function openConfirmationModal(e: Event) {
      e.preventDefault();
      setIsOpen(true);
   }

   async function save() {
      if (selectedStep) {
         stepUpdateMutation.mutate({ form, stepId: selectedStep.id, tourId });
      } else {
         if (tourId) {
            stepCreateMutation.mutate({
               form,
               tourId
            });
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
                  <StringSelectInput
                     title="Ordem"
                     placeholder="Selecione o número de ordem dessa etapa"
                     name="order"
                     state={form.order}
                     setState={setForm}
                     options={[
                        '1',
                        '2',
                        '3',
                        '4',
                        '5',
                        '6',
                        '7',
                        '8',
                        '9',
                        '10',
                        '11',
                        '12',
                        '13',
                        '14',
                        '15'
                     ]}
                  />
                  <div className="text-right space-x-6">
                     <PrimaryBtn text={'Salvar Etapa'} clickHandle={save} />

                     {selectedStep ? (
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
                        Itinerário
                     </h4>
                     <p className="text-sm text-cool-gray-500">
                        Veja todos as etapas cadastradas para esse itinerário e
                        clique em uma para editar
                     </p>
                  </div>
               </div>
               <div ref={stepsRef} className="flex flex-col space-y-3 ">
                  {orderedSteps?.map((step) => (
                     <div
                        key={step.id}
                        onClick={(e) => handleSelect(e, step)}
                        className="bg-raisin-black-light flex rounded-md shadow-md shadow-black/20 border border-raisin-black-lighter"
                     >
                        <div className="flex items-center justify-center text-5xl text-raisin-black font-extrabold w-1/6 rounded-tl-md rounded-bl-md bg-raisin-black-lighter">
                           {step.order}
                        </div>
                        <div className="flex flex-col p-5">
                           <h3 className="text-cool-gray-500 font-medium text-xl">
                              {step.name}
                           </h3>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      </>
   );
}

export default ItineraryForm;
