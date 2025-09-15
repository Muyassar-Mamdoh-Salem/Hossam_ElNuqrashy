import React from "react";
// استيراد كومبوننتات Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// استيراد الموديولات اللي هتستخدمها
import { Pagination } from "swiper/modules";

// استيراد CSS
import "swiper/css";
import "swiper/css/pagination";

export default function GallerySwiper() {
  return (
    <div className="w-[600px] mx-auto">
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true, // تخلي المستخدم يضغط على الـ bullets
          type: "bullets", // ممكن تغيرها لـ fraction | progressbar | custom
          renderBullet: (index, className) => {
            return `<span class="${className}">${index + 1}</span>`;
          },
          // لو عاوز نوع تاني من الـ pagination ممكن تستخدم مثلاً:
          // type: "fraction",
          // renderFraction: (currentClass, totalClass) => {
          //   return `<span class="${currentClass}"></span> / <span class="${totalClass}"></span>`;
          // },
        }}
        spaceBetween={20}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img src="https://picsum.photos/600/400?1" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/600/400?2" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/600/400?3" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
