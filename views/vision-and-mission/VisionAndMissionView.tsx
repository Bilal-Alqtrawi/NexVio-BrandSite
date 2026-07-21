"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import {
  Target,
  Eye,
  Compass,
  Heart,
  Sparkles,
  Zap,
  ShieldCheck,
  Handshake,
  ArrowUpRight,
  Quote
} from "lucide-react";
import Link from "next/link";

interface CoreValue {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CORE_VALUES: CoreValue[] = [
  {
    icon: <Heart className="size-6 text-[#F5C41B]" />,
    title: "Customer Success",
    description: "Our customers' success is the foundation of everything we do."
  },
  {
    icon: <Sparkles className="size-6 text-[#F5C41B]" />,
    title: "Innovation",
    description:
      "We continuously evolve our technology to meet the changing needs of modern businesses."
  },
  {
    icon: <Zap className="size-6 text-[#F5C41B]" />,
    title: "Simplicity",
    description:
      "Powerful solutions should always be intuitive, efficient and easy to use."
  },
  {
    icon: <ShieldCheck className="size-6 text-[#F5C41B]" />,
    title: "Reliability",
    description:
      "Businesses deserve technology they can trust every single day."
  },
  {
    icon: <Handshake className="size-6 text-[#F5C41B]" />,
    title: "Partnership",
    description:
      "We build long-term relationships by supporting our customers beyond implementation."
  }
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

export default function VisionAndMissionView() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.98]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.92]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <main
      ref={containerRef}
      className="bg-brand-cream relative w-full overflow-hidden text-neutral-900"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#e5e0d8_1px,transparent_1px),linear-gradient(to_bottom,#e5e0d8_1px,transparent_1px)] bg-size-[5rem_5rem] opacity-40"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 50% at 50% 0%, #000 60%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 0%, #000 60%, transparent 100%)"
          }}
        />

        <motion.div
          style={{ y: glowY }}
          className="absolute top-[8%] left-1/2 size-112.5 -translate-x-1/2 rounded-full bg-[#F5C41B]/10 blur-[100px]"
        />
      </div>

      <div className="relative z-10">
        <section className="relative flex min-h-[85vh] items-center justify-center px-6 pt-28 pb-20 md:pt-20 md:pb-32">
          <motion.div
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="container mx-auto max-w-5xl text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-300/85 bg-white/70 px-4 py-1.5 text-xs font-bold tracking-widest text-[#D4A313] uppercase shadow-xs backdrop-blur-md"
            >
              <Compass className="size-3.5 text-[#F5C41B]" />
              Our Purpose
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
              Empowering Businesses <br />
              <span className="bg-linear-to-r from-[#F5C41B] via-[#E4B210] to-[#C99A0B] bg-clip-text text-transparent">
                Through Connected Tech
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
              At NexVio, we believe technology should make running a business
              easier—not more complicated. Our purpose is to simplify daily
              operations by connecting every essential business function into
              one intelligent platform. From sales and payments to inventory,
              customer management and business insights, everything works
              together to help businesses operate more efficiently and make
              better decisions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-neutral-950 px-6 py-3.5 text-sm font-bold tracking-wider text-white uppercase shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800"
              >
                Contact us
                <ArrowUpRight className="size-4 stroke-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        <section className="relative border-y border-neutral-200/80 bg-[#F6F2EB]/50 px-6 py-20 md:py-28">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-[32px] border border-neutral-200/85 bg-white p-8 transition-all duration-300 hover:border-[#F5C41B]/40 hover:shadow-[0_15px_35px_rgba(245,196,27,0.05)] sm:p-10"
              >
                <div className="absolute top-0 right-0 h-40 w-40 rounded-bl-full bg-[#F5C41B]/5 transition-all duration-500 group-hover:bg-[#F5C41B]/10" />
                <div className="mb-6 flex size-14 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 text-[#F5C41B] transition-transform duration-500 group-hover:scale-110">
                  <Eye className="size-6" />
                </div>
                <h3 className="text-2xl font-black tracking-wider text-neutral-900 uppercase transition-colors duration-300 group-hover:text-[#D4A313]">
                  Our Vision
                </h3>
                <p className="mt-4 text-base leading-relaxed font-medium text-neutral-600">
                  To shape the future of connected commerce across the Middle
                  East through intelligent technology that empowers every
                  business.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-[32px] border border-neutral-200/85 bg-white p-8 transition-all duration-300 hover:border-[#F5C41B]/40 hover:shadow-[0_15px_35px_rgba(245,196,27,0.05)] sm:p-10"
              >
                <div className="absolute top-0 right-0 h-40 w-40 rounded-bl-full bg-[#F5C41B]/5 transition-all duration-500 group-hover:bg-[#F5C41B]/10" />
                <div className="mb-6 flex size-14 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 text-[#F5C41B] transition-transform duration-500 group-hover:scale-110">
                  <Target className="size-6" />
                </div>
                <h3 className="text-2xl font-black tracking-wider text-neutral-900 uppercase transition-colors duration-300 group-hover:text-[#D4A313]">
                  Our Mission
                </h3>
                <p className="mt-4 text-base leading-relaxed font-medium text-neutral-600">
                  To simplify business operations through one intelligent
                  platform that connects commerce, payments, and business
                  management into one seamless experience.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative px-6 py-24 md:py-32">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-16 text-center md:mb-20">
              <span className="rounded-full border border-[#F5C41B]/10 bg-[#F5C41B]/5 px-3.5 py-1 text-xs font-black tracking-widest text-[#D4A313] uppercase">
                The Pillars of NexVio
              </span>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-neutral-950 uppercase sm:text-4xl md:text-5xl">
                Our Core Values
              </h2>
              <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#F5C41B]" />
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {CORE_VALUES.map((value, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white/70 p-8 backdrop-blur-xs transition-all duration-300 hover:border-[#F5C41B]/35 hover:bg-white hover:shadow-xs"
                >
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-[#F5C41B]/2 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="mb-6 flex size-12 items-center justify-center rounded-xl border border-neutral-200 bg-white text-[#F5C41B] shadow-xs transition-transform duration-300 group-hover:scale-105">
                    {value.icon}
                  </div>

                  <h4 className="text-lg font-bold tracking-wider text-neutral-900 uppercase transition-colors duration-300 group-hover:text-[#D4A313]">
                    {value.title}
                  </h4>

                  <p className="mt-3 text-xs leading-relaxed font-medium text-neutral-500 sm:text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="relative flex items-center justify-center border-t border-neutral-200/60 bg-linear-to-b from-transparent to-[#F6F2EB]/50 px-6 py-24 md:py-32">
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-75 w-125 -translate-x-1/2 rounded-full bg-[#F5C41B]/3 blur-[100px]" />

          <div className="relative container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-[40px] border border-neutral-200/80 bg-white p-10 text-center shadow-[0_20px_50px_rgba(245,196,27,0.03)] md:p-16"
            >
              <div className="pointer-events-none absolute top-8 left-8 text-[#F5C41B]/5">
                <Quote className="size-20 rotate-180 stroke-[1.5]" />
              </div>

              <span className="relative z-10 rounded-full border border-[#F5C41B]/10 bg-[#F5C41B]/5 px-4.5 py-1.5 text-xs font-black tracking-widest text-[#D4A313] uppercase">
                Our Promise
              </span>

              <blockquote className="relative z-10 mx-auto mt-8 max-w-2xl text-xl leading-relaxed font-extrabold text-neutral-900 md:text-3xl">
                &ldquo;We build technology that simplifies today and empowers
                tomorrow.&rdquo;
              </blockquote>

              <div className="relative z-10 mx-auto mt-8 h-1 w-10 rounded-full bg-linear-to-r from-[#F5C41B] to-[#E4B210]" />
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
