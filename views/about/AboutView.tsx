import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AboutView() {
  return (
    <main className="from-background to-card/20 text-foreground w-full bg-linear-to-b pb-24">
      <section className="container mx-auto px-4 pt-16 pb-8 sm:px-8">
        <div className="relative flex w-fit items-center justify-between gap-4 select-none sm:gap-10">
          <h1 className="pr-2 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            About
          </h1>
          <span className="absolute top-1/2 left-[50%] inline-flex h-16 w-0.5 -translate-x-1/2 -translate-y-1/2 rotate-20 bg-neutral-700" />
          <span className="inline-flexhover:text-brand-yellow cursor-pointer pt-1 pl-2 text-sm font-medium tracking-wide text-neutral-500 transition-colors duration-200">
            About Nexvio
          </span>
        </div>
      </section>

      <section className="container mx-auto px-4 pl-4 sm:px-0 sm:pl-6">
        <div className="relative">
          <div className="bg-card/10 flex flex-col items-center gap-8 rounded-3xl border border-black p-6 backdrop-blur-xs lg:flex-row lg:gap-12 lg:rounded-l-full lg:p-8 lg:pr-16">
            <div className="w-full max-w-145 shrink-0 rounded-full border border-black p-3 sm:p-4 lg:w-1/2 dark:border-white/10">
              <div className="relative aspect-16/10 w-full overflow-hidden rounded-full shadow-xs">
                <Image
                  src="/about/about.svg"
                  alt="About Nexvio platform team working together"
                  fill
                  sizes="(max-w-1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            <div className="flex-1 lg:max-w-md">
              <p className="text-sm leading-relaxed font-normal text-neutral-700 sm:text-base dark:text-neutral-300">
                Have questions or need help with AIChefMate? Our dedicated
                support team is ready to assist you. Get the answers and
                assistance you need to make the most of your meal planning
                experience.Have questions or need help with AIChefMate? Our
                dedicated support team is ready
              </p>
            </div>
          </div>

          <div className="mt-12 max-w-3xl space-y-6 px-4 sm:px-12 lg:px-24">
            <p className="text-sm leading-relaxed text-neutral-600 sm:text-base dark:text-neutral-400">
              Have questions or need help with AIChefMate? Our dedicated support
              team is ready to assist you. Get the answers and assistance you
              need to make the most of your meal planning experience.
            </p>

            <div className="pt-2">
              <Button
                variant="outline"
                className="bg-brand-yellow h-12 w-full rounded-full border-none text-sm font-bold tracking-wide text-neutral-950 shadow-md transition-all duration-200 active:scale-98 sm:w-64"
              >
                <Link href="/support">Get Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
