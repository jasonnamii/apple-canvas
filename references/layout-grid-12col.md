# Layout — 12열 그리드 + 풀블리드

## 12열 그리드
```html
<div class="row">
  <div class="column large-8 large-offset-2 medium-12 small-12">
    <h2>…</h2>
  </div>
</div>
```

| 클래스 | 의미 |
|---|---|
| `large-N` | 데스크톱 (≥1068px) N열 차지 |
| `large-offset-N` | 데스크톱 N열 좌측 오프셋 |
| `medium-N` | 태블릿 (734~1067px) N열 |
| `medium-offset-N` | 태블릿 오프셋 |
| `small-N` | 모바일 (≤733px) N열 |
| `small-12` | 모바일 풀너비 디폴트 |

## 풀블리드
컨테이너 경계 무시하고 화면 끝까지 확장.

```html
<section class="media-full-bleed">
  <video src="…" class="full-bleed-video"></video>
</section>
```

```css
.media-full-bleed {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}
```

## 중단점 (애플 표준)
```css
@media (max-width: 733px) { /* small / mobile */ }
@media (min-width: 734px) and (max-width: 1067px) { /* medium / tablet */ }
@media (min-width: 1068px) { /* large / desktop */ }
@media (min-width: 1441px) { /* xlarge */ }
```

## CSS 핵심
```css
.row { display: grid; grid-template-columns: repeat(12, 1fr); gap: 16px; max-width: 1440px; margin: 0 auto; padding: 0 24px; }
.column.large-1 { grid-column: span 1; }
/* … large-2 ~ large-12 */
.column.large-offset-1 { grid-column-start: 2; }
@media (max-width: 733px) {
  .column[class*="small-"] { grid-column: span 12; }
}
```
