# Layout — Compare 매트릭스

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
