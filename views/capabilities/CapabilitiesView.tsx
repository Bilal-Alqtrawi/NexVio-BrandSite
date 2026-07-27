"use client";

import { motion, Variants } from "framer-motion";
import {
  Monitor,
  CreditCard,
  Users,
  Package,
  ShieldCheck,
  BarChart3,
  ChefHat,
  CloudLightning,
  CheckCircle,
  Sparkles,
  QrCode,
  Gift,
  GitBranch,
  ShoppingBag,
  Truck,
  Heart
} from "lucide-react";
import ContactUsButton from "@/components/shared/ContactUsButton";

const CAPABILITIES_DATA = [
  {
    icon: Monitor,
    title: "Smart Point of Sale",
    desc: "A fast, intuitive POS system designed to simplify sales and daily operations. Reduce wait times and elevate customer satisfaction.",
    badge: "Operational Core"
  },
  {
    icon: CreditCard,
    title: "Integrated Payments",
    desc: "Accept credit cards, contactless payments, mobile wallets, and digital payments quickly and securely from the same POS terminal.",
    badge: "Transactions"
  },
  {
    icon: Users,
    title: "Customer Relationship (CRM)",
    desc: "Build stronger customer relationships through centralized customer profiles, purchase history and engagement tools.",
    badge: "Growth & Retention"
  },
  {
    icon: Package,
    title: "Inventory Management",
    desc: "Track inventory in real time, receive low-stock alerts, manage suppliers, and maintain complete control over your products.",
    badge: "Operations"
  },
  {
    icon: ShieldCheck,
    title: "Employee Management",
    desc: "Manage employees, roles, permissions, work shifts, and activity logs from one centralized dashboard.",
    badge: "Security & Control"
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    desc: "Monitor sales, revenue, employee performance, and inventory with real-time dashboards and detailed business reports that help you make smarter decisions.",
    badge: "Intelligence"
  },
  {
    icon: ChefHat,
    title: "Kitchen Display System (KDS)",
    desc: "Improve communication between service staff and the kitchen through integrated Kitchen Display Systems and kitchen printers.",
    badge: "Workflow Automation"
  },
  {
    icon: CloudLightning,
    title: "Cloud Sync",
    desc: "Access your business anytime, anywhere through a secure cloud platform with real-time synchronization.",
    badge: "Cloud Infrastructure"
  },
  {
    icon: QrCode,
    title: "QR Payments",
    desc: "Accept fast QR-based payments and give customers more flexible ways to pay at the counter or table.",
    badge: "Modern Payments"
  },
  {
    icon: Heart,
    title: "Loyalty Program",
    desc: "Reward returning customers with points, personalized offers, and promotions that drive repeat visits.",
    badge: "Retention"
  },
  {
    icon: Gift,
    title: "Gift Cards",
    desc: "Sell and redeem digital or physical gift cards directly from your POS to boost sales and brand reach.",
    badge: "Revenue"
  },
  {
    icon: GitBranch,
    title: "Multi-Branch",
    desc: "Manage every location from one platform with shared catalogs, centralized reporting, and branch-level control.",
    badge: "Scale"
  },
  {
    icon: ShoppingBag,
    title: "Online Orders",
    desc: "Receive and fulfill online orders alongside in-store sales through one connected workflow.",
    badge: "Omnichannel"
  },
  {
    icon: Truck,
    title: "Delivery Integration",
    desc: "Connect delivery operations with your POS so orders, payments, and status updates stay synchronized.",
    badge: "Fulfillment"
  }
];

const CONNECTED_TAGS = [
  "POS",
  "Payments",
  "Inventory",
  "Customers",
  "Employees",
  "Analytics",
  "Multi-Branch",
  "Cloud Sync"
];

const DEVICE_TAGS = [
  "Smart POS Systems",
  "Payment Terminals",
  "Mobile POS Devices",
  "Admin Dashboard",
  "Kitchen Display Systems (KDS)"
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function CapabilitiesView() {
  return (
    <main className="bg-brand-teal text-brand-cream relative min-h-screen overflow-hidden pt-10 pb-16 font-sans">
      {/* Background Glows Matching System Palette */}
      <div className="bg-brand-yellow/10 pointer-events-none absolute top-0 left-1/4 size-150 rounded-full blur-[140px]" />
      <div className="bg-teal-light/10 pointer-events-none absolute right-1/4 bottom-1/3 size-125 rounded-full blur-[150px]" />

      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HERO SECTION */}
        <section className="mx-auto max-w-4xl space-y-6 pt-10 pb-16 text-center">
          <div className="text-brand-yellow inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-black tracking-widest uppercase backdrop-blur-md">
            <Sparkles className="fill-brand-yellow text-brand-yellow size-3.5" />
            Everything Connected
          </div>

          <h1 className="text-brand-cream text-4xl leading-[1.05] font-black tracking-tight uppercase sm:text-6xl md:text-7xl">
            Smart Business <br />
            <span className="from-brand-yellow via-brand-yellow-light to-teal-light bg-linear-to-r bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>

          <p className="text-teal-light mx-auto max-w-2xl text-base leading-relaxed font-semibold sm:text-lg">
            NexVio brings POS, payments, sales, inventory, and reporting
            together in one intelligent platform helping businesses operate
            faster, more efficiently, and with complete control.
          </p>
        </section>

        {/* DEVICE TAGS SECTION */}
        <section className="mb-20">
          <div className="bg-card grid grid-cols-1 items-center gap-8 rounded-[32px] border border-white/10 p-8 shadow-2xl backdrop-blur-xs md:p-12 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-7">
              <h3 className="text-brand-cream text-2xl font-black tracking-tight uppercase">
                Everything Your Business Needs
              </h3>
              <p className="text-teal-light text-sm leading-relaxed font-medium">
                Instead of relying on multiple disconnected systems, NexVio
                brings POS, payments, inventory, sales, and reporting together
                in one intelligent platform. Everything works seamlessly to
                simplify daily operations, improve accuracy, and give you
                complete visibility and control over your business.
              </p>
            </div>
            <div className="flex flex-wrap justify-start gap-2 lg:col-span-5 lg:justify-end">
              <span className="text-brand-yellow mb-1 w-full text-[10px] font-bold tracking-widest uppercase lg:text-right">
                Device Tags
              </span>
              {DEVICE_TAGS.map((device, i) => (
                <span
                  key={i}
                  className="text-brand-cream rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-bold"
                >
                  {device}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CAPABILITIES CARDS GRID */}
        <section className="py-8">
          <div className="mb-10 space-y-2 text-center md:text-left">
            <span className="text-brand-yellow font-mono text-[10px] font-black tracking-widest uppercase">
              SYSTEM CAPABILITIES
            </span>
            <h2 className="text-brand-cream text-3xl font-black tracking-tight uppercase">
              Platform Features
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {CAPABILITIES_DATA.map((cap, idx) => {
              const IconComponent = cap.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group bg-card hover:border-brand-yellow/40 hover:shadow-brand-yellow/5 relative flex h-80 flex-col justify-between rounded-[28px] border border-white/10 p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#1a3038] hover:shadow-2xl"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="bg-brand-yellow/10 text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-teal flex size-11 items-center justify-center rounded-2xl transition-all duration-300">
                        <IconComponent className="size-5 stroke-2" />
                      </div>
                      <span className="text-brand-cream/60 group-hover:text-brand-yellow font-mono text-[9px] font-black tracking-wider uppercase transition-colors">
                        {cap.badge}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-brand-cream text-lg font-black tracking-tight uppercase transition-colors group-hover:text-white">
                        {cap.title}
                      </h3>
                      <p className="text-teal-light group-hover:text-teal-light/90 text-xs leading-relaxed font-semibold transition-colors duration-300">
                        {cap.desc}
                      </p>
                    </div>
                  </div>

                  {/* <div className="text-brand-yellow flex items-center gap-1.5 border-t border-white/5 pt-4 text-[10px] font-black tracking-wider uppercase transition-colors group-hover:border-white/10">
                    <span>Explore integration</span>
                    <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </div> */}
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* BOTTOM CTA BLOCK */}
        <section className="mt-16 border-t border-white/10 py-24">
          <div className="bg-card text-brand-cream relative overflow-hidden rounded-[40px] border border-white/10 p-8 shadow-2xl md:p-16">
            <div className="bg-brand-yellow/10 pointer-events-none absolute -right-20 -bottom-20 size-80 rounded-full blur-3xl" />

            <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="space-y-6 lg:col-span-5">
                <span className="text-brand-yellow font-mono text-[10px] font-black tracking-widest uppercase">
                  MASTER CONFIGURATION
                </span>
                <h2 className="text-brand-cream text-3xl leading-none font-black tracking-tight uppercase sm:text-4xl md:text-5xl">
                  One Platform. <br /> Complete Business Control.
                </h2>
                <p className="text-teal-light text-sm leading-relaxed font-semibold">
                  Run your entire business from one intelligent platform. Every
                  sale, payment, inventory update, and report is synchronized in
                  real time giving you complete visibility and control.
                </p>
                <div className="pt-2">
                  <ContactUsButton variant="yellow" />
                </div>
              </div>

              <div className="space-y-6 lg:col-span-7">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {CONNECTED_TAGS.map((tag, idx) => (
                    <div
                      key={idx}
                      className="hover:border-brand-yellow/30 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors"
                    >
                      <div className="bg-brand-yellow/10 text-brand-yellow flex size-7 shrink-0 items-center justify-center rounded-lg">
                        <CheckCircle className="size-3.5 stroke-[2.5]" />
                      </div>
                      <span className="text-brand-cream text-xs font-black tracking-widest uppercase">
                        {tag}
                      </span>
                    </div>
                  ))}

                  <div className="border-brand-yellow/20 bg-brand-yellow/10 flex items-center rounded-2xl border p-4 sm:col-span-2">
                    <p className="text-brand-yellow mx-auto text-center text-[11px] font-bold tracking-wider uppercase">
                      Everything connected through one intelligent platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
