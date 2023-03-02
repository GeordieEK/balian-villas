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
        {/* TODO: Fix favicon */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="relative min-h-screen">
        <Navbar />
        <div className="pb-16 lg:pb-12">
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}
