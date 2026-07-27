"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  ArrowRight,
  LineChart,
  CheckCircle2,
  Lock
} from "lucide-react";
import { SolutionData } from "@/data/solutions";
import ContactUsButton from "@/components/shared/ContactUsButton";

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

const KPI_STATS = [
  { label: "Today's Sales", value: "AED 12.4K" },
  { label: "Transactions", value: "186" },
  { label: "Avg Order", value: "AED 67" },
  { label: "Revenue", value: "+18%" }
];

export default function SolutionDetailsView({
  data
}: SolutionDetailsViewProps) {
  const isBI = data.slug === "business-intelligence";
  const barValues = [50, 80, 45, 95, 60, 110, 75];

  return (
    <main className="bg-brand-teal text-brand-cream relative w-full overflow-hidden font-sans">
      <section className="relative flex min-h-[90vh] items-center px-4 pt-10 pb-20 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
          <div className="bg-brand-yellow/10 absolute top-0 right-0 size-150 translate-x-12 -translate-y-12 rounded-full blur-[130px]" />
          <div className="bg-teal-light/10 absolute bottom-0 left-0 size-100 -translate-x-12 translate-y-12 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 container mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-6 text-left lg:col-span-7">
            <div className="border-teal-light/30 bg-brand-cream/10 text-brand-yellow inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-black tracking-widest uppercase shadow-xs backdrop-blur-md">
              <Sparkles className="text-brand-yellow size-3.5" />
              {data.badge}
            </div>

            <h1 className="text-brand-cream text-4xl leading-[1.05] font-black tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
              {data.title} <br />
              <span className="text-brand-yellow">{data.highlightedText}</span>
            </h1>

            <p className="text-brand-cream/90 max-w-2xl text-lg leading-relaxed font-bold md:text-xl">
              {data.description}
            </p>

            <p className="text-brand-cream/70 max-w-2xl text-sm leading-relaxed md:text-base">
              {data.subParagraph}
            </p>

            <div className="pt-4">
              <Link
                href="/contact"
                className="bg-brand-yellow text-brand-teal hover:bg-brand-yellow-light group inline-flex items-center gap-3 rounded-full px-8 py-4 text-xs font-black tracking-widest uppercase transition-all duration-300 hover:scale-105"
              >
                Request a Demo
                <ArrowUpRight className="size-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>

          <div className="flex w-full justify-center lg:col-span-5 lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="border-teal-light/20 bg-brand-cream/10 relative aspect-square w-full max-w-110 rounded-[38px] border p-6 shadow-2xl backdrop-blur-xl"
            >
              <div className="absolute top-4 right-4 flex gap-1.5">
                <span className="size-2.5 rounded-full bg-red-400" />
                <span className="size-2.5 rounded-full bg-yellow-400" />
                <span className="size-2.5 rounded-full bg-green-400" />
              </div>

              {isBI ? (
                <div className="flex h-full flex-col justify-between pt-6">
                  <div className="border-teal-light/20 border-b pb-4">
                    <span className="text-brand-yellow text-[10px] font-black tracking-widest uppercase">
                      {data.chartTitle ?? "NEXVIO ANALYTICS"}
                    </span>
                    <h4 className="text-brand-cream mt-0.5 text-lg font-black">
                      {data.chartSubtitle ?? "Business Performance"}
                    </h4>
                  </div>

                  <div className="grid grid-cols-4 gap-2 py-3">
                    {KPI_STATS.map((kpi) => (
                      <div
                        key={kpi.label}
                        className="bg-brand-teal/50 border-teal-light/20 rounded-xl border px-2 py-2 text-center"
                      >
                        <p className="text-brand-cream/60 text-[9px] font-bold tracking-wide uppercase">
                          {kpi.label}
                        </p>
                        <p className="text-brand-yellow mt-0.5 text-xs font-black">
                          {kpi.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="relative z-1 flex h-36 items-end justify-between gap-3 px-2">
                    <svg
                      className="pointer-events-none absolute inset-x-2 top-2 h-28 w-[calc(100%-1rem)]"
                      viewBox="0 0 100 40"
                      preserveAspectRatio="none"
                    >
                      <polyline
                        fill="none"
                        stroke="#fedf11"
                        strokeWidth="1.5"
                        points="5,28 20,18 35,30 50,10 65,22 80,6 95,16"
                      />
                    </svg>
                    {barValues.map((val, idx) => (
                      <div
                        key={idx}
                        className="relative z-10 flex w-full flex-col items-center gap-1"
                      >
                        <span className="relative z-100 text-[9px] font-bold text-white">
                          {val}
                        </span>
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${val * 0.9}px` }}
                          transition={{
                            duration: 1.2,
                            delay: 0.3 + idx * 0.1,
                            ease: "easeOut"
                          }}
                          className={`w-full rounded-t-md ${idx === 5 ? "bg-brand-yellow" : "bg-brand-cream/20 hover:bg-brand-cream/30"} transition-all`}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="bg-brand-teal/60 border-teal-light/20 flex items-center justify-between rounded-2xl border p-4">
                    <div>
                      <p className="text-brand-cream/60 text-[10px] font-bold uppercase">
                        Average Growth
                      </p>
                      <p className="text-brand-cream text-base font-black">
                        +34.2% This Month
                      </p>
                    </div>
                    <div className="bg-brand-yellow/20 text-brand-yellow flex size-9 items-center justify-center rounded-xl">
                      <LineChart className="size-5" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex h-full flex-col justify-between pt-6">
                  <div className="border-teal-light/20 border-b pb-4">
                    <span className="text-brand-yellow text-[10px] font-black tracking-widest uppercase">
                      Customer Profiles
                    </span>
                    <h4 className="text-brand-cream mt-0.5 text-lg font-black">
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
                        color: "bg-brand-yellow/20 text-brand-yellow"
                      },
                      {
                        name: "Marcus Al-Sharif",
                        tier: "Regular",
                        spend: "$640",
                        initial: "MA",
                        color: "bg-teal-light/20 text-teal-light"
                      },
                      {
                        name: "Lina Vance",
                        tier: "Loyal",
                        spend: "$890",
                        initial: "LV",
                        color: "bg-brand-cream/20 text-brand-cream"
                      }
                    ].map((cust, i) => (
                      <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 + i * 0.15 }}
                        key={i}
                        className="bg-brand-teal/40 border-teal-light/20 hover:border-brand-yellow flex items-center justify-between rounded-xl border p-3 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`size-9 rounded-full ${cust.color} flex items-center justify-center text-xs font-bold`}
                          >
                            {cust.initial}
                          </div>
                          <div>
                            <p className="text-brand-cream text-xs font-bold">
                              {cust.name}
                            </p>
                            <span className="text-brand-yellow text-[10px] font-semibold">
                              {cust.tier}
                            </span>
                          </div>
                        </div>
                        <span className="text-brand-cream text-xs font-black">
                          {cust.spend}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="text-brand-yellow mt-2 flex items-center justify-center gap-2 text-xs font-bold">
                    <span>Manage all loyalty pipelines</span>
                    <ArrowRight className="size-3.5" />
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-brand-teal px-4 py-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl space-y-4">
            <span className="bg-brand-yellow/10 text-brand-yellow border-brand-yellow/30 rounded-full border px-3.5 py-1.5 text-xs font-black tracking-widest uppercase">
              {data.modulesLabel}
            </span>
            <h2 className="text-brand-cream text-3xl font-black tracking-tight uppercase sm:text-4xl md:text-5xl">
              {data.capabilitiesTitle}
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid auto-rows-45 grid-cols-1 gap-6 md:grid-cols-3"
          >
            {data.capabilities.map((cap, idx) => {
              const isFeatured = idx === 0 || idx === 4;
              return (
                <motion.div
                  variants={fadeInUp}
                  key={idx}
                  className={`group border-teal-light/20 hover:border-brand-yellow relative flex flex-col justify-between rounded-[28px] border p-6 transition-all duration-300 hover:shadow-2xl ${
                    isFeatured
                      ? "bg-brand-cream/10 md:col-span-2"
                      : "bg-brand-cream/5"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-brand-yellow/70 group-hover:text-brand-yellow font-mono text-xs font-bold transition-colors">
                      [ 0{idx + 1} ]
                    </span>
                    <div className="bg-brand-teal/80 text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-teal flex size-7 items-center justify-center rounded-lg transition-colors">
                      <CheckCircle2 className="size-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-brand-cream text-lg font-black duration-200 group-hover:translate-x-1">
                      {cap.title}
                    </h3>
                    <p className="text-brand-cream/70 mt-2 max-w-md text-xs">
                      {cap.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-teal relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="bg-teal-light/10 absolute top-1/2 left-1/4 size-125 -translate-y-1/2 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 container mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <span className="border-brand-yellow/30 text-brand-yellow rounded-full border px-3 py-1 text-[10px] font-black tracking-widest uppercase">
              The Strategic Edge
            </span>
            <h2 className="text-brand-cream text-3xl leading-tight font-black tracking-tight uppercase sm:text-4xl md:text-5xl">
              {data.whyItMattersTitle}
            </h2>
            <p className="text-brand-cream/80 text-sm leading-relaxed font-light sm:text-base">
              {data.whyItMattersDesc}
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="border-teal-light/20 bg-brand-cream/10 rounded-[36px] border p-8 backdrop-blur-md md:p-12">
              <h3 className="text-brand-cream/80 mb-8 flex items-center gap-2 text-xs font-black tracking-widest uppercase">
                <span className="bg-brand-yellow size-1.5 animate-pulse rounded-full" />
                {data.benefitsTitle}
              </h3>

              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                {data.benefits.map((benefit, i) => (
                  <div key={i} className="group flex gap-3">
                    <span className="text-brand-yellow mt-1 shrink-0 font-mono text-xs font-bold">
                      0{i + 1}
                    </span>
                    <p className="text-brand-cream/90 group-hover:text-brand-cream text-sm leading-snug font-bold transition-colors">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-teal px-4 py-24 sm:px-6 md:py-36 lg:px-8">
        <div className="container mx-auto max-w-4xl space-y-8 text-center">
          <div className="bg-brand-cream/10 text-brand-yellow mb-4 inline-flex size-12 items-center justify-center rounded-2xl">
            <Lock className="size-5" />
          </div>

          <p className="text-brand-yellow text-xs font-black tracking-widest uppercase">
            {data.ctaBadge}
          </p>

          <h2 className="text-brand-cream mx-auto max-w-3xl text-3xl leading-none font-black tracking-tight uppercase sm:text-5xl md:text-6xl">
            {data.ctaTitle}
          </h2>

          <p className="text-brand-cream/80 mx-auto max-w-lg text-sm font-medium sm:text-base">
            {data.ctaDesc}
          </p>

          <div className="pt-6">
            <ContactUsButton variant="yellow" />
          </div>
        </div>
      </section>
    </main>
  );
}
