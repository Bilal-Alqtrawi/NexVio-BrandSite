"use client";

import type { CarouselItem } from "@/types";
import { PeekCarousel } from "./PeekCarousel";

const gallery: CarouselItem[] = [
  {
    id: 1,
    imageSrc: "/help/help-3.svg",
    title: "Personalize Your Profile",
    description:
      "Begin by creating your profile. Tell us about your dietary preferences, nutritional goals, and budget. Our AI technology tailors every meal plan to fit your unique needs."
  },
  {
    id: 2,
    imageSrc: "/help/help-2.svg",
    title: "Explore Curated Menus",
    description:
      "Browse through hundreds of chef-crafted menus tailored specifically to your macro targets. Swap meals instantly and enjoy customized preparation instructions."
  },
  {
    id: 3,
    imageSrc: "/help/help-1.jpeg",
    title: "Track Your Smart Progress",
    description:
      "Monitor your daily nutritional balance effortlessly. Our smart system syncs your ingredients and dynamic grocery lists to save you time and reduce food waste."
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
            Step into the world of hassle-free meal planning with our easy
            3-step process
          </p>
        </div>
      </section>
      <PeekCarousel items={gallery} />
    </main>
  );
}
