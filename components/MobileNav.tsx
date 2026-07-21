"use client";

import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Logo from "@/components/shared/Logo";
import { useState } from "react";

type NavLink = { href: string; name: string };

// Animation
const listVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.08
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 16 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
  }
};

const copyRightContent = `&copy; ${new Date().getFullYear()} NexVio. All rights reserved.`;

export default function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className="hover:bg-muted inline-flex size-10 items-center justify-center rounded-full transition lg:hidden"
      >
        <Menu className="size-5" aria-hidden />
      </SheetTrigger>

      <SheetContent
        side="right"
        showCloseButton={false}
        className="bg-background flex flex-col"
      >
        <div className="flex items-center justify-between px-6 pt-6">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            aria-label="NexVio home"
          >
            <Logo />
          </Link>
          <SheetClose
            aria-label="Close menu"
            className="hover:bg-muted inline-flex size-9 items-center justify-center rounded-full transition"
          >
            <X className="size-5" aria-hidden />
          </SheetClose>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              variants={listVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mt-4 flex flex-1 flex-col gap-1 px-4"
            >
              {links.map((link) => (
                <motion.div key={link.name} variants={itemVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="hover:bg-muted flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium transition"
                  >
                    {link.name}
                    <ArrowRight
                      className="text-muted-foreground size-4"
                      aria-hidden
                    />
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={itemVariants} className="mt-4 px-2">
                <Button
                  nativeButton={false}
                  render={<Link href="/contact" />}
                  className="w-full space-x-3 rounded-full py-6"
                  onClick={() => setOpen(false)}
                >
                  <span>Contact us</span>
                  <span className="bg-muted-foreground/80 inline-flex size-8 items-center justify-center rounded-full">
                    <ArrowRight size={14} />
                  </span>
                </Button>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>

        <p className="text-muted-foreground px-6 pb-6 text-xs">
          {copyRightContent}
        </p>
      </SheetContent>
    </Sheet>
  );
}
