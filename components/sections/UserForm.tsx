import { useState } from 'react';
import FormInputLine from '../atoms/FormInputLine';
import SelectInput from '../atoms/SelectTourInput';
import IUser from '../../interfaces/IUser';
import UserServices from '../../services/UserServices';
import User from '../../entities/User';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import ConfirmationModal from '../parts/ConfirmationModal';
import PrimaryBtn from '../atoms/PrimaryBtn';
import DangerBtn from '../atoms/DangerBtn';
import useErrorToast from '../../hooks/useErrorToast';

interface UserFormProps {
   user?: User;
}

export interface UserFromData extends IUser {
   confirmPassword?: string;
   password?: string;
}

function UserForm({ user }: UserFormProps) {
   const router = useRouter();

   const errorToast = useErrorToast();

   const [isOpen, setIsOpen] = useState(false);

   const [form, setForm] = useState<UserFromData>({
      id: user?.id || undefined,
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
      cpf: user?.cpf || '',
      password: '',
      confirmPassword: ''
   });

   const userUpdateMutation = useMutation({
      mutationFn: UserServices.updateById,
      onSuccess: () => {
         router.push(`/admin/usuarios?updated=true`);
      }
   });

   const userDeleteMutation = useMutation({
      mutationFn: UserServices.delete,
      onSuccess: () => {
         router.push('/admin/usuarios?deleted=true');
      }
   });

   async function register(e: any) {
      e.preventDefault();
      if (!user) {
         if (!form.name) {
            errorToast('É preciso informar ao menos o nome do paciente');
         } else if (!form.password) {
            errorToast('É necessário informar uma senha');
         } else if (form.password !== form.confirmPassword) {
            errorToast('As senhas precisam ser iguais');
         } else {
            const isRegistred = await UserServices.register(form);
            if (isRegistred) {
               router.push('/admin/usuarios?saved=true');
            }
         }
      } else {
         delete form?.password;
         delete form?.confirmPassword;
         userUpdateMutation.mutate(form);
      }
   }

   function deleteAction() {
      closeModal();
      userDeleteMutation.mutate(user?.id);
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
            text={'Tem certeza que deseja apagar o usuário?'}
            isOpen={isOpen}
            closeModal={closeModal}
            deleteAction={deleteAction}
         />
         {/* TODO verificar se os subtitulos estao se ajustando para o caso de
         novo usuário e edição de usuário */}
         <section className="py-3 mt-3">
            <div className="container px-4 mx-auto">
               <div className="p-10 bg-raisin-black rounded-lg">
                  <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
                     <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                        <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                           Informações Pessoais
                        </h4>

                        {user ? (
                           <p className="text-sm text-cool-gray-500">
                              Edite as informações pessoais do usuário acima.
                           </p>
                        ) : (
                           <p className="text-sm text-cool-gray-500">
                              Preencha as informações pessoais do novo usuário.
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
                        placeHolder="Digite o nome do novo usuário..."
                     />

                     <FormInputLine
                        state={form.email}
                        setState={setForm}
                        name="email"
                        label="Email"
                        type="email"
                        placeHolder="Digite o email do novo usuário..."
                     />
                     <FormInputLine
                        state={form.phone}
                        setState={setForm}
                        name="phone"
                        label="Telefone"
                        type="tel"
                        placeHolder="Digite o telefone do novo usuário..."
                     />
                     <FormInputLine
                        state={form.cpf}
                        setState={setForm}
                        name="cpf"
                        label="CPF"
                        type="text"
                        placeHolder="Digite o CPF do novo usuário..."
                     />

                     {!user ? (
                        <>
                           <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 mt-12 border-b border-gray-400 border-opacity-20">
                              <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                                 <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                                    Senha
                                 </h4>
                              </div>
                           </div>
                           <FormInputLine
                              state={form.password}
                              setState={setForm}
                              name="password"
                              label="Senha"
                              type="password"
                              placeHolder="Digite a senha do novo usuário"
                           />
                           <FormInputLine
                              state={form.confirmPassword}
                              setState={setForm}
                              name="confirmPassword"
                              label="Repita a Senha"
                              type="password"
                              placeHolder="Repita a senha do novo usuário"
                           />
                        </>
                     ) : null}

                     <div className="text-right space-x-6">
                        <PrimaryBtn text={'Salvar'} clickHandle={register} />
                        {user ? (
                           <DangerBtn
                              text={'Apagar Usuário'}
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
export default UserForm;
