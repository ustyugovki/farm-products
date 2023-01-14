import React from "react";
import "./feature-card.css";

import Title, { TitleSize } from '../title/title';

// Карточка с преимуществами
function FeatureCard() {
  return (
    <section className="feature">
      <header className="feature__header">
        <img
          className="feature__img"
          width={56}
          height={56}
          src="https://i.ibb.co/xGg2GfP/eat-1.png"
          alt="Еда намного вкуснее"
        />
        <div>
          <span className="feature__owner">Фермерские продукты</span>
          <Title size={TitleSize.SMALL}>Еда намного вкуснее</Title>
        </div>
      </header>
      <p className="feature__text">
        Домашняя колбаса из&nbsp;мяса, соли и&nbsp;специй и&nbsp;колбаса
        из&nbsp;магазина&nbsp;&mdash; два настолько разных продукта, что они
        даже не&nbsp;родственники
      </p>
    </section>
  );
}

export default FeatureCard;
