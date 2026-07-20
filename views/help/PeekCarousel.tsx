"use client";

import { useCallback, useRef, useState } from "react";
import type { CarouselItem } from "@/types";
import { CarouselStack } from "./CarouselStack";
import { CarouselContent } from "./CarouselContent";

interface PeekCarouselProps {
  items: CarouselItem[];
  backgroundColor?: string;
  transitionMs?: number;
}

export function PeekCarousel({
  items,
  backgroundColor = "#FFF2CE",
  transitionMs = 550
}: PeekCarouselProps) {
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
    <section className="relative w-full overflow-hidden py-8 lg:overflow-visible lg:py-16">
      {/* 1. الخلفية تغطي المكون كاملاً في الموبايل لتبدو الصورة بداخلها */}
      <div
        className="absolute inset-0 z-0 w-full lg:top-8 lg:bottom-8"
        style={{ backgroundColor }}
      />

      {/* 2. المحتوى فوق الخلفية */}
      <div className="relative z-10 container mx-auto grid grid-cols-1 items-center gap-6 px-4 sm:px-6 lg:min-h-115 lg:grid-cols-12 lg:gap-4 lg:px-8">
        {/* الصورة أولاً في الموبايل عبر order-1 */}
        <div className="relative z-20 order-1 flex w-full items-center justify-center pt-2 lg:order-2 lg:col-span-7 lg:justify-end lg:pt-0">
          <CarouselStack items={items} currentIndex={currentIndex} />
        </div>

        {/* النص والأزرار ثانياً في الموبايل عبر order-2 */}
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
      </div>
    </section>
  );
}
