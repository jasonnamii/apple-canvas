# Mode — Bento (1페이지 한장)

> KPI·요약·1pager. Bento mosaic 풀섹션. 톤믹스 (dark + bordered + colored).

## 사용 케이스
- KPI 한장
- 분석 한장
- 마케팅 한장
- 1pager

## 디폴트 매핑
- TONE: Light (또는 Dual)
- STRUCTURE: Page (단일) + Block (Bento 셀들)
- EMPHASIS: LV3 풀강

## 골격

```html
<section class="bento-grid grid-12">
  <!-- Hero (큰 셀) -->
  <div class="bento-cell tone-dark large-8">
    <p class="typography-eyebrow">Q4 KPI</p>
    <h1 class="typography-hero gradient-text">전년 대비 6.7배.</h1>
  </div>
  
  <!-- Big Number 셀들 -->
  <div class="bento-cell tone-bordered large-4">
    <p class="typography-eyebrow">매출</p>
    <p class="big-number">1000<span class="unit">억</span></p>
  </div>
  
  <div class="bento-cell tone-colored large-4" style="background: var(--accent-pink)">
    <p class="typography-eyebrow">신규고객</p>
    <p class="big-number">3.7배</p>
  </div>
  
  <div class="bento-cell tone-dark large-8">
    <p class="typography-eyebrow">하이라이트</p>
    <h2 class="typography-section">
      <span class="highlight-wrapper highlight-pink">압도적 성장.</span>
      <span class="highlight-wrapper highlight-mint">검증된 수익 모델.</span>
    </h2>
  </div>
</section>
```

## 면분할 권장 (Axis 3)

- 6분할 (8/4 + 4/4/4) — Hero + 3 cards
- 4분할 (3/9 + asymmetric) — airpods 패턴
- 9분할 (3×3) — 풀모자이크

## 발현 강제

- 형광펜 1색 이상 (LV3)
- gradient-text 1단위 이상 (Hero)
- Big-Number 2개 이상

## 금기

```
❌ 균등 4분할만 (다양성 ✗)
❌ 모든 셀 같은 색 (tone-mix 강제)
❌ Big-Number 0개 (KPI Bento 본질 위배)
```
