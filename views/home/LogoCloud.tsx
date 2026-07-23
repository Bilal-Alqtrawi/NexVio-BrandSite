"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const companyLogos = [
  {
    name: "PK",
    src: "/logo-companies/514352753_1056017823375880_8090410080493881335_n.jpg"
  },
  { name: "April", src: "/logo-companies/April.webp" },
  { name: "Bara Herbs", src: "/logo-companies/Bara Herbs.webp" },
  { name: "Bubbles Self", src: "/logo-companies/bubbles-self-logo.png" },
  { name: "Centeral Park", src: "/logo-companies/centeral-park.png" },
  { name: "Channels4 Profile", src: "/logo-companies/channels4_profile.jpg" },
  { name: "Cibus1", src: "/logo-companies/cibus1.png" },
  { name: "Cook and Bake", src: "/logo-companies/cook-and-bake.gif" },
  {
    name: "Cropped Vending Machine",
    src: "/logo-companies/cropped-vending-machine-logo.png"
  },
  {
    name: "e3943f",
    src: "/logo-companies/e3943f_ba99efa79d854194ab408ef2f462d2da~mv2.avif"
  },
  { name: "Edited Photo", src: "/logo-companies/edited-photo.png" },
  { name: "Express", src: "/logo-companies/express-logo.svg" },
  { name: "Femina", src: "/logo-companies/femina.png" },
  { name: "Frid", src: "/logo-companies/Frid-removebg-preview.png" },
  { name: "Furla", src: "/logo-companies/furla-logo.svg" },
  { name: "Glof", src: "/logo-companies/glof.png" },
  {
    name: "H Stern",
    src: "/logo-companies/h-stern-logo-png_seeklogo-64520.png"
  },
  { name: "Hoff", src: "/logo-companies/hoff.png" },
  { name: "Icell", src: "/logo-companies/icell.avif" },
  { name: "Images 1", src: "/logo-companies/images (1).png" },
  {
    name: "Images Removebg",
    src: "/logo-companies/images-removebg-preview.png"
  },
  {
    name: "Images 2 Removebg",
    src: "/logo-companies/images__2_-removebg-preview.png"
  },
  {
    name: "Images 3 Removebg",
    src: "/logo-companies/images__3_-removebg-preview.png"
  }
];

export default function LogoCloud() {
  return (
    <section
      id="partners"
      className="relative w-full overflow-hidden pt-16 pb-24"
    >
      <div className="from-background to-background pointer-events-none absolute inset-0 z-10 h-full w-full bg-gradient-to-r via-transparent" />
      <motion.div
        className="flex items-center gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 35,
          ease: "linear"
        }}
      >
        {[...companyLogos, ...companyLogos].map((logo, idx) => (
          <div
            key={idx}
            className="flex shrink-0 items-center justify-center rounded-xl px-4 py-2 transition-all duration-300 hover:scale-105"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={150}
              height={75}
              quality={90}
              className="h-16 w-auto scale-110 object-cover"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
