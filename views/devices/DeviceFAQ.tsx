"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQ_DATA = [
  {
    id: 1,
    question: "What payment methods does the Nova 55F accept?",
    answer:
      "The Nova 55F accepts all major credit and debit cards, contactless payments (Apple Pay, Google Pay), chip & PIN, magstripe, and QR code-based mobile wallets."
  },
  {
    id: 2,
    question: "What size is the display screen?",
    answer:
      "It features a vibrant, high-definition 5.5-inch color touchscreen display optimized for easy viewing and outdoor readability."
  },
  {
    id: 3,
    question: "Is the Nova 55F truly mobile?",
    answer:
      "Yes, it is fully portable equipped with long-lasting battery life, 4G LTE, Wi-Fi, and fallback Bluetooth connectivity for standalone operation anywhere."
  },
  {
    id: 4,
    question: "Does the device have a built-in printer?",
    answer:
      "Yes, it includes a high-speed thermal graphics printer built directly into the top of the chassis for instant receipt issuance."
  },
  {
    id: 5,
    question: "Can I scan barcodes and QR codes with this device?",
    answer:
      "Absolutely. The device features an integrated professional camera-based scanner designed to read 1D and 2D barcodes/QR codes instantly."
  },
  {
    id: 6,
    question: "What POS features are included?",
    answer:
      "It comes with full inventory management, real-time sales analytics, employee tracking, and secure cloud sync right out of the box."
  },
  {
    id: 7,
    question: "Does it support customer loyalty programs?",
    answer:
      "Yes, you can configure custom digital rewards, point tracking, and targeted promotional gift cards directly on the terminal."
  },
  {
    id: 8,
    question: "Can I access my business data remotely?",
    answer:
      "Yes, all transaction and business data is synced securely to your cloud dashboard accessible from any browser globally."
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
            <Minus className="size-4 stroke-[3]" />
          ) : (
            <Plus className="size-4 stroke-[3]" />
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

export default function DeviceFAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="w-full bg-white px-6 py-20 md:py-28">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-10 text-3xl font-black tracking-tight text-neutral-950 uppercase sm:text-5xl">
          FAQ
        </h2>
        <div className="flex flex-col">
          {FAQ_DATA.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              toggleOpen={() => setOpenId(openId === faq.id ? null : faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
