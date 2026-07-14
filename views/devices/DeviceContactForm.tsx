"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { Device } from "@/lib/devices";

interface DeviceContactFormProps {
  device: Device;
}

// الشعارات الفعلية من مجلد public/logos الخاص بمشروعك
const LOGO_PARTNERS = [
  { src: "/logos/logo-1.svg", alt: "iRobot" },
  { src: "/logos/logo-2.svg", alt: "Femina" },
  { src: "/logos/logo-3.svg", alt: "Furla" },
  { src: "/logos/logo-4.svg", alt: "Golf Group" },
  { src: "/logos/logo-5.svg", alt: "H.Stern" },
  { src: "/logos/logo-6.svg", alt: "April" },
  { src: "/logos/logo-7.svg", alt: "Hoff" },
  { src: "/logos/logo-8.svg", alt: "Express City Wash" }
];

export default function DeviceContactForm({ device }: DeviceContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    country: "Palestine",
    inquiryType: "",
    phone: "",
    message: "",
    marketing: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Submitted Form for ${device.name}:`, formData);
  };

  return (
    // تم إضافة id="contact-us" ليعمل التمرير السلس من سكشن المساعدة
    <section
      id="contact-us"
      className="w-full border-t border-neutral-200 bg-[#FBF9F4] px-6 py-20 md:py-28"
    >
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-8">
        {/* العمود الأيسر: العناوين والشعارات */}
        <div className="space-y-10 lg:sticky lg:top-8 lg:col-span-5">
          <div className="space-y-4">
            <h2 className="max-w-md text-3xl leading-[1.15] font-black tracking-tight text-neutral-950 uppercase sm:text-4xl lg:text-[42px]">
              Tell us about your business so we can help you grow.
            </h2>
            <p className="pt-2 text-base font-semibold tracking-wide text-neutral-500">
              Trusted by businesses like yours
            </p>
          </div>

          {/* شبكة الشعارات الحقيقية مع حجم وعرض مرن وثابت */}
          <div className="grid grid-cols-2 items-center gap-x-6 gap-y-8 pt-4 sm:grid-cols-3">
            {LOGO_PARTNERS.map((logo, index) => (
              <div
                key={index}
                className="relative flex h-12 w-full items-center justify-start opacity-60 grayscale filter transition-all duration-300 ease-in-out hover:opacity-100"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={130}
                  height={45}
                  className="max-h-10 w-auto object-contain"
                  priority={index < 4} // تحميل أول 4 صور فوراً لتحسين الـ LCP
                />
              </div>
            ))}
          </div>
        </div>

        {/* العمود الأيمن: الفورم الاحترافي */}
        <div className="w-full bg-transparent lg:col-span-7">
          <form onSubmit={handleSubmit} className="w-full space-y-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="First Name*"
                required
                className="h-14 w-full rounded-lg border border-neutral-400 bg-white px-5 text-sm font-medium text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Last Name*"
                required
                className="h-14 w-full rounded-lg border border-neutral-400 bg-white px-5 text-sm font-medium text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="email"
                placeholder="Email*"
                required
                className="h-14 w-full rounded-lg border border-neutral-400 bg-white px-5 text-sm font-medium text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Company*"
                required
                className="h-14 w-full rounded-lg border border-neutral-400 bg-white px-5 text-sm font-medium text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold tracking-wide text-neutral-700">
                Country *
              </label>
              <select
                className="h-14 w-full appearance-none rounded-lg border border-neutral-400 bg-white px-5 text-sm font-medium text-neutral-900 focus:border-neutral-900 focus:outline-none"
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
              </select>
            </div>

            <div>
              <select
                required
                className="h-14 w-full appearance-none rounded-lg border border-neutral-400 bg-white px-5 text-sm font-medium text-neutral-900 focus:border-neutral-900 focus:outline-none"
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
                  Inquiry type*
                </option>
                <option value="sales">Sales & Pricing</option>
                <option value="support">Technical Support</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
              <div className="flex h-14 items-center justify-between rounded-lg border border-neutral-400 bg-white px-5 text-sm font-medium text-neutral-800 sm:col-span-4">
                <span>Palestine (فلسطين)</span>
                <span className="font-mono text-neutral-400">+970</span>
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="h-14 w-full rounded-lg border border-neutral-400 bg-white px-5 text-sm font-medium text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none sm:col-span-8"
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>

            <div>
              <textarea
                placeholder="Message*"
                required
                rows={4}
                className="w-full resize-y rounded-lg border border-neutral-400 bg-white p-5 text-sm font-medium text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <p className="text-[11px] leading-relaxed font-medium text-neutral-500">
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
                className="mt-1 size-4 shrink-0 rounded border-neutral-400 accent-[#FFD700]"
                onChange={(e) =>
                  setFormData({ ...formData, marketing: e.target.checked })
                }
              />
              <label
                htmlFor="marketing"
                className="cursor-pointer text-[11px] leading-relaxed font-medium text-neutral-500 select-none"
              >
                I want to receive marketing materials, promotions and
                newsletters from NexVio. You can withdraw your consent at any
                time by sending us an email or using the unsubscribe button, in
                accordance with our Privacy Policy.
              </label>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="h-14 w-full rounded-lg bg-[#FFD700] text-sm font-bold tracking-wider text-neutral-950 uppercase shadow-md transition-colors duration-200 hover:bg-[#e6c200]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
