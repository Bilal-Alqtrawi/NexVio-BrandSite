import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-[#FFD700]">
      <div className="animate-pulse">
        <Image
          src="/logo.svg"
          alt="Nexvio Loading..."
          width={150}
          height={38}
          style={{ width: "auto", height: "auto" }}
          className="h-auto w-36! select-none"
          priority
        />
      </div>

      <div className="h-1 w-24 overflow-hidden rounded-full bg-black/10">
        <div className="h-full w-full origin-left animate-[loading_1.5s_infinite_ease-in-out] bg-neutral-900" />
      </div>
    </div>
  );
}
