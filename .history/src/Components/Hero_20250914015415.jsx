import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function AutoSlider() {
  return (
    <div className="w-[600px] mx-auto">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, // 3 ثواني بين كل سلايد
          disableOnInteraction: false, // يكمل حتى لو المستخدم لمس السلايدر
        }}
        loop={true} // يخلي الصور تدور بشكل لا نهائي
      >
        <SwiperSlide>
          <img src="" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/600/400?random=4" alt="Slide 4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
