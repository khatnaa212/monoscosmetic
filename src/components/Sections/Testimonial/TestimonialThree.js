import React from "react";
import Slider from "react-slick";

import { NextArrow, PrevArrow } from "../../Other/SliderArrow";

export default function TestimonialThree({ data }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div className="testimonial-three">
      <div className="container">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div className="outline-none" key={index}>
              <div className="testimonial-three__item">
                <img src={item.image} alt="zx" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
