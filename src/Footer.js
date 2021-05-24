import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer__container">
        <ul className="footer__list">
          <li className="copyright">© 2021 Sluggars</li>
          <li>Privacy policy</li>
          <li>Cookies</li>
          <li>Terms</li>
          <li>Advertise</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
