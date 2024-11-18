import React from 'react';
import "./Banner.scss";
import Carousel from 'react-bootstrap/Carousel';
import mainimage from "../../assets/image/mainimage.png";

function Banner() {
  return (
    <div className="banner-carousel">
      <Carousel>
        <Carousel.Item>
          <img className="main-image" src={mainimage} alt="Main banner image" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="main-image" src={mainimage} alt="Main banner image" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
