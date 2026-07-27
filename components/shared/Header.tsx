"use client";

import Link from "next/link";
import Logo from "./Logo";
import MobileNav from "../MobileNav";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks1 = [
  { href: "/industries", name: "Business Types" },
  { href: "/home#devices", name: "Smart Devices" }
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
      className={`sticky top-0 right-0 left-0 z-40 w-full py-4 backdrop-blur-md transition-all duration-300 ${
        isScrolled
          ? "bg-brand-teal/90 border-teal-light/10 border-b shadow-md"
          : "bg-brand-teal/70"
      } lg:py-5`}
    >
      <div className="container mx-auto flex items-center px-4 sm:px-6">
        <nav
          aria-label="Primary"
          className="hidden flex-1 list-none items-center gap-6 text-sm font-medium lg:flex"
        >
          {navLinks1.map((link) => (
            <li className="group relative" key={link.name}>
              <Link
                href={link.href}
                className="text-brand-cream/90 hover:text-brand-yellow transition duration-200"
              >
                {link.name}
              </Link>
              <span className="bg-brand-yellow absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </nav>

        <div className="shrink-0 grow lg:grow-0">
          <Link
            className="mx-auto inline-flex items-center"
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
          className="hidden flex-1 list-none items-center justify-end gap-6 text-sm font-medium lg:flex"
        >
          {navLinks2.map((link) => (
            <li className="group relative" key={link.name}>
              <Link
                href={link.href}
                className="text-brand-cream/90 hover:text-brand-yellow transition duration-200"
              >
                {link.name}
              </Link>
              <span className="bg-brand-yellow absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
            </li>
          ))}

          <Button
            nativeButton={false}
            render={<Link href="/get-started" />}
            className="group hover:bg-brand-yellow hover:text-brand-teal text-brand-cream border-teal-light/20 space-x-3 rounded-full border bg-[#112025] px-5 py-6 text-xs font-bold tracking-wider shadow-md transition-all duration-300"
          >
            <span>Get Started</span>
            <span className="bg-teal-light text-brand-cream group-hover:bg-brand-teal group-hover:text-brand-yellow inline-flex size-8 items-center justify-center rounded-full transition-colors duration-300">
              <ArrowRight size={14} />
            </span>
          </Button>
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2 lg:hidden">
          <Button
            nativeButton={false}
            render={<Link href="/contact" />}
            size="sm"
            className="xs:inline-flex bg-brand-yellow text-brand-teal hover:bg-brand-cream hidden gap-2 rounded-full px-4 py-5 text-xs font-bold transition-all"
          >
            <span>Contact us</span>
            <ArrowRight size={14} />
          </Button>
          <MobileNav links={allLinks} />
        </div>
      </div>
    </header>
  );
}
