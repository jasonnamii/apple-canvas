---
name: apple-canvas
description: |
  Apple Canvas v3.1. apple.com 30페이지 박제 → 4계층 의사결정·8축 SSOT·5모드·H1~H13 결정주의. 비비드 풀채도(S≥85%)·형광펜 5색·gradient-text 5스톱·Apple-easing·PT빅타이포·Frame Sandwich. v3.1 신설: 한국어 4단계 타이포·반응형 H13 4단·SVG 다이어그램 기하·본문 verbatim 보존. 이미지 없이 애플급 강도 발현.
  P1: 애플캔버스, apple canvas, 애플웹, 애플랜딩, KPI한장, 대시보드, 벤또, 1pager, 듀얼톤, Bento, Compare매트릭스, 빅넘버, BOC토글, 16단계타이포, 형광펜, gradient-text, 5스톱, Apple-easing, FrameSandwich, StickyChipHero, PT모놀리스, 빅타이포, 비비드, 한장PT, 한국어타이포, 반응형헌법, H13, 다이어그램기하, 본문보존, nb-span, word-break, 둠루프, 메타인지루프.
  P2: 애플처럼만들어줘, 디자인해줘, 시각화해줘, 랜딩만들어줘, build apple page, design like apple, 한국어로, 모바일 반응형, 다이어그램, 본문 보존 시각화.
  P3: apple-style landing, gradient-text, frame sandwich, sticky chip hero, PT monolith, bento grid, korean typography, responsive H13, diagram geometry, prose preservation.
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

# Apple Canvas v3.1

> 30페이지 apple.com 박제(2026-05) + 형 실측 7건 보강(2026-05-10). 4계층 의사결정 트리·8축 SSOT·5모드·H1~H13 결정주의. **이미지 없는 문서를 애플급 강도로 발현시키는 캔버스.**

**v3.1 (2026-05-10) — 형 실측 7건 보강:** 한국어 4단계 타이포(K-Hero·K-Section·K-Lead·K-Body) + word-break keep-all + nb-span 박제 / 반응형 헌법 H13 신설(D1·D2·D3·D4 4단) / SVG 다이어그램 기하 박제(순환 6노드·플로우·marker) / 본문 verbatim 보존 룰(prose-preservation, shaper-skill 영토 분리) / Big Number 카드형 표준 / 컨테이너 정렬 SSOT(wrap·prose 좌측 align baseline) / forbidden·gotcha·WRONG-CORRECT 갱신.

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

## 헌법 H1~H13 (위반 = FAIL)

| # | 조항 | 계층 |
|---|---|---|
| H1 | 듀얼톤 1급 (단톤 ✗) | ① TONE |
| H2 | 타이포 16스케일 (12px↔200px+) + **한국어 4단계 (K-Hero·K-Section·K-Lead·K-Body)** | ④ EMPHASIS |
| H3 | 12-grid + offset + **컨테이너 정렬 SSOT (wrap·prose 좌측 align baseline)** | ② LAYOUT |
| H4 | 시네마틱 = 서사 (단순 fade ✗) | ③ STRUCTURE |
| H5 | Premium Restraint (페이지당 5스톱 1회만) | ④ EMPHASIS |
| H6 | 헤드라인 4단 위계 | ③ STRUCTURE |
| H7 | A11Y (aria + reduced-motion + 44pt) | 전체 |
| H8 | **채도 S≥85 양쪽 통일** | ① TONE |
| H9 | 카드 배경 룰 (파스텔워시 ✗) | ① TONE |
| H10 | Sticky 비공허 (다중 state) | ② LAYOUT |
| H11 | Frame Sandwich (3프레임) | ② LAYOUT |
| H12 | 인라인 강조 (SVG/strip만, text-decoration ✗) | ④ EMPHASIS |
| **H13** | **반응형 3단+ (D1≥1024 / D2 769-1024 / D3 481-768 / D4≤480) + nb-span 자동 해제** | ② LAYOUT |

상세: `→ references/constitution.md`

---

## 8축 SSOT — 박제 마스터 DB

| 축 | 파일 | 핵심 |
|---|---|---|
| A1 | `→ references/axis-1-color.md` | iMac 7색·라이트/다크 풀채도·gradient-text 5스톱·형광펜 5색 |
| A2 | `→ references/axis-2-typography.md` + `→ references/korean-typography.md` | 16스케일·Sticky Chip Hero PT·빅넘버·gradient-text 5단위 + **한국어 4단계·word-break·nb-span** |
| A3 | `→ references/axis-3-layout.md` + `→ references/responsive.md` | 12-grid+offset·매거진 비대칭·Bento·면분할 + **반응형 H13 4단** |
| A4 | `→ references/axis-4-line.md` + `→ references/diagram-geometry.md` | divider·SVG path·border·연결선 + **순환 6노드·플로우·marker** |
| A5 | `→ references/axis-5-motion.md` | sticky·Frame Sandwich·focus-expression·**Apple-easing**·scroll-snap |
| A6 | `→ references/axis-6-emphasis.md` | 5색 형광펜·SVG underline 5색·gradient-text·5스톱 |
| A7 | `→ references/axis-7-dataviz.md` | Big-Number·spec 풀·compare matrix·정보집약 강약 |
| A8 | `→ references/axis-8-interaction.md` | colornav·AAP·BOC·tile·scroll-snap·44pt |
| **PROSE** | `→ references/prose-preservation.md` | **본문 verbatim 보존·shaper-skill 영토 분리·시각만 첨가** |

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
❌ 한국어 PT 빅타이포에 word-break: keep-all 누락 (어절 잘림)
❌ wrap·prose 좌측 정렬선 불일치 (max-width 다름·padding 다름)
❌ 단일 미디어 쿼리 (예: 900px 1단)만으로 반응형 처리 → H13 위반
❌ 산문체 본문을 표·블릿으로 변환 (shaper-skill 영토 침범)
❌ inline grid `repeat(N,1fr)` 박은 채 모바일 break 누락
❌ SVG 다이어그램 화살표가 노드 박스 안 침범 (marker 보임 ✗)
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

### v3.1 추가 — 한국어 Hero (필수 박제)

```
❌ WRONG (한국어 word-break 없는 PT 빅타이포)
.hero-title { font-size: clamp(56px, 11vw, 200px); }
<h1 class="hero-title">메타인지가 분기점이다</h1>
→ 1440px에서 "메타인지" + "가" 분리되어 어색하게 잘림 (어절 무시 줄바꿈)

✅ CORRECT (keep-all + nb-span 강제)
.hero-title { font-size: clamp(56px, 11vw, 200px); word-break: keep-all; }
.nb { white-space: nowrap; }
@media (max-width: 768px) { .nb { white-space: normal; } }
<h1 class="hero-title">
  <span class="nb">메타인지가</span><br>
  <span class="nb">분기점이다</span>
</h1>
→ 데스크톱 의미단위 줄바꿈 강제 / 모바일 자연 해제
```

### v3.1 추가 — 정렬선 SSOT

```
❌ WRONG (wrap·prose max-width 불일치)
.wrap  { max-width: 1100px; padding: 0 24px; }
.prose { max-width: 760px; margin: 0 auto; padding: 0; }
→ prose가 화면 가운데로 가서 section-title과 좌측 시작점 어긋남

✅ CORRECT (wrap == prose 컨테이너 동기)
.wrap  { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
.prose { max-width: 1100px; margin: 0 auto; padding: 0 24px; width: 100%; }
.prose > * { max-width: 760px; }
→ prose 컨테이너는 wrap과 동일 좌측 시작점 / 자식만 가독폭 760 제한
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
| **한국어 Hero에 어절 단위 줄바꿈 깨짐** | `word-break: keep-all` + nb-span 강제. `→ korean-typography.md` |
| **wrap·prose 좌측 정렬선 어긋남** | wrap 컨테이너와 prose 컨테이너 max-width·padding 동기. `.prose > *` 자식만 760 제한 |
| **단일 미디어 쿼리 1단 반응형** | H13 위반. D1·D2·D3·D4 4단 박제. `→ responsive.md` |
| **inline `style="grid-template-columns:repeat(N,1fr)"` 모바일 미분해** | 속성 선택자 + `!important` 강제 분해 박제 |
| **SVG 다이어그램 그릴 때마다 어긋남** | 순환 6노드 12·2·4·6·8·10시 표준 좌표 + 호 끝점 노드 가장자리에서 4-8px 박제. `→ diagram-geometry.md` |
| **산문체 입력 받았는데 표·블릿으로 압축** | shaper-skill 영토 침범. verbatim 보존 + 시각 첨가만. `→ prose-preservation.md` |
| **Big Number 좌·캡션 우 1:1 grid 어색** | bignum 카드형 통합 박제 (rainbow gradient 숫자 + caption 480px max) |
| **부록·헌장 같은 단순 라벨에 거대 헤드라인** | `.section-title.compact` 클래스로 36-56px 축소 박제 |

---

## 변경 이력

- **v3.1 (2026-05-10)** — 형 실측 7건 보강. 한국어 4단계 타이포(K-Hero·K-Section·K-Lead·K-Body) + word-break + nb-span / 반응형 헌법 H13 4단 / SVG 다이어그램 기하(순환 6노드 12·2·4·6·8·10시 표준) / 본문 verbatim 보존 룰 (shaper-skill 영토 분리) / 정렬선 SSOT (wrap·prose 동기) / Big Number 카드형 / 신규 references 4종 (korean-typography·responsive·diagram-geometry·prose-preservation).
- **v3.0 (2026-05-07)** — 30페이지 박제·4계층 의사결정·H1~H12 결정주의·5모드·gradient-text·Apple-easing·형광펜 5색 마스터. v1.0 완전 폐기 (백업: `apple-canvas.v1-backup/`).
- v1.0 (2026-05-02) — 27페이지 5계층 42패턴. 차분 컬러·형광펜 ✗ 한계.
