---
name: apple-canvas
description: |
  Apple Canvas. Apple-like one-page, bento, cinematic, and scroll HTML design system for vivid premium pages. Default is MAXIMAL. MINIMAL is only when explicitly requested by "minimal", "Ive", or "Ferrari".
license: Proprietary. Personal use.
---

# Apple Canvas

Vivid Apple-style HTML pages: big typography, clean hierarchy, high-saturation accents, and one clear message per screen.

## 범위 — 디자인·시각화 전용 (문체·내용 불가침)

이 스킬은 **시각 디자인만** 책임진다. 사용자가 준 텍스트는 텍스트층(작성자·UP·shaper-skill)의 영토이며 침범하지 않는다.

- 본문·제목의 **어휘·어미·문장구조·문단·문체를 한 글자도 바꾸지 않는다.** 받은 텍스트 그대로(verbatim) 시각만 입힌다.
- **UP 입니다체(또는 작성자 문체)를 유지한다.** Apple식 빅타이포·임팩트 무드 때문에 본문을 슬로건·선언형·짧은 카피로 **다시 쓰는 것은 절대 금지**다.
- 본문 산문을 표·블릿으로 분해하지 않는다. 강조는 인라인 형광펜·pullquote 발췌만(→ `references/prose-preservation.md`).
- 카피·헤드라인 생성·톤 변환은 이 스킬의 일이 아니다 → 텍스트는 미리 받는다(없으면 작성자·shaper-skill·copywriting-skill).

상세: `references/prose-preservation.md`.

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
