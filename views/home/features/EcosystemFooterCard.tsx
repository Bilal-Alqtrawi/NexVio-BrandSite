import { RefreshCw } from "lucide-react";

export function EcosystemFooterCard() {
  return (
    <div className="border-brand-yellow/40 from-brand-yellow-light via-brand-yellow to-brand-yellow relative mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 overflow-hidden rounded-[32px] border bg-linear-to-l p-8 shadow-2xl transition-all duration-300 hover:scale-[1.01] sm:p-10 md:flex-row">
      <div className="bg-brand-cream/20 pointer-events-none absolute inset-x-4 top-1/3 h-2/3 rounded-[24px]" />

      <div className="relative z-10 max-w-xl space-y-2">
        <h4 className="text-brand-teal text-xl font-bold tracking-tight sm:text-2xl">
          Everything Works Together
        </h4>
        <p className="text-brand-teal/80 text-xs leading-relaxed font-medium sm:text-sm">
          Every order, every payment, every inventory update, and every customer
          interaction stays synchronized in real time through one intelligent
          platform.
        </p>
      </div>

      <div className="bg-brand-teal text-brand-cream border-brand-teal/10 relative z-10 flex w-full flex-col items-start gap-4 rounded-full border px-6 py-4 text-xs font-semibold shadow-xl backdrop-blur-md sm:flex-row sm:items-center md:w-auto">
        <div className="text-brand-yellow flex items-center gap-2">
          <RefreshCw size={14} className="animate-spin" />
          <span className="font-medium">Automatically connected</span>
        </div>
        <span className="text-brand-cream/30 hidden sm:inline">|</span>
        <span className="text-brand-cream/90 font-light italic">
          Because better connections create better businesses.
        </span>
      </div>
    </div>
  );
}
