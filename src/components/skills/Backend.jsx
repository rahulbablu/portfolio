import React from "react";
import { motion as m } from "framer-motion";

const Data = [
  {
    skill: "Firebase",
    level: "Intermediate",
  },
  {
    skill: "Strapi",
    level: "Intermediate",
  },
];

const Backend = () => {
  return (
    <m.div
      className="skills__content"
      initial={{ x: "-150%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
    >
      <h3 className="skills__title">Backend Skills</h3>
      <div className="skills__box">
        <div className="skills__group">
          {Data.map(({ skill, level, i}) => (
            <div className="skills__data" key={i}>
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">{skill}</h3>
                <span className="skills__level">{level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </m.div>
  );
};

export default Backend;
