"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { ArrowDown, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

interface FaqItemData {
  id: string;
  question: string;
  answer: string;
}

const FaqCard = ({ item, isOpen }: { item: FaqItemData; isOpen: boolean }) => (
  <AccordionItem
    value={item.id}
    className={`group border-border/50 bg-card/40 overflow-hidden rounded-3xl border px-6 py-2 backdrop-blur-md transition-all duration-300 ${
      isOpen
        ? "border-brand-yellow/50 bg-card shadow-brand-yellow/5 shadow-xl"
        : "hover:border-border hover:bg-card/70"
    }`}
  >
    <AccordionTrigger className="flex items-start justify-start gap-4 py-4 hover:no-underline [&>svg]:hidden">
      <div
        className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
          isOpen
            ? "border-brand-yellow bg-brand-yellow text-brand-teal scale-105"
            : "border-border bg-background/50 text-muted-foreground group-hover:border-brand-yellow/50 group-hover:text-brand-yellow"
        }`}
      >
        {!isOpen ? (
          <ArrowUp className="size-4" strokeWidth={2.5} />
        ) : (
          <ArrowDown className="size-4" strokeWidth={2.5} />
        )}
      </div>
      <h3 className="text-card-foreground group-hover:text-brand-yellow text-left font-bold transition-colors duration-300">
        {item.question}
      </h3>
    </AccordionTrigger>
    <AccordionContent className="text-muted-foreground pb-5 pl-12 leading-relaxed font-medium">
      {item.answer}
    </AccordionContent>
  </AccordionItem>
);

export default FaqCard;
