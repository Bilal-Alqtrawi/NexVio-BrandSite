"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

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
    console.log("Contact Form Submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
          <CheckCircle2 className="size-10" />
        </div>
        <h3 className="text-2xl font-bold text-neutral-900">
          Request Received!
        </h3>
        <p className="mt-2 text-sm text-neutral-500">
          Thank you for reaching out. Our team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-1">
        <label className="text-xs font-bold tracking-wider text-neutral-600 uppercase">
          Your Name / Company *
        </label>
        <input
          type="text"
          required
          className="h-14 w-full rounded-lg border border-neutral-300 bg-neutral-50/50 px-5 text-sm font-medium focus:border-neutral-900 focus:bg-white focus:outline-none"
          onChange={(e) =>
            setFormData({ ...formData, nameCompany: e.target.value })
          }
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs font-bold tracking-wider text-neutral-600 uppercase">
          Email *
        </label>
        <input
          type="email"
          required
          className="h-14 w-full rounded-lg border border-neutral-300 bg-neutral-50/50 px-5 text-sm font-medium focus:border-neutral-900 focus:bg-white focus:outline-none"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs font-bold tracking-wider text-neutral-600 uppercase">
          Phone Number *
        </label>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-12">
          <div className="flex h-14 items-center justify-between rounded-lg border border-neutral-300 bg-neutral-100 px-4 text-sm font-semibold text-neutral-800 sm:col-span-4">
            <span>UAE</span>
            <span className="font-mono text-neutral-400">+971</span>
          </div>
          <input
            type="tel"
            required
            placeholder="56 403 0208"
            className="h-14 w-full rounded-lg border border-neutral-300 bg-neutral-50/50 px-5 text-sm font-medium focus:border-neutral-900 focus:bg-white focus:outline-none sm:col-span-8"
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-bold tracking-wider text-neutral-600 uppercase">
          How Can We Help *
        </label>
        <textarea
          required
          rows={5}
          placeholder="Tell us how we can help your business..."
          className="w-full resize-y rounded-lg border border-neutral-300 bg-neutral-50/50 p-5 text-sm font-medium focus:border-neutral-900 focus:bg-white focus:outline-none"
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
      </div>

      <div className="flex items-start gap-3 pt-2">
        <input
          type="checkbox"
          id="marketing"
          className="mt-1 size-4 shrink-0 rounded border-neutral-300 accent-[#FFD700]"
          onChange={(e) =>
            setFormData({ ...formData, marketing: e.target.checked })
          }
        />
        <label
          htmlFor="marketing"
          className="cursor-pointer text-[11px] leading-relaxed font-medium text-neutral-500 select-none"
        >
          I want to receive marketing materials, promotions and newsletters from
          NexVio.
        </label>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="h-14 w-full rounded-lg bg-[#FFD700] text-sm font-bold tracking-wider text-neutral-950 uppercase shadow-md transition-all duration-200 hover:bg-[#e6c200] active:scale-[0.99]"
        >
          Request a Demo
        </button>
      </div>
    </form>
  );
}
