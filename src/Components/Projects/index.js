import React from "react";
import data from "./data";
import Styles from "./projects.module.css";

const index = () => {
  return (
    <div className={Styles.container}>
      <h1>Projects</h1>
      <section className={Styles.card_container}>
        {data.map((item, index) => {
          return (
            <div className={Styles.flip_card_container} key={index}>
              <div className={Styles.flip_card}>
                <div className={Styles.card_front}>
                  <figure>
                    <div className={Styles.img_bg}></div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={Styles.img}
                    />
                    <figcaption>{item.title}</figcaption>
                  </figure>
                </div>

                <div className={Styles.card_back}>
                  <figcaption>{item.title}</figcaption>
                  <p className={Styles.description}>{item.description}</p>
                  <div className={Styles.buttonContainer}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className={Styles.button}
                    >
                      link to site
                    </a>
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noreferrer"
                      className={Styles.button}
                    >
                      link to code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default index;
