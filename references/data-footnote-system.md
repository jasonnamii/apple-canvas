# Data — Footnote 시스템

## 정의
가격·법적 고지·세부 사양을 본문에서 분리. Apple Arcade는 페이지당 293개 각주 사용.

## 구조
```html
<p>월 6,500원<sup class="footnote-number"><a href="#fn1" id="ref1">1</a></sup>으로 시작.</p>

<section class="footnotes" aria-labelledby="footnotes-title">
  <h2 id="footnotes-title" class="visually-hidden">각주</h2>
  <ol class="footnote-list">
    <li id="fn1" class="footnote">
      <span class="footnote-subglyph">1.</span>
      Apple Music 신규 구독자 한정. 첫 1개월 무료, 이후 월 6,500원 부과.
      <a href="#ref1" class="footnote-back" aria-label="본문으로 돌아가기">↩</a>
    </li>
  </ol>
</section>
```

## CSS
```css
.footnote-number { font-size: 0.7em; vertical-align: super; }
.footnote-number a { color: var(--accent-blue); text-decoration: none; }

.footnotes { margin-top: 80px; padding: 32px; border-top: 1px solid rgba(0,0,0,0.1); }
.footnote-list { list-style: none; padding: 0; counter-reset: footnote; }
.footnote { font-size: 12px; opacity: 0.7; line-height: 1.6; padding: 8px 0; }
.footnote-subglyph { font-weight: 700; margin-right: 8px; }
.footnote-back { margin-left: 8px; text-decoration: none; }

.visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0; }
```

## 핵심 규칙
1. **숫자 인덱스** — 1, 2, 3 (또는 ★, †, ‡ 기호도 가능)
2. **양방향 링크** — 본문 → 각주 + 각주 → 본문
3. **각주 영역 시각 분리** — `border-top` + `opacity 0.7`
4. **시각장애인 지원** — `aria-labelledby` + 본문 복귀 `aria-label`
5. **각주 = 12px·alpha 0.6** (typography 16단계 #16 footnote)
