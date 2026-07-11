"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type SlideItem = {
  id: string;
  image: string;
  title: string;
  description: string;
};

const slides: SlideItem[] = [
  {
    id: "02",
    image: "/sliders/slider-2.svg",
    title: "Sales & Checkout",
    description: "Registers, mobile POS, kiosks, eCommerce"
  },
  {
    id: "01",
    image: "/sliders/slider-1.svg",
    title: "Customers & Loyalty",
    description:
      "Omnichannel loyalty benefit support. (registers, mobile POS, kiosks, eCommerce)."
  },

  {
    id: "03",
    image: "/sliders/slider-3.svg",
    title: "Operations",
    description: "Inventory, staff & multi-location control"
  }
];

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
    setIndex((prev) => (prev + dir + slides.length) % slides.length);
  };

  const getSlide = (offset: number) =>
    slides[(index + offset + slides.length) % slides.length];

  const prevSlide = getSlide(-1);
  const active = getSlide(0);
  const nextSlide = getSlide(1);

  return (
    <section className="relative w-full pt-16 pb-24">
      <div className="container mx-auto flex flex-col justify-between gap-4 px-4 sm:flex-row sm:items-start sm:px-40">
        <h2 className="text-2xl leading-tight font-medium tracking-[2px] sm:text-3xl">
          Everything Your Business <br /> Needs. Connected
        </h2>
        <div className="mt-auto text-sm leading-relaxed text-black/60 sm:text-right">
          <p>Business Technology Solutions</p>
          <p>Business Technolns</p>
        </div>
      </div>

      <div className="relative mt-10 flex w-full items-stretch gap-3 sm:gap-4">
        {/* Prev peek */}
        <button
          onClick={() => goTo(-1)}
          aria-label="Previous slide"
          className="relative hidden w-[7%] shrink-0 rounded-2xl opacity-70 transition-opacity hover:opacity-100 sm:block"
        >
          <Image
            src={prevSlide.image}
            alt=""
            fill
            className="absolute! top-0 left-0 h-90! rounded-l-none rounded-r-xl object-cover"
          />
        </button>

        {/* Active slide */}
        <div className="relative aspect-16/10 w-full flex-1 overflow-hidden rounded-3xl bg-[#F5F1E8] sm:aspect-16/8">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={active.id}
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
              className="absolute inset-0"
            >
              <Image
                src={active.image}
                alt={active.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/60 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Slide number */}
          <div className="absolute top-6 left-6 text-sm font-medium text-white/80 sm:top-8 sm:left-8">
            {active.id}
          </div>

          {/* Title, bottom-left */}
          <div className="absolute bottom-6 left-6 flex w-full items-center justify-between sm:bottom-8 sm:left-8">
            <p className="font-monospace max-w-40 shrink text-2xl leading-tight text-white sm:text-3xl">
              {active.title}
            </p>
            <p className="mx-auto mt-1 max-w-80 text-center text-[11px] text-white/70 uppercase sm:text-xs">
              {active.description}
            </p>

            {/* View more pill */}
            <Button
              nativeButton={false}
              render={<Link href="/contact" />}
              className="text-foreground transation hover:bg-foreground group mr-5 shrink space-x-3 rounded-full bg-white px-6 py-8 duration-300 hover:text-white sm:mr-15"
            >
              <span>view more</span>
              <span className="bg-foreground inline-flex size-10.25 items-center justify-center rounded-full text-white group-hover:bg-white group-hover:text-black">
                <ChevronRight className="size-8" />
              </span>
            </Button>
          </div>
        </div>

        {/* Next peek */}
        <button
          onClick={() => goTo(1)}
          aria-label="Next slide"
          className="relative hidden w-[7%] shrink-0 overflow-hidden rounded-2xl opacity-70 transition-opacity hover:opacity-100 sm:block"
        >
          <Image
            src={nextSlide.image}
            alt=""
            fill
            className="absolute! top-50! h-90 rounded-l-xl rounded-r-none object-cover"
          />
        </button>

        <button
          onClick={() => goTo(-1)}
          aria-label="Previous slide"
          className="absolute -bottom-8 left-[calc(7%+1rem)] z-10 hidden h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-white text-black shadow-md transition-transform hover:scale-105 sm:left-[calc(4.5%+2rem)] sm:flex"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={() => goTo(1)}
          aria-label="Next slide"
          className="absolute -top-8 right-[calc(7%+1rem)] z-10 flex h-11 w-11 translate-x-1/2 items-center justify-center rounded-full bg-yellow-400 text-black shadow-md transition-transform hover:scale-105 sm:right-[calc(4.5%+2rem)]"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === index ? "w-6 bg-black" : "w-1.5 bg-black/20"
            )}
          />
        ))}
      </div>
    </section>
  );
}
