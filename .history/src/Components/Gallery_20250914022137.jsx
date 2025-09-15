import React from 'react'

const Gallery = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        معرض الأعمال
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <img
          className="rounded-xl shadow-lg w-full h-[300px] object-cover object-top"
          src="عريس1.jpg"
          alt="عمل 1"
        />
        <img
          className="rounded-xl shadow-lg w-full h-[300px] object-cover object-top"
          src="عريس2.jpg"
          alt="عمل 2"
        />
        <img
          className="rounded-xl shadow-lg w-full h-[300px] object-cover object-top"
          src="عريس3.jpg"
          alt="عمل 3"
        />
        <img
          className="rounded-xl shadow-lg w-full h-[300px] object-cover object-top"
          src="عريس4.jpg"
          alt="عمل 4"
        />
        <img
          className="rounded-xl shadow-lg w-full h-[300px] object-cover object-top"
          src="عريس5.jpg"
          alt="عمل 5"
        />
        <img
          className="rounded-xl shadow-lg w-[00px] h-[300px] object-cover object-top"
          src="عريس6.jpg"
          alt="عمل 6"
        />
      </div>
    </div>
  )
}

export default Gallery
