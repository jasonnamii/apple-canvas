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
