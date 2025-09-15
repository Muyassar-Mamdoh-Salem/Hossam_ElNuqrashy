import React from 'react';

const Gallery = () => {
  const works = [
    { src: "/images/عريس1.jpg", alt: "جلسة تصوير زفاف للعريس في الهواء الطلق - حسام النقراشي" },
    { src: "/images/عريس2.jpg", alt: "العريس والعروس في لحظة رومانسية - تصوير فوتوغرافي حسام النقراشي" },
    { src: "/images/عريس3.jpg", alt: "صورة إبداعية للعروس بفستان الزفاف الأبيض - حسام النقراشي" },
    { src: "/images/عريس4.jpg", alt: "جلسة تصوير خطوبة رومانسية - حسام النقراشي" },
    { src: "/images/عريس5.jpg", alt: "لقطة خارجية مميزة للعروس والعريس - حسام النقراشي" },
    { src: "/images/عريس6.jpg", alt: "تصوير احترافي للعروس في الطبيعة - حسام النقراشي" },
  ];

  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        📸 معرض أعمال حسام النقراشي
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {works.map((work, index) => (
          <figure key={index} className="rounded-xl shadow-lg overflow-hidden">
            <img
              className="w-full h-[300px] object-cover object-top"
              src={work.src}
              alt={work.alt}
              loading="lazy"
            />
            <figcaption className="text-sm text-gray-600 mt-2 text-center px-2">
              {work.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
