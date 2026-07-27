"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight } from "lucide-react";
import type { Device } from "@/lib/devices";

export default function DeviceHero({ device }: { device: Device }) {
  return (
    <section className="bg-brand-teal text-brand-cream relative overflow-hidden pt-28 pb-20 font-sans lg:pt-36 lg:pb-32">
      {/* Background Ambient Glows */}
      <div className="bg-brand-yellow/10 pointer-events-none absolute -top-40 -left-40 size-125 rounded-full blur-[140px]" />
      <div className="bg-teal-light/10 pointer-events-none absolute right-0 bottom-0 size-100 rounded-full blur-[140px]" />

      <div className="relative z-10 container mx-auto max-w-7xl px-6 md:px-12 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Text Content */}
          <div className="space-y-6 lg:col-span-7">
            <div className="bg-brand-yellow/10 border-brand-yellow/30 text-brand-yellow inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-black tracking-widest uppercase">
              <span>Hardware & POS Systems</span>
            </div>

            <h1 className="text-brand-yellow text-4xl font-black tracking-tight uppercase sm:text-6xl md:text-7xl">
              {device.name}
            </h1>

            <p className="text-brand-cream/90 max-w-2xl text-lg leading-relaxed font-bold sm:text-xl">
              {device.tagline}
            </p>

            <p className="text-brand-cream/70 max-w-xl text-sm leading-relaxed font-normal sm:text-base">
              {device.description}
            </p>

            {/* Quick Specs Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              {device.specs?.slice(0, 3).map((spec) => (
                <div
                  key={spec}
                  className="bg-brand-cream/10 border-brand-cream/20 text-brand-cream flex items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-bold backdrop-blur-md"
                >
                  <ShieldCheck className="text-brand-yellow size-4 shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button className="bg-brand-yellow text-brand-teal rounded-full px-8 py-6 text-xs font-black tracking-widest uppercase shadow-xl transition-all duration-300 hover:bg-white hover:text-black">
                <Link href="#contact-us">
                  <span>Get Started</span>
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button
                variant="outline"

                className="border-brand-cream/30 text-brand-cream hover:bg-brand-cream/10 hover:text-brand-cream rounded-full bg-transparent px-8 py-6 text-xs font-black tracking-widest uppercase transition-all duration-300"
              >
                <Link href="#specs">View Specifications</Link>
              </Button>
            </div>
          </div>

          {/* Right Product Image Container */}
          <div className="relative flex justify-center lg:col-span-5">
            <div className="relative w-full max-w-md">
              <div className="from-brand-yellow/30 absolute -inset-2 rounded-3xl bg-linear-to-tr to-transparent opacity-80 blur-xl" />
              <div className="border-brand-cream/20 from-brand-cream/15 to-brand-cream/5 relative rounded-3xl border bg-linear-to-b p-6 shadow-2xl backdrop-blur-xl">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                  <Image
                    src={device.deviceImg}
                    alt={device.name}
                    fill
                    priority
                    className="transform object-contain transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
