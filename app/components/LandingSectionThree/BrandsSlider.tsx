'use client';
import React, { useRef } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import Brand from './Brand';

const BrandsSlider = () => {
  const swiperRef = useRef<any>(null);
  return (
    <Swiper
      ref={swiperRef}
      onMouseEnter={swiperRef.current?.autoplay?.stop()}
      onMouseLeave={swiperRef.current?.autoplay?.start()}
      modules={[Autoplay]}
      className="w-full  overflow-hidden brands-slider"
      spaceBetween={5}
      slidesPerView={3}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        500: {
          slidesPerView: 4,
          spaceBetween: 5,
        },
        700: {
          slidesPerView: 5,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 5,
        },
      }}
    >
      <SwiperSlide>
        <Brand />
      </SwiperSlide>
      <SwiperSlide>
        <Brand />
      </SwiperSlide>
      <SwiperSlide>
        <Brand />
      </SwiperSlide>
      <SwiperSlide>
        <Brand />
      </SwiperSlide>
      <SwiperSlide>
        <Brand />
      </SwiperSlide>
      <SwiperSlide>
        <Brand />
      </SwiperSlide>
    </Swiper>
  );
};

export default BrandsSlider;
