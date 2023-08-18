import Link from 'next/link';
import IUser from '../../interfaces/IUser';

interface UserTableProps {
   small?: boolean;
   data: IUser[];
   //todo alterar para depender de uma interface, porém precios alterar a interface usuário para ter os métodos
}

function UserTable({ small, data }: UserTableProps) {
   return (
      <section className="py-3">
         <div className="container px-4 mx-auto">
            <div className="py-3 bg-raisin-black rounded-lg">
               <div className="px-6">
                  <div className="w-full mt-6 pb-6 overflow-x-auto">
                     <table className="w-full min-w-max">
                        <thead>
                           <tr className="text-left">
                              <th className="p-0">
                                 <div className="py-3 px-6 rounded-l-xl bg-raisin-black-light">
                                    <span className="text-xs text-gray-300 font-semibold">
                                       NOME
                                    </span>
                                 </div>
                              </th>
                              <th className="p-0">
                                 <div className="py-3 px-6 bg-raisin-black-light">
                                    <span className="text-xs text-gray-300 font-semibold">
                                       EMAIL
                                    </span>
                                 </div>
                              </th>
                              <th className="p-0">
                                 <div className="py-3 px-6 bg-raisin-black-light">
                                    <span className="text-xs text-gray-300 font-semibold">
                                       TELEFONE
                                    </span>
                                 </div>
                              </th>
                           </tr>
                        </thead>
                        <tbody>
                           {data.map((user, idx) => {
                              return (
                                 <tr key={user.id}>
                                    <td className="p-0">
                                       <Link
                                          href={user.userLink || ''}
                                          passHref
                                       >
                                          <div
                                             className={`flex items-center h-16 px-6 ${
                                                idx % 2 !== 0
                                                   ? 'bg-raisin-black-light rounded-l-xl'
                                                   : null
                                             }`}
                                          >
                                             <span className="text-sm text-cool-gray-200 font-medium">
                                                {user.name}
                                             </span>
                                          </div>
                                       </Link>
                                    </td>

                                    <td className="p-0">
                                       <Link
                                          href={user.userLink || ''}
                                          passHref
                                       >
                                          <div
                                             className={`flex items-center h-16 px-6 ${
                                                idx % 2 !== 0
                                                   ? 'bg-raisin-black-light'
                                                   : null
                                             }`}
                                          >
                                             <span className="text-sm text-cool-gray-200 font-medium">
                                                {user.email}
                                             </span>
                                          </div>
                                       </Link>
                                    </td>
                                    <td className="p-0">
                                       <Link
                                          href={user.userLink || ''}
                                          passHref
                                       >
                                          <div
                                             className={`flex items-center h-16 px-6 ${
                                                idx % 2 !== 0
                                                   ? 'bg-raisin-black-light'
                                                   : null
                                             }`}
                                          >
                                             <div className="flex h-full items-center">
                                                <span className="text-sm font-medium text-cool-gray-200">
                                                   {user.phone}
                                                </span>
                                             </div>
                                          </div>
                                       </Link>
                                    </td>
                                 </tr>
                              );
                           })}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
export default UserTable;
