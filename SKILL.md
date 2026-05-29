---
name: apple-canvas
description: |
  Apple Canvas. Apple-like one-page, bento, cinematic, and scroll HTML design system for vivid premium pages. Default is MAXIMAL. MINIMAL is only when explicitly requested by "minimal", "Ive", or "Ferrari".
license: Proprietary. Personal use.
---

# Apple Canvas

Vivid Apple-style HTML pages: big typography, clean hierarchy, high-saturation accents, and one clear message per screen.

## Use When

- The user asks for an Apple-like landing page, one-pager, KPI board, cinematic scroll, or presentation-style HTML.
- The content needs premium impact more than dense operational UI.
- The output should be a standalone `.html` or a small local folder with assets copied from this skill.

Do not use this for app screens, admin dashboards, plain document editing, or Obsidian-only markdown.

## Modes

| Mode | Default Use | Rules |
|---|---|---|
| MAXIMAL | Default | Vivid palette, big type, bold sections, one gradient event max |
| MINIMAL | Explicit only | One vivid accent, accent area under 5%, no gradients, no highlight pills |
| Ive | Alias for MINIMAL Light | Quiet white space, one vivid accent |
| Ferrari | Alias for MINIMAL Dark | Sans only, Ferrari red, no serif, no italic |

## Design Rules

- Use the existing assets first: `assets/scaffold-master.html`, `assets/scaffold-bento.html`, `assets/scaffold-scroll.html`, and `assets/tokens.css`.
- Keep color vivid: avoid pastel, muddy, muted, transparent, and `color-mix(... white ...)` accent treatments.
- Use stable responsive sizes. Avoid viewport-scaled font sizes that can overflow; prefer fixed clamps with conservative breakpoints.
- Keep `letter-spacing` at `0` unless there is a small positive label-tracking need.
- Korean text must use `word-break: keep-all; line-break: strict; overflow-wrap: break-word;`.
- Do not reshape the user's prose into tables or bullets unless the user asks.
- Respect reduced motion with `@media (prefers-reduced-motion: reduce)`.

## Codex Workflow

1. Read only the reference files needed for the requested mode.
2. Create outputs in the current workspace unless the user gives a path.
3. Edit files with `apply_patch`; copy skill assets into the output instead of modifying originals.
4. If a dev server is useful, start it and give the local URL.
5. Verify with `bash /Users/jason/.codex/skills/apple-canvas/scripts/qc.sh <html-file>` and, for visual work, inspect in Browser or a screenshot.

## References

| Need | Files |
|---|---|
| Mode selection | `modes/` |
| Tokens and scaffolds | `assets/` |
| Color, type, layout, motion | `references/axis-*.md` |
| QC details | `references/qc-checklist.md`, `scripts/qc.sh` |
