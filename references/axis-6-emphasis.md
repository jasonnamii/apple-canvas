# Axis 6 — Emphasis (강조 SSOT)

> 형광펜 5색 (`.hl` rounded-pill 캡슐) + SVG 손글씨 underline 5색 + gradient-text + 5스톱 그라디언트 마스터.

## 0. 105% 룰 (정본·위반 = FAIL)

| 항목 | 값 | 비고 |
|---|---|---|
| 알약 높이 | font-size × **1.05** 정확 | line-height: 1.05 강제 |
| 세로 padding | **0** | padding-block: 0 |
| 가로 padding | `.hl`=6px / `.hl-tight`=4px / `.hl-block`=8px | px 고정·em ✗ |
| display | `inline` 강제 | inline-block ✗ (줄바꿈 분리됨) |
| box-decoration-break | `clone` 필수 | 멀티라인 양 끝 둥글게 |
| SVG underline 높이 | `height: 1.05em` | 형광펜과 동일 비율 |
| 검증 | DevTools에서 알약 박스 = 글자 박스 × 1.05 | 위반 시 FAIL |

**❌ WRONG**
```css
.hl { padding: 0.2em 0.6em; line-height: 1.5; }      /* em 폭발·line-height 늘어남 */
.hl { padding: 4px 6px; display: inline-block; }     /* 세로 padding·줄바꿈 깨짐 */
```

**✅ CORRECT**
```css
.hl { padding: 0 6px; padding-block: 0; line-height: 1.05; display: inline;
      box-decoration-break: clone; -webkit-box-decoration-break: clone; }
```

## 1. 형광펜 5색 (`.hl` rounded-pill — 단일 정본)

**strip 방식(글자 절반만 fill) 폐기.** 풀 fill + padding + border-radius로 단어 전체를 둥근 사각형 캡슐로 감싼다. **본문·헤드라인·히어로 전 위계에서 사용 ○.**

**v2.1 — 105% 룰 (위반 = FAIL).** 형광펜 알약 높이 = **문자 크기의 105% 정확**. 가로는 px 고정 캡(`.hl`=6px / `.hl-block`=8px / `.hl-tight`=4px)·세로 padding 0. 알약 높이는 `line-height: 1.05`로 강제. font-size가 14px이든 200px이든 알약은 글자 위아래로 각각 2.5%만 비집고 나옴. em·% 기반 padding은 큰 글자에서 폭발하므로 사용 ✗.

**왜 105%인가** — 100%면 글자 디센더(j·g·y·p)와 어센더(b·d·h·k·l)가 알약 밖으로 비집고 나옴. 110%+면 형광펜이 텍스트보다 도드라져 위계 역전. 105%가 "글자가 아슬아슬하게 알약 안에 들어오면서 형광펜은 보조 강조 역할"을 유지하는 임계값.

```css
:root {
  /* HIGHLIGHT PEN — 비비드 풀채도. 라이트·다크 동일 fill·검정 텍스트.
     box-decoration-break: clone — 줄바꿈 시 양 끝 둥글게.
     절반 fill·linear-gradient 50% 방식 ✗. */
  --hl-yellow:  #F0F921;   /* 기본·강조 */
  --hl-green:   #C6F432;   /* 성능·가능성 */
  --hl-c8:      #07ED21;   /* C8 신호·Cre8orClub */
  --hl-pink:    #FF7AB6;   /* 가치·핵심 */
  --hl-blue:    #6FB0FF;   /* 도구·연결 */
  --hl-ink:     #0A0A0C;   /* 형광펜 위 텍스트 — 라이트·다크 공통 */
}

.hl {
  --hl-color: var(--hl-yellow);
  background-color: var(--hl-color);
  color: var(--hl-ink);
  -webkit-text-fill-color: var(--hl-ink);
  padding: 0 6px;
  border-radius: 999px;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  font-weight: inherit;
  /* === v2.1 105% 룰 (위반 = FAIL) === */
  line-height: 1.05;          /* 알약 높이 = 문자크기의 105% */
  padding-block: 0;           /* 세로 패딩 0 — 105% 보장 */
  display: inline;            /* inline-block ✗ — 줄바꿈 시 알약 분리 */
  /* 다크모드에서도 fill 동일 — 투명·opacity 처리 ✗ */
}
.hl-yellow { --hl-color: var(--hl-yellow); }
.hl-green  { --hl-color: var(--hl-green); }
.hl-c8     { --hl-color: var(--hl-c8); }
.hl-pink   { --hl-color: var(--hl-pink); }
.hl-blue   { --hl-color: var(--hl-blue); }

/* tight — 작은 폰트·인라인 본문용 */
.hl-tight { padding: 0 4px; border-radius: 999px; }
/* block — 블록 헤드라인·히어로용 */
.hl-block { padding: 0 8px; border-radius: 999px; }
```

## 2. 사용 — 본문·헤드·히어로 전 위계

```html
<!-- 히어로 빅타이포 -->
<h1 class="h2">
  <span class="hl hl-yellow hl-block">Apple이</span> 디자인하다.<br>
  배움을 염두에 두다.
</h1>

<!-- 본문 인라인 -->
<p>이 제품은 <span class="hl hl-pink hl-tight">놀라운 성능</span>을 제공합니다.</p>

<!-- 헤드라인 -->
<h3>다음 단계로 <span class="hl hl-c8">가볍게</span> 이동하세요.</h3>
```

## 3. 시맨틱 5색 매핑 (K12 정본·권고)

```
.hl-pink   — 가치·핵심 ("가볍다", "배움을")
.hl-green  — 성능·가능성 ("엄청난 가능성")
.hl-c8     — C8 신호·Cre8or 액션
.hl-blue   — 도구·연결 ("앱과 호환됩니다")
.hl-yellow — 기본·강조 ("Apple이")
```

→ "예쁜 색"이 아니라 *역할*로 선택. 매핑은 강제 ✗ — 디자인 의도에 따라 자유 운용.

## 4. SVG 손글씨 underline (5색)

형광펜과 **별도** 강조 시스템. K12 페이지의 "배움을" 분홍 손글씨 밑줄이 이 패턴. 형광펜 = 단어 감싸기·underline = 글 아래 손글씨 밑줄.

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
.underline { position: relative; line-height: 1.05; }
.underline svg {
  position: absolute; bottom: -4px; left: 0; right: 0;
  height: 1.05em;             /* === v2.1 105% 룰 — 형광펜과 동일 비율 === */
  mix-blend-mode: multiply;   /* 라이트 */
  /* mix-blend-mode: lighten; */  /* 다크 */
}
```

## 5. gradient-text 5단위 (apple-intelligence)

상세 5단위 적용 패턴: `→ references/axis-2-typography.md §5`

```css
.gradient-text {
  background: linear-gradient(90deg,
    #fd9700 0%, #f40 28%, #ff2469 49%, #c65cff 78%, #0092ff 100%);
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## 6. 5스톱 multi-stop 그라디언트 (H5 — 페이지당 1회)

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

## 7. 강도 LV 매트릭스

| LV | 형광펜 `.hl` | SVG underline | gradient-text | 5스톱 |
|---|---|---|---|---|
| LV1 | ✗ | ✗ | ✗ | ✗ |
| LV2 | 1색 | 옵션 | 옵션 | ✗ |
| **LV3 ★디폴트** | 1~2색 | 옵션 | 5단위 활용 | 1회 |
| LV4 | 2~3색 | 옵션 | 5단위 활용 | 1회 |

## 8. 금기

```
❌ linear-gradient(180deg, transparent 55%, currentcolor 55%) — strip 방식 ✗
❌ .highlight-wrapper / .highlight-pink / .highlight-mint / .highlight-coral / .highlight-lilac 등 구 클래스명 ✗ → .hl로 단일 통일
❌ opacity·color-mix 톤다운 ✗ — 라이트·다크 동일 비비드 강제
❌ box-decoration-break 누락 ✗ — 줄바꿈 양 끝 안 둥글어짐
❌ 글자색 본문색 유지 ✗ — 반드시 --hl-ink (#0A0A0C) 검정 강제
❌ text-decoration: underline (H12 위반·SVG path만)
❌ <mark> 태그 직접 (스타일링 ✗)
❌ 형광펜 6색 이상 (5색 카탈로그 강제)
❌ gradient-text를 본문에 (Hero·Eyebrow·Span·List·Inline 5단위만)
❌ em 단위 padding (큰 글자에서 가로폭·세로폭 폭발) → px 고정 강제
❌ 세로 padding > 0 (line-height 누적·줄간격 깨짐) → 세로 0 강제
```
