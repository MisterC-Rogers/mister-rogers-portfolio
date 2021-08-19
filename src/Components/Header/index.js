import React from "react";
import { Link } from "react-router-dom";
import Smiling from "../../Images/Charlie_Rogers_smiling.jpg";
import Styles from "./header.module.css";

const index = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.headerTextContainer}>
        <div className={Styles.headerText}>
          <h2>Charlie Rogers</h2>
          <h5>
            Creative and people-oriented Full Stack Web Developer with project
            management experience. Strong knowledge of the creations programming
            languages relevant to the web. Adept at motivating self and others.
            Passionate about computer science and educating the next wave of
            programmers. Hungry for knowledge, always looking for the how and
            why something is the way it is. Never settling for the short answer.
          </h5>
        </div>
        <Link to="/about" className={Styles.headerBtn}>
          More About Me
        </Link>
      </div>
      <div className="">
        <img
          src={Smiling}
          alt="Charlie Rogers smiling"
          className={Styles.image}
        />
      </div>
    </div>
  );
};

export default index;
