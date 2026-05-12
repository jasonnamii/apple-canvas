# Motion Catalog — HTML 문서 모션 정본

> 모션은 *효과명*이 아니라 *의도 언어*다. 카탈로그는 *어휘 사전*·정답 ✗.

## 핵심 원칙

→ **Motion must clarify meaning, guide attention, or create spatial continuity. Do not use motion as decoration.**
→ "예쁜 모션"이 아니라 *왜 그 모션인가*가 본질.
→ 모든 모션은 `prefers-reduced-motion` 폴백 필수.

---

## 1. 카탈로그 — 11분류 50+ 패턴

### Entrance (등장)

| 패턴 | 한국어 | 효과적 | 남용 ✗ |
|---|---|---|---|
| Fade In | 서서히 나타남 | 첫 진입·섹션·정보 공개 | 강한 임팩트 히어로 |
| Fade Up | 아래에서 살짝 올라옴 | 카드·문단·섹션 타이틀 | 모든 요소 반복 |
| Slide In | 좌우상하 진입 | 단계 설명·사이드 패널 | 고급 문서·촌스러움 |
| Scale In | 작게 시작·커짐 | 버튼·모달·카드 | 프리미엄 전체 |
| Blur In / Focus Reveal | 흐릿→선명 | 감성 히어로·영화적 | 본문 가독성 |

### Scroll Narrative (스크롤 서사)

| 패턴 | 효과적 | 남용 ✗ |
|---|---|---|
| Scroll-triggered Reveal | 긴 문서·보고서·랜딩 | 짧은 문서 |
| Scroll-linked Animation | Apple 제품 설명·시퀀스 서사 | 일반 보고서 전체 |
| Scroll Scrubbing | 제품 분해도·하드웨어·앱 시연 | 텍스트 중심 |
| Sticky Section / Pinning | Apple 제품 페이지·핵심 메시지 집중 | 모바일 긴 구간 |
| Parallax Scrolling | 깊이감·브랜드 히어로·문화 페이지 | 비즈니스·접근성 민감 |
| Layered Parallax | 고급 브랜드·공간감 | 정보량 많은 문서 |
| Section Snap | 프레젠테이션·키노트형 | 자연스러운 읽기 흐름 |

### Transition (전환)

| 패턴 | 효과적 | 남용 ✗ |
|---|---|---|
| Crossfade | 제품 상태 변화·Before/After | 차이가 명확해야 하는 비교 |
| Dissolve | 감성·영화적 | 데이터·전략 문서 |
| Wipe | 챕터 전환·이미지 리빌 | 발표 템플릿 느낌 |
| Mask Reveal | Apple 제품 공개·포스터 히어로 | 본문 텍스트 |
| Clip-path Reveal | 실험 랜딩·캠페인 | 보수적 의사결정 |
| Shared Element | 카드→상세·갤러리→작품 | 단순 섹션 이동 |

### Spatial (공간)

| 패턴 | 효과적 | 남용 ✗ |
|---|---|---|
| Zoom In / Out | Apple 제품 클로즈업·기능 강조 | 멀미·과사용 |
| Camera Push-in | 히어로 몰입·제품 디테일 | 텍스트 문서 |
| Pan | 넓은 이미지·지도·타임라인 | 짧은 섹션 |
| 3D Tilt | 제품 카드·포트폴리오 쇼케이스 | 투자·전략 문서 |
| Depth Shift | Vision OS 느낌·공간형 UI | 일반 문서 |

### Sequence (순차)

| 패턴 | 효과적 | 남용 ✗ |
|---|---|---|
| Stagger | 카드 그리드·리스트·팀 소개 | 많은 항목 과도 적용 |
| Cascade Reveal | 프로세스·프레임워크·목차 | 한 화면 너무 많은 요소 |
| Step Reveal | 교육 문서·전략 흐름 | 전체 문서 사용 |
| Progressive Disclosure | 복잡한 문서·FAQ·의사결정 | 핵심 정보 숨기기 |

### Typography (타이포)

| 패턴 | 효과적 | 남용 ✗ |
|---|---|---|
| Text Fade In | 히어로 카피·선언문 | 본문 전체 |
| Line-by-line Reveal | 키노트·강한 메시지 | 긴 문단 |
| Word-by-word Reveal | 감성 카피·캠페인 슬로건 | 비즈니스 문서 |
| Kinetic Typography | 캠페인·영상형·강한 메시지 | 보고서·투자 문서 |
| Number Count-up | KPI·시장규모·성과 수치 | 근거 없는 숫자 강조 |

### Image (이미지)

| 패턴 | 효과적 | 남용 ✗ |
|---|---|---|
| Image Parallax | 브랜드·갤러리·캠프 랜딩 | 정보 중심 페이지 |
| Image Zoom on Scroll | Apple 제품·비주얼 집중 | 작은 이미지 |
| Ken Burns | 다큐멘터리·교육·스토리텔링 | UI 문서 |
| Before/After Slider | 리디자인·개선 사례·제품 비교 | 비교 불명확 |
| Contact Sheet Reveal | 포트폴리오·갤러리·창작 아카이브 | 단일 작품 쇼케이스 |

### UI Micro-interaction (UI 마이크로)

| 패턴 | 효과적 | 남용 ✗ |
|---|---|---|
| Hover Lift | 카드·버튼·링크 | 모바일 중심 |
| Hover Glow | CTA·프리미엄 제품 | AI 네온 남용 |
| Pressed State | 버튼·탭·컨트롤 | 장식용 요소 |
| Magnetic Hover | 실험적 브랜드 | 진지한 문서 |
| Cursor Follow | 갤러리·인터랙티브 캠페인 | 일반 HTML 보고서 |
| Accordion Expand | FAQ·상세·법무·리스크 | 핵심 내용 숨기기 |
| Drawer / Sheet | 모바일 UI·설정·상세 | 데스크톱 본문 |

### Loading

| 패턴 | 효과적 | 남용 ✗ |
|---|---|---|
| Skeleton Loading | 앱·대시보드 HTML | 정적 문서 |
| Shimmer | SaaS·앱 프로토타입 | 프리미엄 문서 (싸 보임) |
| Progress Bar | 긴 리포트·스크롤 위치·온보딩 | 짧은 문서 |

### Data Motion

| 패턴 | 효과적 | 남용 ✗ |
|---|---|---|
| Animated Chart Reveal | 데이터 리포트·시장분석 | 복잡한 차트 전체 |
| Bar Grow | 비교 수치 | 정밀 수치 해석 |
| Line Draw | 성장 추세·타임라인 | 너무 많은 선 |
| SVG Stroke Draw | 프로세스·지도·로고·다이어그램 | 본문 장식 |

### Ambient (배경)

| 패턴 | 효과적 | 남용 ✗ |
|---|---|---|
| Ambient Motion | 브랜드 분위기·히어로 배경 | 정보 중심 |
| Gradient Drift | 감성 랜딩·AI/테크 분위기 | AI 기본값처럼 보임 |
| Particle Motion | 기술·우주·네트워크 | 대부분의 비즈니스 |
| Noise / Grain Motion | 아카이브·시네마틱·문화 | 깨끗한 제품 UI |

---

## 2. Apple-style 모션 어휘 (제품·랜딩 페이지)

| Apple 패턴 | 표준 표현 | 사용 |
|---|---|---|
| Pinned Product Hero | Sticky Hero | 제품 고정·텍스트·상태 변화 |
| Scroll Scrubbed Sequence | Frame-by-frame | 하드웨어·앱 기능·Before/After |
| Cinematic Fade-in Hero | Hero Fade In | 프리미엄 첫 진입 |
| Product Scale Reveal | Scale on Scroll | 제품 디테일·기능 집중 |
| Layered Depth Parallax | Layered Parallax | 깊이감·Vision/공간형 |
| Sequential Text Reveal | Text Sequence | 키노트 스토리텔링 |
| Crossfade Product State | State Transition | 색상·화면·상태 교체 |
| Masked Product Reveal | Mask Reveal | 강한 이미지 공개·신제품 |
| Sticky Compare Panel | Sticky Comparison | 모델·가격·기능 비교 |
| Section Dissolve | Section Transition | 고급 랜딩·내러티브 |
| Image Parallax Block | Image Parallax | 브랜드·캠페인 섹션 |
| Minimal Micro-hover | Subtle Hover | 프리미엄 UI·과장 ✗ |
| Spatial Continuity | Shared Element | 카드→상세·목록→상세 |
| Reduced Motion Alt | Fade Replacement | 접근성 필수 |

**Apple-style 톤**: quiet·precise·premium·intentional·continuous·product-centered
**Apple-style ✗**: bouncy·decorative·random·game-like·neon-heavy·AI-generated

---

## 3. 모션 강도 0~5

| 강도 | 이름 | 사용처 |
|---|---|---|
| 0 | No Motion | 법무·약관·정밀 표 |
| 1 | Subtle | 전략·투자 문서 (Fade·Fade Up) |
| 2 | Guided | 교육·설명 (Step Reveal·Timeline) |
| 3 | Narrative | 제품 소개·브랜드 (Sticky·Parallax·Crossfade) |
| 4 | Cinematic | 캠페인·갤러리·키노트 (Scroll Scrub·Mask Reveal) |
| 5 | Experimental | 예술·인터랙티브 웹 (Cursor Follow·3D Tilt·Particle) |

→ 기본값 = **1~2 안전**. Apple식 제품 페이지 = **3~4**. 캠페인 = **4**.

---

## 4. Duration / Easing 표준

| 용도 | Duration | Easing |
|---|---|---|
| 버튼 hover | 120–180ms | ease-out |
| 카드 hover | 180–240ms | ease-out |
| Fade In | 300–600ms | ease-out |
| Fade Up | 400–700ms | cubic-bezier |
| Section Reveal | 600–900ms | ease-out |
| Hero Motion | 900–1400ms | custom cubic-bezier |
| Scroll-linked | scroll 기반 | linear mapping |
| Crossfade | 400–800ms | ease-in-out |
| Mask Reveal | 700–1200ms | cubic-bezier |
| Parallax | scroll 기반 | subtle ratio |

**Easing 기본**:
- Standard UI: `ease-out`
- Premium reveal: `cubic-bezier(0.22, 1, 0.36, 1)`
- Apple: `cubic-bezier(0.4, 0, 0.2, 1)`
- Soft section: `ease-in-out`
- Scroll-linked: `linear`
- Bounce ✗ (playful 브랜드 한정)

---

## 5. 강약 분포 룰 (한 페이지 안)

→ **모든 섹션 같은 강도 ✗.** 산만함의 원인.

```
한 페이지 안 강도 분포:
- 1개 섹션만 강도 N (페이지 최대)
- 2~3개 섹션 강도 N-1
- 나머지 강도 N-2 이하
- 1개 이상 정적 영역 (강도 0) 의무
```

예: PITCH 페이지 (최대 강도 3 narrative)
- Hero **강도 3** (Mask Reveal·1회만)
- KPI/Feature **강도 2** (Stagger·Count-up)
- 본문/도표 **강도 1** (Fade)
- Footer/Footnote **강도 0** (정적)

→ Density 1~2 (iconic/brand narrative) 페이지는 위 룰 면제. Density 3+에 적용.

---

## 6. Anti-AI 모션 (금지)

```
✗ random floating blobs
✗ excessive neon glow
✗ constant gradient animation
✗ particle backgrounds without meaning
✗ every card moving on hover (동일 패턴 반복)
✗ every section fading up the same way
✗ bouncy easing in premium documents
✗ aggressive zoom transitions
✗ blur-heavy text reveal
✗ parallax on every image
✗ cursor-follow in serious documents
✗ animated charts without data purpose
✗ scroll hijacking that breaks normal reading
```

→ 모션이 *comprehension·hierarchy·continuity·emotional pacing* 중 하나라도 개선 ✗ = 제거.

---

## 7. Reduced Motion 폴백 (필수)

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  /* 또는 fade로 대체 */
  .parallax, .scroll-scrub, .zoom-reveal, .tilt-3d {
    transform: none !important;
  }
}
```

```js
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reducedMotion) {
  // parallax·scroll scrub·zoom·3D tilt 비활성화
  // fade only로 대체
}
```

**Reduced motion 시 비활성화 대상**:
- Parallax
- Scroll scrubbing
- Large zoom
- 3D tilt
- Cursor follow
- Slide/zoom/blur transitions → fade로 대체

→ 모든 HTML 산출물에 `prefers-reduced-motion` 폴백 의무. 위반 = 접근성 FAIL.

---

## 8. 사용 지침 — 압축

| 모션 | 언제 |
|---|---|
| Fade In | 섹션 도입·차분 페이싱·서포트 콘텐츠 |
| Fade Up | 카드·문단·feature 블록·세로 읽기 흐름 |
| Stagger | 여러 관련 항목·카드 그리드·위계 스캔 |
| Step Reveal | 프로세스·프레임워크·결정 로직 설명 |
| Sticky Section | 한 핵심 아이디어 집중·제품/도표 고정 |
| Scroll Scrubbing | 사용자가 제품 시퀀스 제어 느낌 |
| Parallax | 깊이·분위기·시네마틱·브랜드 페이지 |
| Crossfade | 상태 비교·제품 화면 전환·전후 |
| Mask Reveal | 히어로 이미지·제품·작품·메이저 섹션 |
| Count-up | 신뢰성 있는 수치 강조 |
| SVG Stroke Draw | 플로우·맵·프레임워크·다이어그램 |
| Hover Lift | 카드·버튼 affordance |
| Accordion Expand | 보조 정보 숨김·메인 페이지 청결 |
| Progress Bar | 긴 문서·읽기 진행률 |
