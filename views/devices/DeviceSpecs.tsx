import type { Device } from "@/lib/devices";
import FlipCard from "./FlipCard";

const DEFAULT_ENGAGEMENT_ITEMS = [
  { title: "Cloud Sync", subtitle: "Always Connected" },
  { title: "Customer Profiles", subtitle: "Instant Access" },
  { title: "Loyalty Rewards", subtitle: "Ready to Redeem" }
];

export default function DeviceSpecs({ device }: { device: Device }) {
  const details = device.featureDetails;

  const featuresText =
    details?.featuresText ||
    "A compact, smart device designed to seamlessly streamline operations, drive retail growth, and sell anywhere.";

  const featuresTags = details?.featuresTags || [
    "POS",
    "Payments",
    "Inventory",
    "CRM"
  ];

  const benefitsText =
    details?.benefitsText ||
    `The ${device.name} ecosystem offers fast secure transactions, enterprise connectivity, and optimized workflow management.`;

  const engagementText =
    details?.engagementText ||
    "Engage customers everywhere—on the shop floor, indoors, or outdoors—all while staying connected to your central cloud terminal.";

  const engagementItems = details?.engagementItems || DEFAULT_ENGAGEMENT_ITEMS;

  return (
    <section className="bg-brand-teal relative z-10 overflow-hidden py-24 lg:py-32">
      {/* Background Glow */}
      <div className="bg-brand-yellow/5 pointer-events-none absolute top-1/2 left-1/2 size-150 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]" />

      <div className="relative z-10 container mx-auto max-w-7xl px-6 md:px-12 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
          <span className="text-brand-yellow border-brand-yellow/30 bg-brand-yellow/10 inline-block rounded-full border px-4 py-1 text-xs font-black tracking-widest uppercase">
            Core Performance
          </span>
          <h2 className="text-brand-cream text-3xl leading-[1.15] font-black tracking-tight uppercase sm:text-5xl">
            Turn every transaction into a growth opportunity
          </h2>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-3">
          {/* Card 1: Features */}
          <FlipCard
            title="Features"
            frontBg="bg-brand-cream/10 border border-brand-cream/15 text-brand-cream backdrop-blur-md shadow-lg"
            backBg="bg-brand-cream text-brand-teal shadow-2xl"
            frontContent={
              <div className="flex h-full flex-col justify-between space-y-6">
                <p className="text-brand-cream/90 text-sm leading-relaxed font-medium">
                  {featuresText}
                </p>

                {/* Fill empty space with feature tags */}
                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  {featuresTags.map((tag) => (
                    <div
                      key={tag}
                      className="border-brand-cream/20 bg-brand-cream/10 flex items-center justify-center rounded-xl border px-3 py-2 text-center text-xs font-bold"
                    >
                      {tag}
                    </div>
                  ))}
                </div>

                <div className="text-brand-yellow mt-auto flex items-center gap-1.5 pt-2 text-[11px] font-black tracking-widest uppercase opacity-80 transition-opacity group-hover:opacity-100">
                  <span>Hover to flip</span>
                  <span className="text-sm">→</span>
                </div>
              </div>
            }
            backContent={
              <>
                <h4 className="text-brand-teal mb-5 text-lg font-black tracking-wider uppercase">
                  Core Specs
                </h4>
                <ul className="space-y-3.5">
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

          {/* Card 2: Benefits */}
          <FlipCard
            title="Benefits"
            frontBg="bg-brand-yellow text-brand-teal shadow-xl border-none"
            backBg="bg-brand-cream text-brand-teal shadow-2xl"
            frontContent={
              <div className="flex h-full flex-col justify-between space-y-6">
                <p className="text-brand-teal/90 text-sm leading-relaxed font-bold">
                  {benefitsText}
                </p>

                <div className="bg-brand-teal/10 border-brand-teal/20 mt-auto rounded-2xl border p-4 text-center">
                  <p className="text-brand-teal text-xs font-black tracking-wider uppercase">
                    Optimized Workflow Management
                  </p>
                </div>
              </div>
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

          {/* Card 3: Engagement */}
          <FlipCard
            title="Engagement"
            frontBg="bg-brand-cream text-brand-teal shadow-xl border-none"
            backBg="bg-brand-teal text-brand-cream border border-brand-cream/20 shadow-2xl"
            frontContent={
              <div className="flex h-full flex-col justify-between space-y-5">
                <p className="text-brand-teal/80 text-sm leading-relaxed font-bold">
                  {engagementText}
                </p>

                {/* Engagement grid items to fill space */}
                <div className="space-y-2 pt-1">
                  {engagementItems.map((item) => (
                    <div
                      key={item.title}
                      className="border-brand-teal/10 bg-brand-teal/5 flex items-center justify-between rounded-xl border px-3.5 py-2"
                    >
                      <span className="text-brand-teal text-xs font-black uppercase">
                        {item.title}
                      </span>
                      <span className="text-brand-teal/60 text-[10px] font-semibold">
                        {item.subtitle}
                      </span>
                    </div>
                  ))}
                </div>

                {/* <div className="border-brand-teal/15 bg-brand-teal/5 mt-auto rounded-2xl border p-3">
                  <p className="text-brand-teal text-center text-[10px] font-black tracking-widest uppercase">
                    Cloud Analytics Enabled
                  </p>
                </div> */}
              </div>
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
