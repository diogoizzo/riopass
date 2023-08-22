import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import ITourCategory from '../../interfaces/ITourCategory';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import CategoryForm from '../parts/CategoryForm';
import { useQuery } from 'react-query';
import CategoryServices from '../../services/CategoryServices';
import TourCategory from '../../entities/TourCategory';

interface SelectAndAddCategoriesProps {
   name: string;
   title: string;
   selectedCategories: ITourCategory[] | [];
   setSelected: React.Dispatch<React.SetStateAction<ITourCategory[] | []>>;
}

export default function SelectAndAddCategories({
   name,
   title,
   selectedCategories,
   setSelected
}: SelectAndAddCategoriesProps) {
   const categoriesQuery = useQuery(['categories'], () =>
      CategoryServices.getAll()
   );
   const categories =
      categoriesQuery.data && TourCategory.createMany(categoriesQuery.data);
   const [isPopoverOpen, setIsPopoverOpen] = useState(false);
   return (
      <div className="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-cool-gray-900 border-opacity-10">
         <div className="w-full sm:w-1/3 px-4 mb-4 sm:mb-0">
            <span className="text-md font-medium text-cool-gray-500">
               {title}
            </span>
         </div>
         <div className="w-full sm:w-2/3 px-4">
            <div className="max-w-xl flex relative items-center">
               <Listbox
                  value={selectedCategories}
                  onChange={setSelected}
                  by="id"
                  name={name}
                  multiple
               >
                  <div className="relative  w-[90%]">
                     <Listbox.Button className="block text-md  w-full text-sm text-cool-gray-200 placeholder-cool-gray-200 font-medium outline-none bg-transparent border border-raisin-black-lighter hover:border-cool-gray-900 focus-within:border-carolina-blue rounded-lg py-4 pl-3 pr-10 text-left  ">
                        {selectedCategories?.length ? (
                           <span className="block truncate">
                              {selectedCategories
                                 .map((category) => category.name)
                                 .join(', ')}
                           </span>
                        ) : (
                           <span className="text-gray-700">
                              Selecione uma ou mais categorias
                           </span>
                        )}

                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                           <ChevronUpDownIcon
                              className="h-5 w-5 text-gray-600"
                              aria-hidden="true"
                           />
                        </span>
                     </Listbox.Button>
                     <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                     >
                        <Listbox.Options className="scrollbar absolute mt-1 max-h-60 w-full  overflow-auto rounded-md border border-raisin-black-lighter bg-raisin-black-light py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                           {categories?.map((category: ITourCategory) => (
                              <Listbox.Option
                                 key={category.id}
                                 className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                       active
                                          ? 'bg-cool-gray-900 text-raisin-black'
                                          : 'text-cool-gray-900'
                                    }`
                                 }
                                 value={category}
                              >
                                 {({ selected, active }) => (
                                    <>
                                       <span
                                          className={`block truncate ${
                                             selected
                                                ? 'font-medium'
                                                : 'font-normal'
                                          }`}
                                       >
                                          {category.name}
                                       </span>
                                       {selected ? (
                                          <span
                                             className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                active
                                                   ? 'text-raisin-black'
                                                   : 'text-cool-gray-200'
                                             } `}
                                          >
                                             <CheckIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                             />
                                          </span>
                                       ) : null}
                                    </>
                                 )}
                              </Listbox.Option>
                           ))}
                        </Listbox.Options>
                     </Transition>
                  </div>
               </Listbox>
               <Popover
                  open={isPopoverOpen}
                  onOpenChange={() => setIsPopoverOpen((prev) => !prev)}
               >
                  <PopoverTrigger className="inline-flex py-2 px-2  ml-4  items-center justify-center shadow-sm shadow-black/40 border-2 border-yinmn-blue-900 text-3xl font-medium text-cool-gray-200 bg-yinmn-blue-500 hover:bg-yinmn-blue-200 transition duration-200 rounded-lg">
                     <svg
                        className="fill-cool-gray-200 w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="plus"
                     >
                        <path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"></path>
                     </svg>
                  </PopoverTrigger>
                  <PopoverContent className="bg-raisin-black-light border p-6 border-raisin-black-lighter text-cool-gray-200 w-96">
                     <CategoryForm setIsPopoverOpen={setIsPopoverOpen} />
                  </PopoverContent>
               </Popover>
            </div>
         </div>
      </div>
   );
}
