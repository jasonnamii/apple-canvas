# Interaction — 통합 정본 (v260523.4)

> 통합 대상: interaction-color-swatch.md, interaction-drawer-modal.md, interaction-marquee-hover.md, interaction-tile-boc.md

> 원본 verbatim 보존·헤더만 재정렬.



---

## 1. Color Swatch (← `interaction-color-swatch.md` 원본)


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


---

## 2. Drawer/Modal (← `interaction-drawer-modal.md` 원본)


## 정의
Vision Pro 페이지 핵심. 한 페이지에 50+ 모달을 충돌 없이 운영하는 네이밍 컨벤션.

## 네임스페이스 구조
```
{section}-{feature}-drawer-{state}
```

예시:
- `overview-experiences-entertainment-drawer-immersive-startframe`
- `overview-experiences-entertainment-drawer-immersive-endframe`
- `overview-experiences-gaming-drawer-controller-startframe`

## 구조
```html
<button class="drawer-trigger"
        data-drawer-target="experiences-entertainment"
        aria-haspopup="dialog">
  엔터테인먼트 자세히
</button>

<div id="experiences-entertainment-drawer"
     class="overview-experiences-entertainment-drawer"
     role="dialog"
     aria-modal="true"
     aria-labelledby="ee-title"
     hidden>
  <div class="drawer-startframe">
    <h2 id="ee-title">엔터테인먼트</h2>
    <button class="drawer-close" aria-label="닫기">×</button>
  </div>
  <div class="drawer-body">…</div>
</div>
```

## CSS (슬라이드 인)
```css
.overview-experiences-entertainment-drawer {
  position: fixed; inset: 0; z-index: 100;
  background: var(--bg);
  transform: translateY(100%);
  transition: transform 500ms cubic-bezier(0.32, 0.72, 0, 1);
}
.overview-experiences-entertainment-drawer:not([hidden]) { transform: translateY(0); }

@media (prefers-reduced-motion: reduce) {
  .overview-experiences-entertainment-drawer { transition: none; }
}
```

## JS
```js
document.querySelectorAll('.drawer-trigger').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.drawerTarget + '-drawer');
    target.hidden = false;
    target.querySelector('[role="dialog"]')?.focus();
  });
});
document.querySelectorAll('.drawer-close').forEach(btn => {
  btn.addEventListener('click', () => btn.closest('[role="dialog"]').hidden = true);
});
```

## 핵심 규칙
- `role="dialog"` + `aria-modal="true"` 필수
- `aria-labelledby` 헤드 연결
- 닫기 버튼 `aria-label` 명시
- ESC 키로 닫기 지원 (별도 JS)


---

## 3. Marquee Hover (← `interaction-marquee-hover.md` 원본)


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


---

## 4. Tile BOC (← `interaction-tile-boc.md` 원본)


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