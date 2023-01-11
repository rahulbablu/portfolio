import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";
import { Data } from "./Data";
import { motion as m } from "framer-motion";

const Projects = () => {
  const [width, setWidth] = useState(0);

  const slide = useRef();

  useEffect(() => {
    setWidth(slide.current.scrollWidth - slide.current.offsetWidth);
  }, []);
  return (
    <m.section
      className="projects container section"
      id="projects"
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
    >
      <div className="heading">
        <h2 className="section__title">My Projects</h2>
        <span className="section__subtitle">What i made</span>
      </div>
      <m.div
        className="projects__container"
        ref={slide}
        whileTap={{ cursor: "grabbing" }}
      >
        <m.div
          className="inner_crousel"
          draggable="true"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {Data.map(({ id, image, title, description, link }) => (
                <div className="projects__card" key={id}>
                  <img src={image} alt={id} className="projects__img" />

                  <h3 className="projects__title">{title}</h3>
                  <p className="projects__description">{description}</p>
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="projects__link button button--flex"
                  >
                    View <i class="uil uil-navigator projects__icon"></i>
                  </a>
                </div>
          ))}
        </m.div>
      </m.div>
    </m.section>
  );
};

export default Projects;
