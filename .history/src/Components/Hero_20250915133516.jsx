import React from 'react';

const Hero = () => {
  return (
    <header className="grid md:grid-cols-2 gap-6 items-center p-6 bg-white">
      {/* صورة المصور */}
      <figure className="flex justify-center">
        <img 
          src="hossam.jpg" 
          width={400} 
          alt="حسام النقراشي مصور فوتوغرافي محترف في مصر متخصص في تصوير الزفاف والبورتريه والمنتجات" 
          className="rounded-xl shadow-lg"
          loading="eager"
        />
        <figcaption className="sr-only">
          حسام النقراشي – فوتوغرافر محترف
        </figcaption>
      </figure>

      {/* النبذة */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          حسام النقراشى – مصور فوتوغرافي محترف في مصر
        </h1>
        <p className="text-gray-600 leading-relaxed mb-4">
          أنا <strong>حسام النقراشي</strong>، فوتوغرافر متخصص في توثيق أجمل اللحظات 
          بلقطات فنية تجمع بين الاحترافية والإبداع. لدي خبرة واسعة في 
          <strong>تصوير حفلات الزفاف</strong>، <strong>البورتريه</strong>، 
          <strong>الجلسات الخاصة</strong>، و<strong>تصوير المنتجات</strong>. 
          هدفي هو أن أجعل كل صورة تحكي قصة مليئة بالمشاعر والجمال.
        </p>
        <p className="text-gray-600 leading-relaxed">
          أؤمن أن <em>التصوير الفوتوغرافي</em> مش مجرد لقطة، 
          بل هو فن يحفظ الذكريات ويجعلها خالدة للأبد ✨
        </p>
      </div>
    </header>
  );
};

export default Hero;
