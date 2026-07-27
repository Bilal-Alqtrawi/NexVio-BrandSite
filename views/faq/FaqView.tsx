"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Accordion } from "@/components/ui/accordion";
import FaqCard from "./FaqCard";
import { faqData } from "./faq-data";
import { HelpCircle } from "lucide-react";
import Badge from "@/components/ui/Badge";

export default function FaqView() {
  const midIndex = Math.ceil(faqData.length / 2);
  const leftColumnFaqs = faqData.slice(0, midIndex);
  const rightColumnFaqs = faqData.slice(midIndex);

  const [openItems, setOpenItems] = useState<string[]>([
    leftColumnFaqs[0].id,
    rightColumnFaqs[0].id
  ]);

  return (
    <main className="bg-background text-foreground selection:bg-brand-yellow selection:text-brand-teal relative min-h-screen overflow-hidden py-16">
      {/* Dynamic Background Mesh */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size[5rem_5rem]"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 100%)"
          }}
        />
        <div className="bg-brand-yellow/10 absolute top-[5%] left-1/2 size-125 -translate-x-1/2 rounded-full blur-[160px]" />
        <div className="bg-brand-teal-light/10 absolute top-[35%] -left-40 size-100 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <section className="container mx-auto mb-16 px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-block"
          >
            <Badge icon={HelpCircle}>Support & Help</Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
          >
            <h1 className="text-foreground shrink-0 text-3xl font-black tracking-tight uppercase sm:text-5xl">
              Frequently Asked <br />
              <span className="from-brand-yellow-light via-brand-yellow to-brand-teal-light bg-linear-to-r bg-clip-text text-transparent">
                Questions
              </span>
            </h1>

            <span className="text-border hidden rotate-12 transform text-7xl font-extralight sm:block">
              /
            </span>

            <p className="text-muted-foreground max-w-xs pt-1 text-sm leading-relaxed font-medium tracking-wide">
              Everything you need to know about NexVio, answered clearly in one
              place.
            </p>
          </motion.div>
        </section>

        {/* Accordion Content */}
        <section className="container mx-auto px-4 sm:px-8">
          <Accordion
            value={openItems}
            onValueChange={setOpenItems}
            className="grid grid-cols-1 gap-6 lg:grid-cols-2"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              {leftColumnFaqs.map((faq) => {
                const isOpen = openItems.includes(faq.id);
                return <FaqCard key={faq.id} isOpen={isOpen} item={faq} />;
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              {rightColumnFaqs.map((faq) => {
                const isOpen = openItems.includes(faq.id);
                return <FaqCard key={faq.id} isOpen={isOpen} item={faq} />;
              })}
            </motion.div>
          </Accordion>
        </section>
      </div>
    </main>
  );
}
