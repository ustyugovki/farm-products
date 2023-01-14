import React from "react";
import "./title.css";

export const TitleSize = {
  BIG: 'big',
  SMALL: 'small',
  DEFAULT: 'default',
  LOGO: 'logo'
}

function Title({children, size}) {
  return (
    <span className={`title${size ? ` title--${size}` : ""}`}>{children}</span>
  );
}

export default Title;
