"use client";

import WhyHero from "@/views/why-nexvio/WhyHero";
import WhyBanner from "@/views/why-nexvio/WhyBanner";
import ReasonsGrid from "@/views/why-nexvio/ReasonsGrid";
import AdvantageSection from "@/views/why-nexvio/AdvantageSection";

export default function WhyNexvioView() {
  return (
    <main className="bg-background text-foreground selection:bg-brand-yellow selection:text-brand-teal relative min-h-screen overflow-hidden py-10 lg:py-16">
      {/* Background Mesh Grid */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size[5rem_5rem]"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 100%)"
          }}
        />
        <div className="bg-brand-yellow/10 absolute top-[10%] left-1/2 size-125 -translate-x-1/2 rounded-full blur-[160px]" />
        <div className="bg-brand-teal-light/10 absolute top-[40%] -left-40 size-100 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10">
        <WhyHero />
        <WhyBanner />
        <ReasonsGrid />
        <AdvantageSection />
      </div>
    </main>
  );
}
