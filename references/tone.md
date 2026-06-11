# Tone — 통합 정본 (v260523.4)

> 통합 대상: tone-light.md, tone-dark.md, tone-dual-rules.md, color-spectrum.md

> Vivid 액센트 hex 정본은 `axis-1-color.md`입니다. 이 파일의 액센트 hex는 axis-1 비비드(S≥85%)로 정정되어 있습니다. 둘이 어긋나면 axis-1을 따릅니다. 배경·텍스트·형광펜·박스라운드·듀얼톤 전환 규칙은 이 파일이 정본입니다.



---

## 1. Light Tone (← `tone-light.md` 원본)


## 배경·텍스트
- 배경: `#FFFFFF` (순백) 또는 `#F5F5F7` (애플 라이트 회백)
- 본문: `#1D1D1F` (애플 다크 차콜)
- 헤드: `#000000` (블랙·900 웨이트)
- 보조: `#1D1D1F + alpha 0.7` (회색 대신 알파)

## 액센트 (axis-1 비비드 정본 — 양쪽 동일 hex)
라이트·다크 모두 풀채도(S≥85%)를 씁니다. 차분 시스템컬러는 forbidden.md 위반입니다.
- 블루: `#0092ff`
- 그린: `#00C853`
- 오렌지: `#FF7A1A`
- 핑크: `#FF1F6F`
- 퍼플: `#C65CFF`
- 옐로: `#FFCB05`

## 형광펜
`.hl` rounded-pill 5색(`axis-1-color.md` §3) + `--hl-ink` 검정 텍스트.

## 박스 라운드
디폴트 32~40px (애플 위젯 톤).

## CSS 변수
```css
:root[data-theme="light"] {
  --bg: #FFFFFF;
  --bg-alt: #F5F5F7;
  --text: #1D1D1F;
  --headline: #000000;
  --accent-blue: #0092ff;
  --accent-green: #00C853;
  --accent-orange: #FF7A1A;
  --accent-yellow: #FFCB05;
  --accent-purple: #C65CFF;
  --accent-pink: #FF1F6F;
  --highlight: var(--hl-yellow);   /* axis-1 형광펜 정본 */
  --radius-tile: 36px;
}
```


---

## 2. Dark Tone (← `tone-dark.md` 원본)


## 배경·텍스트
- 배경: `#000000` (순흑) 또는 `#1D1D1F` (애플 다크 차콜)
- 본문: `#F5F5F7`
- 헤드: `#FFFFFF` (화이트·900 웨이트)
- 보조: `#F5F5F7 + alpha 0.7`

## 액센트 (axis-1 비비드 정본 — 양쪽 동일 hex, 다크 시인성 보정 2종)
- 블루: `#3DB3FF` (다크 보정·라이트 `#0092ff`)
- 그린: `#4DD964` (다크 보정·라이트 `#00C853`)
- 오렌지: `#FF7A1A`
- 핑크: `#FF1F6F`
- 퍼플: `#C65CFF`
- 옐로: `#FFCB05`

## 형광펜
`.hl` rounded-pill 5색(`axis-1-color.md` §3) + `--hl-ink` 검정 텍스트. 다크에서도 동일 비비드 fill입니다.

## 박스 라운드
디폴트 32~40px.

## CSS 변수
```css
:root[data-theme="dark"] {
  --bg: #0a0a0f;
  --bg-alt: #1D1D1F;
  --text: #F5F5F7;
  --headline: #FFFFFF;
  --accent-blue: #3DB3FF;
  --accent-green: #4DD964;
  --accent-orange: #FF7A1A;
  --accent-yellow: #FFCB05;
  --accent-purple: #C65CFF;
  --accent-pink: #FF1F6F;
  --highlight: var(--hl-yellow);   /* axis-1 형광펜 정본 */
  --radius-tile: 36px;
}
```


---

## 3. Dual Tone Rules (← `tone-dual-rules.md` 원본)


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


---

## 4. Color Spectrum (← `color-spectrum.md` 원본)


## iMac 7색 스펙트럼
iMac은 제품 SKU별로 7색 스펙트럼을 매핑. apple-canvas는 이를 **테마 액센트**로 차용.

> 정본은 `axis-1-color.md` §2 iMac 7-Color입니다. 양쪽 동일 풀채도, 다크 시인성 보정 2종(blue·green)만 예외입니다.

| 색상 | HEX (양쪽 동일) | 다크 보정 | 용도 |
|---|---|---|---|
| Green | `#00C853` | `#4DD964` | 환경·성장·승인 |
| Yellow | `#FFCB05` | — | 주의·강조 |
| Orange | `#FF7A1A` | — | 에너지·활동 |
| Pink | `#FF1F6F` | — | 감성·하이라이트 |
| Purple | `#C65CFF` | — | 프리미엄·창의 |
| Blue | `#0092ff` | `#3DB3FF` | 신뢰·액션·기본 CTA |
| Silver | `#4a4a52` | `#c8c8d0` | 중립·메타 (회색 대신) |

**Silver는 회색 예외** — 본문·텍스트에 사용 ✗. 메타·구분자만.

## 형광펜 (`.hl` rounded-pill)
핵심 단어를 **형광펜으로 강조**. strip 방식·`<mark>` 직접 스타일링·opacity 톤다운 ✗. 본문·헤드라인·히어로 전 위계 사용 ○.

```html
<p>이 제품은 <span class="hl hl-pink hl-tight">놀라운 성능</span>을 제공합니다.</p>
```

```css
/* 토큰·유틸 풀 사양: → references/axis-6-emphasis.md §1 */
.hl {
  background-color: var(--hl-yellow);
  color: var(--hl-ink);
  -webkit-text-fill-color: var(--hl-ink);
  padding: 0 6px;
  border-radius: 999px;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}
.hl-yellow { background-color: var(--hl-yellow); }
.hl-green  { background-color: var(--hl-green); }
.hl-c8     { background-color: var(--hl-c8); }
.hl-pink   { background-color: var(--hl-pink); }
.hl-blue   { background-color: var(--hl-blue); }
```

## 페이지당 액센트 사용 규칙
- **주 액센트 1개** (블루 디폴트) — 모든 CTA·링크
- **보조 액센트 1개** (그린·퍼플 등) — 카테고리 구분
- **3색 이상 ✗** — 산만함

## 컬러 스펙트럼 시각화 (Color Indicator)
```html
<div class="colornav">
  <button class="colornav-swatch" style="background:#00C853" aria-label="Green"></button>
  <button class="colornav-swatch" style="background:#FF7A1A" aria-label="Orange"></button>
  <button class="colornav-swatch" style="background:#FF1F6F" aria-label="Pink"></button>
</div>
```
→ `references/interaction.md` 참조.