import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./Hero"));
const Devices = dynamic(() => import("./Devices"));
const Features = dynamic(() => import("./features/Features"));

import LogoCloud from "./LogoCloud";
import CTA from "./CTA";

export default function HomeView() {
  return (
    <main className="min-h-screen w-full opacity-100 transition-opacity duration-300">
      <Hero />
      <Features />
      <LogoCloud />
      <Devices />
      <CTA />
    </main>
  );
}
