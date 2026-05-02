# Tone — Dual Rules (라이트↔다크 섹션 전환)

## 핵심 원칙
애플 페이지는 단톤 ✗. **섹션 단위로 라이트·다크 전환**이 자연스러움.

## 전환 규칙

### 1. 섹션 단위 클래스
```html
<section class="theme-light">…</section>
<section class="theme-dark">…</section>
<section class="theme-light background-alt">…</section>
```

### 2. 전환 경계 처리
라이트→다크 직접 전환 시 ✗. 1섹션 분량 transition 필수:
- 배경 그라디언트 (`linear-gradient`)
- 또는 1섹션 `background-alt` (라이트 회백·다크 차콜) 끼워넣기

### 3. 톤별 디폴트
- 영웅 섹션 (히어로) — 다크 (몰입감)
- 기능 소개 섹션 — 라이트 (가독성)
- 데이터 섹션 (Compare·Bento) — 라이트 (정보 우선)
- 매니페스토·갤러리 — 다크 (감성)
- CTA·푸터 — 라이트 (명료)

### 4. CSS 분기
```css
[data-theme="light"] { background: #FFFFFF; color: #1D1D1F; }
[data-theme="dark"] { background: #000000; color: #F5F5F7; }
[data-theme="light"].background-alt { background: #F5F5F7; }
[data-theme="dark"].background-alt { background: #1D1D1F; }

/* 자동 전환 (스크롤 시 부드럽게) */
section { transition: background-color 600ms ease, color 400ms ease; }
```

### 5. 글로벌 헤더 분기
```html
<!-- 라이트 섹션 위 -->
<header class="globalheader-light">…</header>
<!-- 다크 섹션 위 -->
<header class="globalheader-dark">…</header>
```
스크롤 위치 기반 JS로 자동 토글 (deck-stage.js 참조).
