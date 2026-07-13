"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Device } from "@/lib/devices";

export default function DeviceSpecsSheet({ device }: { device: Device }) {
  return (
    <section className="relative z-10 overflow-hidden border-t border-neutral-200/30 bg-[#FFFDF9]/40 py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
          {/* الطرف الأيسر: القائمة المرقمة الفخمة (Technically Speaking) */}
          <div className="space-y-12 lg:col-span-7">
            <div className="space-y-2">
              <h2 className="text-3xl font-black tracking-tight text-neutral-950 uppercase sm:text-4xl">
                Technically Speaking
              </h2>
            </div>

            {/* قائمة المواصفات الأساسية المأخوذة من جهازك */}
            <div className="space-y-6">
              {device.specs?.map((spec, i) => (
                <motion.div
                  key={spec}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  className="group flex items-center gap-5"
                >
                  {/* الدائرة الصفراء المرقمة النظيفة */}
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#FFD700] text-sm font-black text-neutral-950 shadow-sm transition-transform duration-300 group-hover:scale-110 sm:size-9 sm:text-base">
                    {i + 1}
                  </div>

                  {/* نص الميزة الفني */}
                  <p className="text-sm font-bold tracking-tight text-neutral-800 transition-colors group-hover:text-neutral-950 sm:text-base">
                    {spec}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* الطرف الأيمن: كارد التحميل والمواصفات المتداخلة الفخمة */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="w-full lg:col-span-5"
          >
            <div className="group relative flex min-h-[460px] flex-col items-center justify-between overflow-hidden rounded-[40px] border border-[#FFD700]/20 bg-[#FFFDF6] p-8 shadow-sm sm:p-12">
              <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-full bg-[#FFD700]/5 blur-3xl" />

              {/* مجسمات الأوراق والمواصفات المتداخلة */}
              <div className="relative mb-8 flex min-h-[220px] w-full flex-1 items-center justify-center">
                {/* الورقة المائلة بالخلف */}
                <div className="absolute h-[220px] w-[160px] -translate-x-12 -rotate-12 transform overflow-hidden rounded-xl border border-neutral-200/40 bg-white p-4 opacity-90 shadow-md transition-transform duration-500 group-hover:-translate-x-16 group-hover:-rotate-[16deg]">
                  <div className="mb-3 h-2 w-12 rounded bg-neutral-200" />
                  <div className="space-y-2">
                    <div className="h-1.5 w-full rounded bg-neutral-100" />
                    <div className="h-1.5 w-5/6 rounded bg-neutral-100" />
                    <div className="mt-4 h-20 w-full rounded-lg bg-neutral-50" />
                  </div>
                </div>

                {/* الورقة الأمامية القائمة وبداخلها صورة منتجك */}
                <div className="absolute z-10 flex h-[240px] w-[170px] rotate-3 transform flex-col justify-between overflow-hidden rounded-xl border border-neutral-200/60 bg-white p-4 shadow-xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-0">
                  <div>
                    <span className="text-[9px] font-black tracking-wider text-[#FFD700] uppercase">
                      NexVio Spec
                    </span>
                    <h4 className="truncate text-xs font-black text-neutral-950 uppercase">
                      {device.name}
                    </h4>
                  </div>
                  <div className="relative my-2 h-[110px] w-full">
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

              {/* زر التحميل المتطابق مع التصميم */}
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
