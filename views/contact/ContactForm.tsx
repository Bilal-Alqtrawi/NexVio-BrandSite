"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nameCompany: "",
    email: "",
    phone: "",
    message: "",
    marketing: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <div className="border-border bg-brand-yellow/10 text-brand-yellow shadow-brand-yellow/10 mb-4 flex size-16 items-center justify-center rounded-2xl border shadow-lg">
              <CheckCircle2 className="size-10" />
            </div>
            <h3 className="text-foreground text-2xl font-black tracking-tight uppercase">
              Request Received!
            </h3>
            <p className="text-muted-foreground mt-2 text-sm font-medium">
              Thank you for reaching out. Our team will contact you shortly.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="space-y-2">
              <label className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
                Your Name / Company *
              </label>
              <input
                type="text"
                required
                className="border-input bg-background/60 text-foreground focus:border-ring focus:bg-background focus:ring-ring h-14 w-full rounded-xl border px-5 text-sm font-medium transition-all duration-300 focus:ring-1 focus:outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, nameCompany: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
                Email *
              </label>
              <input
                type="email"
                required
                className="border-input bg-background/60 text-foreground focus:border-ring focus:bg-background focus:ring-ring h-14 w-full rounded-xl border px-5 text-sm font-medium transition-all duration-300 focus:ring-1 focus:outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
                Phone Number *
              </label>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-12">
                <div className="border-input bg-card/80 text-foreground flex h-14 items-center justify-between rounded-xl border px-4 text-sm font-semibold sm:col-span-4">
                  <span>UAE</span>
                  <span className="text-muted-foreground font-mono">+971</span>
                </div>
                <input
                  type="tel"
                  required
                  placeholder="56 403 0208"
                  className="border-input bg-background/60 text-foreground placeholder:text-muted-foreground/50 focus:border-ring focus:bg-background focus:ring-ring h-14 w-full rounded-xl border px-5 text-sm font-medium transition-all duration-300 focus:ring-1 focus:outline-none sm:col-span-8"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
                How Can We Help *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Tell us how we can help your business..."
                className="border-input bg-background/60 text-foreground placeholder:text-muted-foreground/50 focus:border-ring focus:bg-background focus:ring-ring w-full resize-y rounded-xl border p-5 text-sm font-medium transition-all duration-300 focus:ring-1 focus:outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                id="marketing"
                className="border-input bg-background accent-brand-yellow size-4 shrink-0 rounded"
                onChange={(e) =>
                  setFormData({ ...formData, marketing: e.target.checked })
                }
              />
              <label
                htmlFor="marketing"
                className="text-muted-foreground cursor-pointer text-[12px] leading-relaxed font-medium select-none"
              >
                I want to receive marketing materials, promotions and
                newsletters from NexVio.
              </label>
            </div>

            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="bg-secondary text-secondary-foreground shadow-brand-yellow/10 hover:bg-brand-yellow-light flex h-14 w-full items-center justify-center gap-2 rounded-xl text-sm font-bold tracking-wider uppercase shadow-lg transition-all duration-200"
              >
                <span>Request a Demo</span>
                <Send className="text-secondary-foreground size-4" />
              </motion.button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
