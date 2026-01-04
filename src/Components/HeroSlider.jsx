import React, { useRef, useState } from "react";
import pet1 from "../assets/pet1.png";
import pet2 from "../assets/pet2.png";
import pet3 from "../assets/pet3.png";
import pet4 from "../assets/pet4.png";
import pet5 from "../assets/pet5.png";
import pet6 from "../assets/pet6.png";
import cookie from "../assets/cookie.png";

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
    <div className="mt-25">
      <div className="flex flex-col items-center">
        <div className="relative">
          {" "}
          <div className="text-4xl font-bold mb-5">
            How We Care for Your Pets
          </div>
          <img
            className="absolute w-40 ml-[-350px] mt-[-100px]"
            src={cookie}
            alt=""
          />
        </div>
        <p className="text-xl pb-20 text-gray-600">
          From vaccinations to treatments, we provide all-round care to keep
          your pets healthy and happy.
        </p>
      </div>
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
    </div>
  );
};

export default HeroSlider;
