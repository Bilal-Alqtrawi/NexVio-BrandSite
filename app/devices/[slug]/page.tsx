import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { devices, getDeviceBySlug } from "@/lib/devices";
import DeviceView from "@/views/devices/DeviceView";

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

  return <DeviceView device={device} />;
}
