"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import { MessageSquare, Headset } from "lucide-react";

export default function ContactView() {
  return (
    <main className="bg-background text-foreground selection:bg-brand-yellow selection:text-brand-teal relative min-h-screen overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[5rem_5rem]"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 100%)"
          }}
        />
        <div className="bg-brand-yellow/10 absolute top-[5%] left-1/2 size-125 -translate-x-1/2 rounded-full blur-[160px]" />
        <div className="bg-teal-light/10 absolute top-[35%] -left-40 size-100 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10">
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 lg:sticky lg:top-24 lg:col-span-5 lg:self-start lg:pt-4"
            >
              <div className="space-y-4">
                <span className="border-border bg-brand-yellow/10 text-brand-yellow inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-black tracking-[0.2em] uppercase backdrop-blur-md">
                  <MessageSquare className="text-brand-yellow size-3.5" />
                  Get In Touch
                </span>

                <h1 className="text-foreground text-4xl leading-[1.1] font-black tracking-tight uppercase sm:text-5xl lg:text-6xl">
                  Let&apos;s <br />
                  <span className="from-brand-yellow-light via-brand-yellow to-teal-light bg-linear-to-r bg-clip-text text-transparent">
                    Connect
                  </span>
                </h1>

                <p className="text-muted-foreground max-w-md text-base leading-relaxed font-medium">
                  Please complete the form below and our team will be in touch
                  shortly.
                </p>

                <div className="border-border bg-card/50 text-muted-foreground inline-flex items-center gap-2 rounded-xl border p-3 text-xs font-medium backdrop-blur-sm">
                  <Headset className="text-brand-yellow size-4 shrink-0" />
                  <span>
                    Existing customer?{" "}
                    <Link
                      href="/faq"
                      className="text-brand-yellow hover:text-brand-yellow-light font-bold underline transition-colors"
                    >
                      Contact Support
                    </Link>{" "}
                    for help.
                  </span>
                </div>
              </div>

              {/* Team Image Frame */}
              <div className="border-border bg-card relative aspect-square max-w-85 overflow-hidden rounded-3xl border p-3 shadow-2xl backdrop-blur-xl md:max-w-95">
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/contact/contact-meeting.png"
                    alt="NexVio team presenting solutions to a customer"
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                  <div className="from-background/60 absolute inset-0 bg-linear-to-t via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>

            {/* Right Column: Form Container */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="border-border bg-card/60 w-full rounded-3xl border p-6 shadow-2xl backdrop-blur-xl sm:p-10 lg:col-span-7"
            >
              <div className="mb-8 space-y-2">
                <h2 className="text-card-foreground text-2xl font-black tracking-tight uppercase sm:text-3xl">
                  Start the Conversation
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                  Tell us about your business, and our team will help you find
                  the right solution for your needs.
                </p>
              </div>

              <ContactForm />
            </motion.div>
          </div>
        </section>

        {/* Map Section */}
        <ContactMap />
      </div>
    </main>
  );
}
