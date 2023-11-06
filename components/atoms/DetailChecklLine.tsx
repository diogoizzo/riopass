interface DetailCheckLineProps {
   label: string;
   content?: string[];
}

export default function DetailCheckLine({
   label,
   content
}: DetailCheckLineProps) {
   return (
      <div className="flex flex-wrap items-start -mx-4 pb-8 mb-8 border-b border-why-gray-200 last-of-type:border-none ">
         <div className="w-full sm:w-1/3 px-4 mb-4 sm:mb-0">
            <span className="text-md font-medium text-why-gray-900 uppercase">
               {label}
            </span>
         </div>
         <div className="w-full sm:w-2/3 px-4">
            <div className="max-w-xl">
               <div className="grid grid-cols-1 md:grid-cols-2">
                  {content?.map((item) => (
                     <div key={item} className="flex space-x-1">
                        <svg
                           className="w-6 h-6 text-why-green-600 shrink-0"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24"
                           id="check"
                        >
                           <path
                              fill="currentcolor"
                              d="M18.71,7.21a1,1,0,0,0-1.42,0L9.84,14.67,6.71,11.53A1,1,0,1,0,5.29,13l3.84,3.84a1,1,0,0,0,1.42,0l8.16-8.16A1,1,0,0,0,18.71,7.21Z"
                           ></path>
                        </svg>
                        <p className="text-why-gray-800">{item}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
