# Data — 통합 정본 (v260523.4)

> 통합 대상: data-big-number.md, data-footnote-system.md

> 원본 verbatim 보존·헤더만 재정렬.



---

## 1. Big Number (← `data-big-number.md` 원본)


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


---

## 2. Footnote System (← `data-footnote-system.md` 원본)


## 정의
가격·법적 고지·세부 사양을 본문에서 분리. Apple Arcade는 페이지당 293개 각주 사용.

## 구조
```html
<p>월 6,500원<sup class="footnote-number"><a href="#fn1" id="ref1">1</a></sup>으로 시작.</p>

<section class="footnotes" aria-labelledby="footnotes-title">
  <h2 id="footnotes-title" class="visually-hidden">각주</h2>
  <ol class="footnote-list">
    <li id="fn1" class="footnote">
      <span class="footnote-subglyph">1.</span>
      Apple Music 신규 구독자 한정. 첫 1개월 무료, 이후 월 6,500원 부과.
      <a href="#ref1" class="footnote-back" aria-label="본문으로 돌아가기">↩</a>
    </li>
  </ol>
</section>
```

## CSS
```css
.footnote-number { font-size: 0.7em; vertical-align: super; }
.footnote-number a { color: var(--accent-blue); text-decoration: none; }

.footnotes { margin-top: 80px; padding: 32px; border-top: 1px solid rgba(0,0,0,0.1); }
.footnote-list { list-style: none; padding: 0; counter-reset: footnote; }
.footnote { font-size: 12px; opacity: 0.7; line-height: 1.6; padding: 8px 0; }
.footnote-subglyph { font-weight: 700; margin-right: 8px; }
.footnote-back { margin-left: 8px; text-decoration: none; }

.visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0; }
```

## 핵심 규칙
1. **숫자 인덱스** — 1, 2, 3 (또는 ★, †, ‡ 기호도 가능)
2. **양방향 링크** — 본문 → 각주 + 각주 → 본문
3. **각주 영역 시각 분리** — `border-top` + `opacity 0.7`
4. **시각장애인 지원** — `aria-labelledby` + 본문 복귀 `aria-label`
5. **각주 = 12px·alpha 0.6** (typography 16단계 #16 footnote)