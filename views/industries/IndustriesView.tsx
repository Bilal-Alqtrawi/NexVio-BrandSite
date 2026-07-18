"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  UtensilsCrossed,
  Coffee,
  ShoppingBag,
  ShoppingCart,
  Shirt,
  Sparkles,
  Pill,
  Wrench,
  Layers,
  ChevronRight,
  CheckCircle2
} from "lucide-react";

const INDUSTRIES_DATA = [
  {
    id: "restaurants",
    name: "Restaurants",
    emoji: "🍽",
    icon: UtensilsCrossed,
    tagline: "Fine dining & fast service, synchronized perfectly.",
    desc: "Manage table layouts, coordinate kitchen display systems (KDS), split bills dynamically, and track raw ingredient costs in real-time.",
    features: [
      "Tableside ordering & payments",
      "Kitchen Display System (KDS)",
      "Dynamic menu management"
    ]
  },
  {
    id: "cafes",
    name: "Cafés",
    emoji: "☕",
    icon: Coffee,
    tagline: "Speed, loyalty, and the perfect brew.",
    desc: "Speed up transactions at the counter, build automated customer loyalty programs, and optimize coffee bean inventory with precision.",
    features: [
      "Quick-checkout & tap-to-pay",
      "Custom loyalty point engines",
      "Multi-modifier modifiers (milk, size, syrup)"
    ]
  },
  {
    id: "retail",
    name: "Retail Stores",
    emoji: "🛍",
    icon: ShoppingBag,
    tagline: "Seamless checkout, infinite shelf space.",
    desc: "Keep shelves stocked with smart inventory alerts, easily process returns, scan barcodes instantly, and run dynamic seasonal promotions.",
    features: [
      "Barcode scanner integration",
      "Real-time shelf inventory alerts",
      "Multi-item discount builders"
    ]
  },
  {
    id: "supermarkets",
    name: "Supermarkets",
    emoji: "🛒",
    icon: ShoppingCart,
    tagline: "Heavy-duty transaction volumes made easy.",
    desc: "Handle bulk pricing, integrated scale measurements, rapid high-volume queue-busting, and centralized warehouse supply management.",
    features: [
      "Digital scale integration",
      "Bulk and bundle pricing",
      "Reorder threshold notifications"
    ]
  },
  {
    id: "fashion",
    name: "Fashion & Apparel",
    emoji: "👗",
    icon: Shirt,
    tagline: "Sizes, colors, and stylish variations.",
    desc: "Organize products by complex matrix variants (sizes, colors, materials), track seasonal trends, and easily handle multi-store stock transfers.",
    features: [
      "Size & color matrix system",
      "Seasonal trend analytics",
      "Cross-store inventory lookup"
    ]
  },
  {
    id: "beauty",
    name: "Beauty & Wellness",
    emoji: "💄",
    icon: Sparkles,
    tagline: "Appointment booking meets retail checkout.",
    desc: "Allow clients to book appointments online, assign therapists, track room capacities, and upsell beauty packages seamlessly.",
    features: [
      "Interactive booking calendar",
      "Staff shift & commission tracking",
      "Service package bundles"
    ]
  },
  {
    id: "pharmacies",
    name: "Pharmacies",
    emoji: "💊",
    icon: Pill,
    tagline: "Precise batches, safety, and expiration tracking.",
    desc: "Track prescription drug batches, manage expiration date alerts, organize medicinal categorizations, and maintain absolute compliance.",
    features: [
      "Batch and expiry tracking",
      "Compliance and prescription logs",
      "Quick search by compound names"
    ]
  },
  {
    id: "services",
    name: "Service Businesses",
    emoji: "🔧",
    icon: Wrench,
    tagline: "Invoicing, dispatching, and task automation.",
    desc: "Create professional professional service estimates, bill clients by hours or materials, manage technicians on-site, and capture client signatures.",
    features: [
      "Quote-to-invoice generator",
      "Time and material tracking",
      "Digital client sign-offs"
    ]
  }
];

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
            reliable technology. NexVio provides flexible solutions designed to
            support a wide range of industries while maintaining one connected
            platform.
          </p>
        </section>

        {/* --- 2️⃣ شبكة تبديل الصناعات التفاعلية الثورية (The Interactive Industry Matrix) --- */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* اليسار: محدد الصناعات الثمانية السريع (The Fast Grid Switcher) */}
            <div className="grid grid-cols-2 gap-3.5 lg:col-span-5">
              {INDUSTRIES_DATA.map((industry, index) => {
                const IconComponent = industry.icon;
                const isActive = activeTab === index;
                return (
                  <button
                    key={industry.id}
                    onClick={() => setActiveTab(index)}
                    className={`relative flex h-33.75 flex-col items-start justify-between rounded-[24px] border p-5 text-left transition-all duration-300 ${
                      isActive
                        ? "scale-102 border-[#FAF8F5] bg-[#FAF8F5] text-black shadow-[0_20px_40px_-15px_rgba(245,196,27,0.2)]"
                        : "border-white/10 bg-white/2 text-white hover:border-white/20 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex w-full items-center justify-between">
                      <div
                        className={`flex size-10 items-center justify-center rounded-xl transition-colors ${
                          isActive
                            ? "bg-black text-[#F5C41B]"
                            : "bg-white/5 text-white/75"
                        }`}
                      >
                        <IconComponent className="size-5 stroke-2" />
                      </div>
                      <span className="text-lg">{industry.emoji}</span>
                    </div>

                    <span className="mt-4 text-sm font-black tracking-wider uppercase">
                      {industry.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* اليمين: عرض تفاصيل الصناعة النشطة بحركة تفاعلية فائقة السلاسة */}
            <div className="h-full lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative space-y-8 overflow-hidden rounded-[36px] border border-white/10 bg-linear-to-b from-white/4 to-transparent p-8 backdrop-blur-md md:p-12"
                >
                  {/* تأثير بصري صغير متحرك */}
                  <div className="pointer-events-none absolute top-0 right-0 size-48 rounded-full bg-[#F5C41B]/5 blur-3xl" />

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

                  {/* قائمة الميزات المفتاحية الفرعية */}
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

                  <div className="pt-6">
                    <Link
                      href={
                        INDUSTRIES_DATA[activeTab].id === "restaurants"
                          ? "/solutions/restaurant"
                          : "/contact"
                      }
                      className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-xs font-black tracking-widest text-black uppercase transition-all duration-300 hover:scale-105 hover:bg-[#F5C41B]"
                    >
                      {INDUSTRIES_DATA[activeTab].id === "restaurants"
                        ? "Explore Restaurant Solution"
                        : "Configure for My Business"}
                      <ArrowUpRight className="size-4 stroke-[2.5]" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-white/1 px-4 py-24 sm:px-6 lg:px-8">
          <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-12">
            <div className="space-y-5 lg:col-span-5">
              <span className="rounded-full bg-[#F5C41B]/10 px-3 py-1 text-[11px] font-black tracking-widest text-[#F5C41B] uppercase">
                Built Around Your Business
              </span>
              <h2 className="text-3xl leading-none font-black tracking-tight uppercase sm:text-4xl md:text-5xl">
                Flexible Tech. <br /> Zero Complexity.
              </h2>
              <p className="text-sm leading-relaxed font-semibold text-neutral-400">
                Our platform adapts to different operational workflows, allowing
                every business to benefit from connected technology without
                increasing complexity.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
              {[
                {
                  title: "Seamless Experience",
                  desc: "Whether serving customers in hospitality, retail or service environments, businesses benefit from the same seamless experience."
                },
                {
                  title: "Intelligent Automation",
                  desc: "Automate manual tasks across menu sync, checkout flows, custom taxes, and client invoicing instantly."
                },
                {
                  title: "Real-Time Visibility",
                  desc: "One central hub showing sales across physical branches, mobile setups, or temporary events in microsecond speed."
                },
                {
                  title: "Unified Platform",
                  desc: "Maintain your master configurations of employee profiles, hardware configurations, and billing methods under one dashboard."
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="space-y-3 rounded-3xl border border-white/5 bg-white/2 p-6 transition-colors hover:border-white/10"
                >
                  <span className="font-mono text-xs font-bold text-[#F5C41B]">
                    INTEGRATION_0{idx + 1}
                  </span>
                  <h4 className="text-base font-black tracking-wider text-white uppercase">
                    {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-neutral-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 4️⃣ قسم الدعوة الختامي المبسط (Bold Final Call) --- */}
        <section className="mx-auto max-w-4xl px-4 py-24 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl leading-none font-black tracking-tight uppercase sm:text-5xl md:text-6xl">
            Ready to upgrade your workflow?
          </h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-neutral-400">
            Let&apos;s connect your devices, teams, and data. Explore a
            tailormade configuration built strictly for your operational style.
          </p>
          <div className="pt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border-b-2 border-[#F5C41B] pb-2 text-sm font-black tracking-widest text-[#F5C41B] uppercase transition-colors hover:border-white hover:text-white"
            >
              Consult with an Specialist
              <ChevronRight className="size-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
