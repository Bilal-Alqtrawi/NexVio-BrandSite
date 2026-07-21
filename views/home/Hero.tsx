"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const textContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const textItemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
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
      id="overview"
      className="relative container mx-auto w-full overflow-hidden px-4 pt-16 pb-24 sm:px-6"
    >
      <motion.div
        className="mb-16 space-y-4 text-center"
        variants={textContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={textItemVariants}
          className="text-primary text-4xl leading-[1.1] tracking-tight sm:text-5xl"
        >
          Everything Your Business Needs
        </motion.h1>

        <motion.h2
          variants={textItemVariants}
          className="text-muted-foreground text-xl font-light tracking-wide sm:text-2xl lg:text-3xl"
        >
          Business Technology Solutions
        </motion.h2>
      </motion.div>

      <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
        <motion.figure
          whileHover="hover"
          variants={cardHoverEffect}
          style={{ willChange: "transform" }}
          className="from-brand-teal to-teal-light relative flex flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-linear-to-t lg:col-span-2"
        >
          <Image
            src="/hero/box-1.svg"
            alt="Business Innovation Terminal"
            width={518}
            height={432}
            priority
            className="block h-auto w-full object-cover p-0 select-none"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          <figcaption className="text-brand-cream mx-auto max-w-lg text-center text-xl font-semibold">
            Smart Machine Management With Real-Time Analytics, Reports, And
            Monitoring
          </figcaption>
        </motion.figure>

        <div className="flex flex-col gap-6 lg:col-span-1">
          <motion.div
            whileHover="hover"
            variants={cardHoverEffect}
            className="relative overflow-hidden rounded-[2rem]"
          >
            <Image
              src="/hero/box-2.svg"
              alt="POS Solutions Management"
              width={250}
              height={235}
              className="block h-auto w-full object-cover select-none"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </motion.div>

          <motion.div
            whileHover="hover"
            variants={cardHoverEffect}
            className="from-brand-yellow-light via-brand-yellow-light to-brand-yellow relative flex h-52 w-auto flex-col items-center justify-center gap-4 overflow-hidden rounded-[2rem] bg-linear-to-br"
          >
            <ShieldCheck size={60} color="white" />
            <p className="text-center text-lg font-semibold tracking-tight">
              Smart, Safe, and <br /> Secure
            </p>
          </motion.div>
        </div>

        <motion.div
          whileHover="hover"
          variants={cardHoverEffect}
          className="relative overflow-hidden rounded-[2rem] lg:col-span-1"
        >
          <Image
            src="/hero/box-4.svg"
            alt="Analytics Dashboard Mobile"
            width={251}
            height={432}
            className="block h-auto w-full object-cover select-none"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
