import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export function SectionCard({
  title,
  description,
  icon,
  className
}: SectionCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm",
        className
      )}
    >
      {icon && <div className="mb-4 text-neutral-900">{icon}</div>}
      <h3 className="text-lg font-bold text-neutral-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600">
        {description}
      </p>
    </div>
  );
}
