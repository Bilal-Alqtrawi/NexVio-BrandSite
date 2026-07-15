"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    country: "Palestine",
    website: "",
    inquiryType: "",
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
          Message Sent Successfully!
        </h3>
        <p className="mt-2 text-sm text-neutral-500">
          Thank you for reaching out. Our business development team will contact
          you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs font-bold tracking-wider text-neutral-600 uppercase">
            First Name *
          </label>
          <input
            type="text"
            required
            className="h-14 w-full rounded-lg border border-neutral-300 bg-neutral-50/50 px-5 text-sm font-medium focus:border-neutral-900 focus:bg-white focus:outline-none"
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold tracking-wider text-neutral-600 uppercase">
            Last Name *
          </label>
          <input
            type="text"
            required
            className="h-14 w-full rounded-lg border border-neutral-300 bg-neutral-50/50 px-5 text-sm font-medium focus:border-neutral-900 focus:bg-white focus:outline-none"
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>
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
          Company *
        </label>
        <input
          type="text"
          required
          className="h-14 w-full rounded-lg border border-neutral-300 bg-neutral-50/50 px-5 text-sm font-medium focus:border-neutral-900 focus:bg-white focus:outline-none"
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs font-bold tracking-wider text-neutral-600 uppercase">
            Country *
          </label>
          <select
            className="h-14 w-full appearance-none rounded-lg border border-neutral-300 bg-neutral-50/50 px-5 text-sm font-medium focus:border-neutral-900 focus:bg-white focus:outline-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234a4a4a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'/%3e%3c/svg%3e\")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 20px center",
              backgroundSize: "16px"
            }}
            onChange={(e) =>
              setFormData({ ...formData, country: e.target.value })
            }
            defaultValue="Palestine"
          >
            <option value="Palestine">Palestine (فلسطين)</option>
            <option value="Jordan">Jordan</option>
            <option value="Egypt">Egypt</option>
            <option value="UAE">UAE</option>
            <option value="USA">United States</option>
            <option value="Germany">Germany</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold tracking-wider text-neutral-600 uppercase">
            Website
          </label>
          <input
            type="url"
            placeholder="https://example.com"
            className="h-14 w-full rounded-lg border border-neutral-300 bg-neutral-50/50 px-5 text-sm font-medium focus:border-neutral-900 focus:bg-white focus:outline-none"
            onChange={(e) =>
              setFormData({ ...formData, website: e.target.value })
            }
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-bold tracking-wider text-neutral-600 uppercase">
          Inquiry Type *
        </label>
        <select
          required
          className="h-14 w-full appearance-none rounded-lg border border-neutral-300 bg-neutral-50/50 px-5 text-sm font-medium focus:border-neutral-900 focus:bg-white focus:outline-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234a4a4a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'/%3e%3c/svg%3e\")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 20px center",
            backgroundSize: "16px"
          }}
          onChange={(e) =>
            setFormData({ ...formData, inquiryType: e.target.value })
          }
          defaultValue=""
        >
          <option value="" disabled>
            Please Select
          </option>
          <option value="sales">Sales & Pricing</option>
          <option value="support">Technical Support</option>
          <option value="partnership">Partnership & Distribution</option>
        </select>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-bold tracking-wider text-neutral-600 uppercase">
          Phone Number *
        </label>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-12">
          <div className="flex h-14 items-center justify-between rounded-lg border border-neutral-300 bg-neutral-100 px-4 text-sm font-semibold text-neutral-800 sm:col-span-4">
            <span>Palestine (فلسطين)</span>
            <span className="font-mono text-neutral-400">+970</span>
          </div>
          <input
            type="tel"
            required
            placeholder="599 000 000"
            className="h-14 w-full rounded-lg border border-neutral-300 bg-neutral-50/50 px-5 text-sm font-medium focus:border-neutral-900 focus:bg-white focus:outline-none sm:col-span-8"
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-bold tracking-wider text-neutral-600 uppercase">
          Message *
        </label>
        <textarea
          required
          rows={4}
          placeholder="Tell us about your project..."
          className="w-full resize-y rounded-lg border border-neutral-300 bg-neutral-50/50 p-5 text-sm font-medium focus:border-neutral-900 focus:bg-white focus:outline-none"
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
      </div>

      <p className="text-[11px] leading-relaxed text-neutral-500">
        Your information will be processed in accordance with our{" "}
        <span className="cursor-pointer font-bold text-neutral-700 underline">
          Privacy Policy
        </span>
        .
      </p>

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
          NexVio. You can withdraw your consent at any time in accordance with
          our Privacy Policy.
        </label>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="h-14 w-full rounded-lg bg-[#FFD700] text-sm font-bold tracking-wider text-neutral-950 uppercase shadow-md transition-all duration-200 hover:bg-[#e6c200] active:scale-[0.99]"
        >
          Submit Message
        </button>
      </div>
    </form>
  );
}
