"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Lights() {
  const { scrollYProgress } = useScroll();

  const glowY1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const glowY2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(234,234,234,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(234,234,234,0.02)_1px,transparent_1px)] bg-size[5rem_5rem]"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 100%)"
        }}
      />

      {/* Ambient Animated Orbs */}
      <motion.div
        style={{ y: glowY1 }}
        className="absolute top-[5%] left-1/2 size-150 -translate-x-1/2 rounded-full bg-[#FFD900]/10 blur-[160px] will-change-transform"
      />
      <motion.div
        style={{ y: glowY2 }}
        className="absolute top-[35%] -left-40 size-125 rounded-full bg-[#67BCD3]/15 blur-[160px] will-change-transform"
      />
      <div className="absolute -right-40 bottom-[10%] size-125 rounded-full bg-[#FFD900]/10 blur-[180px]" />
    </div>
  );
}
