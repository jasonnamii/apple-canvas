# Motion — Sticky·Pin

## 1. Sticky Container

스크롤 중 콘텐츠 고정, 배경만 흐르게.

```html
<section class="sticky-container">
  <div class="content-sticky-container">
    <h2 class="hero-tagline">고정된 헤드</h2>
  </div>
  <div class="scroll-content">
    <p>이 텍스트는 흐릅니다…</p>
  </div>
</section>
```

```css
.sticky-container { position: relative; min-height: 200vh; }
.content-sticky-container { position: sticky; top: 0; height: 100vh; display: flex; align-items: center; justify-content: center; }
```

## 2. Pin-Offset Positioning

미디어를 특정 좌표에 고정.

```html
<div class="pin-bottom-center">
  <picture>…</picture>
</div>
```

| 클래스 | 위치 |
|---|---|
| `pin-top-left` | 상단 좌측 |
| `pin-top-center` | 상단 중앙 |
| `pin-top-right` | 상단 우측 |
| `pin-bottom-center` | 하단 중앙 |
| `pin-offset` | data-offset 속성으로 커스텀 |

```css
[class^="pin-"] { position: absolute; }
.pin-top-center { top: 0; left: 50%; transform: translateX(-50%); }
.pin-bottom-center { bottom: 0; left: 50%; transform: translateX(-50%); }
```

## 3. Viewport Anchor Animation

특정 섹션 기준 애니메이션 동기화.

```html
<section class="anchor-target" data-focus-expression='{"expression":"a0t","anchors":[".subsection-1",".subsection-2"]}'>
  …
</section>
```

`.subsection-*` 진입 시 자동 동기.

## 4. Sticky Compare Section Header

비교표 헤더 고정.

```html
<section class="compare-section css-sticky">
  <table class="dd-compare-grid">
    <thead>…</thead> <!-- 자동 sticky -->
  </table>
</section>
```

```css
.compare-section.css-sticky thead { position: sticky; top: 0; z-index: 10; background: var(--bg); }
```

## 5. Background Parallax

배경 이미지·비디오만 천천히 이동.

```html
<section data-inline-media-plugins="background-parallax">
  <picture class="bg-parallax">…</picture>
  <div class="content">…</div>
</section>
```

## Reduced-Motion 분기 (필수)
```css
@media (prefers-reduced-motion: reduce) {
  .sticky-container { min-height: auto; }
  .content-sticky-container { position: static; height: auto; }
  [data-inline-media-plugins*="parallax"] { transform: none !important; }
}
```
