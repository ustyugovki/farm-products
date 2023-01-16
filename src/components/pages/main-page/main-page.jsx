import React from "react";
import "./main-page.css";

import About from '../../blocks/about/about';
import Products from '../../blocks/products-list/products';

function MainPage({productList}) {
  return (
    <>
      <About />
      <Products productList={productList} />
    </>
  );
}

export default MainPage;
