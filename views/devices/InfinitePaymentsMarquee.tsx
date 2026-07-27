"use client";

import Image from "next/image";
import type { Device } from "@/lib/devices";

interface InfinitePaymentsMarqueeProps {
  device: Device;
}

export default function InfinitePaymentsMarquee({
  device
}: InfinitePaymentsMarqueeProps) {
  const deviceImages = [device.deviceImg, ...[device.bannerImg]];

  const TOP_ITEMS = [
    {
      id: "t1",
      type: "text",
      title: `Powered by ${device.name}`,
      bg: "bg-brand-cream/10 border border-brand-cream/15 backdrop-blur-md",
      textColor: "text-brand-cream"
    },
    {
      id: "t2",
      type: "image",
      src: deviceImages[0],
      alt: `${device.name} device showcase`,
      bg: "bg-brand-yellow"
    },
    {
      id: "t3",
      type: "text",
      title: "Contactless Payments",
      bg: "bg-brand-cream/10 border border-brand-cream/15 backdrop-blur-md",
      textColor: "text-brand-cream"
    },
    {
      id: "t4",
      type: "image",
      src: deviceImages[1],
      alt: "Fast processing workflow",
      bg: "bg-brand-yellow/20"
    },
    {
      id: "t5",
      type: "text",
      title: "80+ Payment Methods",
      bg: "bg-brand-cream/10 border border-brand-cream/15 backdrop-blur-md",
      textColor: "text-brand-cream"
    },
    {
      id: "t6",
      type: "image",
      src: deviceImages[0],
      alt: "Retail execution",
      bg: "bg-brand-yellow"
    }
  ];

  const BOTTOM_ITEMS = [
    {
      id: "b1",
      type: "image",
      src: deviceImages[1],
      alt: "Tech hardware setup",
      bg: "bg-brand-yellow"
    },
    {
      id: "b2",
      type: "text",
      title: "Enterprise Grade Security",
      bg: "bg-brand-cream/10 border border-brand-cream/15 backdrop-blur-md",
      textColor: "text-brand-cream"
    },
    {
      id: "b3",
      type: "image",
      src: deviceImages[0],
      alt: `${device.name} design`,
      bg: "bg-brand-yellow/20"
    },
    {
      id: "b4",
      type: "text",
      title: "Cloud Analytics Enabled",
      bg: "bg-brand-cream/10 border border-brand-cream/15 backdrop-blur-md",
      textColor: "text-brand-cream"
    },
    {
      id: "b5",
      type: "image",
      src: deviceImages[1],
      alt: "Modern payment terminal",
      bg: "bg-brand-yellow"
    },
    {
      id: "b6",
      type: "text",
      title: "Sleek and Portable",
      bg: "bg-brand-cream/10 border border-brand-cream/15 backdrop-blur-md",
      textColor: "text-brand-cream"
    }
  ];

  return (
    <section className="bg-brand-teal flex w-full flex-col gap-10 overflow-hidden py-16 font-sans md:gap-12 md:py-20">
      <div className="container mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-brand-cream text-3xl font-black tracking-tight uppercase sm:text-4xl md:text-5xl">
          CASHLESS PAYMENTS{" "}
          <span className="text-brand-yellow">MADE SIMPLE</span>
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        <div className="mask-gradient relative flex w-full transform-gpu overflow-x-hidden">
          <div className="animate-marquee-left flex transform-gpu gap-5 py-2 whitespace-nowrap will-change-transform">
            {[...TOP_ITEMS, ...TOP_ITEMS, ...TOP_ITEMS].map((item, index) => (
              <div
                key={`top-${item.id}-${index}`}
                className={`relative inline-block size-50 shrink-0 overflow-hidden rounded-[24px] shadow-lg transition-transform duration-300 hover:scale-[1.02] sm:h-60 sm:w-60 ${item.bg}`}
              >
                {item.type === "text" ? (
                  <div className="flex h-full w-full flex-col justify-end p-6 whitespace-normal">
                    <h3
                      className={`text-lg leading-snug font-black tracking-tight sm:text-xl ${item.textColor}`}
                    >
                      {item.title}
                    </h3>
                  </div>
                ) : (
                  <div className="relative flex h-full w-full items-center justify-center p-4">
                    <Image
                      src={item.src || ""}
                      alt={item.alt || ""}
                      fill
                      sizes="(max-width: 640px) 200px, 240px"
                      className="rounded-[18px] object-cover"
                      priority={index < 3}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mask-gradient relative flex w-full transform-gpu overflow-x-hidden">
          <div className="animate-marquee-right flex transform-gpu gap-5 py-2 whitespace-nowrap will-change-transform">
            {[...BOTTOM_ITEMS, ...BOTTOM_ITEMS, ...BOTTOM_ITEMS].map(
              (item, index) => (
                <div
                  key={`bottom-${item.id}-${index}`}
                  className={`relative inline-block size-50 shrink-0 overflow-hidden rounded-[24px] shadow-lg transition-transform duration-300 hover:scale-[1.02] sm:h-60 sm:w-60 ${item.bg}`}
                >
                  {item.type === "text" ? (
                    <div className="flex h-full w-full flex-col justify-end p-6 whitespace-normal">
                      <h3
                        className={`text-lg leading-snug font-black tracking-tight sm:text-xl ${item.textColor}`}
                      >
                        {item.title}
                      </h3>
                    </div>
                  ) : (
                    <div className="relative flex h-full w-full items-center justify-center p-4">
                      <Image
                        src={item.src || ""}
                        alt={item.alt || ""}
                        fill
                        sizes="(max-width: 640px) 200px, 240px"
                        className="rounded-[18px] object-cover"
                        priority={index < 3}
                      />
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marqueeLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }
        @keyframes marqueeRight {
          0% {
            transform: translate3d(-33.333%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-marquee-left {
          animation: marqueeLeft 45s linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeRight 45s linear infinite;
        }
        .mask-gradient {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 12%,
            black 88%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 12%,
            black 88%,
            transparent
          );
        }
      `}</style>
    </section>
  );
}
