import Link from "next/link";
import { Button } from "@/components/ui/button";
import ContactUsButton from "@/components/shared/ContactUsButton";
import {
  Layers,
  Smartphone,
  BarChart3,
  Cloud,
  TrendingUp,
  MapPin
} from "lucide-react";

const REASONS = [
  {
    icon: Layers,
    title: "One Connected Platform",
    description:
      "Manage sales, payments, inventory, CRM and reporting through one unified system."
  },
  {
    icon: Smartphone,
    title: "Smart Commerce Devices",
    description:
      "Complete transactions, manage orders and access business tools from one intelligent device."
  },
  {
    icon: BarChart3,
    title: "Real-Time Visibility",
    description:
      "Monitor your business through live reports and dashboards that support faster, more informed decisions."
  },
  {
    icon: Cloud,
    title: "Cloud-Based Management",
    description:
      "Access your business securely anytime, anywhere through a centralized cloud platform."
  },
  {
    icon: TrendingUp,
    title: "Built to Grow",
    description:
      "Whether you're operating one location or multiple branches, the platform grows with your business."
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description:
      "Professional implementation, onboarding, training and dedicated customer support across the UAE."
  }
];

export default function WhyNexvioView() {
  return (
    <main className="bg-[#FFFAF2] py-10 lg:py-16">
      <section className="container mx-auto mb-16 px-4 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-brand-yellow text-xs font-bold tracking-[0.2em] uppercase">
            Why NexVio
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
            One Platform. Endless Possibilities.
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-neutral-600 sm:text-base">
            NexVio brings together smart POS, integrated payments, and business
            management in one intelligent platform, helping businesses simplify
            operations, manage sales efficiently, and deliver a better customer
            experience.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-8">
        <div className="relative mx-auto mb-20 max-w-7xl rounded-[2.5rem] bg-[#FFD700] px-8 py-16 text-center shadow-lg">
          <h2 className="mx-auto max-w-lg text-3xl font-bold text-neutral-950 sm:text-4xl">
            Less Complexity. More Control. Better Business.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm font-medium text-neutral-900">
            A better way to run your business.
          </p>
          <div className="mt-4">
            <ContactUsButton variant="teal" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center space-y-3 text-center"
            >
              <span className="bg-brand-yellow/20 inline-flex size-14 items-center justify-center rounded-full">
                <Icon className="size-6 text-neutral-900" />
              </span>
              <h3 className="text-lg font-bold tracking-tight text-neutral-950">
                {title}
              </h3>
              <p className="max-w-65.5 text-sm leading-relaxed font-medium text-neutral-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto mt-20 px-4 sm:px-8">
        <div className="rounded-[2.5rem] bg-[#152830] px-8 py-14 text-center text-white sm:px-16">
          <p className="text-brand-yellow text-xs font-bold tracking-[0.2em] uppercase">
            The NexVio Advantage
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-2xl leading-snug font-bold sm:text-3xl">
            Instead of purchasing multiple systems from different providers,
            businesses work with one trusted technology partner.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/60">
            One Platform. One Partner. One Connected Business.
          </p>
          <div className="mt-8">
            <Button
              variant="outline"
              className="bg-brand-yellow h-12 rounded-full border-none px-8 text-sm font-bold tracking-wide text-neutral-950"
              nativeButton={false}
              render={<Link href="/capabilities" />}
            >
              <span>Explore Platform Capabilities</span>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
