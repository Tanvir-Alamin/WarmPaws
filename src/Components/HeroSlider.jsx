import React, { useRef, useState } from "react";
import pet1 from "../assets/pet1.png";
import pet2 from "../assets/pet2.png";
import pet3 from "../assets/pet3.png";
import pet4 from "../assets/pet4.png";
import pet5 from "../assets/pet5.png";
import pet6 from "../assets/pet6.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../app.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const HeroSlider = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2200,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={pet1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pet2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pet3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pet4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pet5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pet6} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSlider;
