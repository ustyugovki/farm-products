import React from "react";
import "./products.css";

import Title, { TitleSize } from '../../ui/title/title';
import FeatureCard from '../../ui/feature-card/feature-card';
import Button from '../../ui/button/button';

function ProductsList() {
  return (
    <section className='main__products products'>
      <div className='products__wrapper'>
        <Title size={TitleSize.DEFAULT}>Почему фермерские продукты лучше?</Title>

        <ul className="products__list">
          <li className="products__item">
            <FeatureCard />
          </li>
          <li className="products__item">
            <FeatureCard />
          </li>
          <li className="products__item">
            <FeatureCard />
          </li>
          <li className="products__item">
            <FeatureCard />
          </li>
        </ul>

        <Button className="products__button">Купить</Button>
      </div>
    </section>
  );
}

export default ProductsList;
