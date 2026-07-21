import Image from "next/image";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

const SOLUTION_CARDS = [
  {
    title: "Restaurant Solutions",
    desc: "Complete POS, payments, and business management for restaurants and cafés."
  },
  {
    title: "Retail Solutions",
    desc: "Smart solutions to manage sales, inventory, customers, and daily operations."
  },
  {
    title: "Payment Solutions",
    desc: "Secure, seamless, and integrated payment acceptance for every business."
  },
  {
    title: "Smart Commerce Devices",
    desc: "Powerful Android devices designed for speed, mobility, and reliability."
  }
];

export default function ContactView() {
  return (
    <main className="w-full bg-[#FBF9F4] text-neutral-900">
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-8 lg:sticky lg:top-24 lg:col-span-5 lg:self-start lg:pt-4">
            <div className="space-y-4">
              <h1 className="text-4xl leading-[1.1] font-black tracking-tight uppercase sm:text-5xl lg:text-[56px]">
                Let&apos;s Talk Business
              </h1>
              <p className="max-w-md text-base leading-relaxed font-medium text-neutral-600">
                Tell us about your business, and we&apos;ll help you find the
                right POS, payment, and business management solution.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {SOLUTION_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-xs"
                >
                  <h3 className="text-sm font-black tracking-wide text-neutral-950">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-neutral-500">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative aspect-square max-w-85 overflow-hidden rounded-[32px] bg-[#FFF9E6] p-4 shadow-sm md:max-w-95">
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
