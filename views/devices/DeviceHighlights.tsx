"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Device } from "@/lib/devices";

export default function DeviceHighlights({ device }: { device: Device }) {
  return (
    <section className="relative z-10 overflow-hidden bg-white py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="space-y-12 lg:col-span-7">
            <div className="space-y-3">
              <p className="text-xs font-black tracking-[4px] text-neutral-400 uppercase">
                Product Capabilities
              </p>
              <h2 className="text-3xl font-black tracking-tight text-neutral-950 uppercase sm:text-4xl">
                How can we help you grow?
              </h2>
            </div>

            <div className="space-y-6">
              {device.highlights?.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  className="group flex items-start gap-5"
                >
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#FFD700] text-sm font-black text-neutral-950 shadow-sm transition-transform duration-300 group-hover:scale-110 sm:size-9 sm:text-base">
                    {i + 1}
                  </div>

                  <div className="space-y-1 pt-1">
                    <h3 className="text-base font-black tracking-tight text-neutral-950 transition-colors group-hover:text-neutral-800 sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="max-w-xl text-sm leading-relaxed font-medium text-neutral-500">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="w-full lg:col-span-5"
          >
            <div className="group relative flex min-h-[480px] flex-col items-center justify-between overflow-hidden rounded-[40px] border border-[#FFD700]/20 bg-[#FFFDF6] p-8 shadow-sm sm:p-12">
              <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-full bg-[#FFD700]/5 blur-3xl" />

              <div className="relative mb-8 flex min-h-[240px] w-full flex-1 items-center justify-center">
                <div className="absolute h-[230px] w-[170px] -translate-x-12 -rotate-12 transform overflow-hidden rounded-xl border border-neutral-200/40 bg-white p-4 opacity-90 shadow-md transition-transform duration-500 group-hover:-translate-x-16 group-hover:-rotate-[16deg]">
                  <div className="mb-3 h-2 w-12 rounded bg-neutral-200" />
                  <div className="space-y-2">
                    <div className="h-1.5 w-full rounded bg-neutral-100" />
                    <div className="h-1.5 w-5/6 rounded bg-neutral-100" />
                    <div className="mt-4 h-24 w-full rounded-lg bg-neutral-50" />
                  </div>
                </div>

                <div className="absolute z-10 flex h-[250px] w-[180px] rotate-3 transform flex-col justify-between overflow-hidden rounded-xl border border-neutral-200/60 bg-white p-4 shadow-xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-0">
                  <div>
                    <span className="text-[10px] font-black tracking-wider text-[#FFD700] uppercase">
                      NexVio Spec
                    </span>
                    <h4 className="truncate text-xs font-black text-neutral-950 uppercase">
                      {device.name}
                    </h4>
                  </div>
                  <div className="relative my-2 h-30 w-full">
                    <Image
                      src={device.deviceImg}
                      alt={device.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="h-1 w-full rounded bg-[#FFD700]/20" />
                </div>
              </div>

              <button
                onClick={() => window.print()}
                className="flex w-full items-center justify-center gap-3 rounded-full border-2 border-neutral-950 bg-white px-8 py-4 text-xs font-black tracking-widest text-neutral-950 uppercase shadow-sm transition-all duration-300 hover:bg-neutral-950 hover:text-white hover:shadow-md active:scale-[0.98] sm:w-auto sm:text-sm"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-4 animate-bounce"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <span>Download Specs</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
