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
    { id: 1, img: "عريس1.jpg", title: "Wedding Moments" ,o },
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
                      <h3 className="mt-2 text-lg font-semibold text-center">
                {work.title}
              </h3>
                    </CardContent>
                  </Card>
          </div>
              </CarouselItem>
        ))}
          </CarouselContent>

          {/* أزرار التنقل */}
          <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center transition" />
          <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center transition" />
        </Carousel>
      </div>
    </div>
  );
};

export default Portfolio;
