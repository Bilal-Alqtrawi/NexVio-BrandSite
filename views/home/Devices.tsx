"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Smartphone,
  Cpu
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { devices } from "@/lib/devices";

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 0.96,
    opacity: 0
  }),
  center: {
    x: 0,
    scale: 1,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    scale: 0.96,
    opacity: 0
  })
};

const keyBenefits = [
  "All-in-One POS & Payment Solution",
  "Fast & Secure Card Payments",
  "Easy-to-Use Touchscreen Interface",
  "Instant Receipt Printing",
  "Cloud-Based Data Sync",
  "CRM & Loyalty Integration",
  "Kitchen Display Connectivity",
  "Real-Time Sales & Performance Reports"
] as const;

const controls = [
  "Take Orders",
  "Accept Payments",
  "Manage Customers",
  "Print Receipts",
  "Connect with the Kitchen",
  "Access Reports"
] as const;

export default function Devices() {
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
    <section
      id="devices"
      className="relative w-full space-y-16 overflow-x-hidden pt-16 pb-24"
    >
      {/* Header Section */}
      <div className="container mx-auto flex flex-col justify-between gap-6 px-4 sm:flex-row sm:items-start sm:px-10 lg:px-40">
        <div className="max-w-2xl space-y-3">
          <span className="text-brand-yellow text-xs font-bold tracking-widest uppercase">
            Smart Commerce Devices
          </span>
          <h2 className="text-brand-cream text-3xl leading-tight font-black tracking-tight sm:text-5xl">
            Powerful Technology.
            <br />
            One Smart Device.
          </h2>
        </div>
        <div className="text-teal-light mt-2 max-w-xl space-y-1 self-start text-sm leading-relaxed sm:mt-5 sm:self-center sm:text-base sm:leading-8">
          <p>NexVio Smart Commerce Devices combine Point of Sale,</p>
          <p>
            integrated payments & business management into one intelligent
            solution.
          </p>
        </div>
      </div>

      {/* Main Slider Area */}
      <div className="relative flex w-full items-stretch gap-3 px-4 sm:gap-4 sm:px-0">
        {/* Left Side Preview Button (Desktop) */}
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

        {/* Card Container */}
        <div className="border-teal-light/20 relative min-h-105 w-full flex-1 overflow-hidden rounded-3xl border bg-[#142429] sm:aspect-16/8 sm:min-h-0">
          <AnimatePresence initial={false} custom={direction} mode="sync">
            <motion.div
              key={active.slug}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              style={{
                touchAction: "pan-y",
                willChange: "transform, opacity"
              }}
              onDragEnd={(e, { offset, velocity }) => {
                const swipeDistance = Math.abs(offset.x) > 50;
                const swipeFlick = Math.abs(velocity.x) > 500;

                if (swipeDistance || swipeFlick) {
                  goTo(offset.x < 0 ? 1 : -1);
                }
              }}
              transition={{
                x: { type: "tween", ease: "easeOut", duration: 0.25 },
                opacity: { duration: 0.15 }
              }}
              className="absolute inset-0 h-full w-full touch-pan-y"
            >
              <Image
                src={active.bannerImg}
                alt={active.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 80vw"
                className="pointer-events-none object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/95 via-black/60 to-black/20 sm:from-black/80 sm:via-black/40 sm:to-transparent" />
            </motion.div>
          </AnimatePresence>
          {/* Device Slug Badge */}
          <div className="text-brand-yellow/90 pointer-events-none absolute top-4 left-4 z-10 text-xs font-semibold tracking-widest uppercase sm:top-8 sm:left-8 sm:text-2xl sm:font-medium sm:text-white/80">
            {active.slug}
          </div>

          {/* Bottom Card Content */}
          <div className="absolute right-4 bottom-5 left-4 z-10 flex flex-col gap-4 sm:right-8 sm:bottom-8 sm:left-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="pointer-events-none flex flex-col gap-1.5 sm:gap-1.5">
              <p className="font-monospace text-2xl leading-tight font-black text-white drop-shadow-sm sm:text-3xl">
                {active.name}
              </p>
              <p className="max-w-md text-xs leading-relaxed tracking-wide text-white/90 uppercase sm:text-xs sm:text-white/80">
                {active.description}
              </p>
            </div>

            <Button
              nativeButton={false}
              render={<Link href={`/devices/${active.slug}`} />}
              className="bg-brand-yellow text-brand-teal group flex shrink-0 items-center justify-between gap-3 rounded-full px-5 py-3 font-semibold transition duration-300 hover:bg-white sm:mr-15 sm:self-auto sm:px-6 lg:py-8"
            >
              <span className="text-xs font-bold sm:text-sm">view more</span>
              <span className="bg-brand-teal text-brand-yellow group-hover:bg-brand-teal inline-flex size-6 items-center justify-center rounded-full group-hover:text-white sm:size-6 lg:size-10.25">
                <ChevronRight className="size-3.5 sm:size-4 lg:size-6" />
              </span>
            </Button>
          </div>
        </div>

        {/* Right Side Preview Button (Desktop) */}
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

        {/* Floating Navigation Controls (Desktop) */}
        <button
          onClick={() => goTo(-1)}
          aria-label="Previous slide"
          className="bg-brand-teal border-teal-light/30 text-brand-cream absolute top-1/2 left-4 z-20 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border shadow-md transition-transform hover:scale-105 sm:left-[calc(4.5%+2rem)] lg:top-auto lg:-bottom-8 lg:flex lg:translate-y-0"
        >
          <ChevronLeft size={16} />
        </button>

        <button
          onClick={() => goTo(1)}
          aria-label="Next slide"
          className="bg-brand-yellow text-brand-teal absolute top-1/2 right-4 z-20 hidden h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-md transition-transform hover:scale-105 sm:right-[calc(4.5%+2rem)] lg:-top-8 lg:flex"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Pagination Dots */}
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
              i === index ? "bg-brand-yellow w-6" : "w-1.5 bg-white/20"
            )}
          />
        ))}
      </div>

      {/* Features Grid Below */}
      <div className="container mx-auto px-4 sm:px-10 lg:px-40">
        <div className="bg-brand-teal/80 border-teal-light/20 grid grid-cols-1 gap-8 rounded-3xl border p-6 shadow-xl backdrop-blur-md sm:p-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-brand-yellow text-brand-teal rounded-xl p-2">
                <Cpu size={18} />
              </div>
              <h3 className="text-brand-cream text-xl font-bold tracking-tight">
                Key Benefits
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {keyBenefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="text-teal-light flex items-center gap-2.5 text-xs font-medium sm:text-sm"
                >
                  <CheckCircle2
                    size={15}
                    className="text-brand-yellow shrink-0"
                  />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-teal-light/20 space-y-6 border-t pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-8">
            <div className="flex items-center gap-3">
              <div className="bg-brand-yellow text-brand-teal rounded-xl p-2">
                <Smartphone size={18} />
              </div>
              <h3 className="text-brand-cream text-xl font-bold tracking-tight">
                One Device. Complete Control.
              </h3>
            </div>
            <p className="text-teal-light text-xs leading-relaxed">
              Every device is fully integrated with the NexVio platform,
              allowing your team to complete daily workflows from a single
              interface:
            </p>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {controls.map((control, idx) => (
                <div
                  key={idx}
                  className="bg-brand-teal border-teal-light/30 text-brand-cream hover:bg-brand-yellow hover:text-brand-teal flex cursor-default items-center justify-center rounded-xl border p-3 text-center text-xs font-bold transition-colors duration-250"
                >
                  {control}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
