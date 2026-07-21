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
      <div className="container mx-auto flex flex-col justify-between gap-6 px-4 sm:flex-row sm:items-start sm:px-10 lg:px-40">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
            Smart Commerce Devices
          </span>
          <h2 className="text-3xl leading-tight font-black tracking-tight text-neutral-900 sm:text-5xl">
            Powerful Technology.
            <br />
            One Smart Device.
          </h2>
        </div>
        <div className="max-w-md self-end space-y-1 text-base leading-relaxed text-neutral-600 sm:text-right sm:text-lg">
          <p>NexVio Smart Commerce Devices combine Point of Sale,</p>
          <p>
            integrated payments and business management into one intelligent
            solution.
          </p>
        </div>
      </div>

      <div className="relative flex w-full items-stretch gap-3 px-4 sm:gap-4 sm:px-0">
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
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) > 50;
                if (velocity.x > 500 || swipe) {
                  goTo(offset.x < 0 ? 1 : -1);
                }
              }}
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
              className="text-foreground hover:bg-foreground group flex shrink-0 space-x-3 self-start rounded-full bg-white px-5 py-3 transition duration-300 hover:text-white sm:mr-15 sm:self-auto sm:px-6 lg:py-8"
            >
              <span className="text-sm font-medium">view more</span>
              <span className="bg-foreground inline-flex size-5 items-center justify-center rounded-full text-white group-hover:bg-white group-hover:text-black sm:size-6 lg:size-10.25">
                <ChevronRight className="size-3 sm:size-4 lg:size-6" />
              </span>
            </Button>
          </div>
        </div>

        {/* Next peek */}
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

        <button
          onClick={() => goTo(-1)}
          aria-label="Previous slide"
          className="absolute top-1/2 left-4 z-20 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-md transition-transform hover:scale-105 sm:left-[calc(4.5%+2rem)] lg:top-auto lg:-bottom-8 lg:flex lg:translate-y-0"
        >
          <ChevronLeft size={16} />
        </button>

        <button
          onClick={() => goTo(1)}
          aria-label="Next slide"
          className="absolute top-1/2 right-4 z-20 hidden h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-yellow-400 text-black shadow-md transition-transform hover:scale-105 sm:right-[calc(4.5%+2rem)] lg:-top-8 lg:flex"
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

      <div className="container mx-auto px-4 sm:px-10 lg:px-40">
        <div className="grid grid-cols-1 gap-8 rounded-3xl border border-neutral-200/60 bg-[#FDFBF7] p-8 shadow-xs sm:p-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-neutral-900 p-2 text-white">
                <Cpu size={18} />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-neutral-900">
                Key Benefits
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {keyBenefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 text-xs font-medium text-neutral-700 sm:text-sm"
                >
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-neutral-900"
                  />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 border-t border-neutral-200 pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-8">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-neutral-900 p-2 text-white">
                <Smartphone size={18} />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-neutral-900">
                One Device. Complete Control.
              </h3>
            </div>
            <p className="text-xs leading-relaxed text-neutral-500">
              Every device is fully integrated with the NexVio platform,
              allowing your team to complete daily workflows from a single
              interface:
            </p>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {controls.map((control, idx) => (
                <div
                  key={idx}
                  className="cursor-default rounded-xl border border-neutral-200 bg-white p-3 text-center text-xs font-bold text-neutral-800 shadow-2xs transition-colors duration-250 hover:bg-neutral-900 hover:text-white"
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
