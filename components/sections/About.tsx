import Image from 'next/image';

function About() {
   return (
      <section className="bg-why-gray-50">
         <div className="bg-why-card-blue-300 rounded-tr-[150px] py-20">
            <div className="container mx-auto px-4 flex space-x-12 ">
               <div className="w-1/2 flex flex-col">
                  <h2 className="text-5xl leading-tight max-w-4xl font-medium text-why-gray-100 mb-7">
                     Quem Somos
                  </h2>
                  <p className="text-why-gray-200 leading-7">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Optio minima sunt ipsam quos illo quod et magnam culpa
                     velit possimus facere molestiae eius nobis doloremque
                     ratione recusandae quae, incidunt esse quidem nulla iure.
                     Accusantium ex est architecto, in possimus nemo illum
                     veritatis, provident nihil rerum ratione ipsum ducimus
                     sapiente fuga reprehenderit dolorum amet dolor sit suscipit
                     tempora! Eius, repellat corporis! Lorem ipsum dolor sit
                     amet consectetur adipisicing elit. Fuga harum quod atque
                     obcaecati reprehenderit perspiciatis qui exercitationem.
                     Minima, ipsum consequuntur?
                  </p>
               </div>
               <div className="w-1/2">
                  <Image
                     className="rounded-tr-[150px] rounded-bl-[250px]"
                     src={'/img/about.jpg'}
                     width={693}
                     height={500}
                     alt={'Imagem do rio de janeiro'}
                  />
               </div>
            </div>
         </div>
      </section>
   );
}
export default About;
