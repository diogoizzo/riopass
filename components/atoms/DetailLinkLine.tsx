interface DetailLinkLineProps {
   label: string;
   link?: string;
}

export default function DetailLinkLine({ label, link }: DetailLinkLineProps) {
   return (
      <div className="flex flex-wrap items-start -mx-4 pb-8 mb-8 border-b border-why-gray-200 last-of-type:border-none ">
         <div className="w-full sm:w-1/3 px-4 mb-4 sm:mb-0">
            <span className="text-md font-medium text-why-gray-900 uppercase">
               {label}
            </span>
         </div>
         <div className="w-full sm:w-2/3 px-4">
            <div className="max-w-xl">
               <div className="flex flex-wrap items-center -mx-3">
                  <div className="w-full px-3 mb-3 sm:mb-0">
                     <p className="text-md text-why-gray-800 ">
                        Para mais informações,{' '}
                        <a href={link} className="underline">
                           acesse o site do parceiro.
                        </a>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
