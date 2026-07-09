import Image from "next/image";

const LogosImages: string[] = [
  "/logos/logo-1.png",
  "/logos/logo-2.png",
  "/logos/logo-3.png",
  "/logos/logo-4.png",
  "/logos/logo-5.png",
  "/logos/logo-6.png",
  "/logos/logo-7.png",
  "/logos/logo-8.png"
];

export default function LogoCloud() {
  return (
    <section className="relative container mx-auto w-full overflow-hidden px-4 pt-16 pb-24 sm:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {LogosImages.map((logo, idx) => (
          <div
            key={idx}
            className="group rounded-3xl border border-neutral-200/60 bg-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.05)] backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:border-neutral-300 hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]"
          >
            <Image
              src={logo}
              alt={logo.split("/")[2]}
              width={220}
              height={110}
              quality={100}
              className="h-auto w-full object-contain opacity-75 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
