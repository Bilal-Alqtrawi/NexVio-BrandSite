"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import type { Device } from "@/lib/devices";

interface DeviceFAQProps {
  device: Device;
}

function FAQItem({
  question,
  answer,
  isOpen,
  toggleOpen
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}) {
  return (
    <div className="border-brand-cream/15 border-b py-5">
      <button
        onClick={toggleOpen}
        className="flex w-full items-center justify-between text-left transition-colors duration-200"
      >
        <span className="text-brand-cream pr-4 text-base font-bold tracking-tight sm:text-lg">
          {question}
        </span>
        <div className="bg-brand-yellow/15 text-brand-yellow flex size-8 shrink-0 items-center justify-center rounded-full">
          {isOpen ? (
            <Minus className="size-4 stroke-3" />
          ) : (
            <Plus className="size-4 stroke-3" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-brand-cream/70 max-w-4xl pt-3 text-sm leading-relaxed font-medium sm:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function DeviceFAQ({ device }: DeviceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const dynamicFaqs =
    device?.faqs && device?.faqs?.length > 0
      ? device?.faqs
      : [
          {
            question: `What payment methods does ${device?.name} accept?`,
            answer: `The ${device?.name} accepts all major credit and debit cards, contactless smart payments (Apple Pay, Google Pay), secure chip & PIN transactions, and local QR code-based mobile wallets seamlessly.`
          },
          {
            question: `Is ${device?.name} suitable for high-volume retail environments?`,
            answer: `Absolutely. ${device?.name} is engineered with robust, enterprise-grade hardware components built to optimize throughput, reduce customer checkout lines, and withstand continuous daily operations.`
          },
          {
            question: `What are the primary connectivity options for ${device?.name}?`,
            answer: `It comes equipped with flexible communication arrays including stable high-speed cellular network support (4G LTE/5G depending on hardware variant), dual-band Wi-Fi, and built-in Bluetooth features.`
          }
        ];

  return (
    <section className="bg-brand-teal w-full px-6 py-20 font-sans md:py-28">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-10 space-y-2">
          <span className="text-brand-yellow text-xs font-black tracking-widest uppercase">
            Got Questions?
          </span>
          <h2 className="text-brand-cream text-3xl font-black tracking-tight uppercase sm:text-5xl">
            Frequently Asked
          </h2>
        </div>
        <div className="flex flex-col">
          {dynamicFaqs.map((faq, index) => (
            <FAQItem
              key={`faq-${index}`}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
