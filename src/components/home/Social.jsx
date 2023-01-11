import React from "react";

import {anim, item} from './animation'
import {motion as m} from 'framer-motion'

const Social = () => {
  return (
    <m.div className="home__social" variants={anim} initial='hidden' animate='show'>
      <m.div variants={item} style={{ overflow: "hidden" }}>
        <a
          href="https://www.instagram.com/rahulbablu96/"
          className="home__social-icon"
          rel="noreferrer"
          target="_blank"
        >
          <i class="uil uil-instagram"></i>
        </a>
      </m.div>
      <m.div variants={item} style={{ overflow: "hidden" }}>
        <a
          href="https://dribbble.com/rahulkounjula"
          className="home__social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i class="uil uil-dribbble"></i>
        </a>
      </m.div>
      <m.div variants={item} style={{ overflow: "hidden" }}>
        <a
          href="https://www.github.com/rahulbablu"
          className="home__social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i class="uil uil-github-alt"></i>
        </a>
      </m.div>
      <m.div variants={item} style={{ overflow: "hidden" }}>
        <a
          href="https://www.linkedin.com/in/rahul-kounjula-0b0bb0157/"
          className="home__social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i class="uil uil-linkedin-alt"></i>
        </a>
      </m.div>
    </m.div>
  );
};

export default Social;
