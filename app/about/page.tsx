import type { Metadata } from "next";
import { contactInfo, getEmailLink, getWhatsAppLink } from "../../site-config";
import SolutionCaseSwitcher from "./SolutionCaseSwitcher";

const workItems = [
  [
    "Focused Product Portfolio",
    "Commercial speakers, PA amplifiers and complementary products for background music and public address installations.",
  ],
  [
    "Specialized Manufacturing Partners",
    "Coordinated supply and customization through manufacturing partners specializing in different audio product categories.",
  ],
  [
    "Project & Distributor Support",
    "Product selection and system configuration guidance for integrators, contractors and distribution partners.",
  ],
];

export const metadata: Metadata = {
  title: "About JUST YOU AUDIO | Commercial Audio & PA Supplier",
  description:
    "Learn about JUST YOU AUDIO, a China-based commercial audio and 70V/100V PA supplier supporting distributors, integrators and project contractors.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About JUST YOU AUDIO | Commercial Audio & PA Supplier",
    description:
      "China-based commercial audio and 70V/100V PA supplier supporting distributors, integrators and project contractors.",
    images: [
      {
        url: "/images/hero-pa-system.jpg",
        width: 1200,
        height: 630,
        alt: "JUST YOU AUDIO commercial audio and PA product range",
      },
    ],
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a className="brand" href="/">
            JUST YOU <span>AUDIO</span>
          </a>
          <div className="links">
            <a href="/#factory">Supply & Quality</a>
            <a href="/about">About Us</a>
            <a href="/knowledge">Knowledge</a>
            <a href="/catalog">Catalog</a>
          </div>
          <div className="nav-actions">
            <a className="nav-btn" href="/catalog">
              Request Catalog
            </a>
            <a className="nav-btn dark" href="/catalog">
              Ask Quotation
            </a>
          </div>
        </div>
      </nav>

      <main className="about-page about-simple">
        <section className="about-simple-hero">
          <div>
            <div className="label">About JUST YOU AUDIO</div>
            <h1>About JUST YOU AUDIO</h1>
            <p>
              Commercial Audio & 70V/100V PA System Supplier
            </p>
          </div>
          <div className="about-year-card">
            <span>Supplier Profile</span>
            <strong>PA Audio</strong>
            <p>Commercial audio sourcing, product matching and OEM support.</p>
          </div>
        </section>

        <section className="about-history-section">
          <div className="about-section-title">
            <div className="label">Company Profile</div>
            <h2>Commercial audio supply for distributors and project contractors.</h2>
          </div>
          <div className="about-history-layout">
            <div className="about-history-copy">
              <p>
                JUST YOU AUDIO is a China-based supplier of commercial audio
                and 70V/100V public address products for distributors, system
                integrators and project contractors.
              </p>
              <p>
                Our product portfolio includes PA amplifiers, ceiling and
                wall-mounted speakers, indoor and outdoor column speakers, horn
                speakers, landscape speakers and IP network audio products.
                Microphones, speaker cables and other accessories are available
                to help complete project requirements.
              </p>
              <p>
                We work with specialized manufacturing partners to coordinate
                product supply, customization and order requirements. This
                approach allows us to offer a broad range of audio products and
                flexible support for commercial background music and public
                address projects.
              </p>
            </div>
            <div className="about-history-list">
              {workItems.map(([title, text]) => (
                <article key={title}>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-history-section">
          <div className="about-section-title">
            <div className="label">How We Work</div>
            <h2>Clear sourcing support from product selection to order follow-up.</h2>
          </div>
          <div className="about-history-copy">
            <p>
              We help customers select suitable products based on application,
              installation environment, zoning requirements and estimated
              quantities. Our role is to coordinate product selection,
              manufacturing partners and order follow-up, giving customers a
              clear point of contact throughout the sourcing process.
            </p>
            <p>
              For OEM customers, we can discuss logo, packaging and selected
              product customization with the relevant manufacturing partner.
              Availability, minimum order quantities and lead times are
              confirmed for each model and order.
            </p>
          </div>
        </section>

        <section className="about-honor-section">
          <div className="about-section-title centered">
            <div className="label">Documentation</div>
            <h2>Certifications & Product Documentation</h2>
          </div>
          <div className="about-history-copy">
            <p>
              Applicable certificates, test reports and declarations can be
              requested for the selected product model. Document availability
              and coverage vary by model and manufacturing partner.
            </p>
            <p>
              Please share your target market and project requirements so we can
              check the available documentation for the products you are
              considering.
            </p>
          </div>
        </section>

        <section className="about-case-section" id="case-presentation">
          <div className="about-section-title centered">
            <div className="label">Typical Applications</div>
            <h2>Typical system configurations for commercial audio projects.</h2>
          </div>
          <SolutionCaseSwitcher />
        </section>

        <section className="about-simple-cta">
          <h2>Request company profile, catalog and distributor price.</h2>
          <div>
            <a className="btn btn-gold" href="/catalog">
              Get Catalog & Distributor Price
            </a>
            <a className="btn btn-secondary" href={getWhatsAppLink()}>
              Contact on WhatsApp
            </a>
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
