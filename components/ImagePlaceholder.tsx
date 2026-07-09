import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ImagePlaceholder({
  label,
  className
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border-border/70 bg-muted/60 text-muted-foreground relative flex h-full w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-[inherit] border border-dashed p-4 text-center",
        className
      )}
      role="img"
      aria-label={label}
    >
      <ImageIcon className="size-6 shrink-0 opacity-60" aria-hidden />
      <span className="text-xs leading-snug font-medium tracking-wide opacity-70 select-none">
        {label}
      </span>
    </div>
  );
}
