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
    <div className="border-b border-neutral-200 py-5">
      <button
        onClick={toggleOpen}
        className="flex w-full items-center justify-between text-left transition-colors duration-200"
      >
        <span className="pr-4 text-base font-bold tracking-tight text-neutral-950 sm:text-lg">
          {question}
        </span>
        <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#FFFBE6] text-[#FFD700]">
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
            <p className="max-w-4xl pt-3 text-sm leading-relaxed font-medium text-neutral-600 sm:text-base">
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

  // توليد أسئلة ديناميكية ذكية مخصصة باسم الجهاز الحالي في حال عدم وجود faqs ثابتة له
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
    <section className="w-full bg-white px-6 py-20 md:py-28">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-10 text-3xl font-black tracking-tight text-neutral-950 uppercase sm:text-5xl">
          FAQ
        </h2>
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
