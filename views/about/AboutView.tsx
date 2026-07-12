import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AboutView() {
  return (
    <main className="from-background to-card/20 text-foreground w-full bg-linear-to-b pb-24">
      <section className="container mx-auto px-4 py-12 sm:px-8">
        <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <h1 className="shrink-0 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            About
          </h1>
          <span className="hidden rotate-12 transform text-5xl font-extralight text-black sm:block">
            /
          </span>
          <p className="max-w-xs pt-1 text-sm leading-relaxed font-medium text-neutral-500">
            About Nexvio
          </p>
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
                  sizes="(max-width: 1024px) 100vw, 50vw"
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
                nativeButton={false}
                render={<Link href="/support" />}
              >
                <span>Get Support</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
