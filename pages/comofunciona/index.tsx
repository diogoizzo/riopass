import Head from 'next/head';
import MenuFront from '../../components/parts/MenuFront';
import PageHero from '../../components/parts/PageHero';
import HowItWork from '../../components/sections/HowItWork';
import EconomyTable from '../../components/parts/EconomyTable';
import Footer from '../../components/sections/Footer';
import Offer from '../../components/sections/Offer';
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
            subtitle="TravelBuddy The best service travel"
            img="/img/water.jpg"
         />
         <HowItWork>
            <h2 className=" text-5xl text-why-blue-900 font-medium leading-[60px]">
               Como o
               <Image
                  src={'/img/travel-text.svg'}
                  width={304}
                  height={60}
                  alt="Texto da logo do travel club"
               />
               funciona?
            </h2>
            <p className="pr-12 mt-5 text-why-gray-900 leading-7">
               Imagine explorar as belezas e a cultura vibrante do Rio de
               Janeiro de uma maneira que é tão econômica quanto emocionante. O
               Rio Travel Club introduz uma revolução no turismo. Ao invés de
               seguir o tradicional modelo de comissionamento, onde agências,
               hotéis e atrações pagam por reservas e vendas, nós invertemos a
               lógica para beneficiar diretamente você, nosso valioso membro. Ao
               adquirir o Rio Travel Club, você ganha acesso exclusivo a
               descontos significativos, que em alguns casos podem chegar a até
               50% do valor total de passeios, estadias em hotéis e atrações
               diversas.
            </p>
            <p className="pr-12 mt-2 text-why-gray-900 leading-7">
               O funcionamento do Rio Travel Club é simples, mas as experiências
               que ele proporciona são tudo, menos ordinárias. Ao se tornar
               membro, você não só obtém descontos impressionantes, mas também
               se junta a uma comunidade de viajantes apaixonados e exploradores
               ávidos. Com o Rio Travel Club, você compra agora e usa quando
               quiser ao longo de 1 ano, garantindo que as maravilhas do Rio
               estejam sempre ao seu alcance, seja em uma escapadela de fim de
               semana ou em uma exploração prolongada. Junte-se a nós e
               transforme sua viagem ao Rio de Janeiro em experiências mais
               ricas, acessíveis e emocionantes com o Rio Travel Club!
            </p>
         </HowItWork>
         <EconomyTable />
         <Offer />
         <Footer />
      </>
   );
}
export default HowItWorks;
