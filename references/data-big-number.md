# Data — Big Number

## 정의
숫자 1개를 화면 핵심으로 강조. 180px+ 폰트, 단일 메트릭의 임팩트 극대화.

## 구조
```html
<div class="big-number-block">
  <p class="eyebrow typography-eyebrow">2026년 ESG 보고서</p>
  <h2 class="headline-super typography-headline-super">
    <span class="big-number-value">75<span class="big-number-unit">%</span></span>
  </h2>
  <p class="body-elevated typography-body-elevated">
    제품에 사용된 재활용 알루미늄 비중
  </p>
</div>
```

## CSS
```css
.big-number-block { text-align: center; padding: 80px 24px; }
.headline-super { font-size: clamp(140px, 18vw, 200px); font-weight: 900; line-height: 0.95; letter-spacing: -0.02em; }
.big-number-value { display: inline-block; }
.big-number-unit { font-size: 0.5em; vertical-align: super; opacity: 0.7; }
```

## 변형 1: 비교 (Before / After)
```html
<div class="big-number-compare">
  <div class="big-number-block">
    <p class="eyebrow">2020년</p>
    <h2 class="headline-super"><span style="opacity:0.5">22<span class="big-number-unit">%</span></span></h2>
  </div>
  <div class="big-number-block">
    <p class="eyebrow">2026년</p>
    <h2 class="headline-super">75<span class="big-number-unit">%</span></h2>
  </div>
</div>
```

## 변형 2: 카운트업 애니메이션
```js
function countUp(el, target, duration = 2000) {
  let start = 0;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    el.textContent = Math.floor(progress * target);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// IntersectionObserver로 진입 시 트리거
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      countUp(e.target, +e.target.dataset.target);
      io.unobserve(e.target);
    }
  });
});
document.querySelectorAll('[data-countup]').forEach(el => io.observe(el));
```

```html
<span class="big-number-value" data-countup data-target="75">0</span>%
```

## 안티패턴 (❌)
- 폰트 크기 100px 미만 → 임팩트 X
- 한 페이지에 5+개 Big Number → 산만
- 단위(`%·억·명`)가 숫자보다 큼 → 균형 깨짐
