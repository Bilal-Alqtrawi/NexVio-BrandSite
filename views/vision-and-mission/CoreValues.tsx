"use client";

import { memo } from "react";
import { motion, Variants } from "framer-motion";
import { CoreValue } from "@/types";
import { fadeInUp } from "./VisionAndMissionView";
import { CORE_VALUES } from "./data";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function CoreValues() {
  return (
    <section className="relative border-t border-[#80a6af]/10 bg-[#1a2e35]/50 px-6 py-24 backdrop-blur-3xl md:py-36">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="inline-flex rounded-full border border-[#FFD900]/30 bg-[#FFD900]/10 px-4 py-1 text-xs font-black tracking-widest text-[#FFD900] uppercase shadow-sm">
            The Pillars of NexVio
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#EAEAEA] uppercase sm:text-5xl">
            Our Core Values
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-linear-to-r from-[#FFD900] via-[#ffe958] to-transparent" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {CORE_VALUES.map((value, idx) => (
            <ValueCard key={idx} {...value} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const ValueCard = memo(function ValueCard({
  icon: Icon,
  title,
  description,
  number
}: CoreValue) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative overflow-hidden rounded-3xl border border-[#80a6af]/20 bg-[#1a2e35]/60 p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#FFD900]/40 hover:bg-[#1a2e35] hover:shadow-2xl hover:shadow-[#FFD900]/5"
    >
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-[#FFD900]/5 via-transparent to-[#67BCD3]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 mb-6 flex items-center justify-between">
        <div className="flex size-14 items-center justify-center rounded-2xl border border-[#80a6af]/30 bg-[#1a2e35] text-[#FFD900] transition-transform duration-300 group-hover:scale-110 group-hover:border-[#FFD900]/40">
          <Icon className="size-7" />
        </div>
        <span className="text-2xl font-black text-[#80a6af]/30 transition-colors group-hover:text-[#FFD900]/40">
          {number}
        </span>
      </div>

      <h4 className="relative z-10 text-xl font-bold tracking-wider text-[#EAEAEA] uppercase transition-colors duration-300 group-hover:text-[#FFD900]">
        {title}
      </h4>

      <p className="relative z-10 mt-3 text-sm leading-relaxed font-medium text-[#80a6af]">
        {description}
      </p>
    </motion.div>
  );
});
