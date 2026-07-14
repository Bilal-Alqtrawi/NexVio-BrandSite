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
    tagline: "All-in-One POS and payment terminal",
    description:
      "An elegant, hand-held smart POS terminal designed to process payments swiftly anywhere in your store, complete with a built-in printer.",
    bannerImg: "/sliders/slider-3.svg",
    deviceImg: "/sliders/slider-3.svg",
    specs: [
      '5.5" high-resolution touch screen',
      "Built-in 58mm high-speed thermal printer",
      "Long-lasting battery life for full-day mobility",
      "Supports 4G, Wi-Fi, and Bluetooth connectivity"
    ],
    highlights: [
      {
        title: "Accept All Payments",
        description:
          "From chip & PIN to contactless, digital wallets, and QR codes flawlessly."
      },
      {
        title: "On-the-go Billing",
        description:
          "Print physical receipts instantly on the spot for dynamic customer service."
      },
      {
        title: "Compact Power",
        description:
          "Ergonomically engineered to comfortably fit in hand while providing robust computing power."
      }
    ],
    specSheet: {
      processor: "Quad-Core Cortex-A53, 1.4GHz",
      os: "Android Secure OS",
      memory: "2GB RAM + 16GB Flash",
      display: "5.5 IPS HD (1280 x 720)",
      printer: "High-speed thermal printer (58mm)",
      connectivity: "4G LTE / Dual-band Wi-Fi / Bluetooth 5.0",
      battery: "5200mAh Li-ion rechargeable"
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
    specs: [
      '6.5" bright touch screen',
      "Optional clip-on scanner for barcodes",
      "Flexible attachment options for thermal printers"
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
    slug: "nova-kiosk",
    name: "Nova Kiosk",
    tagline: "Self-service reimagined for modern retail",
    description:
      "Empower your customers to browse, order, and pay independently with a sleek, interactive self-service terminal.",
    bannerImg: "/sliders/nova-kiosk.png",
    deviceImg: "/sliders/nova-kiosk.png",
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
    slug: "nova-register",
    name: "Nova Register",
    tagline: "The complete desktop countertop powerhouse",
    description:
      "A fully integrated countertop system combining dual screens, heavy-duty POS, and complete peripherals for high-volume stores.",
    bannerImg: "/sliders/156.png",
    deviceImg: "/sliders/156.png",
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
    slug: "nova-terminal",
    name: "Nova Terminal",
    tagline: "The sleek tabletop payment hub",
    description:
      "A dedicated payment solution designed to rest beautifully on your counter, mounted on a secure ergonomic stand for fast transactions.",
    bannerImg: "/sliders/slider-1.svg",
    deviceImg: "/sliders/slider-1.svg",
    specs: [
      "Secured on ergonomic swivel tabletop stand",
      "Accepts contactless, EMV chip, and magnetic stripe",
      "Dedicated high-speed connectivity interfaces"
    ],
    highlights: [
      {
        title: "Optimized Angle",
        description:
          "Ergonomic viewing angle for both merchant and customer during PIN entry."
      },
      {
        title: "Secure Docking",
        description:
          "Always charged and secured in place to prevent accidental drops or theft."
      }
    ]
  },
  {
    slug: "nova-tab",
    name: "Nova Tab Duo",
    tagline: "Elegant dual-display retail station",
    description:
      "A minimalist, stylish tablet-based register with a customer-facing display, perfect for trendy boutiques and cafes.",
    bannerImg: "/sliders/slider-2.svg",
    deviceImg: "/sliders/slider-2.svg",
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
