"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { Device } from "@/lib/devices";

interface DeviceContactFormProps {
  device: Device;
}

// قائمة الدول مع أكواد الاتصال الخاصة بها
const COUNTRIES_DATA = [
  { code: "PS", name: "Palestine (فلسطين)", dialCode: "+970" },
  { code: "JO", name: "Jordan (الأردن)", dialCode: "+962" },
  { code: "EG", name: "Egypt (مصر)", dialCode: "+20" },
  { code: "AE", name: "UAE (الإمارات)", dialCode: "+971" }
];

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
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES_DATA[0]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    country: COUNTRIES_DATA[0].name,
    inquiryType: "",
    phone: "",
    message: "",
    marketing: false
  });

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const countryName = e.target.value;
    const found =
      COUNTRIES_DATA.find((c) => c.name === countryName) || COUNTRIES_DATA[0];
    setSelectedCountry(found);
    setFormData((prev) => ({ ...prev, country: countryName }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Submitted Form for ${device.name}:`, {
      ...formData,
      phone: `${selectedCountry.dialCode} ${formData.phone}`
    });
  };

  return (
    <section
      id="contact-us"
      className="w-full border-t border-neutral-200 bg-[#FBF9F4] px-6 py-20 md:py-28"
    >
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-8">
        {/* العمود الأيسر */}
        <div className="space-y-10 lg:sticky lg:top-8 lg:col-span-5">
          <div className="space-y-4">
            <h2 className="max-w-md text-3xl leading-[1.15] font-black tracking-tight text-neutral-950 uppercase sm:text-4xl lg:text-[42px]">
              Tell us about your business so we can help you grow.
            </h2>
            <p className="pt-2 text-base font-semibold tracking-wide text-neutral-500">
              Trusted by businesses like yours
            </p>
          </div>

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
                  priority={index < 4}
                />
              </div>
            ))}
          </div>
        </div>

        {/* العمود الأيمن */}
        <div className="w-full bg-transparent lg:col-span-7">
          <form onSubmit={handleSubmit} className="w-full space-y-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="First Name*"
                required
                className="h-14 w-full rounded-lg border border-neutral-400 bg-white px-5 text-sm font-medium text-neutral-900 focus:border-neutral-900 focus:outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Last Name*"
                required
                className="h-14 w-full rounded-lg border border-neutral-400 bg-white px-5 text-sm font-medium text-neutral-900 focus:border-neutral-900 focus:outline-none"
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
                className="h-14 w-full rounded-lg border border-neutral-400 bg-white px-5 text-sm font-medium text-neutral-900 focus:border-neutral-900 focus:outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Company*"
                required
                className="h-14 w-full rounded-lg border border-neutral-400 bg-white px-5 text-sm font-medium text-neutral-900 focus:border-neutral-900 focus:outline-none"
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
                  backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234a4a4a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'/%3e%3c/svg%3e")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 20px center",
                  backgroundSize: "16px"
                }}
                onChange={handleCountryChange}
                value={formData.country}
              >
                {COUNTRIES_DATA.map((c) => (
                  <option key={c.code} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <select
                required
                className="h-14 w-full appearance-none rounded-lg border border-neutral-400 bg-white px-5 text-sm font-medium text-neutral-900 focus:border-neutral-900 focus:outline-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234a4a4a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'/%3e%3c/svg%3e")`,
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
                <span className="truncate">
                  {selectedCountry.name.split(" ")[0]}
                </span>
                <span className="font-mono text-neutral-400">
                  {selectedCountry.dialCode}
                </span>
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="h-14 w-full rounded-lg border border-neutral-400 bg-white px-5 text-sm font-medium text-neutral-900 focus:border-neutral-900 focus:outline-none sm:col-span-8"
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
                className="w-full resize-y rounded-lg border border-neutral-400 bg-white p-5 text-sm font-medium text-neutral-900 focus:border-neutral-900 focus:outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

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
                newsletters from NexVio.
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
    