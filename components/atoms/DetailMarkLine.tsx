interface DetailMarkLineProps {
   label: string;
   content?: string[];
}

export default function DetailMarkLine({
   label,
   content
}: DetailMarkLineProps) {
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
                     <div key={item} className="flex items-center space-x-1">
                        <svg
                           className="w-4 h-4 text-red-700 "
                           xmlns="http://www.w3.org/2000/svg"
                           enableBackground="new 0 0 24 24"
                           viewBox="0 0 24 24"
                           id="multiply"
                        >
                           <path
                              fill="currentcolor"
                              d="M13.4,12l6.3-6.3c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l6.3,6.3l-6.3,6.3C4.1,18.5,4,18.7,4,19c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.4,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L13.4,12z"
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
