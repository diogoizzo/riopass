function SectionTitle({
   title,
   subtitle
}: {
   title: string;
   subtitle: string;
}) {
   return (
      <div className="w-full text-center py-14">
         <h2 className="text-why-blue-900 text-4xl font-medium">{title}</h2>
         <p className="mt-3 text-gray-700 text-lg">{subtitle}</p>
      </div>
   );
}
export default SectionTitle;
