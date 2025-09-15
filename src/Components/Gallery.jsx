import React from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  const works = [
    "عريس1.jpg",
    "عريس2.jpg",
    "عريس3.jpg",
    "عريس4.jpg",
    "عريس5.jpg",
    "عريس6.jpg",
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        معرض الأعمال
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {works.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`عمل ${index + 1}`}
            className="rounded-xl shadow-lg w-full h-[300px] object-cover object-top"
            loading="lazy"
            initial={{ opacity: 0, y: 30 }}  // البداية: مخفية ومتحت
            animate={{ opacity: 1, y: 0 }}   // النهاية: واضحة في مكانها
            transition={{ duration: 0.6, delay: index * 0.2 }} // تأخير بسيط لكل صورة
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
