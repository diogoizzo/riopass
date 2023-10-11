import Head from 'next/head';
import MenuFront from '../../components/parts/MenuFront';
import PageHero from '../../components/parts/PageHero';
import HowItWork from '../../components/sections/HowItWork';
import EconomyTable from '../../components/parts/EconomyTable';
import Footer from '../../components/sections/Footer';
import Offer from '../../components/sections/Offer';

function HowItWorks() {
   return (
      <>
         <Head>
            <title>Como Funciona</title>
         </Head>
         <MenuFront />
         <PageHero
            title={'Como Funciona'}
            subtitle="TravelBuddy The best service travel"
            img="/img/water.jpg"
         />
         <HowItWork>
            <h2>Aqui vai o título</h2>
         </HowItWork>
         <EconomyTable />
         <Offer />
         <Footer />
      </>
   );
}
export default HowItWorks;
