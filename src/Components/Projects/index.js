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
                  <p>{item.description}</p>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    link to site
                  </a>
                  <a href={item.github} target="_blank" rel="noreferrer">
                    link to code
                  </a>
                  <div className={Styles.design_container}>
                    <span
                      className={[`${Styles.design} ${Styles.design__1}`]}
                    ></span>
                    <span
                      className={[`${Styles.design} ${Styles.design__2}`]}
                    ></span>
                    <span
                      className={[`${Styles.design} ${Styles.design__3}`]}
                    ></span>
                    <span
                      className={[`${Styles.design} ${Styles.design__4}`]}
                    ></span>
                    <span
                      className={[`${Styles.design} ${Styles.design__5}`]}
                    ></span>
                    <span
                      className={[`${Styles.design} ${Styles.design__6}`]}
                    ></span>
                    <span
                      className={[`${Styles.design} ${Styles.design__7}`]}
                    ></span>
                    <span
                      className={[`${Styles.design} ${Styles.design__8}`]}
                    ></span>
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
