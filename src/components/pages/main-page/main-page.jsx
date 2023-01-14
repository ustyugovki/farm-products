import React from "react";
import "./main-page.css";

import About from '../../blocks/about/about';
import Products from '../../blocks/products-list/products';

function MainPage() {
  return (
    <>
      <About />
      <Products />
    </>
  );
}

export default MainPage;
