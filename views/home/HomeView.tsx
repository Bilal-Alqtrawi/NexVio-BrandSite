import Hero from "./Hero";
import Features from "./Features";
import LogoCloud from "./LogoCloud";
import Slider from "./Slider";
import CTA from "./CTA";

export default function HomeView() {
  return (
    <main className="min-h-screen w-full opacity-100 transition-opacity duration-300">
      <Hero />
      <Features />
      <LogoCloud />
      <Slider />
      <CTA />
    </main>
  );
}
