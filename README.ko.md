# apple-canvas

**애플 웹 패턴 전용 캔버스 — Claude 스킬.**

27개 apple.com 라이브 페이지를 학습하여 5계층 42패턴을 재현 가능한 HTML scaffold로 박제.

## 시그니처

- **라이트·다크 듀얼 톤 1급** — 섹션·페이지·때별 자연 전환, `background-alt` 경계 처리
- **스크롤 트리거 모션** — 뷰포트 상대 좌표 비디오 키프레임·스티키 핀·패럴럭스 (단순 fade-in ✗)
- **데이터 시각화** — Bento 풀섹션·Compare 매트릭스·Big Number·16단계 타이포 스케일
- **인터랙션 미세결** — Tile-BOC·Drawer Modal(3단계 네임스페이스)·Color Swatch·Marquee Hover
- **접근성 강제** — `aria-label` 의무·`prefers-reduced-motion` 분기 의무 (H7)

## 4모드

1. **Scroll** — 애플식 풀페이지 랜딩 (스크롤 = 서사 장치)
2. **Bento** — KPI·대시보드 한장 (4~5박스 격자)
3. **Mix** — 스크롤 + Bento 혼합
4. **Deck** — 스크롤 snap 슬라이드 발표

## 7조 헌법

| # | 조항 |
|---|---|
| H1 | 듀얼 톤 1급 — 단톤 강제 ✗ |
| H2 | 16단계 시맨틱+시각 이중 클래스 타이포 |
| H3 | 풀블리드 + 12열 그리드 |
| H4 | 스크롤 = 서사 장치 (단순 fade ✗) |
| H5 | 데이터 = Bento·Compare·Big Number |
| H6 | 인터랙션 미세결 (페이지당 1+) |
| H7 | 접근성 강제 (aria + reduced-motion) |

## 설치

최신 `.skill` 파일 다운로드 후 Claude Cowork에서 "Save skill" 클릭.

## 사용

```
형: 애플처럼 KPI 한장 만들어줘
Claude: 🍎 어떤 모드? 1. 스크롤  2. Bento  3. Mix
형: 2
Claude: [Bento 풀섹션 + Big Number + Color Swatch HTML 생성]
```

## 학습 자료

27개 apple.com 라이브 페이지(2026-05): iPhone 17 Pro/17, MacBook Pro/Air, iMac, Mac Studio/Mini, iPad Pro/Air, Vision Pro, AirPods Pro, Apple Watch, Apple Intelligence, Privacy, Environment, Accessibility, Apple Arcade, Apple TV+ 등.

## 라이선스

Proprietary. Personal use.
