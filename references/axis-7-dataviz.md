# Axis 7 — Data Viz (시각화 SSOT)

## 1. Big-Number Stack (iPad Pro 9개 박제)

```html
<div class="big-number-stack">
  <p class="typography-eyebrow">디스플레이</p>
  <p class="typography-headline-super big-number">1000<span class="unit">니트</span></p>
  <p class="typography-body footnote">full screen brightness</p>
</div>
```

```css
.big-number {
  font-size: var(--t-hero-super);   /* 200px */
  font-weight: 700;
  letter-spacing: -0.04em;
  color: var(--accent-pink);   /* 또는 gradient-text */
}
.big-number .unit { font-size: 0.4em; opacity: 0.7; margin-left: 0.2em; }
```

박제 빅넘버 카탈로그:
```
1000 니트         (full screen brightness)
1600 니트         (HDR peak)
2,000,000:1      (contrast ratio)
6.7배            (M5 CPU vs M1)
6.0배            (GPU)
3.7배            (Neural Engine)
4K ProRes        (5 streams)
100만 개 이상     (App Store apps)
10-120Hz         (ProMotion range)
```

## 2. Spec 풀 패턴 (Mac Studio)

```html
<dl class="spec-list">
  <dt>최대 코어</dt>
  <dd>32코어 CPU</dd>
  <dt>GPU</dt>
  <dd>최대 80코어 GPU</dd>
  <dt>메모리 대역폭</dt>
  <dd>819GB/s</dd>
</dl>
```

## 3. Compare Matrix (5컬럼)

```html
<table class="compare-matrix">
  <thead>
    <tr><th></th><th>iPhone Air</th><th>17 Pro</th><th>Pro Max</th><th>SE</th></tr>
  </thead>
  <tbody>
    <tr><th>디스플레이</th><td>6.1"</td><td>6.3"</td><td>6.7"</td><td>4.7"</td></tr>
  </tbody>
</table>
```

```css
.compare-matrix { width: 100%; border-collapse: collapse; }
.compare-matrix th, .compare-matrix td {
  padding: 24px;
  border-bottom: 1px solid #d2d2d7;
  text-align: center;
}
.compare-matrix thead th {
  background: var(--bg-alt);
  font-weight: 700;
}
```

## 4. 정보집약 강약 (environment 박제)

```
강 (1단계) — Big-Number 200px+ vivid
중 (2단계) — Section headline 40~48px
약 (3단계) — Body 17~19px
초약 (4단계) — Footnote 12~14px opacity 0.6
```

## 5. Footnote 시스템

```html
<sup data-footnote="footnote-1"><a href="#footnote-1">1</a></sup>
...
<aside class="footnotes">
  <p id="footnote-1">1. M1 시리즈 대비 측정.</p>
</aside>
```

## 6. 금기

```
❌ MS워드 회색 표 (강약 ✗·죽은선)
❌ 빅넘버 17px (200px+ 강제)
❌ 차트에 12색+ (3~5색 권장)
```
