import Head from 'next/head';
import MenuFront from '../../components/parts/MenuFront';
import PageHeroHome from '../../components/parts/PageHeroHome';
import Highlights from '../../components/sections/Highlights';
import HowItWork from '../../components/sections/HowItWork';
import TourHighlights from '../../components/sections/TourHighlights';

export default function Homepage<NextPage>() {
   return (
      <>
         <Head>
            <title>Home</title>
         </Head>
         <MenuFront shadow={false} />
         <PageHeroHome
            title="Travel Club"
            subtitle="Vamos começar sua jornada conosco, seu sonho se tornará realidade."
            img="/img/home-banner.jpg"
         />
         <Highlights />
         <HowItWork />
         <TourHighlights />
         <div className="h-60"></div>
      </>
   );
}

Homepage.auth = false;
