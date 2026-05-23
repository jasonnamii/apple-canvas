# Mode Html — 통합 정본 (v260523.4)

> 통합 대상: mode-html-bento.md, mode-html-mix.md, mode-html-scroll.md

> 원본 verbatim 보존·헤더만 재정렬.



---

## 1. Bento (← `mode-html-bento.md` 원본)


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


---

## 2. Mix (← `mode-html-mix.md` 원본)


## 진입 조건
형이 "Mix / 섞어 / 혼합" 선택.

## 디폴트 톤
섹션별 자동 (라이트 ↔ 다크 자연 전환).

## 구조
스크롤 페이지 중간에 Bento 섹션 끼워넣기:

```
1. 히어로 (다크 + 스크롤 트리거 비디오)
2. 스토리 섹션 (다크 + 스티키 핀)
3. Bento 섹션 (라이트 + 4~5 박스 KPI)  ← Bento 차용
4. 기능 갤러리 (다크 + Marquee Hover)
5. Compare 매트릭스 (라이트 + Bento 행 형식)
6. CTA + Footnote
```

## 핵심 규칙
- 톤 전환 시 background-alt 1섹션
- 각 모드의 §H 헌법 모두 적용
- 섹션 간 명확한 시각 분리 (padding 80px+)

## 활용 시나리오
- IR/투자자 페이지 (스토리 + KPI + Compare)
- 제품 런칭 페이지 (히어로 + 기능 + 가격 매트릭스)
- 캠페인 복기 (서사 + 성과 한장 + 학습)


---

## 3. Scroll (← `mode-html-scroll.md` 원본)


## 진입 조건
형이 "스크롤 / 풀페이지 / 랜딩 / 서사" 선택.

## 디폴트 톤
`dark-scroll` (밤 스크롤). 형이 "낮·라이트" 명시 시 `light-scroll`.

## scaffold 사용
`assets/scaffold-scroll.html`을 베이스로 섹션 추가/교체.

## 페이지 구조 (애플 표준)

```
1. 글로벌 헤더 (sticky, 톤 자동 토글)
2. 히어로 섹션 (다크 + Big Tagline + 스크롤 트리거 비디오)
3. 듀얼 톤 전환 섹션 1 (라이트 + Bento 풀섹션)
4. 듀얼 톤 전환 섹션 2 (다크 + 스티키 핀 + 비디오)
5. 데이터 섹션 (라이트 + Compare 매트릭스)
6. 갤러리 섹션 (다크 + Marquee Hover 또는 Paddle Nav)
7. CTA 섹션 (라이트 + Color Swatch)
8. Footnote 영역 (배경-alt)
9. 글로벌 푸터
```

## 핵심 패턴 사용
- H4 위반 ✗ — 비디오·스티키·핀 중 1+개 의무
- 톤 전환 시 1섹션 분량 transition (background-alt)
- §A11Y 강제 — `aria-label` + `prefers-reduced-motion`

## DECK 모드 (스크롤 슬라이드)

`assets/deck-stage.js` 임포트:
```html
<script type="module" src="deck-stage.js"></script>
<body data-deck>
  <section data-stage>슬라이드 1</section>
  <section data-stage>슬라이드 2</section>
</body>
```

각 섹션이 viewport-snap으로 100vh 고정. 스크롤 = 슬라이드 전환. 발표용.