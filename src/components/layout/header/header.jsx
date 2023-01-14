import React from "react";
import "./header.css";

import Logo from '../../ui/logo/logo';
import Nav from '../nav/nav';

function Header() {
  return (
    <header className="header">
      <div className="header__logo logo">
        <Logo />
      </div>
      <Nav />
    </header>
  );
}

export default Header;
