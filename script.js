const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01SANTUM";
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = Array(Math.floor(columns)).fill(1);

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#FFA500";
  ctx.shadowColor = "#FFA500";
  ctx.shadowBlur = 8;
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.97) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 33);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
// ===== DISCORD BUTTON ANIMATION =====
const discordBtn = document.querySelector(".discord-btn");
const overlay = document.getElementById("overlay");

if (discordBtn) {
  discordBtn.addEventListener("click", function (e) {
    e.preventDefault();

    overlay.classList.add("active");

    setTimeout(() => {
      window.open("https://discord.gg/santum", "_blank");
      overlay.classList.remove("active");
    }, 500);
  });
});
