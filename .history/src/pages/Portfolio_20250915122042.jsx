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
    { id: 4, img: "عريس4.jpg", title: "Engagement Session" },
    { id: 5, img: "عريس5.jpg", title: "Outdoor Portrait" },
    { id: 6, img: "عريس6.jpg", title: "Creative Shot" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">📸 معرض الأعمال</h2>
      <Carousel>
        <CarouselContent>
          {works.map((work) => (
            <CarouselItem
              key={work.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-2">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-2">
                    <img
                      src={work.img}
                      alt={work.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <h3 className="mt-2 text-lg font-semibold">{work.title}</h3>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Portfolio;
