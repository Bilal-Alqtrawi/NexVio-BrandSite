import { RefreshCw } from "lucide-react";

export function EcosystemFooterCard() {
  return (
    <div className="to-brand-yellow-light relative mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 overflow-hidden rounded-[32px] border bg-linear-to-l from-[#FFF852] via-[#FFEA00] p-8 shadow-2xl transition-all duration-300 hover:scale-[1.01] sm:p-10 md:flex-row">
      {/* Layered Decorative Brand Shapes overlay */}
      <div className="pointer-events-none absolute inset-x-4 top-1/3 h-2/3 rounded-[24px] bg-white/15" />

      {/* Text Container */}
      <div className="relative z-10 max-w-xl space-y-2">
        <h4 className="text-xl font-bold tracking-tight text-[#071418] sm:text-2xl">
          Everything Works Together
        </h4>
        <p className="text-xs leading-relaxed font-medium text-[#7A6400] sm:text-sm">
          Every order, every payment, every inventory update, and every customer
          interaction stays synchronized in real time through one intelligent
          platform.
        </p>
      </div>

      {/* Connected Pill Badge */}
      <div className="relative z-10 flex w-full flex-col items-start gap-4 rounded-full border border-black/10 bg-brand-teal px-6 py-4 text-xs font-semibold text-white shadow-xl backdrop-blur-md sm:flex-row sm:items-center md:w-auto">
        <div className="flex items-center gap-2 text-[#FFEA00]">
          <RefreshCw size={14} className="animate-spin" />
          <span className="font-medium">Automatically connected</span>
        </div>
        <span className="hidden text-white/30 sm:inline">|</span>
        <span className="font-light text-white/90 italic">
          Because better connections create better businesses.
        </span>
      </div>
    </div>
  );
}
