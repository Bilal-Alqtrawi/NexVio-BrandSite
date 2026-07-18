import RestaurantSolutionView from "@/views/solutions/RestaurantSolutionView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurant POS & Management Solutions | NexVio",
  description:
    "Discover NexVio's connected restaurant solution. Streamline tableside ordering, integrate kitchen display systems (KDS), accelerate payments, and sync inventory in real time.",
  openGraph: {
    title: "NexVio Connected Restaurant Solutions",
    description:
      "Everything your restaurant needs to manage orders, payments, and kitchen workflows smoothly.",
    type: "website"
  }
};
export default function Page() {
  return <RestaurantSolutionView />;
}
