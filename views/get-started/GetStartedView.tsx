"use client";

import { ArrowRight, Code2, Zap, LayoutTemplate } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
} as Variants;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
} as Variants;

const services = [
  {
    title: "React/Next.js App",
    desc: "High-performance web apps built for massive scale.",
    icon: <Code2 size={32} className="text-brand-yellow mb-4" />
  },
  {
    title: "Front-end Optimization",
    desc: "Lightning-fast loading times and spotless clean code.",
    icon: <Zap size={32} className="text-brand-yellow mb-4" />
  },
  {
    title: "Custom UI/UX",
    desc: "Pixel-perfect, engaging interfaces using Tailwind CSS.",
    icon: <LayoutTemplate size={32} className="text-brand-yellow mb-4" />
  }
];

export default function GetStartedView() {
  return (
    <main className="container mx-auto overflow-hidden px-6 py-12 lg:py-24">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUp}
        className="mb-20 text-center"
      >
        <div className="border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow mb-6 inline-block rounded-full border px-4 py-1.5 text-sm font-medium tracking-wide">
          Let's Collaborate
        </div>
        <h1 className="bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent lg:text-7xl">
          Build Something <br className="hidden md:block" /> Exceptional.
        </h1>
        <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg leading-relaxed lg:text-xl">
          You're one step away from high-performance, clean-coded web solutions.
          Select the service that fits your vision, and let's get to work.
        </p>
      </motion.section>

      {/* Services Cards with Staggered Animation */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mb-24 grid gap-8 md:grid-cols-3"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={fadeUp}
            className="group relative rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* تأثير إضاءة خلفية عند الـ Hover */}
            <div className="from-brand-yellow/5 absolute inset-0 rounded-3xl bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

            <div className="relative z-10">
              {service.icon}
              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="leading-relaxed text-gray-500">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Form Section with Parallax-like floating feel */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative mx-auto mt-16 max-w-4xl"
      >
        {/* Glow Effect */}
        <div className="from-brand-yellow/30 absolute -inset-4 rounded-[3rem] bg-gradient-to-r to-orange-400/20 opacity-60 blur-2xl"></div>

        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/70 p-8 shadow-2xl backdrop-blur-2xl lg:p-16">
          {/* دائرة ديكور في الخلفية */}
          <div className="bg-brand-yellow/10 absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-5">
            {/* النص الجانبي للنموذج */}
            <div className="space-y-6 lg:col-span-2">
              <h2 className="text-4xl font-extrabold text-gray-900">
                Let’s start <br /> the conversation.
              </h2>
              <p className="text-lg text-gray-500">
                Fill out the form and I'll get back to you within 24 hours with
                a solid plan.
              </p>
            </div>

            {/* النموذج الفعلي */}
            <form className="space-y-5 lg:col-span-3">
              <input
                type="text"
                placeholder="Your Name or Company"
                className="focus:ring-brand-yellow w-full rounded-2xl border-0 bg-white/80 p-5 text-gray-900 shadow-sm ring-1 ring-gray-200 transition-all outline-none ring-inset focus:ring-2 focus:ring-inset"
              />
              <textarea
                placeholder="Tell me about your project goals..."
                className="focus:ring-brand-yellow h-32 w-full resize-none rounded-2xl border-0 bg-white/80 p-5 text-gray-900 shadow-sm ring-1 ring-gray-200 transition-all outline-none ring-inset focus:ring-2 focus:ring-inset"
              />

              <button className="group hover:shadow-brand-yellow/20 relative flex w-full items-center justify-center gap-3 rounded-full bg-gray-900 px-8 py-5 text-base font-semibold text-white transition-all hover:scale-[1.02] hover:bg-black hover:shadow-lg active:scale-[0.98] lg:w-auto">
                <span>Send Request</span>
                <ArrowRight
                  className="transition-transform group-hover:translate-x-1"
                  size={18}
                />
              </button>
            </form>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
