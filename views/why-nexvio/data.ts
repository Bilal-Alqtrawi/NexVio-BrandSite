import type { ReasonItem } from "@/types";
import {
  Layers,
  Smartphone,
  BarChart3,
  Cloud,
  TrendingUp,
  MapPin
} from "lucide-react";

export const REASONS: ReasonItem[] = [
  {
    number: "01",
    icon: Layers,
    title: "One Connected Platform",
    description:
      "Manage sales, payments, inventory, CRM and reporting through one unified system."
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Smart Commerce Devices",
    description:
      "Complete transactions, manage orders and access business tools from one intelligent device."
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Real-Time Visibility",
    description:
      "Monitor your business through live reports and dashboards that support faster, more informed decisions."
  },
  {
    number: "04",
    icon: Cloud,
    title: "Cloud-Based Management",
    description:
      "Access your business securely anytime, anywhere through a centralized cloud platform."
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Built to Grow",
    description:
      "Whether you're operating one location or multiple branches, the platform grows with your business."
  },
  {
    number: "06",
    icon: MapPin,
    title: "Local Expertise",
    description:
      "Professional implementation, onboarding, training and dedicated customer support across the UAE."
  }
];
