import "./Header.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {

  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <Link to={"/"} className="nav__logo">
          Kounjula
        </Link>
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid" onClick={() => setToggle(false)}>
            <li className="nav__item">
              <Link
                to={"/"}
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to={"/about"}
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i> About
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to={"/skills"}
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to={"/projects"}
                onClick={() => setActiveNav("#projects")}
                className={
                  activeNav === "#projects"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i> Projects
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to={"/contact"}
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </Link>
            </li>
          </ul>

          <i
            class="uil uil-times nav__close "
            onClick={() => setToggle(false)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => setToggle(true)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};
