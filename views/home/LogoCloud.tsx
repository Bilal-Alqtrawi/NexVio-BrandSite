"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const LogosImages = [
  { src: "/companies-logo/express-logo.svg", name: "Express" },
  { src: "/companies-logo/kidistar.png", name: "Kidistar" },
  { src: "/companies-logo/tiba.png", name: "Tiba" },
  { src: "/logos/logo-1.svg", name: "Partner" },
  { src: "/logos/logo-2.svg", name: "Partner" },
  { src: "/logos/logo-3.svg", name: "Partner" },
  { src: "/logos/logo-4.svg", name: "Partner" },
  { src: "/logos/logo-5.svg", name: "Partner" }
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
            className={`flex shrink-0 items-center justify-center rounded-xl px-4 py-2 shadow-sm transition-all duration-300 hover:scale-105 ${
              idx % 2 === 0
                ? "bg-brand-yellow"
                : "bg-brand-teal"
            }`}
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={150}
              height={75}
              quality={90}
              className="h-20 w-auto object-contain brightness-0 invert"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
