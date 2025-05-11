import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { assets } from '../assets/data';
function Slider() {
  return (
    <div className="mt-20 w-[85%]  mx-auto">
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div><img src={assets.coffee4} alt="Slide 1" /></div>
        <div><img src={assets.coffee6} alt="Slide 2" /></div>
        <div><img src={assets.coffee5} alt="Slide 3" /></div>
      </Carousel>
    </div>)
}

export default Slider