"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { Device } from "@/lib/devices";

interface DeviceContactFormProps {
  device: Device;
}

const COUNTRIES_DATA = [
  { code: "PS", name: "Palestine (فلسطين)", dialCode: "+970" },
  { code: "JO", name: "Jordan (الأردن)", dialCode: "+962" },
  { code: "EG", name: "Egypt (مصر)", dialCode: "+20" },
  { code: "AE", name: "UAE (الإمارات)", dialCode: "+971" }
];

export const LOGO_PARTNERS = [
  { name: "April", src: "/logo-companies/April.webp" },
  { name: "Centeral Park", src: "/logo-companies/centeral-park.png" },
  { name: "Cibus1", src: "/logo-companies/cibus1.png" },
  { name: "Cook and Bake", src: "/logo-companies/cook-and-bake.gif" },
  { name: "Express", src: "/logo-companies/express-logo.svg" },
  { name: "Femina", src: "/logo-companies/femina.png" },
  { name: "Furla", src: "/logo-companies/furla-logo.svg" },
  { name: "Glof", src: "/logo-companies/glof.png" },
  {
    name: "H Stern",
    src: "/logo-companies/h-stern-logo-png_seeklogo-64520.png"
  },
  { name: "Hoff", src: "/logo-companies/hoff.png" },
  { name: "Images 1", src: "/logo-companies/images (1).png" },
  {
    name: "Images Removebg",
    src: "/logo-companies/images-removebg-preview.png"
  }
];

export default function DeviceContactForm({ device }: DeviceContactFormProps) {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES_DATA[3]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    country: COUNTRIES_DATA[3].name,
    inquiryType: "",
    phone: "",
    message: "",
    marketing: false
  });

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const countryName = e.target.value;
    const found =
      COUNTRIES_DATA.find((c) => c.name === countryName) || COUNTRIES_DATA[3];
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
      className="bg-brand-teal border-brand-cream/15 w-full border-t px-6 py-20 font-sans md:py-28"
    >
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="space-y-10 lg:sticky lg:top-8 lg:col-span-5">
          <div className="space-y-4">
            <span className="text-brand-yellow text-xs font-black tracking-widest uppercase">
              Get Started
            </span>
            <h2 className="text-brand-cream max-w-md text-3xl leading-[1.15] font-black tracking-tight uppercase sm:text-4xl lg:text-[42px]">
              Tell us about your business so we can help you grow.
            </h2>
            <p className="text-brand-cream/70 pt-2 text-base font-semibold tracking-wide">
              Trusted by businesses like yours
            </p>
          </div>

          <div className="grid grid-cols-2 items-center gap-x-6 gap-y-8 pt-4 sm:grid-cols-3">
            {LOGO_PARTNERS.map((logo, index) => (
              <div
                key={index}
                className="relative flex h-12 w-full items-center justify-start opacity-60 brightness-0 invert transition-all duration-300 ease-in-out hover:opacity-100 hover:brightness-100 hover:invert-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={130}
                  height={45}
                  className="max-h-15 w-auto object-contain"
                  priority={index < 6}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full bg-transparent lg:col-span-7">
          <form onSubmit={handleSubmit} className="w-full space-y-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="First Name*"
                required
                className="border-brand-cream/20 bg-brand-cream/10 text-brand-cream placeholder:text-brand-cream/50 focus:border-brand-yellow h-14 w-full rounded-xl border px-5 text-sm font-medium backdrop-blur-md focus:outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Last Name*"
                required
                className="border-brand-cream/20 bg-brand-cream/10 text-brand-cream placeholder:text-brand-cream/50 focus:border-brand-yellow h-14 w-full rounded-xl border px-5 text-sm font-medium backdrop-blur-md focus:outline-none"
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
                className="border-brand-cream/20 bg-brand-cream/10 text-brand-cream placeholder:text-brand-cream/50 focus:border-brand-yellow h-14 w-full rounded-xl border px-5 text-sm font-medium backdrop-blur-md focus:outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Company*"
                required
                className="border-brand-cream/20 bg-brand-cream/10 text-brand-cream placeholder:text-brand-cream/50 focus:border-brand-yellow h-14 w-full rounded-xl border px-5 text-sm font-medium backdrop-blur-md focus:outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
              />
            </div>

            <div className="space-y-1">
              <label className="text-brand-cream/70 text-xs font-bold tracking-wide">
                Country *
              </label>
              <select
                className="border-brand-cream/20 bg-brand-teal text-brand-cream focus:border-brand-yellow h-14 w-full appearance-none rounded-xl border px-5 text-sm font-medium focus:outline-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fefbf3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'/%3e%3c/svg%3e")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 20px center",
                  backgroundSize: "16px"
                }}
                onChange={handleCountryChange}
                value={formData.country}
              >
                {COUNTRIES_DATA.map((c) => (
                  <option
                    key={c.code}
                    value={c.name}
                    className="bg-brand-teal text-brand-cream"
                  >
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <select
                required
                className="border-brand-cream/20 bg-brand-teal text-brand-cream focus:border-brand-yellow h-14 w-full appearance-none rounded-xl border px-5 text-sm font-medium focus:outline-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fefbf3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'/%3e%3c/svg%3e")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 20px center",
                  backgroundSize: "16px"
                }}
                onChange={(e) =>
                  setFormData({ ...formData, inquiryType: e.target.value })
                }
                defaultValue=""
              >
                <option
                  value=""
                  disabled
                  className="bg-brand-teal text-brand-cream/50"
                >
                  Inquiry type*
                </option>
                <option
                  value="sales"
                  className="bg-brand-teal text-brand-cream"
                >
                  Sales & Pricing
                </option>
                <option
                  value="support"
                  className="bg-brand-teal text-brand-cream"
                >
                  Technical Support
                </option>
                <option
                  value="partnership"
                  className="bg-brand-teal text-brand-cream"
                >
                  Partnership
                </option>
              </select>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
              <div className="border-brand-cream/20 bg-brand-cream/10 text-brand-cream flex h-14 items-center justify-between rounded-xl border px-5 text-sm font-medium sm:col-span-4">
                <span className="truncate">
                  {selectedCountry.name.split(" ")[0]}
                </span>
                <span className="text-brand-yellow font-mono font-bold">
                  {selectedCountry.dialCode}
                </span>
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="border-brand-cream/20 bg-brand-cream/10 text-brand-cream placeholder:text-brand-cream/50 focus:border-brand-yellow h-14 w-full rounded-xl border px-5 text-sm font-medium backdrop-blur-md focus:outline-none sm:col-span-8"
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
                className="border-brand-cream/20 bg-brand-cream/10 text-brand-cream placeholder:text-brand-cream/50 focus:border-brand-yellow w-full resize-y rounded-xl border p-5 text-sm font-medium backdrop-blur-md focus:outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                id="marketing"
                className="accent-brand-yellow border-brand-cream/30 size-4 shrink-0 rounded"
                onChange={(e) =>
                  setFormData({ ...formData, marketing: e.target.checked })
                }
              />
              <label
                htmlFor="marketing"
                className="text-brand-cream/70 cursor-pointer text-[11px] leading-relaxed font-medium select-none"
              >
                I want to receive marketing materials, promotions and
                newsletters from NexVio.
              </label>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="bg-brand-yellow text-brand-teal hover:bg-brand-cream h-14 w-full rounded-full text-xs font-black tracking-widest uppercase shadow-lg transition-all duration-300"
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
