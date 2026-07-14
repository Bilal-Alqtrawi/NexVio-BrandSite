"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Device } from "@/lib/devices";
import { ArrowUpRight } from "lucide-react";

interface DeviceHeroProps {
  device: Device;
}

export default function DeviceHero({ device }: DeviceHeroProps) {
  return (
    <section className="relative flex min-h-[80vh] w-full items-center overflow-hidden bg-[#FBF9F4] pt-16 pb-24 md:pt-20 md:pb-28">
      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-full select-none lg:w-[60%]">
        <Image
          src={device.bannerImg}
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-center brightness-[0.94]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#FBF9F4] via-[#FBF9F4]/80 to-transparent lg:from-[#FBF9F4] lg:via-[#FBF9F4]/40" />
        <div className="absolute inset-0 bg-linear-to-t from-[#FBF9F4] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto grid grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="flex flex-col justify-center space-y-8 text-neutral-900 lg:col-span-6">
          <div className="space-y-3">
            <h1 className="text-4xl leading-[1.15] font-extrabold tracking-tight text-neutral-950 sm:text-5xl">
              {device.name}: {device.tagline}
            </h1>
          </div>

          <p className="max-w-xl text-base leading-relaxed font-medium text-neutral-600">
            {device.description}
          </p>

          <ul className="max-w-xl space-y-4">
            {device.specs.map((spec) => (
              <li
                key={spec}
                className="flex items-start gap-3 text-sm font-semibold text-neutral-800"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#FFD700] text-neutral-950">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="size-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <span className="leading-tight">{spec}</span>
              </li>
            ))}
          </ul>

          <div className="pt-2">
            <Button
              nativeButton={false}
              render={<Link href="/contact" />}
              className="group inline-flex items-center gap-3 rounded-full bg-[#FFD700] px-7 py-3.5 text-sm font-bold tracking-wide text-neutral-950 shadow-md shadow-neutral-950/5 transition-all duration-300 hover:bg-neutral-900 hover:text-white"
            >
              <span>Contact Us</span>
              <span className="inline-flex size-6 items-center justify-center rounded-full bg-neutral-950 text-white transition-transform duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-neutral-950">
                <ArrowUpRight className="size-3.5 stroke-[2.5]" />
              </span>
            </Button>
          </div>
        </div>

        <div className="relative flex h-87.5 items-center justify-center sm:h-125 lg:col-span-6 lg:justify-end">
          <div className="pointer-events-none absolute top-1/2 left-1/2 z-0 aspect-square w-75 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD700]/20 blur-[80px] sm:w-112.5 lg:left-2/3" />

          <div className="relative z-10 w-[65%] max-w-[320px] transform animate-[cinematicFloat_5s_infinite_ease-in-out] drop-shadow-[0_30px_45px_rgba(0,0,0,0.35)] will-change-transform sm:w-[50%] lg:w-[70%]">
            <Image
              src={device.deviceImg}
              alt={device.name}
              width={400}
              height={550}
              className="h-auto w-full object-contain"
              priority
            />
          </div>

          <div className="absolute bottom-4 left-1/2 z-0 h-5 w-[45%] -translate-x-1/2 transform animate-[shadowPulse_5s_infinite_ease-in-out] rounded-full bg-black/15 blur-xl will-change-transform lg:left-2/3" />
        </div>
      </div>
    </section>
  );
}
