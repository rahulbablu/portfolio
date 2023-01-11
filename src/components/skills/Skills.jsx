import "./Skills.css";
import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import {motion as m} from 'framer-motion'

const Skills = () => {
  return (
    <m.section
      className="skills section"
      id="skills"
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
    >
      <div className="heading">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Skills</span>
      </div>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </m.section>
  );
};

export default Skills;
