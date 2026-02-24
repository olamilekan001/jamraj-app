import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";

import bannerImg1 from "../assets/images/house1.jpeg";
import bannerImg2 from "../assets/images/img-21.jpeg";
import bannerImg3 from "../assets/images/house2.jpeg";
import bannerImg4 from "../assets/images/house4.jpeg";
import bannerImg5 from "../assets/images/house5.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const bannerImg = [
  { id: 1, img: bannerImg1 },
  { id: 2, img: bannerImg2 },
  { id: 3, img: bannerImg3 },
  { id: 4, img: bannerImg4 },
  { id: 5, img: bannerImg5 },
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
              <img src={img} alt="" className="w-full h-full object-cover z-40" />
              {text}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
