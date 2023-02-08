import Head from 'next/head';
import Navbar from './navbar';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>The Villas - Balian Beach</title>
        <meta name="description" content="Balian Beach luxury villas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="dark:bg-gray-900 dark:text-gray-100">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
