# Interaction — Marquee Hover + Chapter/Paddle Nav

## 1. Marquee Hover Container

Accessibility 페이지 호버 갤러리. 호버 시 콘텐츠 영역 변경.

```html
<div class="marquee-hover-container">
  <div class="marquee-picture-container">
    <picture data-hover-target="default">
      <img src="default.jpg" alt="기본 이미지">
    </picture>
    <picture data-hover-target="feature-1" hidden>
      <img src="feature-1.jpg" alt="기능 1">
    </picture>
  </div>
  <div class="marquee-hover-content">
    <button data-hover-source="feature-1">기능 1</button>
    <button data-hover-source="feature-2">기능 2</button>
    <button data-hover-source="feature-3">기능 3</button>
  </div>
</div>
```

```js
document.querySelectorAll('[data-hover-source]').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    const target = btn.dataset.hoverSource;
    document.querySelectorAll('[data-hover-target]').forEach(p => p.hidden = (p.dataset.hoverTarget !== target));
  });
});
```

## 2. Chapter Nav (가로 스크롤 섹션)

```html
<nav class="ChapterNav_chapternav" aria-label="섹션 네비">
  <button class="ChapterNav_chapternav-paddle paddle-left" aria-label="이전">←</button>
  <ul class="ChapterNav_chapternav-list">
    <li><a href="#chapter-1">디스플레이</a></li>
    <li><a href="#chapter-2">칩</a></li>
    <li><a href="#chapter-3">카메라</a></li>
    <li><a href="#chapter-4">배터리</a></li>
  </ul>
  <button class="ChapterNav_chapternav-paddle paddle-right" aria-label="다음">→</button>
</nav>
```

```css
.ChapterNav_chapternav { display: flex; align-items: center; gap: 8px; overflow-x: auto; scroll-snap-type: x mandatory; }
.ChapterNav_chapternav-list { display: flex; gap: 24px; list-style: none; padding: 0; margin: 0; }
.ChapterNav_chapternav-list li { scroll-snap-align: start; }
```

## 3. Paddle Nav (좌우 화살표 캐러셀)

```html
<div class="paddlenav-wrapper">
  <button class="paddlenav-icon icon-control-chevron paddle-left" aria-label="이전">‹</button>
  <div class="gallery-scroll">
    <div class="gallery-item">…</div>
    <div class="gallery-item">…</div>
    <div class="gallery-item">…</div>
  </div>
  <button class="paddlenav-icon icon-control-chevron paddle-right" aria-label="다음">›</button>
</div>
```

```js
document.querySelectorAll('.paddle-left, .paddle-right').forEach(btn => {
  btn.addEventListener('click', () => {
    const wrapper = btn.closest('.paddlenav-wrapper');
    const scroller = wrapper.querySelector('.gallery-scroll');
    const dir = btn.classList.contains('paddle-right') ? 1 : -1;
    scroller.scrollBy({ left: dir * scroller.clientWidth * 0.8, behavior: 'smooth' });
  });
});
```
