export interface DeviceHighlight {
  title: string;
  description: string;
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
}

export const devices: Device[] = [
  {
    slug: "nova-55f",
    name: "Nova 55F",
    tagline: "All-in-One POS and payment terminal",
    description:
      "An elegant, hand-held smart POS terminal designed to process payments swiftly anywhere in your store, complete with a built-in printer.",
    bannerImg: "/banners/F55.png", // الصورة المحددة في الخلفية خلف النص
    deviceImg: "/banners/F55.png", // الصورة التي ستظهر داخل الكادر الأيمن بدلاً من الـ Placeholder
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
    ]
  },
  {
    slug: "nova-modu",
    name: "Nova Modu",
    tagline: "A smart POS for ultimate business flexibility",
    description:
      "A highly modular smart retail device crafted to adapt seamlessly to your inventory tracking, mobile or tabletop needs.",
    bannerImg: "/banners/nova mod.png",
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
    ]
  }
  // يمكنك إضافة الـ 4 أجهزة الأخرى (nova-flip, nova-156, nova-kiosk, nova-market) بنفس الهيكل هنا...
];

export function getDeviceBySlug(slug: string): Device | undefined {
  return devices.find((d) => d.slug === slug);
}
