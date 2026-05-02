# Interaction — Color Swatch

## 정의
색상 선택 UI. 제품 SKU·테마 컬러 선택. iMac·MacBook Pro·iPhone 페이지 표준.

## 구조
```html
<div class="colornav" role="radiogroup" aria-label="색상 선택">
  <button class="colornav-swatch ColorIndicator_colorindicator-swatch"
          style="background:#30D158"
          role="radio"
          aria-checked="true"
          aria-label="Green"
          data-color="green">
  </button>
  <button class="colornav-swatch"
          style="background:#FF9F0A"
          role="radio"
          aria-checked="false"
          aria-label="Orange"
          data-color="orange">
  </button>
  <button class="colornav-swatch"
          style="background:#FF375F"
          role="radio"
          aria-checked="false"
          aria-label="Pink"
          data-color="pink">
  </button>
</div>

<div class="product-display">
  <picture>
    <source srcset="imac-green.jpg" data-color="green">
    <source srcset="imac-orange.jpg" data-color="orange">
    <source srcset="imac-pink.jpg" data-color="pink">
    <img src="imac-green.jpg" alt="iMac">
  </picture>
</div>
```

## CSS
```css
.colornav { display: flex; gap: 12px; padding: 16px; }
.colornav-swatch {
  width: 28px; height: 28px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  transition: border-color 200ms, transform 200ms;
}
.colornav-swatch:hover { transform: scale(1.1); }
.colornav-swatch[aria-checked="true"] {
  border-color: var(--text);
  outline: 2px solid var(--bg);
  outline-offset: -4px;
}
```

## JS
```js
document.querySelectorAll('.colornav').forEach(nav => {
  nav.addEventListener('click', (e) => {
    const swatch = e.target.closest('.colornav-swatch');
    if (!swatch) return;
    nav.querySelectorAll('.colornav-swatch').forEach(s => s.setAttribute('aria-checked', 'false'));
    swatch.setAttribute('aria-checked', 'true');
    // 제품 이미지 변경
    const color = swatch.dataset.color;
    document.querySelector('.product-display img').src = `imac-${color}.jpg`;
  });
});
```

## 핵심 규칙
- `role="radiogroup"` + `role="radio"` + `aria-checked` 필수
- 키보드 네비 지원 (좌우 화살표)
- 색상명 `aria-label` 명시 (시각장애인용)
