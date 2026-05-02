# Mode — HTML Bento (한장 격자)

## 진입 조건
형이 "Bento / 한장 / KPI / 대시보드 / 압축" 선택.

## 디폴트 톤
`dark-bento` (밤 벤또). 형이 "낮·라이트" 명시 시 `light-bento`.

## scaffold 사용
`assets/scaffold-bento.html` 베이스.

## 페이지 구조 (1화면 1주제)

```
1. 헤더 (eyebrow + section-headline + 한 줄 요약)
2. Bento 그리드 (4~5박스 풀섹션)
   ├─ Box 1 (대): Big Number 메트릭
   ├─ Box 2 (중): Bar Chart 또는 Compare
   ├─ Box 3 (소): KPI 카드
   ├─ Box 4 (소): KPI 카드
   └─ Box 5 (소): CTA 또는 인사이트
3. Footnote (출처·기간·계산식)
```

## 박스 구성 권장

| 박스 크기 | 콘텐츠 |
|---|---|
| `large-7` | Big Number 또는 큰 차트 |
| `large-5` | 보조 메트릭 + 미니 차트 |
| `large-4` × 3 | KPI 카드 (숫자 + 레이블 + 변화율) |

## 한 화면 강제
- 데스크톱 (1080p) 100vh 안에 모든 박스 표시
- 스크롤 ✗ (모바일은 1열로 자동 펴짐)
- 박스 안 텍스트 길면 `body-reduced` 강제

## 데이터 시각화
- §DATA 강제 — Big Number·Compare·차트 1+개
- 차트 라이브러리: Recharts, Chart.js, D3 (CDN)

## KPI 한장 예시
```html
<section class="bento-section">
  <header class="bento-header">
    <p class="eyebrow">2026 Q1 마케팅 리포트</p>
    <h1 class="section-headline">캠페인 성과 한눈에</h1>
  </header>
  <div class="bento-grid">
    <div class="bento-item large-7 tile-rounded">
      <p class="eyebrow">총 ROAS</p>
      <h2 class="headline-super big-number-value" data-countup data-target="438">0</h2>
      <p class="body-reduced">목표 300% 대비 +138%p</p>
    </div>
    <div class="bento-item large-5 tile-rounded">…</div>
    <div class="bento-item large-4 tile-rounded">…</div>
    <div class="bento-item large-4 tile-rounded">…</div>
    <div class="bento-item large-4 tile-rounded">…</div>
  </div>
</section>
```
