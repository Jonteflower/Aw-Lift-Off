import Head from "next/head";
import React, { useEffect } from 'react';
import CircleLoader from "../components/utils/circleLoader";
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
        <title>After Work</title>
        <meta name="description" content="After work countdown to LIFT-OFF" />
        <link rel="icon" type="image/ico" sizes="32x32" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" type="image/png" href="appleIcon.jpg" />
        <meta name='AW Lift-Off' content='Afterwork lift-off'></meta>
        <meta name="theme-color" content="#11041D" ></meta>
      </Head>
      <div id='globalLoader'>
        <CircleLoader />
      </div>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
