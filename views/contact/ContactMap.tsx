"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Building2,
  Calendar,
  Headphones,
  ShieldCheck
} from "lucide-react";
import { COMPANY, UAE_OFFICES } from "@/lib/company";

const UAE_MAP_URL =
  "https://raw.githubusercontent.com/djaiss/mapsicon/master/all/ae/vector.svg";

// Floating Stat Card using Design Tokens
function FloatingStatCard({
  icon,
  value,
  label,
  className
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  className: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      animate={{ y: [0, -5, 0] }}
      transition={{
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        opacity: { duration: 0.5 }
      }}
      viewport={{ once: true }}
      className={`border-border bg-card/85 shadow-card/50 absolute z-30 flex items-center gap-3.5 rounded-2xl border p-4 shadow-xl backdrop-blur-xl ${className}`}
    >
      <div className="relative flex size-11 shrink-0 items-center justify-center">
        <span className="border-teal-light/40 absolute -inset-1 animate-[spin_10s_linear_infinite] rounded-full border border-dashed" />
        <div className="border-border bg-muted/50 text-brand-yellow relative flex size-11 items-center justify-center rounded-xl border">
          {icon}
        </div>
      </div>
      <div>
        <div className="text-foreground text-xl font-black tracking-tight">
          {value}
        </div>
        <div className="text-teal-light text-[11px] font-semibold tracking-wide uppercase">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

export default function ContactMap() {
  const [activeOffice, setActiveOffice] = useState<string | null>(null);

  return (
    <section className="border-border bg-background text-foreground relative w-full overflow-hidden border-t px-6 py-20 md:py-28">
      {/* Background Radial Glow using Brand Tokens */}
      <div className="bg-teal-light/10 pointer-events-none absolute top-1/2 left-1/2 size-162.5 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]" />

      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold tracking-widest uppercase shadow-sm"
          >
            <span className="bg-brand-yellow size-2 animate-pulse rounded-full" />
            Serving Key Emirates
          </motion.div>

          <h2 className="text-foreground text-3xl font-black tracking-tight uppercase sm:text-4xl md:text-5xl">
            Built for Businesses Across the UAE
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-sm leading-relaxed font-medium sm:text-base">
            NexVio helps businesses across the UAE simplify operations,
            streamline payments, and grow through one connected platform.
          </p>
        </div>

        {/* Main UAE Map Canvas Container */}
        <div className="relative mx-auto mt-16 max-w-6xl">
          <div className="border-border bg-card/60 relative min-h-155 w-full overflow-hidden rounded-3xl border p-6 shadow-2xl md:p-12">
            {/* Holographic Matrix Map Mask */}
            <div
              className="pointer-events-none absolute inset-0 size-full p-6 opacity-80 select-none md:p-12"
              style={{
                maskImage: `url('${UAE_MAP_URL}')`,
                WebkitMaskImage: `url('${UAE_MAP_URL}')`,
                maskRepeat: "no-repeat",
                maskPosition: "center",
                maskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                WebkitMaskSize: "contain",
                backgroundImage:
                  "radial-gradient(var(--color-teal-light, #80a6af) 1.5px, transparent 1.5px)",
                backgroundSize: "8px 8px"
              }}
            />

            {/* Glowing Map Border Overlay */}
            <div
              className="pointer-events-none absolute inset-0 size-full p-6 opacity-30 blur-sm select-none md:p-12"
              style={{
                maskImage: `url('${UAE_MAP_URL}')`,
                WebkitMaskImage: `url('${UAE_MAP_URL}')`,
                maskRepeat: "no-repeat",
                maskPosition: "center",
                maskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                WebkitMaskSize: "contain",
                backgroundImage:
                  "linear-gradient(180deg, var(--color-brand-yellow, #fedf11) 0%, var(--color-teal-light, #80a6af) 100%)"
              }}
            />

            {/* Floating Cards */}
            <div className="pointer-events-none absolute inset-0 z-20 hidden md:block">
              <FloatingStatCard
                icon={<Building2 className="size-5" />}
                value="3000+"
                label="Businesses"
                className="top-8 left-8"
              />
              <FloatingStatCard
                icon={<ShieldCheck className="size-5" />}
                value="7"
                label="Emirates Covered"
                className="bottom-10 left-8"
              />
              <FloatingStatCard
                icon={<Calendar className="size-5" />}
                value="16+"
                label="Years Experience"
                className="top-8 right-8"
              />
              <FloatingStatCard
                icon={<Headphones className="size-5" />}
                value="24/7"
                label="Local Support"
                className="right-8 bottom-10"
              />
            </div>

            {/* City Pin Markers */}
            {UAE_OFFICES.map((loc) => {
              const isActive = activeOffice === loc.id;

              return (
                <div
                  key={loc.id}
                  className="group absolute z-30 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: loc.x, top: loc.y }}
                  onMouseEnter={() => setActiveOffice(loc.id)}
                  onMouseLeave={() => setActiveOffice(null)}
                >
                  <button
                    type="button"
                    className="relative flex flex-col items-center focus:outline-none"
                    onClick={() => setActiveOffice(isActive ? null : loc.id)}
                  >
                    {/* Gold Pulsing Point */}
                    <div className="relative flex items-center justify-center">
                      <span className="bg-brand-yellow/40 absolute size-7 animate-ping rounded-full" />
                      <span className="border-brand-yellow-light bg-brand-yellow relative flex size-4 items-center justify-center rounded-full border-2 shadow-md transition-transform duration-300 group-hover:scale-125">
                        <span className="bg-brand-teal size-1.5 rounded-full" />
                      </span>
                    </div>

                    {/* Bilingual Floating Label */}
                    <div className="border-border bg-popover/90 group-hover:border-brand-yellow mt-1.5 flex flex-col items-center rounded-lg border px-2.5 py-1 text-center shadow-lg backdrop-blur-md transition-all duration-300 group-hover:scale-110">
                      <span className="text-brand-yellow text-[11px] font-bold">
                        {loc.nameAr}
                      </span>
                      <span className="text-foreground text-[9px] font-black tracking-wider uppercase">
                        {loc.name}
                      </span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Mobile Grid Layout */}
          <div className="mt-4 grid grid-cols-2 gap-3 md:hidden">
            <div className="border-border bg-card flex items-center gap-3 rounded-2xl border p-3 backdrop-blur-md">
              <div className="border-border bg-muted/50 text-brand-yellow flex size-9 shrink-0 items-center justify-center rounded-xl border">
                <Building2 className="size-4" />
              </div>
              <div>
                <div className="text-foreground text-sm font-black">3000+</div>
                <div className="text-muted-foreground text-[10px]">
                  Businesses
                </div>
              </div>
            </div>
            <div className="border-border bg-card flex items-center gap-3 rounded-2xl border p-3 backdrop-blur-md">
              <div className="border-border bg-muted/50 text-brand-yellow flex size-9 shrink-0 items-center justify-center rounded-xl border">
                <ShieldCheck className="size-4" />
              </div>
              <div>
                <div className="text-foreground text-sm font-black">
                  7 Emirates
                </div>
                <div className="text-muted-foreground text-[10px]">
                  Coverage
                </div>
              </div>
            </div>
            <div className="border-border bg-card flex items-center gap-3 rounded-2xl border p-3 backdrop-blur-md">
              <div className="border-border bg-muted/50 text-brand-yellow flex size-9 shrink-0 items-center justify-center rounded-xl border">
                <Headphones className="size-4" />
              </div>
              <div>
                <div className="text-foreground text-sm font-black">24/7</div>
                <div className="text-muted-foreground text-[10px]">Support</div>
              </div>
            </div>
            <div className="border-border bg-card flex items-center gap-3 rounded-2xl border p-3 backdrop-blur-md">
              <div className="border-border bg-muted/50 text-brand-yellow flex size-9 shrink-0 items-center justify-center rounded-xl border">
                <Calendar className="size-4" />
              </div>
              <div>
                <div className="text-foreground text-sm font-black">16+</div>
                <div className="text-muted-foreground text-[10px]">
                  Years Exp
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Contact Details Panel */}
        <div className="border-border bg-card/80 relative z-10 mt-12 grid grid-cols-1 items-center justify-center gap-6 rounded-3xl border p-6 shadow-xl backdrop-blur-xl sm:grid-cols-2 lg:mx-auto lg:max-w-3xl">
          <div className="flex items-start gap-4 p-2">
            <div className="border-border bg-muted/40 text-brand-yellow flex size-12 shrink-0 items-center justify-center rounded-2xl border">
              <Phone className="size-5" />
            </div>
            <div>
              <h4 className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
                Call Us
              </h4>
              <a
                href={`tel:${COMPANY.phoneTel}`}
                className="text-foreground hover:text-brand-yellow mt-1 block text-sm font-bold transition-colors"
              >
                {COMPANY.phoneDisplay}
              </a>
              <p className="text-teal-light text-xs font-medium">
                {COMPANY.phoneInternational}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-2">
            <div className="border-border bg-muted/40 text-brand-yellow flex size-12 shrink-0 items-center justify-center rounded-2xl border">
              <Mail className="size-5" />
            </div>
            <div>
              <h4 className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
                Office Email
              </h4>
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-foreground hover:text-brand-yellow mt-1 block text-sm font-bold transition-colors"
              >
                {COMPANY.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
