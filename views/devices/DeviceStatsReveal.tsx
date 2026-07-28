"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Device } from "@/lib/devices";
import Link from "next/link";

const STATS = [
  { value: "1.5M+", label: "Managed and Connected Devices" },
  { value: "120K+", label: "Customers" },
  { value: "120+", label: "Countries Worldwide" }
];

interface DeviceStatsRevealProps {
  device: Device;
}

export default function DeviceStatsReveal({ device }: DeviceStatsRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgWidth = useTransform(scrollYProgress, [0, 0.35], ["92vw", "100vw"]);
  const bgRadius = useTransform(scrollYProgress, [0, 0.35], ["32px", "0px"]);

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
        className="bg-card border-border mx-auto flex w-full transform-gpu flex-col items-center justify-center border-y px-6 py-20 will-change-[width,border-radius] md:py-28"
      >
        <div className="container mx-auto flex max-w-5xl flex-col items-center justify-center gap-12 md:gap-16">
          <div className="w-full max-w-4xl text-center">
            <p className="text-foreground text-center text-2xl leading-relaxed font-medium tracking-normal sm:text-3xl md:text-[38px] md:leading-[1.4]">
              {device.description}
            </p>
          </div>

          {/* <div className="w-full max-w-4xl space-y-12 md:space-y-16">
            <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
              {STATS.map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <span className="text-foreground block text-4xl font-black tracking-tight sm:text-5xl md:text-[54px]">
                    {stat.value}
                  </span>
                  <span className="text-muted-foreground mx-auto block max-w-50 text-sm leading-snug font-semibold">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={"/about"}
                className="bg-brand-yellow text-primary-foreground transform-gpu rounded-full px-8 py-3.5 text-sm font-bold shadow-sm transition-all duration-200 hover:scale-105 active:scale-95"
              >
                About NexVio
              </Link>
            </div>
          </div> */}
        </div>
      </motion.div>
    </section>
  );
}
