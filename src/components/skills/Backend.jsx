import React from "react";
import { motion as m } from "framer-motion";

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
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Firebase</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default Backend;
