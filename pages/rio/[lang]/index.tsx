import Head from 'next/head';
import MenuFront from '../../../components/parts/MenuFront';
import PageHeroHome from '../../../components/parts/PageHeroHome';
import Highlights from '../../../components/sections/Highlights';
import HowItWork from '../../../components/sections/HowItWork';
import TourHighlights from '../../../components/sections/TourHighlights';
import Footer from '../../../components/sections/Footer';
import Image from 'next/image';
import Offer from '../../../components/sections/Offer';
import EconomyTable from '../../../components/parts/EconomyTable';
import ReviewsSection from '../../../components/sections/ReviewsSection';
import About from '../../../components/sections/About';
import Doubts from '../../../components/sections/Doubts';

export default function Homepage<NextPage>() {
   return (
      <>
         <Head>
            <title>Home</title>
         </Head>
         <MenuFront />
         <main>
            <PageHeroHome
               title="Rio Travel Club"
               subtitle="Explore o Rio de Janeiro com descontos em passeios turísticos para quem é do clube."
               img="/img/home-banner.jpg"
            />
            <Highlights />
            <Offer />
            <TourHighlights />
            <HowItWork>
               <h2 className=" text-3xl md:text-5xl text-why-blue-900 font-medium leading-[70px]">
                  Como o
                  <Image
                     className="w-54"
                     src={'/img/travel-text.svg'}
                     width={304}
                     height={60}
                     alt="Texto da logo do travel club"
                  />
                  Funciona?
               </h2>
               <p className="md:pr-12 mt-5 text-why-gray-900 leading-7">
                  Com o Rio Travel Club, viajar pelo Rio é fácil e econômico.
                  Compre, escolha, reserve e viva momentos mágicos com descontos
                  para quem é do clube! Estamos redefinindo a maneira como você
                  experimenta o turismo. Enquanto a maioria das agências e
                  atrações lucra com comissões e reservas, nós escolhemos uma
                  abordagem diferente: colocar você em primeiro lugar. Como
                  membro do nosso clube, você desbloqueia descontos que podem
                  chegar a impressionantes 50% em passeios e atividades
                  turísticas na Cidade Maravilhosa.
               </p>
               <p className="md:pr-12 mt-2 text-why-gray-900 leading-7">
                  E o melhor? Você tem a liberdade de comprar agora e aproveitar
                  suas vantagens durante um ano inteiro. Seja para uma escapada
                  rápida no fim de semana ou uma aventura mais extensa, as
                  maravilhas do Rio estão ao seu alcance.
               </p>
               <p className="md:pr-12 mt-2 text-why-gray-900 leading-7">
                  <strong>Não espere mais!</strong> Junte-se ao Rio Travel Club,
                  comece a economizar e viva sua viagem ao Rio intensamente.
               </p>
            </HowItWork>
            <div className="bg-why-gray-50  text-why-blue-900 leading-tight font-medium text-center pt-3">
               <h3 className="max-w-5xl mx-auto pb-4 px-4">
                  <span className="block text-3xl md:text-5xl mb-3 md:mb-4 font-medium">
                     Com o Rio Travel Club é Muito Fácil Economizar!
                  </span>
                  <span className="text-xl md:text-3xl text-why-blue-900/90 ">
                     Confira a simulação abaixo e veja como é simples.
                  </span>
               </h3>
            </div>
            <EconomyTable />
            <Offer />
            <ReviewsSection />
            <About withButton={true} />
            <Doubts />
         </main>
         <Footer />
      </>
   );
}

Homepage.auth = false;
