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
        <h2 className="text-brand-cream text-2xl leading-[1.2] font-black tracking-tight sm:text-5xl">
          One Platform, Unlimited Possibilities
        </h2>
        <p className="text-teal-light mx-auto max-w-2xl text-sm leading-relaxed sm:text-base">
          Everything works together in one connected platform, giving you
          complete control over your business from a single place
        </p>
      </div>

      <EcosystemFooterCard />

      <div className="flex w-full snap-x snap-mandatory scrollbar-none gap-6 overflow-x-auto pb-6 sm:grid sm:grid-cols-2 sm:overflow-x-visible sm:pb-0 lg:grid-cols-3">
        {FEATURES_DATA.map((feat) => (
          <FeatureCard key={feat.id} feat={feat} />
        ))}
      </div>
    </section>
  );
}
