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
    <main className="bg-brand-teal text-brand-cream w-full pb-24 font-sans">
      <section className="container mx-auto px-4 py-12 sm:px-8">
        <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <h1 className="text-brand-yellow shrink-0 text-3xl font-black tracking-tight uppercase sm:text-4xl">
            About
          </h1>
          <span className="text-brand-yellow/50 hidden rotate-12 transform text-5xl font-extralight sm:block">
            /
          </span>
          <p className="text-brand-cream/80 max-w-sm pt-1 text-sm leading-relaxed font-bold tracking-wider uppercase">
            More Than a POS
            <br />A Complete Business Platform
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pl-4 sm:px-0 sm:pl-6">
        <div className="relative">
          <div className="bg-brand-cream/10 border-teal-light/20 flex flex-col items-center gap-8 rounded-3xl border p-6 backdrop-blur-md lg:flex-row lg:gap-12 lg:rounded-l-full lg:p-8 lg:pr-16">
            <div className="border-teal-light/30 w-full max-w-145 shrink-0 rounded-full border p-3 sm:p-4 lg:w-1/2">
              <div className="relative aspect-16/10 w-full overflow-hidden rounded-full shadow-lg">
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
              <p className="text-brand-cream text-base leading-relaxed font-bold md:text-lg">
                Run your entire business from one connected platform—combining
                smart POS, integrated payments, business management, and
                real-time insights to simplify operations and drive growth.
              </p>
              <p className="text-brand-cream/80 mt-4 text-sm leading-relaxed font-normal sm:text-base">
                Whether you&apos;re opening your first business or expanding
                across multiple locations, NexVio provides the flexibility,
                reliability and support needed to grow with confidence.
              </p>
            </div>
          </div>

          <div className="mt-12 max-w-3xl space-y-6 px-4 sm:px-12 lg:px-24">
            <div className="pt-4">
              <ContactUsButton variant="teal" />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-28 px-4 sm:px-8">
        <div className="mb-12 space-y-4 text-center">
          <span className="text-brand-yellow inline-flex text-xs font-black tracking-widest uppercase">
            Strategic Advantages
          </span>
          <h2 className="text-brand-cream text-3xl font-black tracking-tight uppercase sm:text-4xl lg:text-5xl">
            Why Businesses Choose NexVio
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {WHY_NEXVIO.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group border-teal-light/20 bg-brand-cream hover:border-brand-yellow flex flex-col items-start justify-between gap-4 rounded-2xl border p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <span className="bg-brand-yellow/20 text-brand-teal group-hover:bg-brand-yellow inline-flex size-10 items-center justify-center rounded-full transition-colors duration-300">
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
        <div className="border-teal-light/20 bg-brand-cream/5 text-brand-cream relative overflow-hidden rounded-[2.5rem] border px-8 py-16 text-center backdrop-blur-md sm:px-16">
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="bg-brand-yellow/30 absolute top-0 left-0 size-80 -translate-x-20 -translate-y-20 rounded-full blur-[100px]" />
          </div>

          <p className="text-brand-yellow text-xs font-black tracking-[0.2em] uppercase">
            Powered by Nayax. Delivered by NexVio
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-2xl leading-snug font-black uppercase sm:text-3xl lg:text-4xl">
            Global Technology. Local UAE Expertise
          </h2>

          <p className="text-brand-cream/80 mx-auto mt-6 max-w-3xl text-sm leading-relaxed sm:text-base">
            As an Authorized Nayax Partner, NexVio combines globally trusted
            commerce technology with local expertise to deliver secure,
            scalable, and future-ready business solutions across the UAE.
          </p>

          <p className="text-brand-cream/60 mx-auto mt-4 max-w-3xl text-sm leading-relaxed">
            From implementation and training to ongoing support, we help
            businesses succeed with confidence.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              className="bg-brand-yellow text-brand-teal hover:bg-brand-yellow-dark h-12 w-full rounded-full border-none px-8 text-sm font-bold tracking-wide transition-all sm:w-auto"
              nativeButton={false}
              render={<Link href="/at-a-glance" />}
            >
              <span>NexVio at a Glance</span>
            </Button>
            <Button
              variant="outline"
              className="border-brand-cream/30 text-brand-cream hover:bg-brand-cream/10 hover:text-brand-cream h-12 w-full rounded-full bg-transparent px-8 text-sm font-bold tracking-wide sm:w-auto"
              nativeButton={false}
              render={<Link href="/vision-and-mission" />}
            >
              <span>Our Vision & Mission</span>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-teal-light/20 container mx-auto mt-24 border-t px-4 pt-16 text-center sm:px-8">
        <div className="from-brand-yellow-light via-brand-yellow to-brand-yellow border-brand-yellow/30 mx-auto max-w-2xl space-y-4 rounded-2xl border bg-linear-to-tl p-8 shadow-xl">
          <div className="bg-brand-teal text-brand-yellow inline-flex size-10 items-center justify-center rounded-xl">
            <Sparkles className="size-5" />
          </div>
          <h3 className="text-brand-teal text-xl font-black tracking-tight uppercase sm:text-2xl">
            The NexVio Promise
          </h3>
          <p className="text-brand-teal/80 text-base leading-relaxed font-medium sm:text-lg">
            &ldquo;Helping businesses simplify operations, improve efficiency
            and deliver better customer experiences every day.&rdquo;
          </p>
        </div>
      </section>
    </main>
  );
}
