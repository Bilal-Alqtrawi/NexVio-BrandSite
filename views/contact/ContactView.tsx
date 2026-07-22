import Image from "next/image";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import Link from "next/link";

export default function ContactView() {
  return (
    <main className="w-full bg-[#FBF9F4] text-neutral-900">
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-8 lg:sticky lg:top-24 lg:col-span-5 lg:self-start lg:pt-4">
            <div className="space-y-4">
              <h1 className="text-4xl leading-[1.1] font-black tracking-tight uppercase sm:text-5xl lg:text-[56px]">
                Let&apos;s connect
              </h1>
              <p className="max-w-md text-base leading-relaxed font-medium text-neutral-600">
                Please complete the form below and we&apos;ll be in touch
                shortly.
              </p>
              <p>
                Are you an existing customer?{" "}
                <Link
                  href="/faq"
                  target="_blank"
                  className="text-teal-light hover:text-brand-teal underline transition"
                >
                  Contact Support
                </Link>{" "}
                for any technical issues.
              </p>
            </div>

            <div className="bg-brand-teal relative aspect-square max-w-85 overflow-hidden rounded-[32px] p-4 shadow-sm md:max-w-95">
              <div className="relative h-full w-full overflow-hidden rounded-[24px]">
                <Image
                  src="/contact/contact-meeting.png"
                  alt="NexVio team presenting solutions to a customer"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="w-full rounded-[24px] border border-neutral-100 bg-white p-6 shadow-sm sm:p-10 lg:col-span-7">
            <div className="mb-6 space-y-2">
              <h2 className="text-2xl font-black tracking-tight text-neutral-950">
                Let&apos;s Start the Conversation
              </h2>
              <p className="text-sm leading-relaxed text-neutral-500">
                Tell us about your business, and our team will help you find the
                right solution for your needs. We&apos;ll get back to you as
                soon as possible.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <ContactMap />
    </main>
  );
}
