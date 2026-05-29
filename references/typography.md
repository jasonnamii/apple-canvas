# Typography — 통합 정본 (v260523.4)

> 통합 대상: korean-typography.md, typography-16-scale.md

> 원본 verbatim 보존·헤더만 재정렬.



---

## 1. Korean Typography (← `korean-typography.md` 원본)


> v3.1 신설. 영문 16스케일이 한국어 어절·받침·줄바꿈을 잡지 못하는 사각지대 보완.

## 본질

영문 typography는 단어 단위 word-break·hyphen 처리가 자연스럽지만, 한국어는 **어절 단위 keep-all + 의미단위 nb-span**이 표준 박제. PT 빅타이포일수록 더 결정적.

## 4단계 한국어 타이포 박제

| 단계 | 용도 | clamp 박제 |
|---|---|---|
| **K-Hero** | 풀페이지 Hero · PT-Monolith | `clamp(56px, 10rem, 200px)` |
| **K-Section** | 섹션 헤드라인 (Bento·Scroll 진입부) | `clamp(40px, 5.2vw, 72px)` |
| **K-Lead** | 섹션 부제·sub | `clamp(19px, 1.8vw, 26px)` |
| **K-Body** | 본문 (산문 prose) | `clamp(17px, 1.2rem, 21px)` |

`line-height` 박제:
- K-Hero: 0.96 ~ 1.05 (1.0 권장)
- K-Section: 1.08 ~ 1.18
- K-Lead: 1.5
- K-Body: 1.7 ~ 1.8

`letter-spacing` 박제:
- K-Hero / K-Section: -0.04em ~ -0.045em
- K-Lead: -0.015em
- K-Body: -0.005em

## 헌법 룰 — word-break: keep-all 강제

모든 한국어 텍스트 컨테이너에 `word-break: keep-all` 강제. 어절(공백 단위)을 단어처럼 취급해 줄바꿈 위치를 보존.

```css
.k-hero, .k-section-title, .k-lead, .k-body, .prose p {
  word-break: keep-all;
}
```

## nb-span (No-Break Span) 패턴

의미 단위 줄바꿈 강제 보존이 필요한 경우 (예: "AI를 쓰느냐"가 두 줄로 쪼개지면 안 됨), `<span class="nb">` 패턴 사용.

```html
<h1 class="k-hero">
  <span class="nb">AI 시대의 승부는</span>
  <span class="hl"><span class="nb">"AI를 쓰느냐"</span>가 아니라,</span>
</h1>
```

```css
.nb { white-space: nowrap; }
@media (max-width: 768px) {
  .nb { white-space: normal; }  /* 모바일 자동 해제 */
}
```

## 줄바꿈 강제 패턴 — 의미 단위 5층

긴 문장의 의미 단위 줄바꿈 강제. shaper-skill의 §B-NARR 스파인과 동일 본질.

```html
<p class="statement-quote">
  <span class="l1">전제 1</span>
  <span class="l2">전제 2</span>
  <span class="l3">결론</span>
  <span class="l4">함의</span>
</p>
```

각 `.l1`~`.l4`는 `display: block`으로 강제 줄바꿈. `nb-span`과 조합해 데스크톱 강제 / 모바일 해제.

## ❌ WRONG / ✅ CORRECT

```
❌ WRONG — 한국어 PT 빅타이포에 word-break 없이 작성
.hero-title { font-size: clamp(56px, 10rem, 200px); }
<h1>메타인지가 분기점이다</h1>
→ 결과: 1440px에서 "메타인지" + "가" + "분기점이다" 어색하게 잘림

✅ CORRECT — keep-all + nb-span 강제
.hero-title { font-size: clamp(56px, 10rem, 200px); word-break: keep-all; }
<h1 class="hero-title">
  <span class="nb">메타인지가</span><br>
  <span class="nb">분기점이다</span>
</h1>
```

## 한국어 vs 영문 16스케일 매핑

A2 typography의 영문 16스케일과 한국어 4단계의 대응:

| 영문 t-* | 영문 size | K-단계 |
|---|---|---|
| t-14 | 200px | K-Hero |
| t-9 | 64px | K-Section (max) |
| t-7 | 36px | K-Section (min~mid) |
| t-6 | 28px | K-Lead (max) |
| t-5 | 21px | K-Body (max) |
| t-4 | 17px | K-Body (min) |

영문 t-1 ~ t-16 박제는 그대로 유지. 한국어 4단계는 그 위에 의미단위 박제.

## Gotchas

- **H2 위반 가능성:** 한국어가 t-13(160px) 이상 가면 받침 잘림 다수. K-Hero는 viewport vw 비례로 자동 축소.
- **굵기 트레이드오프:** 한글은 굵을수록 가독성 ↓ (받침 뭉침). PT 빅타이포에서도 weight 800 이내 권장. 900 이상은 라틴 한정.
- **letter-spacing:** Codex 기본값은 0. 작은 양수 라벨 트래킹만 예외.
- **nb-span 모바일 해제 필수:** 미해제 시 모바일에서 한 줄이 화면 폭 초과 → 가로 스크롤.


---

## 2. 16-Scale (← `typography-16-scale.md` 원본)


## 핵심 원칙
**의미 클래스(시맨틱) + 시각 클래스(타이포 스케일)** 이중화.

```html
<h1 class="hero-tagline typography-hero-tagline">…</h1>
```
- `hero-tagline` = 의미 (히어로 섹션 태그라인)
- `typography-hero-tagline` = 시각 (폰트 크기·웨이트)

## 16단계 시맨틱 목록

| # | 시맨틱 클래스 | 시각 클래스 | 크기 | 웨이트 |
|---|---|---|---|---|
| 1 | `eyebrow` | `typography-eyebrow` | 12px | 600 UPPER |
| 2 | `section-headline` | `typography-section-headline` | clamp(40px, 5vw, 64px) | 900 |
| 3 | `hero-tagline` | `typography-hero-tagline` | clamp(80px, 6rem, 120px) | 900 |
| 4 | `headline-super` | `typography-headline-super` | clamp(140px, 11rem, 200px) | 900 |
| 5 | `banner-card-headline` | `typography-banner-card-headline` | clamp(28px, 2rem, 40px) | 700 |
| 6 | `feature-card-headline` | `typography-feature-card-headline` | clamp(24px, 2.5vw, 32px) | 700 |
| 7 | `tile-headline` | `typography-tile-headline` | clamp(20px, 1.5rem, 28px) | 700 |
| 8 | `gallery-caption` | `typography-gallery-caption` | clamp(14px, 1.4vw, 18px) | 400 |
| 9 | `body-elevated` | `typography-body-elevated` | clamp(20px, 1.8vw, 24px) | 400 |
| 10 | `body` | `typography-body` | clamp(16px, 1.4vw, 18px) | 400 |
| 11 | `body-reduced` | `typography-body-reduced` | clamp(13px, 1vw, 15px) | 400 |
| 12 | `disclaimer` | `typography-disclaimer` | clamp(11px, 0.9vw, 13px) | 400 alpha 0.7 |
| 13 | `cta-primary` | `typography-cta-primary` | 17px | 500 |
| 14 | `cta-secondary` | `typography-cta-secondary` | 15px | 500 |
| 15 | `site-modal-headline` | `typography-site-modal-headline` | clamp(24px, 2.4vw, 32px) | 700 |
| 16 | `footnote` | `typography-footnote` | 12px | 400 alpha 0.6 |

## 폰트 패밀리 (Pretendard 우선)

### 한국어 = Pretendard 강제 (1급)
**한국어 본문은 무조건 Pretendard 우선.** 시스템 폰트 폴백은 차순위.

### CDN 임포트 (필수)
HTML `<head>` 또는 CSS 최상단에 추가:

```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" />
```

또는 CSS:
```css
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css");
```

### CSS 변수 (Pretendard 1순위)
```css
:root {
  --font-en: "SF Pro Display", "SF Pro Icons", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: "SF Mono", Menlo, monospace;
  --font-sc: "SF Pro SC", "PingFang SC", sans-serif;  /* 중국어 */
  --font-jp: "SF Pro JP", "Hiragino Sans", sans-serif; /* 일본어 */
  
  /* 한국어 = Pretendard 강제 1순위 */
  --font-kr: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
}

/* 한국어 자동 분기 (디폴트) */
html[lang^="ko"] body,
html:not([lang]) body,
body { font-family: var(--font-kr); }

html[lang^="zh"] body { font-family: var(--font-sc); }
html[lang^="ja"] body { font-family: var(--font-jp); }
html[lang^="en"] body { font-family: var(--font-en); }
```

### Pretendard Variable (가변 폰트)
헤드 900·본문 300 등 다양한 웨이트를 단일 파일로 처리. 로드 1회로 모든 웨이트 사용.

```css
.typography-hero-tagline { font-weight: 900; }
.typography-body { font-weight: 400; }
.typography-disclaimer { font-weight: 300; }
```

## CSS 스케일 풀버전
```css
.typography-eyebrow { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
.typography-hero-tagline { font-size: clamp(80px, 6rem, 120px); font-weight: 900; line-height: 1.05; letter-spacing: 0; }
.typography-headline-super { font-size: clamp(140px, 11rem, 200px); font-weight: 900; line-height: 0.95; letter-spacing: 0; }
/* … 나머지 14개 */
```

## 안티패턴 (❌)
- 모든 헤딩에 `<h1>` 만 사용 (16단계 무시)
- 시맨틱 ✗ 시각만 (`<div style="font-size:80px">`)
- 한국어에 SF Pro만 사용 (Apple SD Gothic Neo 누락)
