"use client";

import { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { CarouselItem } from "@/types";
import { getStackTransform } from "./get-stack-transform";

interface CarouselCardProps {
  item: CarouselItem;
  relativeIndex: number;
  isPriority: boolean;
  reduceMotion: boolean;
}

function CarouselCardComponent({
  item,
  relativeIndex,
  isPriority,
  reduceMotion
}: CarouselCardProps) {
  const transform = getStackTransform(relativeIndex);

  return (
    <motion.div
      animate={{
        zIndex: transform.zIndex,
        x: transform.x,
        y: transform.y,
        rotate: transform.rotate,
        scale: transform.scale,
        opacity: transform.opacity
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.35,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="border-brand-cream/80 bg-brand-cream absolute inset-0 shrink-0 transform-gpu overflow-hidden rounded-3xl border-4 shadow-xl will-change-transform select-none lg:rounded-[2.2rem] lg:shadow-2xl"
      style={{
        transformOrigin: "center center",
        pointerEvents: relativeIndex === 0 ? "auto" : "none"
      }}
    >
      <Image
        src={item.imageSrc}
        alt={item.title}
        fill
        sizes="(min-width: 1280px) 500px, (min-width: 768px) 50vw, 90vw"
        className={`object-cover object-center transition-opacity duration-300 ${
          relativeIndex === 0 ? "opacity-100" : "opacity-50"
        }`}
        priority={isPriority}
        quality={10}
      />
    </motion.div>
  );
}

export const CarouselCard = memo(CarouselCardComponent);
