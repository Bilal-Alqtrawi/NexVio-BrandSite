import {
  Coffee,
  Pill,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  UtensilsCrossed,
  Wrench
} from "lucide-react";

export const INDUSTRIES_DATA = [
  {
    id: "restaurants",
    name: "Restaurants",
    emoji: "🍽",
    icon: UtensilsCrossed,
    tagline: "Fine dining & fast service, synchronized perfectly.",
    desc: "Manage table layouts, coordinate kitchen display systems (KDS), split bills dynamically, and track raw ingredient costs in real-time.",
    features: [
      "Tableside ordering & payments",
      "Kitchen Display System (KDS)",
      "Dynamic menu management"
    ]
  },
  {
    id: "cafes",
    name: "Cafés",
    emoji: "☕",
    icon: Coffee,
    tagline: "Speed, loyalty, and the perfect brew.",
    desc: "Speed up transactions at the counter, build automated customer loyalty programs, and optimize coffee bean inventory with precision.",
    features: [
      "Quick-checkout & tap-to-pay",
      "Custom loyalty point engines",
      "Multi-option modifiers (milk, size, syrup)"
    ]
  },
  {
    id: "retail",
    name: "Retail Stores",
    emoji: "🛍",
    icon: ShoppingBag,
    tagline: "Seamless checkout, infinite shelf space.",
    desc: "Keep shelves stocked with smart inventory alerts, easily process returns, scan barcodes instantly, and run dynamic seasonal promotions.",
    features: [
      "Barcode scanner integration",
      "Real-time shelf inventory alerts",
      "Multi-item discount builders"
    ]
  },
  {
    id: "supermarkets",
    name: "Supermarkets",
    emoji: "🛒",
    icon: ShoppingCart,
    tagline: "Heavy-duty transaction volumes made easy.",
    desc: "Handle bulk pricing, integrated scale measurements, rapid high-volume queue-busting, and centralized warehouse supply management.",
    features: [
      "Digital scale integration",
      "Bulk and bundle pricing",
      "Reorder threshold notifications"
    ]
  },
  {
    id: "fashion",
    name: "Fashion & Apparel",
    emoji: "👗",
    icon: Shirt,
    tagline: "Sizes, colors, and stylish variations.",
    desc: "Organize products by complex matrix variants (sizes, colors, materials), track seasonal trends, and easily handle multi-store stock transfers.",
    features: [
      "Size & color matrix system",
      "Seasonal trend analytics",
      "Cross-store inventory lookup"
    ]
  },
  {
    id: "beauty",
    name: "Beauty & Wellness",
    emoji: "💄",
    icon: Sparkles,
    tagline: "Appointment booking meets retail checkout.",
    desc: "Allow clients to book appointments online, assign therapists, track room capacities, and upsell beauty packages seamlessly.",
    features: [
      "Interactive booking calendar",
      "Staff shift & commission tracking",
      "Service package bundles"
    ]
  },
  {
    id: "pharmacies",
    name: "Pharmacies",
    emoji: "💊",
    icon: Pill,
    tagline: "Precise batches, safety, and expiration tracking.",
    desc: "Track prescription drug batches, manage expiration date alerts, organize medicinal categorizations, and maintain absolute compliance.",
    features: [
      "Batch and expiry tracking",
      "Compliance and prescription logs",
      "Quick search by compound names"
    ]
  },
  {
    id: "services",
    name: "Service Businesses",
    emoji: "🔧",
    icon: Wrench,
    tagline: "Invoicing, dispatching, and task automation.",
    desc: "Create professional service estimates, bill clients by hours or materials, manage technicians on-site, and capture client signatures.",
    features: [
      "Quote-to-invoice generator",
      "Time and material tracking",
      "Digital client sign-offs"
    ]
  }
];
