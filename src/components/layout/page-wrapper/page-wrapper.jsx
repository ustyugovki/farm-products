import React from "react";
import "./page-wrapper.css";

import Header from '../header/header';
import Footer from '../footer/footer';
import MainPage from '../../pages/main-page/main-page';

function PageWrapper({productList}) {
  return (
    <>
      <Header />

      <main className='main'>
        <MainPage productList={productList}/>
      </main>

      <Footer />
    </>);
}

export default PageWrapper;
