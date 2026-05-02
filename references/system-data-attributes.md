# System — Data Attributes (분석·컴포넌트 선언)

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
