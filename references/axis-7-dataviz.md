# Axis 7 — Data Viz (시각화 SSOT)

> 이 파일은 빅넘버·spec·COMPARE·TABLE의 정본입니다. 나머지 6패밀리는 viz-*.md로 분리되어 있습니다.

## 0. 8대 시각문법 패밀리 인덱스 (SSOT)

apple-canvas는 8패밀리를 모두 자기 미감으로 보유합니다. 정보 유형에 맞는 패밀리를 골라 해당 파일을 엽니다.

| 패밀리 | 정보 유형 | 컴포넌트 | 정본 파일 |
|---|---|---|---|
| FLOW | 순서대로 흐르는 단계·절차 | process-step-rail · decision-flowchart · sequence-pipeline · 순환6노드 · metaloop | `viz-flow.md` |
| HIERARCHY | 상하 포함·위계 | pyramid-stack · layered-architecture · tree-org · nested-containment | `viz-hierarchy.md` |
| COMPARE | 같은 기준으로 견주기 | compare-matrix · check-cross-grid · two-by-two · spec-keyvalue · before-after | `axis-7-dataviz.md` (이 파일) |
| METRIC | 숫자·그래프 | big-number · bar · line · donut · gauge · funnel | big-number는 이 파일 §1, 차트는 `viz-metric-charts.md` |
| RELATION | 무엇이 무엇과 연결 | hub-spoke · venn · ecosystem-map · 순환6노드 | `viz-relation.md` |
| TIME | 시간 축·변화 | timeline · roadmap · changelog · gantt | `viz-time.md` |
| DISTRIBUTION | 2축 위 위치·농도·평가 | positioning-map · heatmap · scorecard-rag · bubble-plot | `viz-distribution.md` |
| TABLE | 행·열 구조화 조회 | data-table-sorted · definition-glossary | `axis-7-dataviz.md` (이 파일) |

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
  letter-spacing: 0;
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
  border-bottom: 1px solid var(--imac-silver);
  text-align: center;
}
.compare-matrix thead th {
  background: var(--accent-blue);   /* sticky 비비드 헤더 — bg-alt 회색 금지 */
  color: #fff; font-weight: 800;
  position: sticky; top: 0;
}
/* 추천 컬럼: 좌우 풀블리드 강조 + 빅타이포 가격/핵심값 */
.compare-matrix .col-rec {
  background: color-mix(in srgb, var(--accent-pink) 10%, var(--bg));
  border-left: 3px solid var(--accent-pink);
  border-right: 3px solid var(--accent-pink);
}
.compare-matrix .col-rec.val-hero { font-size: var(--t-headline-large); font-weight: 800; color: var(--accent-pink); }
```

> `color-mix`은 추천 컬럼 tint에만 한정합니다. 액센트 본색·셀 채움에는 forbidden.md대로 쓰지 않습니다.

## 3-b. check-cross-grid (체크/X 비교)

체크는 accent-green 풀채도, X는 text-tertiary입니다. 회색 아이콘 금지입니다.

```html
<table class="compare-matrix check-grid">
  <thead><tr><th></th><th>무료</th><th class="col-rec">Pro</th></tr></thead>
  <tbody>
    <tr><th>기본 기능</th><td class="ok">✓</td><td class="col-rec ok">✓</td></tr>
    <tr><th>고급 분석</th><td class="no">✕</td><td class="col-rec ok">✓</td></tr>
  </tbody>
</table>
```

```css
.check-grid .ok { color: var(--accent-green); font-size: 22px; font-weight: 800; }
.check-grid .no { color: var(--text-tertiary); font-size: 20px; }
```

## 3-c. two-by-two (2x2 비교 셀)

셀마다 듀얼톤 배경 교차, 코너 라벨은 eyebrow입니다.

```html
<div class="ac-2x2">
  <div class="ac-2x2-cell" style="--c:var(--accent-blue)"><span class="ac-2x2-tag">고가치·저비용</span><p>우선 추진</p></div>
  <div class="ac-2x2-cell" style="--c:var(--accent-purple)"><span class="ac-2x2-tag">고가치·고비용</span><p>선별 투자</p></div>
  <div class="ac-2x2-cell" style="--c:var(--accent-orange)"><span class="ac-2x2-tag">저가치·저비용</span><p>틈새 보완</p></div>
  <div class="ac-2x2-cell" style="--c:var(--accent-pink)"><span class="ac-2x2-tag">저가치·고비용</span><p>제외</p></div>
</div>
```

```css
.ac-2x2 { display:grid; grid-template-columns:1fr 1fr; gap:12px; max-width:680px; margin:0 auto; }
.ac-2x2-cell { padding:32px 28px; border-radius:var(--radius-tile); background:color-mix(in srgb, var(--c) 12%, var(--bg)); border-top:4px solid var(--c); }
.ac-2x2-tag { font-size:var(--t-eyebrow); font-weight:800; letter-spacing:.05em; color:var(--c); }
.ac-2x2-cell p { font-size:var(--t-headline-small); font-weight:700; color:var(--headline); margin:8px 0 0; }
```

## 3-d. before-after-split (강화)

좌 opacity 0.5 → 우 풀비비드 + gradient-text로 변화량을 강조합니다. 기본 구조는 `data.md` §변형1을 따릅니다.

```html
<div class="big-number-compare">
  <div class="big-number-block"><p class="eyebrow">도입 전</p><h2 class="headline-super"><span style="opacity:.5">22<span class="big-number-unit">%</span></span></h2></div>
  <div class="big-number-block"><p class="eyebrow">도입 후</p><h2 class="headline-super gradient-text">75<span class="big-number-unit">%</span></h2></div>
</div>
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

## 6. TABLE — data-table-sorted (정렬 데이터테이블)

zebra 회색 줄무늬 금지입니다. 행 구분은 hairline 1px(silver)만, 헤더는 비비드 풀필 또는 굵은 hairline + bold입니다. 강조 행은 좌측 액센트 바 + 미세 alpha tint, 첫 컬럼 sticky·수치 우정렬·tabular-nums입니다.

```html
<table class="ac-table">
  <thead><tr><th>항목</th><th>2024</th><th>2025</th><th>2026</th></tr></thead>
  <tbody>
    <tr><th>매출</th><td>120</td><td>185</td><td>240</td></tr>
    <tr class="row-emph"><th>영업이익</th><td>14</td><td>28</td><td>51</td></tr>
    <tr><th>비용</th><td>106</td><td>157</td><td>189</td></tr>
  </tbody>
</table>
```

```css
.ac-table { width:100%; border-collapse:collapse; }
.ac-table th, .ac-table td { padding:18px 20px; border-bottom:1px solid var(--imac-silver); }
.ac-table thead th { background:var(--accent-blue); color:#fff; font-weight:800; text-align:right; }
.ac-table thead th:first-child { text-align:left; }
.ac-table tbody th { font-weight:700; color:var(--headline); text-align:left; position:sticky; left:0; background:var(--bg); }
.ac-table tbody td { text-align:right; font-variant-numeric:tabular-nums; color:var(--text); }
.ac-table .row-emph { background:color-mix(in srgb, var(--accent-pink) 8%, var(--bg)); box-shadow:inset 4px 0 0 var(--accent-pink); }
```

## 7. TABLE — definition-glossary (정의·용어표)

dt를 형광펜 또는 액센트 색, dd 본문은 입니다체를 유지합니다.

```html
<dl class="ac-glossary">
  <dt><span class="hl hl-blue">F-ID</span></dt>
  <dd>기능 단위 식별자입니다. PRD와 기능정의 리스트를 연결합니다.</dd>
  <dt><span class="hl hl-c8">FR-ID</span></dt>
  <dd>기능 요구사항 식별자입니다. 개발자가 작업 단위를 봅니다.</dd>
</dl>
```

```css
.ac-glossary { max-width:680px; margin:0 auto; }
.ac-glossary dt { margin-top:24px; font-size:var(--t-headline-small); font-weight:700; }
.ac-glossary dd { margin:8px 0 0; font-size:var(--t-body); color:var(--text-secondary); line-height:1.7; }
```

## 8. 금기

```
❌ MS워드/엑셀 룩 — 회색 표·zebra 줄무늬·강약 ✗·죽은선
❌ 빅넘버 17px (140~200px 강제)
❌ 차트에 12색+ (3~5색 권장)
❌ compare 헤더 bg-alt 회색 — 비비드 풀필 헤더 강제
❌ 체크/X 회색 아이콘 — 체크 accent-green·X text-tertiary
❌ RAG 신호등 차분 시스템색 — axis-1 비비드 (→ viz-distribution.md §3)
```

> `color-mix`은 강조 행·2x2 셀의 미세 tint에만 한정합니다. 액센트 본색에는 쓰지 않습니다.
