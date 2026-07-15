import { Metadata } from "next";
import CapabilitiesView from "@/views/capabilities/CapabilitiesView";

export const metadata: Metadata = {
  title: "Business Capabilities | NexVio",
  description:
    "NexVio combines the essential tools businesses need to manage daily operations through one intelligent platform."
};

export default function CapabilitiesPage() {
  return <CapabilitiesView />;
}
