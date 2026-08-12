import type { Metadata } from "next";
import { contactInfo, getEmailLink, getWhatsAppLink } from "../../site-config";
import DownloadCatalogForm from "./DownloadCatalogForm";

export const metadata: Metadata = {
  title: "Get JUST YOU AUDIO Product Catalog",
  description:
    "Leave your information to receive the latest JUST YOU AUDIO PA system product overview and distributor support.",
  alternates: {
    canonical: "/download-catalog",
  },
  openGraph: {
    title: "Get JUST YOU AUDIO Product Catalog",
    description:
      "Request the JUST YOU AUDIO PA system product overview and distributor support.",
    images: [
      {
        url: "/images/hero-pa-system.jpg",
        width: 1200,
        height: 630,
        alt: "JUST YOU AUDIO PA system product catalog",
      },
    ],
    url: "/download-catalog",
  },
};

export default function DownloadCatalogPage() {
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
            <a className="nav-btn dark" href={getWhatsAppLink()}>
              Ask Quotation
            </a>
          </div>
        </div>
      </nav>

      <main className="download-page">
        <section className="download-layout">
          <div className="download-copy">
            <div className="label">Catalog Download</div>
            <h1>Get JUST YOU AUDIO Product Catalog</h1>
            <p>
              Leave your information to receive our latest PA system product
              overview and distributor support.
            </p>
            <div className="download-trust">
              <span>PA amplifiers</span>
              <span>Ceiling speakers</span>
              <span>Outdoor speakers</span>
              <span>OEM / ODM support</span>
            </div>
          </div>
          <DownloadCatalogForm />
        </section>
      </main>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .download-page {
              position: relative;
              overflow: hidden;
              padding: 126px 28px 76px;
            }

            .download-page::before {
              position: absolute;
              top: 82px;
              right: -170px;
              width: 560px;
              height: 560px;
              background: radial-gradient(circle, rgba(216, 191, 130, 0.34), rgba(216, 191, 130, 0) 66%);
              content: "";
            }

            .download-layout {
              position: relative;
              display: grid;
              max-width: 1180px;
              align-items: start;
              gap: 34px;
              grid-template-columns: 0.85fr 1.15fr;
              margin: 0 auto;
            }

            .download-copy {
              position: sticky;
              top: 112px;
              padding: 38px;
              border: 1px solid var(--line);
              border-radius: 34px;
              background: linear-gradient(135deg, #242424, #111);
              box-shadow: var(--shadow);
              color: #fff;
            }

            .download-copy .label {
              color: var(--gold2);
            }

            .download-copy h1 {
              font-size: 48px;
              letter-spacing: 0;
              line-height: 1.04;
            }

            .download-copy p {
              margin-top: 20px;
              color: #d4d4d4;
              font-size: 17px;
            }

            .download-trust {
              display: flex;
              flex-wrap: wrap;
              gap: 10px;
              margin-top: 28px;
            }

            .download-trust span {
              border: 1px solid rgba(255, 255, 255, 0.14);
              border-radius: 999px;
              background: rgba(255, 255, 255, 0.06);
              color: #f1e6cf;
              font-size: 12.5px;
              font-weight: 800;
              padding: 9px 12px;
            }

            .download-form {
              padding: 34px;
              border: 1px solid var(--line);
              border-radius: 34px;
              background: #fff;
              box-shadow: 0 18px 55px rgba(91, 69, 31, 0.055);
            }

            .download-form-head span {
              display: inline-flex;
              margin-bottom: 14px;
              padding: 8px 12px;
              border: 1px solid var(--line);
              border-radius: 999px;
              background: var(--softgold);
              color: var(--gold);
              font-size: 12px;
              font-weight: 850;
            }

            .download-form-head h2 {
              margin-bottom: 24px;
              font-size: 31px;
              letter-spacing: 0;
              line-height: 1.12;
            }

            .download-form-grid {
              display: grid;
              gap: 16px;
              grid-template-columns: 1fr 1fr;
            }

            .download-form label {
              display: grid;
              gap: 8px;
              color: #3f4147;
              font-size: 13px;
              font-weight: 850;
            }

            .download-form input,
            .download-form select {
              width: 100%;
              min-height: 48px;
              padding: 0 14px;
              border: 1px solid var(--line);
              border-radius: 14px;
              background: #fbfaf6;
              color: var(--text);
              font: inherit;
            }

            .download-form input:focus,
            .download-form select:focus {
              border-color: var(--gold);
              box-shadow: 0 0 0 3px rgba(185, 147, 83, 0.14);
              outline: none;
            }

            .download-field-wide {
              grid-column: 1 / -1;
            }

            .download-submit {
              width: 100%;
              margin-top: 24px;
              border: 0;
              cursor: pointer;
            }

            .download-submit:disabled {
              cursor: wait;
              opacity: 0.72;
            }

            .download-form-error {
              margin-top: 16px;
              color: #b42318;
              font-size: 13px;
              font-weight: 800;
            }

            .download-form small {
              display: block;
              margin-top: 16px;
              color: var(--muted);
              font-size: 12.5px;
              text-align: center;
            }

            @media (max-width: 1080px) {
              .download-layout {
                grid-template-columns: 1fr;
              }

              .download-copy {
                position: static;
              }
            }

            @media (max-width: 680px) {
              .download-page {
                padding: 108px 18px 58px;
              }

              .download-copy,
              .download-form {
                padding: 26px;
                border-radius: 26px;
              }

              .download-copy h1 {
                font-size: 38px;
              }

              .download-copy p {
                font-size: 16px;
              }

              .download-form-grid {
                grid-template-columns: 1fr;
              }

              .download-form-head h2 {
                font-size: 27px;
              }
            }
          `,
        }}
      />

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
