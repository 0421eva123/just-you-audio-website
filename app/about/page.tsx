import type { Metadata } from "next";
import { contactInfo, getEmailLink, getWhatsAppLink } from "../../site-config";
import SolutionCaseSwitcher from "./SolutionCaseSwitcher";

const establishedYear = "2003";

const historyItems = [
  ["2003", "JUST YOU AUDIO was established as an audio equipment company integrating development, research, manufacturing and sales."],
  ["Sub-Brands", "The company operates multiple sub-brands to serve different professional audio application markets."],
  ["Integrated Service", "We provide system design, project implementation, technical training and maintenance support for audio and video system projects."],
];

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about JUST YOU AUDIO, its company history, certificates, solution cases and professional PA audio manufacturing capabilities.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About JUST YOU AUDIO",
    description:
      "Company profile, certificates, solutions and project case display for JUST YOU AUDIO.",
    images: [
      {
        url: "/images/factory-product-display.jpg",
        width: 1200,
        height: 630,
        alt: "JUST YOU AUDIO factory and product display",
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
            <h1>Company Profile</h1>
            <p>
              Founded in 2003, JUST YOU AUDIO is a national high-tech
              enterprise integrating the development, research, manufacturing
              and sales of professional audio equipment.
            </p>
          </div>
          <div className="about-year-card">
            <span>Founded</span>
            <strong>{establishedYear}</strong>
            <p>Development, manufacturing and sales of audio equipment.</p>
          </div>
        </section>

        <section className="about-history-section">
          <div className="about-section-title">
            <div className="label">Company History</div>
            <h2>Professional audio manufacturing and system service experience.</h2>
          </div>
          <div className="about-history-layout">
            <div className="about-history-copy">
              <p>
                JUST YOU AUDIO was founded in 2003. It is a national high-tech
                enterprise integrating the development, research, manufacturing
                and sales of audio equipment. The company owns multiple
                sub-brands.
              </p>
              <p>
                Our main product categories include campus IP digital network
                broadcasting, multifunctional lecture hall systems, stadium
                sound reinforcement equipment, professional conference room
                audio equipment, multimedia classroom sound reinforcement,
                analog broadcasting equipment, stage lighting systems, home
                karaoke and cinema systems, entertainment venues and music
                restaurants.
              </p>
              <p>
                Our products have passed testing and obtained CCC certification,
                ISO9001 management system certification, EU CE and ROHS
                certification. The company also holds more than ten patents and
                software copyright certificates.
              </p>
              <p>
                With 13 years of experience in research and development,
                production and sales, we have been committed to the global audio
                market for more than a decade, providing high-quality products
                for enterprises, public institutions, education projects and
                stage entertainment markets.
              </p>
              <p>
                We maintain close cooperation with well-known domestic and
                international audio and video manufacturers, enabling us to
                provide integrated services including multimedia audio-video
                system engineering design, project implementation, technical
                training and maintenance.
              </p>
              <p>
                Guided by the corporate philosophy of integrity, humility,
                service and professionalism, we bring together experienced
                technical and sales specialists with strong industry knowledge.
                By deeply understanding market applications, we provide timely
                system solutions to solve customers' real needs. We are
                committed to offering comprehensive service and working closely
                with customers for mutual development and long-term success.
              </p>
            </div>
            <div className="about-history-list">
              {historyItems.map(([title, text]) => (
                <article key={title}>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-honor-section">
          <div className="about-section-title centered">
            <div className="label">Honor</div>
            <h2>企业资质</h2>
          </div>
          <div className="enterprise-qualification">
            <img
              src="/images/enterprise-qualification.png"
              alt="JUST YOU AUDIO enterprise qualification certificates"
            />
          </div>
        </section>

        <section className="about-case-section" id="case-presentation">
          <div className="about-section-title centered">
            <div className="label">Solution & Cases</div>
            <h2>Application solutions and project case display.</h2>
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
