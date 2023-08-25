import Link from 'next/link';
import Tour from '../../entities/Tour';

interface TourTableProps {
   small?: boolean;
   data: Tour[];
}

function UserTable({ small, data }: TourTableProps) {
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
                                    <span className="text-xs text-gray-300 font-semibold uppercase">
                                       nome
                                    </span>
                                 </div>
                              </th>
                              <th className="p-0">
                                 <div className="py-3 px-6 bg-raisin-black-light">
                                    <span className="text-xs text-gray-300 font-semibold uppercase">
                                       categoria
                                    </span>
                                 </div>
                              </th>
                              <th className="p-0">
                                 <div className="py-3 px-6 bg-raisin-black-light">
                                    <span className="text-xs text-gray-300 font-semibold uppercase">
                                       parceiro
                                    </span>
                                 </div>
                              </th>
                              <th className="p-0">
                                 <div className="py-3 px-6 bg-raisin-black-light">
                                    <span className="text-xs text-gray-300 font-semibold uppercase">
                                       preço
                                    </span>
                                 </div>
                              </th>
                              <th className="p-0">
                                 <div className="py-3 px-6 bg-raisin-black-light">
                                    <span className="text-xs text-gray-300 font-semibold uppercase">
                                       preço final
                                    </span>
                                 </div>
                              </th>
                           </tr>
                        </thead>
                        <tbody>
                           {data &&
                              data.map((tour, idx) => {
                                 return (
                                    <tr key={tour.id}>
                                       <td className="p-0">
                                          <Link
                                             href={tour.tourLink || ''}
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
                                                   {tour.name}
                                                </span>
                                             </div>
                                          </Link>
                                       </td>

                                       <td className="p-0">
                                          <Link
                                             href={tour.tourLink || ''}
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
                                                   {tour.categories
                                                      .map(
                                                         (category) =>
                                                            category.name
                                                      )
                                                      .join(', ')}
                                                </span>
                                             </div>
                                          </Link>
                                       </td>
                                       <td className="p-0">
                                          <Link
                                             href={tour.tourLink || ''}
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
                                                      {tour.partner}
                                                   </span>
                                                </div>
                                             </div>
                                          </Link>
                                       </td>
                                       <td className="p-0">
                                          <Link
                                             href={tour.tourLink || ''}
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
                                                      R$ {tour.price}
                                                   </span>
                                                </div>
                                             </div>
                                          </Link>
                                       </td>
                                       <td className="p-0">
                                          <Link
                                             href={tour.tourLink || ''}
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
                                                      R$ {tour.finalPrice}
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
