# Axis 2 — Typography (타이포 SSOT)

> 16스케일 + Sticky Chip Hero PT(200px+) + 빅넘버 + gradient-text 5단위.

## 1. 16-Scale

```css
:root {
  --t-eyebrow:        12px;   /* eyebrow */
  --t-eyebrow-large:  14px;
  --t-body-small:     14px;
  --t-body:           17px;
  --t-body-large:     19px;
  --t-callout:        21px;
  --t-headline-small: 24px;
  --t-headline:       28px;
  --t-headline-large: 32px;
  --t-section:        40px;
  --t-section-large:  48px;
  --t-hero-small:     56px;
  --t-hero:           64px;
  --t-hero-large:     80px;
  --t-hero-xl:        96px;
  --t-hero-super:     200px;  /* PT-Monolith */
}
```

## 2. 헤드라인 4단 위계 (H6)

```html
<p class="typography-eyebrow">자그마치, 18배.</p>           <!-- 12~14px -->
<h1 class="typography-hero">이미지 없이도, 강력하게.</h1>     <!-- 64~96px -->
<h2 class="typography-section">강약의 구조.</h2>             <!-- 40~48px -->
<p class="typography-body">본문은 17~19px.</p>               <!-- 17~19px -->
```

## 3. Sticky Chip Hero (MacBook Pro 패턴 — PT 빅타이포)

```html
<p data-focus-expression='{"expression":"a0t + 200vh","anchors":[".sticky-container"]}'
   class="mx-headline typography-headline-super large-10 large-offset-1">
  M5. M5 Pro. M5 Max.
</p>
<p data-focus-expression='{"expression":"a0t + 300vh","anchors":[".sticky-container"]}'
   class="typography-eyebrow-super mx-chip-stat">
  M1 시리즈 대비<br/>최대 8배 더 빠른 AI 성능
</p>
```

## 4. Big-Number (iPad Pro 9개·Mac Studio spec)

```html
<div class="big-number-stack">
  <p class="typography-eyebrow">디스플레이</p>
  <p class="big-number">1000<span class="unit">니트</span></p>
  <p class="typography-body">full screen brightness</p>
</div>
```

권장 hex: `1000·1600·2,000,000:1·6.7배·6.0배·3.7배·4K·100만 개·10-120Hz`

## 5. gradient-text 5단위 (apple-intelligence 8회 발현)

```html
<!-- 단위 1: Hero h1 -->
<h1 class="hero-headline gradient-text">Apple Intelligence</h1>

<!-- 단위 2: Eyebrow h2 -->
<h2 class="gradient-text typography-eyebrow">소통</h2>

<!-- 단위 3: 인라인 span -->
<h2>강력한 역량과 함께하는 강력한&nbsp;<span class="gradient-text">개인정보 보호 기능.</span></h2>

<!-- 단위 4: 리스트 전체 div -->
<div class="gradient-text privacy-list typography-privacy-list">
  <ul><li>...</li></ul>
</div>

<!-- 단위 5: 헤드라인 안 부분 강조 -->
<h2 class="header-headline"><span class="gradient-text">Apple Intelligence</span>를 경험해 보고 싶다면,</h2>
```

```css
.gradient-text {
  background: var(--ai-gradient);
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
```

## 6. 정렬

```css
.headline-asymmetric {
  text-align: left;
  max-width: 12ch;
}
.text-balance { text-wrap: balance; }   /* 옵션 */
```

## 7. 금기

```
❌ 16스케일 외 임의 size (예: 22px·30px)
❌ 헤드라인-바디 사이 강약 ✗ (최소 2.5배 차이)
❌ font-variation-settings·oklch 등 미세결 신기능 (Apple 미사용)
```
