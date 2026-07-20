import AboutView from "@/views/about/AboutView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About NexVio | Your Unified Business Platform in UAE",
  description:
    "Learn how NexVio integrates Smart POS, cloud management, and Nayax payment technology to empower businesses in the UAE.",
  openGraph: {
    title: "About NexVio",
    description:
      "Empowering UAE businesses with integrated commerce solutions.",
    type: "website"
  }
};

export default function Page() {
  return <AboutView />;
}
