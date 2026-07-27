"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function QuoteComponent() {
  return (
    <section className="relative flex items-center justify-center border-t border-[#80a6af]/10 bg-linear-to-b from-transparent to-[#1a2e35] px-6 py-28 md:py-40">
      <div className="relative container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[48px] border border-[#FFD900]/30 bg-linear-to-b from-[#1a2e35] to-[#15262c] p-10 text-center shadow-2xl shadow-black/60 backdrop-blur-2xl md:p-20"
        >
          <div className="pointer-events-none absolute -top-10 -left-10 text-[#FFD900]/10">
            <Quote className="size-40 rotate-180 stroke-1" />
          </div>

          <span className="relative z-10 inline-block rounded-full border border-[#FFD900]/40 bg-[#FFD900]/10 px-5 py-2 text-xs font-black tracking-widest text-[#FFD900] uppercase shadow-inner">
            Our Promise
          </span>

          <blockquote className="relative z-10 mx-auto mt-8 max-w-3xl text-2xl leading-relaxed font-extrabold text-[#EAEAEA] md:text-4xl">
            &ldquo;We build technology that simplifies today and empowers
            tomorrow.&rdquo;
          </blockquote>

          <div className="relative z-10 mx-auto mt-10 h-1.5 w-16 rounded-full bg-linear-to-r from-[#FFD900] to-[#67BCD3]" />
        </motion.div>
      </div>
    </section>
  );
}
