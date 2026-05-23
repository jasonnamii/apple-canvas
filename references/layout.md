# Layout — 통합 정본 (v260523.4)

> 통합 대상: layout-bento-fullsection.md, layout-compare-matrix.md, layout-grid-12col.md

> 원본 verbatim 보존·헤더만 재정렬.



---

## 1. Bento Full Section (← `layout-bento-fullsection.md` 원본)


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


---

## 2. Compare Matrix (← `layout-compare-matrix.md` 원본)


## 정의
iPhone Compare·Apple Arcade 페이지 핵심 패턴. 제품·기능 비교를 **dd-compare-grid** 매트릭스로 시각화.

## 구조
```html
<section class="compare-section">
  <table class="dd-compare-grid">
    <thead>
      <tr>
        <th></th>
        <th class="compare-column"><strong>iPhone 17 Pro</strong></th>
        <th class="compare-column"><strong>iPhone 17</strong></th>
        <th class="compare-column"><strong>iPhone 16</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr class="feature-group">
        <td class="compare-rowheader">디스플레이</td>
        <td class="cell-item">6.9″ Super Retina XDR</td>
        <td class="cell-item">6.3″ Super Retina XDR</td>
        <td class="cell-item">6.1″ Super Retina XDR</td>
      </tr>
    </tbody>
  </table>
</section>
```

## 핵심 규칙
1. **첫 열 = 행 헤더** (`compare-rowheader`)
2. **각 열 = 비교 대상** (`compare-column`)
3. **셀 = cell-item** (전체 통일 클래스)
4. **feature-group** = 기능 그룹별 묶음 (디스플레이·칩·카메라 등)
5. **Sticky Compare Header** — 표 헤더가 스크롤 중 화면 상단 고정
6. **CTA 셀** — 가격·구매 링크 cell-item에 button 통합 가능

## CSS 핵심
```css
.dd-compare-grid { width: 100%; border-collapse: separate; border-spacing: 0; }
.dd-compare-grid th { position: sticky; top: 0; background: var(--bg); z-index: 10; }
.compare-column { padding: 16px; text-align: center; font-weight: 700; }
.cell-item { padding: 16px; border-top: 1px solid rgba(0,0,0,0.1); text-align: center; }
.compare-rowheader { font-weight: 700; text-align: left; }
.feature-group td { background: var(--bg-alt); }
```

## 변형
- **Big Compare** — Apple Arcade 4752 cell처럼 대규모
- **Mini Compare** — 3-4열 작은 비교 (제품 라인업)
- **체크/X 시각화** — `cell-item` 안에 `<svg>` 체크·엑스


---

## 3. 12-col Grid (← `layout-grid-12col.md` 원본)


## 12열 그리드
```html
<div class="row">
  <div class="column large-8 large-offset-2 medium-12 small-12">
    <h2>…</h2>
  </div>
</div>
```

| 클래스 | 의미 |
|---|---|
| `large-N` | 데스크톱 (≥1068px) N열 차지 |
| `large-offset-N` | 데스크톱 N열 좌측 오프셋 |
| `medium-N` | 태블릿 (734~1067px) N열 |
| `medium-offset-N` | 태블릿 오프셋 |
| `small-N` | 모바일 (≤733px) N열 |
| `small-12` | 모바일 풀너비 디폴트 |

## 풀블리드
컨테이너 경계 무시하고 화면 끝까지 확장.

```html
<section class="media-full-bleed">
  <video src="…" class="full-bleed-video"></video>
</section>
```

```css
.media-full-bleed {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}
```

## 중단점 (애플 표준)
```css
@media (max-width: 733px) { /* small / mobile */ }
@media (min-width: 734px) and (max-width: 1067px) { /* medium / tablet */ }
@media (min-width: 1068px) { /* large / desktop */ }
@media (min-width: 1441px) { /* xlarge */ }
```

## CSS 핵심
```css
.row { display: grid; grid-template-columns: repeat(12, 1fr); gap: 16px; max-width: 1440px; margin: 0 auto; padding: 0 24px; }
.column.large-1 { grid-column: span 1; }
/* … large-2 ~ large-12 */
.column.large-offset-1 { grid-column-start: 2; }
@media (max-width: 733px) {
  .column[class*="small-"] { grid-column: span 12; }
}
```