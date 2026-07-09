import Link from "next/link";
import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  LinkedinIcon,
  YoutubeIcon,
  WhatsappIcon
} from "@/components/SocailIcons";

const socialLinks = [
  { href: "https://facebook.com", label: "Facebook", Icon: FacebookIcon },
  { href: "https://instagram.com", label: "Instagram", Icon: InstagramIcon },
  { href: "https://x.com", label: "X", Icon: XIcon },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: LinkedinIcon },
  { href: "https://youtube.com", label: "YouTube", Icon: YoutubeIcon },
  { href: "https://wa.me", label: "WhatsApp", Icon: WhatsappIcon }
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
    <footer className="bg-[#101a24] text-white/70">
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

      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/40 sm:flex-row sm:px-6">
          <p>&copy; {new Date().getFullYear()} NexVio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="." className="hover:text-white/70">
              Privacy Policy
            </Link>
            <Link href="." className="hover:text-white/70">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
