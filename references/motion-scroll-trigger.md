# Motion — 스크롤 트리거

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
