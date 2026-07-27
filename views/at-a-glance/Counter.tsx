"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export function Counter({ value, suffix = "", duration = 1.5 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  // 1. تقليل الـ margin أو إزالته لضمان التقاط الـ span فور دخوله الشاشة
  const isInView = useInView(ref, { once: true, margin: "0px 0px -20px 0px" });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      const easeOutProgress = progress * (2 - progress);
      setCount(Math.floor(value * easeOutProgress));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="inline-block tabular-nums">
      {count.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
