import React from 'react'

const Gallery = () => {
  const images = [
    { src: 'عريس1.jpg', caption: 'لقطة مميزة من يوم الزفاف' },
    { src: 'عريس2.jpg', caption: 'لحظة خاصة مع الأصدقاء' },
    { src: 'عريس3.jpg', caption: 'تفاصيل جميلة من الحفل' },
    { src: 'عريس4.jpg', caption: 'أجواء مليانة فرحة' },
    { src: 'عريس5.jpg', caption: 'لقطات رومانسية' },
    { src: 'عريس6.jpg', caption: 'إطلالة أنيقة ومميزة' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">معرض أعمالنا</h2>
      <p className="text-gray-600 text-center mb-6">
        هنا بعض من أجمل اللحظات اللي وثقناها لعملائنا ♥
      </p>

      <div className="container grid md:grid-cols-3 gap-6 items-center">
        {images.map((item, index) => (
          <div key={index} className="relative group">
            <img
              className="rounded-xl shadow-lg w-full h-[250px] object-cover transform transition duration-300 group-hover:scale-105"
              src={item.src}
              alt={item.caption}
            />
            <p className="mt-2 text-center text-gray-700 font-medium">{item.caption}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
