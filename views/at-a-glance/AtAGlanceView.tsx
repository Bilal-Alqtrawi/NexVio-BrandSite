"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Users, Sparkles, TrendingUp, Building2 } from "lucide-react";

import LogoCloud from "../home/LogoCloud";
import { FEATURES_DATA, fadeInUp, staggerContainer } from "./data";
import { Counter } from "./Counter";
import { Badge, SectionHeader, ContactButton } from "./UIComponents";
import { MetricCard } from "./MetricCard";
import { FeatureCard } from "./FeatureCard";

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
      className="bg-brand-teal text-brand-cream relative w-full overflow-hidden font-sans"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#354a50_1px,transparent_1px),linear-gradient(to_bottom,#354a50_1px,transparent_1px)] bg-size-[6rem_6rem] opacity-20"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 70%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 70%, transparent 100%)"
          }}
        />
        <motion.div
          style={{ y: bgGlowY }}
          className="bg-brand-yellow/10 absolute top-[10%] left-1/2 size-112.5 -translate-x-1/2 rounded-full blur-[130px]"
        />
        <div className="bg-teal-light/10 absolute top-[40%] right-10 size-125 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative flex min-h-[80vh] items-center justify-center px-6 pt-24 pb-16 md:pt-28 md:pb-24">
          <motion.div
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="container mx-auto max-w-5xl text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-block"
            >
              <Badge icon={Sparkles}>Trusted by Growing Businesses</Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="text-brand-cream text-4xl leading-[1.15] font-black tracking-tight uppercase sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Building Long-Term Partnerships <br />
              <span className="from-brand-yellow via-brand-yellow-light to-teal-light bg-linear-to-r bg-clip-text text-transparent">
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
              className="text-teal-light mx-auto mt-6 max-w-3xl text-base leading-relaxed font-semibold sm:text-lg md:text-xl"
            >
              With over{" "}
              <span className="text-brand-cream font-black">16 years</span> of
              industry expertise and more than <span className="font-black text-brand-cream"> 3,000 businesses </span>{" "}
              served, NexVio delivers proven technology designed to support
              long-term business growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <ContactButton />
            </motion.div>
          </motion.div>
        </section>

        {/* METRICS SECTION */}
        <section className="bg-card/50 relative px-6 py-20 backdrop-blur-xs md:py-28">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="space-y-6 lg:col-span-6"
              >
                <SectionHeader
                  badgeText="Our Track Record"
                  title="Built on Experience Designed for Growth"
                  align="left"
                />
                <p className="text-teal-light text-base leading-relaxed font-semibold sm:text-lg">
                  With over 16 years of industry expertise and more than 3,000
                  businesses served, NexVio delivers proven technology designed
                  to support long-term business growth.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:col-span-6">
                <MetricCard
                  icon={Calendar}
                  value={<Counter value={16} suffix="+" />}
                  title="Years"
                  subtitle="Industry Experience"
                />
                <MetricCard
                  icon={Users}
                  value={<Counter value={3000} />}
                  title="Businesses"
                  subtitle="Powered by our experience"
                  isHighlight
                />
                <MetricCard
                  icon={Building2}
                  value="One Unified"
                  title="Connected Platform"
                  subtitle="Supporting Modern Businesses"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="relative px-6 py-24 md:py-32">
          <div className="container mx-auto max-w-6xl">
            <SectionHeader badgeText="Key Facts" title="Why We're Different" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {FEATURES_DATA.map((item, index) => (
                <FeatureCard key={index} {...item} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* LOGO MARQUEE */}
        <section className="bg-card relative overflow-hidden py-16">
          <div className="container mx-auto mb-10 max-w-6xl px-6 text-center">
            <span className="text-brand-yellow text-xs font-black tracking-widest uppercase">
              Our Customers
            </span>
            <h3 className="text-brand-cream mt-2 text-2xl font-black uppercase sm:text-3xl">
              Trusted by Brands Globally & Locally
            </h3>
          </div>

          <div className="relative flex w-full items-center overflow-x-hidden py-2">
            <LogoCloud />
            <div className="from-card via-card/80 pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-linear-to-r to-transparent" />
            <div className="from-card via-card/80 pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-linear-to-l to-transparent" />
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="to-card/50 relative flex items-center justify-center bg-linear-to-b from-transparent px-6 py-24 md:py-32">
          <div className="bg-brand-yellow/5 pointer-events-none absolute bottom-0 left-1/2 h-75 w-125 -translate-x-1/2 rounded-full blur-[120px]" />

          <div className="relative container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card relative overflow-hidden rounded-[40px] border border-white/10 px-8 py-14 text-center shadow-2xl md:p-20"
            >
              <div className="mb-6 inline-block">
                <Badge icon={TrendingUp}>Empower Your Business</Badge>
              </div>

              <p className="text-brand-yellow mb-4 text-xs font-black tracking-widest uppercase">
                Let&apos;s Build The Future Of Your Business
              </p>

              <h2 className="text-brand-cream text-3xl leading-tight font-black tracking-tight uppercase sm:text-4xl">
                Let&apos;s Build What&apos;s Next
              </h2>

              <p className="text-teal-light mx-auto mt-6 max-w-xl text-sm leading-relaxed font-semibold sm:text-base">
                Discover how NexVio can simplify operations, connect every part
                of your business, and support long-term growth through one
                intelligent platform.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <ContactButton padding="px-6 py-3.5" />
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
