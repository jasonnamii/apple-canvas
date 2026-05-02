# Constitution — 7조 헌법 풀버전

## H1. 듀얼 톤 1급
라이트·다크 단톤 강제 ✗. 섹션·페이지·때별 자연 전환.

**위반 카탈로그:**
- 모든 섹션이 다크만 → FAIL
- 라이트→다크 전환 시 경계 처리 누락(`background-alt` 미사용) → 경고
- 톤 전환 모티프(리프트·페이드·블러) 없음 → 경고

**합격:**
- 섹션 단위로 `theme-light` / `theme-dark` / `background-alt` 사용
- 전환 경계에 1섹션 분량 transition (배경 그라디언트 또는 알파 페이드)

## H2. 타이포 16단계 시맨틱+시각 이중 클래스
단일 헤딩(`h1`만 큰 폰트) 사용 → 경고.

**16단계 시맨틱 클래스:**
1. `eyebrow` — 섹션 라벨 (12px·UPPER)
2. `section-headline` — 섹션 헤드 (40~64px·900)
3. `hero-tagline` — 히어로 태그라인 (80~120px·900)
4. `headline-super` — 슈퍼 헤드 (140~200px·900)
5. `banner-card-headline` — 배너 카드 헤드 (28~40px·700)
6. `feature-card-headline` — 피처 카드 헤드 (24~32px·700)
7. `tile-headline` — 타일 헤드 (20~28px·700)
8. `gallery-caption` — 갤러리 캡션 (14~18px·400)
9. `body-elevated` — 강조 본문 (20~24px·400)
10. `body` — 기본 본문 (16~18px·400)
11. `body-reduced` — 조밀 본문 (13~15px·400)
12. `disclaimer` — 면책·법적 (11~13px·400·alpha 0.7)
13. `cta-primary` — 주 버튼 (17px·500)
14. `cta-secondary` — 보조 버튼 (15px·500)
15. `site-modal-headline` — 모달 헤드 (24~32px·700)
16. `footnote` — 각주 (12px·400·alpha 0.6)

**이중 클래스 규칙:**
```html
<h2 class="banner-card-headline typography-banner-card-headline">…</h2>
```
의미(`banner-card-headline`)와 시각(`typography-*`)을 분리.

**한글 폰트 강제 (H2 하위 규칙):**
- `--font-kr` 첫 폰트 = `"Pretendard Variable"` 또는 `Pretendard` 의무
- Pretendard CDN 임포트 누락 = FAIL
- 시스템 한글 폰트 단독 사용 = FAIL

## H3. 풀블리드 + 12열 그리드
박스에 갇힘 → 경고.

- `media-full-bleed` 클래스로 컨테이너 경계 깨기
- `large-N + large-offset-N + medium-12 + small-12` 12열 + 중단점 오프셋

## H4. 스크롤 = 서사 장치
단순 fade-in → FAIL (스크롤 모드).

**필수 1+개:**
- 뷰포트 상대 좌표 비디오 키프레임 (`data-inline-media-play-keyframe`)
- 스티키 핀 (`sticky-container`)
- 패럴럭스 (`background-parallax`)

## H5. 데이터 = Bento·Compare·Big Number 중 하나
일반 표·불릿만 → 경고.

- Bento 풀섹션 (4~5박스 + tile-rounded)
- Compare 매트릭스 (`dd-compare-grid`)
- Big Number (180px+·alpha 변화)

## H6. 인터랙션 미세결
정적 페이지 → 경고.

페이지당 1+개:
- Tile-BOC (in-place 토글)
- Drawer Modal (3단계 네임스페이스)
- Color Swatch (색상 선택)
- Marquee Hover (호버 갤러리)

## H7. 접근성 강제
누락 → FAIL.

- 모든 인터랙티브: `aria-label="…"` 의무
- 모든 모션: `@media (prefers-reduced-motion: reduce)` 분기 의무
- `role="img"` 비디오·애니메이션 자산
