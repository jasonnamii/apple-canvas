# Tone — Dark

## 배경·텍스트
- 배경: `#000000` (순흑) 또는 `#1D1D1F` (애플 다크 차콜)
- 본문: `#F5F5F7`
- 헤드: `#FFFFFF` (화이트·900 웨이트)
- 보조: `#F5F5F7 + alpha 0.7`

## 액센트 (다크 전용)
다크 배경에 채도 높은 액센트:
- 블루: `#2997FF` (애플 다크 블루)
- 그린: `#30D158`
- 오렌지: `#FF9F0A`
- 레드: `#FF453A`
- 퍼플: `#BF5AF2`
- 핑크: `#FF375F`

## 형광펜
배경 `rgba(41,151,255,0.25)` + 본문 그대로 (화이트·900).

## 박스 라운드
디폴트 32~40px.

## CSS 변수
```css
:root[data-theme="dark"] {
  --bg: #000000;
  --bg-alt: #1D1D1F;
  --text: #F5F5F7;
  --headline: #FFFFFF;
  --accent-blue: #2997FF;
  --accent-green: #30D158;
  --accent-orange: #FF9F0A;
  --accent-red: #FF453A;
  --accent-purple: #BF5AF2;
  --accent-pink: #FF375F;
  --highlight: rgba(41,151,255,0.25);
  --radius-tile: 36px;
}
```
