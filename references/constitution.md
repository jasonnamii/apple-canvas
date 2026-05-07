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
