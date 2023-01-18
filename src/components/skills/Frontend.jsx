import React from "react";
import { motion as m } from "framer-motion";

const Data = [
  {
    skill: "HTML",
    level: "Advanced",
  },
  {
    skill: "CSS",
    level: "Advanced",
  },
  {
    skill: "Javascript",
    level: "Intermediate",
  },
  {
    skill: "ReactJS",
    level: "Intermediate",
  },
  {
    skill: "React Hooks",
    level: "Intermediate",
  },
  {
    skill: "Redux",
    level: "Intermediate",
  },
  {
    skill: "SCSS",
    level: "Advanced",
  },
  {
    skill: "Material UI",
    level: "Intermediate",
  },
  {
    skill: "Framer-Motion",
    level: "Intermediate",
  },
  {
    skill: "Tailwind CSS",
    level: "Intermediate",
  },

  {
    skill: "Chakra UI",
    level: "Intermediate",
  },
  {
    skill: "Elastic UI",
    level: "Intermediate",
  },
  {
    skill: "Styled-Components",
    level: "Intermediate",
  },
  {
    skill: "Git",
    level: "Intermediate",
  },
];

const Frontend = () => {
  return (
    <m.div
      className="skills__content"
      initial={{ x: "150%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
    >
      <h3 className="skills__title">React Frontend Dev</h3>
      <div className="skills__box">
        <div className="skills__group">
          {Data.map(({ skill, level, i }) => (
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

export default Frontend;
