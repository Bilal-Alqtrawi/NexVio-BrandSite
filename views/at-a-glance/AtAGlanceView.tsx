"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  Variants
} from "framer-motion";
import {
  Calendar,
  Users,
  Layers,
  Cloud,
  Smartphone,
  HeartHandshake,
  ArrowUpRight,
  Sparkles,
  ChevronRight,
  TrendingUp
} from "lucide-react";

// تم حفظ الأنيميشن كـ Variants صريحة لمنع مشاكل الـ Typescript بالـ Build
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// عداد الأرقام التفاعلي فائق الأداء
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1.2;
    const end = value;
    const totalFrames = 60 * duration;
    let frame = 0;

    const counterInterval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Formula: Ease Out Quad
      const currentCount = Math.round(end * (progress * (2 - progress)));

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(counterInterval);
      } else {
        setCount(currentCount);
      }
    }, 1000 / 60);

    return () => clearInterval(counterInterval);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function AtAGlanceView() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.98]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.92]);
  const bgGlowY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <main
      ref={containerRef}
      className="bg-brand-cream relative w-full overflow-hidden text-neutral-900"
    >
      {/* BACKGROUND GRAPHIC */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#e5e0d8_1px,transparent_1px),linear-gradient(to_bottom,#e5e0d8_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-35"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 70%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 70%, transparent 100%)"
          }}
        />
        <motion.div
          style={{ y: bgGlowY }}
          className="absolute top-[10%] left-1/2 size-[450px] -translate-x-1/2 rounded-full bg-[#F5C41B]/10 blur-[110px]"
        />
      </div>

      <div className="relative z-10">
        {/* SECTION 1: HERO & PURPOSE */}
        <section className="relative flex min-h-[85vh] items-center justify-center px-6 pt-32 pb-20 md:pt-40 md:pb-32">
          <motion.div
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="container mx-auto max-w-5xl text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-300/80 bg-white/70 px-4 py-1.5 text-xs font-bold tracking-widest text-[#D4A313] uppercase shadow-xs backdrop-blur-md"
            >
              <Sparkles className="size-3.5 text-[#F5C41B]" />
              NexVio at a Glance
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="text-4xl leading-[1.12] font-black tracking-tight text-neutral-950 uppercase sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Building Smarter Businesses <br />
              <span className="bg-gradient-to-r from-[#F5C41B] via-[#E4B210] to-[#C99A0B] bg-clip-text text-transparent">
                Through Connected Technology
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="mx-auto mt-8 max-w-3xl text-base leading-relaxed font-medium text-neutral-600 sm:text-lg md:text-xl"
            >
              For more than 16 years, the technology behind NexVio has helped
              businesses simplify operations, improve efficiency and embrace
              digital transformation. Today, more than 3,000 businesses rely on
              solutions built on this experience to manage sales, payments,
              inventory, customer relationships and daily operations through one
              connected platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12 flex flex-wrap justify-center gap-4"
            >
              {/* استخدام Link من next/link للأداء الفائق والانتقال اللحظي */}
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-neutral-950 px-7 py-4 text-sm font-bold tracking-wider text-white uppercase shadow-md transition-all duration-300 hover:translate-y-[-2px] hover:bg-neutral-800"
              >
                Get Started
                <ArrowUpRight className="size-4 stroke-[3] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* SECTION 2: EXPERIENCE & DATA STATS */}
        <section className="relative border-y border-neutral-200/80 bg-[#F6F2EB]/50 px-6 py-20 md:py-28">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="space-y-6 lg:col-span-7"
              >
                <span className="rounded-full border border-[#F5C41B]/10 bg-[#F5C41B]/5 px-3.5 py-1 text-xs font-black tracking-widest text-[#D4A313] uppercase">
                  Scale & Expertise
                </span>
                <h2 className="text-3xl leading-tight font-black tracking-tight text-neutral-950 uppercase sm:text-4xl md:text-5xl">
                  Designed for Businesses of All Sizes
                </h2>
                <div className="h-1 w-12 rounded-full bg-[#F5C41B]" />
                <p className="text-base leading-relaxed font-medium text-neutral-600 sm:text-lg">
                  NexVio combines intelligent software, smart commerce devices
                  and local expertise to help organizations operate with greater
                  visibility, efficiency and confidence.
                </p>
                <p className="text-base leading-relaxed font-medium text-neutral-600 sm:text-lg">
                  Whether you&apos;re managing a single location or a growing
                  multi-branch operation, NexVio provides a scalable solution
                  built around the way modern businesses work.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
                {/* 16+ Years */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:border-[#F5C41B]/40 hover:shadow-[0_15px_30px_rgba(245,196,27,0.04)]"
                >
                  <div className="absolute top-0 right-0 h-28 w-28 rounded-bl-full bg-[#F5C41B]/5 transition-all duration-500 group-hover:bg-[#F5C41B]/10" />
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 text-[#F5C41B] transition-transform duration-300 group-hover:scale-105">
                    <Calendar className="size-6" />
                  </div>
                  <div className="text-4xl font-black tracking-tight text-neutral-950 sm:text-5xl">
                    <Counter value={16} suffix="+" />
                  </div>
                  <h4 className="mt-2 text-base font-extrabold tracking-wide text-neutral-900 uppercase">
                    Years of Industry Experience
                  </h4>
                  <p className="mt-2 text-sm font-medium text-neutral-500">
                    Delivering business technology solutions since 2010.
                  </p>
                </motion.div>

                {/* 3000+ Businesses */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:border-[#F5C41B]/40 hover:shadow-[0_15px_30px_rgba(245,196,27,0.04)]"
                >
                  <div className="absolute top-0 right-0 h-28 w-28 rounded-bl-full bg-[#F5C41B]/5 transition-all duration-500 group-hover:bg-[#F5C41B]/10" />
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 text-[#F5C41B] transition-transform duration-300 group-hover:scale-105">
                    <Users className="size-6" />
                  </div>
                  <div className="text-4xl font-black tracking-tight text-neutral-950 sm:text-5xl">
                    <Counter value={3000} suffix="+" />
                  </div>
                  <h4 className="mt-2 text-base font-extrabold tracking-wide text-neutral-900 uppercase">
                    Businesses Served
                  </h4>
                  <p className="mt-2 text-sm font-medium text-neutral-500">
                    Supporting businesses across retail, hospitality and service
                    industries.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: KEY CAPABILITIES */}
        <section className="relative px-6 py-24 md:py-32">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-16 text-center md:mb-20">
              <span className="rounded-full border border-[#F5C41B]/10 bg-[#F5C41B]/5 px-3.5 py-1 text-xs font-black tracking-widest text-[#D4A313] uppercase">
                Key Facts
              </span>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-neutral-950 uppercase sm:text-4xl md:text-5xl">
                What Sets Us Apart
              </h2>
              <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#F5C41B]" />
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {/* Feature 1 */}
              <motion.div
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white/70 p-8 backdrop-blur-xs transition-all duration-300 hover:border-[#F5C41B]/35 hover:bg-white hover:shadow-xs"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#F5C41B]/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="mb-6 flex size-12 items-center justify-center rounded-xl border border-neutral-200 bg-white text-[#F5C41B] shadow-xs transition-transform duration-300 group-hover:scale-105">
                  <Layers className="size-6" />
                </div>
                <h4 className="text-lg font-bold tracking-wider text-neutral-900 uppercase transition-colors duration-300 group-hover:text-[#D4A313]">
                  One Unified Platform
                </h4>
                <p className="mt-3 text-xs leading-relaxed font-medium text-neutral-500 sm:text-sm">
                  Manage your business through one connected ecosystem.
                </p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white/70 p-8 backdrop-blur-xs transition-all duration-300 hover:border-[#F5C41B]/35 hover:bg-white hover:shadow-xs"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#F5C41B]/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="mb-6 flex size-12 items-center justify-center rounded-xl border border-neutral-200 bg-white text-[#F5C41B] shadow-xs transition-transform duration-300 group-hover:scale-105">
                  <Cloud className="size-6" />
                </div>
                <h4 className="text-lg font-bold tracking-wider text-neutral-900 uppercase transition-colors duration-300 group-hover:text-[#D4A313]">
                  Cloud-Based Tech
                </h4>
                <p className="mt-3 text-xs leading-relaxed font-medium text-neutral-500 sm:text-sm">
                  Access your business securely from anywhere.
                </p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white/70 p-8 backdrop-blur-xs transition-all duration-300 hover:border-[#F5C41B]/35 hover:bg-white hover:shadow-xs"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#F5C41B]/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="mb-6 flex size-12 items-center justify-center rounded-xl border border-neutral-200 bg-white text-[#F5C41B] shadow-xs transition-transform duration-300 group-hover:scale-105">
                  <Smartphone className="size-6" />
                </div>
                <h4 className="text-lg font-bold tracking-wider text-neutral-900 uppercase transition-colors duration-300 group-hover:text-[#D4A313]">
                  Smart Devices
                </h4>
                <p className="mt-3 text-xs leading-relaxed font-medium text-neutral-500 sm:text-sm">
                  Integrated POS and payment solutions in one device.
                </p>
              </motion.div>

              {/* Feature 4 */}
              <motion.div
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white/70 p-8 backdrop-blur-xs transition-all duration-300 hover:border-[#F5C41B]/35 hover:bg-white hover:shadow-xs"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#F5C41B]/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="mb-6 flex size-12 items-center justify-center rounded-xl border border-neutral-200 bg-white text-[#F5C41B] shadow-xs transition-transform duration-300 group-hover:scale-105">
                  <HeartHandshake className="size-6" />
                </div>
                <h4 className="text-lg font-bold tracking-wider text-neutral-900 uppercase transition-colors duration-300 group-hover:text-[#D4A313]">
                  Local UAE Support
                </h4>
                <p className="mt-3 text-xs leading-relaxed font-medium text-neutral-500 sm:text-sm">
                  Implementation, training and dedicated customer support.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: CALL TO ACTION */}
        <section className="relative flex items-center justify-center border-t border-neutral-200/60 bg-gradient-to-b from-transparent to-[#F6F2EB]/50 px-6 py-24 md:py-32">
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-[#F5C41B]/[0.03] blur-[100px]" />

          <div className="relative container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-[40px] border border-neutral-200/80 bg-white px-8 py-14 text-center shadow-[0_20px_50px_rgba(245,196,27,0.03)] md:p-20"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-300/80 bg-neutral-50 px-4 py-1.5 text-xs font-bold tracking-widest text-[#D4A313] uppercase shadow-xs">
                <TrendingUp className="size-3.5" />
                Empower your Business
              </div>

              <h2 className="text-3xl leading-tight font-black tracking-tight text-neutral-950 uppercase sm:text-4xl">
                Ready to take the next step <br />
                with NexVio?
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed font-medium text-neutral-500 sm:text-base">
                Discover how our connected ecosystem can streamline your
                workflow, automate inventory, and empower customer relationships
                today.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-neutral-950 px-6 py-3.5 text-sm font-bold tracking-wider text-white uppercase shadow-md transition-all duration-300 hover:translate-y-[-2px] hover:bg-neutral-800"
                >
                  Request a Demo
                  <ArrowUpRight className="size-4 stroke-[3] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
