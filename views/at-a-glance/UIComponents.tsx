import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BadgeProps, SectionHeaderProps, ContactButtonProps } from "@/types";

export function Badge({ children, icon: Icon }: BadgeProps) {
  return (
    <div className="text-brand-yellow inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold tracking-widest uppercase backdrop-blur-md">
      {Icon && (
        <Icon className="fill-brand-yellow text-brand-yellow size-3.5" />
      )}
      {children}
    </div>
  );
}

export function SectionHeader({
  badgeText,
  title,
  showDivider = true,
  align = "center"
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const dividerClass = align === "center" ? "mx-auto" : "";

  return (
    <div className={`mb-12 ${alignClass} md:mb-16`}>
      <span className="border-brand-yellow/20 bg-brand-yellow/10 text-brand-yellow inline-flex rounded-full border px-3.5 py-1 text-xs font-black tracking-widest uppercase">
        {badgeText}
      </span>
      <h2 className="text-brand-cream mt-4 text-3xl font-black tracking-tight uppercase sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {showDivider && (
        <div
          className={`bg-brand-yellow mt-4 h-1 w-12 rounded-full ${dividerClass}`}
        />
      )}
    </div>
  );
}

export function ContactButton({
  padding = "px-7 py-4",
  text = "Contact us"
}: ContactButtonProps) {
  return (
    <Link
      href="/contact"
      className={`group bg-brand-yellow text-brand-teal hover:bg-brand-yellow-light inline-flex items-center gap-2 rounded-xl ${padding} text-sm font-black tracking-wider uppercase shadow-lg transition-all duration-300 hover:-translate-y-0.5`}
    >
      {text}
      <ArrowUpRight className="size-4 stroke-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
