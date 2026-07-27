import {
  UtensilsCrossed,
  CheckCircle2,
  ArrowRight,
  ChefHat,
  CreditCard,
  Receipt,
  BarChart3,
  Layers
} from "lucide-react";
import Link from "next/link";
import React from "react";

const businessTypes = [
  "Restaurants",
  "Cafés",
  "Coffee Shops",
  "Fast Food",
  "Casual Dining",
  "Fine Dining",
  "Food Courts",
  "Cloud Kitchens"
] as const;

const capabilities = [
  "Digital Menu Management",
  "Table Order Management",
  "Menu Modifiers & Special Requests",
  "Kitchen Printer & KDS Integration",
  "Integrated Payment Acceptance",
  "Bill Splitting & Multiple Payment Methods",
  "Customer Profiles & CRM",
  "Inventory Synchronization",
  "Real-Time Sales Reports",
  "Multi-Branch Management"
] as const;

const workflowSteps = [
  { icon: UtensilsCrossed, label: "Customer Order" },
  { icon: ChefHat, label: "Sent to Kitchen" },
  { icon: ChefHat, label: "Meal Preparation" },
  { icon: CreditCard, label: "Payment on Device" },
  { icon: Receipt, label: "Receipt Printing" },
  { icon: Layers, label: "Inventory Updated" },
  { icon: BarChart3, label: "Reports Real-Time" }
] as const;

export default function RestaurantSolutionView() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fffbf0] font-sans text-black">
      {/* تحسين الـ Glow ليتناسب مع الخلفية الفاتحة */}
      <div className="pointer-events-none absolute top-0 right-0 size-150 translate-x-1/4 -translate-y-1/3 rounded-full bg-[#ffcc00]/15 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-24 px-4 py-20 sm:px-6 lg:px-8">
        {/* --- 1️⃣ Hero Section --- */}
        <section className="mx-auto max-w-4xl space-y-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-1.5 text-xs font-black tracking-widest text-neutral-800 uppercase backdrop-blur-xs">
            Industry Vertical
          </span>
          <h1 className="text-4xl leading-[1.1] font-black tracking-tight text-neutral-900 uppercase sm:text-6xl">
            Everything Your Restaurant <br />
            <span className="bg-linear-to-r from-neutral-900 via-neutral-800 to-neutral-600 bg-clip-text text-transparent">
              Needs. Connected.
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed font-medium text-neutral-600 sm:text-base md:text-lg">
            Running a successful restaurant requires speed, accuracy and
            complete operational control. NexVio Restaurant Solution connects
            every stage of restaurant operations into one intelligent
            platform from taking orders and communicating with the kitchen to
            processing payments.
          </p>
        </section>

        {/* --- 2️⃣ Operational Flow --- */}
        <section className="space-y-8 rounded-[36px] border border-black/5 bg-black/2 p-8 backdrop-blur-md md:p-12">
          <div className="space-y-2 text-center">
            <span className="text-xs font-black tracking-widest text-neutral-500 uppercase">
              [ Operational Flow ]
            </span>
            <h2 className="text-2xl font-black tracking-tight text-neutral-900 uppercase sm:text-3xl">
              From Order to Payment
            </h2>
          </div>

          {/* Desktop Flow */}
          <div className="hidden items-center justify-between gap-2 pt-6 lg:flex">
            {workflowSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <React.Fragment key={idx}>
                  <div className="flex flex-1 flex-col items-center space-y-3 text-center">
                    <div className="flex size-14 items-center justify-center rounded-2xl border border-black/10 bg-white text-neutral-900 shadow-xs transition-transform duration-300 hover:scale-105">
                      <Icon className="size-6 stroke-2" />
                    </div>
                    <span className="max-w-[110px] text-xs font-bold text-neutral-700">
                      {step.label}
                    </span>
                  </div>
                  {idx < workflowSteps.length - 1 && (
                    <ArrowRight className="mb-8 size-4 shrink-0 animate-pulse text-neutral-400" />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Mobile Flow */}
          <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-3 lg:hidden">
            {workflowSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white p-4 shadow-2xs"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-black/5 text-neutral-900">
                    <Icon className="size-5" />
                  </div>
                  <span className="text-xs font-bold text-neutral-800">
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* --- 3️⃣ Capabilities & Business Types Grid --- */}
        <section className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Key Capabilities */}
          <div className="space-y-6 lg:col-span-7">
            <h3 className="text-2xl font-black tracking-tight text-neutral-900 uppercase">
              Key Platform Capabilities
            </h3>
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white p-4 shadow-2xs transition-all duration-200 hover:border-black/10"
                >
                  <CheckCircle2 className="size-4 shrink-0 text-neutral-900" />
                  <span className="text-xs font-bold text-neutral-700 sm:text-sm">
                    {cap}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Niches Container */}
          <div className="space-y-6 rounded-[36px] border border-black/10 bg-linear-to-b from-white to-transparent p-8 shadow-xs lg:col-span-5">
            <h3 className="text-xl font-black tracking-tight text-neutral-900 uppercase">
              Designed for Every Food Business
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {businessTypes.map((type, idx) => (
                <div
                  key={idx}
                  className="cursor-default rounded-xl border border-black/5 bg-black/5 px-4 py-3 text-center text-xs font-black tracking-wider text-neutral-700 uppercase transition-all duration-200 hover:bg-neutral-900 hover:text-white"
                >
                  {type}
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3.5 text-center text-xs font-black tracking-widest text-white uppercase transition-transform hover:scale-102 hover:bg-neutral-800"
              >
                Request Restaurant Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
