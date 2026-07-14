"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { devices } from "@/lib/devices";

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 0.95,
    opacity: 0
  }),
  center: {
    x: 0,
    scale: 1,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    scale: 0.95,
    opacity: 0
  })
};

export default function Slider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = (dir: 1 | -1) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + devices.length) % devices.length);
  };

  const getSlide = (offset: number) =>
    devices[(index + offset + devices.length) % devices.length];

  const prevSlide = getSlide(-1);
  const active = getSlide(0);
  const nextSlide = getSlide(1);

  return (
    <section className="relative w-full overflow-x-hidden pt-16 pb-24">
      <div className="container mx-auto flex flex-col justify-between gap-4 px-4 sm:flex-row sm:items-start sm:px-40">
        <h2 className="text-2xl leading-tight font-medium tracking-[2px] sm:text-3xl">
          Everything Your Business <br /> Needs. Connected
        </h2>
        <div className="mt-auto text-sm leading-relaxed text-black/60 sm:text-right">
          <p>Business Technology Solutions</p>
          <p>Business Technology Ecosystem</p>
        </div>
      </div>

      <div className="relative mt-10 flex w-full items-stretch gap-3 px-4 sm:gap-4 sm:px-0">
        <button
          onClick={() => goTo(-1)}
          aria-label="Previous slide"
          className="relative hidden h-80 w-[7%] shrink-0 overflow-hidden opacity-70 transition-opacity hover:opacity-100 sm:block"
        >
          <Image
            src={prevSlide.bannerImg}
            alt=""
            fill
            className="rounded-l-none rounded-r-3xl object-cover"
          />
        </button>

        <div className="relative aspect-16/10 w-full flex-1 overflow-hidden rounded-3xl bg-[#F5F1E8] sm:aspect-16/8">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={active.slug}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.4 }
              }}
              className="absolute inset-0 h-full w-full"
            >
              <Image
                src={active.bannerImg}
                alt={active.name}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Slide number */}
          <div className="absolute top-4 left-4 z-10 text-3xl font-medium text-white/80 sm:top-8 sm:left-8">
            {active.slug}
          </div>

          <div className="absolute right-4 bottom-4 left-4 z-10 flex flex-col gap-3 sm:right-8 sm:bottom-8 sm:left-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1 sm:gap-1.5">
              <p className="font-monospace max-w-xs text-xl leading-tight text-white sm:text-3xl">
                {active.name}
              </p>
              <p className="max-w-sm text-[11px] tracking-wider text-white/80 uppercase sm:text-xs">
                {active.description}
              </p>
            </div>

            <Button
              nativeButton={false}
              render={<Link href={`/devices/${active.slug}`} />}
              className="text-foreground hover:bg-foreground group shrink-0 space-x-3 self-start rounded-full bg-white px-5 py-3 transition duration-300 hover:text-white sm:mr-15 sm:self-auto sm:px-6 lg:py-8"
            >
              <span className="text-sm font-medium">view more</span>
              <span className="bg-foreground inline-flex size-5 items-center justify-center rounded-full text-white group-hover:bg-white group-hover:text-black sm:size-6 lg:size-10.25">
                <ChevronRight className="size-3 sm:size-4 lg:size-6" />
              </span>
            </Button>
          </div>
        </div>

        {/* Next peek - يظهر فقط على الشاشات الكبيرة */}
        <button
          onClick={() => goTo(1)}
          aria-label="Next slide"
          className="relative mt-auto hidden h-90 w-[7%] shrink-0 overflow-hidden opacity-70 transition-opacity hover:opacity-100 sm:block"
        >
          <Image
            src={nextSlide.bannerImg}
            alt=""
            fill
            className="rounded-l-3xl rounded-r-none object-cover"
          />
        </button>

        {/* أزرار التنقل الدائرية بهوامش ممتازة */}
        <button
          onClick={() => goTo(-1)}
          aria-label="Previous slide"
          className="absolute top-1/2 left-4 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-md transition-transform hover:scale-105 sm:left-[calc(4.5%+2rem)] lg:top-auto lg:-bottom-8 lg:translate-y-0"
        >
          <ChevronLeft size={16} />
        </button>

        <button
          onClick={() => goTo(1)}
          aria-label="Next slide"
          className="absolute top-1/2 right-4 z-20 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-yellow-400 text-black shadow-md transition-transform hover:scale-105 sm:right-[calc(4.5%+2rem)] lg:-top-8"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {devices.map((device, i) => (
          <button
            key={device.slug}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === index ? "w-6 bg-black" : "w-1.5 bg-black/20"
            )}
          />
        ))}
      </div>
    </section>
  );
}
