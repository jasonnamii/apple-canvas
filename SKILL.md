---
name: apple-canvas
description: |
  Apple Canvas. apple.com 박제·5LAYOUT×2VOLUME. 디폴트=MAXIMAL(형광펜·gradient·PT빅·풀필). 명시호출=MINIMAL(액센트1·≤5%·hairline·풀필✗). Ive=Light MINIMAL, Ferrari=Dark MINIMAL(serif/italic✗). 비비드 채도 신성불가침 S≥90%·파스텔/머디/뮤트✗. 한국어4단·반응형4단·SVG기하·verbatim 보존. C8 신호색.
  P1: 애플캔버스, apple canvas, 애플랜딩, KPI한장, 1pager, 듀얼톤, Bento, 빅넘버, 형광펜, gradient-text, PT모놀리스, 빅타이포, 비비드, 한국어타이포, 반응형, 다이어그램, 본문보존, C8, motion catalog, scroll scrub, sticky hero, reduced-motion, MAXIMAL, MINIMAL, 맥시멀, 미니멀, Ive, Ferrari, 아이브, 페라리, 아이브모드, 페라리모드, hairline, 감산헌법, 채도불가침.
  P2: 애플처럼만들어줘, 디자인해줘, 시각화해줘, 랜딩만들어줘, build apple page, 한국어로, 모바일 반응형, 미니멀로, 맥시멀로, 아이브로, 페라리로, 아이브모드로, 페라리모드로.
  P3: apple-style landing, MAXIMAL volume, MINIMAL volume, Ive mode, Ferrari mode, vivid saturation inviolable.
  P5: .html, .md.
  NOT: 단일UI(→ui-action-designer), div래핑(→html-div-style), 일반md(→obsidian-markdown), BP(→bp-guide), 카피(→copywriting-skill), 산문체(→shaper-skill).
"@uses":
  - assets/scaffold-bento.html
  - assets/scaffold-master.html
  - assets/scaffold-scroll.html
  - assets/tokens.css
  - modes/mode-bento.md
  - modes/mode-cinematic.md
  - modes/mode-mix.md
  - modes/mode-pt-monolith.md
  - modes/mode-scroll.md
  - references/apple-easing.md
  - references/axis-1-color.md
  - references/axis-2-typography.md
  - references/axis-3-layout.md
  - references/axis-4-line.md
  - references/axis-5-motion.md
  - references/axis-6-emphasis.md
  - references/axis-7-dataviz.md
  - references/axis-8-interaction.md
  - references/constitution.md
  - references/diagram-geometry.md
  - references/forbidden.md
  - references/layout-catalog.md
  - references/motion-catalog.md
  - references/prose-preservation.md
  - references/qc-checklist.md
  - references/responsive.md
  - references/typography.md
  - references/visual-effects-catalog.md
  - scripts/qc.sh
license: Proprietary. Personal use.
---

# Apple Canvas

> apple.com 박제. **이미지 없는 문서를 애플급 강도로 발현시키는 캔버스.**


## Skill Boundaries

- **하는 것** — apple.com 박제 기반 1page~scroll HTML/MD 산출. MAXIMAL(풀강) 디폴트 + MINIMAL(아이브·페라리 alias) 명시호출 분기. 비비드 채도 신성불가침.
- **안 하는 것** — 단일UI(→ui-action-designer), div래핑(→html-div-style), 일반md(→obsidian-markdown), BP(→bp-guide), 카피(→copywriting-skill), 산문체·KIWI·격식(→shaper-skill).

## When to Use

- "애플처럼만들어줘·디자인해줘·시각화해줘·랜딩만들어줘·build apple page" — MAXIMAL 디폴트 발동
- "미니멀로·아이브로·아이브모드로·페라리로·페라리모드로" — MINIMAL 발동 (alias로 Tone 자동 매핑)
- "맥시멀로·비비드로·형광펜으로" — MAXIMAL 명시 강제
- 1page KPI·BP·매니페스토·런칭 랜딩·시네마틱 서사 등 *이미지 없이 강도 발현*이 필요한 시점
- **안 쓸 때** — 단일UI(→ui-action-designer), div래핑(→html-div-style), 일반md(→obsidian-markdown), BP(→bp-guide), 카피(→copywriting-skill), 산문체·KIWI·격식(→shaper-skill).


## Prerequisites

| # | 체크 | 미충족 시 |
|---|------|-----------|
| 1 | 대상·입력 명확 (스킬 발동 의도 확인) | 1줄 확인 후 진입 |
| 2 | references/ 폴더 접근 가능 | inline fallback |


## 본질

→ **3가지가 본질** — 듀얼톤·빅타이포·한 페이지 한 메시지.
→ 나머지는 사례·변주. 룰이 아니라 *표현*.

---

## ⓥ VOLUME — 0계층 결정 (디폴트 = MAXIMAL)

| 볼륨 | 본질 | 호출 트리거 | Tone 매핑 |
|---|---|---|---|
| **MAXIMAL ★ (디폴트)** | 비비드 풀팔레트·형광펜·gradient-text·풀필블록·PT빅 — 한 페이지에 *모든 표현 강도 동시 발현* | 호출만 / "맥시멀로" / "비비드로" / "형광펜으로" | Light·Dark·Dual 자유 |
| **MINIMAL** | 액센트 1색·면적 ≤5%·hairline 1px·풀필블록 0·그라디언트 0·웨이트 2개 — *침묵 50%로 강도 뽑기* | "미니멀로" / "아이브로(=Light)" / "페라리로(=Dark)" 명시호출만 | Ive=Light / Ferrari=Dark |

**alias 규칙 (자동 매핑):**
- "아이브로/아이브모드로/Ive" → MINIMAL + Light + 산세리프 + 액센트 1 (default `#FF2D7E`)
- "페라리로/페라리모드로/Ferrari" → MINIMAL + Dark + **산세리프(serif·italic ✗)** + 액센트 1 (default Ferrari Red `#FF2800`)
- "미니멀로" → MINIMAL + Tone 미지정시 Light

**비비드 채도 신성불가침 (양 볼륨 공통, 위반 = FAIL):**
- 색의 *개수·면적*은 볼륨별 다름. **색의 채도는 모드 무관 항상 S≥90%·L 40~60%**
- ⛔ 금지: 파스텔(흰 섞음)·머디(검정 섞음)·뮤트(회색 섞음)·틴트·셰이드·세미투명 fill
- MINIMAL의 1색도 *쨍한 풀채도* (`#FF2800` ✓, `#C9655E` ✗)
- `opacity` 액센트 색 적용 ✗·`color-mix(in srgb, X, white)` ✗

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

→ LV1~LV3은 **MAXIMAL 볼륨 안의 강도 조절**. MINIMAL은 LV 시스템과 *직교* — 아래 별도 표.

### MINIMAL 볼륨 — 감산 헌법 (위반 = FAIL)

| 항목 | MINIMAL 룰 | MAXIMAL 대비 |
|---|---|---|
| 액센트 색 | 1색만 (S≥90%·L 40~60%) | LV3=풀팔레트 |
| 액센트 면적 | 페이지 전체 픽셀 대비 ≤5% | LV3=풀필블록·gradient 자유 |
| 풀필 색 블록 | 0개 (액센트는 텍스트·라인·점·작은 칩에만) | LV3=hero 풀필 자유 |
| 그라디언트 | 금지 (단색만) | LV3=5스톱 1회 |
| 형광펜 | 금지 (`text-decoration` ✗·hl-pill ✗) | LV3=5색 마스터 |
| 디바이더 | 1px hairline만 (Light=`#E5E5E5` / Dark=`#2A2A2A`) | LV3=풀필 띠 가능 |
| 웨이트 | 2개만 (Light 300 + Semibold 600) | LV3=16스케일 풀 |
| 카드 라운드 | `border-radius: 0` 또는 ≤4px | LV3=≥12px 부드러움 |
| 침묵 영역 | ≥50% (흰/검 ground만) | LV3=조밀 가능 |
| Ferrari 추가 | **serif·italic 절대 ✗ — 산세리프(Pretendard/SUIT)만** | n/a |

**MINIMAL 토큰:**

```css
/* Ive (Light MINIMAL) */
--bg: #FAFAFA; --text: #0A0A0A; --hairline: #E5E5E5;
--accent: #FF2D7E; /* 호출시 override 가능 — S≥90% 강제 */

/* Ferrari (Dark MINIMAL) */
--bg: #0A0A0A; --text: #FAFAFA; --hairline: #2A2A2A;
--accent: #FF2800; /* Ferrari Red — S≥90% 강제 */
/* font-family: 'Pretendard Variable', 'SUIT Variable', sans-serif !important; */
/* font-style: normal !important; — italic 금지 */
```

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
| H5 | **채도 S≥90%·L 40~60% 신성불가침** — 양 볼륨 공통. 파스텔/머디/뮤트/틴트/세미투명 fill 모두 ✗. MINIMAL의 1색도 풀채도 |
| H6 | **반응형 4단** D1≥1024 / D2 769-1024 / D3 481-768 / D4≤480 + nb-span 자동 해제 |
| H7 | **본문 verbatim 보존** — 산문체 입력을 표·블릿으로 압축 ✗ (shaper-skill 영토) |

상세: `→ references/constitution.md`

---

## 8축 SSOT (자산 박제)

| 축 | 파일 |
|---|---|
| A1 컬러 | `→ references/axis-1-color.md` — iMac 7색·gradient-text 5스톱·형광펜 5색 + **C8 `#07ED21`** + **Vibrant 25 (`--v-*`)** |
| A2 타이포 | `→ references/axis-2-typography.md` + `→ references/typography.md` |
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

## QC 자동 검증 (v260523.3 — 실행 가능 스크립트)

```bash
bash scripts/qc.sh <HTML_FILE>
```

체크리스트 정본: `→ references/qc-checklist.md`. 자동 grep: MINIMAL 누수·Ferrari serif·형광펜 105%·H1 듀얼톤·H5 채도·H6 반응형.

---

## Output Path

| 산출물 | 경로 |
|---|---|
| 주 산출물 | `mnt/outputs/apple-canvas_{topic}_{YYYY-MM-DD}.md` |
| 형식 | .html, .md. |
| 리서치 결과 (해당 시) | `{VAULT}/_skills research/apple-canvas/{YYYY-MM-DD}_{topic}.md` |

## Reference Index (v260523.4 — 42→28 통합)

| 카테고리 | 파일 | 언제 |
|---|---|---|
| **헌법·금지·QC** | constitution.md · forbidden.md · qc-checklist.md · gotchas.md | 발동 진입·산출 직전 |
| **토큰 SSOT** | `assets/tokens.css` · `scripts/qc.sh` | 모든 산출에 link/script 1순위 |
| **8 AXIS** | axis-1-color · axis-2-typography · axis-3-layout · axis-4-line · axis-5-motion · axis-6-emphasis · axis-7-dataviz · axis-8-interaction | 축별 상세 결정 |
| **5 LAYOUT mode** | modes/mode-bento · mode-scroll · mode-mix · mode-cinematic · mode-pt-monolith | INTENT 선택 후 |
| **통합 도메인 8** | tone (Light+Dark+Dual+Spectrum) · mode-html (Bento+Mix+Scroll) · layout (Bento-FS+Compare+Grid12) · motion (ScrollTrig+StickyPin) · interaction (Swatch+Drawer+Marquee+TileBOC) · data (BigNum+Footnote) · system (data-attr+BEM) · typography (Korean+16Scale) | 도메인별 상세 |
| **카탈로그 3** | layout-catalog · motion-catalog · visual-effects-catalog | 어휘 사전 (정답 ✗) |
| **세부 가이드** | apple-easing · diagram-geometry · prose-preservation · responsive · accessibility-aria-reduced-motion | 해당 단계 진입 시 |
| **자산** | `assets/scaffold-master.html` · `scaffold-bento.html` · `scaffold-scroll.html` · `primitives.html` · `deck-stage.js` · `tokens.css` | 부팅·복사 |

총 references **28** · modes 5 · assets 6 · scripts 1.

## Next Phase

본 스킬 작업 후 자연스럽게 이어지는 흐름:

- 후속 작업 → `ui-action-designer`
- 후속 작업 → `html-div-style`
- 후속 작업 → `obsidian-markdown`
- 후속 작업 → `bp-guide`
- 후속 작업 → `copywriting-skill`


## §LINEBREAK — 한국어 문법인지 줄바꿈 (정본)

**원칙** — 줄바꿈은 "다음 줄"이 아니라 "다음 문절"이다. 어절·동사구·조사구 중간에서 끊지 않는다. 단순 다음줄 넘기기 ✗ — 문법 인지 후 의미 단위 경계에서만 끊는다.

### 룰 5

| # | 룰 | 검증 |
|---|---|---|
| 1 | **CSS 강제** — 모든 한국어 텍스트 컨테이너에 `word-break: keep-all; line-break: strict; overflow-wrap: break-word;` 박제. `word-break: break-all` ✗·`break-word` 단독 ✗ | CSS grep |
| 2 | **의미 단위 보존** — 조사(이/가·은/는·을/를·에서·으로)는 앞 어절에 붙는다. 서술어(입니다·합니다·됩니다) 중간 분할 ✗ | 렌더 후 줄 시작 grep |
| 3 | **강제 비분할** — 고유명사·숫자+단위(`12px`·`3개월`)·복합명사(인공지능·사업계획서)는 `<span class="nb">...</span>` (white-space: nowrap) 또는 `&nbsp;`로 묶음 | DOM grep |
| 4 | **수동 `<br>` = 의미 단위에서만** — 문절 경계 강제. 어절 중간·조사 앞 `<br>` 절대 ✗ | `<br>` 전후 형태소 확인 |
| 5 | **산출물 자가검증** — 렌더 후 ① 단독 조사·어미가 줄 시작 ② 1글자 고립 ③ 숫자·단위 분리 — 1건 적발 시 nb-span·br 재조정 | 3축 grep PASS |

### 검증 셀렉터 (CSS 강제 범위)

```css
.hero h1, .section-title, .lead, .body p, .caption, blockquote,
.bento .card, .toc, .quote-pull, .num-big, .kpi-label,
h1, h2, h3, h4, .title, .subtitle, .pull-quote {
  word-break: keep-all;
  line-break: strict;
  overflow-wrap: break-word;
}
.nb { white-space: nowrap; }
```

### ❌ WRONG vs ✅ CORRECT

```html
❌ <h1>메타인지가<br>분기점이다</h1>           <!-- 조사 "가" 뒤 강제 분할 -->
✅ <h1>메타인지가 <span class="nb">분기점이다</span></h1>

❌ word-break: break-all;                      <!-- 어절 중간 잘림 -->
✅ word-break: keep-all; overflow-wrap: break-word;

❌ <p>우리는 사업<br>계획서를 작성한다</p>     <!-- 복합명사 분할 -->
✅ <p>우리는 <span class="nb">사업계획서를</span> 작성한다</p>

❌ <h2>3<br>개월 만에</h2>                     <!-- 숫자+단위 분리 -->
✅ <h2><span class="nb">3개월</span> 만에</h2>
```

**적용 책임** — 본 스킬이 산출하는 모든 한국어 텍스트 블록은 §LINEBREAK 룰 5 PASS 후 출고. 후보정 최소화가 목표.

---

## Failure Modes (Gotchas)

| 함정 | 대응 |
|---|---|
| 라이트=차분 / 다크=비비드 이원화 | 양쪽 동일 hex. 다크는 glow만 |
| 5스톱 그라디언트 페이지 다회 | H3 Premium Restraint. 1회만 |
| 형광펜에 `text-decoration` | SVG path + clipPath만 (형광펜 자체는 `.hl` rounded-pill) |
| **형광펜 알약 높이 ≠ 105%** | v2.1 룰. `line-height: 1.05` + `padding-block: 0` + `display: inline` 강제. em 패딩·inline-block·line-height 1.3+ 모두 FAIL. 큰 글자(40px+)에서도 알약은 문자크기 × 1.05 정확. SVG underline도 `height: 1.05em`. 상세 `→ references/axis-6-emphasis.md §0` |
| sticky 250vh 빈 공간 | 다중 state 콘텐츠 강제 |
| inline-media 1프레임만 | start/end/fallback 3프레임 |
| MS워드 룩 (회색 테이블·강약 ✗) | LV3 풀강 디폴트 |
| `transition` easing 임의값 | Apple-easing `cubic-bezier(0.4, 0, 0.2, 1)` |
| 한국어 Hero 어절 줄바꿈 깨짐 | `word-break: keep-all` + nb-span. `→ references/typography.md §1` |
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
| **MINIMAL에 형광펜·gradient·풀필블록 끌고 옴** | MAXIMAL 디폴트 무의식 유출. MINIMAL 호출 hit시 형광펜·gradient-text·hl-pill·풀필 hero 전부 OFF. 액센트는 텍스트색·라인·점·칩에만 |
| **MINIMAL "비비드 죽임" 오해** | 색 *개수·면적*만 줄임. *채도는 그대로* S≥90%. `#FF2D7E` ✓ / `#F2A8C6`(파스텔) ✗ / `#A85577`(머디) ✗ / `opacity:0.5`로 비비드 죽이기 ✗ |
| **페라리 = 세리프 이탤릭 오해** | 페라리 공식 디지털 자산은 Ferrari Sans(산세리프). 잡지·티셔츠 표절이 세리프 italic. Ferrari mode는 산세리프 강제 — Pretendard/SUIT Variable + `font-style: normal` |
| **MINIMAL에 카드 라운드·그림자** | `border-radius: 12px+` ✗·`box-shadow` ✗. MINIMAL은 hairline 1px·sharp corner. 부드러움은 MAXIMAL 영토 |
| **alias 무시하고 MAXIMAL로 출고** | "아이브로/페라리로/미니멀로" 명시 호출 hit시 MAXIMAL 헌법 전부 OFF·MINIMAL 룰로 전환. 디폴트로 흘리면 FAIL |

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
| culture | iMac 7색·형광펜 5색·**Vibrant 25 (`--v-*` / `--v-gradient` 1회) |
| depth | `--shadow-card`·`--bg-alt`·`--imac-silver` |

→ "예쁜 색"이 아니라 *역할*로 선택. signal은 페이지당 1개. culture는 브랜드 정체성·signal과 분리.

---

## Forbidden 요약

라이트 차분 시스템컬러·파스텔 워시·머디/뮤트/틴트/세미투명 fill·순흑 그라디언트·2스톱 그라디언트·5스톱 페이지 다회·sticky 빈 공간·inline-media 1프레임·`text-decoration: underline`·MS워드 룩·허여멀건/강약없는 디자인·한국어 PT에 keep-all 누락·wrap/prose 정렬선 불일치·단일 미디어 쿼리·산문체 → 표/블릿·SVG marker 노드 안 침범·**페라리모드 serif/italic**·**MINIMAL에 형광펜/gradient/풀필블록 유출**·**비비드 채도 죽임(opacity·흰물·검정물)**. 상세: `→ references/forbidden.md`


## 안전성 · 접근성 (v1.1)

| 항목 | 상태 |
|---|---|
| innerHTML | dotnav 컨트롤 정적 템플릿 → `// SAFE-innerHTML:` 주석 박제 |
| `:focus-visible` | scaffold-master/bento/scroll 3 파일 모두 박제 (이전 master만 있던 것 보강) |
| `prefers-reduced-motion` | references 전반 23 hits — 기존 강함 |
| SVG aria | inline SVG `aria-hidden="true"` 일관 적용 (기존) |

NOT: motion·layout·visual-effects 카탈로그는 별도 스킬에서 관리.
