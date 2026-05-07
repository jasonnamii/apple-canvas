# Mode — Cinematic (플래그십)

> Frame Sandwich + AAP + Sticky Chip Hero. MacBook Pro 급 페이지.

## 사용 케이스
- 플래그십 PR
- 회사 매니페스토
- 신제품 메인 랜딩

## 디폴트 매핑
- TONE: Dark
- STRUCTURE: Page (시네마틱 시퀀스)
- EMPHASIS: LV3 풀강 + Frame Sandwich + AAP

## 골격

```html
<main data-theme="dark">
  <!-- Welcome -->
  <section class="section-welcome">
    <h1 class="typography-hero-super">
      <span class="gradient-text">Apple Intelligence.</span>
    </h1>
  </section>
  
  <!-- Sticky Chip Hero (PT 빅타이포 + focus-expression) -->
  <section class="sticky-container" style="height: 800vh;">
    <div class="sticky-content" style="position: sticky; top: 0;">
      <p data-focus-expression='{"expression":"a0t + 200vh"}'
         class="typography-headline-super">M5. M5 Pro. M5 Max.</p>
      <p data-focus-expression='{"expression":"a0t + 400vh"}'
         class="typography-eyebrow-super">최대 8배 더 빠른 AI 성능</p>
    </div>
  </section>
  
  <!-- Frame Sandwich -->
  <section class="section-performance">
    <picture class="startframe start-frame" data-lazy>
      <img src="...startframe.jpg" alt>
    </picture>
    <video data-inline-media muted playsinline
      data-inline-media-play-keyframe='{"start":"t - 75vh","end":"b"}'>
    </video>
    <picture class="endframe fallback-frame" data-lazy>
      <img src="...endframe.jpg" alt>
    </picture>
  </section>
  
  <!-- AAP Gallery -->
  <section class="section-aap">
    <div class="aap-bento-gallery">
      <div class="aap-frame" data-aap-color="blue"><img src="..."></div>
      <div class="aap-frame" data-aap-color="purple"><img src="..."></div>
    </div>
  </section>
</main>
```

## 발현 강제

- Sticky Chip Hero 2회 이상 (다중 PT 빅타이포)
- Frame Sandwich 1회 이상 (inline-media 있을 시)
- AAP 또는 colornav 1회 이상
- gradient-text Hero 1회

## 금기

```
❌ Sticky 단일 state (시네마틱 = 다중 state 변화)
❌ inline-media frame 누락
❌ 라이트 톤 (Cinematic = 다크 본질)
```
