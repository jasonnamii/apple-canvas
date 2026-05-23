# System — 통합 정본 (v260523.4)

> 통합 대상: system-data-attributes.md, system-namespace-bem.md

> 원본 verbatim 보존·헤더만 재정렬.



---

## 1. data-* Attributes (← `system-data-attributes.md` 원본)


## 1. data-analytics-* (분석 추적)

거의 모든 인터랙션에 부착:

```html
<button data-analytics-title="hero cta"
        data-analytics-click='{"name":"hero-cta-click","value":"learn-more"}'>
  자세히 알아보기
</button>

<a href="/buy"
   data-analytics-element-engagement="hero buy intent"
   data-analytics-region="hero"
   data-analytics-position="primary">
  구매하기
</a>
```

| 속성 | 용도 |
|---|---|
| `data-analytics-title` | 요소 식별 |
| `data-analytics-click` | 클릭 이벤트 데이터 |
| `data-analytics-region` | 페이지 영역 |
| `data-analytics-element-engagement` | 참여도 추적 |
| `data-analytics-gallery-id` | 갤러리 식별 |
| `data-analytics-intrapage-link` | 페이지 내 링크 |

**JS 통합:**
```js
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-analytics-click]');
  if (!el) return;
  const data = JSON.parse(el.dataset.analyticsClick);
  window.analytics?.track(data.name, data);
});
```

## 2. data-component-list (컴포넌트 선언)

마크업에서 JS 컴포넌트 선언 (51개까지 파이프라인):

```html
<section data-component-list="AXFocusManager,InlineMedia,ChipAnimation,ScrollGroup">
  …
</section>
```

```js
class ComponentLoader {
  static init(root = document) {
    root.querySelectorAll('[data-component-list]').forEach(el => {
      el.dataset.componentList.split(',').forEach(name => {
        const C = window.Components[name];
        if (C) new C(el);
      });
    });
  }
}
ComponentLoader.init();
```

## 3. Picture Element Lazy Load

```html
<picture>
  <source media="(min-width: 1068px)"
          srcset="hero-large.webp 1x, hero-large@2x.webp 2x"
          type="image/webp">
  <source media="(min-width: 734px)"
          srcset="hero-medium.webp 1x, hero-medium@2x.webp 2x"
          type="image/webp">
  <source srcset="hero-small.webp 1x, hero-small@2x.webp 2x"
          type="image/webp">
  <img src="hero-small.jpg" alt="iPhone 17 Pro" loading="lazy" decoding="async">
</picture>
```

| 속성 | 용도 |
|---|---|
| `<source media>` | 중단점별 분기 |
| `srcset Nx` | 픽셀 밀도 (Retina) |
| `type` | 포맷 (webp 우선, jpg 폴백) |
| `loading="lazy"` | 뷰포트 진입 시 로드 |
| `decoding="async"` | 비동기 디코딩 |


---

## 2. Namespace·BEM (← `system-namespace-bem.md` 원본)


## 정의
React/Vue 모듈 컨벤션. 컴포넌트별 해시 접미사로 충돌 방지.

## 패턴
```
{Component}_{element}__{hash}
```

예시:
- `Gallery_scrollContainer__1LaRX`
- `FeatureCardPro_featureCardPro__ROEq1`
- `StaggeredFadeIn_animationWrapper__jM6PI`
- `ColorIndicator_colorindicator-swatch`

## 구조 (apple-canvas 변형)

해시 없이 사용 (정적 HTML):

```html
<div class="Gallery Gallery_scrollContainer">
  <div class="Gallery_galleryItem">
    <picture>…</picture>
  </div>
</div>

<div class="FeatureCardPro FeatureCardPro_short">
  <h3 class="FeatureCardPro_headline">…</h3>
  <p class="FeatureCardPro_body">…</p>
</div>
```

## CSS
```css
/* Gallery 모듈 */
.Gallery { padding: 32px 0; }
.Gallery_scrollContainer { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; gap: 16px; }
.Gallery_galleryItem { flex: 0 0 auto; width: 320px; scroll-snap-align: start; }

/* FeatureCardPro 모듈 */
.FeatureCardPro { background: var(--bg-alt); border-radius: var(--radius-tile); padding: 32px; }
.FeatureCardPro_short { aspect-ratio: 1.5; }
.FeatureCardPro_headline { font-size: clamp(28px, 3vw, 40px); font-weight: 700; }
.FeatureCardPro_body { font-size: 16px; line-height: 1.5; opacity: 0.8; }
```

## 장점
- **컴포넌트 격리** — 다른 컴포넌트 스타일 충돌 없음
- **검색 용이** — `Gallery_` 접두사로 grep
- **자동 트리** — 빌드 시 사용 안 하는 컴포넌트 제거

## apple-canvas 권장
- 정적 HTML이면 해시 없는 BEM (`Gallery_scrollContainer`)
- React/Vue 빌드면 CSS Modules (자동 해시)