import React from 'react';
import ITour from '../../interfaces/ITour';
import FormInputLine from '../atoms/FormInputLine';
import FormTextareaLine from '../atoms/FormTextareaLine';
import SelectAndAddCategories from '../atoms/SelectAndAddCategories';
import StringSelectInput from '../atoms/StringSelectInput';
import ITourCategory from '../../interfaces/ITourCategory';
import PrimaryBtn from '../atoms/PrimaryBtn';
import DangerBtn from '../atoms/DangerBtn';
import ITourForm from '../../interfaces/ITourForm';

interface InfoFormProps {
   tour?: ITour;
   form: ITourForm;
   setForm: React.Dispatch<React.SetStateAction<ITourForm>>;
   selectedCategories: ITourCategory[];
   setSelectedCategories: React.Dispatch<React.SetStateAction<ITourCategory[]>>;
   salvar: (e: Event) => void;
   openConfirmationModal: (e: Event) => void;
}

function InfoForm({
   tour,
   form,
   setForm,
   selectedCategories,
   setSelectedCategories,
   salvar,
   openConfirmationModal
}: InfoFormProps) {
   return (
      <section className=" text-left w-full">
         <div className="p-10 bg-raisin-black  rounded-b-lg border-l border-r border-b border-raisin-black-lighter">
            <div className="flex flex-wrap items-center justify-between -ml-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
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
               <FormInputLine
                  state={form.url}
                  setState={setForm}
                  name="url"
                  label="Url Amigável"
                  type="text"
                  placeHolder="Digite a url do novo tour..."
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
               <SelectAndAddCategories
                  name="categories"
                  title="Selecione a Categoria do Tour"
                  setSelected={setSelectedCategories}
                  selectedCategories={selectedCategories}
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
               <FormInputLine
                  state={form.moreInfo}
                  setState={setForm}
                  name="partner"
                  label="URL para mais Informações Sobre o Tour"
                  type="text"
                  placeHolder="Digite a URL das informações do tour no site do parceiro.."
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
                           Preencha as informações financeiras do novo tour.
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
                           Edite as informações sobre o trajeto do tour acima.
                        </p>
                     ) : (
                        <p className="text-sm text-cool-gray-500">
                           Preencha as informações sobre o trajeto do novo tour.
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
                  label="Local de Partida/Retorno"
                  type="text"
                  placeHolder="Digite o local de partida do tour..."
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
                           Edite os detalhes que precisam ser informados ao
                           consumidor.
                        </p>
                     ) : (
                        <p className="text-sm text-cool-gray-500">
                           Preencha os detalhes sobre o novo tour, que precisam
                           ser informados ao consumidor
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
                  placeHolder="Digite o que está incluído no tour (separando por vírgulas)..."
               />
               <FormInputLine
                  state={form.notInclude}
                  setState={setForm}
                  name="notInclude"
                  label="O que não esta Incluso"
                  type="text"
                  placeHolder="Digite o que não está incluído no tour (separando por vírgulas)..."
               />
               <FormInputLine
                  state={form.belongsTobring}
                  setState={setForm}
                  name="belongsTobring"
                  label="O que Trazer para o Tour"
                  type="text"
                  placeHolder="Digite o que o cliente deve trazer para o tour..."
               />
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
      </section>
   );
}

export default InfoForm;
