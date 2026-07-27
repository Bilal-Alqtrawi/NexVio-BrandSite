"use client";

import { useRef } from "react";
import { Variants } from "framer-motion";
import ParallaxCards from "./ParallaxCards";
import Hero from "./Hero";
import QuoteComponent from "./QuoteComponent";
import CoreValues from "./CoreValues";
import Lights from "./Lights";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function VisionAndMissionView() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#1a2e35] text-[#EAEAEA] selection:bg-[#FFD900] selection:text-[#1a2e35]"
    >
      {/* Dynamic Ambient Lights */}
      <Lights />
      <div className="relative z-10">
        <Hero />
        <ParallaxCards />
        <CoreValues />
        <QuoteComponent />
      </div>
    </main>
  );
}
