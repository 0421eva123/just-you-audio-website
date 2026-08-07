import { contactInfo, getEmailLink, getWhatsAppLink } from "../site-config";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <section>
        <div className="label">404</div>
        <h1>Page not found</h1>
        <p>
          The page you are looking for may have moved. You can return to the
          homepage, request the product catalog, or contact Eva Chan for support.
        </p>
        <div className="cta">
          <a className="btn btn-primary" href="/">
            Back to Homepage
          </a>
          <a className="btn btn-secondary" href="/catalog">
            Request Distributor Catalog
          </a>
          <a className="btn btn-gold" href={getWhatsAppLink()}>
            Contact on WhatsApp
          </a>
        </div>
        <small>
          Email: <a href={getEmailLink(contactInfo.salesEmail)}>sales@justyouaudio.com</a>
        </small>
      </section>
    </main>
  );
}
