# Interaction — Drawer Modal (3단계 네임스페이스)

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
