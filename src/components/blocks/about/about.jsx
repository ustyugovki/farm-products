import React from "react";
import "./about.css";

import Title, { TitleSize } from '../../ui/title/title';

function About() {
  return (
    <section className="main__about about">
      <div className="about__wrapper">
        <Title size={TitleSize.BIG}>Магазин фермерских продуктов с доставкой</Title>

        <p className="about__text">
          Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее &nbsp;
          и доставляем продукты максимально свежими.
        </p>

      </div>
    </section>
  );
}

export default About;
