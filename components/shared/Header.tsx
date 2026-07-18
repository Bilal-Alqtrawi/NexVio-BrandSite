"use client";

import Link from "next/link";
import Logo from "./Logo";
import MobileNav from "../MobileNav";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks1 = [
  { href: "/industries", name: "Business Types" },
  { href: "/home#devices", name: "smart devices" }
];

const navLinks2 = [
  { href: "/about", name: "About" },
  { href: "/help", name: "Help" }
];

const allLinks = [...navLinks1, ...navLinks2];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-background/70 sticky top-0 right-0 left-0 z-40 w-full py-4 backdrop-blur-md ${isScrolled ? "shadow-sm" : ""} lg:py-6`}
    >
      <div className="container mx-auto flex items-center px-4 sm:px-6">
        <nav
          aria-label="Primary"
          className="hidden flex-1 list-none items-center gap-6 font-medium lg:flex"
        >
          {navLinks1.map((link) => (
            <li className="group relative" key={link.name}>
              <Link
                href={link.href}
                className="hover:text-brand-yellow transition duration-200"
              >
                {link.name}
              </Link>
              <span className="bg-secondary-foreground absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </nav>

        <div className="shrink-0 grow lg:grow-0">
          <Link
            className="mx-auto inline-flex"
            href="/home"
            aria-label="NexVio home"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <Logo />
          </Link>
        </div>

        <nav
          aria-label="Secondary"
          className="hidden flex-1 list-none items-center justify-end gap-6 lg:flex"
        >
          {navLinks2.map((link) => (
            <li className="group relative" key={link.name}>
              <Link
                href={link.href}
                className="hover:text-brand-yellow transition duration-200"
              >
                {link.name}
              </Link>
              <span className="bg-secondary-foreground absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
            </li>
          ))}

          <Button
            nativeButton={false}
            render={<Link href="/get-started" />}
            className="space-x-3 rounded-full px-6 py-8"
          >
            <span>Get Started</span>
            <span className="bg-muted-foreground/80 inline-flex size-10.25 items-center justify-center rounded-full">
              <ArrowRight size={16} />
            </span>
          </Button>
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2 lg:hidden">
          <Button
            nativeButton={false}
            render={<Link href="." />}
            size="sm"
            className="xs:inline-flex hidden gap-2 rounded-full px-4 py-5"
          >
            <span>Get Started</span>
            <ArrowRight size={14} />
          </Button>
          <MobileNav links={allLinks} />
        </div>
      </div>
    </header>
  );
}
