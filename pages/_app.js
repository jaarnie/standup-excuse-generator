import '../styles/globals.css';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className='flex flex-col h-screen md:h-fit'>
        <div className='md:my-5 px-5 md:px-48 flex-auto container mx-auto rounded-lg'>
          <Component {...pageProps} />
          <div className='pb-4'>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyApp;
