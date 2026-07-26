import { FeatureItem } from "./features.data";
import { cn } from "@/lib/utils";

export function FeatureCard({ feat }: { feat: FeatureItem }) {
  const isInventory = feat.variant === "inventory";
  const isHighlight = feat.variant === "highlight";

  return (
    <div
      className={cn(
        "group relative z-1 flex h-88 w-[85vw] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-[30px] border p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 sm:h-84 sm:w-full sm:snap-align-none",
        isInventory
          ? "border-teal-light/30 bg-brand-cream/95 hover:border-teal-light"
          : isHighlight
            ? "border-brand-yellow-dark/20 bg-brand-yellow hover:border-brand-teal/40"
            : "border-border/60 bg-brand-cream hover:border-brand-yellow"
      )}
    >
      <div
        className="pointer-events-none absolute -right-18.75 -bottom-20.5 z-0 size-52.5 rotate-42 rounded-tl-[62px] rounded-tr-[62px] rounded-br-[62px] rounded-bl-[16px] border-30 transition-all duration-500 group-hover:scale-105"
        style={{ borderColor: feat.accentColor }}
      />

      <div className="relative z-10 flex-1 space-y-3">
        <span
          className={cn(
            "inline-flex font-mono text-base font-bold tracking-wider",
            isHighlight ? "text-brand-teal/70" : "text-brand-yellow-dark"
          )}
        >
          {feat.id <= 9 ? `0${feat.id}` : feat.id}
        </span>

        <div className="mt-auto">
          <h3 className="text-brand-teal text-xl font-bold tracking-tight sm:text-2xl">
            {feat.title}
          </h3>

          <p
            className={cn(
              "mt-2 line-clamp-4 max-w-xs text-sm leading-relaxed",
              isHighlight
                ? "text-brand-teal/85 font-medium"
                : "text-brand-teal/70"
            )}
          >
            {feat.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
