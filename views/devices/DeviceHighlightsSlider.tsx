"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence
} from "framer-motion";
import { ChevronLeft, ChevronRight, Cpu, Wifi, Award } from "lucide-react";
import type { Device } from "@/lib/devices";

const ICON_MAP = [Cpu, Wifi, Award];

const cardVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0
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

  const containerWidth = useTransform<number, string>(
    scrollYProgress,
    [0, 0.25],
    ["92vw", "100vw"]
  );
  const containerRadius = useTransform<number, string>(
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
      className="relative h-screen overflow-x-hidden bg-transparent"
    >
      <motion.div
        style={{
          width: containerWidth,
          borderRadius: containerRadius
        }}
        className="sticky top-0 z-10 mx-auto flex h-screen max-w-full transform-gpu flex-col justify-between overflow-hidden bg-[#1a1a1a] pt-28 pb-12 will-change-[width,border-radius] md:pt-36 md:pb-16"
      >
        <div className="container mx-auto max-w-7xl shrink-0 px-6 text-center">
          <h2 className="text-3xl font-black tracking-widest text-white uppercase sm:text-5xl">
            Highlights
          </h2>
        </div>

        <div className="my-auto flex w-full flex-1 items-center justify-center overflow-hidden px-6">
          <div className="md justify- relative flex min-h-80 w-full max-w-120 items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              {highlights.length > 0 && (
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="absolute flex h-full w-full transform-gpu flex-col justify-between rounded-[32px] border border-neutral-800 bg-[#2d2d2d] p-8 shadow-2xl sm:p-12"
                >
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-[#FFD700] p-3 text-neutral-950 shadow-md">
                    <IconComponent className="size-7 stroke-[2.5]" />
                  </div>

                  <div className="mt-6 space-y-4">
                    <h3 className="text-xl leading-snug font-black tracking-tight text-white sm:text-2xl">
                      {highlights[currentIndex].title}.
                    </h3>
                    <p className="max-w-sm text-sm leading-relaxed font-medium text-neutral-400 sm:text-base">
                      {highlights[currentIndex].description}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="container mx-auto flex shrink-0 items-center justify-center gap-6 px-6">
          <div className="flex items-center gap-4 text-neutral-400">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`transform rounded-full border p-2 transition-all duration-200 active:scale-95 ${
                currentIndex === 0
                  ? "cursor-not-allowed border-neutral-800 text-neutral-700"
                  : "border-neutral-700 text-white hover:border-neutral-500 hover:bg-neutral-800"
              }`}
            >
              <ChevronLeft className="size-5" />
            </button>

            <div className="flex items-center gap-1.5 px-1">
              {highlights.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-6 bg-[#FFD700]"
                      : "w-2 bg-neutral-600"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={currentIndex === highlights.length - 1}
              className={`transform rounded-full border p-2 transition-all duration-200 active:scale-95 ${
                currentIndex === highlights.length - 1
                  ? "cursor-not-allowed border-neutral-800 text-neutral-700"
                  : "border-neutral-700 text-white hover:border-neutral-500 hover:bg-neutral-800"
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
