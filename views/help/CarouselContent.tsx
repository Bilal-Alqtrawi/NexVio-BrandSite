"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CarouselItem } from "@/types";

interface CarouselContentProps {
  item: CarouselItem;
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  disabled: boolean;
}

export function CarouselContent({
  item,
  index,
  total,
  onPrev,
  onNext,
  disabled
}: CarouselContentProps) {
  const step = String(index + 1).padStart(2, "0");
  const totalStep = String(total).padStart(2, "0");

  return (
    <div className="z-10 flex min-h-85 flex-col justify-between bg-transparent p-6 sm:p-10 lg:col-span-5">
      <AnimatePresence mode="wait">
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="space-y-4"
        >
          <span className="block font-mono text-xl font-bold tracking-wider text-neutral-800">
            {step}
          </span>
          <h2 className="text-xl leading-tight font-black tracking-tight text-neutral-950 sm:text-3xl">
            {item.title}
          </h2>
          <p className="max-w-sm text-sm leading-relaxed font-normal text-neutral-600 ">
            {item.description}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center gap-4 pt-6">
        <Button
          onClick={onPrev}
          disabled={disabled}
          variant="outline"
          className="size-12 rounded-full border border-neutral-900/20 bg-white/60 text-neutral-800 shadow-xs transition-all duration-200 hover:bg-white active:scale-95 disabled:pointer-events-none disabled:opacity-50"
        >
          <ArrowLeft size={16} strokeWidth={2.5} />
        </Button>

        <Button
          onClick={onNext}
          disabled={disabled}
          className="bg-brand-yellow size-12 rounded-full border-none text-neutral-950 shadow-sm transition-all duration-200 hover:bg-yellow-400 active:scale-95 disabled:pointer-events-none disabled:opacity-50"
        >
          <ArrowRight size={16} strokeWidth={2.5} />
        </Button>
      </div>

      <div className="pt-6 font-mono text-sm font-bold tracking-widest text-neutral-800 select-none">
        {step}/{totalStep}
      </div>
    </div>
  );
}
