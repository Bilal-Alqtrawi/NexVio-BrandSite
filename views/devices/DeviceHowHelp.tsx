"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { Device } from "@/lib/devices";

interface DeviceHowHelpProps {
  device: Device;
}

export default function DeviceHowHelp({ device }: DeviceHowHelpProps) {
  const scrollToContact = () => {
    const contactForm = document.getElementById("contact-us");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-brand-cream/4 border-brand-cream/8 relative z-10 overflow-hidden border-y py-24 font-sans">
      <div className="relative z-10 container mx-auto flex flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl space-y-8"
        >
          <h2 className="text-brand-cream text-3xl font-black tracking-tight uppercase sm:text-4xl md:text-5xl">
            How can <span className="text-brand-yellow">{device.name}</span>{" "}
            help you grow?
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Button
              onClick={scrollToContact}
              className="bg-brand-yellow text-brand-teal shadow-brand-yellow/20 hover:bg-brand-cream group relative h-14 rounded-full px-10 text-sm font-black tracking-widest uppercase shadow-[0_0_30px_-5px_rgba(254,251,243,0.3)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="flex items-center gap-2">
                Let&apos;s talk
                {/* حركة السهم اللطيفة عند الـ Hover */}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
