import type { Metadata } from "next";
import {
  brandTagline,
  brandName,
  contactInfo,
  getEmailLink,
  getWhatsAppLink,
  siteUrl,
  whatsappMessages,
} from "../site-config";

export const metadata: Metadata = {
  title: {
    absolute: `${brandTagline} | JUST YOU AUDIO`,
  },
  description:
    "Reliable commercial audio supply for distributors, OEM brands and system integrators, including 70V/100V PA products, OEM/ODM customization, quality assurance and engineering support.",
  alternates: {
    canonical: `${siteUrl}/`,
  },
  openGraph: {
    title: `${brandTagline} | JUST YOU AUDIO`,
    description:
      "70V/100V PA systems, flexible wholesale supply, OEM/ODM customization, quality assurance and engineering support.",
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
    title: `${brandTagline} | JUST YOU AUDIO`,
    description:
      "70V/100V PA systems, flexible wholesale supply, OEM/ODM customization, quality assurance and engineering support.",
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
    "Manufacturing-backed commercial audio supply for 70V/100V PA products, including OEM/ODM customization, quality assurance, flexible wholesale supply and engineering support.",
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
    title: "Wall-Mounted Speaker",
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
  ["Wall-Mounted Speakers", "Commercial wall speakers for indoor music and paging applications."],
  ["Outdoor Waterproof Sound Columns", "Indoor and outdoor sound columns for voice coverage and public areas."],
  ["Horn Speakers", "Long-distance voice broadcast for warehouses, schools and factories."],
  ["Lawn & Garden Speakers", "Outdoor decorative speakers for gardens, resorts and villa projects."],
  ["IP Audio Systems", "IP amplifiers, paging microphone and network broadcast devices."],
  ["Microphones, Cable & Accessories", "Supporting products for system matching, installation and wholesale project supply."],
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
  ["Wholesale & Project Supply", "Commercial PA product lines, selected stock support and repeat-order planning for distributors and projects."],
  ["OEM/ODM Solutions", "Private-label, packaging and selected product customization reviewed by model and order requirements."],
  ["International Sales & Supply", "International sales, quotation support and order follow-up for distributors and OEM brands."],
  ["Engineering Support", "Product matching, zoning guidance and technical documentation for commercial installations."],
];

const supplyQualityCards = [
  {
    title: "Manufacturing Support",
    description: "Production coordination and manufacturing capabilities",
    image: "/images/manufacturing-capabilities/01.jpg",
    imageAlt: "Manufacturing support for commercial speaker production",
  },
  {
    title: "OEM/ODM",
    description: "Private labeling, packaging and product customization",
    image: "/images/manufacturing-capabilities/02.jpg",
    imageAlt: "OEM and ODM support for commercial speaker production",
  },
  {
    title: "Quality Assurance",
    description: "Product inspection and testing support",
    image: "/images/manufacturing-capabilities/03.jpg",
    imageAlt: "Commercial audio quality assurance testing equipment",
  },
  {
    title: "Ready Stock & Replenishment",
    description: "Stock availability for selected models and flexible replenishment support.",
    image: "/images/manufacturing-capabilities/04.jpg",
    imageAlt: "Warehouse stock for commercial audio replenishment",
  },
  {
    title: "Engineering Support",
    description: "PA system matching, zoning and technical guidance",
    image: "/images/manufacturing-capabilities/05.jpg",
    imageAlt: "Commercial audio products supporting PA system engineering",
  },
  {
    title: "International Sales",
    description: "Dedicated overseas communication and order support",
    image: "/images/manufacturing-capabilities/06.jpg",
    imageAlt: "Commercial audio manufacturing and international sales support",
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
            <a href="#factory">Manufacturing Support</a>
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

      <main>
        <section className="hero">
          <div className="hero-inner hero-stacked">
            <div className="hero-copy">
              <div className="eyebrow">
                For Distributors, Integrators & Project Contractors
              </div>
              <h1>
                Commercial Audio & 70V/100V PA Systems
              </h1>
              <p>
                Reliable commercial audio supply for distributors, OEM brands and
                system integrators. We provide 70V/100V PA products, OEM/ODM
                customization, quality assurance, flexible wholesale supply and
                engineering support.
              </p>
              <div className="hero-support-line">
                Manufacturing · International Sales · OEM/ODM · Ready Stock · Flexible MOQ · Competitive Pricing · OEM &amp; Project Support
              </div>
              <div className="hero-feature-image">
                <img
                  alt="JUST YOU AUDIO manufacturing, product range and delivery capabilities"
                  height={400}
                  src="/images/home-hero-capabilities.jpg"
                  width={1000}
                />
              </div>
              <div className="buyer-bar">
                <div className="buyer-item">
                  <strong>Manufacturing Support</strong>
                  <span>Manufacturing support for selected commercial PA product lines.</span>
                </div>
                <div className="buyer-item">
                  <strong>OEM/ODM Solutions</strong>
                  <span>Logo, packaging and selected customization options subject to model and order requirements.</span>
                </div>
                <div className="buyer-item">
                  <strong>Engineering Support</strong>
                  <span>70V/100V product matching and documentation for commercial projects.</span>
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
                Wholesale product range, selected stock support, flexible
                replenishment and distributor pricing on request.
              </p>
            </div>
            <div className="proof">
              <strong>For System Integrators</strong>
              <p>
                70V/100V system matching, technical documentation and product
                coordination for installations, upgrades and replacements.
              </p>
            </div>
            <div className="proof">
              <strong>For OEM Brands</strong>
              <p>
                Private-label, logo, packaging and selected product customization
                subject to model and order requirements.
              </p>
            </div>
            <div className="proof">
              <strong>For Project Contractors</strong>
              <p>
                Complete PA product supply, system matching and engineering
                support for commercial installations.
              </p>
            </div>
          </div>
        </div>

        <section className="section" id="featured">
          <div className="cta featured-cta">
            <a className="btn btn-primary" href="/catalog">
              Request Distributor Pricing
            </a>
            <a className="btn btn-gold" href={getWhatsAppLink(whatsappMessages.projectConsultation)}>
              Submit Project Requirements
            </a>
          </div>
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

        <section className="section" id="factory">
          <div className="section-head">
            <div>
              <div className="label">Manufacturing & Supply</div>
              <h2>Manufacturing &amp; Supply Capabilities</h2>
            </div>
            <p>
              Manufacturing support, quality assurance, OEM/ODM options and
              delivery preparation for selected commercial audio models.
            </p>
          </div>
          <div className="supply-quality-grid">
            {supplyQualityCards.map((card, index) => (
              <article className="supply-quality-card" key={card.title}>
                <div className="supply-quality-heading">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{card.title}</h3>
                </div>
                <div className="supply-quality-image">
                  <img alt={card.imageAlt} loading="lazy" src={card.image} />
                </div>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section small-top" id="categories">
          <div className="section-head">
            <div>
              <div className="label">Wholesale Product Range</div>
              <h2>Commercial Audio Product Range for Wholesale & Projects</h2>
            </div>
            <p>
              Build a commercial PA range across amplifiers, speakers and
              accessories for repeat supply, OEM programs and project quotations.
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
                Flexible wholesale supply and practical support for long-term
                distribution and commercial project supply.
              </p>
              <div className="cta">
                <a className="btn btn-secondary" href="/catalog">
                  Request Distributor Pricing
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

        <section className="lead-section" id="contact">
          <div className="lead-box">
            <div>
              <h2>Request distributor pricing, OEM/ODM support or project matching.</h2>
              <p>
                Share your target market, product category, estimated quantity or
                project requirements. We will coordinate suitable commercial PA
                models and a quotation for your request.
              </p>
            </div>
            <div className="lead-actions">
              <a className="gold-action" href={getWhatsAppLink(whatsappMessages.projectConsultation)}>
                Submit Project Requirements <span>→</span>
              </a>
              <a href="/catalog">
                Request Distributor Pricing <span>→</span>
              </a>
              <a href={getWhatsAppLink(whatsappMessages.oemQuotation)}>
                Request OEM/ODM Quote <span>→</span>
              </a>
              <small>
                Share your target market, quantity and application. Pricing is
                provided by quotation only.
              </small>
            </div>
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
