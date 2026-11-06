import type { Metadata } from "next";
import { brandTagline, contactInfo, getEmailLink, getWhatsAppLink, whatsappMessages } from "../../site-config";

const catalogMessage =
  "Hello, I am interested in your commercial audio products. Could you send distributor pricing, available models and wholesale ordering information?";

const reasons = [
  "Commercial PA product range for distributors, OEM brands and project contractors",
  "PA amplifiers, ceiling speakers, wall-mounted speakers, sound columns, horn speakers and accessories",
  "OEM/ODM logo, packaging and selected product customization options",
  "Engineering support for hotels, restaurants, schools, villas and public areas",
];

export const metadata: Metadata = {
  title: "Get Product Catalog & Request Distributor Pricing",
  description:
    "Request the latest JUST YOU AUDIO product catalog, distributor pricing, OEM/ODM customization and support for commercial PA projects.",
  alternates: {
    canonical: "/catalog",
  },
  openGraph: {
    title: "Get Product Catalog & Request Distributor Pricing | JUST YOU AUDIO",
    description:
      "Request the latest JUST YOU AUDIO product catalog, wholesale pricing, OEM/ODM customization and commercial PA project support.",
    images: [
      {
        url: "/images/hero-pa-system.jpg",
        width: 1200,
        height: 630,
        alt: "JUST YOU AUDIO product catalog request",
      },
    ],
    url: "/catalog",
  },
};

export default function CatalogPage() {
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a className="brand" href="/">
            JUST YOU <span>AUDIO</span>
          </a>
          <div className="links">
            <a href="/#factory">Manufacturing Support</a>
            <a href="/about">About Us</a>
            <a href="/knowledge">Knowledge</a>
            <a href="/catalog">Catalog</a>
          </div>
          <div className="nav-actions">
            <a className="nav-btn" href="/catalog">
              Request Distributor Pricing
            </a>
            <a className="nav-btn dark" href={getWhatsAppLink(whatsappMessages.projectConsultation)}>
              Submit Project Requirements
            </a>
          </div>
        </div>
      </nav>

      <main className="catalog-page">
        <section className="catalog-hero">
          <div className="label">Catalog Request</div>
          <h1>Get Product Catalog &amp; Request Distributor Pricing</h1>
          <p>
            Request the latest 15-page product catalog, or submit a B2B inquiry
            for distributor pricing, OEM/ODM customization and project support.
          </p>
        </section>

        <section className="catalog-actions" aria-label="Catalog request options">
          <article className="catalog-card">
            <div>
              <span className="catalog-card-kicker">Product Catalog</span>
              <h2>Get the Latest Product Catalog</h2>
              <p>
                A 15-page overview of PA amplifiers, ceiling speakers, wall
                speakers, outdoor column speakers, horn speakers and background
                music system solutions.
              </p>
              <small>
                Distributor pricing is provided separately by quotation.
              </small>
            </div>
            <a className="btn btn-secondary catalog-button" href="/download-catalog">
              Get Product Catalog
            </a>
          </article>

          <article className="catalog-card catalog-card-dark">
            <div>
              <span className="catalog-card-kicker">Wholesale & OEM/ODM</span>
              <h2>Request Distributor Pricing & OEM/ODM Quote</h2>
              <p>
                Share your target market, product category, estimated quantity
                and branding requirements. We will confirm available models,
                customization options and a quotation by WhatsApp.
              </p>
            </div>
            <a
              className="btn btn-gold catalog-button"
              href={getWhatsAppLink(catalogMessage)}
              rel="noreferrer"
              target="_blank"
            >
              Request Distributor Pricing
            </a>
            <a
              className="catalog-text-link"
              href={getWhatsAppLink(whatsappMessages.oemQuotation)}
              rel="noreferrer"
              target="_blank"
            >
              Request OEM/ODM Quote
            </a>
          </article>
        </section>

        <section className="catalog-proof">
          <div>
            <div className="label">Why Request From Us?</div>
            <h2>Why request the full catalog from us?</h2>
          </div>
          <div className="catalog-proof-list">
            {reasons.map((reason) => (
              <div className="catalog-proof-item" key={reason}>
                {reason}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <strong>JUST YOU AUDIO</strong>
            <p>{brandTagline}</p>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <a href={getEmailLink(contactInfo.salesEmail)}>sales@justyouaudio.com</a>
            <a href={getWhatsAppLink()}>WhatsApp: {contactInfo.whatsappDisplay}</a>
          </div>
        </div>
      </footer>

      <a className="whatsapp" href={getWhatsAppLink()}>
        WA
      </a>
    </>
  );
}
