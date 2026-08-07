import type { Metadata } from "next";
import { contactInfo, getEmailLink, getWhatsAppLink } from "../../site-config";

const catalogMessage =
  "Hello, I am interested in your PA audio products. Could you send me your full catalog, model list and distributor price?";

const reasons = [
  "Complete PA audio product range for distributors and project contractors",
  "PA amplifiers, ceiling speakers, wall speakers, column speakers, horn speakers and accessories",
  "OEM logo and packaging support for regional distributors",
  "Project matching support for hotels, restaurants, schools, villas and public areas",
];

export const metadata: Metadata = {
  title: "Get Product Catalog & Distributor Price",
  description:
    "Download a quick product overview or request the full JUST YOU AUDIO catalog, model list and distributor price.",
  alternates: {
    canonical: "/catalog",
  },
  openGraph: {
    title: "Get Product Catalog & Distributor Price | JUST YOU AUDIO",
    description:
      "Request the JUST YOU AUDIO catalog, model list and distributor price by WhatsApp or email.",
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
            <a href="/#featured">Hot Products</a>
            <a href="/#categories">Categories</a>
            <a href="/#solutions">Solutions</a>
            <a href="/#distributors">Distributor Support</a>
            <a href="/#factory">Factory Strength</a>
            <a href="/about">About Us</a>
            <a href="/knowledge">Knowledge</a>
            <a href="/catalog">Catalog</a>
          </div>
          <div className="nav-actions">
            <a className="nav-btn" href="/catalog">
              Request Catalog
            </a>
            <a className="nav-btn dark" href={getWhatsAppLink(catalogMessage)}>
              Ask Quotation
            </a>
          </div>
        </div>
      </nav>

      <main className="catalog-page">
        <section className="catalog-hero">
          <div className="label">Catalog Request</div>
          <h1>Get Product Catalog & Distributor Price</h1>
          <p>
            Download a quick product overview or contact us to receive the full
            model list, distributor price and project quotation.
          </p>
        </section>

        <section className="catalog-actions" aria-label="Catalog request options">
          <article className="catalog-card">
            <div>
              <span className="catalog-card-kicker">Product Overview</span>
              <h2>Download Product Overview</h2>
              <p>
                A quick overview of our PA amplifiers, ceiling speakers, wall
                speakers, outdoor column speakers, horn speakers and background
                music system solutions.
              </p>
              <small>
                This overview is a general product introduction and does not
                include detailed prices.
              </small>
            </div>
            <a className="btn btn-secondary catalog-button" href="/catalog/product-overview.pdf">
              Download Product Overview PDF
            </a>
          </article>

          <article className="catalog-card catalog-card-dark">
            <div>
              <span className="catalog-card-kicker">Full Distributor Support</span>
              <h2>Need Full Model List & Distributor Price?</h2>
              <p>
                Send us your market, product category and quantity. We will send
                the latest catalog, model list and distributor price by WhatsApp.
              </p>
            </div>
            <a
              className="btn btn-gold catalog-button"
              href={getWhatsAppLink(catalogMessage)}
              rel="noreferrer"
              target="_blank"
            >
              Contact on WhatsApp
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
            <p>Premium PA & Background Music Audio Solutions</p>
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
