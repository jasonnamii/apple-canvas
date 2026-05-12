# Visual Effects Catalog — HTML 시각효과 정본

> 시각효과는 *효과명*이 아니라 *의도 언어*다. 카탈로그는 *어휘 사전*·정답 ✗.

## 핵심 원칙

→ **레이어·깊이·위계** — Apple 디자인의 본질.
→ 효과 선택 전 자문:
  - 무엇이 앞으로? 무엇이 뒤로?
  - 무엇이 *드러나야* 하는가?
  - 무엇이 *물성*을 가져야 하는가?
  - 무엇이 *프리미엄*해야 하는가?
  - 무엇이 *조용*해야 하는가?

→ **섹션당 *지배적 효과 1개*만.** 모든 섹션에 특수 효과 = 어느 것도 특별하지 ✗.

---

## 1. Occlusion / Depth Layering (앞뒤 겹침)

| 효과 | 정의 | 사용 | 피할 때 | 구현 키워드 |
|---|---|---|---|---|
| **Depth Occlusion** | Subject가 텍스트/UI를 부분 덮음·층 깊이 | Hero·잠금화면식·포스터·갤러리 입구 | 본문 가독성 중요 | z-index·mask·subject cutout·alpha mask |
| **Type Behind Subject** | 큰 타이포가 인물/사물/제품 *뒤*에 | 에디토리얼 cover·creator 쇼케이스·캠페인 | 작은 글자·긴 헤드라인·저대비 이미지 | foreground PNG·CSS mask·clipping path·z-stack |
| **Object Overhang** | 이미지/사물이 컨테이너 경계 *넘어감* | 제품 카드·앱 스크린샷·매거진 | 보수적 투자 문서·엄격 그리드 | overflow visible·negative margin·z-index |
| **Interleaved Layers** | 텍스트·이미지·도형이 front/back 교차 | 프리미엄 에디토리얼·키노트 hero·매니페스토 | 정보 밀도 ↑ 페이지 | z-index stack·absolute·blend modes |
| **Foreground Cutout** | 배경에서 subject 분리·독립 레이어 | 인물·creator·사물·제품 | 엣지 품질 ↓·복잡 배경 | transparent PNG·segmentation·alpha channel |
| **Silhouette Layering** | Subject가 *실루엣*으로 텍스트/컬러 위 | 드라마틱 포스터·음악·시네마틱 | 교육·신뢰 문서 | threshold·multiply·dark overlay·mask |
| **Partial Cover** | 일부만 가림·완전 차단 ✗ | 앱 카드·갤러리 티저·제품 프리뷰 | 법무·재무·정밀 문서 | overlap·z-index·border radius·shadow |

---

## 2. Masking / Reveal (마스킹·노출)

| 효과 | 정의 | 사용 | 피할 때 |
|---|---|---|---|
| **Mask Reveal** | 마스크 영역으로 콘텐츠 등장 | 프리미엄 hero·작품·제품 런칭 | 일반 보고서 섹션 |
| **Gradient Mask Fade** | 엣지가 그라디언트로 fade | 가로 스크롤·티저 프리뷰·이미지 엣지 | 완전 노출 필요 |
| **Text Knockout** | 텍스트가 도형/이미지 *뚫고* 배경 노출 | 포스터·캠페인·강한 헤드라인 | 작은 한글·긴 문단 |
| **Image Inside Type** | 글자 *안*에 이미지/영상 | 음악·문화·creator·캠페인 타이틀 | 투자·전략 문서 |
| **Spotlight Mask** | 원형/소프트 마스크가 포커스 드러냄 | 인터랙티브 탐색·갤러리 발견 | 모바일 단순 읽기 |
| **Curtain Reveal** | 커버 레이어 열리며 노출 | 갤러리·작품·공연·프리미엄 입구 | 반복 마이너 섹션 |
| **Sliced Reveal** | 가로/세로 슬라이스 다중 노출 | 캠페인·음악·모션 hero | 깨끗한 제품 UI·교육 |
| **Scroll Mask** | 고정 마스크 윈도우·스크롤로 콘텐츠 변경 | Apple식 제품 서사·프로세스 설명 | 짧은 페이지·단순 글 |

---

## 3. Material / Glass / Translucency (유리·반투명)

| 효과 | 정의 | 사용 | 피할 때 |
|---|---|---|---|
| **Frosted Glass** | 반투명 패널이 배경 블러 | 내비·플로팅 컨트롤·Apple식 UI | 일반 SaaS 카드 남발 |
| **Liquid Glass** | 광학 하이라이트·깊이·유체감 | Apple 영감 UI·프리미엄 앱 셸·플로팅 컨트롤 | 정적 전략 문서·저성능 페이지 |
| **Vibrancy** | foreground 텍스트가 blurred 배경 광도 흡수 | iOS식 패널·미디어 UI·오버레이 | 긴 본문 |
| **Acrylic Panel** | 반투명·블러·틴트·미세 노이즈 | 대시보드·앱 UI·소프트 제품 인터페이스 | 프리미엄 에디토리얼 (페이퍼가 맞음) |
| **Translucent Navigation** | 헤더가 콘텐츠 위 부분 투명 | 제품 사이트·Apple식·앱 랜딩 | 가독성 최우선 밀집 문서 |
| **Edge Highlight** | 글래스/카드 엣지에 thin highlight | 글래스 UI·프리미엄 패널·다크/라이트 혼합 | 플랫 에디토리얼 시스템 |
| **Material Tint** | 반투명 레이어가 브랜드 색 약하게 흡수 | 브랜드 시스템·앱 패널·약한 위계 | 데이터 테이블 (색 의미 충돌) |

---

## 4. Light / Shadow / Elevation (빛·그림자·고도)

| 효과 | 정의 | 사용 | 피할 때 |
|---|---|---|---|
| **Contact Shadow** | 사물 *바로 아래* 작은 그림자·물리감 | 제품 렌더·플로팅 카드·사물 쇼케이스 | 순수 플랫 에디토리얼 |
| **Ambient Shadow** | 큰 소프트 그림자·고도·대기 깊이 | 카드·제품 스크린샷·레이어 UI | Brutalist·print 룩 |
| **Cast Shadow** | 광원 방향 그림자 | 사실적 제품 구성·제품 스테이지 | 인터페이스 카드 (의도적 물리감 아닐 때) |
| **Inner Shadow** | 컨테이너 *안* 그림자·함몰감 | 입력 필드·press 버튼·inset 패널 | 깨끗한 에디토리얼 |
| **Rim Light** | 사물 가장자리 빛·배경 분리 | 다크 제품 hero·시네마틱·프리미엄 테크 | 일반 네온 남발 |
| **Glow Halo** | 사물/CTA 주변 확산 빛 | 단일 hero focal point·프리미엄 제품 디테일 | 다중 카드·SaaS 클리셰·투자 문서 |
| **Long Shadow** | 그래픽 양식의 긴 그림자 | 포스터·playful 브랜드·레트로 그래픽 | Apple식 프리미엄 UI |

---

## 5. Photographic Depth (초점·심도)

| 효과 | 정의 | 사용 | 피할 때 |
|---|---|---|---|
| **Depth of Field (DOF)** | Subject 선명·foreground/background 블러 | 시네마틱 hero·인물·캠프·공연·제품 사진 | 데이터·다이어그램·텍스트 중심 |
| **Foreground Blur** | 블러된 전경 사물·시네마틱 깊이 | Filmic 랜딩·감성 스토리·K-pop/캠프 | 깨끗한 제품 UI |
| **Rack Focus** | 한 평면→다른 평면 포커스 이동 | 순차 스토리텔링·제품 feature 전환 | 정적 보고서 |
| **Tilt Shift** | 선택적 블러·미니어처·초현실감 | 도시·지도·playful 시각화 | 권위 문서 |
| **Vignette Focus** | 엣지 어두워짐·시선을 중앙으로 | 시네마틱 hero·이미지 중심 | 흰 에디토리얼 |
| **Atmospheric Depth** | 원거리 레이어 fade·블러·깊이 암시 | 풍경·공간 씬·레이어 일러스트 | 정밀 UI |

---

## 6. Crop / Frame / Composition (크롭·프레임)

| 효과 | 정의 | 사용 | 피할 때 |
|---|---|---|---|
| **Oversized Crop** | 사물/얼굴이 viewport 넘어 크롭·스케일·드라마 | 패션·제품·creator·에디토리얼 hero | 사물 전체 이해 필요 |
| **Edge Crop** | 요소가 화면 엣지로 빠짐 | 프리미엄 에디토리얼·Apple식 제품 스케일 | 대시보드·관리자 UI |
| **Frame Break** | Subject가 프레임/카드 경계 *넘음* | 포트폴리오·제품 카드·hero | 보수적 문서 |
| **Split Frame** | 강한 두 시각 패널로 분할 | Before/After·개념/구현·제품/스토리 | 경쟁 요소 많음 |
| **Layered Cards** | 물리적 시트처럼 카드 겹침 | 로드맵·포트폴리오·앱 화면·근거 stack | 모든 섹션 (템플릿 느낌) |
| **Collage Overlay** | 이미지·라벨·스티커·캡션 컴포즈 콜라주 | 문화·아카이브·교육·창작 프로세스 | 투자 메모 (sobriety 필요) |
| **Viewport Bleed (Full Bleed)** | 이미지/컬러가 브라우저 풀 엣지 | Hero·챕터 break·몰입 섹션 | 긴 읽기 섹션 |

---

## 7. Blend / Color / Texture (블렌드·색·질감)

| 효과 | 정의 | 사용 | 피할 때 |
|---|---|---|---|
| **Multiply Blend** | 종이 위 잉크처럼 어둡게 블렌드 | 에디토리얼·아카이브·포스터·페이퍼 | 깨끗한 앱 UI |
| **Screen Blend** | 투영광처럼 밝게 | 빛 효과·시네마틱 오버레이 | 본문 가독성 |
| **Difference Blend** | 배경 따라 색 반전·반응형 대비 | 실험 타이포·아트 사이트 | 비즈니스 문서 |
| **Duotone** | 이미지를 두 색으로 매핑 | 브랜드 일관성·에디토리얼 시리즈·캠페인 | 제품 스크린샷 (정확 색) |
| **Gradient Map** | 이미지 톤을 그라디언트로 리컬러 | 강한 아트 디렉션·음악·문화 | 사실 제품/인물 |
| **Grain Texture** | 디지털 평면감 줄이는 미세 노이즈 | 페이퍼·시네마·아카이브·프리미엄 에디토리얼 | 깨끗한 제품 UI·작은 텍스트 |
| **Halftone** | 이미지가 도트 기반 인쇄 텍스처 | 팝아트·코믹·레트로 캠페인 | 프리미엄 Apple식 미니멀 |
| **Paper Texture** | 배경에 미세 종이 결·섬유 | 리포트·교육·인문학·프리미엄 에디토리얼 | 미래형 제품 UI |

---

## 8. Typographic Special Effects (타이포 특수)

| 효과 | 정의 | 사용 | 피할 때 |
|---|---|---|---|
| **Outline Type Overlay** | 큰 outline 텍스트가 이미지 뒤/위 | 포스터·갤러리·음악·포트폴리오 | 빽빽한 비즈 설명 |
| **Type Wrapping Object** | 텍스트가 이미지/사물 실루엣 따라 둘러쌈 | 매거진 레이아웃·에디토리얼 스토리 | 반응형 모바일 복잡도 |
| **Collision Typography** | 텍스트가 이미지/사물 경계 *충돌* | 볼드 매니페스토·캠페인·패션 | 명료성 최우선 문서 |
| **Vertical Side Label** | 작은 회전 텍스트가 공간 마커 | 에디토리얼 섹션 마커·갤러리 캡션·시스템 맵 | 모바일 중심 읽기 |
| **Metadata Caption Layer** | 캡션이 *디자인 요소*·단순 설명 ✗ | 갤러리·리서치 도시에·케이스 스터디 | 마케팅 hero 과다 디테일 |
| **Kinetic Stack Type** | 반복·스택 단어로 리듬·시각 밀도 | 매니페스토·브랜드 캠페인·이벤트 | 투자 문서 |

---

## 9. Spatial / 3D / Interactive (공간·3D·인터랙티브)

| 효과 | 정의 | 사용 | 피할 때 |
|---|---|---|---|
| **Parallax Depth** | foreground/background 다른 속도 | 제품 스토리·시네마틱·Apple식 스크롤 서사 | 긴 읽기 문서 |
| **Gyroscopic Tilt** | 디바이스 방향에 레이어 반응 | 모바일 쇼케이스·몰입 갤러리 | 데스크톱 전용·접근성 민감 |
| **3D Card Tilt** | 커서 위치 따라 카드 회전 | 포트폴리오·제품 카드·인터랙티브 쇼케이스 | 진지한 메모·모바일 UX |
| **Isometric Stack** | UI/시스템 레이어 isometric 분리 | 플랫폼 아키텍처·앱 feature·OS 메타포 | 감성 스토리텔링 |
| **Exploded View** | 컴포넌트가 공간적으로 분리·구조 표시 | 제품·플랫폼 시스템·워크플로·기술 설명 | 단순 브랜드 페이지 |
| **Spatial Scene** | 사진을 subject/background 깊이 씬으로 | 잠금화면식 비주얼·인물·풍경·몰입 hero | subject-background 분리 불명확 |

---

## 10. Apple-Style Visual Effects (압축)

| Apple 패턴 | 본질 |
|---|---|
| **Depth Effect** | Subject가 텍스트/UI 앞 — 강한 레이어드 |
| **Layered Material** | 반투명·블러로 위계 |
| **Spatial Scene** | 사진을 *깊이 인식 씬*으로 |
| **Masked Product Reveal** | 제품/이미지가 마스크로 노출 |
| **Pinned Visual Layer** | 핵심 시각 고정·주변 콘텐츠 변화 |
| **Soft Depth Shadow** | 매우 미세한 contact·ambient 그림자 |
| **Crossfade State Change** | 제품 상태 opacity로 전환 |
| **Glass Nav Surface** | 헤더·컨트롤이 반투명 머터리얼 |
| **Large Scale Crop** | 대형 크롭·confidence·materiality |
| **Minimal Micro Depth** | hover/press가 작은 elevation·opacity만 |

**Apple-style 톤**: quiet·precise·premium·intentional·continuous·product-centered
**Apple-style ✗**: bouncy·decorative·random·game-like·neon-heavy·AI-generated

---

## 11. 효과 조합 레시피

### A. iPhone Lock Screen식 Hero
→ Foreground Cutout + Type Behind Subject + Depth Occlusion + Soft Depth Shadow + Subtle Parallax
→ **For**: creator profile·캠페인 hero·갤러리 입구·프리미엄 랜딩
→ **Avoid**: subject 불명확·헤드라인 완전 가독 필수

### B. Apple Product Page식 섹션
→ Pinned Visual Layer + Masked Product Reveal + Crossfade State + Product Scale Reveal + Translucent Nav + Minimal Micro Depth
→ **For**: 앱 feature·플랫폼 intro·프리미엄 제품 페이지
→ **Avoid**: 텍스트 중심·약한 제품 비주얼

### C. Museum Gallery식 작품 페이지
→ Curtain Reveal + Museum Caption + Foreground Cutout + Soft Contact Shadow + Progressive Disclosure
→ **For**: 작품·포트폴리오·creator 쇼케이스·Cre8orClub 갤러리
→ **Avoid**: 빠른 스캔 필요

### D. Korean Premium Magazine식 문서
→ Oversized Crop + Paper Texture + Type Wrapping Object + Vertical Side Label + Metadata Caption + Split Frame
→ **For**: KISAS·문화 리포트·교육 철학·공공 내러티브
→ **Avoid**: 복잡 대시보드·제품 UI

### E. Research Dossier식 고급 리포트
→ Paper Texture + Collage Overlay + Metadata Caption + Stamped Label + Evidence Card Stack + Subtle Shadow
→ **For**: 전략 메모·결정 문서·역사/문화 분석
→ **Avoid**: 소비자 랜딩

---

## 12. 효과 선택 빠른표

| 인상 | 추천 | 피할 |
|---|---|---|
| Apple식 고급감 | Depth Occlusion·Frosted Glass·Mask Reveal·Product Scale·Parallax Depth | 네온 글로우·파티클·과한 3D Tilt |
| 매거진/에디토리얼 | Oversized Crop·Type Behind Subject·Paper Texture·Metadata Caption | Glassmorphism 남발 |
| 뮤지엄/갤러리 | Museum Caption·Curtain Reveal·Foreground Cutout·Soft Shadow | Hover Glow·Shimmer |
| 전략/투자문서 | Layered Cards·Sticky Decision Box·SVG Stroke Draw·Count-up | Parallax·Cursor Follow |
| 교육/인문학 | Paper Texture·Collage Overlay·Step Reveal·Timeline·SVG Stroke Draw | Futuristic Glass·Neon |
| 캠페인/브랜드 | Mask Reveal·Kinetic Stack Type·Sliced Reveal·Duotone | 3카드 반복·일반 Fade Up |
| 앱/플랫폼 UI | Frosted Glass·Translucent Nav·Card Stack·Shared Element | 과한 포스터형 타이포 |
| 시네마틱 | DOF·Foreground Blur·Vignette·Rack Focus | 촘촘한 텍스트 레이아웃 |

---

## 13. Anti-AI 시각효과 금기

```
✗ random neon glow
✗ purple blue gradient background
✗ floating glowing orbs
✗ particle background without meaning
✗ glass cards everywhere
✗ every card same hover lift
✗ fake 3D dashboards
✗ generic blurred blob background
✗ centered hero with abstract wave
✗ meaningless gradient text
✗ heavy drop shadows on every card
✗ excessive rounded corners
✗ uniform card grid with icons
✗ hover effects on non-interactive objects
✗ scroll animation applied to every section
```

→ 효과가 *위계·깊이·노출·포커스·의미* 중 하나 개선 ✗ = **제거**.
→ 섹션당 *지배적 효과 1개*. 다섯 ✗.
→ Apple-like = 절제·장식 ✗.

---

## 14. 선택 룰 (산출 직전 자가 점검)

```
효과 적용 전 자문:
1. 무엇이 앞으로? 무엇이 뒤로?
2. 무엇이 드러나야 하는가?
3. 무엇이 *물성*을 가져야?
4. 무엇이 프리미엄해야?
5. 무엇이 조용해야?
6. 이 효과가 *의미·위계·깊이·노출·포커스* 중 하나 개선하나?
```

→ 한 페이지 = *지배적 효과 1개*. *반복 효과 ✗*.
→ 진지한 문서일수록 *효과 줄이기*. 적은 게 강함.
