"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import type { Device } from "@/lib/devices";

export default function DeviceOperatorVideo({ device }: { device: Device }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

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
      className="relative h-screen overflow-hidden bg-transparent font-sans"
    >
      <motion.div
        style={{ width, borderRadius }}
        className="bg-brand-teal sticky top-0 z-10 mx-auto flex h-screen transform-gpu flex-col items-center justify-center px-6 py-12 backdrop-blur-lg will-change-[width,border-radius]"
      >
        <div className="w-full max-w-4xl space-y-8 text-center">
          <h2 className="text-brand-cream text-2xl font-black tracking-tight uppercase md:text-4xl">
            See <span className="text-brand-yellow">{device.name}</span> In
            Action
          </h2>

          <motion.div
            style={{ scale: videoScale }}
            className="border-brand-cream/20 bg-brand-cream/5 group relative aspect-video w-full transform-gpu cursor-pointer overflow-hidden rounded-2xl border shadow-2xl backdrop-blur-md md:rounded-[24px]"
          >
            <div className="bg-brand-teal/40 group-hover:bg-brand-teal/20 absolute inset-0 transition-colors duration-300" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-brand-yellow text-brand-teal flex size-16 transform-gpu items-center justify-center rounded-full shadow-xl transition-transform duration-300 group-hover:scale-110 md:size-20">
                <Play className="ml-1 size-8 fill-current" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
