# Viz · RELATION 관계·망 (8패밀리 5/8)

> 무엇이 무엇과 연결되는지를 보여주는 시각문법입니다. hub-spoke-svg · venn-diagram · ecosystem-map 3종 박제, 순환6노드는 `diagram-geometry.md` 참조로 연결합니다.
> 토큰 정본: 색 `axis-1-color.md` · 타이포 `axis-2-typography.md` · 이징 `apple-easing.md` · 화살표/글로우/라디얼 `diagram-geometry.md`.

## 언제 쓰나

- 중심 하나에 여러 항목이 방사형으로 붙습니다(비순환) → hub-spoke-svg
- 집합끼리 겹치는 영역을 봅니다 → venn-diagram
- 여러 액터가 화살표로 서로 주고받습니다 → ecosystem-map
- 닫힌 순환 흐름입니다 → 순환6노드 (`diagram-geometry.md` 패턴1)

다른 패밀리 경계: 위에서 아래로 갈라지는 트리·조직도는 HIERARCHY, 순서대로 흐르면 FLOW입니다.

---

## 1. hub-spoke-svg — 중심 허브 + 방사 스포크

`diagram-geometry.md` 패턴4 중앙 라디얼 글로우를 재사용합니다. 중심 노드는 빅타이포, 스포크 노드는 pill입니다.

```html
<svg viewBox="0 0 520 520" style="max-width:520px;width:100%;display:block;margin:0 auto" role="img" aria-label="허브 스포크">
  <defs>
    <radialGradient id="acCenterGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="var(--accent-pink)" stop-opacity="0.22"/>
      <stop offset="55%" stop-color="var(--accent-pink)" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="var(--accent-pink)" stop-opacity="0"/>
    </radialGradient>
    <filter id="nodeGlow" x="-30%" y="-60%" width="160%" height="220%">
      <feGaussianBlur stdDeviation="4" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <circle cx="260" cy="260" r="180" fill="url(#acCenterGlow)"/>

  <!-- 스포크 선: 중심 → 각 노드 -->
  <line x1="260" y1="260" x2="260" y2="90"  stroke="var(--imac-silver)" stroke-width="1.6"/>
  <line x1="260" y1="260" x2="420" y2="180" stroke="var(--imac-silver)" stroke-width="1.6"/>
  <line x1="260" y1="260" x2="420" y2="360" stroke="var(--imac-silver)" stroke-width="1.6"/>
  <line x1="260" y1="260" x2="100" y2="360" stroke="var(--imac-silver)" stroke-width="1.6"/>
  <line x1="260" y1="260" x2="100" y2="180" stroke="var(--imac-silver)" stroke-width="1.6"/>

  <!-- 중심 허브 -->
  <g filter="url(#nodeGlow)">
    <circle cx="260" cy="260" r="62" fill="var(--accent-pink)"/>
    <text x="260" y="268" text-anchor="middle" fill="#fff" font-size="22" font-weight="800">플랫폼</text>
  </g>

  <!-- 스포크 노드 (pill) -->
  <g filter="url(#nodeGlow)" fill="none" stroke-width="2">
    <rect x="190" y="62" width="140" height="48" rx="24" stroke="var(--accent-blue)"/>
    <rect x="350" y="156" width="140" height="48" rx="24" stroke="var(--accent-purple)"/>
    <rect x="350" y="336" width="140" height="48" rx="24" stroke="var(--accent-orange)"/>
    <rect x="30"  y="336" width="140" height="48" rx="24" stroke="var(--accent-green)"/>
    <rect x="30"  y="156" width="140" height="48" rx="24" stroke="var(--accent-yellow)"/>
  </g>
  <g fill="var(--headline)" font-size="15" font-weight="600" text-anchor="middle">
    <text x="260" y="91">크리에이터</text>
    <text x="420" y="185">유저</text>
    <text x="420" y="365">파트너</text>
    <text x="100" y="365">후원사</text>
    <text x="100" y="185">운영</text>
  </g>
</svg>
```

미감 규칙: 중심 1개만 풀필, 스포크 노드는 stroke 비비드, 스포크 선은 silver hairline, 다크는 nodeGlow 디폴트입니다.

---

## 2. venn-diagram — 비비드 alpha 겹침

원을 비비드 풀채도 + alpha 겹침으로 둡니다. mix-blend·파스텔 금지, 교집합 라벨을 강조합니다.

```html
<svg viewBox="0 0 420 280" style="max-width:440px;width:100%;display:block;margin:0 auto" role="img" aria-label="벤다이어그램">
  <circle cx="160" cy="140" r="110" fill="var(--accent-pink)" fill-opacity="0.55"/>
  <circle cx="260" cy="140" r="110" fill="var(--accent-blue)" fill-opacity="0.55"/>
  <text x="110" y="146" text-anchor="middle" fill="#fff" font-size="17" font-weight="700">기획</text>
  <text x="310" y="146" text-anchor="middle" fill="#fff" font-size="17" font-weight="700">개발</text>
  <text x="210" y="146" text-anchor="middle" fill="#fff" font-size="15" font-weight="800">핸드오프</text>
</svg>
```

3원 변형은 같은 패턴에 `fill-opacity 0.45` 원 3개를 120° 간격으로 배치합니다.

미감 규칙: 채도는 풀, 겹침은 alpha로만, 교집합 라벨이 가장 강한 위계입니다. 회색·파스텔 원 금지입니다.

---

## 3. ecosystem-map — 액터 노드 + 관계 화살표

`diagram-geometry.md` 패턴2 marker + 패턴3 글로우를 재사용합니다. connector는 stroke-draw로 진입 시 그립니다.

```html
<svg class="ac-eco" viewBox="0 0 560 360" style="max-width:560px;width:100%;display:block;margin:0 auto" role="img" aria-label="생태계 맵">
  <defs>
    <marker id="acEcoArr" viewBox="0 0 12 12" refX="10" refY="6" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,1 L11,6 L0,11 z" fill="var(--accent-pink)"/>
    </marker>
    <filter id="nodeGlow" x="-30%" y="-60%" width="160%" height="220%">
      <feGaussianBlur stdDeviation="4" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <!-- 관계 화살표 -->
  <g class="ac-eco-link" fill="none" stroke="var(--accent-pink)" stroke-width="2"
     pathLength="1" style="stroke-dasharray:1;stroke-dashoffset:1;transition:stroke-dashoffset 1.2s var(--ease-apple)">
    <path d="M170,90 L380,90" marker-end="url(#acEcoArr)"/>
    <path d="M420,130 L300,250" marker-end="url(#acEcoArr)"/>
    <path d="M250,250 L150,130" marker-end="url(#acEcoArr)"/>
  </g>

  <!-- 액터 노드 -->
  <g filter="url(#nodeGlow)" fill="none" stroke-width="2">
    <rect x="40"  y="64"  width="120" height="52" rx="26" stroke="var(--accent-blue)"/>
    <rect x="390" y="64"  width="120" height="52" rx="26" stroke="var(--accent-purple)"/>
    <rect x="250" y="250" width="120" height="52" rx="26" stroke="var(--accent-green)"/>
  </g>
  <g fill="var(--headline)" font-size="15" font-weight="600" text-anchor="middle">
    <text x="100" y="95">크리에이터</text>
    <text x="450" y="95">유저</text>
    <text x="310" y="281">플랫폼</text>
  </g>

  <!-- 관계 라벨 (footnote 톤) -->
  <g fill="var(--text-tertiary)" font-size="12" text-anchor="middle">
    <text x="275" y="80">콘텐츠 공급</text>
    <text x="380" y="200">수익 정산</text>
    <text x="175" y="200">참여 데이터</text>
  </g>
</svg>
```

```js
const ecoIO = new IntersectionObserver((es)=>{
  es.forEach(e=>{ if(e.isIntersecting){ e.target.querySelector('.ac-eco-link').style.strokeDashoffset='0'; ecoIO.unobserve(e.target);} });
},{threshold:.4});
document.querySelectorAll('.ac-eco').forEach(el=>ecoIO.observe(el));
```

미감 규칙: 액터 노드는 stroke 비비드 + 글로우, 관계 라벨은 footnote 톤, 화살표는 marker 박제입니다. 전부 다크 디폴트입니다.

---

## 보존 연결 — 기존 박제

| 패턴 | 위치 | 용도 |
|---|---|---|
| 순환 6노드 (시계방향) | `diagram-geometry.md` 패턴1 | 닫힌 순환 관계 |
| 화살표 marker | `diagram-geometry.md` 패턴2 | 모든 관계 화살표 |
| nodeGlow 필터 | `diagram-geometry.md` 패턴3 | 다크 노드 디폴트 |
| 중앙 라디얼 글로우 | `diagram-geometry.md` 패턴4 | hub-spoke 중심 |
