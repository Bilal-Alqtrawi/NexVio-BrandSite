"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function AdvantageSection() {
  return (
    <section className="container mx-auto mt-24 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="border-border from-card via-background to-card text-foreground relative overflow-hidden rounded-[2.5rem] border bg-linear-to-b p-8 text-center shadow-2xl backdrop-blur-2xl sm:p-16"
      >
        <div className="text-brand-yellow/5 pointer-events-none absolute -top-10 -right-10 size-40">
          <ShieldCheck className="size-full stroke-1" />
        </div>

        <span className="border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-black tracking-[0.2em] uppercase">
          The NexVio Advantage
        </span>

        <h2 className="mx-auto mt-6 max-w-3xl text-2xl leading-snug font-black tracking-tight uppercase sm:text-4xl">
          Instead of purchasing multiple systems from different providers,
          businesses work with one trusted technology partner.
        </h2>

        <p className="text-muted-foreground mx-auto mt-4 max-w-md text-sm leading-relaxed font-semibold sm:text-base">
          One Platform. One Partner. One Connected Business.
        </p>

        <div className="mt-10 flex justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="group bg-brand-yellow text-brand-teal hover:bg-brand-yellow-light flex h-13 items-center gap-3 rounded-full border-none px-8 text-sm font-bold tracking-wide shadow-lg"
              nativeButton={false}
              render={<Link href="/capabilities" />}
            >
              <span>Explore Platform Capabilities</span>
              <ArrowRight className="text-brand-teal size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
