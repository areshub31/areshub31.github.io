
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let letters = Array(256).join(" ").split("");
let characters = "A R E S ".split("");

setInterval(() => {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0F0";
  letters = letters.map((y, index) => {
    const text = characters[Math.floor(Math.random() * characters.length)];
    const x = index * 10;
    ctx.fillText(text, x, y);
    return y > 100 + Math.random() * 10000 ? 0 : y + 10;
  });
}, 50);
