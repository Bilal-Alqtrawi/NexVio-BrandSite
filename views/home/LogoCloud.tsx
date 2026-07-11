"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const LogosImages: string[] = [
  "/logos/logo-1.png",
  "/logos/logo-2.png",
  "/logos/logo-3.png",
  "/logos/logo-4.png",
  "/logos/logo-5.png",
  "/logos/logo-6.png",
  "/logos/logo-7.png",
  "/logos/logo-8.png"
];

export default function LogoCloud() {
  return (
    <section className="relative w-full overflow-hidden pt-16 pb-24">
      <motion.div
        className="flex items-center gap-8"
        animate={{ x: ["0%", "-150%"] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear"
        }}
      >
        {[...LogosImages, ...LogosImages].map((logo, idx) => (
          <div
            key={idx}
            className="flex shrink-0 items-center justify-center bg-transparent transition-all duration-300 hover:scale-105"
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
