import type { Metadata } from "next";
import { contactInfo, getEmailLink, getWhatsAppLink } from "../site-config";

export const metadata: Metadata = {
  title: "Professional PA Audio Manufacturer",
  description:
    "JUST YOU AUDIO supplies PA amplifiers, ceiling speakers, wall speakers, outdoor column speakers, horn speakers and complete PA system solutions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "JUST YOU AUDIO | Professional PA Audio Manufacturer",
    description:
      "PA audio products, OEM support and project matching for distributors and contractors.",
    images: [
      {
        url: "/images/hero-pa-system.jpg",
        width: 1200,
        height: 630,
        alt: "JUST YOU AUDIO PA system product display",
      },
    ],
    url: "/",
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
  },
  {
    title: "Frameless Ceiling Speaker",
    description:
      "Clean white design for hotels, villas, restaurants and premium interiors.",
    specs: ["4'' / 5'' / 6''", "100V System", "White Minimalist Look", "Hi-Fi Options"],
    model: "CEILING SERIES",
    deviceClass: "round2",
    image: "/images/product-ceiling-speaker.png",
  },
  {
    title: "Wall Mount Speaker",
    description:
      "Modern indoor background music speaker with clear voice and elegant appearance.",
    specs: ["Indoor Commercial Use", "Black / White", "Clear Voice", "100V Optional"],
    model: "WALL SERIES",
    deviceClass: "wall2",
    image: "/images/product-wall-speaker.png",
  },
  {
    title: "Outdoor Waterproof Column",
    description:
      "For schools, roadsides, public areas, parks and outdoor voice broadcast.",
    specs: ["IP66 Waterproof", "60W / 120W", "Pole / Wall Mount", "Long Coverage"],
    model: "COLUMN SERIES",
    deviceClass: "column2",
    image: "/images/product-column-speaker.png",
  },
  {
    title: "Horn Speaker",
    description:
      "High-efficiency paging speaker for factories, schools, warehouses and outdoor areas.",
    specs: ["Outdoor Paging", "High SPL", "Weather Resistant", "Voice Broadcast"],
    model: "HORN SERIES",
    deviceClass: "horn2",
    image: "/images/product-horn-speaker.png",
  },
  {
    title: "Lawn & Garden Speaker",
    description:
      "Decorative landscape speaker for villas, resorts, gardens and parks.",
    specs: ["Waterproof Design", "Landscape Style", "Outdoor Music", "Villa / Resort"],
    model: "LANDSCAPE SERIES",
    deviceClass: "lawn2",
    image: "/images/product-lawn-speaker.png",
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

const factoryItems = [
  [
    "Product Display",
    "Clear product presentation for online stores, catalogs and local showrooms.",
    "/images/factory-product-display.jpg",
  ],
  [
    "Quality Check",
    "Products are checked before packing to support stable project delivery.",
    "/images/factory-quality-check.jpg",
  ],
  [
    "Export Packing",
    "Carton, foam protection, label and shipment preparation.",
    "/images/factory-export-packing.jpg",
  ],
  [
    "Warehouse Supply",
    "Inventory, model variety and batch order preparation.",
    "/images/factory-warehouse.jpg",
  ],
];

const manufacturingCapability = [
  "SMT electronic assembly",
  "Amplifier aging test",
  "Audio performance testing",
  "Waterproof IP testing",
  "Mass assembly & packaging",
];

const qualityControl = [
  "100% factory testing",
  "Aging test before shipment",
  "Power & distortion testing",
];

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <div className="brand">
            JUST YOU <span>AUDIO</span>
          </div>
          <div className="links">
            <a href="#featured">Hot Products</a>
            <a href="#categories">Categories</a>
            <a href="#solutions">Solutions</a>
            <a href="#distributors">Distributor Support</a>
            <a href="#factory">Factory Strength</a>
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

      <main>
        <section className="hero">
          <div className="hero-inner">
            <div>
              <div className="eyebrow">
                Factory Supply · OEM Support · Complete PA System
              </div>
              <h1>
                Premium PA audio products for <em>distributors</em> and project
                contractors.
              </h1>
              <p>
                We supply 100V PA amplifiers, ceiling speakers, wall speakers,
                outdoor column speakers, horn speakers, IP audio systems and
                accessories for commercial background music and public address
                projects.
              </p>
              <div className="cta">
                <a className="btn btn-primary" href="#featured">
                  View Hot-Selling Series
                </a>
                <a className="btn btn-secondary" href="/catalog">
                  Get Catalog & Distributor Price
                </a>
                <a className="btn btn-gold" href="#contact">
                  Ask for Distributor Price
                </a>
              </div>
              <div className="buyer-bar">
                <div className="buyer-item">
                  <strong>One-Stop</strong>
                  <span>Amplifiers, speakers, microphones and accessories</span>
                </div>
                <div className="buyer-item">
                  <strong>OEM</strong>
                  <span>Logo, packaging and model customization support</span>
                </div>
                <div className="buyer-item">
                  <strong>Project</strong>
                  <span>System matching support for contractors</span>
                </div>
              </div>
            </div>

            <div className="visual">
              <div className="product-stage">
                <img
                  className="hero-product-image"
                  src="/images/hero-pa-system.jpg"
                  alt="JUST YOU AUDIO PA amplifier and speaker product range"
                />
                <div className="tag one">Retail-ready appearance</div>
                <div className="tag two">Complete PA product line</div>
                <div className="tag three">Factory direct supply</div>
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
                    <a className="ask" href="#contact">
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

        <section className="system" id="solutions">
          <div className="section">
            <div className="section-head">
              <div>
                <div className="label">Project Solutions</div>
                <h2>System combinations that trigger inquiries</h2>
              </div>
              <p>
                Choose products by application and send us the project details.
                We can recommend a practical system list for fast quotation.
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
              <h2>Built to help local dealers sell easier.</h2>
              <p>
                For distributors, the website should clearly show business
                value: stable product line, OEM support, project pricing,
                marketable design and fast quotation communication.
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
              <div className="label">Factory Strength</div>
              <h2>Reliable supply behind every order</h2>
            </div>
            <p>
              See how products are displayed, checked, packed and prepared for
              shipment, giving distributors more confidence before placing an
              order.
            </p>
          </div>
          <div className="factory-evidence">
            {factoryItems.map(([title, description, image]) => (
              <article className="evidence" key={title}>
                <img className="evidence-photo" src={image} alt={title} />
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="factory-detail-panel">
            <div className="factory-detail-summary">
              <div className="label">Factory Process</div>
              <h3>Manufacturing capability & quality control</h3>
              <p>
                From electronic assembly to aging test, audio performance check
                and export packing, each order is prepared for stable project
                delivery.
              </p>
            </div>
            <div className="factory-detail-lists">
              <div className="factory-detail-group">
                <h4>Manufacturing Capability</h4>
                <ul>
                  {manufacturingCapability.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="factory-detail-group">
                <h4>Quality Control</h4>
                <ul>
                  {qualityControl.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
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
              <a className="gold-action" href={getWhatsAppLink()}>
                Contact on WhatsApp <span>→</span>
              </a>
              <a href="/catalog">
                Get Catalog & Distributor Price <span>→</span>
              </a>
              <a href={getEmailLink(contactInfo.salesEmail, "Project Quotation Request")}>
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
