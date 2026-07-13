"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function DeviceHowHelp() {
  const scrollToContact = () => {
    const contactForm = document.getElementById("contact-us");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-brand-yellow/30 relative z-10 border-t border-b border-neutral-200/40 py-20 text-center lg:py-24">
      <div className="container mx-auto max-w-4xl space-y-8 px-6">
        {/* عنوان السكشن عريض ومفتوح وجميل جداً */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-black tracking-tight text-neutral-950 uppercase sm:text-4xl"
        >
          How can we help you grow?
        </motion.h2>

        {/* زر التوجيه التفاعلي لأسفل الصفحة */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Button
            onClick={scrollToContact}
            className="rounded-full bg-[#FFD700] px-10 py-6 text-xs font-black tracking-widest text-neutral-950 uppercase shadow-md transition-all duration-300 hover:bg-neutral-950 hover:text-white hover:shadow-lg active:scale-[0.97] sm:text-sm"
          >
            Let&apos;s talk
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
