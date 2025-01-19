import React from 'react';
import "./Banner.scss";
import Carousel from 'react-bootstrap/Carousel';
import mainimage from "../../assets/image/menu.png";
import image2 from "../../assets/image/image2.png"
import image3 from "../../assets/image/image3.png"

function Banner() {
  return (
    <div className="banner-carousel ">
      <Carousel>
        <Carousel.Item>
          <img className="main-image" src={mainimage} alt="Main banner image" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="main-image" src={image2} alt="Main banner image" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={image3} alt="Main banner image" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
