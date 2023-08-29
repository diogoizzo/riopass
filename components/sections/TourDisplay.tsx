import DisplayLine from '../atoms/DisplayLine';
import ITour from '../../interfaces/ITour';

interface TourDisplayProps {
   tour?: ITour;
}

function TourDisplay({ tour }: TourDisplayProps) {
   return (
      <section className="py-3 mt-3">
         <div className="container px-4 mx-auto">
            <div className="p-10 bg-raisin-black rounded-lg">
               <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
                  <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                     <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                        Informações Básicas
                     </h4>
                  </div>
               </div>
               <DisplayLine label="Nome" content={tour?.name} />
               <DisplayLine label="Url Amigável" content={tour?.url} />
               <DisplayLine label="Descrição" content={tour?.description} />
               <DisplayLine
                  label="Descrição Longa"
                  content={tour?.longDescription}
               />
               <DisplayLine label="Obervações" content={tour?.obs} />
               <DisplayLine
                  label="Categorias"
                  content={tour?.categories
                     ?.map((category) => category.name)
                     .join(', ')}
               />
               <DisplayLine
                  label="Idioma do Conteúdo"
                  content={tour?.textLanguage}
               />
               <DisplayLine label="Parceiro" content={tour?.partner} />
               <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
                  <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                     <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                        Informações Financeiras
                     </h4>
                  </div>
               </div>
               <DisplayLine label="Preço" content={String(tour?.price)} />
               <DisplayLine
                  label="Preço Final"
                  content={String(tour?.finalPrice)}
               />
               <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
                  <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                     <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                        Informações sobre o Trajeto
                     </h4>
                  </div>
               </div>
               <DisplayLine label="Destino Final" content={tour?.destination} />
               <DisplayLine
                  label="Duração do Tour (Horas)"
                  content={String(tour?.durationHours)}
               />
               <DisplayLine
                  label="Idiomas Atendidos pelo Tour"
                  content={tour?.languages}
               />
               <DisplayLine
                  label="Local de Partida"
                  content={tour?.placeOfDeparture}
               />
               <DisplayLine
                  label="Horário de Partida"
                  content={tour?.timeOfDeparture}
               />
               <DisplayLine
                  label="Local de Retorno"
                  content={tour?.placeOfReturn}
               />
               <DisplayLine
                  label="Horário de Retorno"
                  content={tour?.timeOfReturn}
               />
               <DisplayLine
                  label="Disponibilidade"
                  content={tour?.availability}
               />
               <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
                  <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                     <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                        Detalhes para Informar ao Consumidor
                     </h4>
                  </div>
               </div>
               <DisplayLine label="Restrições" content={tour?.restrictions} />
               <DisplayLine
                  label="O que está Incluso"
                  content={tour?.include}
               />
               <DisplayLine
                  label="O que Não está Incluso"
                  content={tour?.obs}
               />
               <DisplayLine
                  label="O que Trazer para o Tour"
                  content={tour?.belongsTobring}
               />
            </div>
         </div>
      </section>
   );
}
export default TourDisplay;
