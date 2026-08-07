import type { Metadata } from "next";
import type { ReactNode } from "react";
import { contactInfo, siteUrl } from "../site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "JUST YOU AUDIO | Professional PA Audio Manufacturer",
    template: "%s | JUST YOU AUDIO",
  },
  description:
    "JUST YOU AUDIO supplies PA systems, amplifiers, ceiling speakers, wall speakers, column speakers, horn speakers and audio solutions for distributors and project contractors.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "JUST YOU AUDIO | Professional PA Audio Manufacturer",
    description:
      "Professional PA audio products and public address system solutions for distributors and project contractors.",
    emails: [contactInfo.salesEmail, contactInfo.infoEmail],
    images: [
      {
        url: "/images/hero-pa-system.jpg",
        width: 1200,
        height: 630,
        alt: "JUST YOU AUDIO PA audio product range",
      },
    ],
    locale: "en_US",
    siteName: "JUST YOU AUDIO",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "JUST YOU AUDIO | Professional PA Audio Manufacturer",
    description:
      "PA systems, amplifiers, speakers and public address solutions for distributors and project contractors.",
    images: ["/images/hero-pa-system.jpg"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
