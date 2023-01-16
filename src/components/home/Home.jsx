import React from "react";
import { Data } from "./Data";
import "./Home.css";
import Social from "./Social";
import { motion as m } from "framer-motion";

export const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <m.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          exit={{ opacity: 1 }}
          className="home__content grid"
        >
          <Social />
          <m.div
            className="home__img"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.95, ease: "easeOut" }}
            exit={{ opacity: 1 }}
          ></m.div>
          <Data />
        </m.div>
      </div>
    </section>
  );
};
