import type { ReactNode } from "react";
import type { Metadata } from "next";
import { contactInfo, getEmailLink, getWhatsAppLink } from "../site-config";

export type SeoPage = {
  slug: string;
  route: string;
  locale: "en" | "es";
  title: string;
  metaDescription: string;
  canonical: string;
  hreflang?: Record<string, string>;
  eyebrow: string;
  h1: string;
  intro: string;
  keywords: string[];
  trustTitle: string;
  trustText: string;
  sections: Array<{
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{
      title: string;
      text: string;
    }>;
  }>;
  productLinks: Array<{
    label: string;
    href: string;
    note: string;
  }>;
  checklist: string[];
  scenarios: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
  ctaTitle: string;
  ctaText: string;
  whatsappMessage: string;
  articleMarkdown?: string;
};

export const englishKnowledgePages: SeoPage[] = [
  {
    slug: "100v-pa-system-guide",
    route: "/knowledge/100v-pa-system-guide",
    locale: "en",
    title: "100V PA System Guide for Commercial Projects",
    metaDescription:
      "A structured guide to 100V PA systems, amplifier matching, speaker selection, zones and quotation preparation for commercial audio projects.",
    canonical: "/knowledge/100v-pa-system-guide",
    eyebrow: "100V System Guide",
    h1: "What Is a 100V PA System? Complete Guide for Commercial Audio Projects",
    intro:
      "A practical guide to 100V public address systems, including system principles, equipment selection, amplifier power calculation and commercial project design considerations.",
    keywords: ["100V line", "PA amplifier", "speaker zones", "commercial paging"],
    trustTitle: "For installers, distributors and project buyers",
    trustText:
      "Understand when a 100V system is appropriate and which project information is needed before selecting models.",
    sections: [
      {
        eyebrow: "System Basics",
        title: "How a 100V PA system works",
        intro:
          "Learn how amplifier output, transformer speakers, cable runs and multi-speaker layouts work together.",
        items: [
          {
            title: "Amplifier output",
            text: "Introduce 100V and 70V outputs, total speaker wattage and safe headroom planning.",
          },
          {
            title: "Speaker tapping",
            text: "Explain how ceiling, wall, column and horn speakers use tap settings in a distributed system.",
          },
          {
            title: "Project zones",
            text: "Reserve space for guidance on zones, paging priority and music areas.",
          },
        ],
      },
      {
        eyebrow: "Design Structure",
        title: "Information needed before system design",
        intro:
          "Collect the key project information before selecting amplifiers, speakers and cable.",
        items: [
          {
            title: "Area and layout",
            text: "Document floor area, ceiling height, room count and indoor or outdoor conditions.",
          },
          {
            title: "Use case",
            text: "Separate background music, paging, emergency broadcast and mixed-use needs.",
          },
          {
            title: "Installation constraints",
            text: "Prepare notes for cable distance, mounting method, weather exposure and local standards.",
          },
        ],
      },
    ],
    productLinks: [
      {
        label: "100V PA Mixer Amplifier",
        href: "/#featured",
        note: "Start with amplifier power and input requirements.",
      },
      {
        label: "Ceiling Speakers",
        href: "/#featured",
        note: "For hotels, shops, offices and indoor BGM areas.",
      },
      {
        label: "Outdoor Column Speakers",
        href: "/#featured",
        note: "For campuses, public areas and long coverage zones.",
      },
    ],
    checklist: [
      "Total speaker wattage and amplifier headroom",
      "Number of zones and paging requirements",
      "Indoor, outdoor or mixed installation conditions",
      "Music level, voice clarity and coverage expectations",
    ],
    scenarios: ["Hotels", "Schools", "Factories", "Retail stores", "Public buildings", "Outdoor areas"],
    faq: [
      {
        question: "Is a 100V PA system suitable for many speakers?",
        answer:
          "Yes. Distributed 100V systems are commonly used when one amplifier feeds multiple commercial speakers.",
      },
      {
        question: "Can JUST YOU AUDIO help match a complete system?",
        answer:
          "Yes. Buyers can send the project layout, speaker quantity and application for amplifier and speaker recommendations.",
      },
    ],
    ctaTitle: "Need a 100V PA system list for a project?",
    ctaText:
      "Send us the area, speaker quantity and application. We can recommend suitable amplifiers, speakers and accessories.",
    whatsappMessage:
      "Hello, I need help with a 100V PA system project. Could you recommend suitable amplifiers and speakers?",
    articleMarkdown: `# What Is a 100V PA System? Complete Guide for Commercial Audio Projects

A 100V PA system is one of the most widely used audio distribution methods for commercial buildings, public facilities, factories, schools, hotels, restaurants and other projects where sound needs to be distributed across multiple areas.

Unlike a conventional low-impedance speaker system, a 100V line system is designed to connect many loudspeakers over relatively long cable runs while keeping system wiring and power distribution manageable.

For installers, distributors and project contractors, understanding how a 100V system works is important before selecting amplifiers, speakers and cable.

This guide explains the basic principles, equipment selection, power calculation and common design considerations for 100V commercial audio systems.

---

## What Is a 100V PA System?

A 100V PA system, also called a **100V line system** or **constant-voltage speaker system**, distributes amplified audio through a high-voltage loudspeaker line.

The amplifier provides a 100V audio output, while each compatible loudspeaker is equipped with a transformer.

Instead of connecting speakers according to a fixed 4Ω or 8Ω impedance load, installers select a power tap for each speaker, such as:

* 3W
* 6W
* 10W
* 15W
* 30W
* 60W

The total speaker power is then calculated by adding the selected wattage of all connected loudspeakers.

For example:

* 10 ceiling speakers × 6W = 60W
* 6 wall speakers × 10W = 60W
* 4 column speakers × 30W = 120W

Total connected speaker load:

**60W + 60W + 120W = 240W**

The amplifier should provide sufficient output power above this total load.

This wattage-based design method is one of the main reasons 100V systems are convenient for medium and large commercial projects.

---

## How Does a 100V Line System Work?

A typical 100V PA system consists of several basic components:

1. Audio source
2. PA amplifier
3. Speaker cable
4. 100V loudspeakers

The signal path is generally:

**Audio Source → PA Amplifier → 100V Speaker Line → Multiple Speakers**

Audio sources may include:

* Background music players
* Bluetooth audio
* USB/SD playback
* Microphones
* Paging microphones
* Mixers
* Network audio sources

The amplifier processes and amplifies the audio signal before sending it through the 100V output.

Each loudspeaker transformer then converts the high-voltage line signal to the level required by the speaker driver.

This allows many speakers to share one amplifier output without requiring complicated series-parallel impedance calculations.

---

## Why Are 100V Systems Used in Commercial Projects?

### 1. Easier connection of multiple speakers

In a conventional low-impedance system, connecting many speakers requires careful impedance matching.

With a 100V system, installers normally calculate the system according to speaker wattage instead.

This makes the design much easier when dozens—or even hundreds—of speakers are required.

### 2. Suitable for longer cable runs

Commercial projects often require loudspeakers to be installed far away from the amplifier room.

Examples include:

* Hotel corridors
* School buildings
* Factory workshops
* Warehouses
* Outdoor roads
* Shopping centers

100V distribution is better suited to these types of installations than conventional low-impedance wiring.

### 3. Flexible speaker power selection

Many 100V speakers provide several transformer tapping options.

For example, a speaker may allow:

**5W / 10W / 20W / 40W**

An installer can select different wattages depending on the required sound level.

A quiet corridor may only require a low power tap, while a noisy workshop or outdoor space may require a higher one.

### 4. Easier system expansion

If sufficient amplifier capacity is reserved, additional speakers can often be added later without redesigning the entire speaker network.

This is useful for commercial buildings where future expansion may be required.

### 5. Suitable for zoning

100V PA amplifiers can be combined with zone control systems.

Different areas can be controlled separately, for example:

* Zone 1 — Lobby
* Zone 2 — Restaurant
* Zone 3 — Corridor
* Zone 4 — Outdoor area
* Zone 5 — Office

This makes 100V systems suitable for both background music and paging applications.

---

## 100V PA System vs 8Ω Speaker System

The two systems are designed for different applications.

### 100V systems

Best suited for:

* Multiple speakers
* Long cable distances
* Commercial buildings
* Background music
* Paging
* Public address
* Multi-zone audio

System design is mainly based on the total wattage of the connected speakers.

### 8Ω low-impedance systems

More commonly used for:

* Hi-Fi audio
* Home audio
* Studio monitoring
* Short speaker runs
* High-output entertainment systems

The system must be designed according to speaker impedance and amplifier load capability.

### Which one should you choose?

For a restaurant with two or four speakers, either solution may work depending on the required audio performance.

For a hotel with 50 ceiling speakers, however, a 100V line system is normally much more practical.

For large public address projects, 100V systems are generally preferred because of their scalability and simplified distribution.

---

## Main Components of a 100V PA System

### PA Amplifier

The amplifier is the center of the system.

Depending on the project, different amplifier types may be used.

#### PA mixer amplifier

Combines audio mixing and power amplification in one unit.

Typical functions may include:

* Microphone inputs
* AUX inputs
* USB playback
* Bluetooth
* Priority input
* 100V output

Suitable for small and medium projects.

#### Zone PA amplifier

Allows different speaker zones to be controlled separately.

Common applications include:

* Hotels
* Restaurants
* Schools
* Commercial buildings

#### Digital / Class D amplifier

Class D technology can reduce amplifier size, weight and energy consumption, making it useful for modern rack installations.

#### IP network amplifier

Used in network-based PA systems where audio and control signals are distributed through an IP network.

These systems are particularly suitable for large campuses, factories and multi-building projects.

---

## 100V Ceiling Speakers

Ceiling speakers are frequently used for background music and announcements.

Typical applications include:

* Hotel rooms
* Corridors
* Restaurants
* Offices
* Shopping centers
* Retail stores

They provide relatively even sound distribution while remaining visually discreet.

Speaker quantity should not be decided only according to total wattage.

Installation height, coverage angle, ceiling structure and required sound level should also be considered.

---

## Wall-Mount Speakers

Wall speakers are useful when ceiling installation is difficult or when higher directional output is required.

They are commonly installed in:

* Restaurants
* Classrooms
* Corridors
* Warehouses
* Offices
* Commercial spaces

For projects with exposed ceilings or complicated ceiling structures, wall-mounted speakers can significantly simplify installation.

---

## Column Speakers

Column speakers contain multiple drivers arranged vertically.

They are commonly used for speech and background music in areas such as:

* Corridors
* Platforms
* Houses of worship
* Public spaces
* Factories
* Outdoor walkways

Outdoor versions should be selected according to the environmental conditions and required weather resistance.

---

## Outdoor and Weatherproof Speakers

Outdoor PA systems require additional consideration.

Important factors include:

* Waterproof rating
* UV resistance
* Installation height
* Coverage distance
* Background noise
* Environmental temperature
* Mounting method

Common outdoor products include:

* Waterproof column speakers
* Weatherproof wall speakers
* Horn speakers
* Lawn speakers

The correct model depends on whether the system is designed primarily for background music, speech announcements or emergency paging.

---

## How to Calculate PA Amplifier Power

One of the most important steps in a 100V system is calculating the amplifier power.

The basic method is:

**Total Speaker Load = Sum of All Speaker Tap Wattages**

Then reserve additional amplifier capacity.

### Example

Suppose a hotel project uses:

* 20 ceiling speakers × 6W = 120W
* 10 wall speakers × 10W = 100W
* 4 outdoor column speakers × 30W = 120W

Total speaker load:

**120W + 100W + 120W = 340W**

It is generally better not to select a 340W amplifier for a 340W load.

A practical design should leave additional capacity for stable operation and possible future adjustment.

For example, an amplifier in the range of approximately 400–500W may be considered depending on the actual system design.

The final amplifier selection should also consider:

* Number of zones
* Audio source requirements
* Paging requirements
* Future expansion
* Cable distance
* Operating environment

---

## Speaker Tapping and Power Distribution

Transformer tapping allows installers to adjust individual speaker output.

Imagine the following restaurant:

### Dining area

10 ceiling speakers set to 6W:

**10 × 6W = 60W**

### Entrance

2 wall speakers set to 10W:

**2 × 10W = 20W**

### Outdoor terrace

4 waterproof speakers set to 15W:

**4 × 15W = 60W**

Total load:

**140W**

This makes it possible to use different speaker power levels within the same 100V system.

The outdoor terrace can receive more power because of ambient noise, while the indoor dining area can operate at a lower level.

---

## Typical Applications of 100V PA Systems

### Hotels

A hotel background music system may include:

* Lobby ceiling speakers
* Corridor speakers
* Restaurant speakers
* Outdoor speakers
* Zone amplifier
* Paging microphone

Different zones can play background music while still allowing announcements when required.

### Restaurants and Cafés

A 100V system is useful for distributing consistent background music across:

* Dining areas
* Private rooms
* Entrances
* Restrooms
* Outdoor terraces

### Schools

School PA systems often require:

* Classroom speakers
* Corridor speakers
* Outdoor speakers
* Paging
* Scheduled announcements
* Emergency broadcasting

Large campuses may also use an IP network PA architecture.

### Factories

Factories require careful system design because noise levels can vary significantly between areas.

Different speaker types may be required for:

* Offices
* Workshops
* Warehouses
* Loading areas
* Outdoor yards

High-noise environments may require higher-output speakers or horn speakers.

### Shopping Centers

Commercial complexes often use 100V systems for:

* Background music
* Promotions
* Paging
* Public information
* Emergency communication

### Outdoor Public Areas

Outdoor 100V systems are commonly used in:

* Parks
* Roads
* Campuses
* Resorts
* Parking areas
* Industrial sites

Weather resistance and sound coverage become particularly important in these applications.

---

## Common 100V PA System Design Mistakes

### Selecting an amplifier with insufficient power

The amplifier should not be selected exactly equal to the calculated speaker load.

A reasonable safety margin should be reserved.

### Mixing incompatible speaker systems

A 100V amplifier output should normally be connected to speakers designed for 100V line operation.

Always verify the speaker input and transformer setting before installation.

### Ignoring cable distance

Long speaker lines can still produce cable losses.

Cable conductor size should be selected according to:

* Distance
* Total power
* Installation environment

### Using too few speakers at excessive wattage

Increasing the power of a few speakers does not always create better coverage.

For background music, more evenly distributed speakers operating at moderate levels usually provide a better listening experience than a small number of very loud speakers.

### Ignoring ambient noise

Speaker quantity and power should be based on the actual environment.

A quiet hotel corridor and a railway workshop cannot use the same design assumptions.

### No future power reserve

Commercial projects often change after installation.

Keeping some amplifier capacity available can make future system expansion easier.

---

## 70V vs 100V PA Systems

70V and 100V systems operate according to the same basic constant-voltage principle.

70V systems are particularly common in North America, while 100V systems are widely used in many international commercial projects.

Many professional PA products may support both:

**70V / 100V**

When selecting equipment, always confirm the required system voltage for the target project.

The amplifier output and speaker transformer settings must be compatible.

---

## How to Choose the Right 100V Equipment

Before choosing equipment, collect the basic project information.

### Project area

Determine:

* Total floor area
* Number of buildings
* Number of rooms
* Indoor and outdoor areas

### Speaker installation locations

Identify whether the project requires:

* Ceiling speakers
* Wall speakers
* Column speakers
* Outdoor waterproof speakers
* Horn speakers

### Required functions

Confirm whether the system requires:

* Background music only
* Paging
* Multiple zones
* Microphone priority
* Emergency override
* Scheduled playback
* IP network control

### Installation environment

Consider:

* Ceiling height
* Ambient noise
* Weather conditions
* Cable distance
* Equipment room location

### Future expansion

Reserve enough amplifier and system capacity when future speaker additions are likely.

---

## Analog 100V PA or IP Network PA?

A traditional 100V PA system is often sufficient for:

* Small hotels
* Restaurants
* Stores
* Offices
* Smaller schools

For large projects with several buildings or extensive independent zones, an IP network PA system may provide greater control flexibility.

An IP PA architecture can allow:

* Centralized control
* Remote paging
* Multiple independent zones
* Scheduled broadcasting
* Building-to-building communication
* Emergency priority control

The loudspeaker side may still use 100V speakers even when the control and audio distribution platform is IP based.

---

## Frequently Asked Questions

### Can different wattage speakers be connected to the same 100V amplifier?

Yes.

Different 100V speakers can normally operate on the same line as long as the total selected speaker wattage remains within the amplifier's available output capacity.

---

### Can I connect 8Ω speakers directly to a 100V output?

Normally, no.

An 8Ω loudspeaker should not be connected directly to a 100V line unless the equipment is specifically designed for dual-mode operation.

Some commercial speakers provide both 100V and low-impedance inputs. Always confirm the product specification before installation.

---

### How much amplifier power should I reserve?

A safety margin is recommended instead of operating continuously at the maximum calculated speaker load.

The appropriate margin depends on system configuration and project requirements.

---

### Can one 100V amplifier control several areas?

Yes.

A zone amplifier or external zone control equipment can divide the speaker system into different areas.

---

### Is a 100V system suitable for music?

Yes.

100V systems are widely used for commercial background music.

Sound quality depends on the quality of the amplifier, loudspeaker, transformer, installation design and source signal.

For high-end restaurants, hotels and commercial spaces, suitable wide-frequency-response speakers should be selected instead of basic announcement-only speakers.

---

### Is 100V suitable for outdoor speakers?

Yes.

Many outdoor column speakers, cabinet speakers, horn speakers and landscape speakers are available with 100V transformer inputs.

The speaker must also have suitable environmental protection for outdoor use.

---

### How many speakers can one amplifier support?

There is no fixed number.

The key factor is the total wattage.

For example:

A 500W amplifier could theoretically support more 5W speakers than 30W speakers.

Actual design should still reserve amplifier capacity and consider wiring, zones and installation requirements.

---

## Need Help Selecting a 100V PA System?

A reliable commercial audio system should be designed according to the project rather than simply selecting speakers by wattage.

For a proper recommendation, it is useful to provide:

* Project type
* Floor area or site dimensions
* Number of zones
* Indoor/outdoor locations
* Speaker quantity if already known
* Required paging or background music functions

JUST YOU AUDIO supplies professional PA and background music products for commercial and project applications, including:

* PA mixer amplifiers
* Zone amplifiers
* Digital amplifiers
* IP network amplifiers
* Ceiling speakers
* Wall-mount speakers
* Outdoor column speakers
* Weatherproof speakers
* Horn speakers
* Lawn speakers

For distributors, system integrators and project contractors, product matching and OEM/ODM options are also available.

**Need a product overview?**
Get the latest JUST YOU AUDIO Product Catalog.

**Working on a PA project?**
Contact us through WhatsApp with your project information for equipment matching.`,
  },
  {
    slug: "how-to-choose-pa-amplifier",
    route: "/knowledge/how-to-choose-pa-amplifier",
    locale: "en",
    title: "How to Choose a PA Amplifier for Commercial Audio",
    metaDescription:
      "Plan the structure for choosing a PA amplifier by wattage, zones, inputs, speaker type and commercial audio application.",
    canonical: "/knowledge/how-to-choose-pa-amplifier",
    eyebrow: "Amplifier Selection",
    h1: "How to choose a PA amplifier for commercial audio",
    intro:
      "A practical amplifier selection guide for shops, hotels, schools, factories and public spaces.",
    keywords: ["PA amplifier", "mixer amplifier", "100V output", "zone amplifier"],
    trustTitle: "Choose by project needs, not model name alone",
    trustText:
      "Compare power, inputs, zoning and speaker load before requesting a quotation.",
    sections: [
      {
        eyebrow: "Selection Factors",
        title: "Key amplifier decisions",
        intro: "Compare amplifier options by the requirements that affect real commercial installations.",
        items: [
          {
            title: "Power rating",
            text: "Reserve guidance for calculating speaker wattage and keeping practical headroom.",
          },
          {
            title: "Input sources",
            text: "Cover Bluetooth, USB, microphone, line input, paging microphone and priority needs.",
          },
          {
            title: "Zone control",
            text: "Explain when a single-zone mixer amplifier is enough and when zone control matters.",
          },
        ],
      },
      {
        eyebrow: "Buying Context",
        title: "Match amplifier type to application",
        intro: "Different commercial spaces need different amplifier functions and control options.",
        items: [
          {
            title: "Background music",
            text: "For restaurants, hotels and shops where clean music and simple operation matter.",
          },
          {
            title: "Paging systems",
            text: "For schools, warehouses and public buildings that need microphone priority.",
          },
          {
            title: "Distributor stock",
            text: "For dealers building a practical starter lineup across common wattages.",
          },
        ],
      },
    ],
    productLinks: [
      {
        label: "PA Amplifier Series",
        href: "/#featured",
        note: "Mixer amplifier and power options for common 100V systems.",
      },
      {
        label: "Commercial Speaker Categories",
        href: "/#categories",
        note: "Match amplifier power with ceiling, wall, column and horn speakers.",
      },
    ],
    checklist: [
      "Speaker quantity and tap wattage",
      "Input sources and microphone priority",
      "Single-zone or multi-zone control",
      "Project budget and distributor stock plan",
    ],
    scenarios: ["Restaurants", "Retail shops", "Schools", "Warehouses", "Offices", "Dealer starter packages"],
    faq: [
      {
        question: "How much amplifier power do I need?",
        answer:
          "Start with total speaker wattage, then reserve practical headroom instead of choosing only by room size.",
      },
      {
        question: "Can one amplifier support music and paging?",
        answer:
          "Yes, many PA mixer amplifiers support both. The right model depends on inputs, priority behavior and zone needs.",
      },
    ],
    ctaTitle: "Need help choosing a PA amplifier?",
    ctaText:
      "Share your speaker list or project area and we will suggest a suitable amplifier range.",
    whatsappMessage:
      "Hello, I need help choosing a PA amplifier. Could you recommend a suitable model for my project?",
  },
  {
    slug: "hotel-background-music-system",
    route: "/knowledge/hotel-background-music-system",
    locale: "en",
    title: "Hotel Background Music System Planning Guide",
    metaDescription:
      "Structure a helpful guide for hotel background music systems, including zones, ceiling speakers, amplifiers and quotation details.",
    canonical: "/knowledge/hotel-background-music-system",
    eyebrow: "Hotel BGM",
    h1: "Hotel background music system planning guide",
    intro:
      "A buyer-friendly planning guide for hotel background music and light paging systems.",
    keywords: ["hotel BGM", "ceiling speaker", "zone amplifier", "commercial audio"],
    trustTitle: "Designed for quiet, polished hospitality spaces",
    trustText:
      "The structure focuses on guest areas, speaker appearance, zoning and simple operation for hotel staff.",
    sections: [
      {
        eyebrow: "Hotel Areas",
        title: "Plan music by zone",
        intro: "Different hotel spaces need different sound levels, speaker styles and control zones.",
        items: [
          {
            title: "Lobby and reception",
            text: "Structure guidance for comfortable music level, coverage and microphone announcements.",
          },
          {
            title: "Corridors and public areas",
            text: "Add notes on even distribution, low visual impact and zone separation.",
          },
          {
            title: "Restaurant and lounge",
            text: "Reserve space for richer sound, volume control and guest experience.",
          },
        ],
      },
      {
        eyebrow: "Product Matching",
        title: "Recommended hotel audio components",
        intro: "Match hotel requirements with practical amplifier, ceiling speaker and wall speaker options.",
        items: [
          {
            title: "Frameless ceiling speakers",
            text: "For clean interior design and discreet background music.",
          },
          {
            title: "Wall speakers",
            text: "For areas where ceiling installation is limited or directional coverage helps.",
          },
          {
            title: "PA mixer amplifier",
            text: "For music inputs, microphone paging and 100V distributed output.",
          },
        ],
      },
    ],
    productLinks: [
      {
        label: "Frameless Ceiling Speaker",
        href: "/#featured",
        note: "Clean design for hotel interiors and BGM areas.",
      },
      {
        label: "Wall Mount Speaker",
        href: "/#featured",
        note: "Flexible installation for lounges, restaurants and corridors.",
      },
      {
        label: "PA Mixer Amplifier",
        href: "/#featured",
        note: "Music, microphone and 100V speaker support.",
      },
    ],
    checklist: [
      "Hotel zone list and room function",
      "Ceiling height and interior finish",
      "Music sources and staff operation needs",
      "Paging or emergency broadcast requirements",
    ],
    scenarios: ["Lobby", "Corridors", "Restaurant", "Lounge", "Meeting rooms", "Outdoor entrances"],
    faq: [
      {
        question: "Are ceiling speakers suitable for hotels?",
        answer:
          "Yes. Ceiling speakers provide clean appearance and even background music in many hotel areas.",
      },
      {
        question: "Can the system support different hotel zones?",
        answer:
          "Yes. Zone planning depends on amplifier type, wiring layout and how staff need to control each area.",
      },
    ],
    ctaTitle: "Planning hotel background music?",
    ctaText:
      "Send the hotel area list and preferred speaker style. We can recommend a practical BGM system combination.",
    whatsappMessage:
      "Hello, I am planning a hotel background music system. Could you recommend suitable speakers and amplifiers?",
  },
  {
    slug: "factory-pa-system-design",
    route: "/knowledge/factory-pa-system-design",
    locale: "en",
    title: "Factory PA System Design Structure",
    metaDescription:
      "Outline factory PA system design content for paging, announcements, warehouse coverage, horn speakers and amplifier matching.",
    canonical: "/knowledge/factory-pa-system-design",
    eyebrow: "Factory PA Design",
    h1: "Factory PA system design structure",
    intro:
      "A practical factory and warehouse public address system guide for paging, announcements and area coverage.",
    keywords: ["factory PA system", "warehouse paging", "horn speaker", "outdoor column speaker"],
    trustTitle: "Built around voice clarity and reliable coverage",
    trustText:
      "Factory systems often prioritize announcements, shift notices, safety communication and durable installation.",
    sections: [
      {
        eyebrow: "Coverage Planning",
        title: "Separate noisy and quiet areas",
        intro: "Factories often require different speaker types across production, warehouse and office areas.",
        items: [
          {
            title: "Production floor",
            text: "Reserve guidance for higher SPL, horn speakers and voice intelligibility.",
          },
          {
            title: "Warehouse aisles",
            text: "Plan for long coverage, mounting height and cable runs.",
          },
          {
            title: "Office and canteen",
            text: "Use ceiling or wall speakers where background music and lower volume are preferred.",
          },
        ],
      },
      {
        eyebrow: "System Control",
        title: "Paging and zone requirements",
        intro: "Plan microphone access, speaker zones and priority announcements before selecting equipment.",
        items: [
          {
            title: "Paging microphone",
            text: "Add details about control room, reception or security desk paging.",
          },
          {
            title: "Zone amplifier",
            text: "Explain when separate areas need independent control.",
          },
          {
            title: "Outdoor coverage",
            text: "Plan for waterproof speakers at gates, yards and loading areas.",
          },
        ],
      },
    ],
    productLinks: [
      {
        label: "Horn Speaker",
        href: "/#featured",
        note: "For voice broadcast in production areas and warehouses.",
      },
      {
        label: "Outdoor Waterproof Column",
        href: "/#featured",
        note: "For gates, yards and outdoor factory areas.",
      },
      {
        label: "PA Amplifier Series",
        href: "/#featured",
        note: "Amplifier matching for multiple speakers and zones.",
      },
    ],
    checklist: [
      "Noise level by area",
      "Indoor and outdoor speaker locations",
      "Paging desk and microphone requirements",
      "Shift announcement and emergency communication needs",
    ],
    scenarios: ["Production floors", "Warehouses", "Loading docks", "Security gates", "Offices", "Canteens"],
    faq: [
      {
        question: "Which speakers are common in factories?",
        answer:
          "Horn speakers and outdoor columns are common for voice coverage, while ceiling or wall speakers may fit offices and canteens.",
      },
      {
        question: "Can factory PA systems use zones?",
        answer:
          "Yes. Zone planning helps separate workshops, warehouse areas, offices and outdoor spaces.",
      },
    ],
    ctaTitle: "Need a factory PA system recommendation?",
    ctaText:
      "Share the factory layout, noisy areas and paging needs. We can help prepare a practical product list.",
    whatsappMessage:
      "Hello, I need a factory PA system design. Could you recommend horn speakers, outdoor speakers and amplifiers?",
  },
  {
    slug: "outdoor-waterproof-speaker-guide",
    route: "/knowledge/outdoor-waterproof-speaker-guide",
    locale: "en",
    title: "Outdoor Waterproof Speaker Guide for PA Projects",
    metaDescription:
      "Create the structure for an outdoor waterproof speaker guide covering column speakers, horn speakers, lawn speakers and project environments.",
    canonical: "/knowledge/outdoor-waterproof-speaker-guide",
    eyebrow: "Outdoor Speakers",
    h1: "Outdoor waterproof speaker guide for PA projects",
    intro:
      "A guide to outdoor speaker selection by environment, coverage need and product type.",
    keywords: ["waterproof speaker", "outdoor column speaker", "horn speaker", "lawn speaker"],
    trustTitle: "Choose by coverage, weather exposure and appearance",
    trustText:
      "Outdoor PA projects need practical tradeoffs between distance, voice clarity, music quality, mounting and visual style.",
    sections: [
      {
        eyebrow: "Speaker Types",
        title: "Compare outdoor PA speaker options",
        intro: "Choose between column, horn and landscape speakers based on coverage, sound goal and appearance.",
        items: [
          {
            title: "Waterproof column speakers",
            text: "For public areas, schools, parks and long coverage with cleaner appearance.",
          },
          {
            title: "Horn speakers",
            text: "For high-efficiency voice broadcast and long-distance paging.",
          },
          {
            title: "Lawn and garden speakers",
            text: "For villas, resorts and landscape areas where appearance matters.",
          },
        ],
      },
      {
        eyebrow: "Project Details",
        title: "Outdoor information to confirm",
        intro: "Confirm the installation environment before choosing outdoor speaker models and amplifier power.",
        items: [
          {
            title: "Weather exposure",
            text: "Add guidance for covered, semi-open and fully exposed installation areas.",
          },
          {
            title: "Mounting position",
            text: "Plan for wall, pole, ground or landscape mounting options.",
          },
          {
            title: "Coverage distance",
            text: "Reserve notes for voice distance, background music zones and volume expectations.",
          },
        ],
      },
    ],
    productLinks: [
      {
        label: "Outdoor Waterproof Column",
        href: "/#featured",
        note: "For schools, public areas, parks and roadside projects.",
      },
      {
        label: "Horn Speaker",
        href: "/#featured",
        note: "For long-distance paging and high voice output.",
      },
      {
        label: "Lawn & Garden Speaker",
        href: "/#featured",
        note: "For villas, resorts, gardens and landscaped spaces.",
      },
    ],
    checklist: [
      "IP rating and exposure level",
      "Coverage distance and mounting height",
      "Voice broadcast or background music priority",
      "Cable route and installation method",
    ],
    scenarios: ["Schools", "Parks", "Resorts", "Factory yards", "Roadside areas", "Gardens"],
    faq: [
      {
        question: "Are all outdoor speakers used for the same purpose?",
        answer:
          "No. Column, horn and lawn speakers serve different coverage, sound and appearance goals.",
      },
      {
        question: "Can JUST YOU AUDIO recommend outdoor speaker quantities?",
        answer:
          "Yes. Buyers can share area size, mounting points and use case for model and quantity suggestions.",
      },
    ],
    ctaTitle: "Need outdoor waterproof speakers?",
    ctaText:
      "Tell us the outdoor area, mounting method and sound goal. We will suggest suitable speaker types and amplifier matching.",
    whatsappMessage:
      "Hello, I need outdoor waterproof speakers for a PA project. Could you recommend suitable models?",
  },
];

export const spanishLandingPages: SeoPage[] = [
  {
    slug: "sistema-de-megafonia",
    route: "/es/sistema-de-megafonia",
    locale: "es",
    title: "Sistema de Megafonía para Proyectos Comerciales",
    metaDescription:
      "Estructura inicial para una página en español sobre sistemas de megafonía, audio comercial, altavoces, amplificadores y soporte para proyectos.",
    canonical: "/es/sistema-de-megafonia",
    eyebrow: "Megafonía Comercial",
    h1: "Sistema de megafonía para proyectos comerciales",
    intro:
      "Soluciones de megafonía, audio ambiental y voceo para proyectos comerciales de Latinoamérica.",
    keywords: ["megafonía", "audio comercial", "100V", "voceo"],
    trustTitle: "Pensada para distribuidores e instaladores",
    trustText:
      "Revisa aplicaciones, componentes y datos necesarios para preparar una cotización clara.",
    sections: [
      {
        eyebrow: "Aplicaciones",
        title: "Dónde se usa un sistema de megafonía",
        intro:
          "Espacio reservado para explicar usos reales en hoteles, colegios, comercios, fábricas y áreas públicas.",
        items: [
          {
            title: "Música ambiental",
            text: "Para restaurantes, hoteles, oficinas y locales que necesitan sonido continuo y discreto.",
          },
          {
            title: "Voceo y avisos",
            text: "Para anuncios diarios, llamados por micrófono y comunicación en zonas específicas.",
          },
          {
            title: "Proyectos exteriores",
            text: "Para patios, parques, accesos y espacios abiertos con altavoces resistentes.",
          },
        ],
      },
      {
        eyebrow: "Componentes",
        title: "Estructura básica del sistema",
        intro:
          "Combina amplificadores, altavoces y accesorios según el tipo de proyecto.",
        items: [
          {
            title: "Amplificador PA",
            text: "Define potencia, entradas, micrófono y salida para varios altavoces.",
          },
          {
            title: "Altavoces comerciales",
            text: "Incluye altavoces de techo, pared, columna, trompeta y jardín.",
          },
          {
            title: "Zonas y cableado",
            text: "Organiza áreas de audio, control de volumen y rutas de instalación.",
          },
        ],
      },
    ],
    productLinks: [
      {
        label: "Amplificadores PA",
        href: "/#featured",
        note: "Para sistemas 100V, música ambiental y voceo.",
      },
      {
        label: "Altavoces de techo y pared",
        href: "/#featured",
        note: "Para interiores comerciales y hoteles.",
      },
      {
        label: "Altavoces exteriores",
        href: "/#featured",
        note: "Para patios, escuelas, parques y zonas abiertas.",
      },
    ],
    checklist: [
      "Tipo de proyecto y cantidad de zonas",
      "Número aproximado de altavoces",
      "Interiores, exteriores o áreas mixtas",
      "Uso principal: música, voceo o ambos",
    ],
    scenarios: ["Hoteles", "Colegios", "Locales comerciales", "Fábricas", "Restaurantes", "Áreas públicas"],
    faq: [
      {
        question: "¿Qué datos necesito para cotizar un sistema?",
        answer:
          "La versión final explicará qué área, cantidad de altavoces, zonas y uso principal ayudan a recomendar el sistema.",
      },
      {
        question: "¿JUST YOU AUDIO puede apoyar con la selección?",
        answer:
          "Sí. Podemos revisar la aplicación y sugerir amplificadores, altavoces y accesorios adecuados.",
      },
    ],
    ctaTitle: "¿Necesitas una propuesta de megafonía?",
    ctaText:
      "Escríbenos por WhatsApp o descarga el catálogo para revisar líneas de producto y preparar tu consulta.",
    whatsappMessage:
      "Hola, necesito apoyo para un sistema de megafonía. ¿Me pueden recomendar amplificadores y altavoces?",
  },
  {
    slug: "amplificador-pa",
    route: "/es/amplificador-pa",
    locale: "es",
    title: "Amplificador PA para Audio Comercial",
    metaDescription:
      "Estructura de contenido para una página en español sobre amplificadores PA, potencia, entradas, zonas y aplicaciones comerciales.",
    canonical: "/es/amplificador-pa",
    eyebrow: "Amplificador PA",
    h1: "Amplificador PA para audio comercial",
    intro:
      "Guía para elegir amplificadores PA para música ambiental y voceo en proyectos comerciales.",
    keywords: ["amplificador PA", "amplificador 100V", "audio comercial", "zonas"],
    trustTitle: "Selección por potencia, entradas y aplicación",
    trustText:
      "Define potencia, entradas y funciones de control según las necesidades del proyecto.",
    sections: [
      {
        eyebrow: "Cómo elegir",
        title: "Factores clave del amplificador",
        intro:
          "Compara cada criterio con base en proyectos comerciales comunes.",
        items: [
          {
            title: "Potencia",
            text: "Relacionar potencia del amplificador con cantidad y watts de los altavoces.",
          },
          {
            title: "Entradas",
            text: "Considerar Bluetooth, USB, micrófono, entrada de línea y prioridad de voceo.",
          },
          {
            title: "Zonas",
            text: "Explicar cuándo conviene control por áreas o un sistema sencillo de una zona.",
          },
        ],
      },
      {
        eyebrow: "Aplicaciones",
        title: "Usos comunes en proyectos",
        intro:
          "Relaciona modelos de amplificador con necesidades de hoteles, tiendas y escuelas.",
        items: [
          {
            title: "Música ambiental",
            text: "Para restaurantes, tiendas, oficinas y salas comerciales.",
          },
          {
            title: "Voceo",
            text: "Para anuncios con micrófono en colegios, bodegas y edificios.",
          },
          {
            title: "Venta para distribuidores",
            text: "Para armar una línea básica con potencias fáciles de vender.",
          },
        ],
      },
    ],
    productLinks: [
      {
        label: "Serie de amplificadores PA",
        href: "/#featured",
        note: "Opciones para sistemas 100V y audio comercial.",
      },
      {
        label: "Categorías de altavoces",
        href: "/#categories",
        note: "Para calcular carga y tipo de instalación.",
      },
    ],
    checklist: [
      "Cantidad de altavoces y potencia por unidad",
      "Fuentes de audio y micrófono",
      "Control por zonas o sistema sencillo",
      "Aplicación principal y ambiente de instalación",
    ],
    scenarios: ["Restaurantes", "Tiendas", "Colegios", "Bodegas", "Oficinas", "Hoteles"],
    faq: [
      {
        question: "¿Cómo se calcula la potencia necesaria?",
        answer:
          "La redacción final explicará la suma de watts de altavoces y margen de trabajo del amplificador.",
      },
      {
        question: "¿Puedo pedir recomendación por WhatsApp?",
        answer:
          "Sí. Envía cantidad de altavoces, área del proyecto y uso principal para recibir una sugerencia inicial.",
      },
    ],
    ctaTitle: "¿Buscas un amplificador PA?",
    ctaText:
      "Comparte los datos de tu proyecto y te ayudamos a elegir una potencia y configuración adecuada.",
    whatsappMessage:
      "Hola, necesito un amplificador PA para audio comercial. ¿Me pueden recomendar un modelo?",
  },
  {
    slug: "altavoces-para-audio-comercial",
    route: "/es/altavoces-para-audio-comercial",
    locale: "es",
    title: "Altavoces para Audio Comercial y Megafonía",
    metaDescription:
      "Página estructural en español sobre altavoces para audio comercial: techo, pared, columna, trompeta, jardín y aplicaciones por proyecto.",
    canonical: "/es/altavoces-para-audio-comercial",
    eyebrow: "Altavoces Comerciales",
    h1: "Altavoces para audio comercial y megafonía",
    intro:
      "Altavoces comerciales organizados por tipo de instalación, ambiente y necesidad de sonido.",
    keywords: ["altavoces comerciales", "altavoces de techo", "altavoces exteriores", "megafonía"],
    trustTitle: "El altavoz correcto depende del espacio",
    trustText:
      "La versión final debe comparar opciones de manera natural para compradores, distribuidores e instaladores de Latinoamérica.",
    sections: [
      {
        eyebrow: "Tipos de altavoces",
        title: "Opciones para interiores y exteriores",
        intro:
          "Se dejará espacio para explicar ventajas, usos y límites de cada familia de producto.",
        items: [
          {
            title: "Altavoces de techo",
            text: "Para interiores limpios como hoteles, oficinas, restaurantes y tiendas.",
          },
          {
            title: "Altavoces de pared",
            text: "Para instalaciones flexibles donde no se puede usar techo o se necesita dirección.",
          },
          {
            title: "Altavoces exteriores",
            text: "Incluye columnas, trompetas y modelos de jardín para áreas abiertas.",
          },
        ],
      },
      {
        eyebrow: "Selección",
        title: "Cómo definir el altavoz adecuado",
        intro:
          "Elige por ambiente, distancia, estética y uso principal.",
        items: [
          {
            title: "Ambiente",
            text: "Distinguir entre espacios interiores, semiexteriores y exteriores expuestos.",
          },
          {
            title: "Cobertura",
            text: "Relacionar cantidad, distancia, altura de montaje y volumen esperado.",
          },
          {
            title: "Tipo de audio",
            text: "Separar música ambiental, anuncios por voz y aplicaciones mixtas.",
          },
        ],
      },
    ],
    productLinks: [
      {
        label: "Altavoces de techo",
        href: "/#featured",
        note: "Para música ambiental en interiores.",
      },
      {
        label: "Altavoces de pared",
        href: "/#featured",
        note: "Para instalación flexible en áreas comerciales.",
      },
      {
        label: "Columnas, trompetas y jardín",
        href: "/#featured",
        note: "Para proyectos exteriores y espacios abiertos.",
      },
    ],
    checklist: [
      "Interior, exterior o instalación mixta",
      "Altura de montaje y distancia de cobertura",
      "Prioridad entre voz, música o ambos",
      "Cantidad estimada de áreas o zonas",
    ],
    scenarios: ["Hoteles", "Restaurantes", "Tiendas", "Parques", "Colegios", "Villas"],
    faq: [
      {
        question: "¿Qué altavoz conviene para interiores?",
        answer:
          "La versión final comparará techo y pared según diseño del espacio, instalación y cobertura.",
      },
      {
        question: "¿Qué altavoz conviene para exteriores?",
        answer:
          "Depende de la distancia, clima, montaje y si la prioridad es voz, música ambiental o apariencia.",
      },
    ],
    ctaTitle: "¿Quieres elegir altavoces comerciales?",
    ctaText:
      "Envía el tipo de espacio y la aplicación. Podemos sugerir opciones de altavoz y amplificador.",
    whatsappMessage:
      "Hola, busco altavoces para audio comercial. ¿Me pueden recomendar opciones para mi proyecto?",
  },
];

export const allSeoPages = [...englishKnowledgePages, ...spanishLandingPages];

export function getEnglishKnowledgePage(slug: string) {
  return englishKnowledgePages.find((page) => page.slug === slug);
}

export function getSpanishLandingPage(slug: string) {
  return spanishLandingPages.find((page) => page.slug === slug);
}

export function createSeoMetadata(page: SeoPage): Metadata {
  const languages = page.hreflang
    ? Object.fromEntries(
        Object.entries(page.hreflang).map(([locale, path]) => [locale, path]),
      )
    : page.locale === "en"
      ? { en: page.canonical }
      : { es: page.canonical };

  return {
    title: page.title,
    description: page.metaDescription,
    alternates: {
      canonical: page.canonical,
      languages,
    },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      images: [
        {
          url: page.locale === "es" ? "/images/scene-hotel-restaurant.jpg" : "/images/scene-school-public.jpg",
          width: 1200,
          height: 630,
          alt: `${page.h1} from JUST YOU AUDIO`,
        },
      ],
      locale: page.locale === "es" ? "es_419" : "en_US",
      url: page.canonical,
    },
  };
}

function Navigation() {
  return (
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
  );
}

function Footer() {
  return (
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
  );
}

function Breadcrumbs({ page }: { page: SeoPage }) {
  const parent = page.locale === "es" ? "Español" : "Knowledge";
  const parentHref = page.locale === "es" ? "/" : "/knowledge";

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">Home</a>
      <span>/</span>
      <a href={parentHref}>{parent}</a>
      <span>/</span>
      <span>{page.h1}</span>
    </nav>
  );
}

function formatInlineMarkdown(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    return part;
  });
}

function ArticleMarkdown({ markdown }: { markdown: string }) {
  const lines = markdown.split(/\r?\n/);
  const nodes: ReactNode[] = [];
  let listItems: string[] = [];
  let orderedItems: string[] = [];

  function flushLists() {
    if (listItems.length > 0) {
      nodes.push(
        <ul key={`ul-${nodes.length}`}>
          {listItems.map((item) => (
            <li key={item}>{formatInlineMarkdown(item)}</li>
          ))}
        </ul>,
      );
      listItems = [];
    }

    if (orderedItems.length > 0) {
      nodes.push(
        <ol key={`ol-${nodes.length}`}>
          {orderedItems.map((item) => (
            <li key={item}>{formatInlineMarkdown(item)}</li>
          ))}
        </ol>,
      );
      orderedItems = [];
    }
  }

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushLists();
      return;
    }

    if (trimmed === "---") {
      flushLists();
      nodes.push(<hr key={`hr-${index}`} />);
      return;
    }

    if (trimmed.startsWith("# ")) {
      flushLists();
      return;
    }

    if (trimmed.startsWith("## ")) {
      flushLists();
      nodes.push(<h2 key={`h2-${index}`}>{formatInlineMarkdown(trimmed.slice(3))}</h2>);
      return;
    }

    if (trimmed.startsWith("### ")) {
      flushLists();
      nodes.push(<h3 key={`h3-${index}`}>{formatInlineMarkdown(trimmed.slice(4))}</h3>);
      return;
    }

    if (trimmed.startsWith("#### ")) {
      flushLists();
      nodes.push(<h4 key={`h4-${index}`}>{formatInlineMarkdown(trimmed.slice(5))}</h4>);
      return;
    }

    const unorderedMatch = trimmed.match(/^\* (.+)$/);

    if (unorderedMatch) {
      orderedItems = [];
      listItems.push(unorderedMatch[1]);
      return;
    }

    const orderedMatch = trimmed.match(/^\d+\. (.+)$/);

    if (orderedMatch) {
      listItems = [];
      orderedItems.push(orderedMatch[1]);
      return;
    }

    flushLists();

    if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
      nodes.push(
        <p className="article-callout" key={`p-${index}`}>
          {formatInlineMarkdown(trimmed)}
        </p>,
      );
      return;
    }

    nodes.push(<p key={`p-${index}`}>{formatInlineMarkdown(trimmed)}</p>);
  });

  flushLists();

  return <article className="seo-article">{nodes}</article>;
}

function ArticleContentPage({ page }: { page: SeoPage }) {
  const whatsappLabel = "Contact on WhatsApp";

  return (
    <>
      <Navigation />

      <main className="knowledge-page">
        <Breadcrumbs page={page} />

        <section className="knowledge-trust-hero article-hero">
          <div>
            <div className="label">{page.eyebrow}</div>
            <h1>{page.h1}</h1>
            <p>{page.intro}</p>
            <div className="knowledge-keywords" aria-label="Page topics">
              {page.keywords.map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>
          </div>
          <aside className="trust-panel">
            <strong>{page.trustTitle}</strong>
            <p>{page.trustText}</p>
            <a className="btn btn-gold" href={getWhatsAppLink(page.whatsappMessage)}>
              {whatsappLabel}
            </a>
          </aside>
        </section>

        <section className="seo-article-shell">
          <ArticleMarkdown markdown={page.articleMarkdown ?? ""} />
        </section>

        <section className="knowledge-cta">
          <div>
            <div className="label">Next Step</div>
            <h2>{page.ctaTitle}</h2>
            <p>{page.ctaText}</p>
          </div>
          <div className="knowledge-cta-actions">
            <a className="btn btn-gold" href={getWhatsAppLink(page.whatsappMessage)}>
              {whatsappLabel}
            </a>
            <a className="btn btn-secondary" href="/download-catalog">
              Download Catalog
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <a className="whatsapp" href={getWhatsAppLink(page.whatsappMessage)}>
        WA
      </a>
    </>
  );
}

export function SeoContentPage({ page }: { page: SeoPage }) {
  if (page.articleMarkdown) {
    return <ArticleContentPage page={page} />;
  }

  const isSpanish = page.locale === "es";
  const whatsappLabel = isSpanish ? "Contactar por WhatsApp" : "Contact on WhatsApp";
  const catalogLabel = isSpanish ? "Descargar catálogo" : "Download Catalog";
  const productHeading = isSpanish ? "Enlaces a productos relacionados" : "Related product links";
  const checklistHeading = isSpanish ? "Datos para preparar la cotización" : "Project details to prepare";
  const scenarioHeading = isSpanish ? "Escenarios de aplicación" : "Application scenarios";
  const faqHeading = isSpanish ? "Preguntas frecuentes" : "FAQ";
  const productLabel = isSpanish ? "Productos" : "Product Links";
  const checklistLabel = isSpanish ? "Checklist" : "Checklist";
  const applicationsLabel = isSpanish ? "Aplicaciones" : "Applications";
  const nextStepLabel = isSpanish ? "Siguiente paso" : "Next Step";

  return (
    <>
      <Navigation />

      <main className="knowledge-page">
        <Breadcrumbs page={page} />

        <section className="knowledge-trust-hero">
          <div>
            <div className="label">{page.eyebrow}</div>
            <h1>{page.h1}</h1>
            <p>{page.intro}</p>
            <div className="knowledge-keywords" aria-label="Page topics">
              {page.keywords.map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>
          </div>
          <aside className="trust-panel">
            <strong>{page.trustTitle}</strong>
            <p>{page.trustText}</p>
            <a className="btn btn-gold" href={getWhatsAppLink(page.whatsappMessage)}>
              {whatsappLabel}
            </a>
          </aside>
        </section>

        {page.sections.map((section, index) => (
          <section className="knowledge-block two-column" key={section.title}>
            <div className="knowledge-block-head">
              <div className="label">{section.eyebrow}</div>
              <h2>{section.title}</h2>
              <p>{section.intro}</p>
            </div>
            <div className="capability-grid">
              {section.items.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>
        ))}

        <section className="knowledge-block two-column">
          <div className="knowledge-block-head">
            <div className="label">{productLabel}</div>
            <h2>{productHeading}</h2>
          </div>
          <div className="system-overview-grid">
            {page.productLinks.map((link) => (
              <article key={link.label}>
                <h3>
                  <a href={link.href}>{link.label}</a>
                </h3>
                <p>{link.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="knowledge-block two-column">
          <div className="knowledge-block-head">
            <div className="label">{checklistLabel}</div>
            <h2>{checklistHeading}</h2>
          </div>
          <ul className="check-list">
            {page.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="knowledge-block">
          <div className="knowledge-block-head">
            <div className="label">{applicationsLabel}</div>
            <h2>{scenarioHeading}</h2>
          </div>
          <div className="scenario-grid">
            {page.scenarios.map((scenario) => (
              <span key={scenario}>{scenario}</span>
            ))}
          </div>
        </section>

        <section className="knowledge-block">
          <div className="knowledge-block-head">
            <div className="label">FAQ</div>
            <h2>{faqHeading}</h2>
          </div>
          <div className="faq-grid">
            {page.faq.map((item) => (
              <article key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="knowledge-cta">
          <div>
            <div className="label">{nextStepLabel}</div>
            <h2>{page.ctaTitle}</h2>
            <p>{page.ctaText}</p>
          </div>
          <div className="knowledge-cta-actions">
            <a className="btn btn-gold" href={getWhatsAppLink(page.whatsappMessage)}>
              {whatsappLabel}
            </a>
            <a className="btn btn-secondary" href="/download-catalog">
              {catalogLabel}
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <a className="whatsapp" href={getWhatsAppLink(page.whatsappMessage)}>
        WA
      </a>
    </>
  );
}
