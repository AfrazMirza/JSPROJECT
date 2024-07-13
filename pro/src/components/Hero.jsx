import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import man from './../assets/men.png';
import women from './../assets/women.png';
import beg from './../assets/beg.png';

function Hero() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay : true ,
        autoplaySpeed : 3000
      };
  return (
    <div>
    <Slider {...settings}>
        <div><img className='h-full w-full object-cover' src={man}/></div>
        <div><img className='h-full w-full object-cover'src={women}/></div>
        <div><img className='h-full w-full object-cover'src={beg}/></div>
    </Slider>
    </div>
  )
}

export default Hero