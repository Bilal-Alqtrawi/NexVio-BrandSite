"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Device } from "@/lib/devices";
import { ArrowUpRight, Check } from "lucide-react";
import ContactUsButton from "@/components/shared/ContactUsButton";

interface DeviceHeroProps {
  device: Device;
}

export default function DeviceHero({ device }: DeviceHeroProps) {
  return (
    <section className="relative flex min-h-[85vh] w-full items-center overflow-hidden bg-[#FAF8F5] pt-12 pb-20 lg:pt-16 lg:pb-24">
      {/* Ambient Background Glows */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] size-125 rounded-full bg-[#F5C41B]/12 blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-5%] size-100 rounded-full bg-neutral-900/5 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto grid grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8">
        {/* Left Column: Text Content & Features */}
        <div className="flex flex-col justify-center space-y-8 text-neutral-900 lg:col-span-6">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-4 py-1.5 text-xs font-bold tracking-widest text-[#D4A313] uppercase shadow-xs backdrop-blur-md">
              <span className="size-2 animate-pulse rounded-full bg-[#F5C41B]" />
              NexVio Hardware
            </span>

            <h1 className="text-4xl leading-[1.08] font-black tracking-tight text-neutral-950 sm:text-5xl md:text-6xl">
              {device.name}
              <span className="mt-2 block text-2xl font-bold text-neutral-500 sm:text-3xl">
                {device.tagline}
              </span>
            </h1>
          </div>

          <p className="max-w-xl text-base leading-relaxed font-medium text-neutral-600 sm:text-lg">
            {device.description}
          </p>

          <ul className="max-w-xl space-y-3.5">
            {device.specs.map((spec) => (
              <li
                key={spec}
                className="flex items-center gap-3 text-sm font-semibold text-neutral-800"
              >
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#F5C41B] text-neutral-950">
                  <Check className="size-3.5 stroke-3" />
                </span>
                <span className="leading-snug">{spec}</span>
              </li>
            ))}
          </ul>

          <div className="pt-2">
            <ContactUsButton variant="teal" />
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:col-span-6 lg:justify-end">
          {/* Card Container with Soft Shadow & Border */}
          <div className="group relative flex aspect-square w-full max-w-120 items-center justify-center overflow-hidden rounded-[36px] border border-neutral-200/80 bg-linear-to-b from-white/90 to-[#FAF8F5]/50 p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] backdrop-blur-xl">
            {/* Inner Glow Circle */}
            <div className="absolute size-72 rounded-full bg-[#F5C41B]/20 blur-3xl transition-all duration-500 group-hover:scale-125" />

            {/* Device Image */}
            <div className="relative z-10 flex h-full w-full items-center justify-center transition-transform duration-500 group-hover:scale-[1.03]">
              <Image
                src={device.deviceImg}
                alt={device.name}
                width={500}
                height={500}
                style={{
                  width: "auto",
                  height: "auto"
                }}
                priority
                className="max-h-95! w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.12)]"
              />
            </div>

            {/* Subtle Lighting Accent */}
            <div className="pointer-events-none absolute top-0 right-0 size-32 bg-linear-to-bl from-white to-transparent opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
}
