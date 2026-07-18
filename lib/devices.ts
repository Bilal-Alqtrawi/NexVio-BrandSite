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
}

export const devices: Device[] = [
  {
    slug: "nova-55f",
    name: "Nova 55F",
    tagline: "All-in-one POS and payment terminal",
    description:
      "Serve customers and accept payments anywhere, using a single, compact retail POS solution, built for business growth.",
    bannerImg: "/sliders/slider-3.svg",
    deviceImg: "/sliders/slider-3.svg",
    videoUrl: "/videos/nova-55f.mp4", // يمكنك استبداله برابط اليوتيوب أو المسار المباشر
    specs: [
      "Accepts cards, wallets, and more - on the go",
      "Loyalty tools for small & large businesses",
      "Cloud-based management",
      "Customer engagement tools"
    ],
    highlights: [
      {
        title: "Globally Trusted",
        description:
          "Secure, reliable devices trusted by businesses worldwide to scale daily operations."
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
    }
  },
  {
    slug: "nova-modu",
    name: "Nova Modu",
    tagline: "A smart POS for ultimate business flexibility",
    description:
      "A highly modular smart retail device crafted to adapt seamlessly to your inventory tracking, mobile or tabletop needs.",
    bannerImg: "/sliders/nova mod.png",
    deviceImg: "/banners/nova mod.png",
    videoUrl: "/videos/nova-modu.mp4",
    specs: [
      '6.5" bright touch screen',
      "Optional clip-on scanner for barcodes",
      "Flexible attachment options for thermal printers",
      "Supports 5G and Wi-Fi 6 connectivity"
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
    }
  },
  {
    slug: "nova-156",
    name: "Nova 156",
    tagline: "The complete desktop countertop powerhouse",
    description:
      "A fully integrated countertop system combining dual screens, heavy-duty POS, and complete peripherals for high-volume stores.",
    bannerImg: "/sliders/156.png",
    deviceImg: "/sliders/156.png",
    videoUrl: "/videos/nova-156.mp4",
    specs: [
      '15.6" primary operator touchscreen',
      '10.1" customer-facing secondary display',
      "Heavy-duty electronic cash drawer & scanner",
      "High-speed desktop thermal printer included"
    ],
    highlights: [
      {
        title: "Dual-Screen Engagement",
        description:
          "Show itemized billing and promotional campaigns to customers in real time."
      },
      {
        title: "All-in-One Desk Set",
        description:
          "Organize your checkout counter with integrated payment terminal and printer mounts."
      }
    ]
  },
  {
    slug: "nova-kiosk",
    name: "Nova Kiosk",
    tagline: "Self-service reimagined for modern retail",
    description:
      "Empower your customers to browse, order, and pay independently with a sleek, interactive self-service terminal.",
    bannerImg: "/sliders/nova-kiosk.png",
    deviceImg: "/sliders/nova-kiosk.png",
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
    ]
  },
  {
    slug: "nova-c3",
    name: "Nova C3",
    tagline: "Compact PIN Pad Terminal for High-Traffic Contactless Payments",
    description:
      "A compact, durable PIN pad terminal that streamlines checkouts to keep your lines moving and your customers happy, ensuring smooth and seamless retail operations.",
    bannerImg: "/sliders/slider-1.svg",
    deviceImg: "/sliders/slider-1.svg",
    videoUrl: "/videos/nova-c3.mp4",
    specs: [
      "Accepts EMV, contactless, magnetic stripe, QR code, and mobile wallet payments",
      "Interactive 2.4” customer-facing color touchscreen",
      "Compact, ergonomic design perfect for countertop or integrated setups",
      "Wired and wireless communication options for always-on activity"
    ],
    highlights: [
      {
        title: "Smart, Simple Transactions",
        description:
          "Instant NFC and mobile wallet support makes every transaction fast, simple, and user-friendly, keeping checkout lines moving quickly."
      },
      {
        title: "Fortified by Design",
        description:
          "Built-in advanced encryption, PCI compliance, and highly secure processors keep every single financial transaction safe and worry-free."
      },
      {
        title: "Seamless Integration",
        description:
          "Connects effortlessly and integrates seamlessly with existing Nayax POS systems and self-checkout kiosks."
      },
      {
        title: "Improved Customer Engagement",
        description:
          "Drives sales and enhances user interaction with a high-performance multilingual display designed for in-store promotions."
      }
    ],
    specSheet: {
      processor: "Highly secure dedicated crypto processor",
      os: "Secure Android Terminal OS",
      display:
        "2.4” interactive color touchscreen display with multilingual support",
      connectivity: "Flexible wired and wireless communication options",
      printer: "Not applicable (Integrated PIN pad interface)"
    },
    faqs: [
      {
        question: "What payment methods does the Nova C3 accept?",
        answer:
          "The Nova C3 accepts a wide variety of cashless options including EMV chip, contactless cards, magnetic stripe, QR codes, and popular mobile wallets like Apple Pay and Google Pay."
      },
      {
        question: "Is the Nova C3 secure for processing retail transactions?",
        answer:
          "Yes, it is fully PCI PTS 6.x compliant and certified with EMV Contact/Contactless Level 1 and Level 2, featuring end-to-end advanced encryption protocols."
      },
      {
        question: "Can it be integrated into self-service kiosks?",
        answer:
          "Absolutely. Thanks to its compact, ergonomic design and robust connectivity, it seamlessly integrates with Nayax POS setups and self-checkout kiosks."
      }
    ]
  },
  {
    slug: "nova-market",
    name: "Nova Market",
    tagline: "Elegant dual-display retail station",
    description:
      "A minimalist, stylish tablet-based register with a customer-facing display, perfect for trendy boutiques, cafes, and modern micromarkets.",
    bannerImg: "/sliders/slider-2.svg",
    deviceImg: "/sliders/slider-2.svg",
    videoUrl: "/videos/nova-market.mp4",
    specs: [
      "High-definition dual IPS capacitive display",
      "Sleek white minimalist structural design",
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
    ]
  }
];

export function getDeviceBySlug(slug: string): Device | undefined {
  return devices.find((d) => d.slug === slug);
}
