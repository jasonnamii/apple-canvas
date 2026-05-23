# QC Checklist — H1~H12 자동 검증

## bash 스크립트

```bash
#!/bin/bash
FILE=$1
PASS=0
FAIL=0

# H1 듀얼톤
if ! grep -qE 'theme-light|theme-dark|data-theme="light"|data-theme="dark"' "$FILE"; then
  echo "❌ H1: theme 정의 없음"; ((FAIL++))
else echo "✅ H1: 듀얼톤"; ((PASS++)); fi

# H8 채도 게이트 통일 (양쪽 S≥85% — Candy hex)
if grep -qE '#2997FF|#30D158|#FF9F0A|#FF375F|#0071E3|#00845A' "$FILE"; then
  echo "❌ H8: 차분 시스템컬러 사용 → Candy hex로 교체"; ((FAIL++))
else echo "✅ H8: 채도 게이트"; ((PASS++)); fi

# H9 파스텔 워시
if grep -qE 'background:\s*#[E-F][0-9A-F]{5}' "$FILE"; then
  echo "❌ H9: 파스텔 워시 의심 (S<30% L>90%)"; ((FAIL++))
else echo "✅ H9: 카드 배경"; ((PASS++)); fi

# H10 빈 sticky
STICKY=$(grep -c 'sticky-container' "$FILE")
STATE=$(grep -c 'sticky-content\|focus-expression\|state-' "$FILE")
if [ "$STICKY" -gt "$STATE" ]; then
  echo "❌ H10: sticky-container($STICKY) > 콘텐츠 state($STATE)"; ((FAIL++))
else echo "✅ H10: sticky 콘텐츠"; ((PASS++)); fi

# H11 Frame Sandwich
INLINE=$(grep -c 'data-inline-media' "$FILE")
FRAMES=$(grep -c 'start-frame\|fallback-frame' "$FILE")
if [ "$INLINE" -gt 0 ] && [ "$FRAMES" -lt $((INLINE * 2)) ]; then
  echo "❌ H11: inline-media에 start/fallback 누락"; ((FAIL++))
else echo "✅ H11: Frame Sandwich"; ((PASS++)); fi

# H12 인라인 강조
if grep -qE 'text-decoration:\s*underline' "$FILE"; then
  echo "⚠ H12: text-decoration:underline → SVG path 또는 strip 권장"
fi

# H7 A11Y
ARIA=$(grep -c 'aria-label\|aria-labelledby' "$FILE")
if [ "$ARIA" -lt 5 ]; then echo "❌ H7: aria-label 5개 미만 ($ARIA)"; ((FAIL++))
else echo "✅ H7: ARIA"; ((PASS++)); fi
if ! grep -q 'prefers-reduced-motion' "$FILE"; then
  echo "❌ H7: reduced-motion 분기 없음"; ((FAIL++))
fi

# Apple-easing 강제
if grep -qE 'transition.*ease[^-]\|transition.*ease-in-out\|transition.*ease-out\|transition.*ease-in' "$FILE"; then
  echo "❌ Easing: cubic-bezier(0.4, 0, 0.2, 1) 강제"
fi

# 5스톱 그라디언트 1회만 (Premium Restraint H5)
STOPS=$(grep -c 'linearGradient\|linear-gradient.*,.*,.*,.*,' "$FILE")
if [ "$STOPS" -gt 1 ]; then
  echo "⚠ H5: multi-stop $STOPS회 (Premium Restraint = 1회만)"
fi

echo ""
echo "===== QC 결과: PASS $PASS / FAIL $FAIL ====="
```

## 사용

```bash
chmod +x qc-check.sh
./qc-check.sh output.html
```

## 통과 기준

- FAIL = 0
- 경고는 사용 의도 있으면 OK


## MINIMAL QC 자동 검증 (scripts/qc.sh)

```bash
bash scripts/qc.sh <HTML_FILE>
```

**MINIMAL 모드 강제 검사 (data-volume="minimal" 또는 data-mode="ive|ferrari" 감지 시):**

- [ ] `class="hl"` 잔존 0건 (M5 형광펜 금지)
- [ ] `gradient-text` 클래스 0건 (M4)
- [ ] `box-shadow` 32px+ 0건 (M9)
- [ ] Ferrari: `font-family: serif|Georgia|Times` 0건 (M10)
- [ ] Ferrari: `font-style: italic` 0건 (M10)
- [ ] 액센트 색 1개만 정의 (M1)
- [ ] 풀필 hero/section 블록 0건 (M3)

**MAXIMAL 모드 검사 (디폴트):**

- [ ] H1 듀얼톤 — light/dark accent hex 동일
- [ ] H3 5스톱 그라디언트 페이지당 ≤1회
- [ ] H5 채도 — `rgba(...,0.X)` 액센트 0건·`color-mix(...,white)` 0건
- [ ] H6 반응형 — `@media (max-width:` ≥1개
- [ ] 형광펜 105% — `.hl` 정의에 `line-height: 1.05` 있음
- [ ] reduced-motion 폴백 존재
- [ ] 한국어 포함 시 `word-break: keep-all` 박제
