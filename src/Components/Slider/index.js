import React from "react";
import data from "./data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Styles from "./slider.module.css";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className={Styles.container}>
      <h2>Featured Projects</h2>
      <p>Here is a collection of projects that I would like to highlight</p>
      <Carousel>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <h3>{item.title}</h3>
              <img
                src={item.image}
                alt={item.title}
                width={item.width / 2}
                max-height={item.height}
                max-width={item.width}
              />
              <p>{item.description}</p>
              <a href={item.url} target="_blank" rel="noreferrer">
                Link To Site
              </a>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
