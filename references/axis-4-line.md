# Axis 4 — Line System (L2 박제 마스터)

> airpods·watch·homepod 라인 사용 패턴 4종.

## 1. Divider (수평 구분)

```css
.divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent-pink), transparent);
  margin: 80px 0;
}

.divider-solid { background: #d2d2d7; }
.divider-vivid { background: var(--accent-pink); height: 2px; }
```

## 2. Connector (연결선·SVG path)

```html
<svg class="connector" viewBox="0 0 800 200">
  <path d="M50,100 Q400,20 750,100"
        stroke="url(#ai-gradient)"
        stroke-width="2"
        fill="none"/>
</svg>
```

## 3. Border (vivid 카드 외곽)

```css
.card-bordered {
  border: 2px solid var(--accent-blue);
  border-radius: 24px;
}
.card-bordered-vivid {
  border: 3px solid var(--accent-pink);
  box-shadow: var(--shadow-vivid);
}
```

## 4. SVG Underline (K12 5색 손글씨)

```html
<em class="underline pink">
  배움을
  <svg class="underline-illustration" viewBox="0 0 281 15">
    <clipPath id="underline-clip-path">
      <path d="M276.313... Z" />
    </clipPath>
    <path class="underline-path" pathLength="1"
          d="M6.57,8.17c107.81-3.26,287-.74,291.81-.74"
          stroke="var(--hl-pink)"
          stroke-width="6"
          fill="none"/>
  </svg>
</em>
```

```css
.underline svg { 
  position: absolute; bottom: -4px; left: 0; right: 0;
  mix-blend-mode: multiply;
}
```

## 5. 금기

```
❌ MS워드 룩 (회색 0.5px 죽은선)
❌ 모든 섹션마다 divider (강약 ✗ → 3섹션마다 1회 정도)
❌ text-decoration: underline (반드시 SVG path)
```
