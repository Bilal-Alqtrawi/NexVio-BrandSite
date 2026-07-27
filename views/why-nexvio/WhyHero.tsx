"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function WhyHero() {
  return (
    <section className="relative px-4 pt-12 pb-16 sm:px-8 lg:pt-20 lg:pb-24">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-block"
        >
          <span className="border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-black tracking-[0.2em] uppercase shadow-sm backdrop-blur-md">
            <Sparkles className="text-brand-yellow size-3.5 animate-pulse" />
            Why NexVio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-foreground text-4xl font-black tracking-tight uppercase sm:text-6xl lg:text-7xl"
        >
          One Platform. <br />
          <span className="from-brand-yellow-light via-brand-yellow to-brand-teal-light bg-gradient-to-r bg-clip-text text-transparent drop-shadow-sm">
            Endless Possibilities.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted-foreground mx-auto mt-6 max-w-2xl text-base leading-relaxed font-medium sm:text-lg"
        >
          NexVio brings together smart POS, integrated payments, and business
          management in one intelligent platform, helping businesses simplify
          operations, manage sales efficiently, and deliver a better customer
          experience.
        </motion.p>
      </div>
    </section>
  );
}
