import React from "react";

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
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          My <span className="text-blue-600">Portfolio</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A glimpse into my world through the lens. Each photo tells a story,
          capturing emotions, beauty, and timeless memories.
        </p>
      </div>

      {/* الصور */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {works.map((work) => (
          <div
            key={work.id}
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={work.img}
              alt={work.title}
              className="w-full h-64 object-cover object transform group-hover:scale-110 transition duration-500 "
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
