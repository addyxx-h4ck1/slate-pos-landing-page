'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import ReviewCard from './ReviewCard';
const ReviewsSlider = () => {
  const swiperRef = useRef<any>(null); //@typescript-eslint/no-explicit-any
  return (
    <Swiper
      ref={swiperRef}
      onMouseEnter={swiperRef.current?.autoplay?.stop()}
      onMouseLeave={swiperRef.current?.autoplay?.start()}
      modules={[Autoplay]}
      className="w-full reviewsSwiper overflow-hidden"
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
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      <SwiperSlide>
        <ReviewCard />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard />
      </SwiperSlide>
    </Swiper>
  );
};

export default ReviewsSlider;
