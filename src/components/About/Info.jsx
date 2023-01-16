import React from "react";
import { anim, item2 } from "../home/animation";
import { motion as m } from "framer-motion";

export const Info = () => {
  return (
    <m.div
      className="about__info grid"
      variants={anim}
      initial="hidden"
      animate="show"
    >
      <m.div variants={item2} style={{ overflow: "hidden" }}>
        <div className="about__box">
          <i className="bx bx-award about__icon"></i>
          <h3 className="about__title">Experience</h3>
          <span className="about__subtitle">2 Years</span>
        </div>
      </m.div>
      <m.div variants={item2} style={{ overflow: "hidden" }}>
        <div className="about__box">
          <i className="bx bx-briefcase-alt about__icon"></i>
          <h3 className="about__title">Completed</h3>
          <span className="about__subtitle">20+ Projects</span>
        </div>
      </m.div>
      <m.div variants={item2} style={{ overflow: "hidden" }}>
        <div className="about__box">
          <i className="bx bx-support about__icon"></i>
          <h3 className="about__title">Support</h3>
          <span className="about__subtitle">Online 24/7</span>
        </div>
      </m.div>
    </m.div>
  );
};
