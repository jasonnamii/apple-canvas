# QC — 7층 체크리스트

송출 직전 자가 검사. 1+개 위반 = STOP + 재작성.

## 7층 스코어카드

| # | 층 | 체크 항목 | 위반 시 |
|---|---|---|---|
| 1 | 헌법 | H1~H7 모두 통과 | FAIL |
| 2 | 모드 | 형에게 모드(스크롤/Bento/Mix) 질문했나 | 경고 |
| 3 | 스크롤 | 비디오·스티키·핀 1+개 (스크롤 모드) | FAIL |
| 4 | 데이터 | Bento·Compare·Big Number 1+개 | 경고 |
| 5 | 인터랙션 | Tile-BOC·Drawer·Swatch·Hover 1+개 | 경고 |
| 6 | 접근성 | aria-label 100% + reduced-motion 분기 | FAIL |
| 7 | 타이포 | 16단계 시맨틱+시각 이중 클래스 | 경고 |

## 자동 검증 스크립트

```bash
#!/bin/bash
FILE=$1

# H1 듀얼 톤
if ! grep -q 'theme-light\|theme-dark' "$FILE"; then echo "❌ H1: theme 클래스 없음"; fi

# H7 접근성
ARIA_COUNT=$(grep -c 'aria-label' "$FILE")
if [ "$ARIA_COUNT" -lt 5 ]; then echo "❌ H7: aria-label 5개 미만"; fi

if ! grep -q 'prefers-reduced-motion' "$FILE"; then echo "❌ H7: reduced-motion 분기 없음"; fi

# H4 스크롤
if grep -q 'scaffold-scroll' "$FILE" && ! grep -qE 'sticky|inline-media-play|parallax' "$FILE"; then
  echo "❌ H4: 스크롤 모드인데 서사 장치 없음"
fi

# H5 데이터
if ! grep -qE 'bento|compare|big-number|headline-super' "$FILE"; then
  echo "⚠️ H5: 데이터 시각화 패턴 없음"
fi

echo "✅ QC 통과"
```

## 송출 게이트
형에게 질문:
"🔍 송출 전 검토 부탁드려요. 모드는 [스크롤/Bento/Mix], 톤은 [라이트/다크/듀얼]. 7층 QC 통과. [OK / 수정 / 재작성]"
