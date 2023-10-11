import Head from 'next/head';
import MenuFront from '../../components/parts/MenuFront';
import PageHero from '../../components/parts/PageHero';
import ContactForm from '../../components/sections/ContactForm';
import Footer from '../../components/sections/Footer';

function Contact() {
   return (
      <>
         <Head>
            <title>Contato</title>
         </Head>
         <main>
            <MenuFront />
            <PageHero
               title={'Contato'}
               subtitle="Entre em Contato Conosco"
               img="/img/water.jpg"
            />
            <ContactForm />
         </main>
         <Footer />
      </>
   );
}
export default Contact;
