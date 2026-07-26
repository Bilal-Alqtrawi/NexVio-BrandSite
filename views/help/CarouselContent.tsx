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
    <div className="z-10 flex min-h-85 flex-col justify-between bg-transparent">
      <AnimatePresence mode="wait">
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="space-y-4"
        >
          {/* رقم الخطوة بالأصفر الفاقع */}
          <span className="text-brand-yellow block font-mono text-2xl font-black tracking-wider">
            {step}
          </span>
          {/* العنوان باللون الكرييمي المشرق */}
          <h2 className="text-brand-cream text-2xl leading-tight font-black tracking-tight uppercase sm:text-3xl lg:text-4xl">
            {item.title}
          </h2>
          {/* الوصف باللون الأبيض بنسبة شفافية خفيفة لمظهر راقي */}
          <p className="text-brand-cream/80 max-w-md text-sm leading-relaxed font-medium sm:text-base">
            {item.description}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="space-y-6 pt-8">
        <div className="flex items-center gap-4">
          <Button
            onClick={onPrev}
            disabled={disabled}
            variant="outline"
            className="border-teal-light/30 text-brand-cream hover:bg-brand-cream/10 size-12 rounded-full border bg-transparent shadow-xs transition-all duration-200 active:scale-95 disabled:pointer-events-none disabled:opacity-30"
          >
            <ArrowLeft size={18} strokeWidth={2.5} />
          </Button>

          <Button
            onClick={onNext}
            disabled={disabled}
            className="bg-brand-yellow text-brand-teal hover:bg-brand-yellow-light size-12 rounded-full border-none shadow-md transition-all duration-200 active:scale-95 disabled:pointer-events-none disabled:opacity-30"
          >
            <ArrowRight size={18} strokeWidth={2.5} />
          </Button>
        </div>

        <div className="text-brand-cream/50 font-mono text-sm font-bold tracking-widest select-none">
          {step}/{totalStep}
        </div>
      </div>
    </div>
  );
}
