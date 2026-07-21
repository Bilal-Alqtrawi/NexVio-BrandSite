import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative container mx-auto px-4 pt-16 pb-24 sm:px-8">
      <div className="relative overflow-hidden rounded-[28px] bg-linear-to-b from-[#FFF500] via-[#FFD600] via-45% to-[#E9A000] py-14 shadow-2xl transition-all duration-300 hover:scale-[1.01]">
        <div className="text-center text-white">
          <Image
            alt="NexVio Logo"
            src={"/logo.svg"}
            width={100}
            height={100}
            style={{ width: "auto", height: "auto" }}
            className="mx-auto h-9! w-auto brightness-0 invert"
          />

          <div className="my-8 space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight text-white drop-shadow-xs sm:text-4xl">
              Get your free consultation
            </h2>
            <p className="px-3 text-sm font-light text-white/90 sm:text-base">
              Tell us about your business & how we can help you grow.
            </p>
          </div>

          <Button
            nativeButton={false}
            render={<Link href="/contact" />}
            className="group bg-brand-teal hover:bg-teal-light inline-flex items-center gap-3 rounded-full px-7 py-7 text-xs font-bold tracking-wider text-white uppercase shadow-lg transition-all duration-300 hover:text-white"
          >
            <span>Contact us</span>
            <span className="bg-teal-light inline-flex size-8 items-center justify-center rounded-full text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#071418]">
              <ArrowRight size={14} />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
