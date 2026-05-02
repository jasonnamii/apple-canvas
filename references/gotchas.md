# Gotchas — 함정 카탈로그

| # | 함정 | 대응 |
|---|---|---|
| 1 | 스크롤 트리거 = `IntersectionObserver` 단일 | 뷰포트 상대 좌표 + 플러그인 파이프라인이 본질 |
| 2 | 단일 톤 강제 | H1 위반. 듀얼 톤 자연 전환 (섹션·페이지·때) |
| 3 | Bento = 작은 카드 격자 | 풀섹션 + 4~5박스 + tile-rounded가 본질 |
| 4 | `aria-label` 누락 | H7 위반·즉시 FAIL |
| 5 | `prefers-reduced-motion` 누락 | H7 위반·즉시 FAIL |
| 6 | 회색 텍스트 사용 | alpha로 대체 (rgba(text, 0.7)) |
| 7 | 모든 헤딩 `<h1>` | 16단계 시맨틱 클래스 사용 |
| 8 | 비디오에 `controls` 표시 | apple-canvas는 `PlayPauseButtonDisable` 플러그인 |
| 9 | Picture 단일 source | 중단점별 source + Retina srcset 필수 |
| 10 | 모달이 새 페이지로 이동 | Drawer Modal로 in-place |
| 11 | Color Swatch가 텍스트 라벨 없음 | `aria-label="Green"` 필수 (시각장애인용) |
| 12 | Compare 매트릭스 헤더 비sticky | `position: sticky; top: 0;` 필수 |
| 13 | Footnote 양방향 링크 ✗ | 본문 → 각주 + 각주 → 본문 둘 다 |
| 14 | `data-component-list` 폴리필 없음 | JS 컴포넌트 등록 시스템 (deck-stage.js) |
| 15 | 한국어 본문에 SF Pro만 | Apple SD Gothic Neo / Pretendard 폴백 |
| 16 | 톤 전환 직접 (라이트 → 다크 즉시) | background-alt 1섹션 transition |
| 17 | 모드 미질문 | 매 작업 시작 시 형에게 스크롤/Bento/Mix 질문 |
| 18 | 모바일에서 Bento 박스 가로 유지 | `@media (max-width: 768px) { grid-column: span 12 }` |
| 19 | scroll event 무한 호출 | `requestAnimationFrame` 또는 throttle |
| 20 | scaffold 무시하고 처음부터 | scaffold-scroll·bento·deck-stage 우선 사용 |
