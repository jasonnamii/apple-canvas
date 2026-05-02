# Forbidden — 절대 금지 카탈로그

## 색상
- ❌ 회색 텍스트 (`#888`, `#999`, `gray`) — alpha로 대체
- ❌ 한 페이지 3+개 액센트 색상 (산만)
- ❌ 라이트 배경에 다크 액센트 직사용 (칙칙)
- ❌ 다크 배경에 라이트 액센트 직사용 (눈부심)

## 타이포
- ❌ 모든 헤딩 `<h1>` (16단계 무시)
- ❌ 헤딩 웨이트 <700 (애플 본질 X)
- ❌ 본문 웨이트 ≥600 (가독성 ✗)
- ❌ 한국어에 SF Pro만 (Pretendard 누락 = FAIL)
- ❌ Pretendard CDN 임포트 누락 (폰트 미로드 시 시스템 폰트 폴백·애플 톤 무너짐)
- ❌ `--font-kr` 첫 폰트가 Pretendard 아님 = FAIL
- ❌ 폰트 12px 미만

## 레이아웃
- ❌ Bento 박스 6+개 (산만)
- ❌ 박스 라운드 없음 (애플 톤 X)
- ❌ Compare 매트릭스 sticky 헤더 없음 (스크롤 시 비교 불가)
- ❌ 12열 그리드 ✗ (반응형 부서짐)

## 모션
- ❌ `IntersectionObserver` 단순 토글만 (애플 본질 X)
- ❌ 단순 fade-in (서사 장치 X)
- ❌ scroll event 무한 호출 (성능 ✗) — RAF/throttle 필수

## 인터랙션
- ❌ `<details><summary>` 디폴트 (애플 톤 X) — Tile-BOC 사용
- ❌ 모달 새 페이지 이동 (Drawer 본질 위반)
- ❌ Color Swatch 키보드 네비 ✗ (접근성 위반)

## 접근성 (즉시 FAIL)
- ❌ `aria-label` 누락
- ❌ `prefers-reduced-motion` 분기 누락
- ❌ `role="dialog"` 모달에 `aria-modal` 누락
- ❌ 컬러 콘트라스트 4.5:1 미만

## 시스템
- ❌ 인라인 스타일 남발 (`style="…"`)
- ❌ `!important` 5+개
- ❌ 외부 폰트 CDN 직접 (CLS 발생)
