import type { Metadata } from "next";
import { contactInfo, getEmailLink, getWhatsAppLink } from "../../site-config";
import SolutionCaseSwitcher from "./SolutionCaseSwitcher";

const supportTags = ["OEM / ODM", "QUALITY CONTROL", "PROJECT SUPPORT"];

const certificationItems = [
  {
    title: "RoHS Compliance – Speaker",
    note: "Issued by POCE",
  },
  {
    title: "RoHS Compliance – Amplifier",
    note: "Issued by POCE",
  },
  {
    title: "ISO 9001 Quality Management System",
    note: "Manufacturing Partner",
  },
  {
    title: "EMC Compliance – Speaker",
    note: "CE / EMC Directive 2014/30/EU",
  },
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
        <section className="about-profile-section">
          <div className="about-profile-layout">
            <div className="about-profile-copy">
              <div className="label">JUST YOU AUDIO</div>
              <h1>Commercial Audio & 70V/100V PA Systems</h1>
              <h2>Professional Solutions for Commercial & Public Address Projects</h2>
              <p>
                70V/100V amplifiers, commercial speakers and complete PA
                solutions for indoor and outdoor projects.
              </p>
              <div className="about-support-tags" aria-label="JUST YOU AUDIO support">
                {supportTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <p className="about-profile-note">
                Built on specialized manufacturing partnerships, consistent
                quality control and flexible OEM/ODM support.
              </p>
            </div>
            <div className="about-profile-image-placeholder" aria-label="Company and product image placeholder">
              <span>Image Placeholder</span>
            </div>
          </div>
        </section>

        <section className="about-honor-section">
          <div className="about-section-title centered">
            <div className="label">Certifications & Compliance</div>
            <h2>Selected Certifications & Compliance Documents</h2>
            <p>
              Compliance documentation from our specialized manufacturing
              partners is available according to product and project
              requirements.
            </p>
          </div>
          <div className="about-certification-grid">
            {certificationItems.map((item) => (
              <article key={item.title}>
                <div className="about-certificate-placeholder">
                  <span>Certificate Image</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
          <div className="about-certification-notes">
            <p>
              Applicable certificates, test reports and declarations are
              available upon request. Coverage varies by product model and
              manufacturing partner.
            </p>
            <small>Manufacturer details are withheld for commercial confidentiality.</small>
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
