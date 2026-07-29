import { FeatureItem } from "./features.data";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

export default function FeatureCard({ feat }: { feat: FeatureItem }) {
  const shouldReduceMotion = useReducedMotion();
  const isInventory = feat.variant === "inventory" || feat.id === 2;
  const isHighlight = feat.variant === "highlight";

  return (
    <motion.div
      className={cn(
        "group relative flex h-88 w-[85vw] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-[32px] border p-8 transition-all duration-500 ease-out sm:h-84 sm:w-full sm:snap-align-none",
        "hover:shadow-brand-teal/20 shadow-lg hover:-translate-y-2 hover:shadow-2xl",
        isInventory
          ? "border-teal-light/25 bg-linear-to-br from-[#1c3238] via-[#132428] to-[#0d181b]"
          : isHighlight
            ? "border-brand-yellow/30 bg-linear-to-br from-[#1a2d33] via-[#0f1d21] to-[#091013]"
            : "border-white/10 bg-linear-to-br from-[#142327]/90 to-[#0b1417]/95"
      )}
      whileHover={shouldReduceMotion ? undefined : "hover"}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{ willChange: "transform" }}
      viewport={{ once: true }}
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
    >
      <div
        className={cn(
          "pointer-events-none absolute -top-24 -left-24 size-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100",
          isHighlight ? "bg-brand-yellow/15" : "bg-teal-light/15"
        )}
      />
      <motion.div
        className="pointer-events-none absolute -right-8 -bottom-8 z-0 transition-all duration-700 ease-out group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:scale-110"
        whileHover={!shouldReduceMotion && { scale: 1.1, x: -8, y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ willChange: "transform" }}
      >
        <svg
          width="180"
          height="180"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn(
            "transition-all duration-500",
            isHighlight
              ? "stroke-brand-yellow/30 group-hover:stroke-brand-yellow/50"
              : "stroke-teal-light/20 group-hover:stroke-teal-light/40"
          )}
          strokeWidth="2.5"
        >
          <path d="M50 0 C50 30 70 50 100 50 C70 50 50 70 50 100 C50 70 30 50 0 50 C30 50 50 30 50 0 Z" />
        </svg>
      </motion.div>
      <div className="relative z-10 flex items-center justify-between">
        <span
          className={cn(
            "inline-flex rounded-full border px-3 py-1 font-mono text-sm font-bold tracking-widest backdrop-blur-md transition-colors duration-300",
            isHighlight
              ? "text-brand-yellow border-brand-yellow/30 bg-brand-yellow/10"
              : "text-brand-yellow/90 border-brand-yellow/20 bg-brand-yellow/5"
          )}
        >
          {feat.id <= 9 ? `0${feat.id}` : feat.id}
        </span>
        <div
          className={cn(
            "size-2 rounded-full transition-transform duration-300 group-hover:scale-150",
            isHighlight ? "bg-brand-yellow" : "bg-teal-light/50"
          )}
        />
      </div>
      <div className="relative z-10 mt-8 mb-auto space-y-3">
        <motion.h3
          className={cn(
            "group-hover:text-brand-yellow-light text-xl font-bold tracking-tight text-white transition-colors duration-300 sm:text-2xl"
          )}
          whileHover={!shouldReduceMotion && { color: "#fbbf24" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {feat.title}
        </motion.h3>
        <p className="line-clamp-3 text-sm leading-relaxed font-normal text-gray-300/80">
          {feat.desc}
        </p>
      </div>
    </motion.div>
  );
}
