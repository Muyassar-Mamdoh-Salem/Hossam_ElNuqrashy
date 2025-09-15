import React from "react";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
    <Carousel className="w-full max-w-sm">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Portfolio;
