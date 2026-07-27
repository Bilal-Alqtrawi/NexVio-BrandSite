import { Layers, Cloud, Smartphone, HeartHandshake } from "lucide-react";
import { Variants } from "framer-motion";
import { FeatureItem } from "@/types";

export const FEATURES_DATA: FeatureItem[] = [
  {
    icon: Layers,
    title: "One Unified Platform",
    desc: "Everything your business needs in one connected ecosystem."
  },
  {
    icon: Cloud,
    title: "Cloud-Based Platform",
    desc: "Access your business anytime, anywhere."
  },
  {
    icon: Smartphone,
    title: "Smart Devices",
    desc: "Integrated POS and payment solutions in one device."
  },
  {
    icon: HeartHandshake,
    title: "Local UAE Support",
    desc: "Local implementation, training, and ongoing support."
  }
];

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
