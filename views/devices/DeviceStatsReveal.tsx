"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import type { Device } from "@/lib/devices";

const STATS = [
  { value: "1.5M+", label: "Managed and Connected Devices" },
  { value: "120K+", label: "Customers" },
  { value: "120+", label: "Countries Worldwide" }
];

/* const TEXT_PARAGRAPH =
  "Powering business ecosystems since 2005, NexVio is a global fintech company and leader in payment and commerce enablement, offering end-to-end solutions that facilitate sustainable business growth."; */

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

interface DeviceStatsRevealProps {
  device: Device;
}

const WordReveal = ({ children, progress, range }: WordProps) => {
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className="relative inline-block font-medium text-neutral-950 will-change-[opacity]"
    >
      {children}
    </motion.span>
  );
};

export default function DeviceStatsReveal({ device }: DeviceStatsRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgWidth = useTransform(scrollYProgress, [0, 0.35], ["92vw", "100vw"]);
  const bgRadius = useTransform(scrollYProgress, [0, 0.35], ["32px", "0px"]);

  const words = device.description.split(" ");
  // const words = TEXT_PARAGRAPH.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[120vh] w-full flex-col items-center justify-center overflow-hidden bg-transparent py-16 sm:py-34"
    >
      <motion.div
        style={{
          width: bgWidth,
          borderRadius: bgRadius
        }}
        className="mx-auto flex w-full transform-gpu flex-col items-center justify-center bg-[#FBF9F4] px-6 py-20 will-change-[width,border-radius] md:py-28"
      >
        <div className="container mx-auto flex max-w-5xl flex-col items-center justify-center gap-12 md:gap-16">
          <div className="w-full max-w-4xl text-center">
            <p className="flex flex-wrap justify-center gap-x-2 gap-y-3 text-center text-2xl leading-relaxed tracking-normal text-neutral-400 sm:text-3xl md:text-[38px] md:leading-[1.4]">
              {words.map((word, i) => {
                const start = 0.15 + (i / words.length) * 0.55;
                const end = start + 0.1;
                return (
                  <WordReveal
                    key={i}
                    progress={scrollYProgress}
                    range={[start, end]}
                  >
                    {word}
                  </WordReveal>
                );
              })}
            </p>
          </div>

          <div className="w-full max-w-4xl space-y-12 md:space-y-16">
            <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
              {STATS.map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <span className="block text-4xl font-black tracking-tight text-neutral-950 sm:text-5xl md:text-[54px]">
                    {stat.value}
                  </span>
                  <span className="mx-auto block max-w-50 text-sm leading-snug font-semibold text-neutral-600">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="transform-gpu rounded-full bg-[#FFD700] px-8 py-3.5 text-sm font-bold text-neutral-950 shadow-sm transition-all duration-200 hover:scale-105 hover:bg-[#e6c200] active:scale-95">
                About NexVio
              </button>
              <button className="transform-gpu rounded-full bg-[#2D1B4E] px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-[#22143b] active:scale-95">
                Investor Relations
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
