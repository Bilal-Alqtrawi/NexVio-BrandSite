"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Cpu } from "lucide-react";
import type { Device, DeviceSpecSheet } from "@/lib/devices";

export default function DeviceSpecsSheet({
  specSheet,
  device
}: {
  specSheet: DeviceSpecSheet;
  device: Device;
}) {
  const specsList = Object.entries(specSheet).map(([key, value]) => ({
    label: key.charAt(0).toUpperCase() + key.slice(1),
    value: value
  }));

  return (
    <section className="bg-brand-teal text-brand-cream relative z-10 overflow-hidden py-24 font-sans lg:py-32">
      {/* Background Ambient Glow */}
      <div className="bg-brand-yellow/10 pointer-events-none absolute top-1/2 -left-40 size-125 -translate-y-1/2 rounded-full blur-[150px]" />
      <div className="bg-teal-light/10 pointer-events-none absolute right-0 bottom-0 size-100 rounded-full blur-[140px]" />

      <div className="relative z-10 container mx-auto max-w-7xl px-6 md:px-12 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Specifications List */}
          <div className="space-y-8 lg:col-span-7">
            <div className="space-y-3">
              <div className="bg-brand-yellow/10 border-brand-yellow/30 text-brand-yellow inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-black tracking-widest uppercase">
                <Cpu className="size-3.5" />
                <span>Technical Sheet</span>
              </div>
              <h2 className="text-brand-cream text-3xl font-black tracking-tight uppercase sm:text-4xl lg:text-5xl">
                Technical Specifications
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {specsList.map((spec, i) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="bg-brand-cream/10 border-brand-cream/15 hover:border-brand-yellow/40 rounded-2xl border p-5 shadow-lg backdrop-blur-md transition-colors duration-300"
                >
                  <p className="text-brand-yellow text-[11px] font-black tracking-widest uppercase">
                    {spec.label}
                  </p>
                  <p className="text-brand-cream mt-1 text-sm leading-snug font-bold">
                    {spec.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Featured Device Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:col-span-5"
          >
            <div className="bg-brand-cream text-brand-teal relative flex min-h-110 flex-col items-center justify-center rounded-[36px] p-8 shadow-2xl">
              {/* Product Image Container with subtle background ring */}
              <div className="relative flex size-56 items-center justify-center">
                <div className="bg-brand-teal/5 absolute inset-0 rounded-full blur-sm" />
                <div className="relative size-48 transition-transform duration-500 hover:scale-105">
                  <Image
                    src={device.deviceImg}
                    alt={device.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <h3 className="text-brand-teal mt-6 text-2xl font-black tracking-wider uppercase">
                {device.name}
              </h3>

              <button
                onClick={() => window.print()}
                className="bg-brand-yellow text-brand-teal hover:bg-brand-teal hover:text-brand-cream mt-6 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-xs font-black tracking-widest uppercase shadow-md transition-all duration-300 active:scale-95"
              >
                <Download className="size-4" />
                <span>Download PDF</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
