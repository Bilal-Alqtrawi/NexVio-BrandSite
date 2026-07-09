import Hero from "./Hero";
import Features from "./Features";
import LogoCloud from "./LogoCloud";
import Slider from "./Slider";
import CTA from "./CTA";

export default function HomeView() {
  return (
    <main>
      {/* <div className="container mx-auto px-4 sm:px-8"> */}
      <Hero />
      <Features />
      <LogoCloud />
      <Slider />
      <CTA />
      {/* </div> */}
    </main>
  );
}
