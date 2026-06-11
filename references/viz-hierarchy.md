# Viz · HIERARCHY 계층·구성 (8패밀리 2/8)

> 상하 포함·위계를 가진 정보를 위한 시각문법입니다. pyramid-stack · layered-architecture · tree-org · nested-containment 4종 신규 박제입니다.
> 토큰 정본: 색 `axis-1-color.md` · 타이포 `axis-2-typography.md` · 이징 `apple-easing.md` · 화살표/글로우 `diagram-geometry.md`.

## 언제 쓰나

- 결론·꼭짓점이 위에 있고 토대가 아래로 넓어집니다 → pyramid-stack
- 플랫폼·OS처럼 가로 레이어가 쌓입니다 → layered-architecture
- 한 노드가 여러 자식으로 갈라집니다(조직도·분류) → tree-org
- 큰 영역이 작은 영역을 포함합니다 → nested-containment

다른 패밀리 경계: 순서대로 흐르면 FLOW, 같은 기준으로 견주면 COMPARE입니다.

---

## 1. pyramid-stack — 결론 우선 피라미드

각 단을 풀블리드 비비드 밴드로 둡니다. 채도는 유지하고 면적만 바꿉니다(파스텔 워시 금지). 꼭짓점에 gradient-text 1회 이벤트를 허용합니다.

```html
<div class="ac-pyramid">
  <div class="ac-pyr-row" style="--pyr-accent:var(--accent-pink); width:46%">
    <span class="ac-pyr-label gradient-text">핵심 결론</span>
  </div>
  <div class="ac-pyr-row" style="--pyr-accent:var(--accent-orange); width:68%">
    <span class="ac-pyr-label">근거 — 무엇이 참이어야 하나</span>
  </div>
  <div class="ac-pyr-row" style="--pyr-accent:var(--accent-blue); width:90%">
    <span class="ac-pyr-label">데이터 — 측정·사례·자료</span>
  </div>
</div>
```

```css
.ac-pyramid { display:flex; flex-direction:column; align-items:center; gap:10px; max-width:760px; margin:0 auto; }
.ac-pyr-row {
  display:grid; place-items:center;
  min-height:84px; padding:18px 28px;
  background:var(--pyr-accent);
  border-radius:18px;
  opacity:0; transform:scale(.94);
  transition:opacity .5s var(--ease-apple), transform .5s var(--ease-apple);
}
.ac-pyr-row.is-in { opacity:1; transform:none; }
.ac-pyr-label { font-size:var(--t-headline); font-weight:800; color:#fff; text-align:center; }
.ac-pyr-label.gradient-text { -webkit-text-fill-color:transparent; }
```

미감 규칙: 위로 갈수록 폭만 좁아지고 채도는 그대로입니다. 라벨은 빅타이포, 꼭짓점 1단만 gradient-text, 단끼리 색은 axis-1 비비드 대비입니다.

---

## 2. layered-architecture — 벤토 적층 레이어

가로 full-width 타일을 수직으로 쌓습니다. 각 레이어는 radius-tile·듀얼톤 경계입니다.

```html
<div class="ac-layers">
  <div class="ac-layer" style="--lay-accent:var(--accent-purple)">
    <span class="ac-layer-tag">표면</span>
    <p class="ac-layer-text">사용자가 보는 화면과 인터랙션</p>
  </div>
  <div class="ac-layer" style="--lay-accent:var(--accent-blue)">
    <span class="ac-layer-tag">로직</span>
    <p class="ac-layer-text">기능 정의와 상태·예외 처리</p>
  </div>
  <div class="ac-layer" style="--lay-accent:var(--accent-green)">
    <span class="ac-layer-tag">데이터</span>
    <p class="ac-layer-text">저장·조회·동기화 기반</p>
  </div>
</div>
```

```css
.ac-layers { display:flex; flex-direction:column; gap:12px; max-width:820px; margin:0 auto; }
.ac-layer {
  display:flex; align-items:center; gap:24px;
  padding:30px 36px;
  background:var(--bg-alt);
  border-left:6px solid var(--lay-accent);
  border-radius:var(--radius-tile);
  box-shadow:var(--shadow-card);
}
.ac-layer-tag {
  flex:0 0 auto; padding:8px 18px; border-radius:999px;
  background:var(--lay-accent); color:#fff;
  font-size:var(--t-eyebrow-large); font-weight:800; letter-spacing:.04em;
}
.ac-layer-text { font-size:var(--t-body-large); color:var(--text); margin:0; }
```

미감 규칙: 레이어 태그는 풀필 pill, 본문은 입니다체 유지, 레이어 높이로 위계를 줄 수 있습니다(상위 레이어를 더 크게).

---

## 3. tree-org — SVG connector 트리·조직도

노드는 pill 56px, connector는 `diagram-geometry.md` 화살표·글로우 박제를 재사용합니다.

```html
<svg viewBox="0 0 720 360" style="max-width:720px;margin:0 auto;display:block;width:100%">
  <defs>
    <filter id="nodeGlow" x="-30%" y="-60%" width="160%" height="220%">
      <feGaussianBlur stdDeviation="4" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <!-- connector -->
  <path d="M360,84 L160,160 M360,84 L360,160 M360,84 L560,160" stroke="var(--imac-silver)" stroke-width="1.6" fill="none"/>

  <!-- 루트 -->
  <g filter="url(#nodeGlow)">
    <rect x="260" y="28" width="200" height="56" rx="28" fill="var(--accent-pink)"/>
    <text x="360" y="62" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">대표</text>
  </g>
  <!-- 자식 3 -->
  <g filter="url(#nodeGlow)">
    <rect x="60" y="164" width="200" height="56" rx="28" fill="none" stroke="var(--accent-blue)" stroke-width="2"/>
    <text x="160" y="198" text-anchor="middle" fill="var(--headline)" font-size="16" font-weight="600">기획</text>
    <rect x="260" y="164" width="200" height="56" rx="28" fill="none" stroke="var(--accent-orange)" stroke-width="2"/>
    <text x="360" y="198" text-anchor="middle" fill="var(--headline)" font-size="16" font-weight="600">개발</text>
    <rect x="460" y="164" width="200" height="56" rx="28" fill="none" stroke="var(--accent-green)" stroke-width="2"/>
    <text x="560" y="198" text-anchor="middle" fill="var(--headline)" font-size="16" font-weight="600">디자인</text>
  </g>
</svg>
```

미감 규칙: 루트 1개만 풀필, 자식은 stroke 비비드, connector는 silver hairline 1.6, 다크는 nodeGlow 디폴트입니다.

---

## 4. nested-containment — 포함 계층 box-in-box

큰 영역이 작은 영역을 품는 구조입니다. 안쪽으로 갈수록 채도를 올립니다.

```html
<div class="ac-nest ac-nest-l1">
  <span class="ac-nest-tag">생태계</span>
  <div class="ac-nest ac-nest-l2">
    <span class="ac-nest-tag">플랫폼</span>
    <div class="ac-nest ac-nest-l3">
      <span class="ac-nest-tag">코어 루프</span>
    </div>
  </div>
</div>
```

```css
.ac-nest { border-radius:var(--radius-tile); padding:28px; position:relative; }
.ac-nest-l1 { background:var(--bg-alt); border:1px solid var(--imac-silver); max-width:680px; margin:0 auto; }
.ac-nest-l2 { background:color-mix(in srgb,var(--accent-blue) 12%, var(--bg)); margin-top:36px; }
.ac-nest-l3 { background:var(--accent-pink); margin-top:36px; min-height:80px; }
.ac-nest-tag { position:absolute; top:14px; left:20px; font-size:var(--t-eyebrow); font-weight:800; letter-spacing:.06em; color:var(--text-tertiary); }
.ac-nest-l3 .ac-nest-tag { color:#fff; }
```

미감 규칙: 코어(가장 안쪽)만 풀필 비비드, 바깥 컨테이너는 hairline + 미세 tint, 라벨은 eyebrow입니다.

> `color-mix`은 중간 레이어 tint에만 한정합니다. 코어·액센트 본색에는 쓰지 않습니다.
