import React from "react";
import { Helmet } from "react-helmet";
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
    { id: 1, img: "عريس1.jpg", title: "Wedding Moments in Egypt" },
    { id: 2, img: "عريس2.jpg", title: "Bride & Groom Photography" },
    { id: 3, img: "عريس3.jpg", title: "Romantic Couple Shoot" },
    { id: 4, img: "عريس7.jpg", title: "Engagement Session Photography" },
    { id: 5, img: "عريس5.jpg", title: "Outdoor Portrait Photography" },
    { id: 6, img: "عريس6.jpg", title: "Creative Photography Shots" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6 relative">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Portfolio | Hossam ElNuqrashy - Professional Photographer</title>
        <meta
          name="description"
          content="Explore the photography portfolio of Hossam ElNuqrashy. Specialized in wedding photography, engagement sessions, romantic shoots, and creative portraits in Egypt."
        />
        <meta
          name="keywords"
          content="Hossam photographer portfolio, wedding photography Egypt, engagement photography, portrait photographer, creative photoshoots Egypt"
        />
        <meta name="author" content="Hossam ElNuqrashy" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        📸 معرض أعمال حسام النقراشي – فوتوغرافيا احترافية
      </h1>

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
                        alt={`Hossam Photography - ${work.title}`}
                        className="w-full h-64 object-cover rounded-lg"
                        loading="lazy"
                      />
                      <h2 className="mt-2 text-lg font-semibold text-center text-gray-700">
                        {work.title}
                      </h2>
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
