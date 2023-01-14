import React from "react";
import "./footer.css";

import Logo from '../../ui/logo/logo';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <div className="footer__logo logo">
          <Logo />
        </div>
        <span className='footer__сopyright'>Создано 2021</span>
      </div>
    </footer>
  );
}

export default Footer;
