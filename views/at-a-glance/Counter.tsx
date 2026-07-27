"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
}

export function Counter({ value, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isInView || !mounted) return;

    const duration = 1.2;
    const totalFrames = 60 * duration;
    let frame = 0;

    const counterInterval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(value * (progress * (2 - progress)));

      if (frame >= totalFrames) {
        setCount(value);
        clearInterval(counterInterval);
      } else {
        setCount(currentCount);
      }
    }, 1000 / 60);

    return () => clearInterval(counterInterval);
  }, [isInView, value, mounted]);

  if (!mounted) {
    return <span className="tabular-nums">0{suffix}</span>;
  }

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
