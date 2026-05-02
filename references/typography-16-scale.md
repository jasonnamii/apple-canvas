# Typography — 16단계 시맨틱+시각 이중 클래스

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
| 3 | `hero-tagline` | `typography-hero-tagline` | clamp(80px, 10vw, 120px) | 900 |
| 4 | `headline-super` | `typography-headline-super` | clamp(140px, 18vw, 200px) | 900 |
| 5 | `banner-card-headline` | `typography-banner-card-headline` | clamp(28px, 3vw, 40px) | 700 |
| 6 | `feature-card-headline` | `typography-feature-card-headline` | clamp(24px, 2.5vw, 32px) | 700 |
| 7 | `tile-headline` | `typography-tile-headline` | clamp(20px, 2vw, 28px) | 700 |
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
.typography-hero-tagline { font-size: clamp(80px, 10vw, 120px); font-weight: 900; line-height: 1.05; letter-spacing: -0.015em; }
.typography-headline-super { font-size: clamp(140px, 18vw, 200px); font-weight: 900; line-height: 0.95; letter-spacing: -0.02em; }
/* … 나머지 14개 */
```

## 안티패턴 (❌)
- 모든 헤딩에 `<h1>` 만 사용 (16단계 무시)
- 시맨틱 ✗ 시각만 (`<div style="font-size:80px">`)
- 한국어에 SF Pro만 사용 (Apple SD Gothic Neo 누락)
