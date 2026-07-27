import DeviceHero from "@/views/devices/DeviceHero";
import DeviceSpecs from "@/views/devices/DeviceSpecs";
import LogoCloud from "@/views/home/LogoCloud";
import DeviceSpecsSheet from "@/views/devices/DeviceSpecsSheet";
import DeviceHowHelp from "@/views/devices/DeviceHowHelp";
import DeviceHighlightsSlider from "@/views/devices/DeviceHighlightsSlider";
import DeviceOperatorVideo from "@/views/devices/DeviceOperatorVideo";
import DeviceStatsReveal from "@/views/devices/DeviceStatsReveal";
import InfinitePaymentsMarquee from "@/views/devices/InfinitePaymentsMarquee";
import DeviceFAQ from "@/views/devices/DeviceFAQ";
import DeviceContactForm from "@/views/devices/DeviceContactForm";
import type { Device } from "@/lib/devices";

export default function DeviceView({ device }: { device: Device }) {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <DeviceHero device={device} />
      <LogoCloud />
      <DeviceSpecs device={device} />
      {device.specSheet && (
        <DeviceSpecsSheet specSheet={device.specSheet} device={device} />
      )}
      <DeviceHowHelp device={device} />
      <DeviceHighlightsSlider device={device} />
      {/* <DeviceOperatorVideo device={device} /> */}

      <DeviceStatsReveal device={device} />
      {/* <InfinitePaymentsMarquee device={device} /> */}
      <DeviceContactForm device={device} />

      <DeviceFAQ device={device} />
    </main>
  );
}
