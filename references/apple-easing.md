# Apple-Easing 표준값 박제

> L4 박제 5회 발현. 모든 transition의 디폴트.

## 정본

```css
:root {
  --ease-apple: cubic-bezier(0.4, 0, 0.2, 1);
}
```

## Duration 표준

```css
--dur-fast: 0.3s;   /* 호버·작은 변화 */
--dur-mid:  0.4s;   /* 카드·tile */
--dur-slow: 0.6s;   /* 섹션 전환 */
```

## 적용 케이스 (박제 5회)

```css
/* 1. max-height 접기 */
transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);

/* 2. transform 호버 */
transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

/* 3. transform 빠른 호버 */
transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

/* 4~5. 모든 transition 표준화 */
.transition-default {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 금기

```
❌ ease, ease-in, ease-out, ease-in-out (CSS 디폴트 키워드)
❌ 임의 cubic-bezier (0.25,0.1,0.25,1 등) → 0.4,0,0.2,1 강제
❌ duration 0.5s 같은 비표준 → 0.3/0.4/0.6 셋 중 1개
```
