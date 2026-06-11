# Viz · TIME 시간·변화 (8패밀리 6/8)

> 시간 축·변화를 담은 정보를 위한 시각문법입니다. timeline-vertical · roadmap-now-next-later · changelog-stack · gantt-bar 4종 신규 박제입니다.
> 토큰 정본: 색 `axis-1-color.md` · 타이포 `axis-2-typography.md` · 이징 `apple-easing.md` · 형광펜 `axis-1-color.md` §3.

## 언제 쓰나

- 사건이 시간순으로 이어집니다 → timeline-vertical
- 지금·다음·나중 우선순위 보드입니다 → roadmap-now-next-later
- 버전·날짜별 변경 이력입니다 → changelog-stack
- 단계별 기간이 겹치며 진행됩니다 → gantt-bar

다른 패밀리 경계: 순서만 있고 시간 축이 없으면 FLOW, 견주는 거면 COMPARE입니다.

---

## 1. timeline-vertical — 비비드 축 + pill 노드

축은 비비드 그라디언트 세로선(5스톱 1회 허용) + 노드 pill + 날짜 빅타이포 eyebrow입니다. 스크롤 진입 시 노드가 순차 fade(apple-easing)입니다.

```html
<div class="ac-timeline">
  <div class="ac-tl-item">
    <span class="ac-tl-node"></span>
    <p class="ac-tl-date">2026 Q1</p>
    <p class="ac-tl-text">컨셉 확정과 입력 수집</p>
  </div>
  <div class="ac-tl-item">
    <span class="ac-tl-node"></span>
    <p class="ac-tl-date">2026 Q2</p>
    <p class="ac-tl-text">PRD와 기능정의 핸드오프</p>
  </div>
  <div class="ac-tl-item">
    <span class="ac-tl-node"></span>
    <p class="ac-tl-date">2026 Q3</p>
    <p class="ac-tl-text">개발 착수와 QA Core</p>
  </div>
</div>
```

```css
.ac-timeline { position:relative; max-width:640px; margin:0 auto; padding-left:48px; }
.ac-timeline::before {
  content:""; position:absolute; left:18px; top:6px; bottom:6px; width:4px; border-radius:2px;
  background:var(--ai-gradient);   /* 5스톱 1회 이벤트 */
}
.ac-tl-item {
  position:relative; padding:0 0 40px;
  opacity:0; transform:translateY(20px);
  transition:opacity .5s var(--ease-apple), transform .5s var(--ease-apple);
}
.ac-tl-item.is-in { opacity:1; transform:none; }
.ac-tl-node {
  position:absolute; left:-40px; top:6px;
  width:20px; height:20px; border-radius:50%;
  background:var(--accent-pink); border:4px solid var(--bg);
}
.ac-tl-date { font-size:var(--t-headline-small); font-weight:800; color:var(--headline); margin:0 0 6px; }
.ac-tl-text { font-size:var(--t-body); color:var(--text-secondary); margin:0; }
:root[data-theme="dark"] .ac-tl-node { box-shadow:var(--glow-pink); }
```

```js
const tlIO = new IntersectionObserver((es)=>{
  es.forEach((e,i)=>{ if(e.isIntersecting){ setTimeout(()=>e.target.classList.add('is-in'), i*80); tlIO.unobserve(e.target);} });
},{threshold:.4});
document.querySelectorAll('.ac-tl-item').forEach(el=>tlIO.observe(el));
```

미감 규칙: 날짜는 빅타이포 eyebrow, 축은 ai-gradient 1회, 노드는 비비드 pill입니다. 축이 페이지의 유일한 멀티스톱이어야 합니다.

---

## 2. roadmap-now-next-later — 벤토 3열

벤토 3타일·각 열 듀얼톤, Now 열만 풀블리드 비비드 강조입니다.

```html
<div class="ac-roadmap">
  <div class="ac-rm-col ac-rm-now">
    <p class="ac-rm-head">Now</p>
    <ul class="ac-rm-list"><li>PRD 확정</li><li>기능정의 리스트</li></ul>
  </div>
  <div class="ac-rm-col">
    <p class="ac-rm-head">Next</p>
    <ul class="ac-rm-list"><li>QA Extended</li><li>화면 지도</li></ul>
  </div>
  <div class="ac-rm-col">
    <p class="ac-rm-head">Later</p>
    <ul class="ac-rm-list"><li>Git 코퍼스 정합</li></ul>
  </div>
</div>
```

```css
.ac-roadmap { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; max-width:880px; margin:0 auto; }
.ac-rm-col { padding:28px; border-radius:var(--radius-tile); background:var(--bg-alt); box-shadow:var(--shadow-card); }
.ac-rm-now { background:var(--accent-pink); }
.ac-rm-head { font-size:var(--t-headline); font-weight:800; color:var(--headline); margin:0 0 16px; }
.ac-rm-now .ac-rm-head { color:#fff; }
.ac-rm-list { margin:0; padding-left:18px; font-size:var(--t-body); color:var(--text-secondary); line-height:1.9; }
.ac-rm-now .ac-rm-list { color:rgba(255,255,255,.92); }
@media (max-width:680px){ .ac-roadmap { grid-template-columns:1fr; } }
```

미감 규칙: Now만 풀필 강조, Next·Later는 bg-alt, 헤드는 빅타이포입니다. 세 열을 균일 회색으로 두지 않습니다.

---

## 3. changelog-stack — 버전 hl pill + 날짜 silver

버전 태그를 형광펜 pill, 날짜는 silver meta입니다.

```html
<div class="ac-changelog">
  <div class="ac-cl-row">
    <span class="hl hl-c8">v2.1</span>
    <span class="ac-cl-date">2026-06-08</span>
    <p class="ac-cl-text">QA Core·Extended 분리와 미결정 추적을 추가했습니다.</p>
  </div>
  <div class="ac-cl-row">
    <span class="hl hl-blue">v2.0</span>
    <span class="ac-cl-date">2026-05-23</span>
    <p class="ac-cl-text">PRD와 기능정의 F-ID·FR-ID 연결을 도입했습니다.</p>
  </div>
</div>
```

```css
.ac-changelog { max-width:680px; margin:0 auto; display:flex; flex-direction:column; gap:8px; }
.ac-cl-row { display:grid; grid-template-columns:auto auto 1fr; align-items:center; gap:14px; padding:18px 0; border-bottom:1px solid var(--imac-silver); }
.ac-cl-date { font-size:var(--t-body-small); color:var(--imac-silver); }
.ac-cl-text { font-size:var(--t-body); color:var(--text); margin:0; }
@media (max-width:560px){ .ac-cl-row { grid-template-columns:1fr; gap:6px; } }
```

미감 규칙: 버전은 hl 형광펜 pill(5색 카탈로그), 날짜는 silver, 본문은 입니다체 유지입니다.

---

## 4. gantt-bar — 기간 비례 비비드 막대

단계 막대를 radius·비비드 풀필·기간 비례 폭으로, 그리드는 hairline만입니다.

```html
<div class="ac-gantt">
  <div class="ac-gt-row">
    <span class="ac-gt-label">기획</span>
    <div class="ac-gt-track"><div class="ac-gt-bar" style="--start:0%;--len:30%;background:var(--accent-blue)"></div></div>
  </div>
  <div class="ac-gt-row">
    <span class="ac-gt-label">디자인</span>
    <div class="ac-gt-track"><div class="ac-gt-bar" style="--start:22%;--len:34%;background:var(--accent-purple)"></div></div>
  </div>
  <div class="ac-gt-row">
    <span class="ac-gt-label">개발</span>
    <div class="ac-gt-track"><div class="ac-gt-bar" style="--start:45%;--len:50%;background:var(--accent-pink)"></div></div>
  </div>
</div>
```

```css
.ac-gantt { max-width:780px; margin:0 auto; display:flex; flex-direction:column; gap:14px; }
.ac-gt-row { display:grid; grid-template-columns:90px 1fr; align-items:center; gap:16px; }
.ac-gt-label { font-size:var(--t-body); font-weight:700; color:var(--headline); }
.ac-gt-track { position:relative; height:28px; border-radius:8px; background:var(--bg-alt); }
.ac-gt-bar {
  position:absolute; top:0; bottom:0; left:var(--start); width:0; border-radius:8px;
  transition:width 1s var(--ease-apple);
}
.ac-gt-bar.is-in { width:var(--len); }
```

```js
const gtIO = new IntersectionObserver((es)=>{
  es.forEach(e=>{ if(e.isIntersecting){ e.target.querySelectorAll('.ac-gt-bar').forEach((b,i)=>setTimeout(()=>b.classList.add('is-in'),i*90)); gtIO.unobserve(e.target);} });
},{threshold:.4});
document.querySelectorAll('.ac-gantt').forEach(el=>gtIO.observe(el));
```

미감 규칙: 막대마다 axis-1 비비드, 폭은 기간 비례, 트랙은 bg-alt hairline 톤입니다. 회색 단조 막대 금지입니다.
