"use client";

import { FormEvent, useState } from "react";

const pdfUrl = "https://www.justyouaudio.com/catalog/product-overview.pdf";

const businessTypes = [
  "Distributor",
  "Wholesaler",
  "AV Installer",
  "System Integrator",
  "Project Contractor",
  "Other",
];

const productInterests = [
  "PA Amplifier",
  "Ceiling Speaker",
  "Wall Speaker",
  "Outdoor Speaker",
  "Complete PA System",
  "OEM/ODM",
];

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function DownloadCatalogForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/catalog-lead", {
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Lead submission failed");
      }

      let redirected = false;
      const redirectToPdf = () => {
        if (redirected) return;
        redirected = true;
        window.location.href = pdfUrl;
      };

      if (typeof window.gtag === "function") {
        window.gtag("event", "catalog_download_completed", {
          event_callback: redirectToPdf,
          event_timeout: 1000,
        });
        window.setTimeout(redirectToPdf, 1200);
      } else {
        redirectToPdf();
      }
    } catch {
      setStatus("error");
      setError("Please check your information and submit again.");
    }
  }

  return (
    <form className="download-form" onSubmit={handleSubmit}>
      <div className="download-form-head">
        <span>Lead Capture</span>
        <h2>Receive the product overview</h2>
      </div>

      <div className="download-form-grid">
        <label>
          Name *
          <input autoComplete="name" name="name" required type="text" />
        </label>
        <label>
          Company Name *
          <input autoComplete="organization" name="companyName" required type="text" />
        </label>
        <label>
          Country *
          <input autoComplete="country-name" name="country" required type="text" />
        </label>
        <label>
          Email *
          <input autoComplete="email" name="email" required type="email" />
        </label>
        <label>
          WhatsApp
          <input autoComplete="tel" name="whatsapp" type="text" />
        </label>
        <label>
          Business Type
          <select name="businessType">
            <option value="">Select business type</option>
            {businessTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="download-field-wide">
          Product Interest
          <select name="productInterest">
            <option value="">Select product interest</option>
            {productInterests.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      {error ? <p className="download-form-error">{error}</p> : null}

      <button className="btn btn-gold download-submit" disabled={status === "submitting"} type="submit">
        {status === "submitting" ? "Submitting..." : "Submit & Download Catalog"}
      </button>

      <small>
        Your information is used only for catalog follow-up and distributor
        support.
      </small>
    </form>
  );
}
