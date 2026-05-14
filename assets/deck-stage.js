/**
 * Apple Canvas — deck-stage.js v1.0
 * 스크롤 = 슬라이드 전환. 발표용 100vh snap.
 *
 * 사용법:
 *   <script type="module" src="deck-stage.js"></script>
 *   <body data-deck>
 *     <section data-stage>슬라이드 1</section>
 *     <section data-stage>슬라이드 2</section>
 *   </body>
 */

(function () {
  'use strict';
  
  if (!document.body.hasAttribute('data-deck')) return;
  
  // 1. 슬라이드 100vh + scroll-snap
  const style = document.createElement('style');
  style.textContent = `
    [data-deck] { scroll-snap-type: y mandatory; overflow-y: scroll; height: 100vh; }
    [data-stage] { scroll-snap-align: start; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 48px; box-sizing: border-box; }
    @media (prefers-reduced-motion: reduce) {
      [data-deck] { scroll-snap-type: none; scroll-behavior: auto; }
    }
  `;
  document.head.appendChild(style);
  
  // 2. 키보드 네비 (↑↓ ←→ Space)
  const stages = Array.from(document.querySelectorAll('[data-stage]'));
  let current = 0;
  
  function goto(idx) {
    current = Math.max(0, Math.min(stages.length - 1, idx));
    stages[current].scrollIntoView({ behavior: 'smooth' });
    document.body.dataset.currentStage = current;
  }
  
  document.addEventListener('keydown', (e) => {
    if (['ArrowDown', 'ArrowRight', ' ', 'PageDown'].includes(e.key)) {
      e.preventDefault();
      goto(current + 1);
    } else if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(e.key)) {
      e.preventDefault();
      goto(current - 1);
    } else if (e.key === 'Home') {
      goto(0);
    } else if (e.key === 'End') {
      goto(stages.length - 1);
    }
  });
  
  // 3. 진행 인디케이터 (DotNav)
  const dotnav = document.createElement('nav');
  dotnav.className = 'deck-dotnav';
  dotnav.setAttribute('aria-label', '슬라이드 네비게이션');
  // SAFE-innerHTML: static template, only index `i` interpolated. No user input. XSS-safe.
  dotnav.innerHTML = stages.map((_, i) =>
    `<button class="deck-dotnav-item" data-stage-idx="${i}" aria-label="슬라이드 ${i + 1}"></button>`
  ).join('');
  document.body.appendChild(dotnav);
  
  const dotStyle = document.createElement('style');
  dotStyle.textContent = `
    .deck-dotnav { position: fixed; right: 32px; top: 50%; transform: translateY(-50%); display: flex; flex-direction: column; gap: 12px; z-index: 100; }
    .deck-dotnav-item { width: 8px; height: 8px; border-radius: 50%; background: rgba(128,128,128,0.4); border: none; cursor: pointer; transition: background 200ms, transform 200ms; padding: 0; }
    .deck-dotnav-item:hover { transform: scale(1.4); }
    body[data-current-stage="0"] .deck-dotnav-item:nth-child(1),
    body[data-current-stage="1"] .deck-dotnav-item:nth-child(2),
    body[data-current-stage="2"] .deck-dotnav-item:nth-child(3),
    body[data-current-stage="3"] .deck-dotnav-item:nth-child(4),
    body[data-current-stage="4"] .deck-dotnav-item:nth-child(5),
    body[data-current-stage="5"] .deck-dotnav-item:nth-child(6),
    body[data-current-stage="6"] .deck-dotnav-item:nth-child(7),
    body[data-current-stage="7"] .deck-dotnav-item:nth-child(8) { background: var(--accent-blue, #2997FF); transform: scale(1.4); }
  `;
  document.head.appendChild(dotStyle);
  
  dotnav.addEventListener('click', (e) => {
    const btn = e.target.closest('.deck-dotnav-item');
    if (btn) goto(+btn.dataset.stageIdx);
  });
  
  // 4. 현재 슬라이드 추적
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.intersectionRatio > 0.5) {
        const idx = stages.indexOf(e.target);
        if (idx !== -1) {
          current = idx;
          document.body.dataset.currentStage = current;
        }
      }
    });
  }, { threshold: 0.5 });
  stages.forEach(s => obs.observe(s));
  
  document.body.dataset.currentStage = 0;
  console.log(`[apple-canvas/deck-stage.js] ${stages.length}개 슬라이드 로드`);
})();
