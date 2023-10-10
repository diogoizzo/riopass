import Head from 'next/head';
import MenuFront from '../../components/parts/MenuFront';
import PageHeroHome from '../../components/parts/PageHeroHome';
import Highlights from '../../components/sections/Highlights';
import HowItWork from '../../components/sections/HowItWork';
import TourHighlights from '../../components/sections/TourHighlights';
import Footer from '../../components/sections/Footer';
import Image from 'next/image';
import Offer from '../../components/sections/Offer';
import EconomyTable from '../../components/parts/EconomyTable';

export default function Homepage<NextPage>() {
   return (
      <>
         <Head>
            <title>Home</title>
         </Head>
         <MenuFront shadow={false} />
         <main>
            <PageHeroHome
               title="Travel Club"
               subtitle="Vamos começar sua jornada conosco, seu sonho se tornará realidade."
               img="/img/home-banner.jpg"
            />
            <Highlights />
            <Offer />
            <HowItWork>
               <h2 className=" text-5xl text-why-card-blue-300 font-semibold leading-[60px]">
                  Como o
                  <Image
                     src={'/img/travel-text.svg'}
                     width={304}
                     height={60}
                     alt="Texto da logo do travel club"
                  />
                  funciona?
               </h2>
               <p className="pr-12 mt-5 text-why-gray-900">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque nesciunt cum officiis repellat nostrum repellendus nam
                  explicabo labore aspernatur eveniet ipsum a iste natus
                  quisquam eos, delectus voluptatum obcaecati non hic. Quibusdam
                  accusantium quia adipisci dicta quis? Sequi voluptate voluptas
                  dolore quaerat dolorem ipsa voluptatem, nisi at tempore.
                  Similique ab dolor obcaecati ipsum distinctio, beatae aut
                  exercitationem eligendi at eius.
               </p>
            </HowItWork>
            <EconomyTable />
            <TourHighlights />
         </main>
         <Footer />
      </>
   );
}

Homepage.auth = false;
