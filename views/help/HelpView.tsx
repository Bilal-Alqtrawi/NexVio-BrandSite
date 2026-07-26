"use client";

import type { CarouselItem } from "@/types";
import { PeekCarousel } from "./PeekCarousel";

const gallery: CarouselItem[] = [
  {
    id: 1,
    imageSrc: "/help/phone.jpg",
    title: "Set Up Your Business Profile",
    description:
      "Tell us about your business — your locations, menu or catalog, and team. Our onboarding team configures your NexVio platform and smart devices to match how you actually operate."
  },
  {
    id: 2,
    imageSrc: "/help/Untitled-1.jpg",
    title: "Connect Every Part of Your Business",
    description:
      "POS, integrated payments, inventory, CRM and kitchen connectivity all sync automatically, so every sale, order and stock update flows through one connected platform."
  },
  {
    id: 3,
    imageSrc: "/help/WhatsApp Image 2026-07-26 at 1.07.43 PM (1).jpeg",
    title: "Go Live and Track Your Growth",
    description:
      "Start selling with confidence while real-time dashboards and reports keep you informed — with dedicated NexVio support across the UAE whenever you need it."
  }
];

export default function HelpView() {
  return (
    <main className="bg-brand-teal text-brand-cream w-full pb-24 font-sans">
      {/* Hero Header Section - Identical to About Page */}
      <section className="container mx-auto px-4 py-12 sm:px-8">
        <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <h1 className="text-brand-yellow shrink-0 text-3xl font-black tracking-tight uppercase sm:text-4xl">
            How It Works
          </h1>
          <span className="text-brand-yellow/50 hidden rotate-12 transform text-5xl font-extralight sm:block">
            /
          </span>
          <p className="text-brand-cream/80 max-w-sm pt-1 text-sm leading-relaxed font-bold tracking-wider uppercase">
            3-Step Onboarding
            <br />
            Hassle-Free Business Setup
          </p>
        </div>
      </section>

      {/* Main Carousel Section */}
      <PeekCarousel items={gallery} />
    </main>
  );
}
