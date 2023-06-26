import React from "react";
import "./App.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative } from "swiper";

export default function Swiperslides() {
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-125%", 0, -800],
            rotate: [0, 0, -90],
          },
          next: {
            shadow: true,
            translate: ["125%", 0, -800],
            rotate: [0, 0, 90],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper5"
      >
        <SwiperSlide>
          <img
            src="https://bslthemes.com/html/quickeat/assets/img/photo-4.png"
            width={70}
            height={70}
            alt="image"
          />
          Sapien eget mi proin sed libero. Et magnis dis parturient montes
          nascetur.
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://bslthemes.com/html/quickeat/assets/img/photo-4.png"
            width={70}
            height={70}
            alt="image"
          />
          Sapien eget mi proin sed libero. Et magnis dis parturient montes
          nascetur.
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://bslthemes.com/html/quickeat/assets/img/photo-4.png"
            width={70}
            height={70}
            alt="image"
          />
          Sapien eget mi proin sed libero. Et magnis dis parturient montes
          nascetur.
        </SwiperSlide>
      </Swiper>
    </>
  );
}
