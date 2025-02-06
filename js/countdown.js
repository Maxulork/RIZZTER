function updateCountdown() {
  const countdownElement = document.getElementById('timer');
  const targetDate = new Date('April 20, 2025 00:00:00').getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;
  
  if (distance < 0) {
    countdownElement.innerHTML = "Happy Easter!";
    return;
  }
  
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

