const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confettiParticles = [];
let confettiAnimation;

function initConfetti() {
  confettiParticles = [];
  const particleCount = 150;
  for (let i = 0; i < particleCount; i++) {
    confettiParticles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * Math.PI * 2,
      tilt: Math.floor(Math.random() * 10) - 10,
      tiltAngleIncremental: (Math.random() * 0.07) + 0.05,
      tiltAngle: 0,
      color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.8)`
    });
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettiParticles.forEach(p => {
    ctx.beginPath();
    ctx.lineWidth = p.r;
    ctx.strokeStyle = p.color;
    ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
    ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
    ctx.stroke();
  });
  updateConfetti();
}

function updateConfetti() {
  confettiParticles.forEach(p => {
    p.tiltAngle += p.tiltAngleIncremental;
    p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
    p.x += Math.sin(p.d);
    p.tilt = Math.sin(p.tiltAngle) * 15;
    
    if (p.x > canvas.width + 20 || p.x < -20 || p.y > canvas.height) {
      p.x = Math.random() * canvas.width;
      p.y = -10;
    }
  });
}

function animateConfetti() {
  drawConfetti();
  confettiAnimation = requestAnimationFrame(animateConfetti);
}

function startConfettiEffect() {
  initConfetti();
  animateConfetti();
  setTimeout(stopConfettiEffect, 5000);
}

function stopConfettiEffect() {
  cancelAnimationFrame(confettiAnimation);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
