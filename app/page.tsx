import type { Metadata } from "next";
import {
  brandName,
  contactInfo,
  getEmailLink,
  getWhatsAppLink,
  siteUrl,
  whatsappMessages,
} from "../site-config";

export const metadata: Metadata = {
  title: {
    absolute: "Commercial Audio & 70V/100V PA Supplier | JUST YOU AUDIO",
  },
  description:
    "JUST YOU AUDIO is a China-based commercial audio and 70V/100V PA supplier supporting distributors, system integrators and project contractors.",
  alternates: {
    canonical: `${siteUrl}/`,
  },
  openGraph: {
    title: "Commercial Audio & 70V/100V PA Supplier | JUST YOU AUDIO",
    description:
      "JUST YOU AUDIO is a China-based commercial audio and 70V/100V PA supplier supporting distributors, system integrators and project contractors.",
    images: [
      {
        url: "/images/hero-pa-system.jpg",
        width: 1200,
        height: 630,
        alt: "JUST YOU AUDIO PA system product display",
      },
    ],
    siteName: brandName,
    type: "website",
    url: `${siteUrl}/`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Audio & 70V/100V PA Supplier | JUST YOU AUDIO",
    description:
      "JUST YOU AUDIO is a China-based commercial audio and 70V/100V PA supplier supporting distributors, system integrators and project contractors.",
    images: ["/images/hero-pa-system.jpg"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: brandName,
  url: `${siteUrl}/`,
  logo: `${siteUrl}/icon.svg`,
  description:
    "China-based commercial audio and 70V/100V PA supplier supporting distributors, system integrators and project contractors.",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: brandName,
  url: `${siteUrl}/`,
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
};

const featuredProducts = [
  {
    title: "100V PA Mixer Amplifier",
    description:
      "For shops, restaurants, offices, schools and commercial paging systems.",
    specs: [
      "60W / 120W / 240W",
      "100V / 70V Output",
      "Bluetooth / USB / MIC",
      "OEM Available",
    ],
    model: "AMPLIFIER SERIES",
    deviceClass: "amp2",
    image: "/images/product-pa-amplifier.png",
    whatsappMessage:
      "Hi Eva, I am interested in your 70V/100V PA mixer amplifiers. Please send available models, specifications and a quotation. Quantity: __.",
  },
  {
    title: "Frameless Ceiling Speaker",
    description:
      "Clean white design for hotels, villas, restaurants and premium interiors.",
    specs: ["4'' / 5'' / 6''", "100V System", "White Minimalist Look", "Hi-Fi Options"],
    model: "CEILING SERIES",
    deviceClass: "round2",
    image: "/images/product-ceiling-speaker.png",
    whatsappMessage:
      "Hi Eva, I am interested in your frameless ceiling speakers for a commercial audio project. Please send specifications and a quotation. Quantity: __.",
  },
  {
    title: "Wall Mount Speaker",
    description:
      "Modern indoor background music speaker with clear voice and elegant appearance.",
    specs: ["Indoor Commercial Use", "Black / White", "Clear Voice", "100V Optional"],
    model: "WALL SERIES",
    deviceClass: "wall2",
    image: "/images/product-wall-speaker.png",
    whatsappMessage:
      "Hi Eva, I am interested in your wall-mounted speakers for background music and paging. Please send available models and a quotation. Quantity: __.",
  },
  {
    title: "Outdoor Waterproof Column",
    description:
      "For schools, roadsides, public areas, parks and outdoor voice broadcast.",
    specs: ["IP66 Waterproof", "60W / 120W", "Pole / Wall Mount", "Long Coverage"],
    model: "COLUMN SERIES",
    deviceClass: "column2",
    image: "/images/product-column-speaker.png",
    whatsappMessage:
      "Hi Eva, I am interested in your outdoor column speakers. Please send model specifications, weather-resistance information and a quotation. Quantity: __.",
  },
  {
    title: "Horn Speaker",
    description:
      "High-efficiency paging speaker for factories, schools, warehouses and outdoor areas.",
    specs: ["Outdoor Paging", "High SPL", "Weather Resistant", "Voice Broadcast"],
    model: "HORN SERIES",
    deviceClass: "horn2",
    image: "/images/product-horn-speaker.png",
    whatsappMessage:
      "Hi Eva, I am interested in your horn speakers for public address and voice announcements. Please send available models and a quotation. Quantity: __.",
  },
  {
    title: "Lawn & Garden Speaker",
    description:
      "Decorative landscape speaker for villas, resorts, gardens and parks.",
    specs: ["Waterproof Design", "Landscape Style", "Outdoor Music", "Villa / Resort"],
    model: "LANDSCAPE SERIES",
    deviceClass: "lawn2",
    image: "/images/product-lawn-speaker.png",
    whatsappMessage:
      "Hi Eva, I am interested in your lawn and garden speakers for outdoor background music. Please send available models and a quotation. Quantity: __.",
  },
];

const categories = [
  ["PA Amplifiers", "Mixer amplifier, power amplifier, zone amplifier and digital amplifier."],
  ["Ceiling Speakers", "Frameless, grille, high-power and premium background music models."],
  ["Wall Speakers", "Commercial wall speakers for indoor music and paging applications."],
  ["Column Speakers", "Indoor and outdoor column speakers for voice coverage and public areas."],
  ["Horn Speakers", "Long-distance voice broadcast for warehouses, schools and factories."],
  ["Lawn Speakers", "Outdoor decorative speakers for gardens, resorts and villa projects."],
  ["IP Audio Systems", "IP amplifiers, paging microphone and network broadcast devices."],
  ["Microphones & Cable", "Wireless microphones, paging microphones and speaker cable accessories."],
];

const solutions = [
  {
    title: "Hotel & Restaurant BGM",
    description: "Clean background music system for premium indoor environments.",
    items: [
      "100V PA mixer amplifier",
      "Frameless ceiling speakers",
      "Wall speakers for private rooms",
      "Speaker cable and installation accessories",
    ],
    ideal: "Ideal for: hotels, cafes, restaurants, lounges",
    image: "/images/scene-hotel-restaurant.jpg",
  },
  {
    title: "School & Public Paging",
    description: "Reliable voice broadcast and daily announcement system.",
    items: [
      "Zone amplifier or PA amplifier",
      "Outdoor column speakers",
      "Horn speakers for playgrounds",
      "Paging microphone support",
    ],
    ideal: "Ideal for: schools, campuses, public buildings",
    image: "/images/scene-school-public.jpg",
  },
  {
    title: "Villa & Commercial Music",
    description: "High-end music system for indoor and outdoor areas.",
    items: [
      "Hi-Fi ceiling speakers",
      "Lawn and garden speakers",
      "Multi-zone amplifier",
      "Bluetooth / USB / MIC options",
    ],
    ideal: "Ideal for: villas, resorts, clubs, commercial spaces",
    image: "/images/scene-villa-commercial.jpg",
  },
];

const supports = [
  ["Distributor Price", "Quantity-based quotation for dealers, wholesalers and project buyers."],
  ["OEM Logo Support", "Logo, packaging and regional brand cooperation for long-term partners."],
  ["Catalog & Model List", "Complete product catalog and recommended hot-selling models for market testing."],
  ["Project Matching", "Recommend amplifier power, speaker type and quantity based on the project."],
];

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

const guideLinks = [
  {
    title: "100V PA System Guide",
    href: "/knowledge/100v-pa-system-guide",
    description: "Understand amplifier matching, speaker taps, zones and quotation details.",
  },
  {
    title: "How to Choose a PA Amplifier",
    href: "/knowledge/how-to-choose-pa-amplifier",
    description: "Compare amplifier wattage, inputs and zone control for commercial projects.",
  },
  {
    title: "Hotel Background Music System",
    href: "/knowledge/hotel-background-music-system",
    description: "Plan ceiling speakers, wall speakers and zone amplifiers for hotel spaces.",
  },
  {
    title: "Outdoor Waterproof Speaker Guide",
    href: "/knowledge/outdoor-waterproof-speaker-guide",
    description: "Choose outdoor column, horn and garden speakers by coverage and exposure.",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <nav className="nav">
        <div className="nav-inner">
          <div className="brand">
            JUST YOU <span>AUDIO</span>
          </div>
          <div className="links">
            <a href="#factory">Supply & Quality</a>
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

      <main>
        <section className="hero">
          <div className="hero-inner">
            <div>
              <div className="eyebrow">
                For Distributors, Integrators & Project Contractors
              </div>
              <h1>
                Commercial Audio & 70V/100V PA Solutions
              </h1>
              <p>
                PA amplifiers, commercial speakers and accessories for
                background music and public address projects. We provide
                product selection, system matching and flexible OEM/ODM
                support.
              </p>
              <div className="cta">
                <a className="btn btn-primary" href="/catalog">
                  Get Product Catalog
                </a>
                <a className="btn btn-gold" href={getWhatsAppLink(whatsappMessages.projectConsultation)}>
                  Discuss Your Project
                </a>
              </div>
              <div className="buyer-bar">
                <div className="buyer-item">
                  <strong>System Supply</strong>
                  <span>Amplifiers, speakers and project accessories.</span>
                </div>
                <div className="buyer-item">
                  <strong>OEM Support</strong>
                  <span>Branding and packaging options for selected models.</span>
                </div>
                <div className="buyer-item">
                  <strong>Project Matching</strong>
                  <span>Product selection and configuration guidance.</span>
                </div>
              </div>
            </div>

            <div className="visual">
              <div className="product-stage">
                <img
                  className="hero-product-image"
                  src="/images/home-hero-pa-system.webp"
                  alt="JUST YOU AUDIO PA amplifier and speaker product range"
                />
                <div className="tag two">PA Product Range</div>
                <div className="tag three">
                  Consistent quality control and flexible OEM/ODM support.
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="proof-strip">
          <div className="proof-inner">
            <div className="proof">
              <strong>For Distributors</strong>
              <p>
                Stable category supply, flexible model selection and marketable
                product appearance.
              </p>
            </div>
            <div className="proof">
              <strong>For Contractors</strong>
              <p>
                Project matching support based on area, quantity, installation
                environment and application.
              </p>
            </div>
            <div className="proof">
              <strong>For OEM Brands</strong>
              <p>
                Support logo, packaging and regional product line development.
              </p>
            </div>
            <div className="proof">
              <strong>For Commercial Projects</strong>
              <p>
                Suitable for hotels, schools, restaurants, villas, malls and
                outdoor public areas.
              </p>
            </div>
          </div>
        </div>

        <section className="section" id="featured">
          <div className="section-head">
            <div>
              <div className="label">Featured Products</div>
              <h2>Hot-selling PA audio series</h2>
            </div>
            <p>
              Start with proven PA models that are easy to introduce to dealers,
              installers and project customers in your local market.
            </p>
          </div>
          <div className="featured-grid">
            {featuredProducts.map((product) => (
              <article className="featured-card" key={product.title}>
                <div className="photo">
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="product-info">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <div className="specs">
                    {product.specs.map((spec) => (
                      <span key={spec}>{spec}</span>
                    ))}
                  </div>
                  <div className="product-cta">
                    <span className="model">{product.model}</span>
                    <a className="ask" href={getWhatsAppLink(product.whatsappMessage)}>
                      Ask Price
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section small-top" id="categories">
          <div className="section-head">
            <div>
              <div className="label">Complete Category Supply</div>
              <h2>More product types for one-stop sourcing</h2>
            </div>
            <p>
              Build a complete local product lineup from one supplier, so you
              can quote more projects and expand beyond a single product order.
            </p>
          </div>
          <div className="category-grid">
            {categories.map(([title, description], index) => (
              <article className="cat" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section small-top" aria-label="PA guides and resources">
          <div className="section-head">
            <div>
              <div className="label">PA Guides & Resources</div>
              <h2>Selection guides for common PA projects</h2>
            </div>
            <p>
              Use these guides to prepare project details before requesting
              amplifier, speaker and system quotations.
            </p>
          </div>
          <div className="category-grid">
            {guideLinks.map((guide, index) => (
              <article className="cat" key={guide.href}>
                <h3>
                  <a href={guide.href}>{guide.title}</a>
                </h3>
                <p>{guide.description}</p>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="system" id="solutions">
          <div className="section">
            <div className="section-head">
              <div>
                <div className="label">Project Solutions</div>
                <h2>PA Solutions for Commercial Projects</h2>
              </div>
              <p>
                Explore typical amplifier and speaker combinations for hotels,
                restaurants, schools and other commercial spaces. Share your
                application, area and zoning requirements so we can recommend
                suitable products.
              </p>
            </div>
            <div className="combo-grid">
              {solutions.map((solution) => (
                <article className="combo" key={solution.title}>
                  <img
                    className="solution-image"
                    src={solution.image}
                    alt={solution.title}
                  />
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                  <ul>
                    {solution.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="ideal">{solution.ideal}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="distributors">
          <div className="support-grid">
            <div className="dark-panel">
              <div className="label">Distributor Cooperation</div>
              <h2>Support for Your Distribution Business</h2>
              <p>
                We support distributors with a broad PA product range, OEM
                options, quantity-based quotations and practical project
                matching.
              </p>
              <div className="cta">
                <a className="btn btn-secondary" href="/catalog">
                  Get Catalog & Distributor Price
                </a>
              </div>
            </div>
            <div className="support-list">
              {supports.map(([title, description], index) => (
                <article className="support" key={title}>
                  <b>{index + 1}</b>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="factory">
          <div className="section-head">
            <div>
              <div className="label">Supply & Quality</div>
              <h2>Product & Order Support</h2>
            </div>
            <p>
              From product selection to order preparation, we coordinate
              specifications, customization and quality requirements for your
              selected models.
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

        <section className="lead-section" id="contact">
          <div className="lead-box">
            <div>
              <h2>Get full catalog, model list and distributor price.</h2>
              <p>
                Send us your target market, product category or project details.
                We will recommend suitable PA amplifiers, speakers and
                accessories for your business or project quotation.
              </p>
            </div>
            <div className="lead-actions">
              <a className="gold-action" href={getWhatsAppLink(whatsappMessages.projectConsultation)}>
                Contact on WhatsApp <span>→</span>
              </a>
              <a href="/catalog">
                Get Catalog & Distributor Price <span>→</span>
              </a>
              <a href={getWhatsAppLink(whatsappMessages.projectConsultation)}>
                Ask for Project Quotation <span>→</span>
              </a>
              <small>
                Share your target market, quantity and application. We will
                reply with suitable models and distributor pricing.
              </small>
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
