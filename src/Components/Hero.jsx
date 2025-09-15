import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 items-center p-6">
      {/* صورة المصور */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="hossam.jpg"
          width={400}
          alt="Hossam Photographer"
          className="rounded-xl shadow-lg"
        />
      </motion.div>

      {/* النبذة */}
      <motion.div
        className="text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          حسام النقراشى – مصور فوتوغرافي محترف
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          أنا حسام، فوتوغرافر متخصص في توثيق أجمل اللحظات بلقطات فنية
          تجمع بين الاحترافية والإبداع. أمتلك خبرة في تصوير حفلات الزفاف،
          البورتريه، جلسات التصوير الخاصة، وتصوير المنتجات. هدفي هو أن أجعل
          كل صورة تحكي قصة مليئة بالمشاعر والجمال.
        </p>
        <p className="text-gray-600 leading-relaxed">
          أؤمن أن التصوير مش مجرد لقطة، بل هو فن يحفظ الذكريات ويجعلها خالدة
          للأبد ✨
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
