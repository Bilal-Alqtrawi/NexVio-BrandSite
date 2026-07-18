"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Layers,
  CreditCard,
  Cloud,
  Users2,
  Package,
  Utensils,
  BarChart3,
  GitBranch,
  MapPin,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import Image from "next/image";

const WHY_NEXVIO = [
  { icon: Layers, label: "One Connected Platform" },
  { icon: CreditCard, label: "Smart POS & Integrated Payments" },
  { icon: Cloud, label: "Cloud-Based Business Management" },
  { icon: Users2, label: "Customer Relationship Management (CRM)" },
  { icon: Package, label: "Inventory & Employee Management" },
  { icon: Utensils, label: "Kitchen Connectivity (KDS)" },
  { icon: BarChart3, label: "Business Intelligence & Analytics" },
  { icon: GitBranch, label: "Multi-Branch Management" },
  { icon: MapPin, label: "Local UAE Implementation & Support" },
  { icon: ShieldCheck, label: "Built on Trusted Global Technology" }
];

export default function AboutView() {
  return (
    <main className="from-background to-card/20 text-foreground w-full bg-linear-to-b pb-24 font-sans">
      {/* --- SECTION 1: HEADER --- */}
      <section className="container mx-auto px-4 py-12 sm:px-8">
        <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <h1 className="shrink-0 text-3xl font-black tracking-tight text-neutral-950 uppercase sm:text-4xl">
            About
          </h1>
          <span className="hidden rotate-12 transform text-5xl font-extralight text-black sm:block">
            /
          </span>
          <p className="text-muted-foreground max-w-sm pt-1 text-sm leading-relaxed font-bold tracking-wider uppercase">
            More Than Technology. A Complete Business Solution.
          </p>
        </div>
      </section>

      {/* --- SECTION 2: VISION & CORE PARAGRAPHS --- */}
      <section className="container mx-auto px-4 pl-4 sm:px-0 sm:pl-6">
        <div className="relative">
          <div className="bg-card/10 flex flex-col items-center gap-8 rounded-3xl border border-black p-6 backdrop-blur-xs lg:flex-row lg:gap-12 lg:rounded-l-full lg:p-8 lg:pr-16">
            <div className="w-full max-w-145 shrink-0 rounded-full border border-black p-3 sm:p-4 lg:w-1/2 dark:border-white/10">
              <div className="relative aspect-16/10 w-full overflow-hidden rounded-full shadow-xs">
                <Image
                  src="/about/about.svg"
                  alt="About Nexvio platform team working together"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            <div className="flex-1 lg:max-w-xl">
              <p className="text-base leading-relaxed font-bold text-neutral-950 md:text-lg">
                Choosing the right business technology is one of the most
                important decisions any business can make.
              </p>
              <p className="mt-4 text-sm leading-relaxed font-normal text-neutral-700 sm:text-base dark:text-neutral-300">
                NexVio is more than a Point of Sale system. It is a complete
                business platform designed to simplify operations, improve
                productivity and support long-term growth. By combining
                intelligent software, smart commerce devices and integrated
                payments into one connected ecosystem, businesses can eliminate
                unnecessary complexity while gaining greater visibility and
                control over daily operations.
              </p>
            </div>
          </div>

          <div className="mt-12 max-w-3xl space-y-6 px-4 sm:px-12 lg:px-24">
            <p className="text-sm leading-relaxed text-neutral-600 sm:text-base dark:text-neutral-400">
              Whether you&apos;re opening your first business or expanding
              across multiple locations, NexVio provides the flexibility,
              reliability and support needed to grow with confidence.
            </p>

            <div className="pt-4">
              <Button
                variant="outline"
                className="bg-brand-yellow h-12 w-full rounded-full border-none text-sm font-bold tracking-wide text-neutral-950 shadow-md transition-all duration-200 active:scale-98 sm:w-64"
                nativeButton={false}
                render={<Link href="/contact" />}
              >
                <span>Talk to Our Team</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: WHY CHOOSE NEXVIO (10 Core Features Grid) --- */}
      <section className="container mx-auto mt-28 px-4 sm:px-8">
        <div className="mb-12 space-y-2 text-center">
          <span className="text-xs font-black tracking-widest text-[#D4A313] uppercase">
            Strategic Advantages
          </span>
          <h2 className="text-3xl font-black tracking-tight text-neutral-950 uppercase sm:text-4xl lg:text-5xl">
            Why Choose NexVio
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {WHY_NEXVIO.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-neutral-200/70 bg-white p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#F5C41B] hover:shadow-[0_12px_30px_-10px_rgba(245,196,27,0.15)]"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-[#F5C41B]/10 text-[#D4A313]">
                <Icon className="size-5 stroke-[2]" />
              </span>
              <p className="text-sm leading-snug font-black text-neutral-950">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 4: PARTNERSHIP ECOSYSTEM (Nayax x NexVio) --- */}
      <section className="container mx-auto mt-24 px-4 sm:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-neutral-950 px-8 py-16 text-center text-white sm:px-16">
          <div className="pointer-events-none absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 size-80 -translate-x-20 -translate-y-20 rounded-full bg-white blur-[100px]" />
          </div>

          <p className="text-xs font-black tracking-[0.2em] text-[#F5C41B] uppercase">
            Powered by Nayax. Delivered by NexVio
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-2xl leading-snug font-black uppercase sm:text-3xl lg:text-4xl">
            Partnering for Global Innovation & Local Success
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-neutral-400 sm:text-base">
            NexVio is an Authorized Nayax Partner, delivering business solutions
            powered by Nayax&apos;s globally trusted commerce and payment
            technology. By combining world-class innovation with local
            implementation, onboarding, training and dedicated support across
            the United Arab Emirates, NexVio helps businesses deploy reliable,
            scalable and future-ready commerce solutions with confidence.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-xs leading-relaxed text-neutral-500 sm:text-sm">
            This partnership enables our customers to benefit from
            internationally proven technology while working with a trusted local
            team that understands the UAE market and is committed to their
            long-term success.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 font-mono text-xs font-bold text-neutral-500">
            <span>( nayax x nexvio )</span>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              className="bg-brand-yellow h-12 w-full rounded-full border-none px-8 text-sm font-bold tracking-wide text-neutral-950 hover:bg-[#D4A313] sm:w-auto"
              nativeButton={false}
              render={<Link href="/at-a-glance" />}
            >
              <span>NexVio at a Glance</span>
            </Button>
            <Button
              variant="outline"
              className="h-12 w-full rounded-full border-white/30 bg-transparent px-8 text-sm font-bold tracking-wide text-white hover:bg-white/10 sm:w-auto"
              nativeButton={false}
              render={<Link href="/vision-and-mission" />}
            >
              <span>Our Vision & Mission</span>
            </Button>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: THE NEXVIO PROMISE (New Closure Section) --- */}
      <section className="container mx-auto mt-24 border-t border-neutral-200/60 px-4 pt-16 text-center sm:px-8">
        <div className="mx-auto max-w-2xl space-y-4">
          <div className="inline-flex size-10 items-center justify-center rounded-xl bg-neutral-950 text-[#F5C41B]">
            <Sparkles className="size-5" />
          </div>
          <h3 className="text-xl font-black tracking-tight text-neutral-950 uppercase sm:text-2xl">
            The NexVio Promise
          </h3>
          <p className="text-base leading-relaxed font-medium text-neutral-600 italic sm:text-lg">
            &ldquo;Helping businesses simplify operations, improve efficiency
            and deliver better customer experiences—every day.&rdquo;
          </p>
        </div>
      </section>
    </main>
  );
}
