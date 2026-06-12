---
name: apple-canvas
version: 1.0
description: |
  애플캔버스·apple-canvas — 애플 키노트풍 비비드 프리미엄 HTML 디자인·시각화 스킬. 거대 타이포, 벤토 모자이크, 풀블리드 컬러섹션, 시네마틱 스크롤로 한 화면 한 메시지를 만든다. 트리거: 애플캔버스, apple-canvas, 애플풍, 키노트형, 비비드 덱, 벤토, 한 장 인포그래픽, 프리미엄 랜딩. NOT: box-cut-design, editorial-design, teenage-design, prism-design, 앱 UI.
license: Proprietary. Personal use.
---

# Apple Canvas

Vivid Apple-style HTML pages: big typography, clean hierarchy, high-saturation accents, and one clear message per screen.

## 범위 — 디자인·시각화 전용 (문체·내용 불가침)

이 스킬은 **시각 디자인만** 책임진다. 사용자가 준 텍스트는 텍스트층(작성자·UP·shaper-skill)의 영토이며 침범하지 않는다.

- 본문·제목의 **어휘·어미·문장구조·문단·문체를 한 글자도 바꾸지 않는다.** 받은 텍스트 그대로(verbatim) 시각만 입힌다.
- **UP 입니다체(또는 작성자 문체)를 유지한다.** Apple식 빅타이포·임팩트 무드 때문에 본문을 슬로건·선언형·짧은 카피로 **다시 쓰는 것은 절대 금지**다.
- 본문 산문을 표·블릿으로 분해하지 않는다. 강조는 인라인 형광펜·pullquote 발췌만(→ `references/prose-preservation.md`).
- 카피·헤드라인 생성·톤 변환은 이 스킬의 일이 아니다 → 텍스트는 미리 받는다(없으면 작성자·shaper-skill·copywriting-skill).

상세: `references/prose-preservation.md`.

## Use When

형이 '애플처럼·애플 스타일로·키노트풍으로·비비드하게·벤토로·한 장에·시네마틱하게·빅타이포로 만들어줘'라고 하거나, 랜딩·KPI 보드·발표 덱·제품 소개·한 장 인포그래픽 같은 프리미엄 임팩트 HTML을 원할 때 씁니다. 산출은 자기완결 단일 `.html`(외부 CDN 의존 없음) 또는 에셋을 복사한 로컬 폴더입니다.

- 애플 느낌의 랜딩·원페이저·KPI 보드·시네마틱 스크롤·발표용 HTML을 원할 때.
- 빽빽한 운영 UI보다 프리미엄 임팩트가 더 중요할 때.
- 차트·다이어그램이 들어가도 외부 CDN 없이 인라인 SVG·CSS로 자기완결해야 할 때.

NOT (안 씀):
- 흑백 스트리트 캠페인·슬래시·따옴표 라벨 → box-cut-design
- 매거진 세리프·헤어라인·여백 에디토리얼 → editorial-design
- deadpan·소문자·직각 그리드 청소년 톤 → teenage-design
- 프리즘 9 MECE 카드 독트린 → prism-design
- 실제 앱 화면·관리자 대시보드·폼 흐름 → ui-designer·frontend-design
- 평문 마크다운 문서 편집 → 직접

## 8대 시각문법 패밀리 (어디에 무슨 컴포넌트가 있나)

apple-canvas는 8패밀리를 모두 자기 미감으로 보유합니다. 쏠림·누락 없이, 정보 유형에 맞는 패밀리를 골라 해당 파일을 엽니다.

| 패밀리 | 정보 유형 | 컴포넌트 | 파일 |
|---|---|---|---|
| FLOW 흐름·절차 | 순서대로 흐르는 단계 | process-step-rail · decision-flowchart · sequence-pipeline · 순환6노드 · metaloop | `references/viz-flow.md` |
| HIERARCHY 계층·구성 | 상하 포함·위계 | pyramid-stack · layered-architecture · tree-org · nested-containment | `references/viz-hierarchy.md` |
| COMPARE 비교·대조 | 같은 기준 견주기 | compare-matrix · check-cross-grid · two-by-two · spec-keyvalue · before-after | `references/axis-7-dataviz.md` |
| METRIC 수치·그래프 | 숫자·차트 | big-number · bar · line · donut · gauge · funnel | big-number는 `axis-7-dataviz.md` §1, 차트는 `references/viz-metric-charts.md` |
| RELATION 관계·망 | 무엇이 무엇과 연결 | hub-spoke · venn · ecosystem-map · 순환6노드 | `references/viz-relation.md` |
| TIME 시간·변화 | 시간 축·변화 | timeline · roadmap · changelog · gantt | `references/viz-time.md` |
| DISTRIBUTION 분포·위치 | 2축 위치·농도·평가 | positioning-map · heatmap · scorecard-rag · bubble-plot | `references/viz-distribution.md` |
| TABLE 표·구조화 | 행·열 조회 | data-table-sorted · definition-glossary | `references/axis-7-dataviz.md` |

컨셉에 안 맞아 보이는 차트도 버리지 않고 apple-canvas 언어로 번안해 보유합니다(예: 히트맵 회색농도 → 단일 비비드 hue alpha 스텝, RAG 신호등 시스템색 → axis-1 비비드 풀채도 도트).

## 콘텐츠 → 시각문법 매핑 게이트 (빌드 전 강제 통과)

스타일을 입히기 전에 이 게이트를 통과합니다. 통과 산출물은 섹션 매핑표 1개입니다. 매핑표 없이 HTML을 쓰면 그 빌드는 실패입니다.

- **STEP1 인벤토리** — 받은 문서·페이지의 섹션을 위에서 아래로 나열하고, 각 섹션이 담은 정보를 한 줄로 적습니다.
- **STEP2 논리 판별** — 각 섹션이 8패밀리 중 어떤 논리인지 정합니다. 순수 산문 단락은 `PROSE`로 표시하고 시각문법을 강제하지 않습니다(분리규칙 참조).
- **STEP3 문법 선택** — 그 논리에 가장 직관적인 시각문법 1개를 결정트리로 고릅니다.
  - 단계가 순서대로 흐르면 → FLOW (process-step-rail / decision-flowchart / sequence-pipeline)
  - 상하 포함·위계면 → HIERARCHY (pyramid-stack / layered-architecture / tree-org)
  - 둘 이상 항목을 같은 기준으로 견주면 → COMPARE (compare-matrix / two-by-two / before-after)
  - 숫자가 핵심이면 → METRIC (big-number / bar·line·donut-svg / gauge / funnel)
  - 무엇이 무엇과 연결되면 → RELATION (hub-spoke / venn / ecosystem-map)
  - 시간 축·변화면 → TIME (timeline / roadmap / changelog / gantt)
  - 2축 위 위치·농도·평가면 → DISTRIBUTION (positioning-map / heatmap / scorecard-rag)
  - 행·열 구조화 조회면 → TABLE (data-table / definition-glossary)
- **STEP4 리듬** — 인접 섹션이 같은 문법으로 연속되지 않게 합니다. 카드그리드(벤토 포함) 3연속 금지, 한 archetype 2회 이상 반복 금지(`references/layout-catalog.md` §14 준수), 페이지 전체에 최소 4개 이상 패밀리가 고루 분포하게 배치합니다.
- **STEP5 스타일** — 선택된 문법을 apple-canvas 미감(비비드 빅타이포·벤토·풀블리드·듀얼톤·그라디언트 이벤트 1회)으로 렌더합니다.

산출 형식(빌드 직전 명세로 남김):

| # | 섹션 | 정보유형(패밀리) | 시각문법 | 컴포넌트(파일) |
|---|---|---|---|---|
| 1 | 히어로 | — | Full-bleed Hero | scaffold-master |
| 2 | 시장규모 | METRIC | KPI + 도넛 | big-number-stack / donut-ring-svg |
| 3 | 도입 절차 | FLOW | 프로세스 스텝 | process-step-rail (viz-flow.md) |
| … | … | … | … | … |

리듬 자가검사: 같은 패밀리 3연속이 있는가 / 벤토 3연속이 있는가 / 패밀리가 4개 미만인가 — 하나라도 YES면 STEP4로 돌아갑니다.

## 문체 불가침 vs 정보 재구성 분리규칙

apple-canvas는 시각층입니다. 문장은 텍스트층(작성자·UP·shaper-skill)의 영토입니다. 다만 verbatim 보존을 데이터·항목·관계에까지 확대 적용해 시각화를 포기하면 그것도 실패입니다. 둘을 명확히 가릅니다.

**불가침 (문장 자체)**
- 본문 문장의 어미·어휘·문장구조·문단 구분·문체(UP 입니다체)는 한 글자도 바꾸지 않습니다.
- 산문 단락은 `<p>` 그대로 두고, 강조는 인라인 `.hl` 형광펜·gradient-text·pullquote 발췌만 입힙니다.
- 카피·헤드라인을 새로 짓거나 선언형·슬로건으로 다시 쓰지 않습니다.

**재구성 권장 (정보의 배치·구조)**
- 정보가 절차·비교·계층·수치·관계·시간·분포·항목 구조를 담고 있으면, 그 구조를 해당 시각문법으로 드러냅니다.
- "다섯 단계로 진행합니다" 뒤의 5개 단계, "A는 X·B는 Y" 대비, "3년간 변화" 같은 시간열, 수치·점수·좌표는 산문이 아니라 데이터입니다 — 적절한 시각문법으로 구조화합니다.
- 이때도 단계·항목 안의 문장 텍스트는 원문 그대로 옮깁니다. 구조만 시각문법으로 바꾸고 문장은 건드리지 않습니다.

**경계 한 줄** — 산문 문단은 문장 그대로 둡니다. 데이터·단계·항목·관계·수치·시간·분포는 시각문법으로 구조화합니다. 문장을 다시 쓰지 말고, 문장이 담은 구조를 드러냅니다.

자가검사(시각화 진입 직전): ① 산문 단락의 문장을 한 글자도 안 바꿨는가 ② 단계·비교·관계·수치·시간·분포 정보를 산문에 묻어두지 않고 시각문법으로 드러냈는가 ③ 시각문법 안의 라벨·셀 텍스트는 원문 어휘 그대로인가 ④ 카피를 새로 짓거나 선언형으로 바꾸지 않았는가 — 넷 다 YES여야 진입합니다.

## 미감 디렉티브 (MAXIMAL 디폴트)

디폴트는 apple-canvas가 낼 수 있는 최대 미감입니다. 8패밀리 모든 컴포넌트에 동일 시그니처를 일관 적용합니다. forbidden.md는 안티패턴 방어용이지 표현 위축용이 아닙니다.

시그니처 6종(모든 컴포넌트 공통):
1. **거대 타이포 스케일** — 핵심 수치·라벨·꼭짓점은 빅넘버 140~200px, 섹션 헤드라인 40~72px, 헤드라인-바디 최소 2.5배 차이 강제(`axis-2-typography.md`).
2. **벤토 모자이크** — 항목 나열은 균일 카드 금지, 크기 다른 타일로 위계. 카드그리드 3연속 금지.
3. **풀블리드 컬러섹션** — 강조 영역은 원색 풀채움(axis-1 S≥85%), 파스텔 워시·color-mix 화이트 희석 금지. 듀얼톤(섹션 단위 라이트↔다크 전환).
4. **그라디언트 이벤트 1회** — 5스톱 멀티스톱 그라디언트는 페이지당 1회만(Premium Restraint), 2스톱 단색 그라디언트 금지.
5. **시네마틱 스크롤** — 진입 모션은 apple-easing cubic-bezier(0.4,0,0.2,1), SVG stroke-draw·카운트업·순차 fade. animation-timeline 등 실험 기능 금지.
6. **형광펜 105%·노드 글로우** — 인라인 강조는 `.hl` rounded-pill 5색만, 다크 SVG 노드는 nodeGlow 필터 디폴트.

차트 자기완결 원칙: 막대·선·도넛·게이지·펀넬·히트맵은 전부 인라인 SVG·CSS로 만들어 외부 CDN(Chart.js·Recharts·D3) 의존을 없앱니다(`references/viz-metric-charts.md`).

색·액센트 정본은 `references/axis-1-color.md`(비비드 S≥85%)입니다. `tone.md`와 어긋나면 axis-1을 따릅니다.

## Modes

| Mode | Default Use | Rules |
|---|---|---|
| MAXIMAL | Default | Vivid palette, big type, bold sections, one gradient event max |
| MINIMAL | Explicit only | One vivid accent, accent area under 5%, no gradients, no highlight pills |
| Ive | Alias for MINIMAL Light | Quiet white space, one vivid accent |
| Ferrari | Alias for MINIMAL Dark | Sans only, Ferrari red, no serif, no italic |

## Design Rules

- Use the existing assets first: `assets/scaffold-master.html`, `assets/scaffold-bento.html`, `assets/scaffold-scroll.html`, and `assets/tokens.css`.
- Keep color vivid: avoid pastel, muddy, muted, transparent, and `color-mix(... white ...)` accent treatments.
- Use stable responsive sizes. Avoid viewport-scaled font sizes that can overflow; prefer fixed clamps with conservative breakpoints.
- Keep `letter-spacing` at `0` unless there is a small positive label-tracking need.
- Korean text must use `word-break: keep-all; line-break: strict; overflow-wrap: break-word;`.
- Do not reshape the user's prose into tables or bullets unless the user asks.
- Respect reduced motion with `@media (prefers-reduced-motion: reduce)`.

## Codex Workflow

1. Read only the reference files needed for the requested mode.
2. Create outputs in the current workspace unless the user gives a path.
3. Edit files with `apply_patch`; copy skill assets into the output instead of modifying originals.
4. If a dev server is useful, start it and give the local URL.
5. Verify with `bash /Users/jason/.codex/skills/apple-canvas/scripts/qc.sh <html-file>` and, for visual work, inspect in Browser or a screenshot.

## References

| Need | Files |
|---|---|
| Mode selection | `modes/` |
| Tokens and scaffolds | `assets/` |
| Color, type, layout, motion | `references/axis-*.md` |
| 8패밀리 인덱스·SSOT | `references/axis-7-dataviz.md` §0 |
| FLOW 흐름·절차 | `references/viz-flow.md` |
| HIERARCHY 계층·구성 | `references/viz-hierarchy.md` |
| METRIC 차트(인라인 SVG) | `references/viz-metric-charts.md` |
| RELATION 관계·망 | `references/viz-relation.md` |
| TIME 시간·변화 | `references/viz-time.md` |
| DISTRIBUTION 분포·위치 | `references/viz-distribution.md` |
| COMPARE·TABLE·빅넘버 | `references/axis-7-dataviz.md` |
| SVG 다이어그램 기하 | `references/diagram-geometry.md` |
| 8패밀리 데모 샘플 | `assets/sample-viz-families.html` |
| QC details | `references/qc-checklist.md`, `scripts/qc.sh` |
