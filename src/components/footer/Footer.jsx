import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Kounjula</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://twitter.com/rahulbablu96"
            className="home__social-icon"
            rel="noreferrer"
            target="_blank"
          >
            <i class="bx bxl-twitter"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCMiy5qjHjVuRUyyipQGBAjQ"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-youtube"></i>
          </a>
          <a
            href="https://www.instagram.com/rahulbablu96/"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/kounjula.bablu"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-facebook"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; RahulKounjula. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
