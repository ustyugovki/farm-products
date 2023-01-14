import React from "react";
import "./page-wrapper.css";

import Header from '../header/header';
import Footer from '../footer/footer';
import MainPage from '../../pages/main-page/main-page';

function PageWrapper() {
  return (
  <>
    <Header />

    <main className='main'>
      <MainPage />
    </main>

    <Footer />
  </>);
}

export default PageWrapper;
