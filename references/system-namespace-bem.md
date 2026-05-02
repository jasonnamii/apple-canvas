# System — 네임스페이스 BEM

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
