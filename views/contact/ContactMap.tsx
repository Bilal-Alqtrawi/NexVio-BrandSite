"use client";

import React from "react";
import {
  Building2,
  Calendar,
  Headphones,
  ShieldCheck,
  Phone,
  Mail
} from "lucide-react";
import { COMPANY } from "@/lib/company";

const UAE_MAP_URL =
  "https://raw.githubusercontent.com/djaiss/mapsicon/master/all/ae/vector.svg";

// قائمة المدن بإحداثيات مئوية دقيقة متوافقة مع aspect-[16/10]
const UAE_CITIES = [
  { id: "abu-dhabi", nameAr: "أبوظبي", nameEn: "ABU DHABI", x: 38.5, y: 72 },
  { id: "dubai", nameAr: "دبي", nameEn: "DUBAI", x: 56.5, y: 56.5 },
  { id: "sharjah", nameAr: "الشارقة", nameEn: "SHARJAH", x: 60.5, y: 50.5 },
  { id: "ajman", nameAr: "عجمان", nameEn: "AJMAN", x: 62.5, y: 45 },
  {
    id: "umm-al-quwain",
    nameAr: "أم القيوين",
    nameEn: "UMM AL QUWAIN",
    x: 64.5,
    y: 39
  },
  {
    id: "ras-al-khaimah",
    nameAr: "رأس الخيمة",
    nameEn: "RAS AL KHAIMAH",
    x: 67,
    y: 28
  },
  { id: "fujairah", nameAr: "الفجيرة", nameEn: "FUJAIRAH", x: 72.5, y: 47 }
];

export default function ContactMap() {
  return (
    <section className="border-border bg-background text-foreground relative w-full overflow-hidden border-t px-3 py-10 sm:px-6 md:py-20">
      {/* Background Radial Glow */}
      <div className="bg-teal-light/10 pointer-events-none absolute top-1/2 left-1/2 size-162.5 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]" />

      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12">
          <div className="border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-bold tracking-widest uppercase shadow-sm">
            <span className="bg-brand-yellow size-2 animate-pulse rounded-full" />
            Serving Key Emirates
          </div>
          <h2 className="text-foreground text-2xl font-black tracking-tight uppercase sm:text-4xl md:text-5xl">
            Built for Businesses Across the UAE
          </h2>
          <p className="text-muted-foreground mx-auto mt-2 max-w-2xl text-xs leading-relaxed font-medium sm:text-base">
            NexVio helps businesses across the UAE simplify operations,
            streamline payments, and grow through one connected platform.
          </p>
        </div>

        <div className="@container relative mx-auto w-full max-w-5xl">
          <div className="border-border bg-card/70 relative aspect-16/10 w-full overflow-hidden rounded-[2.5cqw] border shadow-2xl backdrop-blur-md">
            <div
              className="pointer-events-none absolute inset-0 size-full opacity-85 select-none"
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
                backgroundSize: "0.9cqw 0.9cqw"
              }}
            />

            {/* إطار مضيء خفيف حول الخريطة */}
            <div
              className="pointer-events-none absolute inset-0 size-full opacity-30 blur-sm select-none"
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

            {/* 2. البطاقات الأربع في الزوايا الأربع (تتكيف قيمها بحجم cqw لتظل واضحة وبنفس المكان) */}
            {/* أعلى اليسار */}
            <div className="border-border bg-background/80 absolute top-[5%] left-[4%] z-20 flex items-center gap-[1.2cqw] rounded-[1.2cqw] border p-[1.2cqw] shadow-lg backdrop-blur-md">
              <div className="border-border bg-muted/50 text-brand-yellow flex size-[3.2cqw] items-center justify-center rounded-[0.8cqw] border">
                <Building2 className="size-[1.8cqw]" />
              </div>
              <div>
                <div className="text-foreground text-[1.8cqw] leading-none font-black">
                  3000+
                </div>
                <div className="text-muted-foreground mt-[0.2cqw] text-[1cqw] font-semibold tracking-wider uppercase">
                  Businesses
                </div>
              </div>
            </div>

            {/* أعلى اليمين */}
            <div className="border-border bg-background/80 absolute top-[5%] right-[4%] z-20 flex items-center gap-[1.2cqw] rounded-[1.2cqw] border p-[1.2cqw] shadow-lg backdrop-blur-md">
              <div className="border-border bg-muted/50 text-brand-yellow flex size-[3.2cqw] items-center justify-center rounded-[0.8cqw] border">
                <Calendar className="size-[1.8cqw]" />
              </div>
              <div>
                <div className="text-foreground text-[1.8cqw] leading-none font-black">
                  16+
                </div>
                <div className="text-muted-foreground mt-[0.2cqw] text-[1cqw] font-semibold tracking-wider uppercase">
                  Years Experience
                </div>
              </div>
            </div>

            {/* أسفل اليسار */}
            <div className="border-border bg-background/80 absolute bottom-[5%] left-[4%] z-20 flex items-center gap-[1.2cqw] rounded-[1.2cqw] border p-[1.2cqw] shadow-lg backdrop-blur-md">
              <div className="border-border bg-muted/50 text-brand-yellow flex size-[3.2cqw] items-center justify-center rounded-[0.8cqw] border">
                <ShieldCheck className="size-[1.8cqw]" />
              </div>
              <div>
                <div className="text-foreground text-[1.8cqw] leading-none font-black">
                  7
                </div>
                <div className="text-muted-foreground mt-[0.2cqw] text-[1cqw] font-semibold tracking-wider uppercase">
                  Emirates Covered
                </div>
              </div>
            </div>

            {/* أسفل اليمين */}
            <div className="border-border bg-background/80 absolute right-[4%] bottom-[5%] z-20 flex items-center gap-[1.2cqw] rounded-[1.2cqw] border p-[1.2cqw] shadow-lg backdrop-blur-md">
              <div className="border-border bg-muted/50 text-brand-yellow flex size-[3.2cqw] items-center justify-center rounded-[0.8cqw] border">
                <Headphones className="size-[1.8cqw]" />
              </div>
              <div>
                <div className="text-foreground text-[1.8cqw] leading-none font-black">
                  24/7
                </div>
                <div className="text-muted-foreground mt-[0.2cqw] text-[1cqw] font-semibold tracking-wider uppercase">
                  Local Support
                </div>
              </div>
            </div>

            {/* 3. نقاط المدن والبطاقات العائمة فوق الخريطة */}
            {UAE_CITIES.map((city) => (
              <div
                key={city.id}
                className="group absolute z-30 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${city.x}%`, top: `${city.y}%` }}
              >
                <div className="relative flex flex-col items-center">
                  {/* النقطة الصفراء */}
                  <div className="relative flex items-center justify-center">
                    <span className="bg-brand-yellow/40 absolute size-[1.8cqw] animate-ping rounded-full" />
                    <span className="border-brand-yellow-light bg-brand-yellow relative flex size-[1.1cqw] items-center justify-center rounded-full border shadow-md transition-transform duration-300 group-hover:scale-125">
                      <span className="bg-brand-teal size-[0.4cqw] rounded-full" />
                    </span>
                  </div>

                  {/* بطاقة اسم المدينة */}
                  <div className="border-border bg-popover/90 group-hover:border-brand-yellow mt-[0.4cqw] flex flex-col items-center rounded-[0.4cqw] border px-[0.8cqw] py-[0.3cqw] text-center whitespace-nowrap shadow-lg backdrop-blur-md transition-all duration-300">
                    <span className="text-brand-yellow text-[1cqw] leading-tight font-bold">
                      {city.nameAr}
                    </span>
                    <span className="text-foreground text-[0.8cqw] leading-tight font-black tracking-wider uppercase">
                      {city.nameEn}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Contact Details Panel */}
        <div className="border-border bg-card/80 relative z-10 mt-8 grid grid-cols-1 items-center justify-center gap-4 rounded-3xl border p-5 shadow-xl backdrop-blur-xl sm:grid-cols-2 lg:mx-auto lg:max-w-3xl">
          <div className="flex items-start gap-4 p-2">
            <div className="border-border bg-muted/40 text-brand-yellow flex size-11 shrink-0 items-center justify-center rounded-2xl border">
              <Phone className="size-5" />
            </div>
            <div>
              <h4 className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
                Call Us
              </h4>
              <a
                href={`tel:${COMPANY.phoneTel}`}
                className="text-foreground hover:text-brand-yellow mt-0.5 block text-sm font-bold transition-colors"
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
                className="text-foreground hover:text-brand-yellow mt-0.5 block text-sm font-bold transition-colors"
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
