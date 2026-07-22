"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { COMPANY, UAE_OFFICES } from "@/lib/company";

export default function ContactMap() {
  const [activeOffice, setActiveOffice] = useState<string | null>(null);

  return (
    <section className="relative w-full overflow-hidden bg-[#152830] px-6 py-20 text-white md:py-28">
      <div className="pointer-events-none absolute top-1/4 left-1/4 size-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#80a6af] opacity-[0.08] blur-[120px]" />

      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl leading-none font-black tracking-tight uppercase sm:text-4xl md:text-5xl">
            Built for Businesses Across the UAE
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-300 sm:text-base">
            NexVio helps businesses across the UAE simplify operations,
            streamline payments, and grow through one connected platform.
          </p>
          <div className="text-brand-yellow mt-6 inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/80 px-3 py-1.5 text-xs font-bold tracking-widest uppercase">
            <span className="bg-brand-yellow flex size-2 animate-pulse rounded-full" />
            Serving key emirates
          </div>
        </div>

        <div className="bg-brand-teal relative mx-auto mt-16 aspect-16/10 w-full max-w-5xl overflow-hidden rounded-[32px] border border-neutral-700/60 p-4 shadow-[0_0_50px_rgba(0,0,0,0.5)] md:aspect-video">
          <div
            className="pointer-events-none absolute inset-0 h-full w-full bg-contain bg-center bg-no-repeat p-6 opacity-60 select-none"
            style={{
              backgroundImage:
                "url('https://raw.githubusercontent.com/djaiss/mapsicon/master/all/ae/vector.svg')",
              filter:
                "invert(73%) sepia(21%) saturate(632%) hue-rotate(130deg) brightness(105%) contrast(88%) drop-shadow(0 0 12px rgba(128,166,175,0.3))"
            }}
          />

          <div className="via-brand-teal/40 pointer-events-none absolute inset-0 bg-radial from-transparent to-[#0B161B]" />

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
              <span className="bg-brand-yellow absolute inline-flex h-8 w-8 animate-ping rounded-full opacity-40" />

              {/* Pin Dot */}
              <div className="border-brand-yellow relative flex size-5 items-center justify-center rounded-full border-2 bg-neutral-950 shadow-[0_0_15px_rgba(255,215,0,0.8)] transition-all duration-300 group-hover:scale-125">
                <span className="bg-brand-yellow size-2 rounded-full" />
              </div>

              <div
                className={`bg-brand-teal/95 absolute bottom-8 left-1/2 z-30 w-44 -translate-x-1/2 rounded-2xl border border-neutral-700 p-3 shadow-lg backdrop-blur-md transition-all duration-300 ${
                  activeOffice === loc.id
                    ? "visible translate-y-0 scale-100 opacity-100"
                    : "pointer-events-none invisible translate-y-2 scale-95 opacity-0"
                }`}
              >
                <p className="text-brand-yellow flex items-center gap-1.5 text-xs font-black tracking-wider uppercase">
                  <MapPin className="size-3.5 shrink-0" />
                  {loc.name}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="bg-teal-light/20 relative z-10 mt-16 grid grid-cols-1 items-center justify-center justify-items-center gap-8 rounded-md border-t border-neutral-700 p-3 py-8 shadow-xl sm:grid-cols-2 lg:mx-auto lg:max-w-3xl">
          <div className="flex items-start gap-4">
            <div className="text-brand-yellow flex size-12 shrink-0 items-center justify-center rounded-2xl border border-neutral-700 bg-neutral-900/80">
              <Phone className="size-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-wider text-white uppercase">
                Call Us
              </h4>
              <a
                href={`tel:${COMPANY.phoneTel}`}
                className="hover:text-brand-yellow mt-1 block text-sm text-neutral-300 transition-colors"
              >
                {COMPANY.phoneDisplay}
              </a>
              <p className="text-teal-light text-xs">
                {COMPANY.phoneInternational}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-brand-yellow flex size-12 shrink-0 items-center justify-center rounded-2xl border border-neutral-700 bg-neutral-900/80">
              <Mail className="size-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-wider text-white uppercase">
                Office Email
              </h4>
              <a
                href={`mailto:${COMPANY.email}`}
                className="hover:text-brand-yellow mt-1 block text-sm text-neutral-300 transition-colors"
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
