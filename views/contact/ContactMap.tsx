"use client";

import React, { useState } from "react";
import { MapPin, Globe, Phone, Mail } from "lucide-react";

interface OfficeLocation {
  id: string;
  name: string;
  x: string;
  y: string;
  city: string;
}

const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    id: "na",
    name: "NexVio North America",
    x: "22%",
    y: "33%",
    city: "New York, USA"
  },
  {
    id: "eu",
    name: "NexVio Europe HQ",
    x: "49%",
    y: "24%",
    city: "Frankfurt, Germany"
  },
  {
    id: "me",
    name: "NexVio Middle East",
    x: "57%",
    y: "37%",
    city: "UAE / Dubai"
  },
  {
    id: "sa",
    name: "NexVio LatAm",
    x: "32%",
    y: "68%",
    city: "São Paulo, Brazil"
  },
  { id: "as", name: "NexVio APAC", x: "78%", y: "52%", city: "Singapore" }
];

export default function ContactMap() {
  const [activeOffice, setActiveOffice] = useState<OfficeLocation | null>(null);

  return (
    <section className="relative w-full overflow-hidden bg-[#0B0B0C] px-6 py-20 text-white md:py-28">
      {/* تأثيرات إضاءة سينمائية خلفية خافتة */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD700] opacity-[0.03] blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-[600px] w-[600px] translate-x-1/2 translate-y-1/2 rounded-full bg-[#FFD700] opacity-[0.02] blur-[150px]" />

      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl leading-none font-black tracking-tight uppercase sm:text-4xl md:text-5xl">
            Payments Across the Globe
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-base">
            NexVio is a global leader in payment and commerce enablement,
            offering a unified platform that goes beyond transactions to power
            entire business ecosystems.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/80 px-3 py-1.5 text-xs font-bold tracking-widest text-[#FFD700] uppercase">
            <span className="flex size-2 animate-pulse rounded-full bg-[#FFD700]" />
            Hover over interactive hubs
          </div>
        </div>

        {/* الخريطة الجغرافية الحقيقية فائقة الجودة */}
        <div className="relative mx-auto mt-16 aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-[32px] border border-neutral-800/60 bg-[#0F0F11] p-2 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          {/* خلفية الكوكب الجغرافي الواقعي - خريطة طبوغرافية داكنة نظيفة توضح القارات بدقة */}
          <div
            className="pointer-events-none absolute inset-0 h-full w-full bg-cover bg-center opacity-[0.55] mix-blend-screen transition-transform duration-700 select-none hover:scale-[1.01]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1400')"
            }}
          />

          {/* طبقة تظليل الحواف لعمق سينمائي إضافي */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-[#0B0B0C] opacity-75" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0B0B0C] via-transparent to-[#0B0B0C] opacity-75" />

          {/* الـ Pins التفاعلية الموزعة جغرافياً على القارات */}
          {OFFICE_LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              className="group absolute z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center focus:outline-none"
              style={{ left: loc.x, top: loc.y }}
              onMouseEnter={() => setActiveOffice(loc)}
              onMouseLeave={() => setActiveOffice(null)}
              onClick={() =>
                setActiveOffice(activeOffice?.id === loc.id ? null : loc)
              }
            >
              {/* تأثير التوهج والنبض */}
              <span className="absolute inline-flex h-8 w-8 animate-ping rounded-full bg-[#FFD700] opacity-30" />
              <span className="absolute inline-flex h-12 w-12 animate-pulse rounded-full bg-[#FFD700]/10" />

              {/* جسم الـ Pin المصمم بستايل زجاجي وبؤرة مضيئة صفراء */}
              <div className="relative flex size-5 items-center justify-center rounded-full border-2 border-[#FFD700] bg-neutral-950 shadow-[0_0_15px_rgba(255,215,0,0.6)] transition-all duration-300 group-hover:scale-125 group-hover:border-white">
                <span className="size-2 rounded-full bg-[#FFD700] transition-colors group-hover:bg-white" />
              </div>

              {/* نافذة التفاصيل العائمة بستايل الـ Premium Glassmorphism */}
              <div
                className={`absolute bottom-8 left-1/2 z-30 w-56 -translate-x-1/2 rounded-2xl border border-neutral-800/80 bg-neutral-950/95 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-300 ${
                  activeOffice?.id === loc.id
                    ? "visible translate-y-0 scale-100 opacity-100"
                    : "pointer-events-none invisible translate-y-2 scale-95 opacity-0"
                }`}
              >
                <p className="text-xs font-black tracking-wider text-[#FFD700] uppercase">
                  {loc.name}
                </p>
                <p className="mt-1.5 flex items-center gap-1.5 text-[11px] font-semibold text-neutral-300">
                  <MapPin className="size-3.5 shrink-0 text-red-500" />
                  {loc.city}
                </p>
                <div className="mt-2.5 flex items-center justify-between border-t border-neutral-900 pt-2 text-[9px] font-bold tracking-widest text-neutral-500 uppercase">
                  <span>Status</span>
                  <span className="flex items-center gap-1 text-emerald-400">
                    <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
                    Online
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="relative z-10 mt-16 grid grid-cols-1 gap-8 border-t border-neutral-900 pt-12 sm:grid-cols-3">
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900/80 text-[#FFD700]">
              <Globe className="size-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-wider text-white uppercase">
                Global Presence
              </h4>
              <p className="mt-1 text-xs text-neutral-400">
                Serving businesses in 80+ countries worldwide.
              </p>
            </div>
          </div>

          {/* Call Sales Directly */}
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900/80 text-[#FFD700]">
              <Phone className="size-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-wider text-white uppercase">
                Call Sales Directly
              </h4>
              <p className="mt-1 text-xs text-neutral-400">
                UAE: +xxx (x) xxx-XXXX
              </p>
              <p className="text-xs text-neutral-400">
                International: +x (xxx) xxx-XXXX
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900/80 text-[#FFD700]">
              <Mail className="size-5" />
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold tracking-wider text-white uppercase">
                Email Inquiries
              </h4>
              <div>
                <p className="text-[10px] font-bold tracking-wider text-neutral-500 uppercase">
                  Support Email:
                </p>
                <a
                  href="mailto:Support@nex-vio.com"
                  className="text-xs text-neutral-400 transition-colors hover:text-[#FFD700]"
                >
                  Support@nex-vio.com
                </a>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-wider text-neutral-500 uppercase">
                  Office Email:
                </p>
                <a
                  href="mailto:Office@nex-vio.com"
                  className="text-xs text-neutral-400 transition-colors hover:text-[#FFD700]"
                >
                  Office@nex-vio.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
