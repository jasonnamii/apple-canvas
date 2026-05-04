---
name: apple-canvas
description: |
  애플 웹 패턴 전용 캔버스 v1.0. 27개 apple.com 라이브 페이지 학습 → 5계층 42패턴 박제. 라이트·다크 듀얼 톤·스크롤 트리거 모션·데이터 시각화·인터랙션 미세결 1급. 4모드(스크롤·Bento·Mix·Deck) + scaffold HTML 2종.
  P1: 애플캔버스, apple canvas, apple-canvas, 애플웹, 애플페이지, 애플랜딩, 애플스타일, KPI한장, 대시보드, KPI벤또, 분석한장, 마케팅한장, 한장요약, 1pager, 라이트벤또, 다크벤또, 라이트스크롤, 다크스크롤, 듀얼톤, 톤전환, 스크롤트리거, 스티키섹션, 핀섹션, 패럴럭스, Bento풀섹션, 벤또풀섹션, Compare매트릭스, 비교매트릭스, 빅넘버, BigNumber, 컬러스와치, BOC토글, Drawer모달, Marquee호버, Footnote시스템, 각주시스템, 챕터네비, 패들네비, ARIA시맨틱, 모션감소, FullBleed, 16단계타이포.
  P2: 애플처럼만들어, 애플페이지로, 만들어줘, 디자인해줘, 시각화해줘, 랜딩만들어, 벤또로만들어, KPI한장만들어, 대시보드만들어, build apple page, design like apple.
  P3: apple-style landing, scroll-triggered motion, sticky pinning, bento grid, compare matrix, dual tone, color swatch, drawer modal, marquee hover.
  P4: 애플 풀페이지 랜딩 작성시, 스크롤 서사 페이지 필요시, KPI 1장 대시보드시, 마케팅·분석 한장 요약시, 캠페인 복기 1pager시.
  P5: .html, .md.
  NOT: 단일 화면 UI 설계(→ui-designer), 옵시디언 div 래핑(→html-div-style), 일반 마크다운(→obsidian-markdown), 사업전략(→biz-skill), 카피(→copywriting-skill).
"@uses":
  - references/constitution.md
  - references/tone-light.md
  - references/tone-dark.md
  - references/tone-dual-rules.md
  - references/layout-bento-fullsection.md
  - references/layout-compare-matrix.md
  - references/layout-grid-12col.md
  - references/typography-16-scale.md
  - references/color-spectrum.md
  - references/motion-scroll-trigger.md
  - references/motion-sticky-pin.md
  - references/interaction-tile-boc.md
  - references/interaction-drawer-modal.md
  - references/interaction-color-swatch.md
  - references/interaction-marquee-hover.md
  - references/data-big-number.md
  - references/data-footnote-system.md
  - references/accessibility-aria-reduced-motion.md
  - references/system-data-attributes.md
  - references/system-namespace-bem.md
  - references/mode-html-scroll.md
  - references/mode-html-bento.md
  - references/mode-html-mix.md
  - references/qc-checklist.md
  - references/forbidden.md
  - references/gotchas.md
  - assets/scaffold-scroll.html
  - assets/scaffold-bento.html
  - assets/deck-stage.js
license: Proprietary. Personal use.
---

# Apple Canvas v1.0

애플 웹 패턴 전용 캔버스. 27개 apple.com 라이브 페이지(2026-05) 학습 → 42패턴 박제.

**v1.0 (2026-05-02):** 신규 박제. 라이트·다크 듀얼 톤 + 스크롤 트리거 모션 + 데이터 시각화 + 인터랙션 미세결 4축 풀스택.

---

## §HEADER. 7조 헌법 (절대규칙·v1.0 신규)

| # | 조항 | 판정 |
|---|---|---|
| H1 | **듀얼 톤 1급** — 라이트·다크는 섹션·페이지·때별 자연 전환. 단톤 강제 ✗ | 모든 섹션 단톤 → FAIL |
| H2 | **타이포 16단계 시맨틱+시각 이중 클래스** — `eyebrow / section-headline / hero-tagline / headline-super / banner-card-headline / body-reduced / gallery-caption / site-modal-headline` 등 | 단일 헤딩만 사용 → 경고 |
| H3 | **풀블리드 + 12열 그리드** — `media-full-bleed`로 컨테이너 경계 깨고, `large-N + offset-N` 12열 오프셋 | 박스에 갇힘 → 경고 |
| H4 | **스크롤 = 서사 장치** — 단순 fade-in ✗. 뷰포트 상대 좌표 비디오 키프레임·스티키 핀·패럴럭스 셋 중 하나 이상 | 단순 fade만 → FAIL (스크롤 모드) |
| H5 | **데이터 = Bento·Compare·Big Number 중 하나** — 일반 표·불릿 ✗ | 일반 표만 → 경고 |
| H6 | **인터랙션 미세결** — Tile-BOC·Drawer·Swatch·Hover 중 페이지당 1+ 적용 | 정적 페이지 → 경고 |
| H7 | **접근성 강제** — `aria-label` 의무, `prefers-reduced-motion` 분기 의무 | 누락 → FAIL |

**H 우선:** H1~H7은 톤·모드 모두 우선. H 위반은 어떤 정당화도 무효.

---

## §-1. 컨텍스트 분기 (작업 시작 시 형에게 질문)

**디폴트 모드 결정 ✗ — 매 작업 시작 시 형에게 질문**:

```
🍎 어떤 모드로 만들까요?
1. 스크롤 (애플 풀페이지·랜딩·서사) — 세로로 긴 스크롤 페이지
2. Bento (1화면 1주제·KPI·요약) — 격자 한장
3. Mix (스크롤 + Bento 섹션 혼합) — 스크롤 중간에 Bento 끼워넣기
```

답변 후 톤 분기:

| 답 | 톤 자동 결정 | 오버라이드 |
|---|---|---|
| 스크롤 + "낮·라이트·밝게" | `light-scroll` | 형 명시 우선 |
| 스크롤 + "밤·다크·어둡게" 또는 미명시 | `dark-scroll` (디폴트) | |
| 스크롤 + "듀얼·전환·둘다" | `scroll-dual` (섹션별 전환) | |
| Bento + "낮·라이트" | `light-bento` | |
| Bento + "밤·다크" 또는 미명시 | `dark-bento` (디폴트) | |
| Mix | `mix` (각 섹션이 라이트/다크 자동) | |

**오버라이드:** P1 키워드(`라이트벤또·다크스크롤·믹스` 등)가 있으면 자동.

---

## §SSOT. 단일 권위 출처

| 블록 | 역할 | 위치 |
|---|---|---|
| `constitution.md` | 7조 헌법 풀버전 + 위반 카탈로그 | SSOT |
| `tone-light.md` | 라이트 톤 컬러·배경·헤딩·본문 | SSOT |
| `tone-dark.md` | 다크 톤 컬러·배경·헤딩·본문 | SSOT |
| `tone-dual-rules.md` | 라이트↔다크 섹션 전환 규칙·경계 처리 | SSOT |
| `typography-16-scale.md` | 16단계 타이포 시맨틱+시각 이중 클래스 | SSOT |
| `color-spectrum.md` | iMac 7색 스펙트럼 + 형광펜 + 액센트 | SSOT |
| `forbidden.md` | 금지 카탈로그 |
| `qc-checklist.md` | 7층 QC 스코어카드 |

---

## §LAYOUT. 레이아웃 8패턴 (L1)

| 패턴 | 클래스명 | 용도 | 포인터 |
|---|---|---|---|
| Bento 풀섹션 | `bento-section + bento-grid + bento-item + tile-rounded` | 4~5 박스 풀너비 | `→ layout-bento-fullsection.md` |
| 비교 매트릭스 | `dd-compare-grid + compare-column + cell-item` | 제품·기능 비교표 | `→ layout-compare-matrix.md` |
| 12열 그리드 | `large-N + large-offset-N + medium-12 + small-12` | 반응형 콘텐츠 | `→ layout-grid-12col.md` |
| 풀블리드 미디어 | `media-full-bleed` | 컨테이너 경계 무시 | `→ layout-grid-12col.md` |
| Card-Set | `card-set + banner-card + feature-card` | 카드 격자 | `→ layout-bento-fullsection.md` |
| Gallery-Grid | `gallery-grid + gallery-item` | 이미지 격자 | `→ layout-bento-fullsection.md` |
| Tile-BOC | `tile + tile-boc-trigger + tile-boc-content` | 타일 내 in-place 토글 | `→ interaction-tile-boc.md` |
| Section Segmentation | `section + section-welcome + section-media-card` | 섹션 분할 | `→ layout-grid-12col.md` |

---

## §TYPO. 타이포 16단계 (L2)

`→ typography-16-scale.md` 참조.

핵심: **시맨틱 + 시각적 클래스 이중화**.
```html
<h2 class="banner-card-headline typography-banner-card-headline">…</h2>
```
의미(`banner-card-headline`)와 시각(`typography-*`)을 분리.

### 한글 폰트 = Pretendard 강제 (1급)

**모든 한국어 본문에 Pretendard 우선 적용.** Pretendard Variable CDN 임포트 + `--font-kr` 1순위 박제.

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" />
```

```css
--font-kr: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
```

다국어 자동 분기: `lang="ko"`(Pretendard) / `lang="zh"`(SF Pro SC) / `lang="ja"`(SF Pro JP) / `lang="en"`(SF Pro).

---

## §MOTION. 모션 8패턴 (L3·L4)

| 패턴 | 핵심 | 포인터 |
|---|---|---|
| 스크롤 트리거 비디오 | `data-inline-media-play-keyframe='{"start":"t-150vh","end":"b+100vh"}'` | `→ motion-scroll-trigger.md` |
| 플러그인 파이프라인 | `data-inline-media-plugins="ObjectFitFix,AnimLoad,..."` | `→ motion-scroll-trigger.md` |
| Sticky Container | `sticky-container / content-sticky-container` | `→ motion-sticky-pin.md` |
| Pin-Offset | `pin-bottom-center / pin-offset` | `→ motion-sticky-pin.md` |
| Viewport Anchor | `anchors:[".subsection-*"]` | `→ motion-sticky-pin.md` |
| Scroll Group | `data-anim-scroll-group="Welcome"` | `→ motion-scroll-trigger.md` |
| Staggered Fade-In | `StaggeredFadeIn_animationWrapper` | `→ motion-scroll-trigger.md` |
| Reduced-Motion | `"disabledWhen": ["reduced-motion"]` | `→ accessibility-aria-reduced-motion.md` |

---

## §INTERACT. 인터랙션 미세결 5패턴 (L3)

| 패턴 | 클래스명 | 포인터 |
|---|---|---|
| Tile-BOC 토글 | `tile-boc-trigger + tile-boc-toggle + tile-boc-content` | `→ interaction-tile-boc.md` |
| Drawer Modal (3단계 네임스페이스) | `overview-{section}-{feature}-drawer-{state}` | `→ interaction-drawer-modal.md` |
| Color Swatch | `colornav + colornav-swatch + ColorIndicator_*` | `→ interaction-color-swatch.md` |
| Marquee Hover | `marquee-hover-container > marquee-picture-container > marquee-hover-content` | `→ interaction-marquee-hover.md` |
| Chapter/Paddle Nav | `ChapterNav_chapternav + paddlenav-icon` | `→ interaction-marquee-hover.md` |

---

## §DATA. 데이터 시각화 3패턴 (L5)

| 패턴 | 용도 | 포인터 |
|---|---|---|
| Big Number | 숫자 1개 강조 (180px+) | `→ data-big-number.md` |
| Footnote 시스템 | `footnote / footnote-number / footnote-subglyph` 가격·법적 분리 | `→ data-footnote-system.md` |
| Picture Lazy Load | `<picture><source srcset>` 다중 해상도 | `→ system-data-attributes.md` |

---

## §A11Y. 접근성 강제 (L5·H7)

`→ accessibility-aria-reduced-motion.md` 참조.

핵심: **`aria-label="Animation of [description]" role="img"`** 모든 인터랙티브 요소. **`@media (prefers-reduced-motion: reduce)`** 분기 의무.

---

## §SYSTEM. 시스템 마크업 3패턴 (L5)

| 패턴 | 용도 | 포인터 |
|---|---|---|
| Data Attributes | `data-analytics-* / data-component-list` | `→ system-data-attributes.md` |
| 네임스페이스 BEM | `Gallery_scrollContainer__1LaRX` | `→ system-namespace-bem.md` |
| Component-List 선언 | `data-component-list='AXFocusManager,InlineMedia'` | `→ system-data-attributes.md` |

---

## §MODE. 출력 모드

| 모드 | scaffold | 포인터 |
|---|---|---|
| 스크롤 | `assets/scaffold-scroll.html` | `→ mode-html-scroll.md` |
| Bento | `assets/scaffold-bento.html` | `→ mode-html-bento.md` |
| Mix | 두 scaffold 혼합 | `→ mode-html-mix.md` |
| Deck (스크롤 슬라이드) | `assets/deck-stage.js` 임포트 | `→ mode-html-scroll.md §DECK` |

---

## §QC. 검증 체크리스트

`→ qc-checklist.md 참조` (7층 스코어카드).

송출 직전 자가검사:
1. H1~H7 7조 헌법 위반 0개?
2. 모드(스크롤·Bento·Mix) 형에게 질문했나?
3. 스크롤 모드 = 서사 장치(비디오·스티키·핀) 1+개?
4. 데이터 = Bento·Compare·Big Number 1+개?
5. 인터랙션 = Tile-BOC·Drawer·Swatch·Hover 1+개?
6. `aria-label` + `prefers-reduced-motion` 모두 적용?
7. 16단계 타이포 시맨틱+시각 이중 클래스?

---

## Gotchas

`→ gotchas.md 참조`.

핵심 함정:
- 스크롤 트리거를 `IntersectionObserver` 단일로 처리 → 애플 본질 X. 뷰포트 상대 좌표 + 플러그인 파이프라인이 본질
- 단일 톤 강제 → H1 위반. 듀얼 톤 자연 전환이 본질
- Bento를 작은 카드 격자로만 → 풀섹션 + 4~5박스 + tile-rounded가 본질
- `aria-label` 누락 → H7 위반·즉시 FAIL

---

## 변경사항

- **v1.0 (2026-05-02):** 신규 박제. 27 apple.com 페이지 + 42패턴 5계층 학습 (`VAULT/_research/_apple_patterns/2026-05-02_apple_design_patterns.md`)
