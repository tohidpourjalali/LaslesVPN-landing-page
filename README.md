# LaslesVPN — Landing Page

A pixel-faithful Next.js implementation of the **LaslesVPN** landing page.
Every colour, spacing, size and string was extracted directly from the design file rather than eyeballed.

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router) + React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Font | Rubik 400 / 500 / 700 via `next/font` |
| Runtime deps | **None** — the carousel is pure CSS scroll-snap |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # fully static production output
```

## Project structure

```
app/
  layout.tsx          Rubik font, metadata
  page.tsx            Section composition
  globals.css         Design tokens + fluid rem scale
components/
  Navbar.tsx          Sticky header + hamburger menu (client)
  Hero.tsx            Headline, copy, Get Started CTA, illustration
  Stats.tsx           90+ users / 30+ locations / 50+ servers
  Features.tsx        Illustration + four-item checklist
  Pricing.tsx         Free / Standard / Premium cards
  GlobalNetwork.tsx   Heading + world map
  FeaturedIn.tsx      Netflix, Reddit, Amazon, Discord, Spotify logos
  Testimonials.tsx    Snap carousel with arrows and bullets (client)
  SubscribeCta.tsx    White card overlapping the grey footer band
  Footer.tsx          Link columns + social icons
  icons.tsx           All icons as inline SVG using currentColor
lib/content.ts       Every string and data array in one place
```

## Design tokens

```
Primary       #F53838   (hover #C42D2D · disabled #F98888 · tint #FFECEC)
Text          #0B132A   (secondary #4F5665 · muted #AFB5C0)
Borders       #DDDDDD   (soft #EEEFF2)
Grey surface  #F8F8F8
Check green   #2FAB73   · Star #FEA250 · Carousel bullet #DDE0E4

Container     max-width 1140px (no side gutter from 1200px up)
Radii         10px cards · 50px buttons
Shadows       main: 0 37px 37px -10px rgba(245,56,56,.35)
              card: 0 47px 47px -10px rgba(13,16,37,.05)
Typography    H1 50/1.4 · H2 35/1.424 · H3 18/1.6 · body 16/1.875 · list 14/2.14
```

## Responsive strategy

Two layers working together:

**1. Fluid root scale (rem).** Every value is authored in `rem`, so changing the root font size scales the entire page proportionally:

```
< 864px  →  html { font-size: 56.25% }   (1rem = 9px)
≥ 864px  →  html { font-size: 62.5%  }   (1rem = 10px)
```

**2. Breakpoints (Tailwind).** Layout changes:

| Token | Width | What changes |
|---|---|---|
| `sm` | 432px | Tighter logo and buttons |
| `md` | 864px | Two-column hero · desktop nav · pricing cards in a row · two-column footer |
| `lg` | 1200px | Full desktop grid · hero becomes 555px + 1fr |

Verified from **320px to 1440px** across 14 widths — zero horizontal overflow.

Notable responsive behaviour:

- **Header** collapses into an animated hamburger below 864px, and closes itself automatically when the viewport grows.
- **Pricing cards** stack below 864px and flex fluidly between 864–1200px (`flex-1` capped at 330px) so they never overflow.
- **Testimonial carousel** uses `scroll-snap`: swipe on touch, arrows and bullets on desktop. The active bullet stretches to 45px.
- **Illustrations and map** are SVG, so they stay sharp at any size and never break the layout.

## Fidelity to the design file

| Measure | Design | This build |
|---|---|---|
| Total page height @1440 | 5189px | 5139px |
| Pricing card width | 330px | 330px |
| Gap between cards | 50px | 50px |
| First card x-offset | 175px | 175px |
| World map width | 1060px | 1060px |
| Testimonial card width | 400px | 400px |
| Subscribe box width | 1140px | 1140px |

Buttons follow the design: Free and Standard are **outlined**, Premium is **solid red**.

## Note on assets

The original design is by **Didi Kurniawan** (free Figma Community template), and the artwork comes from open-source builds of that same template. For commercial use, drop your own exports into `public/images/` — the file names referenced in `lib/content.ts` and the components stay the same.
