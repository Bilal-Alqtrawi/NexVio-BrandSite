"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";

export default function DeviceOperatorVideo() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // تأثير التمدد التدريجي للخلفية الصفراء
  const width = useTransform<number, string>(
    scrollYProgress,
    [0, 0.3],
    ["92vw", "100vw"]
  );
  const borderRadius = useTransform<number, string>(
    scrollYProgress,
    [0, 0.3],
    ["32px", "0px"]
  );
  const videoScale = useTransform<number, number>(
    scrollYProgress,
    [0.2, 0.6],
    [0.9, 1]
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[100vh] overflow-hidden bg-transparent"
    >
      <motion.div
        style={{ width, borderRadius }}
        className="sticky top-0 z-10 mx-auto flex h-screen transform-gpu flex-col items-center justify-center bg-[#FDF0A6] px-6 py-12 will-change-[width,border-radius]"
      >
        <div className="w-full max-w-4xl space-y-8 text-center">
          {/* العنوان الثابت */}
          <h2 className="text-2xl font-black tracking-tight text-neutral-900 uppercase md:text-4xl">
            JOIN OVER{" "}
            <span className="relative inline-block">85,000 OPERATORS</span>
          </h2>

          {/* حاوية الفيديو التفاعلية */}
          <motion.div
            style={{ scale: videoScale }}
            className="group relative aspect-video w-full transform-gpu cursor-pointer overflow-hidden rounded-2xl bg-neutral-800 shadow-2xl md:rounded-[24px]"
          >
            {/* هنا تضع صورة الـ Thumbnail أو الفيديو */}
            <div className="absolute inset-0 bg-neutral-900/10 transition-colors duration-300 group-hover:bg-neutral-900/30" />

            {/* زر التشغيل السينمائي الأصفر */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex size-16 transform-gpu items-center justify-center rounded-full bg-[#FFD700] text-neutral-950 shadow-xl transition-transform duration-300 group-hover:scale-110 md:size-20">
                <Play className="ml-1 size-8 fill-current" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
