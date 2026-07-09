import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";

const socialLinks = [
  { href: "https://facebook.com", label: "Facebook", Icon: FaFacebookF },
  { href: "https://instagram.com", label: "Instagram", Icon: FaInstagram },
  { href: "https://x.com", label: "X", Icon: FaXTwitter },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: FaLinkedinIn },
  { href: "https://youtube.com", label: "YouTube", Icon: FaYoutube },
  { href: "https://wa.me", label: "WhatsApp", Icon: RiWhatsappFill }
];

const footerColumns = [
  {
    title: "About",
    links: ["About Nayax", "Why Nayax", "Careers", "Affiliate Program"]
  },
  {
    title: "About",
    links: ["About Nayax", "Why Nayax", "Careers", "Affiliate Program"]
  },
  {
    title: "Help Center",
    links: ["POS Touch", "Nova Market", "Monyx Wallet", "Weezmo"]
  },
  {
    title: "About",
    links: ["About Nexvio", "Why Nexvio", "Careers", "Affiliate Program"]
  }
];

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-black via-[#0A1115] via-45% to-[#1C3039] text-white/70">
      <div className="container mx-auto grid gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_repeat(4,0.85fr)] lg:gap-8 lg:py-20">
        <div className="max-w-sm">
          <Link href="/" className="inline-flex items-center gap-2">
            <Image
              src="/logo-dark.svg"
              alt="NexVio Logo"
              width={131}
              height={28}
              className="h-8 w-auto"
              priority
            />
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-white/50">
            Modern businesses need more than just a Point of Sale system. They
            need a complete platform that connects every part of their business
            into one intelligent ecosystem.
          </p>
          <ul className="mt-6 flex list-none items-center gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <li key={label}>
                <Link
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-brand-yellow inline-flex size-9 items-center justify-center rounded-full bg-white/5 text-white/60 transition hover:text-black"
                >
                  <Icon className="size-4" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {footerColumns.map((column, i) => (
          <nav key={`${column.title}-${i}`} aria-label={column.title}>
            <h3 className="text-brand-yellow text-sm font-semibold">
              {column.title}
            </h3>
            <ul className="mt-5 flex list-none flex-col gap-3.5">
              {column.links.map((link) => (
                <li key={link}>
                  <Link
                    href="."
                    className="text-sm text-white/55 transition hover:text-white"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
    </footer>
  );
}
