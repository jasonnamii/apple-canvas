# Motion — 통합 정본 (v260523.4)

> 통합 대상: motion-scroll-trigger.md, motion-sticky-pin.md

> 원본 verbatim 보존·헤더만 재정렬.



---

## 1. Scroll Trigger (← `motion-scroll-trigger.md` 원본)


## 핵심 원칙
스크롤 = **서사 장치**. 단순 fade-in ✗. 뷰포트 상대 좌표로 비디오·애니메이션 자동 트리거.

## 1. 스크롤 트리거 비디오 (애플 핵심 패턴)

```html
<video
  data-inline-media
  data-inline-media-play-keyframe='{"start":"t-150vh","end":"b+100vh"}'
  data-inline-media-plugins="ObjectFitFix,AnimLoad,ViewportSourceBaseRes,PlayPauseButtonDisable"
  muted playsinline preload="auto"
  aria-label="Animation showing product feature"
  role="img">
  <source src="hero.mp4" type="video/mp4">
</video>
```

**좌표 문법:**
- `t` = top (요소 상단)
- `b` = bottom (요소 하단)
- `vh` = viewport height
- `t-150vh` = 요소 상단이 화면 위로 150vh만큼 올라간 시점
- `b+100vh` = 요소 하단이 화면 아래 100vh

## 2. 플러그인 파이프라인

| 플러그인 | 역할 |
|---|---|
| `ObjectFitFix` | 비디오 비율 강제 cover |
| `AnimLoad` | 뷰포트 진입 시 로드 |
| `ViewportSourceBaseRes` | 뷰포트 크기별 소스 자동 선택 |
| `PlayPauseButtonDisable` | 네이티브 컨트롤 숨김 |
| `BackgroundParallax` | 배경 패럴럭스 |

## 3. JS 구현 핵심 (deck-stage.js)

```js
class ScrollTrigger {
  constructor(el, opts) {
    this.el = el;
    this.start = this.parseExpr(opts.start);
    this.end = this.parseExpr(opts.end);
    this.observe();
  }
  parseExpr(expr) {
    // "t-150vh" → { anchor: 'top', offset: -150, unit: 'vh' }
    const m = expr.match(/([tb])([+-]\d+)(vh|px)/);
    return { anchor: m[1], offset: +m[2], unit: m[3] };
  }
  observe() {
    window.addEventListener('scroll', () => this.update(), { passive: true });
  }
  update() {
    const rect = this.el.getBoundingClientRect();
    const vh = window.innerHeight;
    // 시작·끝 좌표 계산 후 진행률 0~1
    const progress = this.calcProgress(rect, vh);
    this.apply(progress);
  }
  apply(p) {
    if (p > 0 && p < 1) this.el.play();
    else this.el.pause();
  }
}
```

## 4. Scroll Group 오케스트레이션

여러 요소를 그룹으로 동기화:

```html
<section data-anim-scroll-group="Welcome" data-component-list="WelcomeParallax,VideoSync">
  <video data-inline-media>…</video>
  <h2 class="hero-tagline">…</h2>
</section>
```

## 5. Staggered Fade-In

순차 페이드 (요소들이 0.1s 간격 등장):

```html
<ul class="StaggeredFadeIn_animationWrapper">
  <li class="enhanced--initial" style="--delay:0">…</li>
  <li class="enhanced--initial" style="--delay:1">…</li>
  <li class="enhanced--initial" style="--delay:2">…</li>
</ul>
```

```css
.enhanced--initial { opacity: 0; transform: translateY(20px); transition: opacity 600ms ease, transform 600ms ease; transition-delay: calc(var(--delay) * 100ms); }
.enhanced--active .enhanced--initial { opacity: 1; transform: translateY(0); }
```

## 6. Reduced-Motion 분기 (필수)

```css
@media (prefers-reduced-motion: reduce) {
  .enhanced--initial { opacity: 1; transform: none; transition: none; }
  video[data-inline-media] { display: none; }
  picture.fallback { display: block; }
}
```

## 안티패턴 (❌)
- `IntersectionObserver` 단순 `is-visible` 토글만 → 애플 본질 X
- 스크롤 = JS scroll event 무한 호출 (성능 ✗) → throttle/RAF 필수
- Reduced-Motion 누락 → H7 위반·즉시 FAIL


---

## 2. Sticky Pin (← `motion-sticky-pin.md` 원본)


## 1. Sticky Container

스크롤 중 콘텐츠 고정, 배경만 흐르게.

```html
<section class="sticky-container">
  <div class="content-sticky-container">
    <h2 class="hero-tagline">고정된 헤드</h2>
  </div>
  <div class="scroll-content">
    <p>이 텍스트는 흐릅니다…</p>
  </div>
</section>
```

```css
.sticky-container { position: relative; min-height: 200vh; }
.content-sticky-container { position: sticky; top: 0; height: 100vh; display: flex; align-items: center; justify-content: center; }
```

## 2. Pin-Offset Positioning

미디어를 특정 좌표에 고정.

```html
<div class="pin-bottom-center">
  <picture>…</picture>
</div>
```

| 클래스 | 위치 |
|---|---|
| `pin-top-left` | 상단 좌측 |
| `pin-top-center` | 상단 중앙 |
| `pin-top-right` | 상단 우측 |
| `pin-bottom-center` | 하단 중앙 |
| `pin-offset` | data-offset 속성으로 커스텀 |

```css
[class^="pin-"] { position: absolute; }
.pin-top-center { top: 0; left: 50%; transform: translateX(-50%); }
.pin-bottom-center { bottom: 0; left: 50%; transform: translateX(-50%); }
```

## 3. Viewport Anchor Animation

특정 섹션 기준 애니메이션 동기화.

```html
<section class="anchor-target" data-focus-expression='{"expression":"a0t","anchors":[".subsection-1",".subsection-2"]}'>
  …
</section>
```

`.subsection-*` 진입 시 자동 동기.

## 4. Sticky Compare Section Header

비교표 헤더 고정.

```html
<section class="compare-section css-sticky">
  <table class="dd-compare-grid">
    <thead>…</thead> <!-- 자동 sticky -->
  </table>
</section>
```

```css
.compare-section.css-sticky thead { position: sticky; top: 0; z-index: 10; background: var(--bg); }
```

## 5. Background Parallax

배경 이미지·비디오만 천천히 이동.

```html
<section data-inline-media-plugins="background-parallax">
  <picture class="bg-parallax">…</picture>
  <div class="content">…</div>
</section>
```

## Reduced-Motion 분기 (필수)
```css
@media (prefers-reduced-motion: reduce) {
  .sticky-container { min-height: auto; }
  .content-sticky-container { position: static; height: auto; }
  [data-inline-media-plugins*="parallax"] { transform: none !important; }
}
```