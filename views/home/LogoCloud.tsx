"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const companyLogos = [
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

const duplicatedLogos = [...companyLogos, ...companyLogos, ...companyLogos];

export default function LogoCloud() {
  return (
    <section
      id="partners"
      className="relative w-full overflow-hidden pt-16 pb-24"
    >
      <div className="from-brand-teal to-brand-teal/0 pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r" />
      <div className="from-brand-teal to-brand-teal/0 pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l" />

      <motion.div
        className="flex w-max flex-nowrap items-center gap-12 will-change-transform"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 120,
          ease: "linear"
        }}
      >
        {duplicatedLogos.map((logo, idx) => (
          <div
            key={idx}
            className="flex h-fit w-36 shrink-0 items-center justify-center p-4 brightness-100 invert-5 transition-all duration-300 hover:scale-105"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={140}
              height={70}
              quality={90}
              className="h-auto w-30 object-cover"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
