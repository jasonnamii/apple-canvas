# Axis 3 — Layout (그리드·면분할 SSOT)

## 1. 12-grid + offset (H3)

```css
.large-12 { grid-column: span 12; }
.large-10 { grid-column: span 10; }
.large-8  { grid-column: span 8; }
.large-6  { grid-column: span 6; }
.large-4  { grid-column: span 4; }
.large-offset-1 { grid-column-start: 2; }
.large-offset-2 { grid-column-start: 3; }

.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px;
}
```

## 2. 면분할 12 레시피

```
A. 2분할 (50/50) — large-6 + large-6
B. 3분할 (1/2/1) — large-3 + large-6 + large-3
C. 4분할 (균등) — large-3 × 4
D. 비대칭 (3/9) — large-3 + large-9 (airpods 마스터)
E. 비대칭 (4/8) — large-4 + large-8
F. 비대칭 (8/4) — large-8 + large-4
G. 매거진 (5/4/3) — large-5 + large-4 + large-3
H. Bento mosaic — 다양 size mix (mode-bento.md)
I. Hero + 3 cards — large-12 + (large-4 × 3)
J. Sticky-chip-hero — 단일 large-10 + offset-1 (PT-Monolith)
K. Magazine asymmetric — large-7 + large-5 (newsroom)
L. Compare matrix — large-12 (5 columns)
```

## 3. Bento 풀섹션

```html
<section class="bento-grid">
  <div class="bento-cell tone-dark large-6">...</div>
  <div class="bento-cell tone-bordered large-3">...</div>
  <div class="bento-cell tone-colored large-3">...</div>
</section>
```

```css
.bento-cell {
  border-radius: 24px;
  padding: 48px;
  min-height: 360px;
}
.tone-dark { background: var(--bg-alt); color: var(--text); }
.tone-bordered { border: 1px solid #d2d2d7; }
.tone-colored { background: var(--accent-pink); color: white; }
```

## 4. 여백 운용 (airpods 박제)

```css
.section { padding-block: clamp(80px, 12vh, 160px); }
.section-tight { padding-block: 48px; }
.section-airy { padding-block: 200px; }
```

## 5. 금기

```
❌ width: 75% 같은 임의값 → large-N 강제
❌ 매거진 그리드에 균등 분할 (비대칭이 본질)
❌ Bento 셀 중 1개라도 정사각형 강제 (다양성 ✗)
```
