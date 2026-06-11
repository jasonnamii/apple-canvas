# Viz · DISTRIBUTION 분포·위치 (8패밀리 7/8)

> 2축 위 위치·농도·평가를 보여주는 시각문법입니다. positioning-map · heatmap-grid · scorecard-rag · bubble-plot 4종 신규 박제입니다.
> 토큰 정본: 색 `axis-1-color.md` · 타이포 `axis-2-typography.md` · 이징 `apple-easing.md` · 글로우 `axis-1-color.md` §5.

## 언제 쓰나

- 두 축 위에 항목을 흩뿌려 위치를 봅니다 → positioning-map
- 행·열 셀의 농도를 봅니다 → heatmap-grid
- 항목별 평가를 신호등으로 봅니다 → scorecard-rag
- 위치 + 크기 둘을 동시에 인코딩합니다 → bubble-plot

다른 패밀리 경계: 두 항목을 같은 기준으로 견주면 COMPARE, 행·열 조회면 TABLE입니다.

---

## 1. positioning-map — 2x2 축 산점

축선은 silver hairline, 사분면 라벨은 eyebrow, 플롯 점은 비비드 풀필 도트(글로우)입니다. 우리 브랜드 점만 크게 + gradient-ring을 둡니다.

```html
<div class="ac-posmap">
  <svg viewBox="0 0 360 360" style="max-width:420px;width:100%;display:block;margin:0 auto" role="img" aria-label="포지셔닝 맵">
    <line x1="180" y1="20" x2="180" y2="340" stroke="var(--imac-silver)" stroke-width="1"/>
    <line x1="20" y1="180" x2="340" y2="180" stroke="var(--imac-silver)" stroke-width="1"/>

    <text x="186" y="16" fill="var(--text-tertiary)" font-size="11" font-weight="700">높은 가격</text>
    <text x="186" y="356" fill="var(--text-tertiary)" font-size="11" font-weight="700">낮은 가격</text>
    <text x="24" y="174" fill="var(--text-tertiary)" font-size="11" font-weight="700">좁은 기능</text>
    <text x="296" y="174" fill="var(--text-tertiary)" font-size="11" font-weight="700">넓은 기능</text>

    <!-- 경쟁 점 -->
    <circle cx="110" cy="120" r="9" fill="var(--accent-blue)"/>
    <circle cx="250" cy="240" r="9" fill="var(--accent-purple)"/>
    <circle cx="130" cy="260" r="9" fill="var(--accent-orange)"/>

    <!-- 우리 브랜드: 큰 점 + gradient-ring -->
    <circle cx="260" cy="110" r="22" fill="none" stroke="var(--accent-pink)" stroke-width="3" opacity=".5"/>
    <circle cx="260" cy="110" r="13" fill="var(--accent-pink)"/>
    <text x="260" y="86" text-anchor="middle" fill="var(--headline)" font-size="13" font-weight="700">우리</text>
  </svg>
</div>
```

```css
:root[data-theme="dark"] .ac-posmap circle[fill]:not([fill="none"]) { filter:drop-shadow(0 0 6px currentColor); }
```

미감 규칙: 축은 silver hairline, 사분면 라벨은 eyebrow, 브랜드 점만 큰 도트 + ring입니다. 점을 회색으로 두지 않습니다.

---

## 2. heatmap-grid — 단일 비비드 hue alpha 농담

회색 농도 금지입니다. 단일 비비드 hue의 alpha 스텝으로 농담을 만들고, 셀 radius 8px입니다.

```html
<div class="ac-heatmap" style="--hm-hue:255,31,111">  <!-- #FF1F6F RGB -->
  <div class="ac-hm-cell" style="--a:0.15">12</div>
  <div class="ac-hm-cell" style="--a:0.40">34</div>
  <div class="ac-hm-cell" style="--a:0.70">61</div>
  <div class="ac-hm-cell" style="--a:1.00">88</div>
  <div class="ac-hm-cell" style="--a:0.55">47</div>
  <div class="ac-hm-cell" style="--a:0.25">21</div>
  <div class="ac-hm-cell" style="--a:0.85">73</div>
  <div class="ac-hm-cell" style="--a:0.30">26</div>
</div>
```

```css
.ac-heatmap { display:grid; grid-template-columns:repeat(4,1fr); gap:8px; max-width:520px; margin:0 auto; }
.ac-hm-cell {
  aspect-ratio:1; border-radius:8px;
  display:grid; place-items:center;
  background:rgba(var(--hm-hue), var(--a));
  color:var(--headline); font-size:var(--t-body); font-weight:700;
}
.ac-hm-cell[style*="--a:1"], .ac-hm-cell[style*="--a:0.85"], .ac-hm-cell[style*="--a:0.70"] { color:#fff; }
```

미감 규칙: hue 1개·alpha만으로 농담, 셀 radius 8px, 진한 셀은 흰 텍스트입니다. 회색 농도·다색 혼합 금지입니다.

---

## 3. scorecard-rag — axis-1 비비드 신호등

차분 시스템 red/amber/green 금지입니다. axis-1 비비드 풀채도 도트(green #00C853·amber #FFCB05·red #FF1F6F)를 씁니다.

```html
<div class="ac-scorecard">
  <div class="ac-sc-row">
    <span class="ac-sc-item">진척도</span>
    <span class="ac-sc-dot" style="background:var(--accent-green)"></span>
    <span class="ac-sc-note">계획대로 진행 중</span>
  </div>
  <div class="ac-sc-row">
    <span class="ac-sc-item">리스크</span>
    <span class="ac-sc-dot" style="background:var(--accent-yellow)"></span>
    <span class="ac-sc-note">미결정 2건 추적 중</span>
  </div>
  <div class="ac-sc-row">
    <span class="ac-sc-item">일정</span>
    <span class="ac-sc-dot" style="background:var(--accent-pink)"></span>
    <span class="ac-sc-note">QA Extended 지연</span>
  </div>
</div>
```

```css
.ac-scorecard { max-width:600px; margin:0 auto; display:flex; flex-direction:column; gap:4px; }
.ac-sc-row { display:grid; grid-template-columns:120px 20px 1fr; align-items:center; gap:16px; padding:16px 0; border-bottom:1px solid var(--imac-silver); }
.ac-sc-item { font-size:var(--t-body); font-weight:700; color:var(--headline); }
.ac-sc-dot { width:18px; height:18px; border-radius:50%; }
.ac-sc-note { font-size:var(--t-body); color:var(--text-secondary); }
:root[data-theme="dark"] .ac-sc-dot { box-shadow:0 0 12px currentColor; }
```

> RAG 의미 매핑: green=정상, yellow(amber)=주의, pink(red)=경보입니다. 비비드 풀채도를 유지하고 채도를 낮추지 않습니다.

---

## 4. bubble-plot — 크기 인코딩 산점

도넛 글로우를 재사용합니다. 위치는 좌표, 크기는 값입니다.

```html
<svg viewBox="0 0 400 300" style="max-width:440px;width:100%;display:block;margin:0 auto" role="img" aria-label="버블 플롯">
  <line x1="40" y1="260" x2="380" y2="260" stroke="var(--imac-silver)" stroke-width="1"/>
  <line x1="40" y1="20"  x2="40"  y2="260" stroke="var(--imac-silver)" stroke-width="1"/>

  <circle cx="120" cy="200" r="26" fill="var(--accent-blue)"   fill-opacity=".75"/>
  <circle cx="220" cy="120" r="40" fill="var(--accent-pink)"   fill-opacity=".75"/>
  <circle cx="310" cy="180" r="18" fill="var(--accent-green)"  fill-opacity=".75"/>
  <circle cx="180" cy="90"  r="14" fill="var(--accent-orange)" fill-opacity=".75"/>
</svg>
```

미감 규칙: 버블은 비비드 + alpha, 큰 버블이 큰 값, 축은 silver hairline입니다. 회색 버블 금지입니다.

---

## 금기 (DISTRIBUTION 공통)

```
❌ 히트맵 회색 농도 — 단일 비비드 hue alpha 스텝만
❌ RAG 차분 시스템색(#30D158·#FF9F0A·#FF453A) — axis-1 비비드(#00C853·#FFCB05·#FF1F6F)
❌ 산점·버블 회색 도트 — axis-1 비비드 풀필
❌ 축선 굵은 검정 — silver hairline 1px
```
