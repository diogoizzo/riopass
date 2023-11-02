import React, { useRef, useState } from 'react';
import MenuFront from '../../components/parts/MenuFront';
import PageHeroCheckout from '../../components/parts/PageHeroCheckout';
import Footer from '../../components/sections/Footer';
import {
   Popover,
   PopoverContent,
   PopoverTrigger
} from '../../components/ui/popover';
import { Button } from '../../components/ui/button';
import { cn } from '../../lib/utils';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '../../components/ui/calendar';
import dayjs from 'dayjs';
import pt from 'dayjs/locale/pt-br';
import { useSession } from 'next-auth/react';
import { useQuery } from 'react-query';
import UserServices from '../../services/UserServices';
import { useRouter } from 'next/router';

function Reservar() {
   const formRef = useRef<HTMLFormElement>(null);
   const router = useRouter();
   const urlQuery = router.query;
   const [date, setDate] = React.useState<Date>();
   const [dayPickerOpen, setDayPickerOpen] = useState(false);
   const { data } = useSession();
   //@ts-ignore
   const userId = data?.id;
   const query = useQuery(['user', userId], () => UserServices.getById(userId));
   const user = query?.data;
   async function handleSubmit() {}
   return (
      <>
         <MenuFront />
         <PageHeroCheckout
            title="Reserve sua Experiência"
            subtitle="Granta sua vaga em uma de nossas atrações com apenas alguns cliques."
            img={'/img/rio.webp'}
         />
         <main className="bg-why-gray-50 min-h-[100vh] text-why-gray-800 py-24">
            <div className="container px-4 mx-auto">
               <form id="reserva" ref={formRef} onSubmit={handleSubmit}>
                  <div className="flex flex-wrap -m-3 mb-3">
                     <div className="w-full md:w-1/4 p-3">
                        <h2 className="text-coolGray-900 text-xl font-semibold">
                           Informações Pessoais
                        </h2>
                        <p className="text-sm text-coolGray-500 font-medium">
                           Confira e edite suas informações pessoais.
                        </p>
                     </div>
                     <div className="w-full md:w-3/4 p-3">
                        <div className="p-8 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">
                           <div className="flex flex-wrap pb-3 -m-3">
                              <div className="w-full md:w-1/2 p-3">
                                 <p className="mb-1.5 font-medium text-base text-coolGray-800">
                                    Nome
                                 </p>
                                 <input
                                    disabled
                                    defaultValue={user?.name}
                                    name="name"
                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-why-yellow-400 border border-coolGray-200 rounded-lg shadow-input"
                                    type="text"
                                 />
                              </div>
                              <div className="w-full md:w-1/2 p-3">
                                 <p className="mb-1.5 font-medium text-base text-coolGray-800">
                                    CPF
                                 </p>
                                 <input
                                    defaultValue={user?.cpf}
                                    disabled
                                    name="cpf"
                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-why-yellow-400 border border-coolGray-200 rounded-lg shadow-input"
                                    type="text"
                                 />
                              </div>
                              <div className="w-full md:w-1/2 p-3">
                                 <p className="mb-1.5 font-medium text-base text-coolGray-800">
                                    E-mail
                                 </p>
                                 <input
                                    required
                                    defaultValue={user?.email}
                                    name="email"
                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-why-yellow-400 border border-coolGray-200 rounded-lg shadow-input"
                                    type="email"
                                    placeholder="Seu e-mail para receber informações sobre a reserva"
                                 />
                              </div>
                              <div className="w-full md:w-1/2 p-3">
                                 <p className="mb-1.5 font-medium text-base text-coolGray-800">
                                    Telefone
                                 </p>
                                 <input
                                    required
                                    name="phone"
                                    defaultValue={user?.phone}
                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-why-yellow-400 border border-coolGray-200 rounded-lg shadow-input"
                                    type="tel"
                                    placeholder="Telefone para contato no momento do tour"
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-wrap -m-3 mb-3">
                     <div className="w-full md:w-1/4 p-3">
                        <h2 className="text-coolGray-900 text-xl font-semibold">
                           Informações da Reserva
                        </h2>
                        <p className="text-sm text-coolGray-500 font-medium">
                           Verifique e complete as informações da reserva.
                        </p>
                     </div>
                     <div className="w-full md:w-3/4 p-3">
                        <div className="p-8 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">
                           <div className="flex flex-wrap -m-3 mb-3">
                              <div className="w-full p-3">
                                 <p className="mb-1.5 font-medium text-base text-coolGray-800">
                                    Nome do Tour
                                 </p>
                                 <input
                                    disabled
                                    defaultValue={urlQuery.name}
                                    name="tourName"
                                    onChange={() => {}}
                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-why-yellow-400 border border-coolGray-200 rounded-lg shadow-input"
                                    type="text"
                                 />
                                 <input
                                    type="hidden"
                                    name="tourId"
                                    value={urlQuery.id}
                                 />
                              </div>
                              <div className="w-full md:w-1/2 p-3">
                                 <p className="mb-1.5 font-medium text-base text-coolGray-800">
                                    Número de Pessoas
                                 </p>
                                 <input
                                    required
                                    name="numberOfPeople"
                                    defaultValue={1}
                                    onChange={() => {}}
                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-why-yellow-400 border border-coolGray-200 rounded-lg shadow-input"
                                    type="number"
                                    min={1}
                                    //todo fazer com que o máximo seja o numero de quantidade da compra
                                    max={200}
                                    placeholder="Informe a quantidade desejada"
                                 />
                              </div>
                              <div className="w-full md:w-1/2 p-3">
                                 <p className="mb-1.5 font-medium text-base text-coolGray-800">
                                    Data
                                 </p>
                                 <Popover
                                    open={dayPickerOpen}
                                    onOpenChange={setDayPickerOpen}
                                 >
                                    <PopoverTrigger asChild>
                                       <Button
                                          variant={'outline'}
                                          className={cn(
                                             `w-full justify-start text-left py-[1.35rem]  flex  font-normal`,
                                             !date && 'text-muted-foreground'
                                          )}
                                       >
                                          <CalendarIcon className="mr-2 h-4 w-4 text-why-gray-900 " />
                                          {date ? (
                                             `${dayjs(date)
                                                .locale(pt)
                                                .format(`dddd, D`)} de ${dayjs(
                                                date
                                             )
                                                .locale(pt)
                                                .format(`MMMM`)} de ${dayjs(
                                                date
                                             )
                                                .locale(pt)
                                                .format(`YYYY`)} `
                                          ) : (
                                             <span>Escolha uma data</span>
                                          )}
                                       </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                       <Calendar
                                          required
                                          mode="single"
                                          selected={date}
                                          onSelect={(e) => {
                                             setDate(e);
                                             setDayPickerOpen(false);
                                          }}
                                          initialFocus
                                       />
                                    </PopoverContent>
                                 </Popover>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-wrap -m-3 mb-3">
                     <div className="w-full md:w-1/4 p-3">
                        <h2 className="text-coolGray-900 text-xl font-semibold">
                           Informações de Hospedagem
                        </h2>
                        <p className="text-sm text-coolGray-500 font-medium">
                           Insira as informações do local onde você estará
                           hospedado.
                        </p>
                        <p className="text-sm text-coolGray-500 font-medium">
                           Essas informações serão utilizadas para tours que
                           incluem o serviço de busca diretamente no seu local
                           de estadia.
                        </p>
                     </div>
                     <div className="w-full md:w-3/4 p-3">
                        <div className="p-8 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">
                           <div className="flex flex-wrap pb-3 -m-3">
                              <div className="w-full md:w-3/4 p-3">
                                 <p className="mb-1.5 font-medium text-base text-coolGray-800">
                                    Logradouro
                                 </p>
                                 <input
                                    required
                                    name="street"
                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-why-yellow-400 border border-coolGray-200 rounded-lg shadow-input"
                                    type="text"
                                    placeholder="Insira o logradouro (rua, avenida e etc) do local de hospedagem"
                                 />
                              </div>
                              <div className="w-full md:w-1/4 p-3">
                                 <p className="mb-1.5 font-medium text-base text-coolGray-800">
                                    Número
                                 </p>
                                 <input
                                    required
                                    name="number"
                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-why-yellow-400 border border-coolGray-200 rounded-lg shadow-input"
                                    type="text"
                                 />
                              </div>
                              <div className="w-full md:w-1/2 p-3">
                                 <p className="mb-1.5 font-medium text-base text-coolGray-800">
                                    Bairro
                                 </p>
                                 <input
                                    name="neighborhood"
                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-why-yellow-400 border border-coolGray-200 rounded-lg shadow-input"
                                    type="text"
                                    placeholder="Insira o bairro da sua hospedagem"
                                 />
                              </div>
                              <div className="w-full md:w-1/2 p-3">
                                 <p className="mb-1.5 font-medium text-base text-coolGray-800">
                                    Complemento
                                 </p>
                                 <input
                                    name="phone"
                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-why-yellow-400 border border-coolGray-200 rounded-lg shadow-input"
                                    type="tel"
                                    placeholder="Informações adicionais da localidade"
                                 />
                              </div>
                              <div className="w-full  p-3">
                                 <p className="mb-1.5 font-medium text-base text-coolGray-800">
                                    Nome da Hospedagem
                                 </p>
                                 <input
                                    name="phone"
                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-why-yellow-400 border border-coolGray-200 rounded-lg shadow-input"
                                    type="tel"
                                    placeholder="Insira o nome da sua hospedagem"
                                 />
                              </div>
                              <div className="p-3 mt-2 w-full text-right">
                                 <button
                                    type="submit"
                                    className="block ml-auto min-w-[160px] px-14 font-semibold  rounded-md  shadow-md shadow-why-yellow-600/40 hover:scale-105 hover:shadow-lg text-xl transition-all ease-in-out hover:shadow-why-yellow-600/30 text-why-gray-50 py-3 bg-why-yellow-500 "
                                 >
                                    Reservar
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </form>
            </div>
         </main>
         <Footer />
      </>
   );
}

export default Reservar;
