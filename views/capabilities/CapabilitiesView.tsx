"use client";

import Link from "next/link";
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
  ArrowRight,
  Sparkles,
  QrCode,
  Gift,
  GitBranch,
  ShoppingBag,
  Truck,
  Heart
} from "lucide-react";

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
    <main className="bg-brand-cream relative min-h-screen overflow-hidden pt-10 pb-12 font-sans text-black">
      <div className="pointer-events-none absolute top-0 left-1/4 size-150 rounded-full bg-[#ffcc00]/5 blur-[130px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/3 size-125 rounded-full bg-[#80a6af]/15 blur-[150px]" />

      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-4xl space-y-6 pt-10 pb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-black/2 px-4 py-1.5 text-xs font-black tracking-widest text-[#D4A313] uppercase">
            <Sparkles className="size-3.5 fill-[#ffcc00] stroke-none" />
            Everything Connected
          </div>

          <h1 className="text-4xl leading-[1.05] font-black tracking-tight text-black uppercase sm:text-6xl md:text-7xl">
            Smart Business <br />
            <span className="bg-linear-to-r from-black via-neutral-800 to-[#D4A313] bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-relaxed font-semibold text-neutral-600 sm:text-lg">
            NexVio brings POS, payments, sales, inventory, and reporting
            together in one intelligent platform—helping businesses operate
            faster, more efficiently, and with complete control.
          </p>
        </section>

        <section className="mb-20">
          <div className="grid grid-cols-1 items-center gap-8 rounded-[32px] border border-black/5 bg-white p-8 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.03)] md:p-12 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-7">
              <h3 className="text-2xl font-black tracking-tight text-black uppercase">
                Everything Your Business Needs
              </h3>
              <p className="text-sm leading-relaxed font-medium text-neutral-600">
                Instead of relying on multiple disconnected systems, NexVio
                brings POS, payments, inventory, sales, and reporting together
                in one intelligent platform. Everything works seamlessly to
                simplify daily operations, improve accuracy, and give you
                complete visibility and control over your business.
              </p>
            </div>
            <div className="flex flex-wrap justify-start gap-2 lg:col-span-5 lg:justify-end">
              <span className="mb-1 w-full text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
                Device Tags
              </span>
              {DEVICE_TAGS.map((device, i) => (
                <span
                  key={i}
                  className="rounded-full border border-black/5 bg-black/1 px-3.5 py-1.5 text-xs font-bold text-neutral-800"
                >
                  {device}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="mb-10 space-y-2 text-center md:text-left">
            <span className="font-mono text-[10px] font-black tracking-widest text-[#D4A313] uppercase">
              / / SYSTEM CAPABILITIES
            </span>
            <h2 className="text-3xl font-black tracking-tight uppercase">
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
                  className="group relative flex h-80 flex-col justify-between rounded-[28px] border border-black/5 bg-white p-7 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#152830] hover:text-white hover:shadow-[0_30px_50px_-15px_rgba(128,166,175,0.25)]"
                >
                  <div className="space-y-5">
                    <div className="flex items-start justify-between">
                      <div className="flex size-11 items-center justify-center rounded-2xl bg-[#ffcc00]/10 text-black transition-colors duration-300 group-hover:bg-[#ffcc00] group-hover:text-black">
                        <IconComponent className="size-5 stroke-2" />
                      </div>
                      <span className="font-mono text-[9px] font-black tracking-wider text-neutral-400 uppercase transition-colors group-hover:text-[#ffcc00]/80">
                        {cap.badge}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-black tracking-tight uppercase group-hover:text-white">
                        {cap.title}
                      </h3>
                      <p className="text-xs leading-relaxed font-semibold text-neutral-500 transition-colors duration-300 group-hover:text-neutral-400">
                        {cap.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 border-t border-black/3 pt-4 text-[10px] font-black tracking-wider text-[#D4A313] uppercase transition-colors group-hover:border-white/10 group-hover:text-[#ffcc00]">
                    <span>Explore integration</span>
                    <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        <section className="mt-16 border-t border-black/5 py-24">
          <div className="relative overflow-hidden rounded-[40px] bg-[#152830] p-8 text-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] md:p-16">
            <div className="pointer-events-none absolute -right-20 -bottom-20 size-80 rounded-full bg-[#80a6af]/20 blur-3xl" />

            <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="space-y-6 lg:col-span-5">
                <span className="font-mono text-[10px] font-black tracking-widest text-[#ffcc00] uppercase">
                  / / MASTER CONFIGURATION
                </span>
                <h2 className="text-3xl leading-none font-black tracking-tight uppercase sm:text-4xl md:text-5xl">
                  One Platform. <br /> Complete Business Control.
                </h2>
                <p className="text-sm leading-relaxed font-semibold text-neutral-300">
                  Run your entire business from one intelligent platform. Every
                  sale, payment, inventory update, and report is synchronized in
                  real time—giving you complete visibility and control.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#ffcc00] px-6 py-3.5 text-xs font-black tracking-widest text-black uppercase transition-all hover:scale-105"
                  >
                    Contact us
                    <ArrowRight className="size-4 stroke-[2.5]" />
                  </Link>
                </div>
              </div>

              <div className="space-y-6 lg:col-span-7">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {CONNECTED_TAGS.map((tag, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/3 p-4 transition-colors hover:border-[#ffcc00]/30"
                    >
                      <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#ffcc00]/10 text-[#ffcc00]">
                        <CheckCircle className="size-3.5 stroke-[2.5]" />
                      </div>
                      <span className="text-xs font-black tracking-widest text-neutral-200 uppercase">
                        {tag}
                      </span>
                    </div>
                  ))}

                  <div className="flex items-center rounded-2xl border border-[#ffcc00]/10 bg-[#ffcc00]/5 p-4 sm:col-span-2">
                    <p className="mx-auto text-center text-[11px] font-bold tracking-wider text-[#ffcc00] uppercase">
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
