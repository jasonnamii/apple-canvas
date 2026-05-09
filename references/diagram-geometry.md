# Diagram Geometry — SVG 다이어그램 기하 박제

> v3.1 신설. 형 실측 — 둠 루프 6노드 원형 흐름이 4번 그려야 정렬됐던 사각지대 보완.

## 본질

SVG 다이어그램은 **노드 좌표·반지름·화살표 marker** 3요소가 어긋나면 즉시 깨진다. 원형·플로우·연결선 3종 표준 박제로 단번 정렬.

## 패턴 1 — 순환 6노드 (시계방향)

가장 흔한 패턴. 둠루프·메타인지 5단계 루프 등.

```svg
viewBox="0 0 720 720"
center: (360, 360)
radius: 240 (호 화살표) / 노드는 호 위에

노드 좌표 (각도 기준):
- -90° (12시) → (360, 120)
- -30° (2시)  → (568, 240)
-  30° (4시)  → (568, 480)
-  90° (6시)  → (360, 600)
- 150° (8시)  → (152, 480)
- 210° (10시) → (152, 240)

호 화살표 path (시계방향, 노드 가장자리 직전 끝):
M 462,150 A 230,230 0 0 1 566,260   // 1 → 2
M 596,290 A 230,230 0 0 1 596,430   // 2 → 3
M 566,460 A 230,230 0 0 1 462,570   // 3 → 4
M 258,570 A 230,230 0 0 1 154,460   // 4 → 5
M 124,430 A 230,230 0 0 1 124,290   // 5 → 6
M 154,260 A 230,230 0 0 1 258,150   // 6 → 1
```

노드 박스 표준:
- 너비 200 / 높이 56 (강조 박스만 240·56)
- rx 28 (pill 형태)
- stroke-width 1.6 ~ 2.2

## 패턴 2 — 화살표 marker (Apple 스타일)

```svg
<marker id="arr" viewBox="0 0 12 12" refX="10" refY="6"
        markerWidth="6" markerHeight="6" orient="auto">
  <path d="M0,1 L11,6 L0,11 z" fill="#FF3355"/>
</marker>
```

- `refX=10`: 화살표 끝점이 path 끝과 일치
- `markerWidth=6`: 노드 가장자리 침범 ✗
- `orient="auto"`: 곡선 방향 자동 회전

## 패턴 3 — 노드 글로우 필터

```svg
<filter id="nodeGlow" x="-30%" y="-60%" width="160%" height="220%">
  <feGaussianBlur stdDeviation="4" result="b"/>
  <feMerge>
    <feMergeNode in="b"/>
    <feMergeNode in="SourceGraphic"/>
  </feMerge>
</filter>
```

비비드 노드(블랙 배경 + 비비드 stroke)에 적용. 다크 모드 디폴트.

## 패턴 4 — 중앙 라벨 + 라디얼 글로우

```svg
<radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
  <stop offset="0%" stop-color="#FF3355" stop-opacity="0.20"/>
  <stop offset="55%" stop-color="#FF3355" stop-opacity="0.05"/>
  <stop offset="100%" stop-color="#FF3355" stop-opacity="0"/>
</radialGradient>

<circle cx="360" cy="360" r="240" fill="url(#centerGlow)"/>
<text x="360" y="360" text-anchor="middle">CENTER LABEL</text>
```

## 패턴 5 — 4곡선 (Bento 카드 내부 미니 차트)

```svg
viewBox="0 0 300 80"

// 상승 (능력·확산)
<path d="M0,75 Q60,72 100,60 T180,30 T280,8" stroke="#FF6B35" fill="none"/>
<circle cx="280" cy="8" r="4" fill="#FF6B35"/>

// 하강 (비용)
<path d="M0,15 Q50,18 100,35 T200,60 T300,72" stroke="#00E676" fill="none"/>
<circle cx="300" cy="72" r="4" fill="#00E676"/>

// 평탄 (제도·뒤처짐)
<path d="M0,55 Q80,53 150,50 Q220,48 300,46" stroke="#FFD23F" fill="none"/>
<circle cx="300" cy="46" r="4" fill="#FFD23F"/>
```

## 패턴 6 — 메타인지 5단계 (수직 흐름)

```html
<div class="metaloop">
  <div class="metaloop-step"><div class="n">1</div><div class="txt">...</div></div>
  <div class="metaloop-step"><div class="n">2</div><div class="txt">...</div></div>
  <div class="metaloop-step warning">  <!-- 강조 단계 -->
    <div class="n">3</div>
    <div class="txt">...<span class="warn-tag">AI가 대신함</span></div>
  </div>
  ...
</div>
```

```css
.metaloop-step .n {
  width: 40px; height: 40px; border-radius: 50%;
  background: var(--bg-elev);
  border: 2px solid var(--line-2);
}
.metaloop-step.warning .n {
  background: var(--c-orange);
  border-color: var(--c-orange);
  color: #000;
  box-shadow: 0 0 24px rgba(255,107,53,0.5);
}
```

## 헌법 — 노드·화살표 정렬 룰 5종

1. **노드 가장자리 ≠ 호 끝점.** 호 끝점은 노드 가장자리에서 4~8px 떨어져야 marker가 노드 안 침범 ✗.
2. **반지름 일관.** 6노드면 6개 호 모두 동일 반지름. 다른 반지름 = 시각 진동.
3. **화살표 marker 6×6.** 노드 stroke 1.6~2.2와 비례. 8×8 이상 = 무거움.
4. **중앙 글로우 r ≤ 노드 반지름의 1.0.** 초과 시 노드와 충돌.
5. **노드 stroke + 텍스트 fill 대비.** stroke 비비드 / 텍스트 white 95%.

## ❌ WRONG / ✅ CORRECT

```
❌ WRONG — 화살표가 노드 안으로 침범
<path d="M 360,90 ... A 200,200 0 0 1 600,232"/>  // 노드 박스 (260,50)~(460,96)
→ 끝점 (600,232)이 다음 노드(2시 (568,240)) 안쪽으로 박힘
→ marker 화살표가 노드 가장자리에서 안 보임

✅ CORRECT — 노드 가장자리에서 4~8px 떨어진 호
<path d="M 462,150 A 230,230 0 0 1 566,260"/>
→ 시작점 (462,150) = 12시 노드 우측 어깨
→ 끝점 (566,260)  = 2시 노드 좌상단 어깨
→ marker가 노드 가장자리 직전에서 멈춤. 깔끔.
```

## Gotchas

- **viewBox 비율 ≠ container 비율.** SVG는 `preserveAspectRatio` 디폴트(meet)로 늘어남. 720×720 정사각이 컨테이너에서 직사각으로 보일 수 있음. `style="max-width:680px;margin:0 auto"`로 강제.
- **6노드 60° 균등 분포 위반 시 시각 비대칭.** 12·2·4·6·8·10시 표준에서 벗어나면 즉시 깨짐.
- **호 끝점 좌표 계산 실수 다수.** A radius rx,ry 0 0 1 (sweep) end_x,end_y 4개 인자 중 sweep 0/1 자주 헷갈림. 시계방향 = 1, 반시계 = 0.
- **글로우 필터 적용 안 한 노드 = 평면적.** 다크 모드 SVG는 nodeGlow 필터 디폴트.
- **6시 결과 박스 강조 = 다른 stroke·다른 너비.** 240×56·stroke 2.2·배경 더 진하게 (`#2a0810`).
