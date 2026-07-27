import type { CoreValue } from "@/types";
import { Handshake, Heart, ShieldCheck, Sparkles, Zap } from "lucide-react";

export const CORE_VALUES: CoreValue[] = [
  {
    number: "01",
    icon: Heart,
    title: "Customer Success",
    description: "Our customers' success is the foundation of everything we do."
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Innovation",
    description:
      "We continuously evolve our technology to meet the changing needs of modern businesses."
  },
  {
    number: "03",
    icon: Zap,
    title: "Simplicity",
    description:
      "Powerful solutions should always be intuitive, efficient and easy to use."
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Reliability",
    description:
      "Businesses deserve technology they can trust every single day."
  },
  {
    number: "05",
    icon: Handshake,
    title: "Partnership",
    description:
      "We build long-term relationships by supporting our customers beyond implementation."
  }
];
