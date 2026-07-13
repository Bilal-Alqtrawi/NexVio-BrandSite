import Image from "next/image";
import type { Device } from "@/lib/devices";
import FlipCard from "./FlipCard";

export default function DeviceSpecs({ device }: { device: Device }) {
  return (
    <section className="relative z-10 overflow-hidden border-t border-neutral-200/40 bg-[#FBF9F4] py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-8">
        <div className="mx-auto mb-20 max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl leading-[1.15] font-black tracking-tight text-neutral-950 uppercase sm:text-5xl">
            Turn every transaction into a growth opportunity
          </h2>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-3">
          <FlipCard
            title="Features"
            frontBg="bg-white border border-neutral-200/50"
            backBg="bg-neutral-900 text-white"
            frontContent={
              <>
                <p className="text-sm leading-relaxed font-medium text-neutral-500">
                  A compact, smart infrastructure designed to seamlessly
                  streamline operations, drive retail growth, and sell anywhere.
                </p>
                <div className="mt-auto flex items-center gap-1.5 pt-4 text-[11px] font-black tracking-widest text-[#FFD700] uppercase opacity-80 transition-opacity group-hover:opacity-100">
                  <span>Hover to flip</span>
                  <span className="text-sm">→</span>
                </div>
              </>
            }
            backContent={
              <>
                <h4 className="mb-5 text-lg font-black tracking-wider text-[#FFD700] uppercase">
                  Core Specs
                </h4>
                <ul className="space-y-4">
                  {device.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-start gap-3 text-xs font-semibold text-neutral-200 sm:text-sm"
                    >
                      <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-[#FFD700] text-neutral-950">
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
            frontBg="bg-[#FFFDF6] border-2 border-[#FFD700]/30"
            backBg="bg-[#FFD700] text-neutral-950"
            frontContent={
              <>
                <p className="mb-4 text-sm leading-relaxed font-medium text-neutral-600">
                  The {device.name} ecosystem offers fast secure transactions,
                  enterprise connectivity, and optimized workflow tracking.
                </p>
                {/* الحاوية السحرية: تضمن عدم خروج الصورة من الأسفل نهائياً عبر الـ absolute bottom-0 ومقصوصة بالـ rounded الحواف */}
                <div className="absolute -right-8 -bottom-8 -left-8 flex h-[200px] w-[calc(100%+64px)] items-end justify-center overflow-hidden">
                  <div className="relative h-[90%] w-full translate-y-2 transform transition-transform duration-500 group-hover:translate-y-0">
                    <Image
                      src={device.deviceImg}
                      alt={device.name}
                      fill
                      className="object-cover object-bottom"
                    />
                  </div>
                </div>
              </>
            }
            backContent={
              <div className="space-y-3 px-2 text-center">
                <h4 className="text-2xl font-black tracking-tight uppercase">
                  High Efficiency
                </h4>
                <p className="text-sm leading-relaxed font-bold text-neutral-900/80">
                  Engineered to minimize transaction latency and maximize client
                  satisfaction in heavy-duty environments.
                </p>
              </div>
            }
          />

          {/* 3. كارد الـ Engagement */}
          <FlipCard
            title="Engagement"
            frontBg="bg-white border border-neutral-200/50"
            backBg="bg-neutral-950 text-white"
            frontContent={
              <>
                <p className="text-sm leading-relaxed font-medium text-neutral-500">
                  Engage customers everywhere—on the shop floor, indoors, or
                  outdoors—all while staying connected to your central cloud
                  terminal.
                </p>
                <div className="mt-auto rounded-2xl border border-neutral-100 bg-neutral-50 p-4">
                  <p className="text-center text-[11px] font-bold tracking-widest text-neutral-400 uppercase">
                    Cloud Analytics Enabled
                  </p>
                </div>
              </>
            }
            backContent={
              <div className="space-y-5">
                <h4 className="text-xl font-black tracking-wider text-[#FFD700] uppercase">
                  Highlights
                </h4>
                {device.highlights?.slice(0, 2).map((highlight) => (
                  <div
                    key={highlight.title}
                    className="space-y-1 border-l-2 border-[#FFD700] pl-3"
                  >
                    <h5 className="text-xs font-black tracking-wider text-white uppercase">
                      {highlight.title}
                    </h5>
                    <p className="text-xs leading-normal font-medium text-neutral-400">
                      {highlight.description}
                    </p>
                  </div>
                )) || (
                  <p className="text-xs text-neutral-400 italic">
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
