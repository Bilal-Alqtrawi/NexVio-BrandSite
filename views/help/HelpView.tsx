"use client";

import type { CarouselItem } from "@/types";
import { PeekCarousel } from "./PeekCarousel";

const gallery: CarouselItem[] = [
  {
    id: 1,
    imageSrc: "/help/help-1.jpeg",
    title: "Set Up Your Business Profile",
    description:
      "Tell us about your business — your locations, menu or catalog, and team. Our onboarding team configures your NexVio platform and smart devices to match how you actually operate."
  },
  {
    id: 2,
    imageSrc: "/help/help-2.svg",
    title: "Connect Every Part of Your Business",
    description:
      "POS, integrated payments, inventory, CRM and kitchen connectivity all sync automatically, so every sale, order and stock update flows through one connected platform."
  },
  {
    id: 3,
    imageSrc: "/help/help-3.svg",
    title: "Go Live and Track Your Growth",
    description:
      "Start selling with confidence while real-time dashboards and reports keep you informed — with dedicated NexVio support across the UAE whenever you need it."
  }
];

export default function HelpView() {
  return (
    <main className="w-full overflow-x-hidden pb-24 text-neutral-900">
      <section className="container mx-auto px-4 py-12 sm:px-8">
        <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <h1 className="shrink-0 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            How it works
          </h1>
          <span className="hidden rotate-12 transform text-5xl font-extralight text-black sm:block">
            /
          </span>
          <p className="max-w-xs pt-1 text-xs leading-relaxed font-medium text-neutral-500">
            Step into hassle-free business setup with our easy 3-step onboarding
            process
          </p>
        </div>
      </section>
      <PeekCarousel items={gallery} />
    </main>
  );
}
