import Head from "next/head";
import React, { useEffect } from 'react';
import DiamondLoader from "../components/utils/diamondLoader";
import '../styles/globals.scss';
import '../styles/rocket.scss';

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  function stopLoading() {
    const loader = document.getElementById('globalLoader');
    if (loader) {

      // Then hide it after animation
      setTimeout(() => {
        loader.classList.add('fade-out');
        //loader.style.display = 'none';
      }, 1650);

      setTimeout(() => {
        loader.style.display = 'none';
      }, 2150);

    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      stopLoading();
    }
  }, []);

  return (
    <>
      <Head>
        <title>AW Lift-Off</title>
        <meta name="description" content="Euro Jackpot Number generator based on previous drawings" />
        <link rel="icon" type="image/ico" sizes="32x32" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" type="image/png" href="appleIcon.png" />
        <meta name='Euro hackpot' content='Euro hackpot number generator'></meta>
        <meta name="theme-color" content="#11041D" ></meta>
      </Head>
      <div id='globalLoader'>
        <DiamondLoader />
      </div>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
