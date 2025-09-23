import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";

import bannerImg1 from "../assets/images/img-11.jpeg";
import bannerImg2 from "../assets/images/img-21.jpeg";
import bannerImg3 from "../assets/images/img-20.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const bannerImg = [
  { id: 1, img: bannerImg1 },
  { id: 2, img: bannerImg2 },
];

const Banner = () => {
  return (
    <section className="">
      <div className="relative carousel-slide">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {bannerImg.map(({ id, img, text }) => (
            <SwiperSlide key={id}>
              <img src={img} alt="" className="w-full h-full object-cover" />
              {text}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
