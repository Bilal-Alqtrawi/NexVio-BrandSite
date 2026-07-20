interface IndustryCardProp {
  industry: any;
  index: number;
  isActive: boolean;
  onActive: (index: number) => void;
}

export default function IndustryCard({
  industry,
  index,
  isActive,
  onActive
}: IndustryCardProp) {
  const Icon = industry?.icon;

  return (
    <button
      onClick={() => onActive(index)}
      className={`relative flex h-33.75 flex-col items-start justify-between rounded-[24px] border p-5 text-left transition-all duration-300 ${isActive ? "scale-102 border-[#FAF8F5] bg-[#FAF8F5] text-black shadow-[0_20px_40px_-15px_rgba(245,196,27,0.2)]" : "border-white/10 bg-white/2 text-white hover:border-white/20 hover:bg-white/5"}`}
    >
      <div className="flex w-full items-center justify-between">
        <div
          className={`flex size-10 items-center justify-center rounded-xl transition-colors ${isActive ? "bg-black text-[#F5C41B]" : "bg-white/5 text-white/75"}`}
        >
          <Icon className="size-5 stroke-2" />
        </div>
        <span className="text-lg">{industry.emoji}</span>
      </div>
      <span className="mt-4 text-sm font-black tracking-wider uppercase">
        {industry.name}
      </span>
    </button>
  );
}
