import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true
});

export const metadata: Metadata = {
  title: "NexVio | Unified Commerce Platform",
  description:
    "Everything Your Business Needs. Connected. Smart POS and Business Solutions."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", inter.variable)}
    >
      <body className="bg-brand-cream flex min-h-full flex-col">
        {/* <LoadingScreen /> */}

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
