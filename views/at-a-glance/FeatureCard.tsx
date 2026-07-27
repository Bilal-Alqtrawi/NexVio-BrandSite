"use client";

import { motion } from "framer-motion";
import { FeatureItem } from "@/types";
import { fadeInUp } from "./data";

export function FeatureCard({ icon: Icon, title, desc }: FeatureItem) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group bg-card hover:border-brand-yellow/40 relative overflow-hidden rounded-2xl border border-white/10 p-8 backdrop-blur-xs transition-all duration-300 hover:bg-[#1a3038] hover:shadow-xl"
    >
      <div className="from-brand-yellow/5 pointer-events-none absolute inset-0 bg-linear-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="text-brand-yellow mb-6 flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 shadow-xs transition-transform duration-300 group-hover:scale-105">
        <Icon className="size-6" />
      </div>
      <h4 className="text-brand-cream group-hover:text-brand-yellow text-lg font-bold tracking-wider uppercase transition-colors duration-300">
        {title}
      </h4>
      <p className="text-teal-light mt-3 text-xs leading-relaxed font-semibold sm:text-sm">
        {desc}
      </p>
    </motion.div>
  );
}
