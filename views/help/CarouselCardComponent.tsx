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
        duration: reduceMotion ? 0 : 0.55,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="absolute inset-0 shrink-0 transform-gpu overflow-hidden rounded-[2.2rem] border-white bg-white shadow-2xl will-change-transform select-none"
      style={{
        transformOrigin: "center center",
        pointerEvents: relativeIndex === 0 ? "auto" : "none"
      }}
    >
      <Image
        src={item.imageSrc}
        alt={item.title}
        fill
        sizes="(min-width: 1280px) 500px, (min-width: 768px) 39vw, 60vw"
        className={`object-cover object-center ${relativeIndex === 0 ? "" :"opacity-50"}`}
        priority={isPriority}
        quality={75}
      />
    </motion.div>
  );
}

export const CarouselCard = memo(CarouselCardComponent);
