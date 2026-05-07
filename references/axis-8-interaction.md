# Axis 8 — Interaction (인터랙션 SSOT)

## 1. colornav (iMac 7색 — `--color-index` 패턴)

```html
<div class="colornav colornav-neutral">
  <ul class="colornav-items" role="radiogroup" aria-label="iMac 색상 선택">
    <li class="colornav-item" style="--color-index: 0">
      <input type="radio" data-viewer-value="blue" data-index="0" checked>
      <label aria-hidden="true">
        <span class="colornav-swatch viewer-colornav-swatch-blue"></span>
      </label>
    </li>
    <!-- purple, pink, orange, yellow, green, silver -->
  </ul>
</div>
```

## 2. AAP (All-Access-Pass · 갤러리)

```html
<div class="aap-bento-gallery" data-component="AAPGallery">
  <div class="aap-viewer">
    <div class="aap-frame" data-aap-color="blue"><img src="..."></div>
    <div class="aap-frame" data-aap-color="purple"><img src="..."></div>
  </div>
</div>
```

## 3. BOC (Build-Of-Compatibility · 토글)

```html
<div class="boc-toggle" role="tablist">
  <button role="tab" aria-selected="true">기본</button>
  <button role="tab" aria-selected="false">프로</button>
</div>
```

## 4. Tile (호버)

```css
.tile {
  transition: transform var(--dur-mid) var(--ease-apple),
              box-shadow var(--dur-mid) var(--ease-apple);
}
.tile:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-vivid);
}
```

## 5. backdrop-filter (sticky 글래스)

```css
.header-sticky {
  position: sticky; top: 0;
  background: rgba(255,255,255,0.72);
  backdrop-filter: blur(10px);
}
```

## 6. 44pt 터치 (H7·9회 박제)

```css
.btn, .tab, .tile-link {
  min-width: 44px;
  min-height: 44px;
}
```

## 7. art direction `<picture>` (507회 박제)

```html
<picture>
  <source media="(min-width: 1069px)" srcset="...desktop.jpg">
  <source media="(min-width: 735px)"  srcset="...tablet.jpg">
  <source media="(max-width: 734px)"  srcset="...mobile.jpg">
  <img src="...desktop.jpg" alt="">
</picture>
```

## 8. ARIA (H7)

```html
<button aria-label="다음 슬라이드">→</button>
<section aria-labelledby="hero-headline">
  <h1 id="hero-headline">...</h1>
</section>
```
