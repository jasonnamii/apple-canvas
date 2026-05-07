# Mode — Scroll (시네마틱 서사)

> 15섹션 시네마틱 스크롤. MacBook Pro 패턴 박제.

## 사용 케이스
- 제품런칭
- 캠페인 페이지
- 풀 페이지 랜딩

## 디폴트 매핑
- TONE: Dual (마지막 섹션만 Light alt)
- STRUCTURE: Page (서사) + Section (15개)
- EMPHASIS: LV3 풀강

## 15섹션 시퀀스 (MacBook Pro 박제)

```
1.  section-welcome (hero, dark)
2.  section-highlights (background-alt, dark)
3.  section-product-viewer (dark)
4.  section-performance (dark, sticky)
5.  section-artificial-intelligence (dark)
6.  section-battery (dark)
7.  section-macos (dark)
8.  section-continuity (dark)
9.  section-apps (dark)
10. section-display (dark)
11. section-camera (dark)
12. section-connectivity (dark)
13. section-security (dark)
14. section-upgraders (dark)
15. section-incentive (background-alt, light) ← 마지막 라이트
```

## 골격

```html
<main data-theme="dark">
  <section class="section-welcome">
    <div class="hero">
      <p class="typography-eyebrow">신제품</p>
      <h1 class="typography-hero-super">
        <span class="gradient-text">놀라움의</span> 재정의.
      </h1>
    </div>
  </section>
  
  <section class="section-performance sticky-container" style="height: 600vh;">
    <div class="sticky-content" style="position: sticky; top: 0;">
      <p data-focus-expression='{"expression":"a0t + 200vh"}'>
        State 1: 빠르다.
      </p>
      <p data-focus-expression='{"expression":"a0t + 400vh"}'>
        State 2: 더 빠르다.
      </p>
    </div>
  </section>
  
  <!-- 13섹션 더 -->
</main>
```

## 발현 강제

- Sticky Chip Hero 1회 이상
- Frame Sandwich 1회 이상 (inline-media 있으면)
- Big-Number 3개 이상
- 마지막 섹션만 라이트 (대비)

## 금기

```
❌ Sticky 빈 250vh (H10) — focus-expression state 강제
❌ inline-media 1프레임 (H11) — start/end/fallback 3
❌ 5스톱 그라디언트 2회+ (H5) — Hero 1개만
```
