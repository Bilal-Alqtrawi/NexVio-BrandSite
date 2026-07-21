import HomeView from "@/views/home/HomeView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexVio | Unified Commerce Platform",
  description:
    "Everything Your Business Needs. Connected. Smart POS and Business Solutions."
};

export default function Page() {
  return <HomeView />;
}
