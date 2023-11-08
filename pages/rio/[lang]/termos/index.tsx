import Head from 'next/head';
import MenuFront from '../../../../components/parts/MenuFront';
import Footer from '../../../../components/sections/Footer';
import PageHeader from '../../../../components/parts/PageHeader';
import PageHero from '../../../../components/parts/PageHero';
import Link from 'next/link';

function TermosDeUso() {
   return (
      <>
         <Head>
            <title>Termos de Uso</title>
         </Head>
         <MenuFront />
         <PageHero
            title="Termos de Uso"
            subtitle="Confira nossos termos de uso."
            img="/img/water.jpg"
         />
         <main className="bg-why-gray-50 py-16">
            <div className="container px-4 max-w-5xl mx-auto text-justify">
               <h2 className="text-3xl font-medium text-why-gray-900 mb-3 ">
                  Termos de uso
               </h2>
               <p className="text-why-gray-800">
                  Ao acessar ao site Brasil Travel Club, concorda em cumprir
                  estes termos de serviço, todas as leis e regulamentos
                  aplicáveis e concorda que é responsável pelo cumprimento de
                  todas as leis locais aplicáveis. Se você não concordar com
                  algum desses termos, está proibido de usar ou acessar este
                  site. Os materiais contidos neste site são protegidos pelas
                  leis de direitos autorais e marcas comerciais aplicáveis.
               </p>
               <h3 className="text-3xl font-medium text-why-gray-900 mb-3 mt-6">
                  Uso de Licença
               </h3>
               <p className="text-why-gray-800">
                  É concedida permissão para baixar temporariamente uma cópia
                  dos materiais (informações ou software) no site Brasil Travel
                  Club, apenas para visualização transitória pessoal e não
                  comercial. Esta é a concessão de uma licença, não uma
                  transferência de título e, sob esta licença, você não pode:
               </p>
               <ol className="mt-2 mb-2 text-why-gray-800 list-decimal list-inside">
                  <li>Modificar ou copiar os materiais; </li>
                  <li>
                     Usar os materiais para qualquer finalidade comercial ou
                     para exibição pública (comercial ou não comercial);
                  </li>
                  <li>
                     Tentar descompilar ou fazer engenharia reversa de qualquer
                     software contido no site Brasil Travel Club;
                  </li>
                  <li>
                     Remover quaisquer direitos autorais ou outras notações de
                     propriedade dos materiais; ou
                  </li>
                  <li>
                     Transferir os materiais para outra pessoa ou 'espelhe' os
                     materiais em qualquer outro servidor.
                  </li>
               </ol>
               <p className="text-why-gray-800">
                  Esta licença será automaticamente rescindida se você violar
                  alguma dessas restrições e poderá ser rescindida por Brasil
                  Travel Club a qualquer momento. Ao encerrar a visualização
                  desses materiais ou após o término desta licença, você deve
                  apagar todos os materiais baixados em sua posse, seja em
                  formato eletrônico ou impresso.
               </p>
               <h3 className="text-3xl font-medium text-why-gray-900 mb-3 mt-6">
                  Isenção de responsabilidade
               </h3>
               <p className="text-why-gray-800">
                  Os materiais no site da Brasil Travel Club são fornecidos
                  'como estão'. Brasil Travel Club não oferece garantias,
                  expressas ou implícitas, e, por este meio, isenta e nega todas
                  as outras garantias, incluindo, sem limitação, garantias
                  implícitas ou condições de comercialização, adequação a um fim
                  específico ou não violação de propriedade intelectual ou outra
                  violação de direitos.
               </p>
               <p className="text-why-gray-800 mt-2">
                  Além disso, o Brasil Travel Club não garante ou faz qualquer
                  representação relativa à precisão, aos resultados prováveis ou
                  à confiabilidade do uso dos materiais em seu site ou de outra
                  forma relacionado a esses materiais ou em sites vinculados a
                  este site.
               </p>
               <h3 className="text-3xl font-medium text-why-gray-900 mb-3 mt-6">
                  Limitações
               </h3>
               <p className="text-why-gray-800">
                  Em nenhum caso o Brasil Travel Club ou seus fornecedores serão
                  responsáveis por quaisquer danos (incluindo, sem limitação,
                  danos por perda de dados ou lucro ou devido a interrupção dos
                  negócios) decorrentes do uso ou da incapacidade de usar os
                  materiais em Brasil Travel Club, mesmo que Brasil Travel Club
                  ou um representante autorizado da Brasil Travel Club tenha
                  sido notificado oralmente ou por escrito da possibilidade de
                  tais danos. Como algumas jurisdições não permitem limitações
                  em garantias implícitas, ou limitações de responsabilidade por
                  danos consequentes ou incidentais, essas limitações podem não
                  se aplicar a você.
               </p>
               <h3 className="text-3xl font-medium text-why-gray-900 mb-3 mt-6">
                  Precisão dos materiais
               </h3>
               <p className="text-why-gray-800">
                  Os materiais exibidos no site da Brasil Travel Club podem
                  incluir erros técnicos, tipográficos ou fotográficos. Brasil
                  Travel Club não garante que qualquer material em seu site seja
                  preciso, completo ou atual. Brasil Travel Club pode fazer
                  alterações nos materiais contidos em seu site a qualquer
                  momento, sem aviso prévio. No entanto, Brasil Travel Club não
                  se compromete a atualizar os materiais.
               </p>
               <h3>Links</h3>
               <p className="text-why-gray-800">
                  O Brasil Travel Club não analisou todos os sites vinculados ao
                  seu site e não é responsável pelo conteúdo de nenhum site
                  vinculado. A inclusão de qualquer link não implica endosso por
                  Brasil Travel Club do site. O uso de qualquer site vinculado é
                  por conta e risco do usuário.
               </p>
               <h3 className="text-3xl font-medium text-why-gray-900 mb-3 mt-6">
                  Política de Privacidade
               </h3>
               <p className="text-why-gray-800">
                  Ao concordar com este termos de uso, você também está
                  concordando expressamente com a nossa{' '}
                  <Link
                     href={'/garantia'}
                     className="underline underline-offset-2"
                  >
                     política de privacidade
                  </Link>
                  .
               </p>
               <h3 className="text-3xl font-medium text-why-gray-900 mb-3 mt-6">
                  Política de Garantia
               </h3>
               <p className="text-why-gray-800">
                  Ao concordar com este termos de uso, você também está
                  concordando expressamente com a nossa{' '}
                  <Link
                     href={'/garantia'}
                     className="underline underline-offset-2"
                  >
                     política de garantia
                  </Link>
                  .
               </p>
               <h3 className="text-3xl font-medium text-why-gray-900 mb-3 mt-6">
                  Modificações
               </h3>
               <p className="text-why-gray-800">
                  O Brasil Travel Club pode revisar estes termos de serviço do
                  site a qualquer momento, sem aviso prévio. Ao usar este site,
                  você concorda em ficar vinculado à versão atual desses termos
                  de serviço.
               </p>
               <h3 className="text-3xl font-medium text-why-gray-900 mb-3 mt-6">
                  Lei aplicável
               </h3>
               <p className="text-why-gray-800">
                  Estes termos e condições são regidos e interpretados de acordo
                  com as leis do Brasil Travel Club e você se submete
                  irrevogavelmente à jurisdição exclusiva dos tribunais naquele
                  estado ou localidade.
               </p>
            </div>
         </main>

         <Footer />
      </>
   );
}
export default TermosDeUso;
