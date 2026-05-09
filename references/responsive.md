# Responsive 헌법 H13 — 반응형 3단 박제

> v3.1 신설. apple.com 30페이지 박제는 데스크톱 위주였고 모바일·태블릿 break 박제가 빠짐. 형 실측 결함 보완.

## 헌법 H13 — 반응형 3단 의무

모든 풀페이지 산출물은 다음 3개 미디어 쿼리 break를 가져야 한다. 미준수 = FAIL.

| Break | viewport | 대상 |
|---|---|---|
| **D1 데스크톱** | ≥ 1025px | 기본 (디폴트 디자인) |
| **D2 태블릿** | 769 ~ 1024px | iPad·작은 노트북 |
| **D3 모바일 큰화면** | 481 ~ 768px | 큰 핸드폰 가로·작은 태블릿 |
| **D4 모바일** | ≤ 480px | iPhone·Android 세로 |

## 표준 미디어 쿼리 박제

```css
/* D2 태블릿 */
@media (max-width: 1024px) {
  /* 5열 그리드 → 3열 */
  .laws { grid-template-columns: 1fr 1fr 1fr; }
  /* stage-body 3열 → 2열 + 마지막 셀 full-width */
  .stage-body { grid-template-columns: 1fr 1fr; gap: 12px; }
  .stage-body > div:last-child { grid-column: 1 / -1; }
}

/* D3 작은 태블릿·큰 모바일 */
@media (max-width: 768px) {
  .section { padding: 64px 20px; }
  .section-title { max-width: 100%; }
  .section-lead { max-width: 100%; }
  /* 2열 그리드 → 1열 */
  .bento-curves { grid-template-columns: 1fr; }
  /* 5열 → 2열 */
  .laws { grid-template-columns: 1fr 1fr; }
  /* compare 표 → 1열 + 라벨 inline */
  .compare-row { grid-template-columns: 1fr; gap: 6px; padding: 16px 0; }
  .compare-row.head { display: none; }
  .compare-row .item::before {
    content: attr(data-lbl) " · ";
    color: var(--text-3);
    font-size: 11px; letter-spacing: 0.12em;
    text-transform: uppercase; font-weight: 700;
  }
  .bignum { grid-template-columns: 1fr; gap: 24px; text-align: center; }
  .cards-3 { grid-template-columns: 1fr; }
  .stage { grid-template-columns: 56px 1fr; gap: 16px; padding: 24px 0; }
  .stage-body { grid-template-columns: 1fr; gap: 8px; }
  /* 인라인 grid 자동 분해 */
  div[style*="grid-template-columns:repeat(3,1fr)"] {
    grid-template-columns: 1fr 1fr !important;
  }
  div[style*="grid-template-columns:repeat(5,1fr)"] {
    grid-template-columns: 1fr 1fr !important;
  }
  .nav-meta { display: none; }
  /* nb-span 자동 해제 */
  .nb { white-space: normal; }
}

/* D4 모바일 */
@media (max-width: 480px) {
  .section { padding: 56px 16px; }
  .laws { grid-template-columns: 1fr; }
  .nav-mark { font-size: 13px; }
  .hero { padding: 100px 20px 60px; }
  .hero-meta { gap: 16px; font-size: 11px; }
  .statement { padding: 80px 20px; }
  .echo { padding: 120px 20px 100px; }
  div[style*="grid-template-columns:repeat(3,1fr)"] {
    grid-template-columns: 1fr !important;
  }
  div[style*="grid-template-columns:repeat(5,1fr)"] {
    grid-template-columns: 1fr !important;
  }
}

/* 모션 감소 사용자 보호 (H7) */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 인라인 스타일 grid 자동 분해 패턴

데이터 카드를 inline `style="grid-template-columns:repeat(N,1fr)"`로 박은 경우, 모바일에서 미디어 쿼리가 못 잡음. **속성 선택자**로 `!important` 강제 분해.

```css
/* D3에서 3열·5열 inline grid 자동 → 2열 */
div[style*="grid-template-columns:repeat(3,1fr)"] { grid-template-columns: 1fr 1fr !important; }
div[style*="grid-template-columns:repeat(5,1fr)"] { grid-template-columns: 1fr 1fr !important; }

/* D4에서 1열로 */
@media (max-width: 480px) {
  div[style*="grid-template-columns:repeat(3,1fr)"] { grid-template-columns: 1fr !important; }
  div[style*="grid-template-columns:repeat(5,1fr)"] { grid-template-columns: 1fr !important; }
}
```

## 패딩 clamp 박제

section padding은 viewport 비례로 축소.

```css
.section { padding: clamp(80px, 10vw, 140px) 24px; }
.statement { padding: clamp(120px, 14vw, 200px) 24px; }
.hero { padding: clamp(100px, 12vw, 180px) 24px 80px; }
```

## 헌법 H13 자가검사 4문

② LAYOUT 진입 직전 강제 4문:

1. D1·D2·D3·D4 break 4단 모두 박제했는가?
2. 인라인 grid 자동 분해 속성 선택자 박제했는가?
3. compare 표에 `data-lbl` 속성 + `::before` 라벨 박제했는가?
4. `prefers-reduced-motion` 박제했는가?

4문 모두 YES = ② 진입. 하나라도 NO = ② 재진입.

## ❌ WRONG / ✅ CORRECT

```
❌ WRONG — 단일 break + 데스크톱 위주
@media (max-width: 900px) {
  .laws { grid-template-columns: 1fr; }  /* 5열을 한번에 1열로 */
}
→ 결과: 768px·1024px 사이 모든 viewport에서 카드 너비 0 또는 압축

✅ CORRECT — 3~4단 점진 분해
@media (max-width: 1024px) { .laws { grid-template-columns: 1fr 1fr 1fr; } }
@media (max-width: 768px)  { .laws { grid-template-columns: 1fr 1fr; } }
@media (max-width: 480px)  { .laws { grid-template-columns: 1fr; } }
```

## Gotchas

- **단일 break (예: 900px) 디자인 = FAIL.** 1024 / 768 / 480 3단 미만 = H13 위반.
- **inline grid `repeat(N,1fr)`은 미디어 쿼리가 못 잡음.** 속성 선택자 + `!important` 강제.
- **nb-span은 D3에서 반드시 해제.** 미해제 시 가로 스크롤.
- **section padding 고정값 = FAIL.** clamp + vw 박제 필수.
- **compare 표 모바일 분해 시 head row hidden + data-lbl ::before 인라인 라벨 박제.** 안 하면 컨텍스트 사라짐.
