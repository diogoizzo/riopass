import ReviewsSlider from '../parts/ReviewsSlider';

function ReviewsSection() {
   return (
      <section className="bg-why-gray-50 py-20">
         <div className="container mx-auto px-4">
            <h2 className="text-center mb-14 font-medium text-why-blue-900 text-3xl md:text-5xl leading-tight max-w-4xl mx-auto">
               Veja o que Nossos Clientes Falam Sobre o Travel Club
            </h2>
            <ReviewsSlider />
         </div>
      </section>
   );
}
export default ReviewsSection;
