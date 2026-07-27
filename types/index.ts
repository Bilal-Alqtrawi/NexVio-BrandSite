import type { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export interface CarouselItem {
  id: number | string;
  imageSrc: string;
  title: string;
  description: string;
}

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface MetricCardProps {
  icon: LucideIcon;
  value?: ReactNode;
  title: string;
  subtitle: string;
  isHighlight?: boolean;
}

export interface SectionHeaderProps {
  badgeText: string;
  title: string;
  showDivider?: boolean;
  align?: "center" | "left";
}

export interface ContactButtonProps {
  padding?: string;
  text?: string;
}

export interface BadgeProps {
  children: ReactNode;
  icon?: LucideIcon;
}

export interface CoreValue {
  icon: LucideIcon;
  title: string;
  description: string;
  number: string;
}

export interface ReasonItem {
  icon: LucideIcon;
  title: string;
  description: string;
  number: string;
}
