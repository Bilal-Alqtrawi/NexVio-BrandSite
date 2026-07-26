"use client";

import { useCallback, useRef, useState } from "react";
import type { CarouselItem } from "@/types";
import { CarouselStack } from "./CarouselStack";
import { CarouselContent } from "./CarouselContent";

interface PeekCarouselProps {
  items: CarouselItem[];
  transitionMs?: number;
}

export function PeekCarousel({ items, transitionMs = 550 }: PeekCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isTransitioningRef = useRef(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (direction: 1 | -1) => {
      if (isTransitioningRef.current || items.length === 0) return;

      isTransitioningRef.current = true;
      setIsTransitioning(true);

      setCurrentIndex(
        (prev) => (prev + direction + items.length) % items.length
      );

      window.setTimeout(() => {
        isTransitioningRef.current = false;
        setIsTransitioning(false);
      }, transitionMs);
    },
    [items.length, transitionMs]
  );

  const handleNext = useCallback(() => goTo(1), [goTo]);
  const handlePrev = useCallback(() => goTo(-1), [goTo]);

  if (items.length === 0) return null;

  const activeItem = items[currentIndex];

  return (
    <section className="container mx-auto px-4 sm:px-8">
      {/* Glassmorphism Dark Card with Subtle Border and Glow */}
      <div className="bg-brand-cream/5 border-teal-light/20 relative w-full overflow-hidden rounded-[2.5rem] border p-6 shadow-2xl backdrop-blur-md sm:p-10 lg:p-12">
        {/* لمسة بلور خلفية ناعمة توحي بالفخامة */}
        <div className="bg-brand-yellow/10 pointer-events-none absolute -top-24 -left-24 size-72 rounded-full blur-3xl" />

        <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:min-h-115 lg:grid-cols-12 lg:gap-6">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <CarouselContent
              item={activeItem}
              index={currentIndex}
              total={items.length}
              onPrev={handlePrev}
              onNext={handleNext}
              disabled={isTransitioning}
            />
          </div>

          <div className="relative z-20 order-1 flex w-full items-center justify-center pt-2 lg:order-2 lg:col-span-7 lg:justify-end lg:pt-0">
            <CarouselStack items={items} currentIndex={currentIndex} />
          </div>
        </div>
      </div>
    </section>
  );
}
