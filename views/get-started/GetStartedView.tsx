"use client";

import { ArrowRight, Code2, Zap, LayoutTemplate } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { BsDeviceSsd } from "react-icons/bs";

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
    title: "Restaurant Solutions",
    desc: "Complete POS, payments, and business management for restaurants and cafés.",
    icon: <Code2 size={32} className="text-brand-yellow mb-4" />
  },
  {
    title: "Retail Solutions",
    desc: "Smart solutions to manage sales, inventory, customers, and daily operations.",
    icon: <Zap size={32} className="text-brand-yellow mb-4" />
  },
  {
    title: "Payment Solutions",
    desc: "Secure, seamless, and integrated payment acceptance for every business.",
    icon: <LayoutTemplate size={32} className="text-brand-yellow mb-4" />
  },
  {
    title: "Smart Commerce Devices",
    desc: "Powerful Android devices designed for speed, mobility, and reliability.",
    icon: <BsDeviceSsd size={32} className="text-brand-yellow mb-4" />
  }
];

export default function GetStartedView() {
  return (
    <main className="bg-brand-teal text-brand-cream min-h-screen w-full overflow-hidden px-6 py-12 font-sans lg:py-24">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUp}
        className="mb-20 text-center"
      >
        <div className="border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow mb-6 inline-block rounded-full border px-4 py-1.5 text-xs font-black tracking-widest uppercase">
          Let&apos;s Collaborate
        </div>
        <h1 className="text-brand-cream text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl">
          Let&apos;s Talk <span className="text-brand-yellow">Business</span>
        </h1>
        <p className="text-brand-cream/80 mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg lg:text-xl">
          Tell us about your business, and we&apos;ll help you find the right
          POS, payment, and business management solution.
        </p>
      </motion.section>

      {/* Services Cards with Staggered Animation */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="container mx-auto mb-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={fadeUp}
            className="group border-teal-light/20 bg-brand-cream/5 hover:border-brand-yellow relative rounded-3xl border p-8 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="from-brand-yellow/10 absolute inset-0 rounded-3xl bg-linear-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10">
              <span className="bg-brand-yellow/20 group-hover:bg-brand-yellow group-hover:text-brand-teal inline-flex size-14 items-center justify-center rounded-2xl transition-colors duration-300">
                {service.icon}
              </span>
              <h3 className="text-brand-cream mt-4 mb-2 text-xl font-bold tracking-tight">
                {service.title}
              </h3>
              <p className="text-brand-cream/70 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Form Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative mx-auto max-w-4xl"
      >
        {/* Glow Effect */}
        <div className="bg-brand-yellow/20 absolute -inset-4 rounded-[3rem] blur-3xl" />

        <div className="border-teal-light/20 bg-brand-cream/10 relative overflow-hidden rounded-[2.5rem] border p-8 shadow-2xl backdrop-blur-xl lg:p-14">
          <div className="bg-brand-yellow/10 absolute -top-24 -right-24 size-64 rounded-full blur-3xl" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-5">
            <div className="space-y-4 lg:col-span-2">
              <span className="text-brand-yellow text-xs font-black tracking-widest uppercase">
                Contact Us
              </span>
              <h2 className="text-brand-cream text-3xl font-black tracking-tight uppercase sm:text-4xl">
                Let’s start <br className="hidden lg:block" /> the conversation.
              </h2>
              <p className="text-brand-cream/80 text-sm leading-relaxed sm:text-base">
                Tell us about your business, and our team will help you find the
                right solution for your needs.
              </p>
            </div>

            <form className="space-y-4 lg:col-span-3">
              <input
                type="text"
                placeholder="Your Name / Company"
                className="bg-brand-teal/60 border-teal-light/30 text-brand-cream placeholder:text-brand-cream/40 focus:border-brand-yellow focus:ring-brand-yellow/20 w-full rounded-2xl border p-4 text-sm transition-all outline-none focus:ring-2"
              />
              <textarea
                placeholder="Tell us how we can help your business..."
                className="bg-brand-teal/60 border-teal-light/30 text-brand-cream placeholder:text-brand-cream/40 focus:border-brand-yellow focus:ring-brand-yellow/20 h-32 w-full resize-none rounded-2xl border p-4 text-sm transition-all outline-none focus:ring-2"
              />

              <button className="bg-brand-yellow text-brand-teal hover:bg-brand-yellow-light group relative flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-extrabold tracking-wide transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] sm:w-auto">
                <span>Request a Demo</span>
                <ArrowRight
                  className="transition-transform duration-300 group-hover:translate-x-1"
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
