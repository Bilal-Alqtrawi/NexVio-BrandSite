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
    <div className="relative mx-auto flex aspect-4/3 w-[88vw] max-w-[340px] items-center justify-center sm:aspect-500/490 sm:w-[clamp(280px,39vw,500px)] sm:max-w-none lg:mr-10 xl:mr-16">
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
