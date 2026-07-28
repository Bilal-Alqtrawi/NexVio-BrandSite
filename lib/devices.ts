export interface DeviceHighlight {
  title: string;
  description: string;
}

export interface DeviceSpecSheet {
  processor?: string;
  os?: string;
  memory?: string;
  display?: string;
  printer?: string;
  connectivity?: string;
  battery?: string;
}

export interface DeviceFAQItem {
  question: string;
  answer: string;
}

export interface DeviceFeatureDetails {
  featuresText?: string;
  featuresTags?: string[];
  benefitsText?: string;
  engagementText?: string;
  engagementItems?: { title: string; subtitle: string }[];
}

export interface Device {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  bannerImg: string;
  deviceImg: string;
  specs: string[];
  highlights: DeviceHighlight[];
  specSheet?: DeviceSpecSheet;
  videoUrl?: string;
  faqs?: DeviceFAQItem[];
  featureDetails?: DeviceFeatureDetails;
}

export const devices: Device[] = [
  {
    slug: "nova-55f",
    name: "Nova 55F",
    tagline: "All-in-one POS and payment terminal",
    description:
      "Serve customers and accept payments anywhere, using a single, compact retail POS solution, built for business growth.",
    bannerImg: "/banners/nova-55f-banner.jpeg",
    deviceImg: "/devices/nova-55f.png",
    videoUrl: "/videos/nova-55f.mp4",
    specs: [
      "Accepts cards, wallets, and more - on the go",
      "Loyalty tools for small & large businesses",
      "Cloud-based management",
      "Customer engagement tools"
    ],
    highlights: [
      {
        title: "Built for Business",
        description: "Reliable technology engineered for everyday operations."
      },
      {
        title: "80+ Payment Methods",
        description:
          "Accept any way your customers want to pay, from local schemes to international wallets."
      },
      {
        title: "Future-Proof Technology",
        description:
          "Built on a robust architecture that updates seamlessly with next-generation point-of-sale features."
      },
      {
        title: "Safe and Secure",
        description:
          "Fully compliant with top industry security standards to safeguard every financial transaction."
      }
    ],
    specSheet: {
      processor: "Quad-Core Cortex-A53, 1.4GHz",
      os: "Android Secure OS",
      memory: "2GB RAM + 16GB Flash",
      display: "5.5 IPS HD (1280 x 720) capacitive touch screen",
      printer: "Built-in 58mm high-speed thermal printer",
      connectivity: "4G LTE / Dual-band Wi-Fi / Bluetooth 5.0",
      battery: "5200mAh Li-ion rechargeable for full-day mobility"
    },
    featureDetails: {
      featuresText:
        "A compact, smart device designed to seamlessly streamline operations, drive retail growth, and sell anywhere.",
      featuresTags: ["POS", "Payments", "Inventory", "CRM"],
      benefitsText:
        "The Nova 55F ecosystem offers fast secure transactions, enterprise connectivity, and optimized workflow management.",
      engagementText:
        "Engage customers everywhere—on the shop floor, indoors, or outdoors—all while staying connected to your central cloud terminal."
    }
  },
  {
    slug: "nova-modu",
    name: "Nova Modu",
    tagline: "The Smart POS That Adapts to Your Business",
    description:
      "Designed for businesses that need flexibility, Nova Modu adapts to mobile, countertop, and retail environments while keeping operations fast, connected, and efficient.",
    bannerImg: "/banners/nova-modu-banner.jpeg",
    deviceImg: "/devices/nova-modu.png",
    videoUrl: "/videos/nova-modu.mp4",
    specs: [
      '6.5" bright touch screen',
      "Optional Barcode Scanner",
      "Thermal Printer Support",
      "5G & Wi-Fi 6 Connectivity"
    ],
    highlights: [
      {
        title: "Modular Scalability",
        description:
          "Clip on hardware tools as your daily retail workflows change and grow."
      },
      {
        title: "Smart Inventory Tracking",
        description:
          "Scan high volumes of items rapidly with integrated enterprise hardware."
      }
    ],
    specSheet: {
      processor: "Octa-core 2.0GHz",
      os: "Android 11 OS",
      memory: "4GB RAM + 64GB ROM",
      display: "6.5-inch FHD+ capacitive touch screen",
      connectivity: "5G / 4G LTE / Wi-Fi 6 / NFC",
      battery: "6000mAh with Quick Charge"
    },
    featureDetails: {
      featuresText:
        "A compact, smart device designed to seamlessly streamline operations.",
      featuresTags: ["Modular POS", "Barcodes", "5G Ready", "Flexibility"],
      benefitsText:
        "The Nova Modu ecosystem offers fast secure transactions, enterprise connectivity, and optimized workflow management.",
      engagementText:
        "Engage customers everywhere—on the shop floor, indoors, or outdoors—all while staying connected to your central cloud terminal."
    }
  },
  {
    slug: "nova-kiosk",
    name: "Nova Kiosk",
    tagline: "Self-service reimagined for modern retail",
    description:
      "Empower customers to browse, order, and pay independently through a sleek, self-service kiosk designed for fast and seamless experiences.",
    bannerImg: "/banners/nova-kiosk-banner.jpeg",
    deviceImg: "/devices/nova-kiosk.webp",
    videoUrl: "/videos/nova-kiosk.mp4",
    specs: [
      '21.5" Full HD interactive touch display',
      "Integrated secure payment terminal dock",
      "Thermal receipt printer with auto-cutter",
      "Robust pedestal stand with ambient lighting"
    ],
    highlights: [
      {
        title: "Shorter Queues",
        description:
          "Reduce checkout lines during peak hours by diverting traffic to self-service."
      },
      {
        title: "Upsell Automatically",
        description:
          "Smart software UI encourages add-ons and dynamic promotions seamlessly."
      }
    ],
    featureDetails: {
      featuresText:
        "A complete self-service kiosk designed to streamline operations and improve customer flow.",
      featuresTags: [
        "Self-Service",
        "Touch Display",
        "Auto-Cutter",
        "Kiosk Stand"
      ],
      benefitsText:
        "The Nova Kiosk ecosystem offers fast secure transactions, enterprise connectivity, and optimized workflow management.",
      engagementText:
        "Engage customers everywhere—on the shop floor, indoors, or outdoors—all while staying connected to your central cloud terminal."
    }
  },
  {
    slug: "nova-c20",
    name: "Nova C20",
    tagline: "Compact countertop cash register for high-traffic retail",
    description:
      "A durable countertop cash register built for fast checkouts, keeping lines moving and customers happy with smooth retail operations.",
    bannerImg: "/sliders/slider-2.svg",
    deviceImg: "/devices/156.png",
    videoUrl: "/videos/nova-c3.mp4",
    specs: [
      "Accepts EMV, contactless, magnetic stripe, QR code, and mobile wallet payments",
      "Interactive customer-facing color touchscreen",
      "Compact ergonomic design for countertop setups",
      "Wired and wireless communication options"
    ],
    highlights: [
      {
        title: "Smart, Simple Transactions",
        description:
          "Instant NFC and mobile wallet support makes every transaction fast, simple, and user-friendly."
      },
      {
        title: "Fortified by Design",
        description:
          "Built-in advanced encryption, PCI compliance, and secure processors keep every transaction safe."
      },
      {
        title: "Seamless Integration",
        description:
          "Connects effortlessly with existing Nayax POS systems and self-checkout kiosks."
      },
      {
        title: "Improved Customer Engagement",
        description:
          "Drives sales with a high-performance multilingual display designed for in-store promotions."
      }
    ],
    specSheet: {
      processor: "Highly secure dedicated crypto processor",
      os: "Secure Android Terminal OS",
      display: "Interactive color touchscreen with multilingual support",
      connectivity: "Flexible wired and wireless communication options",
      printer: "Integrated receipt printing support"
    },
    faqs: [
      {
        question: "What payment methods does the Nova C20 accept?",
        answer:
          "The Nova C20 accepts EMV chip, contactless cards, magnetic stripe, QR codes, and popular mobile wallets like Apple Pay and Google Pay."
      },
      {
        question: "Is the Nova C20 secure for processing retail transactions?",
        answer:
          "Yes, it is fully PCI compliant and certified with EMV Contact/Contactless, featuring end-to-end advanced encryption protocols."
      },
      {
        question: "Can it be integrated into self-service kiosks?",
        answer:
          "Absolutely. Thanks to its compact design and robust connectivity, it seamlessly integrates with Nayax POS setups and self-checkout kiosks."
      }
    ],
    featureDetails: {
      featuresText:
        "A compact countertop payment terminal designed for fast, secure transactions and reliable everyday retail operations.",
      featuresTags: [
        "Countertop",
        "NFC / QR",
        "PCI Compliant",
        "Multi-Language"
      ],
      benefitsText:
        "The Nova C20 ecosystem offers fast secure transactions, enterprise connectivity, and optimized workflow management.",
      engagementText:
        "Engage customers everywhere—on the shop floor, indoors, or outdoors—all while staying connected to your central cloud terminal."
    }
  },
  {
    slug: "nova-market",
    name: "Nova Market",
    tagline: "Elegant dual-display retail POS station",
    description:
      "A stylish dual-display POS station designed for boutiques, cafés, and modern micromarkets—built as a true cash register, not a PIN pad.",
    bannerImg: "/banners/nova-market-banner.jpeg",
    deviceImg: "/devices/nova-market.webp",
    videoUrl: "/videos/nova-market.mp4",
    specs: [
      "High-definition dual IPS capacitive display",
      "Sleek minimalist structural design",
      "Integrated high-speed printer and scanning sensors"
    ],
    highlights: [
      {
        title: "Aesthetic Appeal",
        description:
          "Enhance your store's modern look with an ultra-sleek, minimalist aesthetic."
      },
      {
        title: "Seamless Staff Handover",
        description:
          "Intuitive touch controls optimized for speedy orders and multi-operator shifts."
      }
    ],
    featureDetails: {
      featuresText:
        "A smart retail POS station designed to streamline operations, improve efficiency, and support everyday business growth.",
      featuresTags: ["Dual Display", "Fast Checkout", "Scanner", "Printer"],
      benefitsText:
        "The Nova Market ecosystem offers fast secure transactions, enterprise connectivity, and optimized workflow management.",
      engagementText:
        "Engage customers everywhere—on the shop floor, indoors, or outdoors—all while staying connected to your central cloud terminal."
    }
  }
];

export function getDeviceBySlug(slug: string): Device | undefined {
  return devices.find((d) => d.slug === slug);
}
