# apple-canvas

**Apple-style web pattern canvas for design generation.**

A Claude Skill that learns from 27 live apple.com pages and bakes 42 patterns across 5 layers into reproducible HTML scaffolds.

## Features

- **Dual tone (light/dark) first-class** — sections, pages, and contexts transition naturally with `background-alt` boundary handling
- **Scroll-triggered motion** — viewport-relative coordinate video keyframes, sticky pinning, parallax (not just fade-in)
- **Data visualization** — Bento full-section, Compare matrix, Big Number, 16-step typography scale
- **Interaction microdetails** — Tile-BOC, Drawer Modal (3-level namespace), Color Swatch, Marquee Hover
- **Accessibility enforced** — `aria-label` mandatory, `prefers-reduced-motion` branching mandatory (H7)

## 4 Modes

1. **Scroll** — Apple-style full-page landing with scroll narrative
2. **Bento** — KPI/dashboard one-pager with 4-5 box grid
3. **Mix** — Scroll + Bento section hybrid
4. **Deck** — Scroll-snap slide presentation

## Constitution (7 articles)

| # | Rule |
|---|---|
| H1 | Dual tone first-class — single tone forced = FAIL |
| H2 | 16-step semantic + visual dual class typography |
| H3 | Full-bleed + 12-col grid |
| H4 | Scroll = narrative device (not simple fade-in) |
| H5 | Data = Bento, Compare, or Big Number |
| H6 | Interaction microdetails (1+ per page) |
| H7 | Accessibility enforced (aria + reduced-motion) |

## Installation

Download the latest `.skill` file from the [releases](../../releases) page or session output, then click "Save skill" in Claude Cowork.

## Usage

```
형: 애플처럼 KPI 한장 만들어줘
Claude: 🍎 어떤 모드? 1. 스크롤  2. Bento  3. Mix
형: 2
Claude: [Bento 풀섹션 + Big Number + Color Swatch HTML 생성]
```

## Source

Trained on 27 apple.com live pages (2026-05): iPhone 17 Pro/17, MacBook Pro/Air, iMac, Mac Studio/Mini, iPad Pro/Air, Vision Pro, AirPods Pro, Apple Watch, Apple Intelligence, Privacy, Environment, Accessibility, Apple Arcade, Apple TV+, and more.

## License

Proprietary. Personal use.
