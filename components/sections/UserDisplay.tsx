import DisplayLine from '../atoms/DisplayLine';
import IUser from '../../interfaces/IUser';

interface UserDisplayProps {
   user?: IUser;
}

function UserDisplay({ user }: UserDisplayProps) {
   return (
      <section className="py-3 mt-3">
         <div className="container px-4 mx-auto">
            <div className="p-10 bg-raisin-black rounded-lg">
               <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
                  <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                     <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                        Informações Pessoais
                     </h4>
                  </div>
               </div>
               <DisplayLine label="Nome" content={user?.name} />
               <DisplayLine label="Email" content={user?.email} />
               <DisplayLine label="Telefone" content={user?.phone} />
               <DisplayLine label="CPF" content={user?.cpf} />
            </div>
         </div>
      </section>
   );
}
export default UserDisplay;
