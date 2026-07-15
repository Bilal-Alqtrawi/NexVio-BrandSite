import Image from "next/image";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

export default function ContactView() {
  return (
    <main className="w-full bg-[#FBF9F4] text-neutral-900">
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-8 lg:sticky lg:top-24 lg:col-span-5">
            <div className="space-y-4">
              <h1 className="text-4xl leading-[1.1] font-black tracking-tight uppercase sm:text-5xl lg:text-[56px]">
                Let&apos;s Connect
              </h1>
              <p className="max-w-md text-base leading-relaxed font-medium text-neutral-600">
                Please complete the form below and we&apos;ll be in touch
                shortly.
              </p>
              <div className="pt-2 text-sm font-semibold text-neutral-500">
                Are you an existing customer?{" "}
                <a
                  href="#contact-us"
                  className="text-red-500 underline hover:text-red-600"
                >
                  Contact Support
                </a>{" "}
                for any technical issues.
              </div>
            </div>

            <div className="relative aspect-square max-w-85 overflow-hidden rounded-[32px] bg-[#FFF9E6] p-4 shadow-sm md:max-w-95">
              <div className="relative h-full w-full overflow-hidden rounded-[24px]">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600"
                  alt="NexVio representative"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="w-full rounded-[24px] border border-neutral-100 bg-white p-6 shadow-sm sm:p-10 lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      <ContactMap />
    </main>
  );
}
