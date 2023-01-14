import React from "react";
import "./button.css";

function Button({children}) {
  return (
    <button type="button" className="menu__button button">
      {children}
    </button>
  );
}

export default Button;
