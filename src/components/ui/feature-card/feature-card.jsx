import React from "react";
import "./feature-card.css";

import Title, { TitleSize } from '../title/title';

// Карточка с преимуществами
function FeatureCard({title, about, image, feature, featureTitle}) {

  return (
    <section className="feature">
      <header className="feature__header">
        <img
          className="feature__img"
          width={56}
          height={56}
          src={image}
          alt={title}
        />
        <div>
          <span className={feature}>{featureTitle}</span>
          <Title size={TitleSize.SMALL}>{title}</Title>
        </div>
      </header>
      <p className="feature__text">
        {about}
      </p>
    </section>
  );
}

export default FeatureCard;
