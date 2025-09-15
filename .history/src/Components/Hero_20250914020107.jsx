import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function AutoSlider() {
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        spaceBetween={20}
        slidesPerView={1}
        effect="fade" // 👈 يخلي الصور تتغير بانسيابية
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <img
            src="/عريس1.jpg"
            alt="Slide 1"
            className="w-full h-[250px] md:h-[400px] lg:h-[600px] object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/عريس2.jpg"
            alt="Slide 2"
            className="w-full h-[250px] md:h-[400px] lg:h-[600px] object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/عريس3.jpg"
            alt="Slide 3"
            className="w-full h-[250px] md:h-[400px] lg:h-[600px] object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/عريس4.jpg"
            alt="Slide 4"
            className="w-full md:h-[400px]  object-cover rounded-xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
