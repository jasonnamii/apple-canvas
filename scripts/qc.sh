#!/usr/bin/env bash
# apple-canvas QC v260523.3
# tokens 위반·헌법 위반·MINIMAL 누수·105% 위반 자동 grep

set -e
HTML="${1:?Usage: bash scripts/qc.sh <HTML_FILE>}"
[ -f "$HTML" ] || { echo "❌ FILE NOT FOUND: $HTML"; exit 1; }

FAIL=0
echo "=== apple-canvas QC: $HTML ==="

# H1 듀얼톤 — light/dark accent hex 다르면 FAIL
LIGHT=$(grep -oE 'data-tone="light"[^}]*--accent[^;]*;' "$HTML" | head -1)
DARK=$(grep -oE 'data-tone="dark"[^}]*--accent[^;]*;' "$HTML" | head -1)
[ -n "$LIGHT" ] && [ -n "$DARK" ] && [ "$LIGHT" != "$DARK" ] && { echo "❌ H1 듀얼톤 위반"; FAIL=1; }

# H5 비비드 채도 — accent를 흰색으로 섞어 죽이는 처리 차단.
# Shadow rgba는 허용한다.
if grep -qE 'color-mix\(in srgb,[^,]+,\s*white' "$HTML"; then
  echo "❌ H5 채도 신성불가침 위반 — white mix"
  FAIL=1
fi

# 형광펜 105% 룰 — .hl 정의에 line-height: 1.05 없으면 FAIL
if grep -q '\.hl\b' "$HTML" && ! grep -qE 'line-height:\s*1\.05' "$HTML"; then
  echo "❌ 형광펜 105% 위반 — .hl 정의에 line-height: 1.05 없음"
  FAIL=1
fi

# MINIMAL 누수 — data-volume="minimal" 또는 data-mode="ive|ferrari" 활성인데
# 형광펜/gradient-text/풀필블록 잔존 시 FAIL
if grep -qE 'data-(volume="minimal"|mode="(ive|ferrari)")' "$HTML"; then
  echo "ℹ MINIMAL 모드 감지 — 누수 검사"
  for forbid in 'class="hl' 'gradient-text' 'box-shadow.*32px'; do
    if grep -qE "$forbid" "$HTML"; then
      echo "❌ MINIMAL 누수 — $forbid 잔존"
      FAIL=1
    fi
  done
  # Ferrari serif·italic 차단
  if grep -qE 'data-mode="ferrari"' "$HTML"; then
    if grep -qE 'font-family:[^;]*(serif|Georgia|Times)' "$HTML"; then
      echo "❌ Ferrari serif 사용 — 산세리프 강제"
      FAIL=1
    fi
    if grep -qE 'font-style:\s*italic' "$HTML"; then
      echo "❌ Ferrari italic 사용 — 금지"
      FAIL=1
    fi
  fi
fi

# H6 반응형 4단 — 최소 1개 미디어쿼리 존재
grep -qE '@media\s*\(max-width:' "$HTML" || { echo "❌ H6 반응형 미디어쿼리 0개"; FAIL=1; }

# 접근성 — prefers-reduced-motion 폴백
grep -q 'prefers-reduced-motion' "$HTML" || { echo "⚠ reduced-motion 폴백 누락"; }

# 한국어 keep-all
if grep -qE '[가-힣]' "$HTML" && ! grep -q 'word-break:\s*keep-all' "$HTML"; then
  echo "⚠ 한국어 포함인데 word-break: keep-all 누락"
fi

if [ $FAIL -eq 0 ]; then
  echo "✅ apple-canvas QC PASS"
else
  echo "=== ❌ FAIL: $FAIL 위반 ==="
  exit 1
fi
