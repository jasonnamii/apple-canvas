# Prose Preservation — 본문 verbatim 보존 + 시각화 첨가 룰

> v3.1 신설. 형 명시 — "글을 편집하거나 삭제하지 말고 시각화를 통해 가독성을 올려줘". apple-canvas는 시각층, shaper-skill은 텍스트층. 영토 분리 박제.

## 본질

apple-canvas가 산문체 본문(prose)을 받았을 때, **본문 100% verbatim 보존 + 시각화·위계 첨가만** 허용. 표·블릿 과다 시 서사 깨짐 → 산문 가독성 ↓.

## 영토 분리

| 영역 | 책임 | 처리 |
|---|---|---|
| **텍스트층** (산문·문장·맞춤법·격식·KIWI) | shaper-skill | apple-canvas 침범 ✗ |
| **시각층** (레이아웃·타이포·컬러·다이어그램·강조) | apple-canvas | shaper-skill 침범 ✗ |

원칙: shaper-skill 산출물을 받으면 **본문 verbatim** + 시각만 입힘. 본문 어휘·문장·문단 단위 ✗.

## 4대 룰

### 룰 1 — 글 편집·삭제 ✗

산문체 본문이 입력으로 들어오면 한 단어도 편집·삭제하지 않는다. `<p>` 단위 그대로 보존.

```html
<!-- 입력 (shaper-skill 산출물) -->
<p>지금 AI를 둘러싼 논쟁은 대체로 두 방향으로 흐릅니다.</p>
<p>하나는 낙관론입니다. AI가 개인을...</p>

<!-- apple-canvas 처리 후 (verbatim 보존) -->
<div class="prose">
  <p>지금 AI를 둘러싼 논쟁은 대체로 두 방향으로 흐릅니다.</p>
  <p>하나는 낙관론입니다. AI가 개인을...</p>
</div>
```

### 룰 2 — 시각화는 산문 사이에만 첨가

표·다이어그램·Bento·빅넘버는 산문 **사이**에 삽입. 산문 안 텍스트를 표로 변환 ✗.

```html
<!-- ❌ WRONG: 산문을 표로 압축 -->
<table>
  <tr><td>낙관론</td><td>AI가 개인을 더 생산적으로</td></tr>
  <tr><td>비관론</td><td>AI가 학생의 사고를 약화</td></tr>
</table>

<!-- ✅ CORRECT: 산문 보존 + 그 사이에 시각화 첨가 -->
<div class="prose">
  <p>지금 AI를 둘러싼 논쟁은 대체로 두 방향으로 흐릅니다.</p>
  <p>하나는 낙관론입니다. ...</p>
</div>
<div class="bento-curves"><!-- 보강 시각화 --></div>
<div class="prose">
  <p>여기서 중요한 것은...</p>
</div>
```

### 룰 3 — 인라인 강조 (형광펜·gradient-text)

본문 **안**에서 단어·구절 강조는 인라인 `.hl` rounded-pill 형광펜 또는 gradient-text만. 표·블릿으로 변환 ✗. strip 방식 ✗.

```html
<p>
  <span class="hl-orange">AI는 인간이 지식과 숙련을 획득하던 순서를 바꾸는 기술</span>입니다.
</p>
```

### 룰 4 — pullquote는 강조 발췌만

본문 핵심 문장을 한 번 더 강조하고 싶으면 `<blockquote class="pullquote">`로 **발췌**만. 본문 자체는 그대로 두고 추가 시각.

```html
<p>그래서 핵심 질문은 바뀝니다.</p>
<div class="pullquote">
  "AI를 사용해도 되는가?"가 아니라,<br>
  <span style="color: var(--c-orange);">"AI를 사용한 뒤에도 학습이 남는가?"</span>입니다.
</div>
<p>이 리포트의 결론은 분명합니다...</p>
```

## 표·블릿 사용 기준

원칙: **비교가 본질일 때만** 표 사용. 그 외엔 카드·다이어그램·인라인 강조.

| 본문 패턴 | 시각화 |
|---|---|
| "다음 다섯 가지가 있습니다." 후 5개 명사 나열 | 5장 Bento 카드 (블릿 ✗) |
| "A는 X·B는 Y" 같은 대비 | Compare 매트릭스 (표) |
| "A로 인해 B가 발생" 같은 인과 | 다이어그램·플로우 |
| "다음 같이..." 후 산문 설명 | 산문 보존 + 인라인 강조 |
| 핵심 한 문장 | pullquote 발췌 |
| 큰 숫자 1개 | Big Number + caption 카드 |

## prose 컨테이너 박제

```css
.prose {
  max-width: 1100px;   /* wrap과 동일 */
  margin: 48px auto 0;
  padding: 0 24px;
  width: 100%;
}
.prose > * { max-width: 760px; }   /* 본문 가독폭 자동 제한 */
.prose p {
  font-size: clamp(17px, 1.4vw, 21px);
  line-height: 1.78;
  margin-bottom: 26px;
  word-break: keep-all;
}
```

## 헌법 — 본문 보존 자가검사 4문

② 시각화 진입 직전 4문:

1. 입력 산문 본문을 verbatim 보존했는가? (한 단어도 안 바꿈)
2. 표·블릿 변환은 비교·대비가 본질일 때만 사용했는가?
3. 산문 안 강조는 인라인 형광펜·gradient-text로만 처리했는가?
4. shaper-skill 영토(어휘·문장·격식·KIWI)를 침범하지 않았는가?

4문 모두 YES = ② 진입. 하나라도 NO = 본문 보존으로 복귀.

## ❌ WRONG / ✅ CORRECT

```
❌ WRONG — 산문을 표·블릿으로 분해해 가독성 ↑ 시도
<table>
  <tr><th>주장</th><th>근거</th></tr>
  <tr><td>낙관론</td><td>생산성 ↑</td></tr>
  <tr><td>비관론</td><td>사고 ↓</td></tr>
</table>
→ 형 명시 위반: "글을 편집·삭제하지 말고 시각화로 가독성 올려"
→ 산문 서사 깨짐. shaper-skill 산출물 무력화

✅ CORRECT — 산문 verbatim + 시각 첨가
<div class="prose">
  <p>하나는 낙관론입니다. AI가 개인을 더 생산적으로 만들고...</p>
  <p>다른 하나는 비관론입니다. AI가 학생의 사고를 약화시키고...</p>
  <p>둘 다 맞는 말을 하고 있지만, <span class="hl-orange">AI는 인간이 지식과 숙련을 획득하던 순서를 바꾸는 기술</span>입니다.</p>
</div>
<!-- 그 다음 강조가 필요하면 pullquote 또는 다이어그램 첨가 -->
```

## Gotchas

- **shaper-skill 산출물 받았는데 표로 압축 = 영토 침범.** 시각만 입혀라.
- **블릿 과다 = 서사 붕괴.** 산문 1단락에 블릿 3개 이상 = FAIL. 블릿은 헌장·시스템 카드 같은 단순 나열만.
- **pullquote는 발췌, 변형 ✗.** 본문 안 문장을 그대로 박는다. 다른 표현으로 바꾸면 영토 침범.
- **prose padding과 wrap padding 일치 필수.** wrap 1100·padding 24 → prose 1100·padding 24. 불일치 시 좌측 정렬선 어긋남.
- **본문 폭 ≤ 760px.** 그 이상은 한 줄이 너무 길어 가독성 ↓.
