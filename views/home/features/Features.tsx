"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";

const FeatureCard = dynamic(() => import("./FeatureCard"), { ssr: false });
const EcosystemFooterCard = dynamic(() => import("./EcosystemFooterCard"), {
  ssr: false
});

export default function Features() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="features"
      className="relative container mx-auto w-full space-y-14 overflow-hidden px-4 pt-16 pb-24 sm:px-6"
      viewport={{ once: true, margin: "-100px" }}
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ willChange: "transform, opacity" }}
    >
      <motion.div
        className="mx-auto max-w-3xl space-y-4 text-center"
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
        animate={
          shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
        }
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        style={{ willChange: "transform, opacity" }}
      >
        <span className="border-brand-yellow/30 text-brand-yellow inline-flex rounded-full border bg-transparent px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
          The NexVio Ecosystem
        </span>
        <h2 className="text-brand-cream text-2xl leading-[1.2] font-black tracking-tight sm:text-5xl">
          One Platform, Unlimited Possibilities
        </h2>
        <p className="text-teal-light mx-auto max-w-2xl text-sm leading-relaxed sm:text-base">
          Everything works together in one connected platform, giving you
          complete control over your business from a single place
        </p>
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
        animate={
          shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
        }
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        style={{ willChange: "transform, opacity" }}
      >
        <EcosystemFooterCard />
      </motion.div>

      <motion.div
        className="flex w-full snap-x snap-mandatory scrollbar-none gap-6 overflow-x-auto pb-6 sm:grid sm:grid-cols-2 sm:overflow-x-visible sm:pb-0 lg:grid-cols-3"
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
        animate={
          shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
        }
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        style={{ willChange: "transform, opacity" }}
      >
        {[
          {
            id: 1,
            title: "Business Intelligence",
            desc: "Access live dashboards, business reports and performance insights to support faster and more informed business decisions.",
            href: "/solutions/business-intelligence",
            accentColor: "rgba(128, 166, 175, 0.35)",
            variant: "default"
          },
          {
            id: 2,
            title: "Inventory Management",
            desc: "Track inventory in real time and maintain complete visibility across all your products and locations.",
            href: "/capabilities",
            accentColor: "rgba(25, 45, 52, 0.2)",
            variant: "inventory"
          },
          {
            id: 3,
            title: "Smart POS",
            desc: "Manage sales quickly through a fast, intuitive and user-friendly Point of Sale system designed for modern businesses.",
            href: "/capabilities",
            accentColor: "rgba(254, 223, 17, 0.55)",
            variant: "highlight"
          },
          {
            id: 4,
            title: "Employee Management",
            desc: "Monitor employee activity, permissions and operational performance through one centralized platform.",
            href: "/capabilities",
            accentColor: "rgba(128, 166, 175, 0.35)",
            variant: "default"
          },
          {
            id: 5,
            title: "Integrated Payments",
            desc: "Accept secure electronic payments directly from the same smart device without switching between different systems.",
            href: "/capabilities",
            accentColor: "rgba(128, 166, 175, 0.35)",
            variant: "default"
          },
          {
            id: 6,
            title: "Customer Relationship Management",
            desc: "Build stronger customer relationships by managing customer profiles, purchase history and engagement in one place.",
            href: "/solutions/crm",
            accentColor: "rgba(254, 223, 17, 0.45)",
            variant: "highlight"
          }
        ].map((feat) => (
          <FeatureCard key={feat.id} feat={feat} />
        ))}
      </motion.div>
    </motion.section>
  );
}
