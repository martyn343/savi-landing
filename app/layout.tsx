import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://savi-landing-xi.vercel.app"),
  title: "SAVI — Quietly impossible to ignore.",
  description:
    "A handcrafted cowhide wallet with a naturally unique pattern, slim profile and quiet visual presence. Request access to the SAVI First Edition.",
  openGraph: {
    title: "SAVI — Quietly impossible to ignore.",
    description:
      "A handcrafted cowhide wallet with a naturally unique pattern, slim profile and quiet visual presence.",
    url: "https://savi-landing-xi.vercel.app",
    siteName: "SAVI",
    images: [
      {
        url: "/images/hero-campaign.png",
        width: 1200,
        height: 630,
        alt: "SAVI First Edition cowhide wallet",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAVI — Quietly impossible to ignore.",
    description:
      "A handcrafted cowhide wallet with a naturally unique pattern, slim profile and quiet visual presence.",
    images: ["/images/hero-campaign.png"],
  },
    icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
