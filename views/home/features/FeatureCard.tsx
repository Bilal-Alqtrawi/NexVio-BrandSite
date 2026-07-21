import { FeatureItem } from "./features.data";
import { cn } from "@/lib/utils";

export function FeatureCard({ feat }: { feat: FeatureItem }) {
  const isInventory = feat.variant === "inventory";
  const isHighlight = feat.variant === "highlight";

  return (
    <div
      className={cn(
        "group relative z-1 flex h-88 w-[85vw] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-[30px] border p-8 shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 sm:h-84 sm:w-full sm:snap-align-none",
        isInventory
          ? "border-[#80a6af]/40 bg-linear-to-br from-[#2a4a55] via-[#1e3a44] to-[#80a6af] hover:border-[#80a6af]/70"
          : isHighlight
            ? "border-brand-yellow/30 bg-linear-to-br from-[#192d34] via-[#0f1c22] to-[#3a3520] hover:border-brand-yellow/50"
            : "border-teal-light/20 bg-linear-to-br from-[#192d34] to-[#071418] hover:border-teal-light/40"
      )}
    >
      <div
        className="pointer-events-none absolute -right-18.75 -bottom-20.5 z-0 size-52.5 rotate-42 rounded-tl-[62px] rounded-tr-[62px] rounded-br-[62px] rounded-bl-[16px] border-30 transition-all duration-500 group-hover:scale-105"
        style={{ borderColor: feat.accentColor }}
      />

      {isInventory && (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(128,166,175,0.35),transparent_55%)]" />
      )}

      <div className="relative z-10 flex-1 space-y-3">
        <span
          className={cn(
            "inline-flex font-mono text-base font-bold tracking-wider",
            isInventory ? "text-white" : "text-brand-yellow"
          )}
        >
          {feat.id <= 9 ? `0${feat.id}` : feat.id}
        </span>
        <div className="mt-auto">
          <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            {feat.title}
          </h3>
          <p
            className={cn(
              "mt-2 line-clamp-4 max-w-xs text-sm leading-relaxed",
              isInventory ? "text-white/85" : "text-teal-light"
            )}
          >
            {feat.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
