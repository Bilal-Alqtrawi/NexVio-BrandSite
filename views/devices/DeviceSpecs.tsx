import type { Device } from "@/lib/devices";
import FlipCard from "./FlipCard";

export default function DeviceSpecs({ device }: { device: Device }) {
  return (
    <section className="bg-brand-teal relative z-10 overflow-hidden py-24 lg:py-32">
      {/* Subtle Glow Background */}
      <div className="bg-brand-yellow/5 pointer-events-none absolute top-1/2 left-1/2 size-150 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]" />

      <div className="relative z-10 container mx-auto max-w-7xl px-6 md:px-12 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-20 max-w-3xl space-y-4 text-center">
          <span className="text-brand-yellow border-brand-yellow/30 bg-brand-yellow/10 inline-block rounded-full border px-4 py-1 text-xs font-black tracking-widest uppercase">
            Core Performance
          </span>
          <h2 className="text-brand-cream text-3xl leading-[1.15] font-black tracking-tight uppercase sm:text-5xl">
            Turn every transaction into a growth opportunity
          </h2>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-3">
          <FlipCard
            title="Features"
            frontBg="bg-brand-cream/10 border border-brand-cream/15 text-brand-cream backdrop-blur-md shadow-lg"
            backBg="bg-brand-cream text-brand-teal shadow-2xl"
            frontContent={
              <>
                <p className="text-brand-cream/80 text-sm leading-relaxed font-medium">
                  A compact, smart infrastructure designed to seamlessly
                  streamline operations, drive retail growth, and sell anywhere.
                </p>
                <div className="text-brand-yellow mt-auto flex items-center gap-1.5 pt-4 text-[11px] font-black tracking-widest uppercase opacity-80 transition-opacity group-hover:opacity-100">
                  <span>Hover to flip</span>
                  <span className="text-sm">→</span>
                </div>
              </>
            }
            backContent={
              <>
                <h4 className="text-brand-teal mb-5 text-lg font-black tracking-wider uppercase">
                  Core Specs
                </h4>
                <ul className="space-y-4">
                  {device.specs.map((spec) => (
                    <li
                      key={spec}
                      className="text-brand-teal/90 flex items-start gap-3 text-xs font-bold sm:text-sm"
                    >
                      <span className="bg-brand-teal text-brand-yellow mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full">
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3.5}
                          stroke="currentColor"
                          className="size-2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </span>
                      <span className="leading-tight">{spec}</span>
                    </li>
                  ))}
                </ul>
              </>
            }
          />

          <FlipCard
            title="Benefits"
            frontBg="bg-brand-yellow text-brand-teal shadow-xl border-none"
            backBg="bg-brand-cream text-brand-teal shadow-2xl"
            frontContent={
              <>
                <p className="text-brand-teal/90 mb-4 text-sm leading-relaxed font-bold">
                  The {device.name} ecosystem offers fast secure transactions,
                  enterprise connectivity, and optimized workflow tracking.
                </p>
              </>
            }
            backContent={
              <div className="space-y-3 px-2 text-center">
                <h4 className="text-brand-teal text-2xl font-black tracking-tight uppercase">
                  High Efficiency
                </h4>
                <p className="text-brand-teal/80 text-sm leading-relaxed font-bold">
                  Engineered to minimize transaction latency and maximize client
                  satisfaction in heavy-duty environments.
                </p>
              </div>
            }
          />

          {/* Card 3: Engagement (Clean Light Cream Style) */}
          <FlipCard
            title="Engagement"
            frontBg="bg-brand-cream text-brand-teal shadow-xl border-none"
            backBg="bg-brand-teal text-brand-cream border border-brand-cream/20 shadow-2xl"
            frontContent={
              <>
                <p className="text-brand-teal/80 text-sm leading-relaxed font-bold">
                  Engage customers everywhere—on the shop floor, indoors, or
                  outdoors—all while staying connected to your central cloud
                  terminal.
                </p>
                <div className="border-brand-teal/15 bg-brand-teal/5 mt-auto rounded-2xl border p-4">
                  <p className="text-brand-teal text-center text-[11px] font-black tracking-widest uppercase">
                    Cloud Analytics Enabled
                  </p>
                </div>
              </>
            }
            backContent={
              <div className="space-y-5">
                <h4 className="text-brand-yellow text-xl font-black tracking-wider uppercase">
                  Highlights
                </h4>
                {device.highlights?.slice(0, 2).map((highlight) => (
                  <div
                    key={highlight.title}
                    className="border-brand-yellow space-y-1 border-l-2 pl-3"
                  >
                    <h5 className="text-brand-cream text-xs font-black tracking-wider uppercase">
                      {highlight.title}
                    </h5>
                    <p className="text-brand-cream/70 text-xs leading-normal font-medium">
                      {highlight.description}
                    </p>
                  </div>
                )) || (
                  <p className="text-brand-cream/60 text-xs italic">
                    Advanced smart hardware connectivity built-in.
                  </p>
                )}
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
