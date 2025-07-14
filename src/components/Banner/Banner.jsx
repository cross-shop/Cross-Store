import React from "react";
import "./Banner.scss";
import Carousel from "react-bootstrap/Carousel";
import mainimage from "../../assets/image/air.png";
import table from "../../assets/image/bask.png";
import image3 from "../../assets/image/man.png";

function Banner() {
  return (
    <div className="banner-carousel ">
      <Carousel>
        <Carousel.Item>
          <img className="main-image" src={mainimage} alt="Main banner image" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="main-image" src={table} alt="Main banner image" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={image3} alt="Main banner image" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
