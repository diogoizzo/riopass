function ContactForm() {
   return (
      <section className="bg-why-gray-50">
         <div className="container mx-auto px-56 py-12">
            <h2 className="text-why-blue-900 text-3xl py-6 font-medium">
               Nos escreva suas dúvidas
            </h2>
            <form className="mt-5">
               <textarea
                  placeholder="Envie sua mensagem"
                  rows={10}
                  className="block text-md placeholder:text-gray-500 py-4 px-3 w-full text-base border border-why-gray-200 text-cool-gray-200 font-medium outline-none bg-transparent "
               />

               <div className="relative flex items-center space-x-5 mt-5">
                  <input
                     placeholder="Seu Nome Completo"
                     type="text"
                     className="block text-md placeholder:text-gray-500 py-4 px-3 w-full text-base border border-why-gray-200 text-cool-gray-200 font-medium outline-none bg-transparent "
                  />
                  <input
                     type="email"
                     placeholder="Envie Seu E-mail"
                     className="block text-md placeholder:text-gray-500 py-4 px-3 w-full text-base border border-why-gray-200 text-cool-gray-200 font-medium outline-none bg-transparent "
                  />
               </div>
               <input
                  type="email"
                  placeholder="Envie o Assunto"
                  className="block text-md mt-5 placeholder:text-gray-500 py-4 px-3 w-full text-base border border-why-gray-200 text-cool-gray-200 font-medium outline-none bg-transparent "
               />
               <button
                  type="submit"
                  className="inline-flex mt-10 items-center justify-center px-12 font-semibold  rounded-md  shadow-md shadow-why-yellow-600/40 hover:scale-105 hover:shadow-lg transition-all ease-in-out hover:shadow-why-yellow-600/30 text-why-gray-50 py-3 bg-why-yellow-500 "
               >
                  Enviar Mensagem
               </button>
            </form>
         </div>
      </section>
   );
}
export default ContactForm;
