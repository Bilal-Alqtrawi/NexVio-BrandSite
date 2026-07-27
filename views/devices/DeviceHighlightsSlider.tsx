"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence
} from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Cpu,
  Wifi,
  Award,
  ShieldCheck
} from "lucide-react";
import type { Device } from "@/lib/devices";

const ICON_MAP = [Cpu, Wifi, Award, ShieldCheck];

const cardVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
    scale: 0.95
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 120 : -120,
    opacity: 0,
    scale: 0.95
  })
};

export default function DeviceHighlightsSlider({ device }: { device: Device }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const highlights = device.highlights || [];

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"]
  });

  const containerWidth = useTransform(
    scrollYProgress,
    [0, 0.25],
    ["92vw", "100vw"]
  );
  const containerRadius = useTransform(
    scrollYProgress,
    [0, 0.25],
    ["32px", "0px"]
  );

  const handleNext = () => {
    if (currentIndex < highlights.length - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const IconComponent = ICON_MAP[currentIndex % ICON_MAP.length];

  return (
    <section
      ref={targetRef}
      className="bg-teal-light/20 relative h-screen overflow-x-hidden"
    >
      <motion.div
        style={{ width: containerWidth, borderRadius: containerRadius }}
        className="border-brand-cream/10 bg-brand-cream/3 sticky top-0 z-10 mx-auto flex h-screen max-w-full transform-gpu flex-col justify-between overflow-hidden border-y pt-24 pb-12 backdrop-blur-xl will-change-[width,border-radius] md:pt-32 md:pb-16"
      >
        <div className="bg-brand-yellow/10 pointer-events-none absolute top-1/2 left-1/2 size-125 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]" />

        <div className="relative z-10 container mx-auto max-w-7xl shrink-0 px-6 text-center">
          <h2 className="text-brand-yellow text-3xl font-black tracking-widest uppercase sm:text-5xl">
            Highlights
          </h2>
        </div>

        <div className="relative z-10 my-auto flex w-full flex-1 items-center justify-center overflow-hidden px-6">
          <div className="relative flex h-80 w-full max-w-lg items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              {highlights.length > 0 && (
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="border-brand-cream/20 bg-brand-cream/10 relative flex h-full w-full transform-gpu flex-col justify-between rounded-[32px] border p-8 text-center shadow-2xl backdrop-blur-2xl sm:p-12"
                >
                  <div className="bg-brand-yellow text-brand-teal mx-auto flex size-14 shrink-0 items-center justify-center rounded-2xl p-3 shadow-lg">
                    <IconComponent className="size-7 stroke-[2.5]" />
                  </div>

                  <div className="mt-4 flex-1 space-y-3">
                    <h3 className="text-brand-cream text-xl leading-snug font-black tracking-tight sm:text-2xl">
                      {highlights[currentIndex].title}.
                    </h3>
                    <p className="text-brand-cream/80 text-sm leading-relaxed font-medium sm:text-base">
                      {highlights[currentIndex].description}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="relative z-10 container mx-auto flex shrink-0 items-center justify-center gap-6 px-6">
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`transform rounded-full border p-2.5 transition-all duration-200 active:scale-95 ${
                currentIndex === 0
                  ? "border-brand-cream/10 text-brand-cream/20 cursor-not-allowed"
                  : "border-brand-cream/30 text-brand-cream hover:border-brand-yellow hover:bg-brand-yellow/10"
              }`}
            >
              <ChevronLeft className="size-5" />
            </button>

            <div className="flex items-center gap-2 px-1">
              {highlights.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "bg-brand-yellow w-7"
                      : "bg-brand-cream/20 w-2"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={currentIndex === highlights.length - 1}
              className={`transform rounded-full border p-2.5 transition-all duration-200 active:scale-95 ${
                currentIndex === highlights.length - 1
                  ? "border-brand-cream/10 text-brand-cream/20 cursor-not-allowed"
                  : "border-brand-cream/30 text-brand-cream hover:border-brand-yellow hover:bg-brand-yellow/10"
              }`}
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
