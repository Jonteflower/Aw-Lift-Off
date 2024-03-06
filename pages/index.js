import React from 'react';
import HomePage from '../components/home';
import Layout from '../Layout/Layout';
export default function Home() {

  return (
    <>
      <HomePage />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

