import React from "react";
import "./logo.css";

import logo from "../../../assets/logo.svg";
import Title, { TitleSize } from '../title/title';

function Logo() {
  return (
    <a href='/' className="header__logo logo">
      <img src={logo} alt='логотип'></img>
      <Title size={TitleSize.LOGO}>Фермерские продукты</Title>
    </a>
  );
}

export default Logo;
