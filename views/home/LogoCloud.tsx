"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const LogosImages: string[] = [
  "/logos/logo-1.svg",
  "/logos/logo-2.svg",
  "/logos/logo-3.svg",
  "/logos/logo-4.svg",
  "/logos/logo-5.svg",
  "/logos/logo-6.svg",
  "/logos/logo-7.svg",
  "/logos/logo-8.svg"
];

export default function LogoCloud() {
  return (
    <section
      id="partners"
      className="relative w-full overflow-hidden pt-16 pb-24"
    >
      <motion.div
        className="flex items-center gap-8"
        animate={{ x: ["0%", "-120%"] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear"
        }}
      >
        {[...LogosImages, ...LogosImages].map((logo, idx) => (
          <div
            key={idx}
            className="flex shrink-0 items-center justify-center rounded-xl bg-[#d9d9d9] shadow-sm transition-all duration-300 hover:scale-105"
          >
            <Image
              src={logo}
              alt={`logo-${idx}`}
              width={150}
              height={75}
              quality={90}
              className="h-20 w-auto object-cover opacity-75 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
