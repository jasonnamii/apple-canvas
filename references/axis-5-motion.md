# Axis 5 — Motion (모션 SSOT)

> Apple-easing 표준값 + Frame Sandwich + Sticky Chip Hero + scroll-snap.

## 1. Apple-easing 표준값 (★박제 1순위)

```css
:root {
  --ease-apple: cubic-bezier(0.4, 0, 0.2, 1);
  --dur-fast: 0.3s;
  --dur-mid:  0.4s;
  --dur-slow: 0.6s;
}

.transition-default { transition: all var(--dur-mid) var(--ease-apple); }
```

상세: `→ references/apple-easing.md`

## 2. Frame Sandwich (H11 — CLS 0)

```html
<picture id="overview-perf-startframe-1" class="startframe start-frame" data-lazy
  data-download-area-keyframe='{"start":"a0t - 150vh","end":"a0b","anchors":"html"}'>
  <img src="...startframe.jpg" alt>
</picture>

<video data-inline-media preload="none" muted playsinline
  data-inline-media-plugins="AnimLoad, AnimPlay, ViewportSourceOnce, LoadTimeout"
  data-inline-media-play-keyframe='{"start":"t - 75vh","end":"b"}'
  data-inline-media-pause-keyframe='{"start":"t - 100vh","end":"b"}'>
</video>

<picture id="overview-perf-endframe-2" class="endframe fallback-frame" data-lazy
  data-download-area-keyframe='{"start":"a0t - 150vh","end":"a0b"}'>
  <img src="...endframe.jpg" alt>
</picture>
```

## 3. Sticky Chip Hero (focus-expression)

```html
<div class="sticky-container" style="height: 600vh;">
  <div class="sticky-content" style="position: sticky; top: 0; height: 100vh;">
    <p data-focus-expression='{"expression":"a0t + 200vh","anchors":[".sticky-container"]}'>
      State 1
    </p>
    <p data-focus-expression='{"expression":"a0t + 400vh","anchors":[".sticky-container"]}'>
      State 2
    </p>
  </div>
</div>
```

## 4. scroll-snap (가로 카드)

```css
.snap-container {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 24px;
}
.snap-item {
  scroll-snap-align: start;
  flex: 0 0 auto;
}
```

## 5. data-anim-keyframe 노테이션

```
"a0t" = anchor 0 top
"a0b" = anchor 0 bottom
"a0h" = anchor 0 height
"-75vh" = 75 viewport heights before
"+ 200vh" = 200 viewport heights after
```

## 6. prefers-reduced-motion (H7)

```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
```

## 7. will-change

```css
.scroll-trigger {
  will-change: transform, opacity;
}
```

## 8. 금기

```
❌ transition: all 0.3s ease (애플 노선 ✗) → cubic-bezier(0.4,0,0.2,1) 강제
❌ inline-media에 frame 1개만 (CLS 폭발) → start/end/fallback 3프레임
❌ animation-timeline·view() 등 실험 신기능 (Apple 미사용)
❌ sticky 250vh 빈공간 (H10 위반)
```
