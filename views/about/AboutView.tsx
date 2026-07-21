"use client";

import ContactUsButton from "@/components/shared/ContactUsButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Layers,
  CreditCard,
  Cloud,
  Package,
  Users2,
  BarChart3,
  GitBranch,
  MapPin,
  ShieldCheck,
  Sparkles,
  MonitorSmartphone
} from "lucide-react";
import Image from "next/image";

const WHY_NEXVIO = [
  { icon: Layers, label: "One Connected Platform" },
  { icon: CreditCard, label: "Smart POS & Payments" },
  { icon: Cloud, label: "Cloud-Based Platform" },
  { icon: Package, label: "Inventory & Team Management" },
  { icon: Users2, label: "Customer Loyalty & CRM" },
  { icon: BarChart3, label: "Business Intelligence & Analytics" },
  { icon: GitBranch, label: "Multi-Branch Management" },
  { icon: MapPin, label: "Local UAE Support" },
  { icon: ShieldCheck, label: "Trusted Technology" },
  { icon: MonitorSmartphone, label: "Kitchen Display System (KDS)" }
];

export default function AboutView() {
  return (
    <main className="from-background to-card/20 text-foreground w-full bg-linear-to-b pb-24 font-sans">
      <section className="container mx-auto px-4 py-12 sm:px-8">
        <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <h1 className="text-brand-teal shrink-0 text-3xl font-black tracking-tight uppercase sm:text-4xl">
            About
          </h1>
          <span className="text-brand-teal hidden rotate-12 transform text-5xl font-extralight sm:block">
            /
          </span>
          <p className="text-muted-foreground max-w-sm pt-1 text-sm leading-relaxed font-bold tracking-wider uppercase">
            More Than a POS
            <br />
            A Complete Business Platform
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pl-4 sm:px-0 sm:pl-6">
        <div className="relative">
          <div className="bg-card/10 border-brand-teal/20 flex flex-col items-center gap-8 rounded-3xl border p-6 backdrop-blur-xs lg:flex-row lg:gap-12 lg:rounded-l-full lg:p-8 lg:pr-16">
            <div className="border-brand-teal/20 w-full max-w-145 shrink-0 rounded-full border p-3 sm:p-4 lg:w-1/2">
              <div className="relative aspect-16/10 w-full overflow-hidden rounded-full shadow-xs">
                <Image
                  src="/about/about-office.png"
                  alt="NexVio office and team workspace"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            <div className="flex-1 lg:max-w-xl">
              <p className="text-brand-teal text-base leading-relaxed font-bold md:text-lg">
                Run your entire business from one connected platform—combining
                smart POS, integrated payments, business management, and
                real-time insights to simplify operations and drive growth.
              </p>
              <p className="text-brand-teal/80 mt-4 text-sm leading-relaxed font-normal sm:text-base">
                Whether you&apos;re opening your first business or expanding
                across multiple locations, NexVio provides the flexibility,
                reliability and support needed to grow with confidence.
              </p>
            </div>
          </div>

          <div className="mt-12 max-w-3xl space-y-6 px-4 sm:px-12 lg:px-24">
            <div className="pt-4">
              <ContactUsButton variant="yellow" className="w-full sm:w-64" />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-28 px-4 sm:px-8">
        <div className="mb-12 space-y-2 text-center">
          <span className="text-xs font-black tracking-widest text-[#D4A313] uppercase">
            Strategic Advantages
          </span>
          <h2 className="text-brand-teal text-3xl font-black tracking-tight uppercase sm:text-4xl lg:text-5xl">
            Why Businesses Choose NexVio
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {WHY_NEXVIO.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-neutral-200/70 bg-white p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#F5C41B] hover:shadow-[0_12px_30px_-10px_rgba(245,196,27,0.15)]"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-[#F5C41B]/10 text-[#D4A313]">
                <Icon className="size-5 stroke-2" />
              </span>
              <p className="text-brand-teal text-sm leading-snug font-black">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto mt-24 px-4 sm:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#152830] px-8 py-16 text-center text-white sm:px-16">
          <div className="pointer-events-none absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 size-80 -translate-x-20 -translate-y-20 rounded-full bg-[#80a6af] blur-[100px]" />
          </div>

          <p className="text-xs font-black tracking-[0.2em] text-[#F5C41B] uppercase">
            Powered by Nayax. Delivered by NexVio
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-2xl leading-snug font-black uppercase sm:text-3xl lg:text-4xl">
            Global Technology. Local UAE Expertise
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-neutral-300 sm:text-base">
            As an Authorized Nayax Partner, NexVio combines globally trusted
            commerce technology with local expertise to deliver secure,
            scalable, and future-ready business solutions across the UAE.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-neutral-400">
            From implementation and training to ongoing support, we help
            businesses succeed with confidence.
          </p>

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

      <section className="container mx-auto mt-24 border-t border-neutral-200/60 px-4 pt-16 text-center sm:px-8">
        <div className="mx-auto max-w-2xl space-y-4">
          <div className="inline-flex size-10 items-center justify-center rounded-xl bg-[#152830] text-[#F5C41B]">
            <Sparkles className="size-5" />
          </div>
          <h3 className="text-brand-teal text-xl font-black tracking-tight uppercase sm:text-2xl">
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
