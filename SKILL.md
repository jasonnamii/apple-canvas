---
name: apple-canvas
description: |
  Apple Canvas v3.0. 30페이지 apple.com 박제 → 4계층 의사결정(INTENT·TONE·LAYOUT·STRUCTURE·EMPHASIS)·8축 SSOT·5모드·H1~H12 결정주의. 라이트·다크 비비드 풀채도(S≥85%)·형광펜 5색·gradient-text 5단위·5스톱·Apple-easing·PT빅타이포·Frame Sandwich. 이미지 없는 문서를 애플급 강도로 발현.
  P1: 애플캔버스, apple canvas, apple-canvas, 애플웹, 애플페이지, 애플랜딩, 애플스타일, KPI한장, 대시보드, 벤또, 1pager, 듀얼톤, 스크롤트리거, 스티키, Bento, Compare매트릭스, 빅넘버, BOC토글, FullBleed, 16단계타이포, 형광펜, 5색형광펜, gradient-text, 5스톱그라디언트, Apple-easing, FrameSandwich, StickyChipHero, PT모놀리스, 빅타이포, 비비드, 한장PT.
  P2: 애플처럼만들어줘, 만들어줘, 디자인해줘, 시각화해줘, 랜딩만들어줘, KPI한장, build apple page, design like apple.
  P3: apple-style landing, gradient-text, multi-stop gradient, frame sandwich, sticky chip hero, apple easing, PT monolith, bento grid.
  P4: 풀페이지 랜딩, 시네마틱 PR, KPI 1장, 매니페스토 한장.
  P5: .html, .md.
  NOT: 단일UI(→ui-action-designer), div래핑(→html-div-style), 일반마크다운(→obsidian-markdown), BP(→bp-guide), 카피(→copywriting-skill).
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

# Apple Canvas v3.0

> 30페이지 apple.com 박제(2026-05). 4계층 의사결정 트리·8축 SSOT·5모드·H1~H12 결정주의. **이미지 없는 문서를 애플급 강도로 발현시키는 캔버스.**

## 본질

**v1.0 = 차분 시스템컬러·형광펜 ✗·강약 룰 ✗** → 형 요구(비비드·형광펜 강렬·PT빅·강약) 발현 불능.

**v3.0 = 30페이지 박제 → 4계층 의사결정 + 8축 마스터 DB.** 이미지가 없어도 컬러·타이포·라인·시각화로 애플 강도 복원.

---

## 사용법 — 4계층 의사결정 트리

호출 순서: ⓪ → ① → ② → ③ → ④ → 빌드

### ⓪ INTENT — 왜 만드나
| 의도 | 디폴트 LAYOUT | 디폴트 TONE | 디폴트 EMPHASIS |
|---|---|---|---|
| **PITCH** 설득 (BP·제안서·매니페스토) | Cinematic | Dark | LV3 풀강 |
| **REPORT** 정보집약 (KPI·분석·복기) | Bento | Light | LV3 풀강 |
| **STORY** 서사 (제품런칭·캠페인) | Scroll | Dual | LV3 풀강 |
| **REFERENCE** 카탈로그 (벤치마킹·DB) | Mix | Light | LV2 |

### ① TONE — 빛 (디폴트: Dual)
- **Light** 화이트 + 비비드 SVG/액센트
- **Dark** `#0a0a0f` + 비비드 + glow
- **Dual** ★ 양쪽 동일 hex·다크는 glow만 추가
- **헌법: H1·H8·H9** (`→ references/constitution.md`)

### ② LAYOUT — 형식
| 모드 | 본질 | 사용처 | 파일 |
|---|---|---|---|
| **Bento** | 1페이지 한장 | KPI·요약·1pager | `→ modes/mode-bento.md` |
| **Scroll** | 시네마틱 서사 (15섹션) | 제품런칭·캠페인 | `→ modes/mode-scroll.md` |
| **Mix** | Bento + Scroll 혼합 | 분석·중간 길이 | `→ modes/mode-mix.md` |
| **Cinematic** | Frame Sandwich + AAP + Sticky Chip Hero | 플래그십 PR | `→ modes/mode-cinematic.md` |
| **PT-Monolith** | 단일 빅타이포 PT 1장 | 한장 매니페스토 | `→ modes/mode-pt-monolith.md` |
- **헌법: H3·H10·H11**

### ③ STRUCTURE — 단위
- **Page** 페이지 전체
- **Section** 섹션 단위 (eyebrow→hero→sub→body 4단 위계)
- **Block** 카드/타일/Bento 셀
- **헌법: H4·H6**

### ④ EMPHASIS — 강도 (디폴트: LV3 풀강)
| LV | 컬러 | 형광펜 | 타이포 | 그라디언트 |
|---|---|---|---|---|
| LV1 표준 | 1색 | ✗ | 16스케일 표준 | ✗ |
| LV2 강조 | 2색 | 1~2색 | 빅넘버 가능 | 옵션 |
| **LV3 풀강 ★디폴트** | **풀팔레트** | **5색 마스터** | **PT빅타이포 200px+** | **5스톱 1회** |
- **헌법: H2·H5·H12**

---

## 헌법 H1~H12 (위반 = FAIL)

| # | 조항 | 계층 |
|---|---|---|
| H1 | 듀얼톤 1급 (단톤 ✗) | ① TONE |
| H2 | 타이포 16스케일 (12px↔200px+) | ④ EMPHASIS |
| H3 | 12-grid + offset | ② LAYOUT |
| H4 | 시네마틱 = 서사 (단순 fade ✗) | ③ STRUCTURE |
| H5 | Premium Restraint (페이지당 5스톱 1회만) | ④ EMPHASIS |
| H6 | 헤드라인 4단 위계 | ③ STRUCTURE |
| H7 | A11Y (aria + reduced-motion + 44pt) | 전체 |
| H8 | **채도 S≥85 양쪽 통일** | ① TONE |
| H9 | 카드 배경 룰 (파스텔워시 ✗) | ① TONE |
| H10 | Sticky 비공허 (다중 state) | ② LAYOUT |
| H11 | Frame Sandwich (3프레임) | ② LAYOUT |
| H12 | 인라인 강조 (SVG/strip만, text-decoration ✗) | ④ EMPHASIS |

상세: `→ references/constitution.md`

---

## 8축 SSOT — 박제 마스터 DB

| 축 | 파일 | 핵심 |
|---|---|---|
| A1 | `→ references/axis-1-color.md` | iMac 7색·라이트/다크 풀채도·gradient-text 5스톱·형광펜 5색 |
| A2 | `→ references/axis-2-typography.md` | 16스케일·Sticky Chip Hero PT·빅넘버·gradient-text 5단위 |
| A3 | `→ references/axis-3-layout.md` | 12-grid+offset·매거진 비대칭·Bento·면분할 레시피 |
| A4 | `→ references/axis-4-line.md` | divider·SVG path·border·연결선 4종 |
| A5 | `→ references/axis-5-motion.md` | sticky·Frame Sandwich·focus-expression·**Apple-easing**·scroll-snap |
| A6 | `→ references/axis-6-emphasis.md` | 5색 형광펜·SVG underline 5색·gradient-text·5스톱 |
| A7 | `→ references/axis-7-dataviz.md` | Big-Number·spec 풀·compare matrix·정보집약 강약 |
| A8 | `→ references/axis-8-interaction.md` | colornav·AAP·BOC·tile·scroll-snap·44pt |

**Apple-easing 표준값**: `cubic-bezier(0.4, 0, 0.2, 1)` (5회 박제 발현). `→ references/apple-easing.md`

---

## ❌ Forbidden (위반 시 즉시 FAIL)

```
❌ 라이트 액센트 = 차분 시스템컬러 (#0071E3, #00845A) → Candy 풀채도 강제
❌ 라이트=차분 / 다크=비비드 이원화 → 양쪽 동일 hex
❌ 카드 배경 = 파스텔 워시 (S<30%, L>90%)
❌ 라이트 hero = 순흑 그라디언트 (#111→#2a2a2a)
❌ 단일 단색 그라디언트 (2스톱) → 5스톱 multi-stop만
❌ 한 페이지 5스톱 그라디언트 2회 이상 (Premium Restraint)
❌ Sticky 컨테이너 빈 250vh 반복 (콘텐츠 다중 state 없이)
❌ inline-media에 start/end/fallback frame 누락 (CLS 폭발)
❌ text-decoration: underline (SVG underline 또는 strip만)
❌ MS워드/엑셀 룩 (테이블 죽은선·강약 ✗·비비드 ✗)
❌ 허여멀건/힘없는/강약없는 디자인
```
상세: `→ references/forbidden.md`

---

## ❌ WRONG / ✅ CORRECT

```
❌ WRONG (v1.0 노선)
:root[data-theme="light"] {
  --accent: #0071E3;     /* 차분 시스템컬러 */
  --accent-2: #00845A;   /* S<70% */
}
.card { background: #f0f5fa; }  /* 파스텔 워시 */
.eyebrow { text-decoration: underline; }  /* H12 위반 */

✅ CORRECT (v3.0 노선)
:root[data-theme="light"], :root[data-theme="dark"] {
  --accent-blue:   #0092ff;   /* S=100 L=50 비비드 */
  --accent-pink:   #FF1F6F;   /* S=100 L=56 */
  --accent-green:  #00C853;
}
.gradient-text {
  background: linear-gradient(90deg, #fd9700, #f40, #ff2469, #c65cff, #0092ff);
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent;
}
.highlight-pink { background: linear-gradient(180deg, transparent 55%, #ff5e8a 55%); }  /* strip */
```

---

## QC 자동 검증

```bash
bash references/qc-checklist.md  # H1~H12 자동 스캔
```

`→ references/qc-checklist.md`

---

## Gotchas

| 함정 | 대응 |
|---|---|
| 라이트=차분 / 다크=비비드 이원화 | **양쪽 동일 hex.** 다크는 glow/shadow만 추가 |
| 5스톱 그라디언트를 한 페이지에 여러 번 | **Premium Restraint H5.** 페이지당 1회만 |
| 형광펜에 `text-decoration: underline` | **H12 위반.** SVG path + clipPath 또는 strip 패턴만 |
| sticky 250vh 빈 공간 | **H10 위반.** 다중 state 콘텐츠 강제 |
| inline-media 1프레임만 | **H11 위반.** start/end/fallback 3프레임 강제 |
| 미세결 풍부함 추구 (font-variation·oklch·subgrid 등) | Apple도 안 씀. **검증된 9~10종만** |
| MS워드 룩 (회색 테이블·강약 ✗) | LV3 풀강 디폴트 강제. 컬러+타이포+라인 강약 |
| `transition` easing 임의값 | **Apple-easing `cubic-bezier(0.4, 0, 0.2, 1)`** 표준 박제 사용 |

---

## 변경 이력

- **v3.0 (2026-05-07)** — 30페이지 박제·4계층 의사결정·H1~H12 결정주의·5모드·gradient-text·Apple-easing·형광펜 5색 마스터. v1.0 완전 폐기 (백업: `apple-canvas.v1-backup/`).
- v1.0 (2026-05-02) — 27페이지 5계층 42패턴. 차분 컬러·형광펜 ✗ 한계.
