# Axis 6 — Emphasis (강조 SSOT)

> 형광펜 5색 + SVG underline 5색 + gradient-text + 5스톱 그라디언트 마스터.

## 1. 형광펜 5색 (K12 박제 — strip 패턴)

```css
:root {
  --hl-pink:   #ff5e8a;
  --hl-yellow: #ffd93d;
  --hl-mint:   #4ecdc4;
  --hl-coral:  #ff8a5b;
  --hl-lilac:  #b980f0;
}

.highlight-wrapper {
  display: inline;
  background-image: linear-gradient(180deg, transparent 55%, currentcolor 55%);
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  padding: 0 0.1em;
}

.highlight-pink   { color: var(--hl-pink); }
.highlight-yellow { color: var(--hl-yellow); }
.highlight-mint   { color: var(--hl-mint); }
.highlight-coral  { color: var(--hl-coral); }
.highlight-lilac  { color: var(--hl-lilac); }

/* 다크모드: strip 자체가 형광 효과. 동일 hex */
```

## 2. 시맨틱 5색 매핑 (K12 정본)

```
.highlight-pink   — 가치·실속 ("가볍다")
.highlight-green  — 성능·가능성 ("엄청난 가능성")
.highlight-orange — 액션 ("언제 어디서나")
.highlight-blue   — 도구·앱 ("앱과 호환됩니다")
.highlight-purple — 직관·이해 ("직관적으로")
```

## 3. SVG 손글씨 underline (5색)

```html
<em class="underline pink">
  배움을
  <svg class="underline-illustration" viewBox="0 0 281 15">
    <clipPath id="underline-clip-path-pink">
      <path d="M276.313 ... Z"/>
    </clipPath>
    <path class="underline-path" pathLength="1"
          d="M6.57,8.17c107.81-3.26,287-.74,291.81-.74"
          stroke="var(--hl-pink)" stroke-width="6" fill="none"
          clip-path="url(#underline-clip-path-pink)"/>
  </svg>
</em>
```

```css
.underline { position: relative; }
.underline svg {
  position: absolute; bottom: -4px; left: 0; right: 0;
  mix-blend-mode: multiply;   /* 라이트 */
  /* mix-blend-mode: lighten; */  /* 다크 */
}
```

## 4. gradient-text 5단위 (apple-intelligence)

상세 5단위 적용 패턴: `→ references/axis-2-typography.md §5`

```css
.gradient-text {
  background: linear-gradient(90deg,
    #fd9700 0%, #f40 28%, #ff2469 49%, #c65cff 78%, #0092ff 100%);
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## 5. 5스톱 multi-stop 그라디언트 (H5 — 페이지당 1회)

```html
<svg width="0" height="0" style="position:absolute">
  <defs>
    <linearGradient id="ai-gradient" gradientUnits="userSpaceOnUse">
      <stop offset=".09" stop-color="#fd9700" />
      <stop offset=".28" stop-color="#f40" />
      <stop offset=".49" stop-color="#ff2469" />
      <stop offset=".78" stop-color="#c65cff" />
      <stop offset="1"   stop-color="#0092ff" />
    </linearGradient>
  </defs>
</svg>

<!-- 사용 -->
<svg><rect fill="url(#ai-gradient)" /></svg>
```

## 6. 강도 LV 매트릭스

| LV | 형광펜 | gradient-text | 5스톱 |
|---|---|---|---|
| LV1 | ✗ | ✗ | ✗ |
| LV2 | 1~2색 | 옵션 | ✗ |
| **LV3 ★디폴트** | 5색 활용 | 5단위 활용 | 1회 |

## 7. 금기

```
❌ text-decoration: underline (H12 위반·SVG path만)
❌ <mark> 태그 직접 (스타일링 ✗)
❌ 형광펜 6색 이상 (5색 카탈로그 강제)
❌ gradient-text를 본문에 (Hero·Eyebrow·Span·List·Inline 5단위만)
```
