"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  ArrowRight,
  Database,
  Users,
  LineChart,
  CheckCircle2,
  Lock
} from "lucide-react";
import { SolutionData } from "@/data/solutions";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.08 } }
};

interface SolutionDetailsViewProps {
  data: SolutionData;
}

export default function SolutionDetailsView({
  data
}: SolutionDetailsViewProps) {
  const isBI = data.slug === "business-intelligence";

  return (
    <main className="relative w-full overflow-hidden bg-[#FAF8F5] font-sans text-neutral-900">
      {/* --- SECTION 1: ASYMMETRIC EDITORIAL HERO --- */}
      <section className="relative flex min-h-[90vh] items-center px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-0 right-0 size-[600px] translate-x-12 -translate-y-12 rounded-full bg-[#F5C41B]/10 blur-[130px]" />
          <div className="absolute bottom-0 left-0 size-[400px] -translate-x-12 translate-y-12 rounded-full bg-neutral-200 blur-[100px]" />
        </div>

        <div className="relative z-10 container mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Side: Typography & Action */}
          <div className="space-y-6 text-left lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300/70 bg-white/80 px-4 py-1.5 text-xs font-bold tracking-widest text-[#D4A313] uppercase shadow-xs backdrop-blur-md">
              <Sparkles className="size-3.5 text-[#F5C41B]" />
              {data.badge}
            </div>

            <h1 className="text-4xl leading-[1.05] font-black tracking-tight text-neutral-950 sm:text-5xl md:text-6xl xl:text-7xl">
              {data.title} <br />
              <span className="relative inline-block bg-gradient-to-r from-[#F5C41B] to-[#D4A313] bg-clip-text text-transparent">
                {data.highlightedText}
              </span>
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed font-bold text-neutral-800 md:text-xl">
              {data.description}
            </p>

            <p className="max-w-2xl text-sm leading-relaxed text-neutral-500 md:text-base">
              {data.subParagraph}
            </p>

            <div className="pt-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-neutral-950 px-8 py-4.5 text-xs font-bold tracking-widest text-white uppercase transition-all duration-300 hover:scale-105 hover:bg-[#F5C41B] hover:text-black"
              >
                Schedule Interactive Demo
                <ArrowUpRight className="size-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* Right Side: CSS Interactive Graphic Mockup (No static image!) */}
          <div className="flex w-full justify-center lg:col-span-5 lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square w-full max-w-[440px] rounded-[38px] border border-neutral-200 bg-white p-6 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.06)]"
            >
              <div className="absolute top-4 right-4 flex gap-1.5">
                <span className="size-2.5 rounded-full bg-red-400" />
                <span className="size-2.5 rounded-full bg-yellow-400" />
                <span className="size-2.5 rounded-full bg-green-400" />
              </div>

              {isBI ? (
                /* Interactive Business Intelligence Mockup Chart */
                <div className="flex h-full flex-col justify-between pt-6">
                  <div className="border-b border-neutral-100 pb-4">
                    <span className="text-[10px] font-black tracking-widest text-neutral-400 uppercase">
                      NexVio Live Pulse
                    </span>
                    <h4 className="mt-0.5 text-lg font-black text-neutral-900">
                      Real-Time Revenue
                    </h4>
                  </div>

                  {/* Fake Chart Bars */}
                  <div className="flex h-40 items-end justify-between gap-3 px-2">
                    {[50, 80, 45, 95, 60, 110, 75].map((val, idx) => (
                      <div
                        key={idx}
                        className="flex w-full flex-col items-center gap-2"
                      >
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${val}px` }}
                          transition={{
                            duration: 1.2,
                            delay: 0.3 + idx * 0.1,
                            ease: "easeOut"
                          }}
                          className={`w-full rounded-t-md ${idx === 5 ? "bg-[#F5C41B]" : "bg-neutral-900/10 hover:bg-neutral-950/20"} transition-all`}
                        />
                        <span className="text-[10px] font-bold text-neutral-400">
                          M0{idx + 1}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between rounded-2xl border border-neutral-100 bg-[#FAF8F5] p-4">
                    <div>
                      <p className="text-[10px] font-bold text-neutral-400 uppercase">
                        Average Growth
                      </p>
                      <p className="text-base font-black text-neutral-950">
                        +34.2% This Month
                      </p>
                    </div>
                    <div className="flex size-9 items-center justify-center rounded-xl bg-green-100 text-green-600">
                      <LineChart className="size-5" />
                    </div>
                  </div>
                </div>
              ) : (
                /* Interactive CRM Card Mockup */
                <div className="flex h-full flex-col justify-between pt-6">
                  <div className="border-b border-neutral-100 pb-4">
                    <span className="text-[10px] font-black tracking-widest text-neutral-400 uppercase">
                      Customer Profiles
                    </span>
                    <h4 className="mt-0.5 text-lg font-black text-neutral-900">
                      Active Segment
                    </h4>
                  </div>

                  <div className="my-auto space-y-3.5">
                    {[
                      {
                        name: "Sarah Jenkins",
                        tier: "VIP Guest",
                        spend: "$1,240",
                        initial: "SJ",
                        color: "bg-amber-100 text-amber-700"
                      },
                      {
                        name: "Marcus Al-Sharif",
                        tier: "Regular",
                        spend: "$640",
                        initial: "MA",
                        color: "bg-blue-100 text-blue-700"
                      },
                      {
                        name: "Lina Vance",
                        tier: "Loyal",
                        spend: "$890",
                        initial: "LV",
                        color: "bg-emerald-100 text-emerald-700"
                      }
                    ].map((cust, i) => (
                      <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 + i * 0.15 }}
                        key={i}
                        className="flex items-center justify-between rounded-xl border border-neutral-100 bg-neutral-50/50 p-3 transition-colors hover:border-neutral-300"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`size-9 rounded-full ${cust.color} flex items-center justify-center text-xs font-bold`}
                          >
                            {cust.initial}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-neutral-900">
                              {cust.name}
                            </p>
                            <span className="text-[10px] font-semibold text-[#D4A313]">
                              {cust.tier}
                            </span>
                          </div>
                        </div>
                        <span className="text-xs font-black text-neutral-900">
                          {cust.spend}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-2 flex items-center justify-center gap-2 text-xs font-bold text-[#D4A313]">
                    <span>Manage all loyalty pipelines</span>
                    <ArrowRight className="size-3.5" />
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE BENTO GRID (CAPABILITIES) --- */}
      <section className="border-t border-neutral-200 bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl space-y-4">
            <span className="rounded-full bg-[#F5C41B]/10 px-3.5 py-1.5 text-xs font-black tracking-widest text-[#D4A313] uppercase">
              System Modules
            </span>
            <h2 className="text-3xl font-black tracking-tight text-neutral-950 uppercase sm:text-4xl md:text-5xl">
              {data.capabilitiesTitle}
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid auto-rows-[180px] grid-cols-1 gap-6 md:grid-cols-3"
          >
            {data.capabilities.map((cap, idx) => {
              // Bento layout rules: Make first and fifth item take 2 column spans for asymmetry
              const isFeatured = idx === 0 || idx === 4;
              return (
                <motion.div
                  variants={fadeInUp}
                  key={idx}
                  className={`group relative flex flex-col justify-between rounded-[28px] border border-neutral-200/80 p-6 transition-all duration-300 hover:border-[#F5C41B] hover:shadow-[0_20px_40px_-15px_rgba(245,196,27,0.12)] ${
                    isFeatured ? "bg-[#FAF8F5] md:col-span-2" : "bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs font-bold text-neutral-400 transition-colors group-hover:text-[#D4A313]">
                      [ 0{idx + 1} ]
                    </span>
                    <div className="flex size-7 items-center justify-center rounded-lg bg-neutral-100 text-neutral-500 transition-colors group-hover:bg-[#F5C41B]/10 group-hover:text-[#D4A313]">
                      <CheckCircle2 className="size-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-neutral-900 duration-200 group-hover:translate-x-1">
                      {cap}
                    </h3>
                    {isFeatured && (
                      <p className="mt-2 max-w-md text-xs text-neutral-500">
                        Powering high-performance commercial environments with
                        real-time sync, offline data reliability and bulletproof
                        architecture.
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 3: THE DARK BREAK (WHY IT MATTERS) --- */}
      <section className="relative overflow-hidden bg-[#0B0F12] px-4 py-28 text-white sm:px-6 lg:px-8">
        {/* Dark Background Decorative Ambient Lights */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/4 size-[500px] -translate-y-1/2 rounded-full bg-[#F5C41B]/5 blur-[120px]" />
          <div className="absolute top-0 right-0 size-[350px] rounded-full bg-neutral-800/20 blur-[90px]" />
        </div>

        <div className="relative z-10 container mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <span className="rounded-full border border-[#F5C41B]/30 px-3 py-1 text-[10px] font-black tracking-widest text-[#F5C41B] uppercase">
              The Strategic Edge
            </span>
            <h2 className="text-3xl leading-tight font-black tracking-tight uppercase sm:text-4xl md:text-5xl">
              {data.whyItMattersTitle}
            </h2>
            <p className="text-sm leading-relaxed font-light text-neutral-400 sm:text-base">
              {data.whyItMattersDesc}
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[36px] border border-neutral-800 bg-neutral-900/40 p-8 backdrop-blur-md md:p-12">
              <h3 className="mb-8 flex items-center gap-2 text-xs font-black tracking-widest text-neutral-400 uppercase">
                <span className="size-1.5 animate-pulse rounded-full bg-[#F5C41B]" />
                {data.benefitsTitle}
              </h3>

              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                {data.benefits.map((benefit, i) => (
                  <div key={i} className="group flex gap-3">
                    <span className="mt-1 shrink-0 font-mono text-xs font-bold text-[#F5C41B]">
                      // 0{i + 1}
                    </span>
                    <p className="text-sm leading-snug font-bold text-neutral-200 transition-colors group-hover:text-white">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: MINIMALIST BIG TYPOGRAPHY CTA --- */}
      <section className="bg-[#FAF8F5] px-4 py-24 sm:px-6 md:py-36 lg:px-8">
        <div className="container mx-auto max-w-4xl space-y-8 text-center">
          <div className="mb-4 inline-flex size-12 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-950">
            <Lock className="size-5" />
          </div>

          <p className="text-xs font-black tracking-widest text-[#D4A313] uppercase">
            {data.ctaBadge}
          </p>

          <h2 className="mx-auto max-w-3xl text-3xl leading-none font-black tracking-tight text-neutral-950 uppercase sm:text-5xl md:text-6xl">
            {data.ctaTitle}
          </h2>

          <p className="mx-auto max-w-lg text-sm font-medium text-neutral-500 sm:text-base">
            {data.ctaDesc}
          </p>

          <div className="pt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border-b-2 border-neutral-950 pb-2 text-sm font-black tracking-widest text-neutral-950 uppercase transition-colors hover:border-[#D4A313] hover:text-[#D4A313]"
            >
              Get Started Now
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
