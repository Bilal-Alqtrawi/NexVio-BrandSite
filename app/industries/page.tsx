import { Metadata } from "next";
import IndustriesView from "@/views/industries/IndustriesView";

export const metadata: Metadata = {
  title: "Industries We Serve | NexVio",
  description:
    "One Platform. Multiple Industries. NexVio provides flexible solutions designed to support a wide range of industries while maintaining one connected platform."
};

export default function IndustriesPage() {
  return <IndustriesView />;
}
