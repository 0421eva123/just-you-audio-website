import type { Metadata } from "next";
import {
  brandTagline,
  contactInfo,
  getEmailLink,
  getWhatsAppLink,
  whatsappMessages,
} from "../../site-config";
import SolutionCaseSwitcher from "./SolutionCaseSwitcher";

const supportTags = ["MANUFACTURING SUPPORT", "WHOLESALE SUPPLY", "OEM / ODM"];

const distributorSupportItems = [
  {
    title: "Manufacturing Support",
    text: "Commercial PA production, product assembly and selected model support.",
  },
  {
    title: "Wholesale & Project Supply",
    text: "Flexible wholesale supply and delivery support for distributors and commercial projects.",
  },
  {
    title: "Engineering Support",
    text: "70V/100V product selection, system matching and documentation for project requirements.",
  },
];

const certificationItems = [
  {
    title: "RoHS Compliance – Speaker",
    note: "Issuer: Shenzhen POCE Technology Co., Ltd. · Certificate holder: redacted on the displayed document.",
    scope: "Applicable product: Speaker, model CLS-615 (including listed annex models).",
    image: "/images/about/rohs-speaker.webp",
    imageAlt: "RoHS Compliance certificate for speaker",
    imageHeight: 1333,
    imageWidth: 1000,
  },
  {
    title: "RoHS Compliance – Amplifier",
    note: "Issuer: Shenzhen POCE Technology Co., Ltd. · Certificate holder: redacted on the displayed document.",
    scope: "Applicable product: Amplifier, model F-6250 (including listed annex models).",
    image: "/images/about/rohs-amplifier.webp",
    imageAlt: "RoHS Compliance certificate for amplifier",
    imageHeight: 1333,
    imageWidth: 1000,
  },
  {
    title: "ISO 9001 Quality Management System",
    note: "Certificate holder: redacted on the displayed document. Issuer: Shandong Saige Certification Technology Co., Ltd.",
    scope: "Applicable scope: Production and sales of audio power amplifier.",
    image: "/images/about/iso9001.webp",
    imageAlt: "ISO 9001 Quality Management System certificate",
    imageHeight: 1454,
    imageWidth: 1000,
  },
  {
    title: "EMC Compliance – Speaker",
    note: "Certificate holder: redacted on the displayed document. Issuer: Guangdong Zhonghan Testing Technology Co., Ltd.",
    scope: "Applicable product: Speaker, listed models including MD-65S23-04.",
    image: "/images/about/emc-speaker.webp",
    imageAlt: "EMC Compliance certificate for speaker",
    imageHeight: 1359,
    imageWidth: 1000,
  },
];

export const metadata: Metadata = {
  title: "About JUST YOU AUDIO | Manufacturing-Backed Commercial Audio Supplier",
  description:
    "Learn how JUST YOU AUDIO supports commercial audio distributors, OEM brands and system integrators with 70V/100V PA products, OEM/ODM customization and engineering support.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About JUST YOU AUDIO | Manufacturing-Backed Commercial Audio Supplier",
    description:
      "Commercial audio supply, OEM/ODM customization, quality assurance and engineering support for 70V/100V PA projects.",
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

      <main className="about-page about-simple">
        <section className="about-profile-section">
          <div className="about-profile-layout">
            <div className="about-profile-copy">
              <div className="label">JUST YOU AUDIO</div>
              <h1>Manufacturing-Backed Commercial Audio Supplier</h1>
              <h2>70V/100V PA Systems · OEM/ODM · Wholesale & Project Supply</h2>
              <p>
                JUST YOU AUDIO specializes in commercial audio and 70V/100V public
                address systems, offering PA amplifiers, commercial speakers,
                OEM/ODM solutions, wholesale supply and project support.
              </p>
              <div className="about-support-tags" aria-label="JUST YOU AUDIO support">
                {supportTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <p className="about-profile-note">
                With extensive industry experience and reliable manufacturing
                resources, we focus on product quality, flexible supply, selected
                ready-stock models and practical support for distributors and
                system integrators worldwide.
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
            <div className="label">Core Capabilities</div>
            <h2>Manufacturing, Quality & Supply Support</h2>
          </div>
          <div className="about-distributor-feature-image">
            <img
              alt="Commercial audio manufacturing and supply support"
              height={750}
              src="/images/about/distributor-support.webp"
              width={1500}
            />
          </div>
          <div className="about-distributor-layout">
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
              The displayed records are issued to the certificate holders shown
              on each document and apply only to the listed product or management
              system scope. They are not certifications issued to JUST YOU AUDIO
              unless expressly shown.
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
                <small>{item.scope}</small>
              </article>
            ))}
          </div>
          <div className="about-certification-notes">
            <p>
              Applicable certificates, test reports and declarations are
              available upon request. Coverage varies by product model.
            </p>
            <small>
              The displayed document copies redact some holder information for
              commercial confidentiality. Certificate availability, holder and
              coverage must be confirmed for the selected product model.
            </small>
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
          <h2>Request distributor pricing, OEM/ODM support or project matching.</h2>
          <div>
            <a className="btn btn-gold" href="/catalog">
              Request Distributor Pricing
            </a>
            <a className="btn btn-secondary" href={getWhatsAppLink(whatsappMessages.oemQuotation)}>
              Request OEM/ODM Quote
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
