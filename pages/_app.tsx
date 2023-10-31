import '../styles/globals.css';
import { useSession, SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import LoginLoad from '../components/sections/LoginLoad';
import Head from 'next/head';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { GTM_ID, pageview } from '../lib/gtm';

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
   const pathname = usePathname();
   const searchParams = useSearchParams();

   useEffect(() => {
      if (pathname) {
         pageview(pathname);
      }
   }, [pathname, searchParams]);

   return (
      <>
         <Head>
            <link rel="icon" type="image/x-icon" href="/img/favicon.svg"></link>
         </Head>
         <noscript>
            <iframe
               src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
               height="0"
               width="0"
               style={{ display: 'none', visibility: 'hidden' }}
            />
         </noscript>
         <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
               __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', '${GTM_ID}');
  `
            }}
         />
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
