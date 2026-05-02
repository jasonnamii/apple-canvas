# Interaction — Tile-BOC (Bottom-of-Content)

## 정의
타일 안에 숨겨진 콘텐츠를 in-place로 펼치는 마이크로 인터랙션. 페이지 이탈 ✗.

## 구조
```html
<div class="tile tile-rounded">
  <picture>…</picture>
  <h3 class="tile-headline">기능 이름</h3>
  <p class="body-reduced">짧은 설명</p>
  <button class="tile-boc-trigger" aria-expanded="false" aria-controls="boc-1">
    더 알아보기
  </button>
  <div id="boc-1" class="tile-boc-content" hidden>
    <p>여기 긴 설명이 펼쳐집니다…</p>
    <a href="#" class="cta-secondary">자세히 →</a>
  </div>
</div>
```

## JS
```js
document.querySelectorAll('.tile-boc-trigger').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !expanded);
    document.getElementById(btn.getAttribute('aria-controls')).hidden = expanded;
  });
});
```

## CSS (펼침 애니메이션)
```css
.tile-boc-content { max-height: 0; overflow: hidden; transition: max-height 400ms ease; }
.tile-boc-content:not([hidden]) { max-height: 1000px; }
.tile-boc-trigger::after { content: " ▾"; transition: transform 200ms; }
.tile-boc-trigger[aria-expanded="true"]::after { transform: rotate(180deg); display: inline-block; }
```

## 안티패턴 (❌)
- `<details><summary>` 디폴트 스타일 → 애플 톤 X
- 새 페이지 이동 → BOC 본질 위반
- `aria-expanded` 누락 → H7 위반
