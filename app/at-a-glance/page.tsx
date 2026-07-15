import { Metadata } from "next";
import AtAGlanceView from "@/views/at-a-glance/AtAGlanceView";

export const metadata: Metadata = {
  title: "NexVio at a Glance | Building Smarter Businesses",
  description:
    "For more than 16 years, NexVio has helped over 3,000 businesses simplify operations, improve efficiency, and embrace digital transformation through one connected platform.",
  keywords: [
    "NexVio",
    "At a Glance",
    "Connected Technology",
    "Business Management Software",
    "Smart POS UAE",
    "Cloud ERP Middle East",
    "Retail Technology",
    "Business Automation"
  ],
  openGraph: {
    title: "NexVio at a Glance | Connected Business Tech",
    description:
      "Discover how NexVio empowers more than 3,000 businesses across the Middle East with intelligent software and smart commerce devices.",
    // url: "https://nexvio.ae/at-a-glance",
    siteName: "NexVio",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "NexVio at a Glance | Connected Business Tech",
    description:
      "Delivering innovative commerce solutions to simplify daily operations and scale with confidence."
  },
  alternates: {
    canonical: "/at-a-glance"
  }
};

export default function Page() {
  return <AtAGlanceView />;
}
