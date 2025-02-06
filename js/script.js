const joinBtn = document.getElementById('joinBtn');
const banner = document.getElementById('banner');

joinBtn.addEventListener('click', function() {
  banner.classList.add('show');
  // Запуск конфетті
  startConfettiEffect();
});

// При кліку на банер — його приховуємо
banner.addEventListener('click', function() {
  banner.classList.remove('show');
});
