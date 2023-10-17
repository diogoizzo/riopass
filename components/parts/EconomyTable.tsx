function EconomyTable() {
   return (
      <div>
         <section className="pt-3 pb-10  bg-why-gray-50">
            <div className="container px-4 mx-auto">
               <p className="text-sm md:hidden text-why-blue-900/90 flex items-center ">
                  <svg
                     className="mr-2 text-why-blue-900/90"
                     version="1.0"
                     xmlns="http://www.w3.org/2000/svg"
                     width="45px"
                     height="45px"
                     viewBox="0 0 512.000000 512.000000"
                     preserveAspectRatio="xMidYMid meet"
                  >
                     <g
                        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                        fill="currentcolor"
                        stroke="none"
                     >
                        <path
                           d="M3290 4464 c-187 -110 -257 -163 -280 -208 -11 -23 -20 -49 -20 -58
0 -23 94 -210 151 -298 59 -93 95 -127 146 -136 47 -9 98 17 131 66 19 28 23
45 20 87 -3 51 -3 52 22 46 50 -12 156 -55 210 -85 90 -50 226 -156 288 -223
105 -116 196 -294 242 -475 12 -47 28 -95 37 -108 24 -38 73 -62 129 -62 125
0 165 111 108 306 -94 328 -337 636 -631 800 -87 49 -224 108 -290 124 l-52
13 19 25 c62 78 34 189 -57 228 -51 22 -72 17 -173 -42z"
                        />
                        <path
                           d="M1986 4303 c-27 -8 -72 -30 -100 -48 -28 -18 -268 -250 -533 -516
-431 -433 -485 -491 -512 -547 -53 -115 -50 -242 11 -372 28 -60 97 -132 962
-998 916 -918 932 -934 1012 -973 67 -34 94 -42 160 -46 100 -7 190 15 259 62
28 19 269 254 536 522 552 555 539 537 547 694 5 100 -12 172 -61 259 -23 42
-248 272 -940 960 -500 498 -934 922 -964 942 -105 72 -260 97 -377 61z m180
-278 c47 -19 1827 -1783 1855 -1837 20 -40 25 -108 10 -137 -5 -9 -226 -230
-491 -491 -536 -527 -496 -497 -591 -450 -31 16 -307 285 -937 913 -954 954
-932 930 -919 1014 6 34 60 91 489 520 531 530 498 504 584 468z"
                        />
                        <path
                           d="M814 2081 c-67 -41 -70 -137 -10 -315 68 -203 167 -366 314 -518 166
-172 318 -271 546 -358 l27 -10 -24 -32 c-37 -50 -43 -90 -18 -141 27 -54 63
-79 120 -84 42 -4 54 0 139 54 125 79 232 159 257 191 14 19 20 43 20 77 0 46
-7 60 -86 180 -112 168 -150 212 -199 226 -49 15 -81 7 -124 -32 -38 -33 -60
-86 -54 -129 l4 -28 -45 20 c-159 68 -334 192 -416 295 -98 124 -173 277 -216
445 -29 111 -41 132 -92 157 -54 26 -102 27 -143 2z"
                        />
                     </g>
                  </svg>
                  Vira a tela para melhor visualização da tabela abaixo.
               </p>
               <div className="w-full mt-3 md:mt-6 pb-6 overflow-x-auto">
                  <div className="h-5 bg-why-blue-900 w-[687px]  md:w-full "></div>
                  <div className="h-5 bg-why-yellow-600 w-[687px] md:w-full "></div>
                  <table className="w-full min-w-max">
                     <thead>
                        <tr className="text-left">
                           <th className="p-0">
                              <div className="py-3 px-6 text-lg  bg-why-gray-50 text-why-gray-50   "></div>
                           </th>
                           <th className="p-0">
                              <div className="py-3 px-6 border-x border-why-yellow-400 bg-why-gray-50 text-center ">
                                 <span className="text-lg text-why-gray-900 font-bold">
                                    Sem Travel Club
                                 </span>
                              </div>
                           </th>
                           <th className="p-0">
                              <div className="py-3 px-6 bg-why-gray-50 text-center ">
                                 <span className="text-lg text-why-gray-900 font-bold">
                                    Com Travel Club
                                 </span>
                              </div>
                           </th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr className="bg-why-gray-200">
                           <td className="p-0 ">
                              <div className="flex items-center h-14 px-6">
                                 <span className="text-base text-why-gray-900 font-bold">
                                    Dia 1: City Tour
                                 </span>
                              </div>
                           </td>
                           <td className="p-0">
                              <div className="flex items-center h-14 px-6 border-x border-why-yellow-400 justify-center ">
                                 <span className="text-base text-why-gray-900 font-medium">
                                    R$ 500,00
                                 </span>
                              </div>
                           </td>
                           <td className="p-0">
                              <div className="flex items-center h-14 px-6 justify-center ">
                                 <span className="text-base text-why-gray-900 font-medium">
                                    R$ 400,00
                                 </span>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td className="p-0 bg-why-gray-50">
                              <div className="flex items-center h-6 px-6 "></div>
                           </td>
                           <td className="p-0">
                              <div className="flex items-center border-x border-why-yellow-400 h-6 px-6"></div>
                           </td>
                           <td className="p-0">
                              <div className="flex items-center h-6 px-6"></div>
                           </td>
                        </tr>
                        <tr className=" bg-why-gray-200">
                           <td className="p-0">
                              <div className="flex items-center h-14 px-6">
                                 <span className="text-base text-why-gray-900 font-bold">
                                    Dia 2: Aluguel de Stand Up Paddle
                                 </span>
                              </div>
                           </td>
                           <td className="p-0">
                              <div className="flex items-center h-14 px-6 border-x border-why-yellow-400 justify-center ">
                                 <span className="inline-block py-1 text-base  text-why-gray-900 font-medium">
                                    R$ 120,00
                                 </span>
                              </div>
                           </td>
                           <td className="p-0">
                              <div className="flex items-center h-14 px-6 justify-center ">
                                 <span className="text-base text-why-gray-900 font-medium">
                                    R$ 80,00
                                 </span>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td className="p-0 bg-why-gray-50">
                              <div className="flex items-center h-6 px-6 "></div>
                           </td>
                           <td className="p-0">
                              <div className="flex items-center border-x border-why-yellow-400 h-6 px-6"></div>
                           </td>
                           <td className="p-0">
                              <div className="flex items-center h-6 px-6"></div>
                           </td>
                        </tr>
                        <tr className=" bg-why-gray-200">
                           <td className="p-0 ">
                              <div className="flex items-center h-14 px-6 ">
                                 <span className="text-base text-why-gray-900 font-bold">
                                    Dia 3: Voo de Asa Delta
                                 </span>
                              </div>
                           </td>
                           <td className="p-0">
                              <div className="flex items-center h-14 px-6 border-x border-why-yellow-400 justify-center ">
                                 <span className="text-base text-why-gray-900 font-medium ">
                                    R$ 600
                                 </span>
                              </div>
                           </td>
                           <td className="p-0">
                              <div className="flex items-center h-14 px-6 justify-center  ">
                                 <span className="text-base text-why-gray-900 font-medium">
                                    R$ 450,00
                                 </span>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td className="p-0 bg-why-gray-50">
                              <div className="flex items-center h-6 px-6 "></div>
                           </td>
                           <td className="p-0">
                              <div className="flex items-center border-x border-why-yellow-400 h-6 px-6"></div>
                           </td>
                           <td className="p-0">
                              <div className="flex items-center h-6 px-6"></div>
                           </td>
                        </tr>
                        <tr className=" bg-why-gray-200">
                           <td className="p-0 ">
                              <div className="flex items-center h-14 px-6 ">
                                 <span className="text-base text-why-gray-900 font-bold">
                                    Total
                                 </span>
                              </div>
                           </td>
                           <td className="p-0">
                              <div className="flex items-center justify-center h-14 px-6 border-x border-why-yellow-400">
                                 <span className="text-base text-why-gray-900 font-medium ">
                                    R$ 1220,00
                                 </span>
                              </div>
                           </td>
                           <td className="p-0">
                              <div className="flex items-center h-14 px-6 justify-center  ">
                                 <span className="text-base text-why-gray-900 font-medium">
                                    R$ 930,00
                                 </span>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td className="p-0 bg-why-gray-50">
                              <div className="flex items-center h-6 px-6 "></div>
                           </td>
                           <td className="p-0">
                              <div className="flex items-center  h-6 px-6"></div>
                           </td>
                           <td className="p-0">
                              <div className="flex items-center h-6 px-6"></div>
                           </td>
                        </tr>
                        <tr className=" bg-why-gray-200">
                           <td className="p-0 ">
                              <div className="flex items-center h-14 px-6 ">
                                 <span className="text-xl text-why-gray-900 font-bold">
                                    Economia Total
                                 </span>
                              </div>
                           </td>
                           <td colSpan={2} className="p-0 text-center">
                              <div className="flex w-full items-center justify-center h-14 px-6 ce">
                                 <span className="text-xl text-why-gray-900 font-bold ">
                                    R$ 290,00
                                 </span>
                              </div>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </section>
      </div>
   );
}
export default EconomyTable;
