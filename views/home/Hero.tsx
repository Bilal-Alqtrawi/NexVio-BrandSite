"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }
  }
};

const cardHoverEffect: Variants = {
  hover: {
    y: -8,
    scale: 1.01,
    transition: { duration: 0.25, ease: "easeOut" }
  }
};

export default function Hero() {
  return (
    <motion.section
      className="relative container mx-auto w-full overflow-hidden px-4 pt-16 pb-24 sm:px-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mb-16 space-y-4 text-center">
        <motion.h1
          variants={itemVariants}
          className="text-primary font text-4xl leading-[1.1] tracking-tight sm:text-5xl"
        >
          Everything Your Business Needs.
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-muted-foreground text-xl font-light tracking-wide sm:text-2xl lg:text-3xl"
        >
          Business Technology Solutions
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
        <motion.div
          whileHover="hover"
          variants={cardHoverEffect}
          style={{ willChange: "transform, opacity" }}
          className="relative overflow-hidden rounded-[2rem] lg:col-span-2"
        >
          <Image
            src="/hero/box-1.svg"
            alt="Business Innovation Terminal"
            width={518}
            height={432}
            className="block h-auto w-full object-cover select-none"
            priority
          />
        </motion.div>

        <div className="flex flex-col gap-6 lg:col-span-1">
          <motion.div
            whileHover="hover"
            variants={cardHoverEffect}
            style={{ willChange: "transform, opacity" }}
            className="relative overflow-hidden rounded-[2rem]"
          >
            <Image
              src="/hero/box-2.svg"
              alt="Smart Device Sync"
              width={250}
              height={208}
              className="block h-auto w-full object-cover select-none"
            />
          </motion.div>

          <motion.div
            whileHover="hover"
            variants={cardHoverEffect}
            style={{ willChange: "transform, opacity" }}
            className="relative overflow-hidden rounded-[2rem]"
          >
            <Image
              src="/hero/box-3.svg"
              alt="POS Solutions Management"
              width={250}
              height={235}
              className="block h-auto w-full object-cover select-none"
            />
          </motion.div>
        </div>

        <motion.div
          whileHover="hover"
          variants={cardHoverEffect}
          style={{ willChange: "transform, opacity" }}
          className="relative overflow-hidden rounded-[2rem] lg:col-span-1"
        >
          <Image
            src="/hero/box-4.svg"
            alt="Analytics Dashboard Mobile"
            width={251}
            height={432}
            className="block h-auto w-full object-cover select-none"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
