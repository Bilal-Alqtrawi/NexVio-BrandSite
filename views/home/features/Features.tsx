import { FEATURES_DATA } from "./features.data";
import { FeatureCard } from "./FeatureCard";
import { EcosystemFooterCard } from "./EcosystemFooterCard";

export default function Features() {
  return (
    <section
      id="features"
      className="relative container mx-auto w-full space-y-14 overflow-hidden px-4 pt-16 pb-24 sm:px-6"
    >
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <span className="border-brand-yellow/30 text-brand-yellow inline-flex rounded-full border bg-transparent px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
          The NexVio Ecosystem
        </span>
        <h2 className="text-brand-teal text-2xl leading-[1.2] font-black tracking-tight sm:text-5xl">
          Everything Your Business Needs.{" "}
          <span className="text-brand-yellow">Connected.</span>
        </h2>
        <p className="text-teal-light mx-auto max-w-2xl text-sm leading-relaxed sm:text-base">
          NexVio brings POS, payments, sales, inventory, and reporting together
          in one intelligent platform—helping businesses operate faster, more
          efficiently, and with complete control.
        </p>
      </div>

      <div className="scrollbar-none flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-6 sm:grid sm:grid-cols-2 sm:overflow-x-visible sm:pb-0 lg:grid-cols-3">
        {FEATURES_DATA.map((feat) => (
          <FeatureCard key={feat.id} feat={feat} />
        ))}
      </div>

      <EcosystemFooterCard />
    </section>
  );
}
