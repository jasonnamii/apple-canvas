# Forbidden 카탈로그 (위반 = FAIL)

## 컬러
```
❌ 라이트 액센트 = #0071E3·#00845A (차분 시스템컬러)
❌ 다크 액센트 = #2997FF·#30D158·#FF9F0A·#FF375F (시스템 채도 부족)
❌ 라이트=차분 / 다크=비비드 이원화 (양쪽 동일 hex 강제)
❌ 카드 배경 = 파스텔 워시 (S<30·L>90)
❌ 라이트 hero = 순흑 그라디언트 (#111→#2a2a2a)
❌ 단일 단색 그라디언트 (2스톱) — 5스톱 multi-stop만
❌ 페이지당 5스톱 그라디언트 2회 이상 (Premium Restraint)
```

## 모션
```
❌ inline-media에 frame 1개만 (CLS 폭발) — start/end/fallback 3프레임
❌ Sticky 250vh 빈공간 (H10) — 다중 콘텐츠 state 강제
❌ transition easing = ease·ease-in·ease-out (cubic-bezier(0.4,0,0.2,1) 강제)
❌ animation-timeline·view() 등 실험 신기능 (Apple 미사용)
```

## 타이포·강조
```
❌ text-decoration: underline (H12) — SVG path만
❌ 16스케일 외 임의 size (22px·30px 등)
❌ 헤드라인-바디 사이 강약 ✗ (최소 2.5배 차이 강제)
❌ 형광펜 strip 방식 (linear-gradient 180deg transparent 55%) — `.hl` rounded-pill만
❌ 형광펜 구 클래스 (.highlight-wrapper·.highlight-pink·.highlight-mint·.highlight-coral·.highlight-lilac) — `.hl`로 단일 통일
❌ 형광펜 opacity·color-mix 톤다운 — 라이트·다크 동일 비비드 강제
❌ 형광펜 6색 이상 (5색 카탈로그 강제)
❌ gradient-text를 body에 (Hero/Eyebrow/Span/List/Inline 5단위만)
```

## 미세결 (Apple 미사용 — 박제 ✗)
```
❌ font-variation-settings·font-feature-settings (kern/liga/dlig)
❌ text-wrap: balance/pretty
❌ text-decoration-skip-ink·hanging-punctuation
❌ ::first-letter·text-emphasis
❌ conic-gradient·paint(houdini)·feGaussianBlur
❌ accent-color·color-scheme·color-mix·light-dark
❌ mask-image: linear-gradient·@property
❌ scroll-behavior·overscroll-behavior·@starting-style
❌ inert·popover·anchor-positioning·<dialog>·<details>
❌ oklch·subgrid·@container·scrollbar-gutter·@supports
```
→ L6 박제 결과: 58종 중 48종 0건. 박제 제외.

## Apple 정신
```
❌ 미세결 풍부함 추구 (검증된 9~10종만)
❌ MS워드/엑셀 룩 (회색 표·강약 ✗·비비드 ✗)
❌ 허여멀건/힘없는/강약없는 디자인
```
