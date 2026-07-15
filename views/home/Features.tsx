import { ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    id: 1,
    imageSrc: "/features/feat-1.svg",
    title: "Business Intelligence",
    desc: "Business Technology Solutions",
    href: ".",
    shadowColor: "#E1C7D1"
  },
  {
    id: 2,
    imageSrc: "/features/feat-2.svg",
    title: "Inventory Management",
    desc: "Business Technology Solutions",
    href: ".",
    shadowColor: "#E3E5FC"
  },
  {
    id: 3,
    imageSrc: "/features/feat-3.svg",
    title: "Smart POS",
    desc: "Business Technology Solutions",
    href: ".",
    shadowColor: "#C6D5F9"
  },
  {
    id: 4,
    imageSrc: "/features/feat-4.svg",
    title: "Employee Management",
    desc: "Business Technology Solutions",
    href: ".",
    shadowColor: "#CEE5F7"
  },
  {
    id: 5,
    imageSrc: "/features/feat-5.svg",
    title: "Integrated Payments",
    desc: "Business Technology Solutions",
    href: ".",
    shadowColor: "#BEEDFA"
  },
  {
    id: 6,
    imageSrc: "/features/feat-6.svg",
    title: "Customer Relationship Management",
    desc: "Business Technology Solutions",
    href: ".",
    shadowColor: "#B2DAB2"
  }
] as const;

export default function Features() {
  return (
    <section
      id="features"
      className="relative container mx-auto w-full space-y-10 overflow-hidden px-4 pt-16 pb-24 sm:px-6"
    >
      <h2 className="font mx-auto max-w-2xl text-center text-2xl leading-[1.3] tracking-tight sm:text-5xl">
        The Technology Behind Business Owners&apos; Success
      </h2>

      <div className="flex w-full snap-x snap-mandatory scrollbar-none gap-6 overflow-x-auto pb-6 sm:grid sm:grid-cols-2 sm:overflow-x-visible sm:pb-0 lg:grid-cols-3">
        {features.map((feat) => (
          <div
            key={feat.id}
            style={{
              backgroundImage: `url(${feat.imageSrc})`,
              boxShadow: `11px 18px 30px -16px ${feat.shadowColor}`
            }}
            className="group relative z-3 flex h-85 w-[85vw] shrink-0 snap-center flex-col rounded-3xl border border-white bg-cover p-8 transition-transform duration-300 hover:scale-105 sm:h-80 sm:w-full sm:snap-align-none"
          >
            <div>
              <span className="font-monospace mb-5 inline-flex">
                {feat.id <= 9 ? `0${feat.id}` : feat.id}
              </span>
              <h2 className="mb-2 max-w-25 text-xl font-semibold sm:text-2xl">
                {feat.title}
              </h2>
              <p className="max-w-40 text-sm">{feat.desc}</p>
            </div>

            <Link
              href={feat.href}
              className="bg-brand-yellow group-hover:bg-brand-cream mt-auto mb-2 inline-flex size-10 items-center justify-center rounded-full duration-200"
            >
              <ArrowRight
                size={18}
                className="text-neutral-900 transition-transform duration-300 ease-out group-hover:translate-x-1.5"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
