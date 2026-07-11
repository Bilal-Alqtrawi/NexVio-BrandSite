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
    <section className="relative overflow-visible">
      <div className="relative grid min-h-115 grid-cols-1 items-center gap-12 overflow-visible py-8 lg:grid-cols-12 lg:gap-4 lg:py-0">
        <div
          className="absolute inset-y-0 left-0 -z-10 w-full"
          style={{ backgroundColor }}
        />

        <CarouselContent
          item={activeItem}
          index={currentIndex}
          total={items.length}
          onPrev={handlePrev}
          onNext={handleNext}
          disabled={isTransitioning}
        />

        <div className="relative z-10 flex w-full items-center justify-center bg-transparent lg:col-span-7 lg:justify-end">
          <CarouselStack items={items} currentIndex={currentIndex} />
        </div>
      </div>
    </section>
  );
}
