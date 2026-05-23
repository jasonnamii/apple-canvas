# Constitution H1~H12

> 30페이지 박제 기반 12조항 결정주의. 위반 = FAIL (H12만 경고).

| # | 조항 | 본질 | 위반 |
|---|---|---|---|
| H1 | 듀얼톤 1급 | `[data-theme="light"]`·`[data-theme="dark"]` 양쪽 정의 강제. 단톤 ✗ | FAIL |
| H2 | 타이포 16스케일 | eyebrow 12px ↔ hero-super 200px+ (~18배). 임의 사이즈 ✗ | FAIL |
| H3 | 12-grid + offset | `large-N + offset-N` 패턴 강제. 임의 width ✗ | FAIL |
| H4 | 시네마틱 = 서사 | sticky·sandwich·focus-expression이 콘텐츠 변환을 동반. 단순 fade ✗ | FAIL |
| H5 | Premium Restraint | 페이지당 5스톱 multi-stop 그라디언트 **1회만** | FAIL |
| H6 | 헤드라인 4단 위계 | eyebrow → hero → sub → body. 위계 무너지면 ✗ | FAIL |
| H7 | A11Y | aria-label 5+·prefers-reduced-motion 분기·44x44pt 터치 | FAIL |
| H8 | 채도 S≥85 양쪽 통일 | 라이트·다크 모두 액센트 S≥85% L 50~70%. 양쪽 동일 hex | FAIL |
| H9 | 카드 배경 룰 | 라이트=화이트 + vivid SVG. 파스텔 워시(S<30·L>90) ✗ | FAIL |
| H10 | Sticky 비공허 | sticky 250vh = 다중 콘텐츠 state 필수. 빈 250vh ✗ | FAIL |
| H11 | Frame Sandwich | inline-media는 start-frame + endframe + fallback 3프레임 (CLS 0) | FAIL |
| H12 | 인라인 강조 | strip 또는 SVG underline (clipPath). text-decoration: underline ✗ | 경고 |

## 자동 검증
`→ references/qc-checklist.md` bash 스크립트로 H1·H7·H8·H9·H10·H11 자동 스캔.

## 적용 매핑 (4계층)
- **① TONE** = H1·H8·H9
- **② LAYOUT** = H3·H10·H11
- **③ STRUCTURE** = H4·H6
- **④ EMPHASIS** = H2·H5·H12
- **전체 (모드 무관)** = H7


## MINIMAL 볼륨 — 감산 헌법 (위반 = FAIL)

| # | 조항 |
|---|---|
| M1 | 액센트 색 1개만 (S≥90%·L 40~60%) |
| M2 | 액센트 면적 ≤5% (페이지 전체 픽셀 대비) |
| M3 | 풀필 색 블록 0개 — 액센트는 텍스트·라인·점·작은 칩에만 |
| M4 | 그라디언트 금지 (단색만) |
| M5 | 형광펜 금지 (`text-decoration` ✗·hl-pill ✗) |
| M6 | 디바이더 1px hairline만 (Light=`#E5E5E5` / Dark=`#2A2A2A`) |
| M7 | 웨이트 2개만 (Light 300 + Semibold 600) |
| M8 | 카드 라운드 `border-radius: 0` 또는 ≤4px |
| M9 | 침묵 영역 ≥50% (흰/검 ground만) |
| M10 | **Ferrari 추가** — serif·italic 절대 ✗·산세리프(Pretendard/SUIT)만 |

**alias 매핑:** "아이브"=Light MINIMAL·"페라리"=Dark MINIMAL·"미니멀"=Light(디폴트)

**비비드 채도 신성불가침 (H5 격상):** MINIMAL의 1색도 S≥90%·L 40~60%. `#FF2D7E` ✓ / `#F2A8C6`(파스텔) ✗ / `#A85577`(머디) ✗ / `opacity:0.5`로 비비드 죽이기 ✗.

**토큰 SSOT:** `assets/tokens.css` `[data-mode="ive"]`·`[data-mode="ferrari"]` 셀렉터로 자동 적용.
