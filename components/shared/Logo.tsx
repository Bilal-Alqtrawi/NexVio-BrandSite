import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="NexVio Logo"
      width={131}
      height={28}
      style={{ width: "auto", height: "auto" }}
      className="transation h-8! w-auto! duration-300 hover:scale-105"
      priority
    />
  );
}
