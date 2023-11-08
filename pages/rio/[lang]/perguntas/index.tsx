import Head from 'next/head';
import MenuFront from '../../../../components/parts/MenuFront';
import PageHero from '../../../../components/parts/PageHero';
import Footer from '../../../../components/sections/Footer';

function Faq() {
   return (
      <>
         <Head>
            <title>Perguntas Frequentes</title>
         </Head>
         <MenuFront />
         <PageHero
            title={'Perguntas Frequentes'}
            subtitle="Veja abaixo as respostas para as dúvidas mais comuns de nossos usuários"
            img="/img/water.jpg"
         />
         <main className="bg-why-gray-100 py-16">
            <div className="container px-4 mx-auto">
               <div className="max-w-5xl mx-auto ">
                  <h2 className="text-why-blue-900 text-4xl  mb-3  font-medium">
                     Dúvidas Gerais
                  </h2>
                  <div className="h-[1px] bg-why-blue-900 mb-8 opacity-30"></div>
                  <details className="group font-roboto text-lg rounded-lg cursor-pointer bg-why-gray-50 border border-white mb-3 shadow-md p-6">
                     <summary className="flex items-center justify-between  ">
                        <h3 className="font-medium text-why-gray-900">
                           Para quem é o Rio Travel Club?
                        </h3>

                        <svg
                           className="flex-shrink-0 ml-1.5 w-5 h-5 md:h-7 md:w-7 transition duration-300 group-open:-rotate-180"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="#333333"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                           />
                        </svg>
                     </summary>

                     <p className=" mt-4 leading-relaxed text-justify text-why-gray-800 text-lg">
                        Para todo mundo que deseja visitar o Rio de Janeiro e
                        conhecer as melhores atrações e pontos turísticos
                        economizando dinheiro.
                     </p>
                  </details>
                  <details className="group font-roboto text-lg rounded-lg border border-white cursor-pointer bg-why-gray-50 shadow-md p-6 mb-3">
                     <summary className="flex items-center justify-between  ">
                        <h3 className="font-medium text-why-gray-900">
                           Como o Rio Travel Club Funciona?
                        </h3>

                        <svg
                           className="flex-shrink-0 ml-1.5 w-5 h-5 md:h-7 md:w-7 transition duration-300 group-open:-rotate-180"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="#333333"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                           />
                        </svg>
                     </summary>

                     <p className=" mt-4 leading-relaxed text-justify text-why-gray-800 text-lg">
                        O Rio Travel Club foi desenhando para te ajudar a
                        economizar em sua viagem para o Rio de Janeiro. Buscamos
                        parcerias com as melhores agências turísticas e atrações
                        da Cidade Maravilhosa para lhe fornecer um serviço de
                        qualidade com preços mais acessíveis.
                     </p>
                  </details>
                  <details className="group font-roboto text-lg rounded-lg border border-white cursor-pointer bg-why-gray-50 shadow-md p-6 mb-3">
                     <summary className="flex items-center justify-between  ">
                        <h3 className="font-medium text-why-gray-900">
                           Eu preciso fazer reserva para os passeios e atrações?
                        </h3>

                        <svg
                           className="flex-shrink-0 ml-1.5 w-5 h-5 md:h-7 md:w-7 transition duration-300 group-open:-rotate-180"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="#333333"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                           />
                        </svg>
                     </summary>

                     <p className=" mt-4 leading-relaxed text-justify text-why-gray-800 text-lg">
                        Sim. Após virar membro do Rio Travel Club, você terá que
                        escolher o seu passeio ou atração e realizar a reserva
                        para o dia desejado, através da nossa área de membros ou
                        do nosso suporte dedicado.
                     </p>
                  </details>
                  <details className="group font-roboto text-lg rounded-lg border border-white cursor-pointer bg-why-gray-50 shadow-md  p-6 mb-3">
                     <summary className="flex items-center justify-between  ">
                        <h3 className="font-medium text-why-gray-900">
                           Ao entrar no clube eu terei direto a utilizar todas
                           ofertas do Rio Travel club?
                        </h3>

                        <svg
                           className="flex-shrink-0 ml-1.5 w-5 h-5 md:h-7 md:w-7 transition duration-300 group-open:-rotate-180"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="#333333"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                           />
                        </svg>
                     </summary>

                     <p className=" mt-4 leading-relaxed text-justify text-why-gray-800 text-lg">
                        Sim. Ao assinar o Rio travel club você ganha acesso a
                        todas as ofertas de atrações e passeios no Rio de
                        Janeiro.
                     </p>
                  </details>
                  <h2 className="text-why-blue-900 block text-4xl  mt-12 mb-3   font-medium">
                     Pagamento
                  </h2>
                  <div className="h-[1px] bg-why-blue-900 mb-8 opacity-30"></div>
                  <details className="group font-roboto text-lg rounded-lg border border-white cursor-pointer bg-why-gray-50 shadow-md  p-6 mb-3">
                     <summary className="flex items-center justify-between  ">
                        <h3 className="font-medium text-why-gray-900">
                           Quanto custa o Rio Travel Club?
                        </h3>

                        <svg
                           className="flex-shrink-0 ml-1.5 w-5 h-5 md:h-7 md:w-7 transition duration-300 group-open:-rotate-180"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="#333333"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                           />
                        </svg>
                     </summary>

                     <p className=" mt-4 leading-relaxed text-justify text-why-gray-800 text-lg">
                        O valor original do Rio Travel club é de R$ 199,00 por
                        pessoa. Em algumas épocas temos promoções de desconto.
                     </p>
                  </details>
                  <details className="group font-roboto text-lg rounded-lg border border-white cursor-pointer bg-why-gray-50 shadow-md  p-6 mb-3">
                     <summary className="flex items-center justify-between  ">
                        <h3 className="font-medium text-why-gray-900">
                           O pagamento é seguro?
                        </h3>

                        <svg
                           className="flex-shrink-0 ml-1.5 w-5 h-5 md:h-7 md:w-7 transition duration-300 group-open:-rotate-180"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="#333333"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                           />
                        </svg>
                     </summary>

                     <p className=" mt-4 leading-relaxed text-justify text-why-gray-800 text-lg">
                        Sim. Usamos o sistema de pagamento do Mercado Pago, uma
                        empresa já consolidada e segura para receber pagamentos
                        por cartão.
                     </p>
                  </details>
                  <details className="group font-roboto text-lg rounded-lg border border-white cursor-pointer bg-why-gray-50 shadow-md  p-6 mb-3">
                     <summary className="flex items-center justify-between  ">
                        <h3 className="font-medium text-why-gray-900">
                           A assinatura é mensal ou paga apenas um vez?
                        </h3>

                        <svg
                           className="flex-shrink-0 ml-1.5 w-5 h-5 md:h-7 md:w-7 transition duration-300 group-open:-rotate-180"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="#333333"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                           />
                        </svg>
                     </summary>

                     <p className=" mt-4 leading-relaxed text-justify text-why-gray-800 text-lg">
                        A assinatura paga-se apenas uma vez e já pode sair
                        utilizando todas ofertas disponíveis na região
                        selecionada. Não fazemos renovações automáticas.
                     </p>
                  </details>
                  <details className="group font-roboto text-lg rounded-lg cursor-pointer border border-white bg-why-gray-50 shadow-md  p-6 mb-3">
                     <summary className="flex items-center justify-between  ">
                        <h3 className="font-medium text-why-gray-900">
                           Por quanto tempo terei acesso ao Rio Travel Club?
                        </h3>

                        <svg
                           className="flex-shrink-0 ml-1.5 w-5 h-5 md:h-7 md:w-7 transition duration-300 group-open:-rotate-180"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="#333333"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                           />
                        </svg>
                     </summary>

                     <p className=" mt-4 leading-relaxed text-justify text-why-gray-800 text-lg">
                        O Rio travel club tem a validade de 12 meses a partir da
                        compra.
                     </p>
                  </details>
                  <h2 className="text-why-blue-900 block text-4xl  mt-12 mb-3   font-medium">
                     Dúvidas de Uso
                  </h2>
                  <div className="h-[1px] bg-why-blue-900 mb-8 opacity-30"></div>
                  <details className="group font-roboto text-lg rounded-lg cursor-pointer border border-white bg-why-gray-50 shadow-md  p-6 mb-3">
                     <summary className="flex items-center justify-between  ">
                        <h3 className="font-medium text-why-gray-900">
                           Como faço para reservar um passeio ou experiência?
                        </h3>

                        <svg
                           className="flex-shrink-0 ml-1.5 w-5 h-5 md:h-7 md:w-7 transition duration-300 group-open:-rotate-180"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="#333333"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                           />
                        </svg>
                     </summary>

                     <p className=" mt-4 leading-relaxed text-justify text-why-gray-800 text-lg">
                        Após entrar para Rio Travel Club, você terá acesso a uma
                        área de membros com todas as suas informações e o acesso
                        ao botão de reservar as atrações desejadas. <br /> Basta
                        clicar no botão e preencher o formulário de reserva que
                        nossa equipe irá fazer a sua reserva com nosso parceiro.
                        Assim garantimos que você irá pagar o menor valor
                        possível por aquela experiência.
                     </p>
                  </details>
                  <details className="group font-roboto text-lg rounded-lg cursor-pointer border border-white bg-why-gray-50 shadow-md  p-6 mb-3">
                     <summary className="flex items-center justify-between  ">
                        <h3 className="font-medium text-why-gray-900">
                           Como faço para saber mais informações sobre o passeio
                           e a disponibilidade de vagas?
                        </h3>

                        <svg
                           className="flex-shrink-0 ml-1.5 w-5 h-5 md:h-7 md:w-7 transition duration-300 group-open:-rotate-180"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="#333333"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                           />
                        </svg>
                     </summary>

                     <p className=" mt-4 leading-relaxed text-justify text-why-gray-800 text-lg">
                        Após você se tornar membro do Rio Travel Club, basta
                        entrar em contato com nosso suporte de reservas através
                        do nosso Whatsapp ou e-mail que te ajudamos a esclarecer
                        todas as dúvidas e checar a disponibilidade com nosso
                        parceiro.
                     </p>
                  </details>
                  <details className="group font-roboto text-lg rounded-lg cursor-pointer border border-white bg-why-gray-50 shadow-md  p-6 mb-3">
                     <summary className="flex items-center justify-between  ">
                        <h3 className="font-medium text-why-gray-900">
                           Posso reservar um passeio ou atração do Rio Travel
                           Club para outra pessoa?
                        </h3>

                        <svg
                           className="flex-shrink-0 ml-1.5 w-5 h-5 md:h-7 md:w-7 transition duration-300 group-open:-rotate-180"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="#333333"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                           />
                        </svg>
                     </summary>

                     <p className=" mt-4 leading-relaxed text-justify text-why-gray-800 text-lg">
                        Não. Na hora da compra do Rio Travel Club você terá que
                        informar o nome da pessoa titular e os descontos serão
                        aplicados somente para essa pessoa.
                     </p>
                  </details>
                  <details className="group font-roboto text-lg rounded-lg cursor-pointer border border-white bg-why-gray-50 shadow-md  p-6 mb-3">
                     <summary className="flex items-center justify-between  ">
                        <h3 className="font-medium text-why-gray-900">
                           Estou viajando em 2 ou mais pessoas, preciso comprar
                           um Rio Travel Club para cada pessoa?
                        </h3>

                        <svg
                           className="flex-shrink-0 ml-1.5 w-5 h-5 md:h-7 md:w-7 transition duration-300 group-open:-rotate-180"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="#333333"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                           />
                        </svg>
                     </summary>

                     <p className=" mt-4 leading-relaxed text-justify text-why-gray-800 text-lg">
                        Sim. Se todos querem economizar em sua viagem, é
                        necessária comprar um passe do Rio Travel Club para cada
                        pessoa.
                     </p>
                  </details>
                  <details className="group font-roboto text-lg rounded-lg cursor-pointer border border-white bg-why-gray-50 shadow-md  p-6 mb-3">
                     <summary className="flex items-center justify-between  ">
                        <h3 className="font-medium text-why-gray-900">
                           O pagamento do passeio ou atração é feito
                           antecipadamente para o Rio Travel Club?
                        </h3>

                        <svg
                           className="flex-shrink-0 ml-1.5 w-5 h-5 md:h-7 md:w-7 transition duration-300 group-open:-rotate-180"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="#333333"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                           />
                        </svg>
                     </summary>

                     <p className=" mt-4 leading-relaxed text-justify text-why-gray-800 text-lg">
                        Não. Os pagamentos dos passeios ou atrações são feitos
                        diretamente para nossos parceiros. Para algumas
                        experiências pode ser exigido um pagamento de entrada
                        para a reserva do passeio, mas essa entrada também será
                        paga diretamente para nosso parceiro.
                     </p>
                  </details>
                  <details className="group font-roboto text-lg rounded-lg cursor-pointer border border-white bg-why-gray-50 shadow-md  p-6 mb-3">
                     <summary className="flex items-center justify-between  ">
                        <h3 className="font-medium text-why-gray-900">
                           Posso pagar o passeio ou atração com cartão?
                        </h3>

                        <svg
                           className="flex-shrink-0 ml-1.5 w-5 h-5 md:h-7 md:w-7 transition duration-300 group-open:-rotate-180"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="#333333"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                           />
                        </svg>
                     </summary>

                     <p className=" mt-4 leading-relaxed text-justify text-why-gray-800 text-lg">
                        Os valores dos passeios e atrações divulgados no Rio
                        Travel Club são para pagamentos por pix ou dinheiro. A
                        maioria dos parceiros aceitam também o pagamento no
                        cartão com uma pequena taxa de acréscimo, inclusive com
                        a opção de parcelamento.
                     </p>
                  </details>
                  <details className="group font-roboto text-lg rounded-lg cursor-pointer border border-white bg-why-gray-50 shadow-md  p-6 mb-3">
                     <summary className="flex items-center justify-between  ">
                        <h3 className="font-medium text-why-gray-900">
                           Posso presentear alguém com o Rio Travel Club?
                        </h3>

                        <svg
                           className="flex-shrink-0 ml-1.5 w-5 h-5 md:h-7 md:w-7 transition duration-300 group-open:-rotate-180"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="#333333"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                           />
                        </svg>
                     </summary>

                     <p className=" mt-4 leading-relaxed text-justify text-why-gray-800 text-lg">
                        Claro. Após a sua compra, você será redirecionado para a
                        nossa área de membros, basta entrar em contato com o
                        nosso suporte para alterar o cadastro para o nome da
                        pessoa presenteada.
                     </p>
                  </details>
               </div>
            </div>
         </main>
         <Footer />
      </>
   );
}
export default Faq;
