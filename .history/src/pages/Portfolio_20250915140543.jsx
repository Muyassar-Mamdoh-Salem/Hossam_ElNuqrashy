import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Portfolio = () => {
  const works = [
    { id: 1, img: "عريس1.jpg", title: "Wedding Moments" },
    { id: 2, img: "عريس2.jpg", title: "Bride & Groom" },
    { id: 3, img: "عريس3.jpg", title: "Romantic Shoot" },
    { id: 4, img: "عريس7.jpg", title: "Engagement Session" },
    { id: 5, img: "عريس5.jpg", title: "Outdoor Portrait" },
    { id: 6, img: "عريس6.jpg", title: "Creative Shot" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6 relative">
      <h2 className="text-2xl font-bold mb-6 text-center">📸 معرض الأعمال</h2>
      
      <div className="relative">
        <Carousel>
          <CarouselContent>
        {works.map((work) => (
          <div
            key={work.id}
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={work.img}
              alt={work.title}
              className="w-full h-auto object-cover object-top transform group-hover:scale-110 transition duration-500 "
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold">
                {work.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
