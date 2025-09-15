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
          حسام hgkrv– مصور فوتوغرافي محترف
        </h2>
        <p className='text-gray-600 leading-relaxed mb-4'>
          أنا حسام، فوتوغرافر متخصص في توثيق أجمل اللحظات بلقطات فنية 
          تجمع بين الاحترافية والإبداع. أمتلك خبرة في تصوير حفلات الزفاف، 
          البورتريه، جلسات التصوير الخاصة، وتصوير المنتجات. هدفي هو أن أجعل 
          كل صورة تحكي قصة مليئة بالمشاعر والجمال.
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
