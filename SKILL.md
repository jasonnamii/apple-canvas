---
name: apple-canvas
description: |
  Apple Canvas. apple.com 박제 → 의사결정 트리·헌법 7개·5모드. 비비드 풀채도(S≥85%)·형광펜 5색·gradient-text 5스톱·PT빅타이포·Frame Sandwich. 한국어 4단계 타이포·반응형 4단·SVG 다이어그램 기하·본문 verbatim 보존, 시각효과카탈로그, 레이아웃카탈로그. 이미지 없이 애플급 강도 발현. C8 (#07ED21) 신호색 지원.
  P1: 애플캔버스, apple canvas, 애플웹, 애플랜딩, KPI한장, 대시보드, 벤또, 1pager, 듀얼톤, Bento, 빅넘버, 16단계타이포, 형광펜, gradient-text, 5스톱, PT모놀리스, 빅타이포, 비비드, 한장PT, 한국어타이포, 반응형, 다이어그램, 본문보존, C8, 모션카탈로그, motion catalog, scroll scrub, sticky hero, mask reveal, reduced-motion, 접근성.
  P2: 애플처럼만들어줘, 디자인해줘, 시각화해줘, 랜딩만들어줘, build apple page, design like apple, 한국어로, 모바일 반응형, 본문 보존 시각화.
  P3: apple-style landing, gradient-text, frame sandwich, PT monolith, bento grid, korean typography, prose preservation.
  P5: .html, .md.
  NOT: 단일UI(→ui-action-designer), div래핑(→html-div-style), 일반md(→obsidian-markdown), BP(→bp-guide), 카피(→copywriting-skill), 산문체·KIWI·격식(→shaper-skill).
"@uses":
  - references/axis-1-color.md
  - references/axis-2-typography.md
  - references/axis-3-layout.md
  - references/axis-4-line.md
  - references/axis-5-motion.md
  - references/axis-6-emphasis.md
  - references/axis-7-dataviz.md
  - references/axis-8-interaction.md
  - references/constitution.md
  - references/forbidden.md
  - references/qc-checklist.md
  - references/apple-easing.md
  - references/korean-typography.md
  - references/responsive.md
  - references/diagram-geometry.md
  - references/prose-preservation.md
  - references/motion-catalog.md
  - references/visual-effects-catalog.md
  - references/layout-catalog.md
  - modes/mode-bento.md
  - modes/mode-scroll.md
  - modes/mode-mix.md
  - modes/mode-cinematic.md
  - modes/mode-pt-monolith.md
  - assets/scaffold-master.html
  - assets/scaffold-bento.html
  - assets/scaffold-scroll.html
license: Proprietary. Personal use.
---

# Apple Canvas

> apple.com 박제. **이미지 없는 문서를 애플급 강도로 발현시키는 캔버스.**

## 본질

→ **3가지가 본질** — 듀얼톤·빅타이포·한 페이지 한 메시지.
→ 나머지는 사례·변주. 룰이 아니라 *표현*.

---

## ⓪ INTENT — 1계층 의사결정

| 의도 | 디폴트 (Layout+Tone+LV) | Density | Temperature |
|---|---|:-:|---|
| **PITCH** 설득 (BP·제안서·매니페스토) | Cinematic + Dark + LV3 | 4 | cold/neutral |
| **REPORT** 정보집약 (KPI·분석·복기) | Bento + Light + LV3 | 4 | cold |
| **STORY** 서사 (제품런칭·캠페인) | Scroll + Dual + LV3 | 2 | hot/warm |
| **REFERENCE** 카탈로그 (벤치마킹·DB) | Mix + Light + LV2 | 5 | neutral/quiet |

→ INTENT만 묻고 디폴트로 빌드. TONE·LAYOUT·EMPHASIS·Density·Temperature 모두 자동. 형 명시 시 override.

**Density 1~5**: 1=iconic·minimal / 2=brand narrative / 3=structured / 4=evidence-heavy / 5=decision document. 디자인 강도는 Density에 *맞춰*: evidence-heavy를 lifestyle로 ✗·emotional을 dashboard로 ✗.

**Temperature**: cold(analytical)·neutral(institutional)·warm(human)·hot(campaign)·quiet(museum). 비비드 풀강(LV3)이라도 *온도*는 따로. 같은 LV3에 cold(데이터)·hot(캠페인)은 다른 산출물.

---

## ① LAYOUT 5모드 (상세는 modes/)

| 모드 | 본질 | 파일 |
|---|---|---|
| **Bento** | 1페이지 한장 (KPI·요약·1pager) | `→ modes/mode-bento.md` |
| **Scroll** | 시네마틱 서사 15섹션 (제품런칭·캠페인) | `→ modes/mode-scroll.md` |
| **Mix** | Bento + Scroll 혼합 (분석·중간 길이) | `→ modes/mode-mix.md` |
| **Cinematic** | Frame Sandwich + AAP + Sticky Chip Hero (플래그십 PR) | `→ modes/mode-cinematic.md` |
| **PT-Monolith** | 단일 빅타이포 PT 1장 (한장 매니페스토) | `→ modes/mode-pt-monolith.md` |

---

## ② TONE — 빛 (디폴트: Dual)

- **Light** 화이트 + 비비드 액센트
- **Dark** `#0a0a0f` + 비비드 + glow
- **Dual ★** 양쪽 동일 hex·다크는 glow만 추가

---

## ③ EMPHASIS — 강도 (디폴트: LV3 풀강)

| LV | 컬러 | 형광펜 | 타이포 | 그라디언트 |
|---|---|---|---|---|
| LV1 표준 | 1색 | ✗ | 16스케일 표준 | ✗ |
| LV2 강조 | 2색 | 1~2색 | 빅넘버 가능 | 옵션 |
| **LV3 풀강 ★** | **풀팔레트** | **5색 마스터** | **PT빅 200px+** | **5스톱 1회** |

---

## 헌법 H1~H7 (위반 = FAIL)

**본질 3**

| # | 조항 |
|---|---|
| H1 | **듀얼톤 1급** — 양쪽 동일 hex·단톤 ✗ |
| H2 | **빅타이포 16스케일** (12px↔200px+) + 한국어 4단계 (K-Hero·K-Section·K-Lead·K-Body) + word-break·nb-span |
| H3 | **한 페이지 한 메시지** — Premium Restraint·5스톱 그라디언트 페이지당 1회 |

**보조 4**

| # | 조항 |
|---|---|
| H4 | **12-grid + 컨테이너 정렬 SSOT** (wrap·prose 좌측 align baseline) |
| H5 | **채도 S≥85% 풀채도** + 비비드 양쪽 통일 (라이트=차분 ✗) |
| H6 | **반응형 4단** D1≥1024 / D2 769-1024 / D3 481-768 / D4≤480 + nb-span 자동 해제 |
| H7 | **본문 verbatim 보존** — 산문체 입력을 표·블릿으로 압축 ✗ (shaper-skill 영토) |

상세: `→ references/constitution.md`

---

## 8축 SSOT (자산 박제)

| 축 | 파일 |
|---|---|
| A1 컬러 | `→ references/axis-1-color.md` — iMac 7색·gradient-text 5스톱·형광펜 5색 + **C8 `#07ED21`** |
| A2 타이포 | `→ references/axis-2-typography.md` + `→ references/korean-typography.md` |
| A3 레이아웃 | `→ references/axis-3-layout.md` + `→ references/responsive.md` |
| A4 라인 | `→ references/axis-4-line.md` + `→ references/diagram-geometry.md` |
| A5 모션 | `→ references/axis-5-motion.md` — Apple-easing `cubic-bezier(0.4, 0, 0.2, 1)` |
| A6 강조 | `→ references/axis-6-emphasis.md` — 형광펜 5색·SVG underline·gradient-text |
| A7 데이터 | `→ references/axis-7-dataviz.md` — Big-Number·compare matrix |
| A8 인터랙션 | `→ references/axis-8-interaction.md` — colornav·AAP·BOC·44pt |
| PROSE | `→ references/prose-preservation.md` — verbatim 보존·shaper-skill 영토 |

---

## ❌ WRONG / ✅ CORRECT

**컬러·강도**

```
❌ 라이트=차분 시스템컬러 (#0071E3, #00845A) / 카드 파스텔워시
❌ 단일 2스톱 그라디언트 / 페이지당 5스톱 2회 이상
❌ text-decoration: underline

✅ 양쪽 동일 비비드 hex (S≥85)
.gradient-text {
  background: linear-gradient(90deg, #fd9700, #f40, #ff2469, #c65cff, #0092ff);
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hl.hl-pink { background-color: #FF7AB6; color: #0A0A0C; padding: 0 6px; border-radius: 999px; box-decoration-break: clone; }
```

**한국어 Hero**

```
❌ .hero-title { font-size: clamp(56px, 11vw, 200px); }
   <h1>메타인지가 분기점이다</h1>  → 어절 잘림

✅ .hero-title { font-size: clamp(56px, 11vw, 200px); word-break: keep-all; }
   .nb { white-space: nowrap; }
   @media (max-width: 768px) { .nb { white-space: normal; } }
```

**정렬선 SSOT**

```
❌ .wrap { max-width: 1100px; } .prose { max-width: 760px; margin: 0 auto; }
   → 좌측 시작점 어긋남

✅ .wrap, .prose { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
   .prose > * { max-width: 760px; }
```

---

## QC 자동 검증

```bash
bash references/qc-checklist.md
```

---

## Gotchas

| 함정 | 대응 |
|---|---|
| 라이트=차분 / 다크=비비드 이원화 | 양쪽 동일 hex. 다크는 glow만 |
| 5스톱 그라디언트 페이지 다회 | H3 Premium Restraint. 1회만 |
| 형광펜에 `text-decoration` | SVG path + clipPath만 (형광펜 자체는 `.hl` rounded-pill) |
| sticky 250vh 빈 공간 | 다중 state 콘텐츠 강제 |
| inline-media 1프레임만 | start/end/fallback 3프레임 |
| MS워드 룩 (회색 테이블·강약 ✗) | LV3 풀강 디폴트 |
| `transition` easing 임의값 | Apple-easing `cubic-bezier(0.4, 0, 0.2, 1)` |
| 한국어 Hero 어절 줄바꿈 깨짐 | `word-break: keep-all` + nb-span. `→ korean-typography.md` |
| wrap·prose 좌측 정렬선 어긋남 | max-width 동기. `.prose > *` 자식만 760 |
| 단일 미디어 쿼리 1단 반응형 | H6 위반. D1~D4 4단. `→ responsive.md` |
| inline `grid-template-columns:repeat(N,1fr)` 모바일 미분해 | 속성 선택자 + `!important` 분해 |
| SVG 다이어그램 어긋남 | 순환 6노드 12·2·4·6·8·10시 + 호 끝점 노드 가장자리 4-8px. `→ diagram-geometry.md` |
| 산문체 입력을 표·블릿으로 압축 | shaper-skill 영토. verbatim 보존. `→ prose-preservation.md` |
| Big Number 좌·캡션 우 1:1 grid 어색 | bignum 카드형 (rainbow 숫자 + caption 480px max) |
| 부록·헌장 단순 라벨에 거대 헤드라인 | `.section-title.compact` 36-56px |
| **회색 텍스트 흐림 (light/dark 양쪽)** | secondary는 본문 다음으로 잘 보여야. tertiary는 라벨 기능. WCAG AA 미달 회색 ✗ — `→ axis-1-color.md` SSOT 토큰 사용 |
| **C8 신호색** | `#07ED21` (Cre8orClub). 브랜드 컨텍스트 한정·솔리드 1개로만·gradient 혼합 ✗ |
| **AI 평균값 클리셰** | 검은 배경 디폴트·neon gradient·glowing orb·glass card 남용·centered hero only·identical 3카드 그리드·fake dashboard. *디자인이 평균 SaaS 랜딩처럼 되면 INTENT부터 재선택* |
| **섹션 반복** | 같은 구조 2회 이상 ✗. 카드 → 다이어그램 → 테이블 → 에디토리얼 블록 등 *섹션마다 다른 전달 방식* |
| **"못생겨도 되는 영역"** | tables·captions·footnotes·spec readout·legal note는 decoration ✗. evidence-heavy(Density 4~5)는 *예쁨보다 신뢰감*. LV3 풀강 ≠ 모든 영역 강 |
| **모션 카탈로그** | 11분류 50+ 패턴·Apple 13 어휘·강도 0~5·duration/easing 표·reduced-motion 폴백 — 정답 ✗·*어휘 사전* → `→ references/motion-catalog.md`. 기존 motion-* refs와 *병행 호환* |
| **시각효과 카탈로그** | 9 계열 50+ 효과·Apple 10 어휘·조합 레시피 5종·Anti-AI — *어휘 사전·정답 ✗* → `→ references/visual-effects-catalog.md` |
| **레이아웃 카탈로그** | 10 계열 50+ archetype·Apple 8 패턴·조합 레시피·Anti-Generic·기존 박제 인덱싱 — *어휘 사전·정답 ✗* → `→ references/layout-catalog.md` |
| **한 페이지 = 다른 레이아웃 mix** | Hero → Explanation → Evidence → Decision → CTA. *같은 archetype 2회 이상 반복 ✗*. 모든 섹션 카드 그리드 ✗ |
| **모션 강약 분포** | 한 페이지 안 *모든 섹션 같은 강도 ✗*. 1개 섹션만 페이지 최대 강도 N, 2~3개 N-1, 나머지 N-2 이하, 1+ 정적 영역 의무 (Density 3+ 적용) |
| **AI 평균값 모션 클리셰** | 모든 카드 같은 hover·모든 섹션 같은 fade up·particle·constant gradient·neon glow·cursor follow·bouncy easing·blur text reveal — 의미 없는 모션 = 제거 |
| **reduced-motion 폴백** | 모든 HTML 산출물 `@media (prefers-reduced-motion: reduce)` 의무. parallax·scroll scrub·zoom·3D tilt 비활성화·fade로 대체. 위반 = 접근성 FAIL |

---

## Typography Roles (16스케일에 *역할* 매핑)

| 역할 | 의미 | 16스케일 위치 |
|---|---|---|
| Voice | 주 감정·개념 statement (Hero·Big Number) | 200px+·PT·display |
| System | 라벨·내비·메타데이터 (eyebrow·label) | 12~14px |
| Reading | 본문 (verbatim 보존 영역) | 17~21px body |
| Evidence | 수치·캡션·각주·footnote | 12~15px·mono |
| Accent | 제한적 강조 (gradient-text·형광펜) | 페이지당 1~2회 |

→ 폰트 *선택*보다 *역할 분리*가 본질. 같은 SF Pro라도 Voice·System·Evidence는 *다르게 행세*.

## Color Roles (기존 토큰에 *역할* 라벨)

| 역할 | apple 토큰 |
|---|---|
| ground | `--bg`·`--bg-alt` |
| text | `--text`·`--text-secondary`·`--text-tertiary`·`--headline` |
| authority | `--text`·`--headline` (검정 본문) |
| signal | `--accent-blue`·`--accent-pink`·`--c8` (한 페이지 1개만) |
| culture | iMac 7색·형광펜 5색 |
| depth | `--shadow-card`·`--bg-alt`·`--imac-silver` |

→ "예쁜 색"이 아니라 *역할*로 선택. signal은 페이지당 1개. culture는 브랜드 정체성·signal과 분리.

---

## Forbidden 요약

라이트 차분 시스템컬러·파스텔 워시·순흑 그라디언트·2스톱 그라디언트·5스톱 페이지 다회·sticky 빈 공간·inline-media 1프레임·`text-decoration: underline`·MS워드 룩·허여멀건/강약없는 디자인·한국어 PT에 keep-all 누락·wrap/prose 정렬선 불일치·단일 미디어 쿼리·산문체 → 표/블릿·SVG marker 노드 안 침범. 상세: `→ references/forbidden.md`


## 안전성 · 접근성 (v1.1)

| 항목 | 상태 |
|---|---|
| innerHTML | dotnav 컨트롤 정적 템플릿 → `// SAFE-innerHTML:` 주석 박제 |
| `:focus-visible` | scaffold-master/bento/scroll 3 파일 모두 박제 (이전 master만 있던 것 보강) |
| `prefers-reduced-motion` | references 전반 23 hits — 기존 강함 |
| SVG aria | inline SVG `aria-hidden="true"` 일관 적용 (기존) |

NOT: motion·layout·visual-effects 카탈로그는 별도 스킬에서 관리.
