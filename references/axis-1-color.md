# Axis 1 — Color (컬러 SSOT)

> 30페이지 박제 hex 497개 통합. 비비드 풀채도(S≥85%) 강제.

## 1. Vivid Accent (양쪽 동일 hex)

```css
:root[data-theme="light"], :root[data-theme="dark"] {
  --accent-blue:   #0092ff;   /* S=100 L=50 */
  --accent-pink:   #FF1F6F;   /* S=100 L=56 */
  --accent-yellow: #FFCB05;   /* S=100 L=51 */
  --accent-green:  #00C853;   /* S=100 L=39 */
  --accent-orange: #FF7A1A;   /* S=100 L=54 */
  --accent-purple: #C65CFF;   /* S=100 L=68 */
  --accent-mint:   #22D3A4;   /* S=72 L=48 */
}
```

다크에서만 일부 보정 (시인성):
```css
:root[data-theme="dark"] {
  --accent-blue:  #3DB3FF;   /* #0092ff 너무 어두움 → ↑ */
  --accent-green: #4DD964;
}
```

## 2. iMac 7-Color (양쪽 풀채도)

```css
--imac-blue:   #3DB3FF;
--imac-purple: #C65CFF;
--imac-pink:   #FF1F6F;
--imac-orange: #FF7A1A;
--imac-yellow: #FFCB05;
--imac-green:  #4DD964;
--imac-silver: #4a4a52;  /* v: contrast↑ light. dark: #c8c8d0 */
```

## 3. 형광펜 5색 (`.hl` rounded-pill — 단일 정본)

```css
/* 비비드 풀채도. 라이트·다크 동일 fill·--hl-ink 검정 텍스트 강제. */
--hl-yellow: #F0F921;   /* 기본·강조 */
--hl-green:  #C6F432;   /* 성능·가능성 */
--hl-c8:     #07ED21;   /* C8 신호·Cre8orClub */
--hl-pink:   #FF7AB6;   /* 가치·핵심 */
--hl-blue:   #6FB0FF;   /* 도구·연결 */
--hl-ink:    #0A0A0C;   /* 형광펜 위 텍스트 — 라이트·다크 공통 */

/* strip 방식(linear-gradient 50%) 폐기. .hl 클래스 = 풀 fill + padding + border-radius */
```

상세 사용법: `→ references/axis-6-emphasis.md`

## 4. Apple Intelligence 5스톱 그라디언트

```css
--ai-gradient: linear-gradient(90deg,
  #fd9700 0%,
  #f40 28%,
  #ff2469 49%,
  #c65cff 78%,
  #0092ff 100%);
```

추가 박제 그라디언트 (Premium Restraint = 페이지당 5스톱 1회만):
- Mac CTO 2-stop: `#f8ab5e → #f3695f`
- UK Financing 2-stop: `#08827c → #09b54e`

## 5. Base · Shadow · Glow

```css
:root[data-theme="light"] {
  --bg: #FFFFFF; --bg-alt: #F5F5F7;
  --text: #1D1D1F; --headline: #000000;
  --text-secondary: #2c2c34;   /* v: contrast↑ for visibility */
  --text-tertiary:  #5a5a62;   /* v: contrast↑ for visibility */
  --shadow-card: 0 8px 24px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04);
  --shadow-vivid: 0 12px 32px rgba(255,31,111,0.18);
}
:root[data-theme="dark"] {
  --bg: #0a0a0f; --bg-alt: #1D1D1F;
  --text: #F5F5F7; --headline: #FFFFFF;
  --text-secondary: #c8c8d0;   /* v: contrast↑ for visibility */
  --text-tertiary:  #9a9aa2;   /* v: contrast↑ for visibility */
  --glow-pink:   0 0 32px rgba(255,31,111,0.5);
  --glow-yellow: 0 0 32px rgba(255,203,5,0.5);
  --glow-blue:   0 0 32px rgba(61,179,255,0.5);
  --glow-green:  0 0 32px rgba(77,217,100,0.5);
  --shadow-card: 0 12px 32px rgba(0,0,0,0.6);
}
```

## 6. C8 신호색 (Cre8orClub)

```css
:root[data-theme="light"], :root[data-theme="dark"] {
  --c8:      #07ED21;   /* Cre8orClub neon green */
  --c8-soft: #4DFF5E;   /* lifted for dark surfaces */
  --c8-deep: #06B81A;   /* anchored for light surfaces */
  --c8-ink:  #04140A;   /* paired text on c8 fill */
}
```

- 브랜드 컨텍스트(Cre8orClub) 한정 사용
- 솔리드 1개로만 사용·gradient·5스톱 혼합 ✗
- 다크에서는 `--c8` 또는 `--c8-soft` 사용

## 7. 금기

```
❌ #0071E3·#00845A·#2997FF·#30D158·#FF9F0A·#FF375F (S<70% 차분 시스템컬러)
❌ 카드 배경 #E~F + 0~9 (파스텔 워시·S<30·L>90)
❌ 라이트=차분 / 다크=비비드 이원화 (양쪽 동일 hex)
```
