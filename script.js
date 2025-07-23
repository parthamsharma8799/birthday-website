let currentSection = 1;

function showNextSection() {
  const current = document.getElementById(`section${currentSection}`);
  const next = document.getElementById(`section${currentSection + 1}`);
  if (next) {
    current.classList.add('hidden');
    next.classList.remove('hidden');
    currentSection++;
  }
}

// 🎊 Confetti Animation
function showConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  canvas.classList.remove('hidden');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let pieces = [];

  for (let i = 0; i < 200; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      radius: Math.random() * 6 + 4,
      color: `hsl(${Math.random() * 360}, 100%, 60%)`,
      velocity: Math.random() * 3 + 2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let p of pieces) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.y += p.velocity;

      if (p.y > canvas.height) {
        p.y = 0;
        p.x = Math.random() * canvas.width;
      }
    }
    requestAnimationFrame(draw);
  }

  draw();
}
