"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function LoadingScreen() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [shouldRender, setShouldRender] = useState(true);

  useLayoutEffect(() => {
    setTimeout(() => {
      setProgress(0);
      setShouldRender(true);
    }, 0);
    document.body.style.overflow = "hidden";

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            setShouldRender(false);
            document.body.style.overflow = "unset";
          }, 250);

          return 100;
        }

        const remaining = 100 - oldProgress;
        const increment = Math.max(
          1,
          Math.min(remaining * 0.2, Math.random() * 15)
        );
        return oldProgress + increment;
      });
    }, 60);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "unset";
    };
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {shouldRender && (
        <motion.div
          key={pathname}
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center gap-6 bg-[#FFD700]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          >
            <Image
              src="/logo.svg"
              alt="Nexvio"
              width={160}
              height={40}
              className="h-auto w-40 select-none"
              priority
            />
          </motion.div>

          <div className="flex flex-col items-center gap-2">
            <div className="relative h-1.5 w-36 overflow-hidden rounded-full bg-black/10">
              <div
                className="h-full rounded-full bg-neutral-900 transition-all duration-700 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <span className="font-mono text-xs font-bold tracking-wider text-neutral-800">
              {Math.round(progress)}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
