import '../styles/globals.css';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <div className='md:my-5 px-5 md:px-48 flex-auto container mx-auto rounded-lg bg-gradient-to-r from-red-200 to-pink-100'>
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MyApp;
