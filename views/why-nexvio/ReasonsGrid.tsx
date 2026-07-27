"use client";

import { memo } from "react";
import { motion, Variants } from "framer-motion";
import { REASONS } from "./data";
import type { ReasonItem } from "@/types";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

const ReasonCard = memo(function ReasonCard({
  icon: Icon,
  title,
  description,
  number
}: ReasonItem) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group border-border bg-card/60 hover:border-brand-yellow/50 hover:bg-card hover:shadow-brand-yellow/5 relative overflow-hidden rounded-3xl border p-8 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl"
    >
      <div className="from-brand-yellow/5 to-brand-teal-light/5 pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 mb-6 flex items-center justify-between">
        <div className="border-border bg-background text-brand-yellow group-hover:border-brand-yellow/40 flex size-14 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-110">
          <Icon className="size-7" />
        </div>
        <span className="text-muted-foreground/30 group-hover:text-brand-yellow/40 text-2xl font-black transition-colors">
          {number}
        </span>
      </div>

      <h3 className="text-card-foreground group-hover:text-brand-yellow relative z-10 text-xl font-bold tracking-wide uppercase transition-colors duration-300">
        {title}
      </h3>

      <p className="text-muted-foreground relative z-10 mt-3 text-sm leading-relaxed font-medium">
        {description}
      </p>
    </motion.div>
  );
});

export default function ReasonsGrid() {
  return (
    <section className="container mx-auto px-4 sm:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {REASONS.map((reason) => (
          <ReasonCard key={reason.title} {...reason} />
        ))}
      </motion.div>
    </section>
  );
}
