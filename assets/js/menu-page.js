const carousel  = document.querySelector('.carousel');
const list      = carousel.querySelector('.list');
const nextBtn   = document.getElementById('next');
const prevBtn   = document.getElementById('prev');
const backBtn   = document.getElementById('back');
const counter   = document.querySelector('.mn-counter');
const catTag    = document.querySelector('.mn-cat-tag');
const total     = list.querySelectorAll('.item').length;
let debounce;

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
  nextBtn.style.pointerEvents = 'none';
  prevBtn.style.pointerEvents = 'none';

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
    nextBtn.style.pointerEvents = 'auto';
    prevBtn.style.pointerEvents = 'auto';
  }, 2000);
}

nextBtn.onclick = () => showSlider('next');
prevBtn.onclick = () => showSlider('prev');

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

syncUI();
