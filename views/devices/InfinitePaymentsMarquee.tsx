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
      bg: "bg-[#1e1e1e]",
      textColor: "text-white"
    },
    {
      id: "t2",
      type: "image",
      src:
        deviceImages[0] ||
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
      alt: `${device.name} device showcase`,
      bg: "bg-[#FFD700]"
    },
    {
      id: "t3",
      type: "text",
      title: "Contactless Payments",
      bg: "bg-[#1e1e1e]",
      textColor: "text-white"
    },
    {
      id: "t4",
      type: "image",
      src:
        deviceImages[1] ||
        "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=80",
      alt: "Fast processing workflow",
      bg: "bg-[#FFF9E6]"
    },
    {
      id: "t5",
      type: "text",
      title: "80+ Payment Methods",
      bg: "bg-[#1e1e1e]",
      textColor: "text-white"
    },
    {
      id: "t6",
      type: "image",
      src:
        deviceImages[2] ||
        deviceImages[0] ||
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
      alt: "Retail execution",
      bg: "bg-[#FFD700]"
    }
  ];

  const BOTTOM_ITEMS = [
    {
      id: "b1",
      type: "image",
      src:
        deviceImages[1] ||
        "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&q=80",
      alt: "Tech hardware setup",
      bg: "bg-[#FFD700]"
    },
    {
      id: "b2",
      type: "text",
      title: "Enterprise Grade Security",
      bg: "bg-[#1e1e1e]",
      textColor: "text-white"
    },
    {
      id: "b3",
      type: "image",
      src:
        deviceImages[0] ||
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
      alt: `${device.name} design`,
      bg: "bg-[#FFF9E6]"
    },
    {
      id: "b4",
      type: "text",
      title: "Cloud Analytics Enabled",
      bg: "bg-[#1e1e1e]",
      textColor: "text-white"
    },
    {
      id: "b5",
      type: "image",
      src:
        deviceImages[2] ||
        "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=80",
      alt: "Modern payment terminal",
      bg: "bg-[#FFD700]"
    },
    {
      id: "b6",
      type: "text",
      title: "Sleek and Portable",
      bg: "bg-[#1e1e1e]",
      textColor: "text-white"
    }
  ];

  return (
    <section className="flex w-full flex-col gap-10 overflow-hidden bg-[#FBF9F4] py-16 md:gap-12 md:py-20">
      <div className="container mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-black tracking-tight text-neutral-950 uppercase sm:text-4xl md:text-5xl">
          CASHLESS PAYMENTS MADE SIMPLE
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        <div className="mask-gradient relative flex w-full transform-gpu overflow-x-hidden">
          <div className="animate-marquee-left flex transform-gpu gap-5 py-2 whitespace-nowrap will-change-transform">
            {[...TOP_ITEMS, ...TOP_ITEMS, ...TOP_ITEMS].map((item, index) => (
              <div
                key={`top-${item.id}-${index}`}
                className={`relative inline-block size-50 shrink-0 overflow-hidden rounded-[24px] shadow-sm transition-transform duration-300 hover:scale-[1.02] sm:h-60 sm:w-60 ${item.bg}`}
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
                  className={`relative inline-block size-50 shrink-0 overflow-hidden rounded-[24px] shadow-sm transition-transform duration-300 hover:scale-[1.02] sm:h-60 sm:w-60 ${item.bg}`}
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

      {/* حركات الـ Keyframes لضمان الأداء السلس للـ Marquees المتعاكسة */}
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
            white 12%,
            white 88%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            white 12%,
            white 88%,
            transparent
          );
        }
      `}</style>
    </section>
  );
}
