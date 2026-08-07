"use client";

import { useState } from "react";

const solutionCases = [
  {
    category: "Education",
    title: "Campus IP Digital Network Broadcasting",
    description:
      "IP network broadcasting, classroom sound reinforcement and campus public announcement systems for schools and universities.",
    image: "/images/scene-school-public.jpg",
  },
  {
    category: "Shopping malls and supermarkets",
    title: "Commercial Background Music & Paging",
    description:
      "Multi-zone background music, paging microphones and ceiling speaker systems for retail and commercial spaces.",
    image: "/images/solution-cases/solution-02-shopping-malls.jpg",
  },
  {
    category: "Hotel buildings",
    title: "Hotel Public Address System",
    description:
      "Lobby music, corridor paging, restaurant audio and emergency broadcast support for hotel buildings.",
    image: "/images/solution-cases/solution-03-hotel-buildings.jpg",
  },
  {
    category: "Military and prison",
    title: "Secure Area Broadcast Coverage",
    description:
      "Reliable voice broadcast and controlled-zone paging solutions for supervised public address environments.",
    image: "/images/solution-cases/solution-04-military-prison.jpg",
  },
  {
    category: "Factories and mines",
    title: "Industrial Public Address System",
    description:
      "High-power amplifiers, horn speakers and outdoor column speakers for factories, warehouses and industrial areas.",
    image: "/images/solution-cases/solution-05-factories-mines.jpg",
  },
  {
    category: "Emergency broadcast",
    title: "Emergency Voice Alarm Broadcast",
    description:
      "Public voice notification and emergency broadcast equipment for buildings, campuses and public facilities.",
    image: "/images/solution-cases/solution-06-emergency-broadcast.jpg",
  },
  {
    category: "Hospital and bank",
    title: "Public Service Audio System",
    description:
      "Clear announcement, background music and information broadcast solutions for hospitals, banks and service halls.",
    image: "/images/solution-cases/solution-07-hospital-bank.jpg",
  },
  {
    category: "Park scenic area",
    title: "Outdoor Scenic Area Audio Coverage",
    description:
      "Weather-resistant column speakers, lawn speakers and outdoor PA products for parks, resorts and public spaces.",
    image: "/images/solution-cases/solution-08-park-scenic-area.jpg",
  },
  {
    category: "Airport and train station",
    title: "Transportation Hub Paging System",
    description:
      "Long-distance voice announcement, zone paging and background broadcast solutions for transport terminals.",
    image: "/images/solution-cases/solution-09-airport-train-station.jpg",
  },
  {
    category: "Intelligent transportation",
    title: "Traffic & Public Area Broadcast",
    description:
      "Outdoor voice coverage and network audio products for public roads, stations, platforms and smart transport projects.",
    image: "/images/solution-cases/solution-10-intelligent-transportation.jpg",
  },
];

export default function SolutionCaseSwitcher() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCase = solutionCases[activeIndex];

  return (
    <div className="solution-switcher">
      <div className="solution-number-buttons" aria-label="Solution selector">
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
          <span>CASES</span>
          <h3>{activeCase.title}</h3>
          <p>{activeCase.description}</p>
          <small>{activeCase.category}</small>
        </div>
      </article>
    </div>
  );
}
