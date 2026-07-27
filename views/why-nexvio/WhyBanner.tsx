"use client";

import { motion } from "framer-motion";
import ContactUsButton from "@/components/shared/ContactUsButton";
import { Zap } from "lucide-react";

export default function WhyBanner() {
  return (
    <section className="container mx-auto mb-20 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="group border-brand-yellow/40 from-brand-yellow via-brand-yellow-light to-brand-yellow text-brand-teal relative overflow-hidden rounded-3xl border bg-linear-to-br p-8 text-center shadow-2xl sm:p-14"
      >
        {/* Dynamic Glowing Ambient */}
        <div className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-white/20 blur-3xl transition-transform duration-700 group-hover:scale-150" />
        <div className="bg-brand-yellow-dark/20 pointer-events-none absolute -bottom-24 -left-24 size-64 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-150" />

        <div className="relative z-10">
          <div className="bg-brand-teal text-brand-yellow mb-4 inline-flex size-12 items-center justify-center rounded-2xl shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            <Zap className="fill-brand-yellow size-6" />
          </div>

          <h2 className="text-brand-teal mx-auto max-w-2xl text-3xl font-black tracking-tight uppercase sm:text-4xl lg:text-5xl">
            Less Complexity. <br className="hidden sm:inline" /> More Control.
            Better Business.
          </h2>

          <p className="text-brand-teal/80 mx-auto mt-4 max-w-md text-base font-bold">
            A better way to run your business.
          </p>

          <div className="mt-8 flex justify-center">
            <ContactUsButton variant="teal" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
