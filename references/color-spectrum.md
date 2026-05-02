# Color — 7색 스펙트럼 + 형광펜 + 액센트

## iMac 7색 스펙트럼
iMac은 제품 SKU별로 7색 스펙트럼을 매핑. apple-canvas는 이를 **테마 액센트**로 차용.

| 색상 | Light HEX | Dark HEX | 용도 |
|---|---|---|---|
| Green | `#00845A` | `#30D158` | 환경·성장·승인 |
| Yellow | `#B25000` | `#FFD60A` | 주의·강조 |
| Orange | `#CA6B07` | `#FF9F0A` | 에너지·활동 |
| Pink | `#D74A78` | `#FF375F` | 감성·하이라이트 |
| Purple | `#5E5CE6` | `#BF5AF2` | 프리미엄·창의 |
| Blue | `#0071E3` | `#2997FF` | 신뢰·액션·기본 CTA |
| Silver | `#86868B` | `#86868B` | 중립·메타 (회색 대신) |

**Silver는 회색 예외** — 본문·텍스트에 사용 ✗. 메타·구분자만.

## 형광펜
핵심 단어를 **형광펜으로 강조**. 회색 ✗.

```html
<p>이 제품은 <mark class="highlight">놀라운 성능</mark>을 제공합니다.</p>
```

```css
mark.highlight {
  background: var(--highlight); /* light: rgba(0,113,227,0.15) / dark: rgba(41,151,255,0.25) */
  color: inherit;
  padding: 0 4px;
  border-radius: 4px;
}
```

## 페이지당 액센트 사용 규칙
- **주 액센트 1개** (블루 디폴트) — 모든 CTA·링크
- **보조 액센트 1개** (그린·퍼플 등) — 카테고리 구분
- **3색 이상 ✗** — 산만함

## 컬러 스펙트럼 시각화 (Color Indicator)
```html
<div class="colornav">
  <button class="colornav-swatch" style="background:#30D158" aria-label="Green"></button>
  <button class="colornav-swatch" style="background:#FF9F0A" aria-label="Orange"></button>
  <button class="colornav-swatch" style="background:#FF375F" aria-label="Pink"></button>
</div>
```
→ `interaction-color-swatch.md` 참조.
