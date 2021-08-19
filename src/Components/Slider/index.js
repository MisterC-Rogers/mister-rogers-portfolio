import React from "react";
import Slider from "react-slick";

function slider() {
  var settings = {
    dots: true,
  };
  return (
    <div className="">
      <Slider {...settings}>
        {/* {items.map((item, index) => (
          <div className="" key={index}>
            <div className="">
              <h3 className="">{item.title}</h3>
              <p className="">{item.description}</p>
            </div>
            <div className="">
              <figure className="">
                <img src={item.image} alt={item.title}></img>
              </figure>
            </div>
          </div>
        ))} */}
      </Slider>
    </div>
  );
}

export default slider;
