import Head from 'next/head';
import MenuFront from '../../components/parts/MenuFront';
import PageHero from '../../components/parts/PageHero';
import Link from 'next/link';
import Footer from '../../components/sections/Footer';

export default function index() {
   return (
      <>
         <Head>
            <title>Garantia</title>
         </Head>
         <MenuFront />
         <PageHero
            title="Política de Garantia"
            subtitle="Compre com segurança."
            img="/img/water.jpg"
         />
         <main className="bg-why-gray-50 py-16">
            <div className="container px-4 max-w-5xl mx-auto text-justify">
               <h2 className="text-3xl font-medium text-why-gray-900 mb-3 ">
                  Nossas Garantias sem Risco
               </h2>
               <ol className="list-decimal list-inside text-why-gray-800">
                  <li>Garantia de economia</li>
                  <li>Política de reembolso de 90 dias</li>
                  <li>Validade de um ano</li>
               </ol>

               <h2 className="text-3xl font-medium text-why-gray-900 mt-6 mb-3 ">
                  Garantia Sem Risco do Rio Travel Club
               </h2>
               <p className="text-why-gray-800">
                  O Rio Travel Club é sinônimo de grandes economias,
                  flexibilidade e experiências incríveis. É por isso que
                  introduzimos nossa Garantia de Economia Sem Risco. Assim, não
                  importa o que aconteça, você economizará dinheiro em sua
                  programação turística e terá uma viagem pela cidade livre de
                  estresse conosco.
               </p>
               <h2 className="text-3xl font-medium text-why-gray-900 mt-6 mb-3 ">
                  Garantia de Economia
               </h2>
               <p className="text-why-gray-800">
                  Com o Rio Travel Club, você economiza em sua programação
                  turística – essa é a nossa promessa para você!
               </p>
               <p className="text-why-gray-800">
                  Se acontecer de você não conseguir reservar os passeios
                  desejados em nossa plataforma com desconto por qualquer
                  problema dos nossos parceiros, nós reembolsaremos o seu passe
                  do Rio Travel Club.
               </p>
               <p className="text-why-gray-800">
                  Você economizará na sua viagem ao Rio conosco ou
                  reembolsaremos a sua admissão ao Rio Travel Club.
               </p>
               <h3 className="text-xl font-medium text-why-gray-900 mt-6 mb-3 ">
                  Como Solicitar o Reembolso
               </h3>
               <p className="text-why-gray-800">
                  Você pode enviar sua reivindicação por e-mail para{' '}
                  <a
                     href="mailto:garantia@riotravelclub.com"
                     className="underline underline-offset-4"
                  >
                     garantia@riotravelclub.com.
                  </a>{' '}
                  Certifique-se de fornecer o seguinte:
               </p>
               <ol className="list-decimal list-inside text-why-gray-800 py-3 ">
                  <li>Nome;</li>
                  <li>E-mail;</li>
                  <li>CPF do titular da compra;</li>
                  <li>
                     Explicação do motivo de não ter conseguido reservar os
                     passeios e atrações.
                  </li>
               </ol>
               <p className="text-why-gray-800">
                  Analisaremos sua solicitação e responderemos dentro de 7 a 10
                  dias úteis.
               </p>
               <h2 className="text-3xl font-medium text-why-gray-900 mt-6 mb-3 ">
                  Política de Desistência de 90 Dias
               </h2>
               <p className="text-why-gray-800">
                  Os planos da sua viagem mudaram? Você pode obter reembolso do
                  seu Rio Travel Club não utilizado dentro de 90 dias após a
                  compra.
               </p>
               <h3 className="text-xl font-medium text-why-gray-900 mt-6 mb-3 ">
                  Como Solicitar a Desistência
               </h3>
               <p className="text-why-gray-800">
                  Fale conosco no em nosso Whatsapp de suporte dedicado (você o
                  encontrará em sua{' '}
                  <Link
                     href={'/perfil'}
                     className="underline underline-offset-4"
                  >
                     página de perfil
                  </Link>
                  ) e nós cuidaremos do seu reembolso para você.
               </p>
               <h2 className="text-3xl font-medium text-why-gray-900 mt-6 mb-3 ">
                  Validade de Um Ano
               </h2>
               <p className="text-why-gray-800">
                  Precisa reorganizar sua viagem? Sem problemas! Nossos passes
                  são válidos por um ano a partir da data da compra.
               </p>
            </div>
         </main>
         <Footer />
      </>
   );
}
