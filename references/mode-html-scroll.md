# Mode — HTML Scroll (스크롤 페이지)

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
