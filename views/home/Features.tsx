import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    id: 1,
    imageSrc: "/features/feat-1.svg",
    title: "Business Intelligence",
    desc: "Business Technology Solutions",
    href: "."
  },
  {
    id: 2,
    imageSrc: "/features/feat-2.svg",
    title: "Inventory Management",
    desc: "Business Technology Solutions",
    href: "."
  },
  {
    id: 3,
    imageSrc: "/features/feat-3.svg",
    title: "Smart POS",
    desc: "Business Technology Solutions",
    href: "."
  },
  {
    id: 4,
    imageSrc: "/features/feat-4.svg",
    title: "Employee Management",
    desc: "Business Technology Solutions",
    href: "."
  },
  {
    id: 5,
    imageSrc: "/features/feat-5.svg",
    title: "Integrated Payments",
    desc: "Business Technology Solutions",
    href: "."
  },
  {
    id: 6,
    imageSrc: "/features/feat-6.svg",
    title: "Customer Relationship Management",
    desc: "Business Technology Solutions",
    href: "."
  }
] as const;

export default function Features() {
  return (
    <section className="relative container mx-auto w-full space-y-10 overflow-hidden px-4 pt-16 pb-24 sm:px-6">
      <h2 className="font mx-auto max-w-2xl text-center text-2xl leading-[1.3] tracking-tight sm:text-5xl">
        The Technology Behind Business Owners&apos; Success
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {features.map((feat) => (
          <div
            key={feat.id}
            style={{ backgroundImage: `url(${feat.imageSrc})` }}
            className="group transation relative z-3 flex h-80 flex-col border-white! bg-cover p-8 duration-300 hover:scale-105"
          >
            <div>
              <span className="font-monospace mb-5 inline-flex">
                {feat.id <= 9 ? `0${feat.id}` : feat.id}
              </span>
              <h2 className="mb-2 max-w-25 text-2xl font-semibold">
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
                className="duration-75 group-hover:animate-pulse"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
