import { RefreshCw } from "lucide-react";

const features = [
  {
    id: 1,
    imageSrc: "/features/feat-1.svg",
    title: "Business Intelligence",
    desc: "Access live dashboards, business reports and performance insights to support faster and more informed business decisions.",
    href: "/solutions/business-intelligence",
    shadowColor: "#E1C7D1"
  },
  {
    id: 2,
    imageSrc: "/features/feat-2.svg",
    title: "Inventory Management",
    desc: "Track inventory movement in real time and maintain complete visibility across your products and locations.",
    href: "/solutions/inventory-management",
    shadowColor: "#E3E5FC"
  },
  {
    id: 3,
    imageSrc: "/features/feat-3.svg",
    title: "Smart POS",
    desc: "Manage sales quickly through a fast, intuitive and user-friendly Point of Sale system designed for modern businesses.",
    href: "/solutions/smart-pos",
    shadowColor: "#C6D5F9"
  },
  {
    id: 4,
    imageSrc: "/features/feat-4.svg",
    title: "Employee Management",
    desc: "Monitor employee activity, permissions and operational performance through one centralized platform.",
    href: "/solutions/employee-management",
    shadowColor: "#CEE5F7"
  },
  {
    id: 5,
    imageSrc: "/features/feat-5.svg",
    title: "Integrated Payments",
    desc: "Accept secure electronic payments directly from the same smart device without switching between different systems.",
    href: "/solutions/integrated-payments",
    shadowColor: "#BEEDFA"
  },
  {
    id: 6,
    imageSrc: "/features/feat-6.svg",
    title: "Customer Relationship Management",
    desc: "Build stronger customer relationships by managing customer profiles, purchase history and engagement in one place.",
    href: "/solutions/crm",
    shadowColor: "#B2DAB2"
  }
] as const;

export default function Features() {
  return (
    <section
      id="features"
      className="relative container mx-auto w-full space-y-14 overflow-hidden px-4 pt-16 pb-24 sm:px-6"
    >
      {/* Header Section */}
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <span className="text-brand-yellow bg-brand-yellow/10 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase">
          The NexVio Ecosystem
        </span>
        <h2 className="text-2xl leading-[1.2] font-black tracking-tight text-neutral-900 sm:text-5xl">
          Everything Your Business Needs. Connected.
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
          Instead of using multiple disconnected systems, every transaction,
          update and business activity is automatically synchronized, providing
          complete visibility across the entire business.
        </p>
      </div>

      {/* Grid Features */}
      <div className="flex w-full snap-x snap-mandatory scrollbar-none gap-6 overflow-x-auto pb-6 sm:grid sm:grid-cols-2 sm:overflow-x-visible sm:pb-0 lg:grid-cols-3">
        {features.map((feat) => (
          <div
            key={feat.id}
            style={{
              backgroundImage: `url(${feat.imageSrc})`,
              boxShadow: `11px 18px 30px -16px ${feat.shadowColor}`
            }}
            className="group relative z-3 flex h-96 w-[85vw] shrink-0 snap-center flex-col rounded-3xl border border-white bg-cover p-8 transition-transform duration-300 hover:scale-105 sm:h-90 sm:w-full sm:snap-align-none"
          >
            <div>
              <span className="font-monospace mb-4 inline-flex font-medium text-neutral-400">
                {feat.id <= 9 ? `0${feat.id}` : feat.id}
              </span>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
                {feat.title}
              </h3>
              <p className="line-clamp-4 max-w-xs text-sm leading-relaxed text-neutral-600">
                {feat.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 rounded-3xl border border-neutral-800 bg-neutral-900 p-8 text-white shadow-xl sm:p-10 md:flex-row">
        <div className="max-w-xl space-y-2">
          <h4 className="text-xl font-bold tracking-tight sm:text-2xl">
            Everything Works Together
          </h4>
          <p className="text-xs leading-relaxed text-neutral-400 sm:text-sm">
            Every order, every payment, every inventory update, and every
            customer interaction is automatically connected through one
            intelligent ecosystem.
          </p>
        </div>
        <div className="text-brand-yellow flex w-full flex-col items-start gap-4 rounded-2xl border border-neutral-700/30 bg-neutral-800/50 px-5 py-4 text-xs font-semibold sm:flex-row sm:items-center md:w-auto">
          <div className="flex items-center gap-2">
            <RefreshCw size={14} className="animate-spin-slow" />
            <span>Automatically connected</span>
          </div>
          <span className="hidden text-neutral-600 sm:inline">|</span>
          <span className="font-normal text-white italic">
            Because better connections create better businesses.
          </span>
        </div>
      </div>
    </section>
  );
}
