import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative container mx-auto px-4 pt-16 pb-24 sm:px-8">
      <div className="transation relative rounded-lg bg-linear-to-b from-[#FFD900] via-[#F7C914] via-25% to-[#E9AA3B] py-12 shadow-xl duration-300 hover:scale-101">
        <div className="text-center text-white">
          <Image
            alt="NexVio Logo"
            src={"/logo.svg"}
            width={100}
            height={100}
            className="mx-auto mt-5 h-10 w-auto brightness-0 invert-100"
          />

          <div className="my-10 space-y-2">
            <h2 className="text-4xl font-medium">Get your free consultation</h2>
            <p className="text-background/95 px-3 font-light">
              Tell us about your business & how we can help you grow.
            </p>
          </div>

          <Button
            nativeButton={false}
            render={<Link href="/contact" />}
            className="text-foreground hover:bg-foreground group transation space-x-3 rounded-full bg-white px-6 py-8 duration-300 hover:text-white"
          >
            <span className="uppercase">contact us</span>
            <span className="bg-foreground inline-flex size-10.25 items-center justify-center rounded-full text-white group-hover:bg-white group-hover:text-black">
              <ArrowRight size={16} />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
