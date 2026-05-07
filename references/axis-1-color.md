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
--imac-silver: #86868B;  /* light: #86868B, dark: #A1A1A6 */
```

## 3. 형광펜 5색 (K12 박제·strip 패턴)

```css
--hl-pink:   #ff5e8a;   /* highlight-pink */
--hl-yellow: #ffd93d;   /* highlight-yellow */
--hl-mint:   #4ecdc4;   /* highlight-mint/green */
--hl-coral:  #ff8a5b;   /* highlight-coral/orange */
--hl-lilac:  #b980f0;   /* highlight-lilac/purple */

/* 또는 K12 정본 5색: */
/* pink #ff2469·green #09b54e·blue #0092ff·purple #c65cff·orange #fd9700 */

--hl-strip: linear-gradient(180deg, transparent 55%, currentcolor 55%);
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
  --shadow-card: 0 8px 24px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04);
  --shadow-vivid: 0 12px 32px rgba(255,31,111,0.18);
}
:root[data-theme="dark"] {
  --bg: #0a0a0f; --bg-alt: #1D1D1F;
  --text: #F5F5F7; --headline: #FFFFFF;
  --glow-pink:   0 0 32px rgba(255,31,111,0.5);
  --glow-yellow: 0 0 32px rgba(255,203,5,0.5);
  --glow-blue:   0 0 32px rgba(61,179,255,0.5);
  --glow-green:  0 0 32px rgba(77,217,100,0.5);
  --shadow-card: 0 12px 32px rgba(0,0,0,0.6);
}
```

## 6. 금기

```
❌ #0071E3·#00845A·#2997FF·#30D158·#FF9F0A·#FF375F (S<70% 차분 시스템컬러)
❌ 카드 배경 #E~F + 0~9 (파스텔 워시·S<30·L>90)
❌ 라이트=차분 / 다크=비비드 이원화 (양쪽 동일 hex)
```
