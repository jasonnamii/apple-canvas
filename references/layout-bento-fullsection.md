# Layout — Bento 풀섹션

## 정의
Mac Studio·Mac Mini 페이지 핵심 패턴. **풀너비 섹션 안에 4~5개 박스를 균형 배치**.

## 구조
```html
<section class="bento-section">
  <div class="bento-grid">
    <div class="bento-item tile-rounded large-7">
      <div class="bento-content">
        <h3 class="banner-card-headline">…</h3>
        <p class="body-reduced">…</p>
      </div>
      <picture class="bento-asset">…</picture>
    </div>
    <div class="bento-item tile-rounded large-5">…</div>
    <div class="bento-item tile-rounded large-4">…</div>
    <div class="bento-item tile-rounded large-4">…</div>
    <div class="bento-item tile-rounded large-4">…</div>
  </div>
</section>
```

## 핵심 규칙
1. **풀섹션 = 화면 너비 80~100%** (max-width 1440px)
2. **4~5박스** (3박스는 단순함, 6+은 산만)
3. **박스 크기 비대칭** (`large-7 + large-5` 또는 `large-4 × 3`)
4. **tile-rounded** (라운드 32~40px)
5. **각 박스 = 1주제** (Hero/Asset + Headline + Body + 옵션 CTA)
6. **bg-alt 활용** — 박스 안 배경을 살짝 다르게(`#F5F5F7` 라이트 / `#1D1D1F` 다크)

## CSS 핵심
```css
.bento-section { padding: 80px 24px; max-width: 1440px; margin: 0 auto; }
.bento-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 16px; }
.bento-item { padding: 32px; border-radius: var(--radius-tile, 36px); background: var(--bg-alt); }
.bento-item.large-7 { grid-column: span 7; }
.bento-item.large-5 { grid-column: span 5; }
.bento-item.large-4 { grid-column: span 4; }
@media (max-width: 768px) {
  .bento-item { grid-column: span 12 !important; }
}
```

## 변형
- **Card-Set** = bento-grid의 변형 (`card-set` 클래스, 카드 통일 크기)
- **Gallery-Grid** = bento-grid의 이미지 중심 변형 (`gallery-grid + gallery-item`)
- **Feature-Card** = 큰 박스 1개 + 작은 박스 N개

## 안티패턴 (❌)
- 박스가 너무 작음(<280px) → 카드 그리드로 변질
- 모든 박스 같은 크기 → 단조로움
- 라운드 없음 → 애플 톤 X
