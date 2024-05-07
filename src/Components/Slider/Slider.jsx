import React from 'react';
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation,Pagination } from "swiper";
import { Autoplay } from 'swiper';
import slide1 from "../../img/SliderPng/slider1.png";
import slide2 from "../../img/SliderPng/slider2.png";
import nextSlide from "../../img/SliderPng/nextSlide.png";
import prevSlide from "../../img/SliderPng/prevSlide.png";


const Slider = () => {
    return (
        <>
      <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
              clickable: true,
          }}
      navigation={{
        nextEl: '.button-next-slider',
        prevEl: '.button-prev-slider'
      }} 
      autoplay = {{
        delay: 5000
      }}
      modules={[Navigation,Autoplay,Pagination]}
       className="mySwiper">
        <SwiperSlide><img src={slide1} alt='slider1' /></SwiperSlide>
        <SwiperSlide><img src={slide2} alt='slider2' /></SwiperSlide>
        <div className='button-next-slider'><img src={nextSlide} /></div>
        <div className='button-prev-slider'><img src={prevSlide} /></div>
      </Swiper>
    </>
    );
}

export default Slider;
