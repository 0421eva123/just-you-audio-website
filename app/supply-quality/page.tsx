import type { Metadata } from "next";
import { contactInfo, getEmailLink, getWhatsAppLink } from "../../site-config";

const supplyQualityCards = [
  {
    title: "Product Matching",
    description:
      "Select amplifiers, speakers and accessories according to the application, zoning and installation requirements.",
  },
  {
    title: "OEM Support",
    description:
      "We support logo, packaging and selected product customization based on your requirements.",
  },
  {
    title: "Quality Coordination",
    description:
      "Confirm inspection requirements and available test documentation for the selected models and order.",
  },
  {
    title: "Order Follow-Up",
    description:
      "Coordinate specifications, production updates, packing requirements and shipment preparation.",
  },
];

export const metadata: Metadata = {
  title: "Supply & Quality",
  description:
    "Product selection, OEM support, quality coordination and order follow-up for JUST YOU AUDIO commercial PA projects.",
  alternates: {
    canonical: "/supply-quality",
  },
  openGraph: {
    title: "Supply & Quality | JUST YOU AUDIO",
    description:
      "Product and order support for commercial audio distributors, integrators and project contractors.",
    images: [
      {
        url: "/images/hero-pa-system.jpg",
        width: 1200,
        height: 630,
        alt: "JUST YOU AUDIO PA product range",
      },
    ],
    url: "/supply-quality",
  },
};

export default function SupplyQualityPage() {
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a className="brand" href="/">
            JUST YOU <span>AUDIO</span>
          </a>
          <div className="links">
            <a className="active" href="/supply-quality">
              Supply & Quality
            </a>
            <a href="/about">About Us</a>
            <a href="/knowledge">Knowledge</a>
            <a href="/catalog">Catalog</a>
          </div>
        </div>
      </nav>

      <main className="supply-page">
        <section className="supply-hero">
          <div className="label">Supply & Quality</div>
          <h1>Product & Order Support</h1>
          <p>
            From product selection to order preparation, we coordinate
            specifications, customization and quality requirements for your
            selected models.
          </p>
          <div className="cta">
            <a className="btn btn-primary" href="/catalog">
              Get Product Catalog
            </a>
            <a className="btn btn-gold" href={getWhatsAppLink()}>
              Discuss Your Project
            </a>
          </div>
        </section>

        <section className="supply-service-section">
          <div className="section-head">
            <div>
              <div className="label">Service Scope</div>
              <h2>Support from model selection to order preparation.</h2>
            </div>
            <p>
              Clear product and order coordination helps distributors,
              integrators and contractors move from inquiry to practical
              quotation with fewer gaps.
            </p>
          </div>
          <div className="supply-quality-grid">
            {supplyQualityCards.map((card, index) => (
              <article className="supply-quality-card" key={card.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="lead-section supply-lead">
          <div className="lead-box">
            <div>
              <h2>Get catalog support or discuss your project.</h2>
              <p>
                Share your product category, target market, quantity or project
                application. We will help prepare suitable model suggestions and
                next-step quotation support.
              </p>
            </div>
            <div className="lead-actions">
              <a className="gold-action" href={getWhatsAppLink()}>
                Contact on WhatsApp <span>→</span>
              </a>
              <a href="/catalog">
                Get Product Catalog <span>→</span>
              </a>
              <a href={getEmailLink(contactInfo.salesEmail, "Project Support Request")}>
                Ask for Project Support <span>→</span>
              </a>
            </div>
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
