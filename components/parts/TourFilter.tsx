import { Dispatch, SetStateAction } from 'react';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger
} from '../../components/ui/dropdown-menu';
import ITour from '../../interfaces/ITour';
import { Input } from '../../components/ui/input';

interface TourFilterProps {
   categories: string[];
   filteredTours: ITour[] | null;
   setSearchTours: Dispatch<SetStateAction<ITour[] | null>>;
   setFilteredTours: Dispatch<SetStateAction<ITour[] | null>>;
   tours: ITour[];
}

function TourFilter({
   categories,
   setFilteredTours,
   tours,
   filteredTours,
   setSearchTours
}: TourFilterProps) {
   const toursTest: ITour[] = filteredTours || tours;
   const workingTours = toursTest && [...toursTest];

   return (
      <div className=" w-full flex justify-between items-center  pt-4 pb-12">
         <div>
            <DropdownMenu>
               <DropdownMenuTrigger className="px-1  py-1">
                  <div className="flex items-center space-x-3 text-why-blue-900">
                     <svg
                        className="w-6 h-6 "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="filter"
                     >
                        <path
                           fill="currentcolor"
                           d="M19,2H5A3,3,0,0,0,2,5V6.17a3,3,0,0,0,.25,1.2l0,.06a2.81,2.81,0,0,0,.59.86L9,14.41V21a1,1,0,0,0,.47.85A1,1,0,0,0,10,22a1,1,0,0,0,.45-.11l4-2A1,1,0,0,0,15,19V14.41l6.12-6.12a2.81,2.81,0,0,0,.59-.86l0-.06A3,3,0,0,0,22,6.17V5A3,3,0,0,0,19,2ZM13.29,13.29A1,1,0,0,0,13,14v4.38l-2,1V14a1,1,0,0,0-.29-.71L5.41,8H18.59ZM20,6H4V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"
                        ></path>
                     </svg>
                     <p className="text-lg">Filtrar</p>
                  </div>
               </DropdownMenuTrigger>
               <DropdownMenuContent className="">
                  <DropdownMenuLabel className="">Categorias</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {categories?.map((category) => (
                     <DropdownMenuItem
                        key={category}
                        onClick={() =>
                           setFilteredTours(
                              tours.filter((tour) =>
                                 tour.categories?.some(
                                    (cat) => cat.name === category
                                 )
                              )
                           )
                        }
                     >
                        {category}
                     </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setFilteredTours(null)}>
                     Limpar
                  </DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenu>
         </div>
         <div className="flex-1">
            <Input
               type="text"
               placeholder="Pesquisar"
               className="w-2/4 mx-auto "
               onChange={(event) => {
                  if (event.target.value.length > 0) {
                     setSearchTours(
                        workingTours?.filter((tour) =>
                           tour.name
                              .toLowerCase()
                              .includes(event.target.value.toLowerCase())
                        )
                     );
                  } else {
                     setSearchTours(null);
                  }
               }}
            />
         </div>
         <div>
            <DropdownMenu>
               <DropdownMenuTrigger className="px-1     py-1">
                  <div className="flex items-center space-x-3 text-why-blue-900">
                     <svg
                        className="w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                        id="sort-amount-down"
                     >
                        <path
                           fill="currentcolor"
                           d="M6.29,14.29l-.29.3V7A1,1,0,0,0,4,7v7.59l-.29-.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l2-2a1,1,0,0,0-1.42-1.42ZM11,8H21a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2Zm10,3H11a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0,5H11a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"
                        ></path>
                     </svg>
                     <p className="text-lg">Ordenar</p>
                  </div>
               </DropdownMenuTrigger>
               <DropdownMenuContent>
                  <DropdownMenuItem
                     onClick={() =>
                        setFilteredTours(() => {
                           return workingTours?.sort((a, b) => {
                              const nameA = a?.name.toUpperCase();
                              const nameB = b?.name.toUpperCase();
                              if (nameA < nameB) return -1;
                              if (nameA > nameB) return 1;
                              return 0;
                           });
                        })
                     }
                  >
                     A - Z
                  </DropdownMenuItem>
                  <DropdownMenuItem
                     onClick={() =>
                        setFilteredTours(() => {
                           return workingTours?.sort((a, b) => {
                              const nameA = a?.name.toUpperCase();
                              const nameB = b?.name.toUpperCase();
                              if (nameA < nameB) return 1;
                              if (nameA > nameB) return -1;
                              return 0;
                           });
                        })
                     }
                  >
                     Z - A
                  </DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenu>
         </div>
      </div>
   );
}
export default TourFilter;
