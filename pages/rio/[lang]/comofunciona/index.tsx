import Head from 'next/head';
import MenuFront from '../../../../components/parts/MenuFront';
import PageHero from '../../../../components/parts/PageHero';
import HowItWork from '../../../../components/sections/HowItWork';
import EconomyTable from '../../../../components/parts/EconomyTable';
import Footer from '../../../../components/sections/Footer';
import Offer from '../../../../components/sections/Offer';
import Image from 'next/image';

function HowItWorks() {
   return (
      <>
         <Head>
            <title>Como Funciona</title>
         </Head>
         <MenuFront />
         <PageHero
            title={'Como Funciona'}
            subtitle="Aprenda como economizar em sua viagem ao Rio de Janeiro "
            img="/img/water.jpg"
         />
         <HowItWork>
            <h2 className=" text-3xl mt-6 md:mt-0 md:text-5xl text-why-blue-900 font-medium leading-[60px]">
               Como o
               <Image
                  src={'/img/travel-text.svg'}
                  width={304}
                  height={60}
                  alt="Texto da logo do travel club"
               />
               funciona?
            </h2>
            <p className="md:pr-12 mt-5 text-why-gray-900 leading-7">
               Com o Rio Travel Club, viajar pelo Rio é fácil e econômico.
               Compre, escolha, reserve e viva momentos mágicos com descontos
               exclusivos! Estamos redefinindo a maneira como você experimenta o
               turismo. Enquanto a maioria das agências e atrações lucra com
               comissões e reservas, nós escolhemos uma abordagem diferente:
               colocar você em primeiro lugar. Como membro do nosso clube, você
               desbloqueia descontos exclusivos que podem chegar a
               impressionantes 50% em passeios e atividades turísticas na Cidade
               Maravilhosa.
            </p>
            <p className="md:pr-12 mt-2 text-why-gray-900 leading-7">
               E o melhor? Você tem a liberdade de comprar agora e aproveitar
               suas vantagens durante um ano inteiro. Seja para uma escapada
               rápida no fim de semana ou uma aventura mais extensa, as
               maravilhas do Rio estão ao seu alcance.
            </p>
            <p className="md:pr-12 mt-2 text-why-gray-900 leading-7">
               <strong>Não espere mais!</strong> Junte-se ao Rio Travel Club e
               viva o Rio intensamente, economize e crie memórias inesquecíveis
               conosco!
            </p>
         </HowItWork>
         <div className="bg-why-gray-50  text-why-blue-900 leading-tight font-medium text-center pt-3">
            <h3 className="max-w-5xl mx-auto pb-4 px-4">
               <span className="block py-3 px-7 mb-3 md:mb-10 font-semibold text-2xl md:leading-5 text-why-blue-900/80 underline underline-offset-4  md:underline-offset-[1rem] decoration-2">
                  Garantia de Economia
               </span>
               <span className="block text-3xl md:text-5xl mb-4 font-medium">
                  Com o Rio Travel Club É Muito Fácil Economizar!
               </span>
               <span className="text-xl md:text-3xl text-why-blue-900/90 ">
                  Confira a simulação abaixo e veja como é simples.
               </span>
            </h3>
         </div>
         <EconomyTable />
         <Offer />
         <Footer />
      </>
   );
}
export default HowItWorks;
