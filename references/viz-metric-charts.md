# Viz · METRIC 수치·그래프 (8패밀리 4/8)

> 숫자가 핵심인 정보를 위한 시각문법입니다. bar·line·donut·gauge·funnel을 전부 인라인 SVG·CSS로 만들어 외부 CDN(Chart.js·Recharts·D3) 의존을 없애고 자기완결 단일 html 원칙을 지킵니다.
> 토큰 정본: 색 `axis-1-color.md` · 타이포 `axis-2-typography.md` · 이징 `apple-easing.md` · 카운트업 `data.md` §변형2.
> 빅넘버(big-number-stack)는 `axis-7-dataviz.md` §1과 `data.md` §1에 박제되어 있습니다 — 여기서는 차트만 다룹니다.

## 언제 쓰나

- 단일 수치 1개를 화면 핵심으로 → big-number-stack (`data.md` §1)
- 항목별 크기를 견줍니다 → bar-chart-svg
- 시간·연속 추세입니다 → line-chart-svg
- 전체 중 비중·구성비입니다 → donut-ring-svg
- 단일 진행률·달성률입니다 → progress-bar / gauge
- 단계별로 줄어드는 전환입니다 → funnel-svg

---

## 1. bar-chart-svg — 비비드 풀필 막대

상단 라운드 막대 + 값 라벨 빅타이포, 그리드선은 silver hairline 1px만입니다.

```html
<svg class="ac-bar" viewBox="0 0 480 280" style="max-width:480px;width:100%;display:block;margin:0 auto" role="img" aria-label="분기 막대 차트">
  <line x1="40" y1="240" x2="460" y2="240" stroke="var(--imac-silver)" stroke-width="1"/>
  <line x1="40" y1="160" x2="460" y2="160" stroke="var(--imac-silver)" stroke-width="1" opacity=".4"/>
  <line x1="40" y1="80"  x2="460" y2="80"  stroke="var(--imac-silver)" stroke-width="1" opacity=".4"/>

  <!-- 막대: 높이 0에서 진입 시 자람 -->
  <rect class="ac-bar-rect" x="70"  y="240" width="60" height="0" rx="10" fill="var(--accent-blue)"   data-h="120"/>
  <rect class="ac-bar-rect" x="170" y="240" width="60" height="0" rx="10" fill="var(--accent-purple)" data-h="80"/>
  <rect class="ac-bar-rect" x="270" y="240" width="60" height="0" rx="10" fill="var(--accent-pink)"   data-h="170"/>
  <rect class="ac-bar-rect" x="370" y="240" width="60" height="0" rx="10" fill="var(--accent-green)"  data-h="140"/>

  <text x="100" y="262" text-anchor="middle" font-size="13" fill="var(--text-tertiary)">Q1</text>
  <text x="200" y="262" text-anchor="middle" font-size="13" fill="var(--text-tertiary)">Q2</text>
  <text x="300" y="262" text-anchor="middle" font-size="13" fill="var(--text-tertiary)">Q3</text>
  <text x="400" y="262" text-anchor="middle" font-size="13" fill="var(--text-tertiary)">Q4</text>
</svg>
```

```css
.ac-bar-rect { transition:height .9s var(--ease-apple), y .9s var(--ease-apple); }
```

```js
const barIO = new IntersectionObserver((es)=>{
  es.forEach(e=>{ if(e.isIntersecting){
    e.target.querySelectorAll('.ac-bar-rect').forEach((r,i)=>{
      const h=+r.dataset.h; setTimeout(()=>{ r.setAttribute('height',h); r.setAttribute('y',240-h); }, i*80);
    });
    barIO.unobserve(e.target);
  }});
},{threshold:.4});
document.querySelectorAll('.ac-bar').forEach(el=>barIO.observe(el));
```

미감 규칙: 막대마다 axis-1 비비드, 상단 라운드 rx 10, 값 라벨은 빅타이포로 따로 두면 강해집니다. 12색 이상·회색 막대 금지입니다.

---

## 2. line-chart-svg — stroke-draw + area

선은 stroke-width 2.5 비비드, area under에 5스톱 그라디언트 1회(Premium Restraint) 또는 단색 alpha입니다.

```html
<svg class="ac-line" viewBox="0 0 480 260" style="max-width:480px;width:100%;display:block;margin:0 auto" role="img" aria-label="추세 선 차트">
  <defs>
    <linearGradient id="acLineArea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="var(--accent-pink)" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="var(--accent-pink)" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <line x1="0" y1="200" x2="480" y2="200" stroke="var(--imac-silver)" stroke-width="1" opacity=".4"/>
  <line x1="0" y1="120" x2="480" y2="120" stroke="var(--imac-silver)" stroke-width="1" opacity=".4"/>

  <path d="M20,190 L120,150 L220,160 L320,90 L460,40 L460,220 L20,220 Z" fill="url(#acLineArea)"/>
  <path class="ac-line-path" d="M20,190 L120,150 L220,160 L320,90 L460,40"
        fill="none" stroke="var(--accent-pink)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
        pathLength="1" style="stroke-dasharray:1;stroke-dashoffset:1;transition:stroke-dashoffset 1.4s var(--ease-apple)"/>
  <circle cx="460" cy="40" r="5" fill="var(--accent-pink)"/>
</svg>
```

```css
.ac-line.is-in .ac-line-path { stroke-dashoffset:0; }
:root[data-theme="dark"] .ac-line circle { filter:drop-shadow(0 0 8px var(--accent-pink)); }
```

```js
const lineIO = new IntersectionObserver((es)=>{
  es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('is-in'); lineIO.unobserve(e.target);} });
},{threshold:.5});
document.querySelectorAll('.ac-line').forEach(el=>lineIO.observe(el));
```

> area 그라디언트가 페이지의 유일한 멀티스톱 그라디언트면 5스톱 ai-gradient로 올려도 됩니다. 단색 2스톱 alpha는 area 채움 한정 예외입니다.

---

## 3. donut-ring-svg — stroke-dasharray + 중앙 빅넘버

```html
<svg class="ac-donut" viewBox="0 0 200 200" style="max-width:220px;width:100%;display:block;margin:0 auto" role="img" aria-label="구성비 도넛">
  <circle cx="100" cy="100" r="80" fill="none" stroke="var(--bg-alt)" stroke-width="22"/>
  <circle class="ac-donut-arc" cx="100" cy="100" r="80" fill="none" stroke="var(--accent-pink)" stroke-width="22"
          stroke-linecap="round" transform="rotate(-90 100 100)"
          stroke-dasharray="502" stroke-dashoffset="502" data-pct="72"
          style="transition:stroke-dashoffset 1.2s var(--ease-apple)"/>
  <text x="100" y="108" text-anchor="middle" font-size="44" font-weight="800" fill="var(--headline)">
    <tspan data-countup data-target="72">0</tspan>%
  </text>
</svg>
```

```js
const C = 2*Math.PI*80; // 약 502
const donutIO = new IntersectionObserver((es)=>{
  es.forEach(e=>{ if(e.isIntersecting){
    const arc=e.target.querySelector('.ac-donut-arc');
    arc.setAttribute('stroke-dashoffset', C*(1 - (+arc.dataset.pct)/100));
    donutIO.unobserve(e.target);
  }});
},{threshold:.5});
document.querySelectorAll('.ac-donut').forEach(el=>donutIO.observe(el));
```

미감 규칙: 링은 비비드 풀채도 + 라운드 캡, 중앙은 빅넘버(40px+), 다크는 glow입니다. 카운트업은 `data.md` §변형2를 재사용합니다.

---

## 4. progress-bar / gauge — accent 풀필 트랙

```html
<div class="ac-gauge">
  <div class="ac-gauge-head">
    <span class="ac-gauge-label">완료율</span>
    <span class="ac-gauge-val">86%</span>
  </div>
  <div class="ac-gauge-track"><div class="ac-gauge-fill" style="--pct:86%"></div></div>
</div>
```

```css
.ac-gauge { max-width:520px; margin:0 auto; }
.ac-gauge-head { display:flex; justify-content:space-between; align-items:baseline; margin-bottom:12px; }
.ac-gauge-label { font-size:var(--t-body); color:var(--text-secondary); }
.ac-gauge-val { font-size:var(--t-headline-large); font-weight:800; color:var(--headline); }
.ac-gauge-track { height:16px; border-radius:999px; background:var(--bg-alt); overflow:hidden; }
.ac-gauge-fill {
  height:100%; width:0; border-radius:999px;
  background:var(--accent-pink);
  transition:width 1.1s var(--ease-apple);
}
.ac-gauge-fill.is-in { width:var(--pct); }
:root[data-theme="dark"] .ac-gauge-fill { box-shadow:var(--glow-pink); }
```

```js
const gaugeIO = new IntersectionObserver((es)=>{
  es.forEach(e=>{ if(e.isIntersecting){ e.target.querySelector('.ac-gauge-fill').classList.add('is-in'); gaugeIO.unobserve(e.target);} });
},{threshold:.6});
document.querySelectorAll('.ac-gauge').forEach(el=>gaugeIO.observe(el));
```

---

## 5. funnel-svg — 단계별 사다리꼴 + 전환율

```html
<svg class="ac-funnel" viewBox="0 0 400 320" style="max-width:420px;width:100%;display:block;margin:0 auto" role="img" aria-label="전환 펀넬">
  <polygon points="20,10  380,10  330,80  70,80"   fill="var(--accent-blue)"/>
  <polygon points="70,90  330,90  290,160 110,160" fill="var(--accent-purple)"/>
  <polygon points="110,170 290,170 255,240 145,240" fill="var(--accent-pink)"/>
  <polygon points="145,250 255,250 225,310 175,310" fill="var(--accent-green)"/>

  <text x="200" y="52"  text-anchor="middle" fill="#fff" font-size="17" font-weight="700">방문 10,000</text>
  <text x="200" y="132" text-anchor="middle" fill="#fff" font-size="16" font-weight="700">가입 4,200</text>
  <text x="200" y="212" text-anchor="middle" fill="#fff" font-size="16" font-weight="700">활성 1,800</text>
  <text x="200" y="288" text-anchor="middle" fill="#fff" font-size="15" font-weight="700">결제 540</text>
</svg>
```

미감 규칙: 단계마다 폭 비례·axis-1 비비드, 전환율은 빅타이포로 옆에 두면 강해집니다. 회색 단조 펀넬 금지입니다.

---

## 금기 (METRIC 공통)

```
❌ 외부 차트 CDN(Chart.js·Recharts·D3) — 전부 인라인 SVG·CSS
❌ MS워드 회색 막대·죽은선
❌ 빅넘버 17px (140~200px 강제·data.md §1)
❌ 차트에 12색 이상 (3~5색 권장)
❌ area 멀티스톱 그라디언트 페이지당 2회 이상 (Premium Restraint)
```
