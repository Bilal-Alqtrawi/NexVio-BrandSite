"use client";

import { useRef, useEffect, useState } from "react";
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
  TrendingUp,
  Building2
} from "lucide-react";

const CUSTOMER_LOGOS = [
  { name: "Robot", src: "/logos/robot.svg" },
  { name: "Furla", src: "/logos/furla.svg" },
  { name: "Kitan", src: "/logos/kitan.svg" },
  { name: "Golf Group", src: "/logos/golf-group.svg" },
  { name: "Natasha Denona", src: "/logos/natasha.svg" },
  { name: "April", src: "/logos/april.svg" },
  { name: "LTech", src: "/logos/ltech.svg" },
  { name: "Soho", src: "/logos/soho.svg" },
  { name: "Htern", src: "/logos/htern.svg" },
  { name: "Tiba", src: "/logos/tiba.svg" },
  { name: "Express", src: "/logos/express.svg" }
];

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

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isInView || !mounted) return;

    const duration = 1.2;
    const end = value;
    const totalFrames = 60 * duration;
    let frame = 0;

    const counterInterval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(end * (progress * (2 - progress)));

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(counterInterval);
      } else {
        setCount(currentCount);
      }
    }, 1000 / 60);

    return () => clearInterval(counterInterval);
  }, [isInView, value, mounted]);

  // صياغة ثابتة تمنع اختلاف الـ SSR عن الـ Client ريثما يكتمل الـ mounting
  if (!mounted) {
    return <span className="tabular-nums">0{suffix}</span>;
  }

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString("en-US")}
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
      className="bg-brand-cream relative w-full overflow-hidden font-sans text-neutral-900"
    >
      {/* Background Grids & Glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#e5e0d8_1px,transparent_1px),linear-gradient(to_bottom,#e5e0d8_1px,transparent_1px)] bg-size-[6rem_6rem] opacity-35"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 70%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 70%, transparent 100%)"
          }}
        />
        <motion.div
          style={{ y: bgGlowY }}
          className="absolute top-[10%] left-1/2 size-112.5 -translate-x-1/2 rounded-full bg-[#F5C41B]/10 blur-[110px]"
        />
      </div>

      <div className="relative z-10">
        {/* SECTION 1: HERO & PURPOSE (Made Closer to Header by reducing padding-top) */}
        <section className="relative flex min-h-[80vh] items-center justify-center px-6 pt-24 pb-16 md:pt-28 md:pb-24">
          <motion.div
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="container mx-auto max-w-5xl text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-300/80 bg-white/70 px-4 py-1.5 text-xs font-bold tracking-widest text-[#D4A313] uppercase shadow-xs backdrop-blur-md"
            >
              <Sparkles className="size-3.5 text-[#F5C41B]" />
              Trusted by Growing Businesses
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="text-4xl leading-[1.15] font-black tracking-tight text-neutral-950 uppercase sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Building Long-Term Partnerships <br />
              <span className="bg-linear-to-r from-[#F5C41B] via-[#E4B210] to-[#C99A0B] bg-clip-text text-transparent">
                Through Proven Consistency
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
              className="mx-auto mt-6 max-w-3xl text-base leading-relaxed font-medium text-neutral-600 sm:text-lg md:text-xl"
            >
              With over 16 years of industry expertise and more than 3,000
              businesses served, NexVio delivers proven technology designed to
              support long-term business growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-neutral-950 px-7 py-4 text-sm font-bold tracking-wider text-white uppercase shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800"
              >
                Contact us
                <ArrowUpRight className="size-4 stroke-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* SECTION 2: EXPERIENCE METRICS */}
        <section className="relative border-y border-neutral-200/80 bg-[#F6F2EB]/50 px-6 py-20 md:py-28">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="space-y-6 lg:col-span-6"
              >
                <span className="rounded-full border border-[#F5C41B]/10 bg-[#F5C41B]/5 px-3.5 py-1 text-xs font-black tracking-widest text-[#D4A313] uppercase">
                  Our Track Record
                </span>
                <h2 className="text-3xl leading-tight font-black tracking-tight text-neutral-950 uppercase sm:text-4xl md:text-5xl">
                  Built on Experience Designed for Growth
                </h2>
                <div className="h-1 w-12 rounded-full bg-[#F5C41B]" />
                <p className="text-base leading-relaxed font-medium text-neutral-600 sm:text-lg">
                  With over 16 years of industry expertise and more than 3,000
                  businesses served, NexVio delivers proven technology designed
                  to support long-term business growth.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:col-span-6">
                <motion.div
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:border-[#F5C41B]"
                >
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg border border-neutral-100 bg-neutral-50 text-[#F5C41B]">
                    <Calendar className="size-5" />
                  </div>
                  <div className="text-3xl font-black tracking-tight text-neutral-950">
                    <Counter value={16} suffix="+" />
                  </div>
                  <h4 className="mt-1 text-xs font-bold tracking-wide text-neutral-900 uppercase">
                    16+ Years
                  </h4>
                  <p className="mt-1 text-[11px] font-medium text-neutral-500">
                    Industry Experience
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:border-[#F5C41B]"
                >
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg border border-neutral-100 bg-neutral-50 text-[#F5C41B]">
                    <Users className="size-5" />
                  </div>
                  <div className="text-3xl font-black tracking-tight text-[#D4A313]">
                    <Counter value={3000} />
                  </div>
                  <h4 className="mt-1 text-xs font-bold tracking-wide text-neutral-900 uppercase">
                    3000 Businesses
                  </h4>
                  <p className="mt-1 text-[11px] font-medium text-neutral-500">
                    Powered by our experience
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:border-[#F5C41B]"
                >
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg border border-neutral-100 bg-neutral-50 text-[#F5C41B]">
                    <Building2 className="size-5" />
                  </div>
                  <div className="mt-1 text-xl leading-tight font-black tracking-tight text-neutral-950">
                    One Unified
                  </div>
                  <h4 className="mt-1 text-xs font-bold tracking-wide text-neutral-900 uppercase">
                    Connected Platform
                  </h4>
                  <p className="mt-1 text-[11px] font-medium text-neutral-500">
                    Supporting Modern Businesses
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHAT SETS US APART */}
        <section className="relative px-6 py-24 md:py-32">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-16 text-center md:mb-20">
              <span className="rounded-full border border-[#F5C41B]/10 bg-[#F5C41B]/5 px-3.5 py-1 text-xs font-black tracking-widest text-[#D4A313] uppercase">
                Key Facts
              </span>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-neutral-950 uppercase sm:text-4xl md:text-5xl">
                Why We&apos;re Different
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
              {[
                {
                  icon: Layers,
                  title: "One Unified Platform",
                  desc: "Everything your business needs in one connected ecosystem."
                },
                {
                  icon: Cloud,
                  title: "Cloud-Based Platform",
                  desc: "Access your business anytime, anywhere."
                },
                {
                  icon: Smartphone,
                  title: "Smart Devices",
                  desc: "Integrated POS and payment solutions in one device."
                },
                {
                  icon: HeartHandshake,
                  title: "Local UAE Support",
                  desc: "Local implementation, training, and ongoing support."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white/70 p-8 backdrop-blur-xs transition-all duration-300 hover:border-[#F5C41B]/35 hover:bg-white hover:shadow-xs"
                >
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-[#F5C41B]/2 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="mb-6 flex size-12 items-center justify-center rounded-xl border border-neutral-200 bg-white text-[#F5C41B] shadow-xs transition-transform duration-300 group-hover:scale-105">
                    <item.icon className="size-6" />
                  </div>
                  <h4 className="text-lg font-bold tracking-wider text-neutral-900 uppercase transition-colors duration-300 group-hover:text-[#D4A313]">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-xs leading-relaxed font-medium text-neutral-500 sm:text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: THE LOGOCLOUDS STYLE INFINITE MARQUEE */}
        <section className="relative overflow-hidden border-t border-neutral-200/60 bg-white py-16">
          <div className="container mx-auto mb-10 max-w-6xl px-6 text-center">
            <span className="text-xs font-black tracking-widest text-[#D4A313] uppercase">
              Our Customers
            </span>
            <h3 className="mt-2 text-2xl font-black text-neutral-950 uppercase sm:text-3xl">
              Trusted by Brands Globally & Locally
            </h3>
          </div>

          {/* LogoClouds Style Animation Loop */}
          <div className="relative flex w-full items-center overflow-x-hidden py-2">
            <div className="animate-marquee flex min-w-full flex-row items-center gap-16 whitespace-nowrap">
              {[...CUSTOMER_LOGOS, ...CUSTOMER_LOGOS, ...CUSTOMER_LOGOS].map(
                (logo, i) => (
                  <div
                    key={i}
                    className="relative inline-flex h-12 w-36 shrink-0 items-center justify-center px-4 opacity-45 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                  >
                    <span className="font-mono text-sm font-black tracking-wider text-neutral-400 select-none hover:text-neutral-900">
                      {logo.name}
                    </span>
                  </div>
                )
              )}
            </div>

            {/* Fading Edge Masks */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white via-white/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white via-white/80 to-transparent" />
          </div>
        </section>

        {/* SECTION 5: CALL TO ACTION */}
        <section className="relative flex items-center justify-center border-t border-neutral-200/60 bg-linear-to-b from-transparent to-[#F6F2EB]/50 px-6 py-24 md:py-32">
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-75 w-125 -translate-x-1/2 rounded-full bg-[#F5C41B]/3 blur-[100px]" />

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
                Empower Your Business
              </div>

              <p className="mb-4 text-xs font-black tracking-widest text-[#D4A313] uppercase">
                Let&apos;s Build The Future Of Your Business
              </p>

              <h2 className="text-3xl leading-tight font-black tracking-tight text-neutral-950 uppercase sm:text-4xl">
                Let&apos;s Build What&apos;s Next
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed font-medium text-neutral-500 sm:text-base">
                Discover how NexVio can simplify operations, connect every part
                of your business, and support long-term growth through one
                intelligent platform.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-neutral-950 px-6 py-3.5 text-sm font-bold tracking-wider text-white uppercase shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800"
                >
                  Contact us
                  <ArrowUpRight className="size-4 stroke-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
  