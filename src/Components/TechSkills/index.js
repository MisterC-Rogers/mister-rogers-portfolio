import React from "react";
import skills from "./skills";
import Styles from "./skills.module.css";

const index = () => {
  return (
    <section className={Styles.skillsSection}>
      <div className={Styles.container}>
        <div className={Styles.textContainer}>
          <h3>Technical Skills</h3>
          <h6>
            This is a list of some of the technical skills I have at the moment.
            The list is always changing for the better
          </h6>
        </div>
        <div className={Styles.skillsContainer}>
          {skills.map((skill, index) => (
            <div>
              <img
                src={skill.image}
                alt={skill.name}
                key={index}
                className={Styles.skillImage}
              />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default index;
