"use client";

import React from "react";
import Image from "next/image";

// بيانات الكروت المتنوعة (نصوص وصور مدفوعات وأجهزة وأطعمة ومطاعم فقط)
const MARQUEE_ITEMS = [
  {
    id: 1,
    type: "text",
    title: "Open platform",
    bg: "bg-[#1e1e1e]",
    textColor: "text-white"
  },
  {
    id: 2,
    type: "image",
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&q=80", // مطعم شيف يجهز طعام
    alt: "Restaurant food prep",
    bg: "bg-[#FFD700]"
  },
  {
    id: 3,
    type: "text",
    title: "Globally trusted devices",
    bg: "bg-[#1e1e1e]",
    textColor: "text-white"
  },
  {
    id: 4,
    type: "image",
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80", // عملية دفع ببطاقة وجهاز POS
    alt: "Card payment POS",
    bg: "bg-[#FFF9E6]"
  },
  {
    id: 5,
    type: "text",
    title: "80+ payment methods",
    bg: "bg-[#1e1e1e]",
    textColor: "text-white"
  },
  {
    id: 6,
    type: "image",
    src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=500&q=80", // مهندس أو فني يمسك جهاز لوحي تقني
    alt: "Tech hardware setup",
    bg: "bg-[#FFD700]"
  },
  {
    id: 7,
    type: "text",
    title: "Future-proof technology",
    bg: "bg-[#1e1e1e]",
    textColor: "text-white"
  },
  {
    id: 8,
    type: "image",
    src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&q=80", // كوب قهوة ومخبوزات دفع سريع
    alt: "Coffee shop checkout",
    bg: "bg-[#FFF9E6]"
  },
  {
    id: 9,
    type: "text",
    title: "Safe and secure",
    bg: "bg-[#1e1e1e]",
    textColor: "text-white"
  },
  {
    id: 10,
    type: "text",
    title: "CX driven",
    bg: "bg-[#1e1e1e]",
    textColor: "text-white"
  }
];

export default function InfinitePaymentsMarquee() {
  return (
    <section className="flex w-full flex-col gap-12 overflow-hidden bg-[#FBF9F4] py-20 md:gap-16 md:py-28">
      {/* العنوان العلوي الثابت */}
      <div className="container mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-black tracking-tight text-neutral-950 uppercase sm:text-4xl md:text-5xl">
          CASHLESS PAYMENTS MADE SIMPLE
        </h2>
      </div>

      {/* حاوية الشريط المتحرك السحري */}
      <div className="mask-gradient relative flex w-full transform-gpu overflow-x-hidden">
        {/* نكرر المصفوفة مرتين لضمان اتصال الحركة اللانهائية بدون أي رمشة أو قطع */}
        <div className="animate-marquee flex transform-gpu gap-5 py-4 whitespace-nowrap will-change-transform">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
            (item, index) => (
              <div
                key={`${item.id}-${index}`}
                className={`relative inline-block h-[260px] w-[260px] shrink-0 overflow-hidden rounded-[32px] shadow-sm transition-transform duration-300 hover:scale-[1.02] sm:h-[300px] sm:w-[300px] ${item.bg}`}
              >
                {item.type === "text" ? (
                  // كارت النص
                  <div className="flex h-full w-full flex-col justify-end p-8 whitespace-normal">
                    <h3
                      className={`text-2xl leading-snug font-bold tracking-tight sm:text-3xl ${item.textColor}`}
                    >
                      {item.title}
                    </h3>
                  </div>
                ) : (
                  // كارت الصورة (مع حماية الأداء وحجم الصورة)
                  <div className="relative flex h-full w-full items-center justify-center p-6">
                    <Image
                      src={item.src || ""}
                      alt={item.alt || "NexVio showcase"}
                      fill
                      sizes="(max-w-640px) 260px, 300px"
                      className="rounded-[24px] object-cover"
                      priority={index < 4} // شحن أول كم صورة سريعاً للأداء
                    />
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>

      {/* حقن الـ CSS Keyframes المخصص مباشرة لضمان أعلى أداء حركي مريح للعين */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            /* يتحرك بمقدار الثلث لأننا كررنا المصفوفة 3 مرات لضمان تغطية الشاشات الضخمة 4K */
            transform: translate3d(-33.333%, 0, 0);
          }
        }
        .animate-marquee {
          /* سرعتها ممتازة جداً ومريحة للرؤية والقراءة (50 ثانية للدورة الكاملة) */
          animation: marquee 50s linear infinite;
        }
        /* تأثير تلاشي ناعم جداً عند الأطراف اليمنى واليسرى للشاشة */
        .mask-gradient {
          mask-image: linear-gradient(
            to right,
            transparent,
            white 15%,
            white 85%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            white 15%,
            white 85%,
            transparent
          );
        }
      `}</style>
    </section>
  );
}
