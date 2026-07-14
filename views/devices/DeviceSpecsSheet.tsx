"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
    <section className="relative z-10 overflow-hidden border-t border-neutral-200/30 bg-[#FFFDF9]/40 py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="space-y-12 lg:col-span-7">
            <h2 className="text-3xl font-black tracking-tight text-neutral-950 uppercase sm:text-4xl">
              Technical Specifications
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {specsList.map((spec, i) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-2xl border border-neutral-200/60 bg-white p-5 shadow-sm"
                >
                  <p className="text-[10px] font-black tracking-widest text-[#FFD700] uppercase">
                    {spec.label}
                  </p>
                  <p className="mt-1 text-sm font-bold text-neutral-900">
                    {spec.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div className="w-full lg:col-span-5">
            <div className="relative flex min-h-100 flex-col items-center justify-center rounded-[40px] border border-[#FFD700]/20 bg-[#FFFDF6] p-8">
              <div className="relative size-50">
                <Image
                  src={device.deviceImg}
                  alt={device.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="mt-6 text-xl font-black uppercase">
                {device.name}
              </h3>
              <button
                onClick={() => window.print()}
                className="mt-8 rounded-full bg-neutral-950 px-8 py-3 text-sm font-bold text-white transition hover:bg-neutral-800"
              >
                Download PDF
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
