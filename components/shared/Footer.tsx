import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY } from "@/lib/company";

const socialLinks = [
  { href: COMPANY.social.facebook, label: "Facebook", Icon: FaFacebookF },
  { href: COMPANY.social.instagram, label: "Instagram", Icon: FaInstagram },
  // { href: COMPANY.social.x, label: "X", Icon: FaXTwitter },
  { href: COMPANY.social.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
  // { href: COMPANY.social.youtube, label: "YouTube", Icon: FaYoutube },
  { href: COMPANY.social.whatsapp, label: "WhatsApp", Icon: RiWhatsappFill },
  { href: "https://www.goole.com", label: "Google", Icon: FaGoogle }
];

const footerColumns = [
  {
    title: "About",
    links: [
      { name: "About NexVio", href: "/about" },
      { name: "NexVio at a Glance", href: "/at-a-glance" },
      { name: "Why NexVio", href: "/why-nexvio" },
      { name: "Vision and Mission", href: "/vision-and-mission" },
      { name: "Partners in Success", href: "/home#partners" }
    ]
  },
  {
    title: "Solutions",
    links: [
      { name: "NexVio System", href: "/home" },
      { name: "NexVio Devices", href: "/home#devices" },
      { name: "Platform Capabilities", href: "/capabilities" },
      {
        name: "Business Intelligence",
        href: "/solutions/business-intelligence"
      },
      { name: "CRM", href: "/solutions/crm" },
      {
        name: "Security & Reliability",
        href: "/solutions/security-reliability"
      }
    ]
  },
  {
    title: "Help",
    links: [
      { name: "Support", href: "/faq" },
      { name: "Contact", href: "/contact" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-[#0f1c22] via-[#152830] via-45% to-[#1C3039] text-white/70">
      <div className="container mx-auto grid gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-8 lg:py-20">
        <div className="max-w-lg">
          <Link href="/" className="inline-flex items-center gap-2">
            <Image
              src="/logo-dark.svg"
              alt="NexVio Logo"
              width={131}
              height={28}
              style={{ width: "auto", height: "auto" }}
              className="h-8! w-auto"
              priority
            />
          </Link>
          <p className="mt-5 leading-relaxed text-white/50">
            Empowering businesses across the UAE with reliable POS systems,
            secure payment solutions, and cloud-based business management
            technology.
          </p>

          <ul className="mt-5 space-y-2.5 text-sm text-white/55">
            <li>
              <a
                href={`tel:${COMPANY.phoneTel}`}
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                <Phone className="text-brand-yellow size-3.5" />
                {COMPANY.phoneInternational}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${COMPANY.email}`}
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                <Mail className="text-brand-yellow size-3.5" />
                {COMPANY.email}
              </a>
            </li>
            <li>
              <a
                href={COMPANY.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 transition hover:text-white"
              >
                <MapPin className="text-brand-yellow mt-0.5 size-3.5 shrink-0" />
                <span>
                  {COMPANY.locationLabel}
                  <span className="mt-0.5 block text-xs text-white/40">
                    Dubai
                  </span>
                </span>
              </a>
            </li>
          </ul>

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
              {column.links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 transition hover:text-white"
                  >
                    {link.name}
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
