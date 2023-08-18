import Menu from '../components/parts/Menu';
import PageHeader from '../components/parts/PageHeader';

export default function Dashboard<NextPage>() {
   return (
      <Menu>
         <div className="w-full h-[100vh] flex flex-col items-center justify-center ">
            <div className="relative text-center -top-20">
               <h1 className="text-5xl   text-cool-gray-500 font-medium">
                  Bem vindo ao Sistema Administrativo do Riopass
               </h1>
               <p className="mt-3 text-3xl text-cool-gray-900">
                  Escolha uma das opções ao lado para prosseguir.
               </p>
            </div>
         </div>
      </Menu>
   );
}

Dashboard.auth = true;
