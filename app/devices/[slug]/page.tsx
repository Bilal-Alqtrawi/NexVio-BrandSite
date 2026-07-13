import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { devices, getDeviceBySlug } from "@/lib/devices";
import DeviceHero from "@/views/devices/DeviceHero";
import DeviceSpecs from "@/views/devices/DeviceSpecs";
import DeviceCTA from "@/views/home/CTA";
import LogoCloud from "@/views/home/LogoCloud";
import DeviceSpecsSheet from "@/views/devices/DeviceSpecsSheet";
import DeviceHowHelp from "@/views/devices/DeviceHowHelp";
import DeviceHighlightsSlider from "@/views/devices/DeviceHighlightsSlider";
import DeviceOperatorVideo from "@/views/devices/DeviceOperatorVideo";
import DeviceStatsReveal from "@/views/devices/DeviceStatsReveal";
import InfinitePaymentsMarquee from "@/views/devices/InfinitePaymentsMarquee";
import DeviceFAQ from "@/views/devices/DeviceFAQ";
import DeviceContactForm from "@/views/devices/DeviceContactForm";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return devices.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const device = getDeviceBySlug(slug);
  if (!device) return {};

  return {
    title: `${device.name} — ${device.tagline} | NexVio`,
    description: device.description
  };
}

export default async function DevicePage({ params }: Props) {
  const { slug } = await params;
  const device = getDeviceBySlug(slug);

  if (!device) notFound();

  return (
    <main>
      <DeviceHero device={device} />
      <LogoCloud />
      <DeviceSpecs device={device} />
      <DeviceSpecsSheet device={device} />
      <DeviceHowHelp />
      <DeviceHighlightsSlider device={device} />
      <DeviceOperatorVideo />
      <DeviceStatsReveal />
      <InfinitePaymentsMarquee />
      <DeviceContactForm />
      <DeviceFAQ />
    </main>
  );
}
