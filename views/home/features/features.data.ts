export interface FeatureItem {
  id: number;
  title: string;
  desc: string;
  href: string;
  accentColor: string;
  variant?: "default" | "inventory" | "highlight";
}

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 1,
    title: "Business Intelligence",
    desc: "Access live dashboards, business reports and performance insights to support faster and more informed business decisions.",
    href: "/solutions/business-intelligence",
    accentColor: "rgba(128, 166, 175, 0.35)",
    variant: "default"
  },
  {
    id: 2,
    title: "Inventory Management",
    desc: "Track inventory in real time and maintain complete visibility across all your products and locations.",
    href: "/capabilities",
    accentColor: "rgba(25, 45, 52, 0.2)",
    variant: "inventory"
  },
  {
    id: 3,
    title: "Smart POS",
    desc: "Manage sales quickly through a fast, intuitive and user-friendly Point of Sale system designed for modern businesses.",
    href: "/capabilities",
    accentColor: "rgba(254, 223, 17, 0.55)",
    variant: "highlight"
  },
  {
    id: 4,
    title: "Employee Management",
    desc: "Monitor employee activity, permissions and operational performance through one centralized platform.",
    href: "/capabilities",
    accentColor: "rgba(128, 166, 175, 0.35)",
    variant: "default"
  },
  {
    id: 5,
    title: "Integrated Payments",
    desc: "Accept secure electronic payments directly from the same smart device without switching between different systems.",
    href: "/capabilities",
    accentColor: "rgba(128, 166, 175, 0.35)",
    variant: "default"
  },
  {
    id: 6,
    title: "Customer Relationship Management",
    desc: "Build stronger customer relationships by managing customer profiles, purchase history and engagement in one place.",
    href: "/solutions/crm",
    accentColor: "rgba(254, 223, 17, 0.45)",
    variant: "highlight"
  }
];
