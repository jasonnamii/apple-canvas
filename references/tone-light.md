# Tone — Light

## 배경·텍스트
- 배경: `#FFFFFF` (순백) 또는 `#F5F5F7` (애플 라이트 회백)
- 본문: `#1D1D1F` (애플 다크 차콜)
- 헤드: `#000000` (블랙·900 웨이트)
- 보조: `#1D1D1F + alpha 0.7` (회색 대신 알파)

## 액센트 (라이트 전용)
라이트 배경에 다크 액센트를 그대로 쓰면 칙칙함. 라이트용 액센트:
- 블루: `#0071E3` (애플 액션 블루)
- 그린: `#00845A`
- 오렌지: `#CA6B07`
- 레드: `#BF4800`
- 퍼플: `#5E5CE6`
- 핑크: `#D74A78`

## 형광펜
배경 `rgba(0,113,227,0.15)` + 본문 그대로 (블랙·900).

## 박스 라운드
디폴트 32~40px (애플 위젯 톤).

## CSS 변수
```css
:root[data-theme="light"] {
  --bg: #FFFFFF;
  --bg-alt: #F5F5F7;
  --text: #1D1D1F;
  --headline: #000000;
  --accent-blue: #0071E3;
  --accent-green: #00845A;
  --accent-orange: #CA6B07;
  --accent-red: #BF4800;
  --accent-purple: #5E5CE6;
  --accent-pink: #D74A78;
  --highlight: rgba(0,113,227,0.15);
  --radius-tile: 36px;
}
```
