"use client";

import { useState } from "react";

const solutionCases = [
  {
    category: "Education",
    title: "School PA & Campus Audio",
    description:
      "Typical 70V/100V speaker and amplifier combinations for classrooms, corridors, playgrounds and campus announcement areas.",
    image: "/images/scene-school-public.jpg",
  },
  {
    category: "Commercial buildings",
    title: "Commercial Building Background Music",
    description:
      "Ceiling speakers, wall speakers and zone amplifiers for offices, lobbies and shared commercial spaces.",
    image: "/images/solution-cases/solution-02-shopping-malls.jpg",
  },
  {
    category: "Restaurants and hotels",
    title: "Restaurant & Hotel Audio System",
    description:
      "Background music and paging product matching for restaurants, hotel lobbies, corridors and hospitality spaces.",
    image: "/images/solution-cases/solution-03-hotel-buildings.jpg",
  },
  {
    category: "Retail stores",
    title: "Retail Store Music & Paging",
    description:
      "Compact amplifier, ceiling speaker and paging microphone selections for stores, showrooms and supermarkets.",
    image: "/images/solution-cases/solution-02-shopping-malls.jpg",
  },
  {
    category: "Factories and warehouses",
    title: "Warehouse & Industrial PA Matching",
    description:
      "Horn speakers, column speakers and higher-power amplifier options for voice coverage in industrial and storage areas.",
    image: "/images/solution-cases/solution-05-factories-mines.jpg",
  },
  {
    category: "Outdoor public areas",
    title: "Outdoor Public Area Audio Coverage",
    description:
      "Weather-resistant column speakers, horn speakers and landscape speakers for parks, resorts and outdoor public areas.",
    image: "/images/solution-cases/solution-08-park-scenic-area.jpg",
  },
];

export default function SolutionCaseSwitcher() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCase = solutionCases[activeIndex];

  return (
    <div className="solution-switcher">
      <div className="solution-number-buttons" aria-label="Typical application selector">
        {solutionCases.map((item, index) => (
          <button
            aria-pressed={activeIndex === index}
            className={activeIndex === index ? "active" : ""}
            key={item.category}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item.category}
          </button>
        ))}
      </div>

      <article className="solution-feature">
        <div className="solution-feature-image">
          <img src={activeCase.image} alt={activeCase.title} />
        </div>
        <div className="solution-feature-copy">
          <span>APPLICATIONS</span>
          <h3>{activeCase.title}</h3>
          <p>{activeCase.description}</p>
          <small>{activeCase.category}</small>
        </div>
      </article>
    </div>
  );
}
