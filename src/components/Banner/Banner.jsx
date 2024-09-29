import React from 'react'
import "./Banner.scss"
import Carousel from 'react-bootstrap/Carousel';
import mainimage from "../../assets/image/mainimage.png"

function Banner() {
  return (
    <div>
                  <div className='banner-carousel'>
                <Carousel >
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="First slide" /> */}
                        <img className='main-image' src={mainimage} alt="" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="Second slide" /> */}
                        <img className='main-image' src={mainimage} alt="" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="Third slide" /> */}
                        <img className='main-image'  src={mainimage} alt="" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
    </div>
  )
}

export default Banner



