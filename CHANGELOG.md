
## v1.6 — 2026-05-14 (형광펜 px 고정·세로 0)

### 변경
- `.hl` padding `-0.05em 0.5em` → **`0 6px`**
- `.hl-tight` padding `-0.08em 0.36em` → **`0 4px`**
- `.hl-block` padding `-0.02em 0.7em` → **`0 8px`**
- 좌우 padding **px 절대값**으로 캡 · 세로 padding **0** 강제
- `box-decoration-break: clone` · `border-radius: 999px` 유지

### 사유
v1.5 음수 em padding은 본문(16px)에서만 정상. **큰 글자(20px+)에서 가로폭·세로폭 폭발** → 줄바꿈 시 알약이 글자보다 과하게 부풀고 line-height 누적으로 줄간격 깨짐. px 고정은 글자 크기와 무관하게 동일 절대값 → **모든 위계(64px hero ~ 13px caption)에서 "글자보다 아주 약간만 큰" 알약 보장**. (CSS 음수 padding은 0으로 처리되므로 v1.5 사양은 형식상 무의미했음 — v2.0에서 0으로 명시.)

### 주의
- em 기반 padding 사용 ✗ — 큰 글자에서 폭발
- 세로 padding > 0 사용 ✗ — line-height 누적 → 줄간격 파괴
- 본문 인라인이면 `.hl-tight` (4px)·헤드라인 이상이면 `.hl-block` (8px) 권장

---


## v1.5 — 2026-05-13 (형광펜 키 추가 축소·음수 padding)

### 변경
- `.hl` padding `0.02em 0.5em` → **`-0.05em 0.5em`** (상하 음수)
- `.hl-tight` padding `0em 0.36em` → **`-0.08em 0.36em`**
- `.hl-block` padding `0.05em 0.7em` → **`-0.02em 0.7em`**
- 좌우 padding·`border-radius: 999px` 유지

### 사유
v1.4도 형광펜 키가 글자보다 살짝 높음. 상하 padding을 음수로 주어 fill 영역을 글자 내부로 안쪽 압축. 글자 자체 위치·크기 영향 ✗ (background fill 영역만 축소).

### 주의
음수 padding이 너무 크면(`-0.2em` 이상) 글자 위아래가 fill 밖으로 튀어나옴. 현 사양은 글자 키의 5~15% 내부 압축만.

## v1.4 — 2026-05-13 (형광펜 키높이 축소)

### 변경
- `.hl` padding `0.1em 0.5em` → **`0.02em 0.5em`** (상하 80% 축소)
- `.hl-tight` padding `0.06em 0.36em` → **`0em 0.36em`** (본문 인라인용·상하 0)
- `.hl-block` padding `0.15em 0.7em` → **`0.05em 0.7em`** (헤드·히어로용·상하 1/3)
- 좌우 padding·`border-radius: 999px` 유지 (알약 폭·반원 모서리 보존)

### 사유
v1.3 padding은 상하 fill이 너무 두꺼워 형광펜 키가 글자 위아래로 부푼 띠처럼 보임. 첨부 참조 이미지의 분홍 형광펜처럼 글자 키와 거의 동일한 타이트 fill로 축소. 알약 모양(좌우 반원)은 유지.

## v1.3 — 2026-05-13 (형광펜 알약 모양 강화)

### 변경
- `.hl` border-radius `0.4em` → `999px` (완전 알약·pill)
- `.hl` padding `0.08em 0.32em` → `0.1em 0.5em` (좌우 여백 ↑·알약감 ↑)
- `.hl-tight` padding `0.04em 0.24em` → `0.06em 0.36em`·radius `0.3em` → `999px`
- `.hl-block` padding `0.12em 0.48em` → `0.15em 0.7em`·radius `0.5em` → `999px`

### 사유
0.4em radius는 "둥근 사각형"에 가까움. 첨부 Apple Education Community 페이지의 c8 green 형광펜처럼 양 끝이 반원인 알약 모양이 본질. 999px = 어떤 폰트 크기에도 자동 pill.

## v1.2 — 2026-05-13 (형광펜 단일 표준화)

### 변경 (BREAKING)
- 형광펜 strip 방식(linear-gradient 180deg transparent 55%, currentcolor 55%) **전면 폐기**
- 구 클래스명 `.highlight-wrapper`·`.highlight-pink`·`.highlight-mint`·`.highlight-coral`·`.highlight-lilac` **삭제**
- prism의 `.hl` rounded-pill 캡슐 방식으로 **단일 통일** (3개 디자인 스킬 공통 정본)
- 색 카탈로그 재매핑: pink #ff5e8a → #FF7AB6, yellow #ffd93d → #F0F921, mint → green #C6F432, coral·lilac 폐기, c8 #07ED21 · blue #6FB0FF 신규
- `--hl-ink #0A0A0C` 신규 — 형광펜 위 글자색 검정 강제 (라이트·다크 공통)
- `.hl-tight` / `.hl-block` 변형 도입 — 본문·헤드라인·히어로 전 위계 사용 ○

### 사유
형광펜이 글자 절반만 덮는 strip 방식은 가독성·줄바꿈·다크모드 모두 실패. 글자를 둥근 사각형으로 풀 fill하는 prism 방식이 본문·헤드·히어로 어디든 통용. 3스킬 클래스명 통일로 형의 작업물 호환성 ↑.

### 영향 파일
- `references/axis-6-emphasis.md` (전면 재작성)
- `references/axis-1-color.md` (§3 형광펜 토큰 교체)
- `references/color-spectrum.md` (형광펜 섹션 교체)
- `references/prose-preservation.md` (룰 3 strip → .hl 표현 갱신)
- `references/forbidden.md` (strip·구 클래스명 금기 추가)
- `assets/scaffold-master.html` (:root 토큰 + .hl CSS 교체)
- `assets/scaffold-bento.html`·`scaffold-scroll.html` (사용처 6건 교체)
- `modes/mode-bento.md`·`mode-mix.md` (사용처 3건 교체)
- `SKILL.md` (153행 예제 + 193행 Gotcha 갱신)

### 보존
- SVG 손글씨 underline (별도 강조 시스템)
- gradient-text 5단위·5스톱 multi-stop
- iMac 7색·C8 신호색

## v1.1 — 2026-05-12 (skill-doctor 처방)

### 코딩 품질
- 매직 px 컨테이너 너비(880/720/560/220) → `--container-{wide,medium,narrow,thin}` 토큰화
- `tokens.css` 자가위반 `!important` 제거 (prism `.hl color`)

### 안전성
- innerHTML 정적 템플릿 위치에 `// SAFE-innerHTML:` 주석 박제 (XSS-safe 명시)
- prism `!important` 비-print 1건 정당성 주석 추가

### 접근성 (a11y)
- 글로벌 `:focus-visible` outline 박제 (3 스킬 모두)
- 장식 SVG `aria-hidden="true"` 박제 (teenage components/samples)
- inline `style="margin"` → 유틸 클래스 추출 (teenage cover)

---

# Apple Canvas — Changelog

## v3.1 (2026-05-10) — 형 실측 7건 보강

### 본질
v3.0은 30페이지 apple.com 박제로 영문 데스크톱 디자인 발현은 충분했으나, **한국어·반응형·다이어그램·산문 처리** 4대 사각지대가 형 실측 세션에서 드러남. v3.1은 그 7건을 박제.

### 형 실측 7건 (출처: 2026-05-10 메타인지 분기점 리포트 디자인 세션)

1. **Hero 한국어 어절 단위 줄바꿈 깨짐** — "메타인지가" 단어 중간에서 잘림 ("가" 분리). word-break: keep-all + nb-span 박제 부재.
2. **wrap·prose 좌측 정렬선 어긋남** — 컨테이너 max-width·padding 불일치로 section-title과 prose 시작점 다름.
3. **단일 미디어 쿼리 1단 반응형** — 900px 단일 break로 1024·768·480 viewport 모두 깨짐. 헌법 부재.
4. **한국어 폰트 사이즈 박제 부재** — 영문 16스케일 그대로 한국어에 적용해 폰트 트라이얼 4회 반복.
5. **SVG 다이어그램 기하 가이드 부재** — 둠 루프 6노드 원형 흐름 4번 그려야 정렬됨.
6. **Big Number + Caption 패턴 부재** — bignum 좌·cap 우 1:1 grid 어색 → 카드형 통합으로 수정.
7. **본문 verbatim 보존 룰 부재** — shaper-skill 산출물 산문체 받았는데 표·블릿으로 변환 우려. 영토 분리 박제.

### 추가 슬롯

- **헌법 H13 신설** — 반응형 3단+ (D1·D2·D3·D4) 의무화.
- **forbidden 7건 추가** — 한국어 word-break 누락·정렬선 불일치·1단 반응형·산문 변환·inline grid 미분해·SVG 노드 침범 등.
- **WRONG/CORRECT 2쌍 추가** — 한국어 Hero·정렬선 SSOT.
- **Gotchas 9건 추가** — 위 7건 + Big Number 카드형 + 부록 compact 헤드.

### 신규 references (4건)

- `references/korean-typography.md` — 한국어 4단계(K-Hero·K-Section·K-Lead·K-Body) + word-break: keep-all + nb-span 패턴 + 의미단위 줄바꿈 강제 5층.
- `references/responsive.md` — 헌법 H13 + 미디어 쿼리 4단 박제 + inline grid 자동 분해 속성 선택자.
- `references/diagram-geometry.md` — 순환 6노드 12·2·4·6·8·10시 표준 좌표 + 호 화살표 marker + 4곡선·5단계 루프·중앙 글로우 패턴.
- `references/prose-preservation.md` — 본문 verbatim 보존 룰 + shaper-skill 영토 분리 + pullquote/표/블릿 사용 기준.

### Description 갱신

- P1 트리거 12개 추가 (한국어타이포·반응형헌법·H13·다이어그램기하·SVG순환·본문보존·nb-span·word-break·keep-all·둠루프·메타인지루프·prose-preservation).
- P2 4개 추가 (한국어로 만들어줘·모바일 반응형·다이어그램 그려줘·본문 보존 시각화).
- P3 4개 추가 (korean typography·responsive H13·diagram geometry·prose preservation).
- P4 2개 추가 (한국어 NYT 스타일 보고서·산문 verbatim 시각화).
- NOT 1개 추가 (텍스트층·산문체·KIWI·격식 → shaper-skill).

### 영토 분리 명시

apple-canvas = 시각층 (레이아웃·타이포·컬러·다이어그램·강조).
shaper-skill = 텍스트층 (어휘·문장·격식·KIWI·산문체).
prose-preservation.md가 두 영토 분리 정본.

---

## v3.0 (2026-05-07)

30페이지 apple.com 박제 → 4계층 의사결정·8축 SSOT·5모드·H1~H12 결정주의. 라이트·다크 비비드 풀채도(S≥85%)·형광펜 5색·gradient-text 5단위·5스톱·Apple-easing·PT빅타이포·Frame Sandwich. 이미지 없는 문서를 애플급 강도로 발현. v1.0 완전 폐기 (백업: `apple-canvas.v1-backup/`).

## v1.0 (2026-05-02)

27페이지 5계층 42패턴. 차분 컬러·형광펜 ✗ 한계.

## v260523 — MAXIMAL/MINIMAL VOLUME 시스템 신설
- 디폴트=MAXIMAL(기존 헌법 보존), MINIMAL 명시호출 신설
- Ive(Light MINIMAL)·Ferrari(Dark MINIMAL, serif/italic 금지) alias 추가
- 비비드 채도 신성불가침 헌법 — S≥90%·L 40~60%·파스텔/머디/뮤트 모두 금지
- v_KISAS_REMOVED: KISAS 흔적 전수 삭제 (SKILL.md·layout-catalog·visual-effects-catalog)

## v260523.2 — 형광펜 105% 룰 박제
- axis-6-emphasis v2.0 → v2.1: 알약 높이 = font-size × 1.05 정확
- .hl CSS — line-height: 1.05 + padding-block: 0 + display: inline 강제
- SVG underline — height: 1.05em 추가 (형광펜과 동일 비율)
- SKILL.md Failure Modes — 105% 위반 함정 등재
