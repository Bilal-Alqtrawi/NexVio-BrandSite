"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { COMPANY, UAE_OFFICES } from "@/lib/company";

export default function ContactMap() {
  const [activeOffice, setActiveOffice] = useState<string | null>(null);

  return (
    <section className="border-border bg-card/30 text-foreground relative w-full overflow-hidden border-t px-6 py-20 md:py-28">
      {/* Dynamic Glow using Design Tokens */}
      <div className="bg-teal-light/10 pointer-events-none absolute top-1/4 left-1/4 size-125 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]" />

      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-border bg-brand-yellow/10 text-brand-yellow mb-4 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-bold tracking-widest uppercase"
          >
            <span className="bg-brand-yellow size-2 animate-pulse rounded-full" />
            Serving key emirates
          </motion.div>

          <h2 className="text-foreground text-3xl leading-none font-black tracking-tight uppercase sm:text-4xl md:text-5xl">
            Built for Businesses Across the UAE
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-sm leading-relaxed font-medium sm:text-base">
            NexVio helps businesses across the UAE simplify operations,
            streamline payments, and grow through one connected platform.
          </p>
        </div>

        {/* UAE Map Container */}
        <div className="border-border bg-background/80 relative mx-auto mt-16 aspect-16/10 w-full max-w-5xl overflow-hidden rounded-3xl border p-4 shadow-2xl backdrop-blur-xl md:aspect-video">
          <div
            className="pointer-events-none absolute inset-0 size-full bg-contain bg-center bg-no-repeat p-6 opacity-40 select-none"
            style={{
              backgroundImage:
                "url('https://raw.githubusercontent.com/djaiss/mapsicon/master/all/ae/vector.svg')",
              filter:
                "invert(80%) sepia(20%) saturate(800%) hue-rotate(130deg) brightness(110%) contrast(90%)"
            }}
          />

          <div className="from-background to-background/50 pointer-events-none absolute inset-0 bg-linear-to-t via-transparent" />

          {/* Interactive Pins */}
          {UAE_OFFICES.map((loc) => (
            <button
              key={loc.id}
              type="button"
              suppressHydrationWarning
              className="group absolute z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center focus:outline-none"
              style={{ left: loc.x, top: loc.y }}
              onMouseEnter={() => setActiveOffice(loc.id)}
              onMouseLeave={() => setActiveOffice(null)}
              onClick={() =>
                setActiveOffice(activeOffice === loc.id ? null : loc.id)
              }
            >
              <span className="bg-brand-yellow/40 absolute size-8 animate-ping rounded-full" />

              {/* Pin Dot */}
              <div className="border-brand-yellow bg-background relative flex size-5 items-center justify-center rounded-full border-2 transition-all duration-300 group-hover:scale-125">
                <span className="bg-brand-yellow size-2 rounded-full" />
              </div>

              {/* Popup Card */}
              <div
                className={`border-border bg-popover/95 absolute bottom-8 left-1/2 z-30 w-48 -translate-x-1/2 rounded-2xl border p-3.5 shadow-2xl backdrop-blur-md transition-all duration-300 ${
                  activeOffice === loc.id
                    ? "visible translate-y-0 scale-100 opacity-100"
                    : "pointer-events-none invisible translate-y-2 scale-95 opacity-0"
                }`}
              >
                <p className="text-brand-yellow flex items-center gap-2 text-xs font-black tracking-wider uppercase">
                  <MapPin className="size-3.5 shrink-0" />
                  {loc.name}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Contact Info Footer */}
        <div className="border-border bg-card/50 relative z-10 mt-12 grid grid-cols-1 items-center justify-center gap-6 rounded-3xl border p-6 shadow-xl backdrop-blur-xl sm:grid-cols-2 lg:mx-auto lg:max-w-3xl">
          <div className="flex items-start gap-4 p-2">
            <div className="border-border bg-background text-brand-yellow flex size-12 shrink-0 items-center justify-center rounded-2xl border">
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
            <div className="border-border bg-background text-brand-yellow flex size-12 shrink-0 items-center justify-center rounded-2xl border">
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
