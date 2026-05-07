# Mode — PT-Monolith (빅타이포 1장)

> 단일 빅타이포 PT 한장. 매니페스토·핵심 한 줄.

## 사용 케이스
- 한장 매니페스토
- Hero 슬라이드 1장
- 캠페인 키 비주얼 (텍스트 only)
- 스피커 발표 슬라이드

## 디폴트 매핑
- TONE: Dual (또는 Dark)
- STRUCTURE: Page (단일·풀바이즈드)
- EMPHASIS: LV3 풀강 + PT 200px+ 강제

## 골격

```html
<main data-theme="dark" class="pt-monolith">
  <section class="hero-monolith grid-12">
    <div class="content large-10 large-offset-1">
      <p class="typography-eyebrow">2026 매니페스토</p>
      <h1 class="typography-hero-super">
        만들지 말고, <br>
        <span class="gradient-text">발현시켜라.</span>
      </h1>
      <p class="typography-callout">애플급 강도. 이미지 없이도.</p>
    </div>
  </section>
</main>
```

```css
.pt-monolith {
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--bg);
}
.hero-monolith h1 {
  font-size: clamp(80px, 18vw, 280px);
  line-height: 0.95;
  letter-spacing: -0.04em;
  font-weight: 700;
}
```

## 발현 강제

- 폰트 사이즈 200px+ (clamp로 반응형)
- gradient-text Hero 강제
- eyebrow 12~14px 강조
- 단일 메시지 (다중 ✗)
- 면분할 단순 (large-10 + offset-1)

## 금기

```
❌ 단락 본문 추가 (PT-Monolith = 헤드라인 only)
❌ 폰트 100px 이하 (200px+ 강제)
❌ 면분할 복잡 (단순 단일 셀)
❌ Bento mosaic (mode-bento)
```
