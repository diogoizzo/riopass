import '../styles/globals.css';
import { useSession, SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import LoginLoad from '../components/sections/LoginLoad';
import Head from 'next/head';

function Auth(props: any) {
   // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
   const { status } = useSession({ required: true });

   if (status === 'loading') {
      return <LoginLoad />;
   }

   return props.children;
}

// Use the <SessionProvider> to improve performance and allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({ Component, pageProps }: AppProps) {
   const queryClient = new QueryClient();

   return (
      <>
         <Head>
            <link rel="icon" type="image/x-icon" href="/img/favicon.svg"></link>
         </Head>
         <SessionProvider session={pageProps.session}>
            <QueryClientProvider client={queryClient}>
               {/* essa configuração faz com que basta colocar
                  nomedocomponente.auth = true para fazer com que a página seja
                  restrita */}
               {Component.auth ? (
                  <Auth>
                     <Component {...pageProps} />
                  </Auth>
               ) : (
                  <Component {...pageProps} />
               )}
            </QueryClientProvider>
         </SessionProvider>
      </>
   );
}
