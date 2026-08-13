import type { Metadata } from "next";
import { englishKnowledgePages, spanishLandingPages } from "../seo-pages";
import { contactInfo, getEmailLink, getWhatsAppLink } from "../../site-config";

const boardPosts = [
  {
    type: "Public Address News",
    title: "Why more local dealers are adding 100V PA audio systems",
    excerpt:
      "Commercial buildings, schools, hotels and public spaces continue to need reliable paging and background music systems. A complete PA product line gives distributors more project quotation opportunities.",
    meta: "Market trend · Distributor view",
  },
  {
    type: "Solution Guide",
    title: "How to match PA amplifiers and speakers for a restaurant project",
    excerpt:
      "Start with the area size, room zones, ceiling height and music volume target. For most restaurant background music projects, ceiling speakers plus a 100V mixer amplifier are a practical first option.",
    meta: "Hotels · Restaurants · BGM",
  },
  {
    type: "Product Knowledge",
    title: "Ceiling speaker, wall speaker or column speaker: which one fits?",
    excerpt:
      "Ceiling speakers suit clean indoor interiors, wall speakers suit flexible installation, and outdoor column speakers provide stronger voice coverage for public areas and campuses.",
    meta: "Speaker selection · Project matching",
  },
  {
    type: "Installation Note",
    title: "What buyers should confirm before asking for a PA quotation",
    excerpt:
      "Project type, installation area, number of rooms or zones, indoor/outdoor conditions and target quantity help us recommend amplifier power, speaker type and accessory list faster.",
    meta: "Quotation checklist · Contractor support",
  },
];

const qas = [
  {
    question: "Can one supplier provide amplifiers, speakers and accessories together?",
    answer:
      "Yes. JUST YOU AUDIO supports one-stop PA audio supply, including mixer amplifiers, ceiling speakers, wall speakers, column speakers, horn speakers, microphones and speaker cable accessories.",
  },
  {
    question: "Do you support OEM branding for regional distributors?",
    answer:
      "Yes. We support logo, packaging and model line cooperation for distributors who want to develop a stable local PA audio product range.",
  },
  {
    question: "Can you help match products for hotels, schools and public areas?",
    answer:
      "Yes. Send the project type, area, installation environment and quantity. We can recommend a practical product combination for quotation and project discussion.",
  },
  {
    question: "Is the product line suitable for both background music and paging?",
    answer:
      "Yes. Our range covers background music systems, commercial paging, school broadcast, outdoor voice coverage and network/IP audio applications.",
  },
];

const solutionTopics = [
  "Hotel and restaurant background music systems",
  "School paging and campus broadcast projects",
  "Villa, garden and resort music systems",
  "Public areas, warehouses and outdoor voice coverage",
  "Retail shops, offices and commercial buildings",
  "Distributor starter product packages",
];

const productLines = [
  "100V / 70V PA mixer amplifiers and power amplifiers",
  "Frameless and grille-style ceiling speakers",
  "Indoor wall mount background music speakers",
  "Outdoor waterproof column speakers",
  "Horn speakers for long-distance paging",
  "Lawn and garden landscape speakers",
  "IP audio system devices and paging microphones",
  "Speaker cables and PA system accessories",
];

const companySnapshot = [
  ["Company Name", "JUST YOU AUDIO"],
  ["Business Type", "Professional Manufacturer of PA Systems"],
  [
    "Main Products",
    "100V / 70V Amplifiers, Ceiling Speakers, Wall Mount Speakers, Outdoor Column Speakers, Horn Speakers, PA System Accessories",
  ],
  ["Main Markets", "Latin America, Middle East, Southeast Asia, Africa"],
  [
    "Applications",
    "Hotels, Schools, Churches, Shopping Malls, Industrial Projects, Public Spaces",
  ],
  ["Services", "OEM / ODM customization, system design support"],
];

const manufacturerFaqs = [
  {
    question: "Are you a manufacturer or trading company?",
    answer: "We are a professional manufacturer of PA systems.",
  },
  {
    question: "Do you support OEM/ODM?",
    answer:
      "Yes, we support customization for power, design, branding, and system solutions.",
  },
  {
    question: "What is your warranty?",
    answer: "We provide 1-2 year warranty depending on product type.",
  },
  {
    question: "Can you design a complete PA system?",
    answer: "Yes, we provide full system design support.",
  },
  {
    question: "What markets do you mainly serve?",
    answer:
      "We mainly serve Latin America, Middle East, Southeast Asia, and Africa.",
  },
];

export const metadata: Metadata = {
  title: "Public Address Knowledge Hub",
  description:
    "Public address news, PA audio Q&A, project solution knowledge and manufacturer information from JUST YOU AUDIO.",
  alternates: {
    canonical: "/knowledge",
  },
  openGraph: {
    title: "Public Address Knowledge Hub | JUST YOU AUDIO",
    description:
      "PA audio news, Q&A and solution knowledge for distributors, installers and project buyers.",
    images: [
      {
        url: "/images/scene-school-public.jpg",
        width: 1200,
        height: 630,
        alt: "Public address system project knowledge from JUST YOU AUDIO",
      },
    ],
    url: "/knowledge",
  },
};

export default function KnowledgePage() {
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

      <main className="knowledge-page">
        <section className="knowledge-hero">
          <div className="label">Public Address Knowledge</div>
          <h1>PA audio news, Q&A and project solution guide</h1>
          <p>
            A practical information board for distributors, installers and
            project buyers who need public address products, background music
            systems and reliable factory supply.
          </p>
        </section>

        <section className="knowledge-layout">
          <div className="knowledge-feed">
            <div className="knowledge-section-head">
              <div>
                <div className="label">Information Board</div>
                <h2>Latest PA audio topics</h2>
              </div>
              <a href="/catalog">Get Catalog & Distributor Price</a>
            </div>

            <div className="post-list">
              {boardPosts.map((post) => (
                <article className="post-card" key={post.title}>
                  <div className="post-meta">
                    <span>{post.type}</span>
                    <small>{post.meta}</small>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </article>
              ))}
            </div>

            <section className="solution-board">
              <div>
                <div className="label">SEO Page Structure</div>
                <h2>New knowledge and Spanish landing pages</h2>
                <p>
                  These pages are prepared with page-specific metadata, headings,
                  internal links and CTA sections. Full long-form SEO copy can be
                  added in the next content phase.
                </p>
              </div>
              <div className="topic-grid route-grid">
                {[...englishKnowledgePages, ...spanishLandingPages].map((page) => (
                  <a href={page.route} key={page.route}>
                    {page.h1}
                  </a>
                ))}
              </div>
            </section>

            <section className="qa-board">
              <div className="knowledge-section-head compact">
                <div>
                  <div className="label">Q&A</div>
                  <h2>Common questions from distributors</h2>
                </div>
              </div>
              <div className="qa-list">
                {qas.map((item) => (
                  <article className="qa-card" key={item.question}>
                    <h3>{item.question}</h3>
                    <p>{item.answer}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="solution-board">
              <div>
                <div className="label">Solution Topics</div>
                <h2>Public address projects we can support</h2>
                <p>
                  These topics help buyers understand where PA amplifiers,
                  ceiling speakers, column speakers, horn speakers and IP audio
                  systems are commonly used.
                </p>
              </div>
              <div className="topic-grid">
                {solutionTopics.map((topic) => (
                  <span key={topic}>{topic}</span>
                ))}
              </div>
            </section>
          </div>

          <aside className="factory-profile" aria-label="Factory profile">
            <div className="factory-profile-card">
              <div className="label">Manufacturer Profile</div>
              <h2>JUST YOU AUDIO factory supply for PA audio distributors</h2>
              <p>
                JUST YOU AUDIO supplies commercial public address and background
                music audio products for distributors, contractors and project
                buyers. Our range is built around complete PA system sourcing,
                stable model selection, OEM cooperation and project matching
                support.
              </p>
              <div className="profile-stats">
                <div>
                  <strong>Full Line</strong>
                  <span>Amplifiers, speakers, microphones and accessories</span>
                </div>
                <div>
                  <strong>OEM</strong>
                  <span>Logo, packaging and distributor product line support</span>
                </div>
                <div>
                  <strong>Projects</strong>
                  <span>Hotels, schools, villas, restaurants and public areas</span>
                </div>
              </div>
              <dl className="manufacturer-snapshot">
                {companySnapshot.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <a className="btn btn-gold profile-button" href="/catalog">
                Request Full Catalog
              </a>
            </div>

            <div className="product-line-card">
              <h2>Reliable product line</h2>
              <ul>
                {productLines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>

            <div className="manufacturer-faq-card">
              <div className="label">FAQ</div>
              <h2>Manufacturer FAQ</h2>
              <div className="manufacturer-faq-list">
                {manufacturerFaqs.map((faq) => (
                  <article key={faq.question}>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </aside>
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
