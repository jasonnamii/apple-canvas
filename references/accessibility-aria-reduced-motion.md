# Accessibility — ARIA + Reduced-Motion

## H7 강제 규칙
누락 = 즉시 FAIL.

## 1. ARIA 시맨틱

### 모든 인터랙티브 요소
```html
<!-- ✅ -->
<button aria-label="닫기">×</button>
<a href="#" aria-label="iPhone 17 Pro 자세히 보기">자세히 →</a>
<video aria-label="Animation showing iPhone Pro display features" role="img">…</video>

<!-- ❌ -->
<button>×</button>
<a href="#">자세히 →</a>
<video>…</video>
```

### 모달·대화상자
```html
<div role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <h2 id="modal-title">제목</h2>
</div>
```

### 라이브 영역 (동적 업데이트)
```html
<div aria-live="polite">로딩 중…</div>
```

### 시각 숨김 (스크린 리더만)
```html
<span class="visually-hidden">건너뛰기 링크</span>
```

```css
.visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0; }
```

## 2. Reduced-Motion 분기

### CSS
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  /* 비디오는 정지 이미지로 대체 */
  video[data-inline-media] { display: none; }
  picture.fallback { display: block !important; }
  
  /* 패럴럭스 비활성 */
  [data-inline-media-plugins*="parallax"] { transform: none !important; }
  
  /* 스티키 컨테이너 정적 */
  .sticky-container { min-height: auto; }
  .content-sticky-container { position: static; height: auto; }
}
```

### JS (선언형)
```html
<video data-inline-media data-disabled-when='["reduced-motion"]'>…</video>
```

```js
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('[data-disabled-when]').forEach(el => {
  const conditions = JSON.parse(el.dataset.disabledWhen);
  if (conditions.includes('reduced-motion') && reducedMotion) {
    el.style.display = 'none';
    el.nextElementSibling?.classList.add('fallback-visible');
  }
});
```

## 3. 키보드 네비

```css
:focus-visible {
  outline: 2px solid var(--accent-blue);
  outline-offset: 4px;
  border-radius: 4px;
}
```

## 4. 컬러 콘트라스트
- 본문: WCAG AA (4.5:1)
- 큰 텍스트(24px+): WCAG AA (3:1)
- UI 요소: WCAG AA (3:1)
- **회색 텍스트 ✗** — alpha로 대체해도 콘트라스트 검증

## 체크리스트
- [ ] 모든 `<button>`, `<a>`에 `aria-label` 또는 텍스트
- [ ] 모든 `<video>`, `<picture>`에 `aria-label` 또는 `alt`
- [ ] 모든 `role="dialog"`에 `aria-modal` + `aria-labelledby`
- [ ] `prefers-reduced-motion` CSS 분기 존재
- [ ] `:focus-visible` 스타일 존재
- [ ] 컬러 콘트라스트 4.5:1 이상
