"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Compass, ArrowDown } from "lucide-react";
import ContactUsButton from "@/components/shared/ContactUsButton";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, -60]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center px-6 pt-32 pb-20"
    >
      <motion.div
        style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
        className="container mx-auto max-w-5xl text-center will-change-transform"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-block"
        >
          <Badge icon={Compass}>Our Purpose</Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="text-4xl leading-[1.1] font-black tracking-tight text-[#EAEAEA] uppercase sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Empowering Businesses <br />
          <span className="bg-linear-to-r from-[#ffe958] via-[#FFD900] to-[#67BCD3] bg-clip-text text-transparent drop-shadow-md">
            Through Connected Tech
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="mx-auto mt-8 max-w-3xl text-base leading-relaxed font-medium text-[#80a6af] sm:text-lg md:text-xl"
        >
          At NexVio, we believe technology should make running a business easier
          not more complicated. Our purpose is to simplify daily operations by
          connecting every essential business function into one intelligent
          platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 flex flex-col items-center justify-center gap-6"
        >
          <ContactUsButton variant="teal" />

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }}
            className="mt-12 flex items-center gap-2 text-xs font-bold tracking-widest text-[#80a6af] uppercase"
          >
            <span>Scroll to Explore</span>
            <ArrowDown className="size-4 text-[#FFD900]" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
