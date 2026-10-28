import type { Metadata } from "next";
import {
  brandTagline,
  contactInfo,
  getEmailLink,
  getWhatsAppLink,
  whatsappMessages,
} from "../../site-config";
import SolutionCaseSwitcher from "./SolutionCaseSwitcher";

const supportTags = ["OEM / ODM", "QUALITY CONTROL", "PROJECT SUPPORT"];

const distributorSupportItems = [
  {
    title: "OEM & Private Label",
    text: "Logo, packaging and selected product customization based on requirements.",
  },
  {
    title: "Ready Stock & Replenishment",
    text: "Selected popular models and flexible repeat-order support for local markets.",
  },
  {
    title: "Quality Coordination",
    text: "Inspection requirements and available documentation for selected models.",
  },
  {
    title: "Technical & Project Support",
    text: "Product selection, zoning and system configuration guidance.",
  },
];

const certificationItems = [
  {
    title: "RoHS Compliance – Speaker",
    note: "Issued by POCE",
    image: "/images/about/rohs-speaker.webp",
    imageAlt: "RoHS Compliance certificate for speaker",
    imageHeight: 1333,
    imageWidth: 1000,
  },
  {
    title: "RoHS Compliance – Amplifier",
    note: "Issued by POCE",
    image: "/images/about/rohs-amplifier.webp",
    imageAlt: "RoHS Compliance certificate for amplifier",
    imageHeight: 1333,
    imageWidth: 1000,
  },
  {
    title: "ISO 9001 Quality Management System",
    note: "Manufacturing Partner",
    image: "/images/about/iso9001.webp",
    imageAlt: "ISO 9001 Quality Management System certificate",
    imageHeight: 1454,
    imageWidth: 1000,
  },
  {
    title: "EMC Compliance – Speaker",
    note: "CE / EMC Directive 2014/30/EU",
    image: "/images/about/emc-speaker.webp",
    imageAlt: "EMC Compliance certificate for speaker",
    imageHeight: 1359,
    imageWidth: 1000,
  },
];

export const metadata: Metadata = {
  title: "About JUST YOU AUDIO | Commercial Audio & PA Supply Partner",
  description:
    "Learn about JUST YOU AUDIO, a commercial audio and 70V/100V PA supply partner supporting distributors, integrators, project contractors and private-label brands.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About JUST YOU AUDIO | Commercial Audio & PA Supply Partner",
    description:
      "Commercial audio supply, OEM support and project matching for distributors, integrators and contractors.",
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
            <a className="nav-btn dark" href={getWhatsAppLink(whatsappMessages.englishQuotation)}>
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
              <h1>Commercial Audio & 70V/100V PA Supply Partner</h1>
              <h2>Supply Support for Commercial & Public Address Projects</h2>
              <p>
                70V/100V amplifiers, commercial speakers and complete audio
                solutions for distributors, system integrators and project contractors.
              </p>
              <div className="about-support-tags" aria-label="JUST YOU AUDIO support">
                {supportTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <p className="about-profile-note">
                We coordinate reliable supply through a network of specialized
                manufacturing partners, with quality coordination, flexible
                OEM/ODM options and practical project support. Our team and
                manufacturing partners bring industry experience dating back to 2000.
              </p>
            </div>
            <div className="about-profile-image-placeholder" aria-label="Company and product image placeholder">
              <img
                alt="JUST YOU AUDIO company and commercial audio product overview"
                height={800}
                src="/images/about/company-overview.webp"
                width={800}
              />
            </div>
          </div>
        </section>

        <section className="about-distributor-section">
          <div className="about-section-title centered">
            <div className="label">Distributor Support</div>
            <h2>Support for Distributors, Integrators & Installers</h2>
          </div>
          <div className="about-distributor-layout">
            <div className="about-distributor-image-placeholder" aria-label="Distributor support image placeholder">
              <img
                alt="Distributor support for JUST YOU AUDIO commercial audio products"
                height={750}
                src="/images/about/distributor-support.webp"
                width={1500}
              />
            </div>
            <div className="about-distributor-cards">
              {distributorSupportItems.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="about-distributor-closing">
            <strong>
              WE SUPPORT.
              <br />
              YOU GROW.
            </strong>
            <p>Reliable supply and flexible support for long-term market growth.</p>
          </div>
        </section>

        <section className="about-honor-section">
          <div className="about-section-title centered">
            <div className="label">Certifications & Compliance</div>
            <h2>Selected Certifications & Compliance Documents</h2>
            <p>
              We provide applicable certificates, test reports and compliance
              documents according to product and project requirements.
            </p>
          </div>
          <div className="about-certification-grid">
            {certificationItems.map((item) => (
              <article key={item.title}>
                <div className="about-certificate-placeholder">
                  <img
                    alt={item.imageAlt}
                    height={item.imageHeight}
                    src={item.image}
                    width={item.imageWidth}
                  />
                </div>
                <h3>{item.title}</h3>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
          <div className="about-certification-notes">
            <p>
              Applicable certificates, test reports and declarations are
              available upon request. Coverage varies by product model.
            </p>
            <small>Specific manufacturing partner details are withheld for commercial confidentiality.</small>
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
