import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import { AnalyticsEvents } from "./AnalyticsEvents";
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
      <head>
        <script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M9H8M459');
            `,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M9H8M459"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <AnalyticsEvents />
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-8TNM54RXVY"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8TNM54RXVY');
        `}
      </Script>
    </html>
  );
}
