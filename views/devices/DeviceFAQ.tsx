"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItemData {
  question: string;
  answer: string;
}

interface DeviceFAQProps {
  faqs?: FAQItemData[];
}

const DEFAULT_FAQ_DATA: FAQItemData[] = [
  {
    question: "What payment methods does this device accept?",
    answer:
      "It accepts all major credit and debit cards, contactless payments (Apple Pay, Google Pay), chip & PIN, magstripe, and QR code-based mobile wallets."
  },
  {
    question: "What size is the display screen?",
    answer:
      "It features a vibrant, high-definition optimized color touchscreen display designed for easy viewing and outdoor readability."
  },
  {
    question: "Is the device truly mobile?",
    answer:
      "Yes, it is fully portable equipped with long-lasting battery life, stable cellular network support, Wi-Fi, and standalone operation anywhere."
  }
];

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

export default function DeviceFAQ({ faqs }: DeviceFAQProps) {
  // هنا نستخدم الـ index (الرقم الترتيبي) لتحديد العنصر المفتوح بدلاً من الـ id
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const displayData = faqs && faqs.length > 0 ? faqs : DEFAULT_FAQ_DATA;

  return (
    <section className="w-full bg-white px-6 py-20 md:py-28">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-10 text-3xl font-black tracking-tight text-neutral-950 uppercase sm:text-5xl">
          FAQ
        </h2>
        <div className="flex flex-col">
          {displayData.map((faq, index) => (
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
