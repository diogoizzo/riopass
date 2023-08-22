import React, { FormEvent, SetStateAction } from 'react';
import { Label } from '../ui/label';
import { PopoverClose } from '../ui/popover';
import CategoryServices from '../../services/CategoryServices';
import { useMutation, useQueryClient } from 'react-query';
import { useToast } from '../ui/use-toast';
import SuccessMsg from './SuccessMsg';
import useErrorToast from '../../hooks/useErrorToast';

interface CategoryFormProps {
   setIsPopoverOpen: React.Dispatch<SetStateAction<boolean>>;
}

function CategoryForm({ setIsPopoverOpen }: CategoryFormProps) {
   const { toast } = useToast();
   const errorToast = useErrorToast();
   const queryClient = useQueryClient();

   const categoryCreateMutation = useMutation({
      mutationFn: CategoryServices.create,
      onSuccess: () => {
         queryClient.invalidateQueries('categories');
         toast({
            // @ts-expect-error
            title: <SuccessMsg msg="Nova Categoria Criada" />,
            description: (
               <p className="text-cool-gray-500">
                  A nova categoria foi criada com sucesso.
               </p>
            )
         });
      },
      onError: () => {
         errorToast('Não foi possível salva a nova categoria');
      }
   });

   function createHandler(e: any) {
      e.preventDefault();
      const form = new FormData(e.target);
      if (form.get('name') && form.get('enName') && form.get('esName')) {
         categoryCreateMutation.mutate(form);
         setIsPopoverOpen(false);
      } else {
         errorToast(
            'Para criar uma categoria é necessário fornecer o nome nos três idiomas'
         );
      }
   }
   return (
      <>
         <h3 className="uppercase w-full text-xl text-center font-medium mb-3 ">
            Nova Categoria
         </h3>
         <form onSubmit={createHandler}>
            <Label className="pl-1 text-cool-gray-500" htmlFor="name">
               Nome em Português
            </Label>
            <input
               className="block mt-1 mb-2 text-md placeholder:text-gray-700 py-2 px-2 w-full text-sm text-cool-gray-200 placeholder-cool-gray-200 font-medium outline-none bg-transparent border border-raisin-black-lighter hover:border-cool-gray-900 focus-within:border-carolina-blue rounded-lg"
               type="text"
               name="name"
               id="name"
            />
            <Label className="pl-1 text-cool-gray-500" htmlFor="enName">
               Nome em Inglês
            </Label>
            <input
               className="block mt-1 mb-2 text-md placeholder:text-gray-700 py-2 px-2 w-full text-sm text-cool-gray-200 placeholder-cool-gray-200 font-medium outline-none bg-transparent border border-raisin-black-lighter hover:border-cool-gray-900 focus-within:border-carolina-blue rounded-lg"
               type="text"
               name="enName"
               id="nameEn"
            />
            <Label className="pl-1 text-cool-gray-500" htmlFor="esName">
               Nome em Espanhol
            </Label>
            <input
               className="block mt-1 mb-2 text-md placeholder:text-gray-700 py-2 px-2 w-full text-sm text-cool-gray-200 placeholder-cool-gray-200 font-medium outline-none bg-transparent border border-raisin-black-lighter hover:border-cool-gray-900 focus-within:border-carolina-blue rounded-lg"
               type="text"
               name="esName"
               id="nameEs"
            />
            <div className="flex justify-center mt-5 space-x-3">
               <input
                  type="submit"
                  value="Salvar"
                  className="inline-flex py-2 px-9  items-center text-center shadow-sm shadow-black/40 border-2 border-yinmn-blue-900 text-lg font-bold text-cool-gray-200 bg-yinmn-blue-500 hover:bg-yinmn-blue-200 transition duration-200 rounded-lg"
               />
               <PopoverClose className="inline-flex py-2 px-6  items-center text-center shadow-sm shadow-black/40 border-2 border-raisin-black-lighter text-lg font-bold text-raisin-black-lighter bg-cool-gray-900 hover:bg-cool-gray-500 transition duration-200 rounded-lg">
                  Cancelar
               </PopoverClose>
            </div>
         </form>
      </>
   );
}

export default CategoryForm;
