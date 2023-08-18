import { useState } from 'react';
import FormInputLine from '../atoms/FormInputLine';
import SelectInput from '../atoms/SelectTourInput';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from 'react-query';
import ConfirmationModal from '../parts/ConfirmationModal';
import PrimaryBtn from '../atoms/PrimaryBtn';
import DangerBtn from '../atoms/DangerBtn';

import FormTextareaLine from '../atoms/FormTextareaLine';
import useErrorToast from '../../hooks/useErrorToast';
import ITour from '../../interfaces/ITour';
import ITourCategory from '../../interfaces/ITourCategory';
import StringSelectInput from '../atoms/StringSelectInput';
import TourServices from '../../services/TourServices';

interface TourFormProps {
   tour?: ITour;
}

function TourForm({ tour }: TourFormProps) {
   const router = useRouter();

   const errorToast = useErrorToast();

   const [isOpen, setIsOpen] = useState(false);

   const [form, setForm] = useState<ITour>({
      id: tour?.id || '',
      name: tour?.name || '',
      description: tour?.description || '',
      longDescription: tour?.longDescription || '',
      categories: tour?.categories || '',
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

   const categories: ITourCategory[] = [
      {
         id: 'csedrevcva14',
         name: 'Barco',
         esName: 'Navio',
         enName: 'Ship'
      },
      {
         id: 'cse254981624vcva14',
         name: 'Praia',
         esName: 'beach',
         enName: 'playa'
      }
   ];

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

   async function salvar(e: any) {
      e.preventDefault();
      console.log(form);
      if (!tour) {
         tourCreateMutation.mutate(form);
      } else {
         tourUpdateMutation.mutate(form);
      }
   }

   function deleteAction() {
      closeModal();
      tourDeleteMutation.mutate(tour?.id);
   }

   function closeModal() {
      setIsOpen(false);
   }

   function openConfirmationModal(e: any) {
      e.preventDefault();
      setIsOpen(true);
   }

   return (
      <>
         <ConfirmationModal
            text={'Tem certeza que deseja apagar o tour?'}
            isOpen={isOpen}
            closeModal={closeModal}
            deleteAction={deleteAction}
         />
         <section className="py-3 mt-3">
            <div className="container px-4 mx-auto">
               <div className="p-10 bg-raisin-black rounded-lg">
                  <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
                     <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                        <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                           Informações Básicas
                        </h4>
                        {tour ? (
                           <p className="text-sm text-cool-gray-500">
                              Edite as informações básicas do tour acima.
                           </p>
                        ) : (
                           <p className="text-sm text-cool-gray-500">
                              Preencha as informações básicas do novo tour.
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
                        placeHolder="Digite o nome do novo tour..."
                     />
                     <FormTextareaLine
                        state={form.description}
                        setState={setForm}
                        name="description"
                        label="Descrição Curta"
                        placeHolder="Digite a descrição curta do tour..."
                     />
                     <FormTextareaLine
                        state={form.longDescription}
                        setState={setForm}
                        name="longDescription"
                        label="Descrição Longa"
                        placeHolder="Digite a descrição longa do tour..."
                     />
                     <FormTextareaLine
                        state={form.obs}
                        setState={setForm}
                        name="obs"
                        label="Observações"
                        placeHolder="Digite as obervações sobre o tour..."
                     />
                     <SelectInput
                        name="categories"
                        title="Selecione a Categoria do Tour"
                        setState={setForm}
                        options={categories}
                        placeholder="Selecione a Categoria do Tour"
                        state={form.categories}
                     />
                     <StringSelectInput
                        name="textLanguage"
                        title="Qual o Idioma do Conteúdo?"
                        setState={setForm}
                        options={['Português', 'Inglês', 'Espanhol']}
                        placeholder="Selecione o idioma do conteúdo..."
                        state={form.textLanguage}
                     />
                     <FormInputLine
                        state={form.partner}
                        setState={setForm}
                        name="partner"
                        label="Quem é o Parceiro Responsável pelo Tour? "
                        type="text"
                        placeHolder="Digite os idiomas que o tour atende..."
                     />
                     <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
                        <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                           <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                              Informações Financeiras
                           </h4>
                           {tour ? (
                              <p className="text-sm text-cool-gray-500">
                                 Edite as informações financeiras do tour acima.
                              </p>
                           ) : (
                              <p className="text-sm text-cool-gray-500">
                                 Preencha as informações financeiras do novo
                                 tour.
                              </p>
                           )}
                        </div>
                     </div>
                     <FormInputLine
                        state={form.price}
                        setState={setForm}
                        name="price"
                        label="Preço"
                        type="number"
                        placeHolder="Digite o preço do tour..."
                     />
                     <FormInputLine
                        state={form.finalPrice}
                        setState={setForm}
                        name="finalPrice"
                        label="Preço Final"
                        type="number"
                        placeHolder="Digite o preço final do tour..."
                     />
                     <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
                        <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                           <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                              Informações sobre o Trajeto
                           </h4>
                           {tour ? (
                              <p className="text-sm text-cool-gray-500">
                                 Edite as informações sobre o trajeto do tour
                                 acima.
                              </p>
                           ) : (
                              <p className="text-sm text-cool-gray-500">
                                 Preencha as informações sobre o trajeto do novo
                                 tour.
                              </p>
                           )}
                        </div>
                     </div>
                     <FormInputLine
                        state={form.destination}
                        setState={setForm}
                        name="destination"
                        label="Destino Principal"
                        type="text"
                        placeHolder="Digite o destino principal do tour..."
                     />
                     <FormInputLine
                        state={form.durationHours}
                        setState={setForm}
                        name="durationHours"
                        label="Duração do Tour"
                        type="number"
                        placeHolder="Digite a duração em horas do tour..."
                     />
                     <FormInputLine
                        state={form.languages}
                        setState={setForm}
                        name="languages"
                        label="Quais idiomas são atendidos?"
                        type="text"
                        placeHolder="Digite os idiomas que o tour atende..."
                     />
                     <FormInputLine
                        state={form.placeOfDeparture}
                        setState={setForm}
                        name="placeOfDeparture"
                        label="Local de Partida"
                        type="text"
                        placeHolder="Digite o local de partida do tour..."
                     />
                     <FormInputLine
                        state={form.timeOfDeparture}
                        setState={setForm}
                        name="timeOfDeparture"
                        label="Horário de Partida"
                        type="time"
                        placeHolder="Digite o horário de partida do tour..."
                     />
                     <FormInputLine
                        state={form.placeOfReturn}
                        setState={setForm}
                        name="placeOfReturn"
                        label="Local de Retorno"
                        type="text"
                        placeHolder="Digite o local de retorno do tour..."
                     />

                     <FormInputLine
                        state={form.timeOfReturn}
                        setState={setForm}
                        name="timeOfReturn"
                        label="Horário de Retorno"
                        type="time"
                        placeHolder="Digite o horário de retorno do tour..."
                     />

                     <FormInputLine
                        state={form.availability}
                        setState={setForm}
                        name="availability"
                        label="Disponibilidade"
                        type="text"
                        placeHolder="Digite o local de retorno do tour..."
                     />
                     <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
                        <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                           <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                              Detalhes para Informar ao Consumidor
                           </h4>
                           {tour ? (
                              <p className="text-sm text-cool-gray-500">
                                 Edite os detalhes que precisam ser informados
                                 ao consumidor.
                              </p>
                           ) : (
                              <p className="text-sm text-cool-gray-500">
                                 Preencha os detalhes sobre o novo tour, que
                                 precisam ser informados ao consumidor
                              </p>
                           )}
                        </div>
                     </div>
                     <FormInputLine
                        state={form.restrictions}
                        setState={setForm}
                        name="restrictions"
                        label="Restrições do Tour"
                        type="text"
                        placeHolder="Digite as eventuais restrições do tour..."
                     />
                     <FormInputLine
                        state={form.include}
                        setState={setForm}
                        name="include"
                        label="O que esta Incluso"
                        type="text"
                        placeHolder="Digite o que está incluído no tour..."
                     />
                     <FormInputLine
                        state={form.notInclude}
                        setState={setForm}
                        name="notInclude"
                        label="O que não esta Incluso"
                        type="text"
                        placeHolder="Digite o que não está incluído no tour..."
                     />
                     <FormInputLine
                        state={form.belongsTobring}
                        setState={setForm}
                        name="belongsTobring"
                        label="O que Trazer para o Tour"
                        type="text"
                        placeHolder="Digite o que o cliente deve trazer para o tour..."
                     />
                     {/* 
                     <FormInputLine
                        state={form.phone}
                        setState={setForm}
                        name="phone"
                        label="Telefone"
                        type="tel"
                        placeHolder="Digite o telefone do novo paciente..."
                     />
                     <FormInputLine
                        state={form.email}
                        setState={setForm}
                        name="email"
                        label="Email"
                        type="email"
                        placeHolder="Digite o email do novo paciente..."
                     />
                     <FormInputLine
                        state={form.address}
                        setState={setForm}
                        name="address"
                        label="Endereço"
                        type="text"
                        placeHolder="Digite o endereço do novo paciente..."
                     />
                     <FormInputDateLine
                        //todo aqui vou precisa ajusar para usar o daysjs e formatar a data corretamente
                        state={form.birthday}
                        setState={setForm}
                        name="birthday"
                        label="Data de Nascimento"
                     />
                     <FormInputLine
                        state={form.cpf}
                        setState={setForm}
                        name="cpf"
                        label="CPF"
                        type="text"
                        placeHolder="Digite o CPF do novo paciente..."
                     />
                     <FormInputLine
                        state={form.birthplace}
                        setState={setForm}
                        name="birthplace"
                        label="Naturalidade"
                        type="text"
                        placeHolder="Digite a naturalidade do paciente..."
                     />
                     <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
                        <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                           <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                              Informações Institucionais
                           </h4>
                           {tour ? (
                              <p className="text-sm text-cool-gray-500">
                                 Edite as informaçõs institucionais do paciente
                                 acima.
                              </p>
                           ) : (
                              <p className="text-sm text-cool-gray-500">
                                 Preencha as institucionais do novo paciente.
                              </p>
                           )}
                        </div>
                     </div>
                     <FormInputLine
                        state={form.education}
                        setState={setForm}
                        name="education"
                        label="Escolaridade"
                        type="text"
                        placeHolder="Digite o grau de escolaridade do paciente..."
                     />
                     <FormInputLine
                        state={form.school}
                        setState={setForm}
                        name="school"
                        label="Nome da Escola"
                        type="text"
                        placeHolder="Digite o nome da escola do paciente..."
                     />

                     <FormSwitchLine
                        label="É bolsista?"
                        setState={setForm}
                        name="scholarship"
                        state={form.scholarship}
                     />

                     <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
                        <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                           <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                              Informações Médicas
                           </h4>
                           {tour ? (
                              <p className="text-sm text-cool-gray-500">
                                 Edite as informaçõs médicas do paciente acima.
                              </p>
                           ) : (
                              <p className="text-sm text-cool-gray-500">
                                 Preencha as médicas do novo paciente.
                              </p>
                           )}
                        </div>
                     </div>

                     <FormSwitchLine
                        label="Faz uso de medicação?"
                        setState={setForm}
                        name="isMedicated"
                        state={form.isMedicated}
                     />
                     {form.isMedicated ? (
                        <FormInputLine
                           state={form.medication}
                           setState={setForm}
                           name="medicamentos"
                           label="Quais medicamentos"
                           type="text"
                           placeHolder="Digite o nome dos medicamentos utilzados pelo paciente..."
                        />
                     ) : null}
                     <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
                        <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                           <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                              Outras informações
                           </h4>
                           {tour ? (
                              <p className="text-sm text-cool-gray-500">
                                 Edite as outras informações do paciente acima.
                              </p>
                           ) : (
                              <p className="text-sm text-cool-gray-500">
                                 Preencha as outras informações do novo
                                 paciente.
                              </p>
                           )}
                        </div>
                     </div>
                     <FormTextareaLine
                        state={form.complaint}
                        setState={setForm}
                        name="complaint"
                        label="Reclamação do Paciente"
                        placeHolder="Digite os detalhes da reclamação do paciente..."
                     />
                     <FormTextareaLine
                        state={form.observation}
                        setState={setForm}
                        name="observation"
                        label="Observações sobre o Paciente"
                        placeHolder="Digite as obervações relevantes sobre o paciente..."
                     />

                     <SelectInput
                        name="interviewedByUserId"
                        title="Responsável pela Entrevista"
                        setState={setForm}
                        options={users}
                        placeholder="Selecione o responsável pela entrevista"
                        state={form.interviewedBy?.id}
                     />
                     <SelectInput
                        name="underResponsibilityOfUserId"
                        title="Responsável pelo Paciente"
                        setState={setForm}
                        options={users}
                        placeholder="Selecione o responsável pela entrevista"
                        state={form.underResponsibilityOf?.id}
                     />

                      */}
                     <div className="text-right space-x-6">
                        <PrimaryBtn text={'Salvar'} clickHandle={salvar} />
                        {tour ? (
                           <DangerBtn
                              text={'Apagar Tour'}
                              openConfirmation={openConfirmationModal}
                           />
                        ) : null}
                     </div>
                  </form>
               </div>
            </div>
         </section>
      </>
   );
}
export default TourForm;
