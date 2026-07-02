const title = document.getElementById("title");
const message = document.getElementById("message");
const button = document.getElementById("beginBtn");
const starsLayer = document.getElementById("stars");

function createStars(count = 120) {
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDelay = Math.random() * 3 + "s";
    star.style.width = Math.random() * 2 + 1 + "px";
    star.style.height = star.style.width;
    starsLayer.appendChild(star);
  }
}

createStars();

button.style.display = "none";

setTimeout(() => {
  title.textContent = "Every great story has a first page.";
  title.style.opacity = 1;
}, 1000);

setTimeout(() => {
  message.textContent = "Mine began at a dissection table.";
  message.style.opacity = 1;
}, 3500);

setTimeout(() => {
  button.style.display = "inline-block";
  requestAnimationFrame(() => {
    button.style.opacity = 1;
  });
}, 6000);
