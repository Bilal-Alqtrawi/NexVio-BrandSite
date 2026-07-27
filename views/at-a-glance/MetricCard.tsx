"use client";

import { motion } from "framer-motion";
import { MetricCardProps } from "@/types";
import { fadeInUp } from "./data";

export function MetricCard({
  icon: Icon,
  value,
  title,
  subtitle,
  isHighlight = false
}: MetricCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group bg-card hover:border-brand-yellow/40 relative overflow-hidden rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:shadow-xl"
    >
      <div className="text-brand-yellow mb-3 flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
        <Icon className="size-5" />
      </div>
      <div
        className={`text-3xl font-black tracking-tight ${
          isHighlight ? "text-brand-yellow" : "text-brand-cream"
        }`}
      >
        {value}
      </div>
      <h4 className="text-brand-cream mt-1 text-xs font-bold tracking-wide uppercase">
        {title}
      </h4>
      <p className="text-teal-light mt-1 text-[11px] font-semibold">
        {subtitle}
      </p>
    </motion.div>
  );
}
