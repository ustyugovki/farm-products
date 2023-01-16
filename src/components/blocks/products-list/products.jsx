import React from "react";
import "./products.css";

import Title, { TitleSize } from '../../ui/title/title';
import FeatureCard from '../../ui/feature-card/feature-card';
import Button from '../../ui/button/button';

function ProductsList({productList}) {

  const featuresList =
    productList['features'] &&
    productList['features'].map(({id, title, about, image, feature, featureTitle}) => (
      <li className="products__item" key={id} id={id}>
        <FeatureCard title={title} about={about} image={image} feature={feature} featureTitle={featureTitle} />
      </li>
    ));

  return (
    <section className='main__products products'>
      <div className='products__wrapper'>
        <Title size={TitleSize.DEFAULT}>Почему фермерские продукты лучше?</Title>

        <ul className="products__list">
          {featuresList}
        </ul>

        <Button className="products__button">Купить</Button>
      </div>
    </section>
  );
}

export default ProductsList;
