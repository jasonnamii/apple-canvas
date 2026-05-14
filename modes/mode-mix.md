# Mode — Mix (Bento + Scroll 혼합)

> 분석·중간 길이 페이지. Bento 섹션 + Scroll 섹션 혼합.

## 사용 케이스
- 캠페인 분석 (Bento KPI + Scroll 서사)
- 제품 분석 보고서
- 리뷰 한장+추가 디테일

## 디폴트 매핑
- TONE: Dual
- STRUCTURE: Page + Section + Block
- EMPHASIS: LV3 풀강 (Bento) + LV2 (Scroll)

## 골격

```html
<main data-theme="dual">
  <!-- Section 1: Bento KPI 한장 -->
  <section class="bento-section">
    <div class="bento-grid grid-12">
      <!-- Bento 셀들 (mode-bento.md 패턴) -->
    </div>
  </section>
  
  <!-- Section 2~5: Scroll 서사 -->
  <section class="scroll-section section-narrative" data-theme="dark">
    <h2 class="typography-section">왜 이 결과인가.</h2>
    <p class="typography-body">
      <span class="hl hl-pink hl-block">3가지 이유.</span>
    </p>
  </section>
  
  <section class="scroll-section section-detail">
    <!-- Big Number + 상세 -->
  </section>
</main>
```

## 발현 강제

- Bento 1섹션 + Scroll 3~5섹션
- 형광펜 2색 이상
- gradient-text Hero 1회

## 금기

```
❌ Bento만 5섹션+ (Mix 본질 위배 → mode-bento)
❌ Scroll만 15섹션 (mode-scroll)
```
