import React from 'react'

const Hero = () => {
  return (
    <div className='grid md:grid-cols-2 gap-6 items-center p-6'>
      {/* صورة المصور */}
      <div className='flex justify-center'>
        <img 
          src="hossam.jpg" 
          width={400} 
          alt="Hossam Photographer" 
          className="rounded-xl shadow-lg"
        />
      </div>

      {/* النبذة */}
      <div className='text-center md:text-left'>
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>
          حسام النقراشى – مصور فوتوغرافي محترف
        </h2>
        <p className='text-gray-600 leading-relaxed mb-4'>
         I am Hossam, a passionate photographer who captures life’s most precious moments through the lens. My journey started with a simple camera and grew into a love for telling stories with pictures.

I specialize in weddings, portraits, and creative photoshoots. My goal is to create timeless memories for my clients with creativity, professionalism, and a touch of art.
        </p>
        <p className='text-gray-600 leading-relaxed'>
          أؤمن أن التصوير مش مجرد لقطة، بل هو فن يحفظ الذكريات ويجعلها خالدة 
          للأبد ✨
        </p>
      </div>
    </div>
  )
}

export default Hero
