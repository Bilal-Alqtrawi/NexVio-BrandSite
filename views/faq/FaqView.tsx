"use client";

import { Accordion } from "@/components/ui/accordion";
import { useState } from "react";
import FaqCard from "./FaqCard";
import { faqData } from "./faq-data";

export default function FaqView() {
  const midIndex = Math.ceil(faqData.length / 2);
  const leftColumnFaqs = faqData.slice(0, midIndex);
  const rightColumnFaqs = faqData.slice(midIndex);

  const [openItems, setOpenItems] = useState<string[]>([
    leftColumnFaqs[0].id,
    rightColumnFaqs[0].id
  ]);

  return (
    <main className="py-12 text-neutral-900">
      <section className="container mx-auto mb-12 px-4 sm:px-8">
        <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <h1 className="shrink-0 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <span className="hidden rotate-15 transform text-7xl font-extralight text-black/60 sm:block">
            /
          </span>
          <p className="text-muted-foreground max-w-50 pt-1 text-xs leading-relaxed font-medium tracking-wide">
            Meal planning made easy: your questions, answered
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-8">
        <Accordion
          value={openItems}
          onValueChange={setOpenItems}
          className="grid grid-cols-1 gap-4 lg:grid-cols-2"
        >
          <div className="flex flex-col gap-4">
            {leftColumnFaqs.map((faq) => {
              const isOpen = openItems.includes(faq.id);
              return <FaqCard key={faq.id} isOpen={isOpen} item={faq} />;
            })}
          </div>

          <div className="flex flex-col gap-4">
            {rightColumnFaqs.map((faq) => {
              const isOpen = openItems.includes(faq.id);

              return <FaqCard key={faq.id} isOpen={isOpen} item={faq} />;
            })}
          </div>
        </Accordion>
      </section>
    </main>
  );
}
