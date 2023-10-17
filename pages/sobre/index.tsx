import Head from 'next/head';
import MenuFront from '../../components/parts/MenuFront';
import Footer from '../../components/sections/Footer';
import PageHero from '../../components/parts/PageHero';
import ReviewsSlider from '../../components/parts/ReviewsSlider';
import About from '../../components/sections/About';
import Doubts from '../../components/sections/Doubts';

export default function Homepage<NextPage>() {
   return (
      <>
         <Head>
            <title>Sobre</title>
         </Head>
         <MenuFront shadow={false} />
         <main>
            <PageHero
               title="Sobre Nós"
               subtitle="Conheça a empresa que vai mudar o seu modo de viajar."
               img="/img/water.jpg"
            />
            <section className="bg-why-gray-50 py-14">
               <div className="container px-4 mx-auto">
                  <h2 className="text-why-blue-900 underline underline-offset-4 md:underline-offset-[1rem] decoration-2 px-6 font-semibold text-3xl md:text-5xl text-center mb-16 ">
                     Veja o que Falam sobre o Rio Travel Club
                  </h2>
                  <ReviewsSlider />
               </div>
            </section>
            <About />
            <Doubts />
         </main>
         <Footer />
      </>
   );
}

Homepage.auth = false;
