const carousel  = document.querySelector('.carousel');
const list      = carousel.querySelector('.list');
const nextBtn   = document.getElementById('next');
const prevBtn   = document.getElementById('prev');
const backBtn   = document.getElementById('back');
const counter   = document.querySelector('.mn-counter');
const catTag    = document.querySelector('.mn-cat-tag');
const total     = list.querySelectorAll('.item').length;
let debounce;
let isAnimating = false;
let touchStartX = 0;
let touchStartY = 0;
let touchCurrentX = 0;
let hasTriggeredSwipe = false;
let swipeDirectionLocked = false;
let wheelAccum = 0;

const NAV_LOCK_MS = 900;
const WHEEL_TRIGGER = 80;
const SWIPE_TRIGGER = 45;

const CAT_COLORS = { matcha: '#6AAB5E', coffee: '#D4A847', food: '#D4A847' };
const CAT_LABELS = { matcha: 'Matcha', coffee: 'Coffee', food: 'Food' };

function getActiveItem() {
  return list.querySelector('.item:nth-child(2)');
}

function syncUI() {
  const active  = getActiveItem();
  const cat     = active.dataset.cat;
  const idx     = parseInt(active.dataset.idx, 10);

  carousel.style.setProperty('--glow-color', CAT_COLORS[cat] || '#6AAB5E');
  if (counter) counter.textContent = `${idx} / ${total}`;
  if (catTag)  catTag.textContent  = CAT_LABELS[cat] || '';
}

function showSlider(type) {
  if (isAnimating) return;
  if (carousel.classList.contains('showDetail')) return;
  isAnimating = true;

  carousel.classList.remove('next', 'prev');

  const items = list.querySelectorAll('.item');
  if (type === 'next') {
    list.appendChild(items[0]);
    carousel.classList.add('next');
  } else {
    list.prepend(items[items.length - 1]);
    carousel.classList.add('prev');
  }

  syncUI();

  clearTimeout(debounce);
  debounce = setTimeout(() => {
    isAnimating = false;
  }, NAV_LOCK_MS);
}

nextBtn.addEventListener('click', () => showSlider('next'));
prevBtn.addEventListener('click', () => showSlider('prev'));

document.querySelectorAll('.seeMore').forEach(btn => {
  btn.addEventListener('click', () => {
    carousel.classList.remove('next', 'prev');
    carousel.classList.add('showDetail');
  });
});

backBtn.onclick = () => carousel.classList.remove('showDetail');

/* nth-child(2) is the active slot — move last item to front so item 1 is active on load */
const initItems = list.querySelectorAll('.item');
list.prepend(initItems[initItems.length - 1]);

/* keyboard navigation */
document.addEventListener('keydown', e => {
  if (carousel.classList.contains('showDetail')) {
    if (e.key === 'Escape') carousel.classList.remove('showDetail');
  } else {
    if (e.key === 'ArrowRight') showSlider('next');
    if (e.key === 'ArrowLeft')  showSlider('prev');
  }
});

/* wheel navigation */
carousel.addEventListener('wheel', e => {
  if (carousel.classList.contains('showDetail') || isAnimating) return;

  wheelAccum += Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
  if (Math.abs(wheelAccum) < WHEEL_TRIGGER) return;

  e.preventDefault();
  showSlider(wheelAccum > 0 ? 'next' : 'prev');
  wheelAccum = 0;
}, { passive: false });

/* touch swipe navigation */
carousel.addEventListener('touchstart', e => {
  const touch = e.changedTouches[0];
  touchStartX = touch.clientX;
  touchStartY = touch.clientY;
  touchCurrentX = touch.clientX;
  hasTriggeredSwipe = false;
  swipeDirectionLocked = false;
}, { passive: true });

carousel.addEventListener('touchmove', e => {
  if (carousel.classList.contains('showDetail') || isAnimating || hasTriggeredSwipe) return;

  const touch = e.changedTouches[0];
  touchCurrentX = touch.clientX;
  const diffX = touchCurrentX - touchStartX;
  const diffY = touch.clientY - touchStartY;

  if (!swipeDirectionLocked) {
    if (Math.abs(diffX) > 8 || Math.abs(diffY) > 8) {
      swipeDirectionLocked = Math.abs(diffX) > Math.abs(diffY);
    } else {
      return;
    }
  }

  if (!swipeDirectionLocked) return;

  e.preventDefault();
  if (Math.abs(diffX) < SWIPE_TRIGGER) return;

  showSlider(diffX < 0 ? 'next' : 'prev');
  hasTriggeredSwipe = true;
}, { passive: false });

carousel.addEventListener('touchend', e => {
  if (carousel.classList.contains('showDetail') || isAnimating) return;
  if (hasTriggeredSwipe) return;

  const touch = e.changedTouches[0];
  const diffX = touch.clientX - touchStartX;
  const diffY = touch.clientY - touchStartY;
  if (Math.abs(diffX) < SWIPE_TRIGGER || Math.abs(diffX) < Math.abs(diffY)) return;

  showSlider(diffX < 0 ? 'next' : 'prev');
}, { passive: true });

carousel.addEventListener('touchcancel', () => {
  hasTriggeredSwipe = false;
  swipeDirectionLocked = false;
}, { passive: true });

syncUI();