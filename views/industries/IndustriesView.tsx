"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Layers } from "lucide-react";
import { INDUSTRIES_DATA } from "@/data/Industries";
import IndustryCard from "./IndustryCard";

export default function IndustriesView() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0d0c0a] font-sans text-white">
      <div className="pointer-events-none absolute top-0 right-0 size-175 translate-x-1/4 -translate-y-1/3 rounded-full bg-[#ffcc00]/8 blur-[180px]" />
      <div className="pointer-events-none absolute bottom-1/4 left-0 size-125 rounded-full bg-blue-500/3 blur-[120px]" />

      <div className="relative z-10">
        <section className="mx-auto max-w-5xl space-y-6 px-4 pt-10 pb-16 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-4 py-1.5 text-xs font-black tracking-widest text-[#F5C41B] uppercase backdrop-blur-xs">
            <Layers className="size-3.5" />
            One Platform. Multiple Industries.
          </div>
          <h1 className="text-4xl leading-[1.05] font-black tracking-tight uppercase sm:text-6xl md:text-7xl">
            Industries <br />
            <span className="via-brand-yellow bg-linear-to-r from-[#F5C41B] to-white bg-clip-text text-transparent">
              We Empower
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed font-medium text-neutral-400 sm:text-base md:text-lg">
            Every business operates differently, but every business needs
            reliable technology. NexVio provides flexible solutions.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <div className="grid grid-cols-2 gap-3.5 lg:col-span-5">
              {INDUSTRIES_DATA.map((industry, index) => {
                const isActive = activeTab === index;
                return (
                  <IndustryCard
                    key={industry.id}
                    index={index}
                    industry={industry}
                    onActive={setActiveTab}
                    isActive={isActive}
                  />
                );
              })}
            </div>

            <div className="h-full lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="relative min-h-137.5 overflow-hidden rounded-[36px] border border-white/10 bg-linear-to-b from-white/4 to-transparent p-8 backdrop-blur-md md:p-12"
                >
                  <div className="space-y-4">
                    <span className="font-mono text-[10px] font-black tracking-widest text-[#F5C41B] uppercase">
                      [ INDUSTRY MATRIX{" "}
                      {INDUSTRIES_DATA[activeTab].id.toUpperCase()} ]
                    </span>
                    <h3 className="text-3xl leading-none font-black tracking-tight text-white uppercase md:text-4xl">
                      {INDUSTRIES_DATA[activeTab].name}{" "}
                      {INDUSTRIES_DATA[activeTab].emoji}
                    </h3>
                    <p className="text-base font-bold text-neutral-300">
                      &quot;{INDUSTRIES_DATA[activeTab].tagline}&quot;
                    </p>
                  </div>
                  <p className="max-w-xl text-sm leading-relaxed font-medium text-neutral-400 md:text-base">
                    {INDUSTRIES_DATA[activeTab].desc}
                  </p>
                  <div className="space-y-4 border-t border-white/10 pt-4">
                    <h4 className="text-xs font-black tracking-widest text-[#F5C41B] uppercase">
                      Key Platform Capabilities
                    </h4>
                    <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {INDUSTRIES_DATA[activeTab].features.map((feat, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2.5 text-xs font-bold text-neutral-300"
                        >
                          <CheckCircle2 className="size-4 shrink-0 text-[#F5C41B]" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
