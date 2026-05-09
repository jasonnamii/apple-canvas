# Korean Typography 박제 (한국어 4단계 + word-break + nb-span)

> v3.1 신설. 영문 16스케일이 한국어 어절·받침·줄바꿈을 잡지 못하는 사각지대 보완.

## 본질

영문 typography는 단어 단위 word-break·hyphen 처리가 자연스럽지만, 한국어는 **어절 단위 keep-all + 의미단위 nb-span**이 표준 박제. PT 빅타이포일수록 더 결정적.

## 4단계 한국어 타이포 박제

| 단계 | 용도 | clamp 박제 |
|---|---|---|
| **K-Hero** | 풀페이지 Hero · PT-Monolith | `clamp(56px, 11vw, 200px)` |
| **K-Section** | 섹션 헤드라인 (Bento·Scroll 진입부) | `clamp(40px, 5.2vw, 72px)` |
| **K-Lead** | 섹션 부제·sub | `clamp(19px, 1.8vw, 26px)` |
| **K-Body** | 본문 (산문 prose) | `clamp(17px, 1.4vw, 21px)` |

`line-height` 박제:
- K-Hero: 0.96 ~ 1.05 (1.0 권장)
- K-Section: 1.08 ~ 1.18
- K-Lead: 1.5
- K-Body: 1.7 ~ 1.8

`letter-spacing` 박제:
- K-Hero / K-Section: -0.04em ~ -0.045em
- K-Lead: -0.015em
- K-Body: -0.005em

## 헌법 룰 — word-break: keep-all 강제

모든 한국어 텍스트 컨테이너에 `word-break: keep-all` 강제. 어절(공백 단위)을 단어처럼 취급해 줄바꿈 위치를 보존.

```css
.k-hero, .k-section-title, .k-lead, .k-body, .prose p {
  word-break: keep-all;
}
```

## nb-span (No-Break Span) 패턴

의미 단위 줄바꿈 강제 보존이 필요한 경우 (예: "AI를 쓰느냐"가 두 줄로 쪼개지면 안 됨), `<span class="nb">` 패턴 사용.

```html
<h1 class="k-hero">
  <span class="nb">AI 시대의 승부는</span>
  <span class="hl"><span class="nb">"AI를 쓰느냐"</span>가 아니라,</span>
</h1>
```

```css
.nb { white-space: nowrap; }
@media (max-width: 768px) {
  .nb { white-space: normal; }  /* 모바일 자동 해제 */
}
```

## 줄바꿈 강제 패턴 — 의미 단위 5층

긴 문장의 의미 단위 줄바꿈 강제. shaper-skill의 §B-NARR 스파인과 동일 본질.

```html
<p class="statement-quote">
  <span class="l1">전제 1</span>
  <span class="l2">전제 2</span>
  <span class="l3">결론</span>
  <span class="l4">함의</span>
</p>
```

각 `.l1`~`.l4`는 `display: block`으로 강제 줄바꿈. `nb-span`과 조합해 데스크톱 강제 / 모바일 해제.

## ❌ WRONG / ✅ CORRECT

```
❌ WRONG — 한국어 PT 빅타이포에 word-break 없이 작성
.hero-title { font-size: clamp(56px, 11vw, 200px); }
<h1>메타인지가 분기점이다</h1>
→ 결과: 1440px에서 "메타인지" + "가" + "분기점이다" 어색하게 잘림

✅ CORRECT — keep-all + nb-span 강제
.hero-title { font-size: clamp(56px, 11vw, 200px); word-break: keep-all; }
<h1 class="hero-title">
  <span class="nb">메타인지가</span><br>
  <span class="nb">분기점이다</span>
</h1>
```

## 한국어 vs 영문 16스케일 매핑

A2 typography의 영문 16스케일과 한국어 4단계의 대응:

| 영문 t-* | 영문 size | K-단계 |
|---|---|---|
| t-14 | 200px | K-Hero |
| t-9 | 64px | K-Section (max) |
| t-7 | 36px | K-Section (min~mid) |
| t-6 | 28px | K-Lead (max) |
| t-5 | 21px | K-Body (max) |
| t-4 | 17px | K-Body (min) |

영문 t-1 ~ t-16 박제는 그대로 유지. 한국어 4단계는 그 위에 의미단위 박제.

## Gotchas

- **H2 위반 가능성:** 한국어가 t-13(160px) 이상 가면 받침 잘림 다수. K-Hero는 viewport vw 비례로 자동 축소.
- **굵기 트레이드오프:** 한글은 굵을수록 가독성 ↓ (받침 뭉침). PT 빅타이포에서도 weight 800 이내 권장. 900 이상은 라틴 한정.
- **letter-spacing 음수 한계:** -0.05em 초과 시 받침이 다음 글자에 닿음. -0.045em 박제.
- **nb-span 모바일 해제 필수:** 미해제 시 모바일에서 한 줄이 화면 폭 초과 → 가로 스크롤.
