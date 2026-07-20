import HelpView from "@/views/help/HelpView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexVio | How It Works - Easy 3-Step Business Onboarding",
  description:
    "Set up your business profile, connect your POS and payments, and start selling with confidence. Our 3-step process ensures a seamless NexVio platform onboarding.",
  alternates: {
    canonical: "/help"
  }
};

export default async function Page() {
  return <HelpView />;
}
