import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ContactUsVariant = "yellow" | "teal" | "outline" | "dark" | "link";

interface ContactUsButtonProps {
  variant?: ContactUsVariant;
  className?: string;
  href?: string;
}

const variantClasses: Record<ContactUsVariant, string> = {
  yellow:
    "bg-brand-yellow h-12 rounded-full border-none px-8 text-sm font-bold tracking-wide text-neutral-950 hover:bg-[#D4A313]",
  teal: "bg-brand-teal hover:bg-brand-teal/90 space-x-3 rounded-full px-6 py-7 text-white",
  outline:
    "h-12 rounded-full border-white/30 bg-transparent px-8 text-sm font-bold tracking-wide text-white hover:bg-white/10",
  dark: "group inline-flex items-center gap-3 rounded-full bg-neutral-950 px-8 py-4.5 text-xs font-bold tracking-widest text-white uppercase transition-all duration-300 hover:scale-105 hover:bg-[#F5C41B] hover:text-black",
  link: "inline-block cursor-pointer text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-700"
};

export default function ContactUsButton({
  variant = "yellow",
  className,
  href = "/contact"
}: ContactUsButtonProps) {
  if (variant === "link") {
    return (
      <Link href={href} className={cn(variantClasses.link, className)}>
        Contact us
      </Link>
    );
  }

  if (variant === "dark") {
    return (
      <Link href={href} className={cn(variantClasses.dark, className)}>
        Contact us
        <ArrowRight className="size-4 stroke-[2.5]" />
      </Link>
    );
  }

  if (variant === "teal") {
    return (
      <Button
        nativeButton={false}
        render={<Link href={href} />}
        className={cn(variantClasses.teal, className)}
      >
        <span>Contact us</span>
        <span className="bg-teal-light inline-flex size-10.25 items-center justify-center rounded-full">
          <ArrowRight size={16} />
        </span>
      </Button>
    );
  }

  return (
    <Button
      nativeButton={false}
      render={<Link href={href} />}
      variant={variant === "outline" ? "outline" : "default"}
      className={cn(variantClasses[variant], className)}
    >
      <span>Contact us</span>
    </Button>
  );
}
