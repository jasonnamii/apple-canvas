# Viz · FLOW 흐름·절차 (8패밀리 1/8)

> 단계가 순서대로 흐르는 정보를 위한 시각문법입니다. process-step-rail · decision-flowchart · sequence-pipeline 3종 신규 박제, metaloop·순환6노드는 `diagram-geometry.md` 참조로 연결합니다.
> 토큰 정본: 색 `axis-1-color.md` · 타이포 `axis-2-typography.md` · 이징 `apple-easing.md` · 화살표/글로우 `diagram-geometry.md`.

## 언제 쓰나

- 단계가 1→2→3 순서대로 진행됩니다 → process-step-rail
- 조건에 따라 갈래가 나뉩니다(if/else) → decision-flowchart
- 입력이 단계를 통과해 출력으로 흐릅니다 → sequence-pipeline
- 순환·되먹임 루프입니다 → 순환6노드 또는 metaloop (`diagram-geometry.md` 패턴1·6)

다른 패밀리 경계: 단계가 아니라 위계면 HIERARCHY, 견주는 거면 COMPARE, 시간 축이면 TIME입니다.

---

## 1. process-step-rail — 빅번호 직선 스텝

스텝 번호를 56px 비비드 풀필 원형 노드로, 각 카드는 좌측 4px 풀블리드 액센트 바로 둡니다. 스크롤 진입 시 순차 fade(apple-easing)입니다.

```html
<div class="ac-flow-rail">
  <div class="ac-step" style="--step-accent:var(--accent-pink)">
    <div class="ac-step-node">1</div>
    <div class="ac-step-body">
      <p class="ac-step-label">입력 수집</p>
      <p class="ac-step-desc">컨셉 문장·와이어프레임·피그마 URL을 한자리에 모읍니다.</p>
    </div>
  </div>
  <div class="ac-step" style="--step-accent:var(--accent-orange)">
    <div class="ac-step-node">2</div>
    <div class="ac-step-body">
      <p class="ac-step-label">구조 추출</p>
      <p class="ac-step-desc">화면이 있으면 역추출, 컨셉만 있으면 기능 후보를 구조화합니다.</p>
    </div>
  </div>
  <div class="ac-step" style="--step-accent:var(--accent-blue)">
    <div class="ac-step-node">3</div>
    <div class="ac-step-body">
      <p class="ac-step-label">범위 확정</p>
      <p class="ac-step-desc">이번 버전에 만들 것과 만들지 않을 것을 잠급니다.</p>
    </div>
  </div>
</div>
```

```css
.ac-flow-rail { display:flex; flex-direction:column; gap:20px; max-width:760px; margin:0 auto; }
.ac-step {
  display:flex; align-items:flex-start; gap:24px;
  padding:28px 32px 28px 28px;
  background:var(--bg-alt);
  border-left:4px solid var(--step-accent);
  border-radius:var(--radius-tile);
  box-shadow:var(--shadow-card);
  opacity:0; transform:translateY(24px);
  transition:opacity .6s var(--ease-apple), transform .6s var(--ease-apple);
}
.ac-step.is-in { opacity:1; transform:none; }
.ac-step-node {
  flex:0 0 auto;
  width:56px; height:56px; border-radius:50%;
  display:grid; place-items:center;
  background:var(--step-accent); color:#fff;
  font-size:28px; font-weight:800; line-height:1;
}
.ac-step-label { font-size:var(--t-headline-small); font-weight:700; color:var(--headline); margin:0 0 6px; }
.ac-step-desc { font-size:var(--t-body); color:var(--text-secondary); margin:0; line-height:1.6; }
:root[data-theme="dark"] .ac-step-node { box-shadow:var(--glow-pink); }
```

```js
const flowIO = new IntersectionObserver((es)=>{
  es.forEach((e,i)=>{ if(e.isIntersecting){ setTimeout(()=>e.target.classList.add('is-in'), i*90); flowIO.unobserve(e.target);} });
},{threshold:.3});
document.querySelectorAll('.ac-step').forEach(el=>flowIO.observe(el));
```

미감 규칙: 노드 번호는 빅타이포(28~40px), 카드 라벨 헤드라인-바디 2.5배차 유지, 액센트는 스텝마다 axis-1 비비드 순환, 회색 번호 원판 금지입니다.

---

## 2. decision-flowchart — pill 분기 노드

다이아몬드 대신 pill 박스를 쓰고, 분기 화살표는 `diagram-geometry.md` 패턴2 marker(refX10·6×6)를 재사용합니다. 다크 노드는 nodeGlow 디폴트입니다.

```html
<div class="ac-decision">
  <svg viewBox="0 0 640 420" style="max-width:640px;margin:0 auto;display:block;width:100%">
    <defs>
      <marker id="acArr" viewBox="0 0 12 12" refX="10" refY="6"
              markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0,1 L11,6 L0,11 z" fill="var(--accent-pink)"/>
      </marker>
      <filter id="nodeGlow" x="-30%" y="-60%" width="160%" height="220%">
        <feGaussianBlur stdDeviation="4" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    <!-- 진입 노드 -->
    <g filter="url(#nodeGlow)">
      <rect x="220" y="24" width="200" height="56" rx="28" fill="none" stroke="var(--accent-blue)" stroke-width="2"/>
      <text x="320" y="58" text-anchor="middle" fill="var(--headline)" font-size="18" font-weight="700">화면이 있는가</text>
    </g>

    <!-- 분기 화살표 -->
    <path d="M260,84 L150,150" fill="none" stroke="var(--accent-pink)" stroke-width="2" marker-end="url(#acArr)"/>
    <path d="M380,84 L490,150" fill="none" stroke="var(--accent-pink)" stroke-width="2" marker-end="url(#acArr)"/>
    <text x="180" y="120" fill="var(--text-tertiary)" font-size="13">예</text>
    <text x="448" y="120" fill="var(--text-tertiary)" font-size="13">아니오</text>

    <!-- 좌 분기 -->
    <g filter="url(#nodeGlow)">
      <rect x="40" y="160" width="220" height="56" rx="28" fill="none" stroke="var(--accent-green)" stroke-width="2"/>
      <text x="150" y="194" text-anchor="middle" fill="var(--headline)" font-size="16" font-weight="600">화면에서 기능 역추출</text>
    </g>
    <!-- 우 분기 -->
    <g filter="url(#nodeGlow)">
      <rect x="380" y="160" width="220" height="56" rx="28" fill="none" stroke="var(--accent-orange)" stroke-width="2"/>
      <text x="490" y="194" text-anchor="middle" fill="var(--headline)" font-size="16" font-weight="600">컨셉에서 후보 구조화</text>
    </g>

    <!-- 합류 -->
    <path d="M150,220 L300,300" fill="none" stroke="var(--accent-pink)" stroke-width="2" marker-end="url(#acArr)"/>
    <path d="M490,220 L340,300" fill="none" stroke="var(--accent-pink)" stroke-width="2" marker-end="url(#acArr)"/>
    <g filter="url(#nodeGlow)">
      <rect x="210" y="310" width="220" height="56" rx="28" fill="var(--accent-pink)" stroke="none"/>
      <text x="320" y="344" text-anchor="middle" fill="#fff" font-size="17" font-weight="700">PRD로 범위 확정</text>
    </g>
  </svg>
</div>
```

미감 규칙: 결정 노드는 stroke 비비드 + 텍스트 95% 대비, 결과 노드 1개만 풀필 강조, 화살표 marker는 노드 가장자리 4~8px 직전에서 멈춥니다(패턴2 헌법). 시스템 회색선 금지입니다.

---

## 3. sequence-pipeline — 가로 파이프라인 + stroke-draw connector

단계를 가로로 늘어놓고 connector를 SVG stroke-draw로 스크롤 진입 시 그립니다.

```html
<div class="ac-pipeline">
  <div class="ac-pipe-stage" style="--pipe-accent:var(--accent-blue)">
    <span class="ac-pipe-dot"></span>
    <p class="ac-pipe-label">수집</p>
  </div>
  <div class="ac-pipe-stage" style="--pipe-accent:var(--accent-purple)">
    <span class="ac-pipe-dot"></span>
    <p class="ac-pipe-label">분류</p>
  </div>
  <div class="ac-pipe-stage" style="--pipe-accent:var(--accent-pink)">
    <span class="ac-pipe-dot"></span>
    <p class="ac-pipe-label">변환</p>
  </div>
  <div class="ac-pipe-stage" style="--pipe-accent:var(--accent-green)">
    <span class="ac-pipe-dot"></span>
    <p class="ac-pipe-label">출력</p>
  </div>
  <svg class="ac-pipe-line" viewBox="0 0 800 8" preserveAspectRatio="none" aria-hidden="true">
    <path d="M40,4 L760,4" stroke="var(--accent-pink)" stroke-width="3" fill="none"
          stroke-linecap="round" pathLength="1"
          style="stroke-dasharray:1;stroke-dashoffset:1;transition:stroke-dashoffset 1.2s var(--ease-apple)"/>
  </svg>
</div>
```

```css
.ac-pipeline { position:relative; display:flex; justify-content:space-between; max-width:800px; margin:0 auto; padding:24px 0; }
.ac-pipe-line { position:absolute; inset:auto 0 50% 0; width:100%; height:8px; z-index:0; }
.ac-pipe-stage { position:relative; z-index:1; display:flex; flex-direction:column; align-items:center; gap:14px; }
.ac-pipe-dot { width:20px; height:20px; border-radius:50%; background:var(--pipe-accent); box-shadow:0 0 0 6px color-mix(in srgb,var(--pipe-accent) 18%, transparent); }
.ac-pipe-label { font-size:var(--t-callout); font-weight:700; color:var(--headline); margin:0; }
.ac-pipe-line.is-in path { stroke-dashoffset:0; }
:root[data-theme="dark"] .ac-pipe-dot { box-shadow:var(--glow-pink); }
```

```js
const pipeIO = new IntersectionObserver((es)=>{
  es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('is-in'); pipeIO.unobserve(e.target);} });
},{threshold:.5});
document.querySelectorAll('.ac-pipe-line').forEach(el=>pipeIO.observe(el));
```

> `color-mix`은 도트 글로우 헤일로에만 한정합니다. 액센트 본색·카드 배경에는 forbidden.md대로 쓰지 않습니다.

---

## 보존 연결 — 기존 박제

| 패턴 | 위치 | 용도 |
|---|---|---|
| 순환 6노드 (시계방향) | `diagram-geometry.md` 패턴1 | 루프·되먹임 흐름 |
| 메타인지 5단계 (수직) | `diagram-geometry.md` 패턴6 | 단계 강조형 수직 흐름 |
| 화살표 marker | `diagram-geometry.md` 패턴2 | 모든 FLOW 화살표 |
| nodeGlow 필터 | `diagram-geometry.md` 패턴3 | 다크 노드 디폴트 |
