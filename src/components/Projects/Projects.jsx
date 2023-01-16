import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";
import { Data } from "./Data";
import { motion as m } from "framer-motion";

const Card = ({ id, title, image, description, link, description2 }) => {
  const [desc, setDesc] = useState(false);

  return (
    <m.div
      className="projects__card"
      key={id}
      onMouseLeave={() => setDesc(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <img src={image} alt={id} className="projects__img" />

      <h3 className="projects__title">{title}</h3>
      <p className="projects__description" onClick={() => setDesc(!desc)}>{description2}</p>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="projects__link button button--flex"
      >
        View <i class="uil uil-navigator projects__icon"></i>
      </a>
      {desc && (
        <div className="desc" onClick={() => setDesc(false)}>
          <h3>Description:</h3>
          <div className="descfromdata">{description}</div>
        </div>
      )}
    </m.div>
  );
};

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
      transition={{ duration: 0.95, ease: "easeOut" }}
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
          {Data.map(({ id, image, title, description, description2, link }) => (
            <Card
              key={id}
              id={id}
              image={image}
              title={title}
              description={description}
              description2={description2}
              link={link}
            />
          ))}
        </m.div>
      </m.div>
    </m.section>
  );
};

export default Projects;
