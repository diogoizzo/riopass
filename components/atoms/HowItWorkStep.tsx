function HowItWorkStep({ num }: { num: number }) {
   return (
      <div className="rounded-full bg-white shadow-md h-14 w-14 shrink-0 flex items-center justify-center">
         <div className="rounded-full bg-why-yellow-400 shadow-md h-12 w-12 text-3xl font-semibold text-why-card-blue-300 flex items-center justify-center">
            {num}
         </div>
      </div>
   );
}
export default HowItWorkStep;
