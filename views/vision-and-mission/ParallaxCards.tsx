"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Eye, LucideIcon, Target } from "lucide-react";
import { memo, useRef } from "react";
import { fadeInUp } from "./VisionAndMissionView";

export default function ParallaxCards() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const textParallax = useTransform(scrollYProgress, [0.1, 0.4], [50, -50]);

  return (
    <section ref={containerRef} className="relative px-6 py-24 md:py-36">
      <div className="container mx-auto max-w-6xl">
        <motion.div style={{ y: textParallax }} className="mb-16 text-center">
          <span className="inline-flex rounded-full border border-[#FFD900]/30 bg-[#FFD900]/10 px-4 py-1 text-xs font-black tracking-widest text-[#FFD900] uppercase shadow-sm">
            Strategic Horizon
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#EAEAEA] uppercase sm:text-5xl">
            Vision & Mission
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <VisionMissionCard
            icon={Eye}
            title="Our Vision"
            description="To shape the future of connected commerce across the Middle East through intelligent technology that empowers every business."
          />
          <VisionMissionCard
            icon={Target}
            title="Our Mission"
            description="To simplify business operations through one intelligent platform that connects commerce, payments, and business management into one seamless experience."
            isReversed
          />
        </div>
      </div>
    </section>
  );
}

const VisionMissionCard = memo(function VisionMissionCard({
  icon: Icon,
  title,
  description,
  isReversed = false
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  isReversed?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-[40px] border border-[#80a6af]/20 bg-gradient-to-br from-[#1a2e35]/90 via-[#15262c]/80 to-[#1a2e35]/90 p-8 backdrop-blur-2xl transition-all duration-500 hover:border-[#FFD900]/50 hover:shadow-2xl hover:shadow-[#FFD900]/10 md:p-12"
    >
      {/* Dynamic Hover Glow */}
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#FFD900]/10 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-[#FFD900]/20" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#67BCD3]/10 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-[#67BCD3]/20" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="mb-8 flex items-center justify-between">
            <div className="flex size-16 items-center justify-center rounded-2xl border border-[#FFD900]/30 bg-[#1a2e35] text-[#FFD900] shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              <Icon className="size-8 text-[#FFD900]" />
            </div>
            <span className="text-4xl font-black text-[#80a6af]/20 transition-colors duration-500 group-hover:text-[#FFD900]/30">
              {isReversed ? "02" : "01"}
            </span>
          </div>

          <h3 className="text-3xl font-black tracking-wider text-[#EAEAEA] uppercase transition-colors duration-300 group-hover:text-[#FFD900] md:text-4xl">
            {title}
          </h3>

          <p className="mt-6 text-lg leading-relaxed font-medium text-[#80a6af]">
            {description}
          </p>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-[#80a6af]/10 pt-6 text-xs font-bold tracking-widest text-[#FFD900] uppercase opacity-80 group-hover:opacity-100">
          <span>NexVio Core</span>
          <span className="h-2 w-2 animate-ping rounded-full bg-[#FFD900]" />
        </div>
      </div>
    </motion.div>
  );
});
