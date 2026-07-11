"use client";

import { useReducedMotion } from "framer-motion";
import type { CarouselItem } from "@/types";
import { CarouselCard } from "./CarouselCardComponent";

interface CarouselStackProps {
  items: CarouselItem[];
  currentIndex: number;
}

export function CarouselStack({ items, currentIndex }: CarouselStackProps) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div className="relative mx-auto flex aspect-500/490 w-[clamp(260px,39vw,500px)] items-center justify-center lg:mr-15 lg:ml-auto xl:mr-20">
      {items.map((item, idx) => {
        const relativeIndex =
          (idx - currentIndex + items.length) % items.length;

        return (
          <CarouselCard
            key={item.id}
            item={item}
            relativeIndex={relativeIndex}
            isPriority={idx === 0}
            reduceMotion={reduceMotion}
          />
        );
      })}
    </div>
  );
}
